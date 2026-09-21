#!/usr/bin/env python3
"""Local single-container smoke test. Sends no real email."""
import json
from concurrent.futures import ThreadPoolExecutor
import pathlib
import re
import subprocess
import sys
import tempfile
import time
import urllib.error
import urllib.request


def docker(*args):
    return subprocess.check_output(['docker', *args], text=True).strip()


image = sys.argv[1] if len(sys.argv) > 1 else 'al-badawi-portfolio:local'
with tempfile.TemporaryDirectory(prefix='portfolio-smoke-') as directory:
    root = pathlib.Path(directory)
    root.chmod(0o755)
    capture = root / 'capture-mail'
    capture.write_text('#!/bin/sh\ncat > /tmp/captured-mail\n')
    capture.chmod(0o755)
    ini = root / 'test.ini'
    ini.write_text('sendmail_path="/usr/local/bin/capture-mail -t"\n')
    ini.chmod(0o644)
    cid = docker('run', '-d', '--rm', '-p', '127.0.0.1::80',
                 '-e', 'SMTP_HOST=smtp.invalid', '-e', 'SMTP_PORT=587',
                 '-e', 'SMTP_USER=test-user', '-e', 'SMTP_PASSWORD=test-"$\\ secret',
                 '-e', 'SMTP_FROM=sender@example.test',
                 '-e', 'CONTACT_RECIPIENT=recipient@example.test',
                 '-v', f'{capture}:/usr/local/bin/capture-mail:ro',
                 '-v', f'{ini}:/usr/local/etc/php/conf.d/zz-test.ini:ro', image)
    try:
        port = json.loads(docker('inspect', cid))[0]['NetworkSettings']['Ports']['80/tcp'][0]['HostPort']
        base = f'http://127.0.0.1:{port}'

        def request(path, data=None, headers=None):
            req = urllib.request.Request(base + path,
                data=json.dumps(data).encode() if data is not None else None,
                headers={'Content-Type': 'application/json', **(headers or {})})
            try:
                response = urllib.request.urlopen(req, timeout=10)
            except urllib.error.HTTPError as error:
                response = error
            with response:
                return response.status, response.read().decode(), response.headers

        for attempt in range(50):
            try:
                if request('/')[0] == 200:
                    break
            except OSError:
                pass
            time.sleep(0.2)
        else:
            raise AssertionError('Apache did not become ready')

        home = request('/')[1]
        for route in ['/de/kontakt', '/en/services', '/ar/projects', '/de/unknown']:
            assert request(route)[:2] == (200, home)
        for asset in re.findall(r'(?:src|href)="(/assets/[^"]+)"', home):
            assert request(asset)[0] == 200
        for asset in ['/favicon.svg', '/robots.txt', '/sitemap.xml']:
            assert request(asset)[0] == 200
        assert json.loads(request('/api/contact-config.php')[1]) == {'mode': 'php'}
        assert request('/api/missing.php')[0] == 404
        assert request('/assets/missing.js')[0] == 404
        status, body, _ = request('/api/contact.php')
        assert status == 405 and json.loads(body)['ok'] is False
        assert request('/api/contact.php', {'website': 'bot'})[0] == 200
        assert request('/api/contact.php', {'startedAt': int(time.time() * 1000)})[0] == 429
        assert request('/api/contact.php', {'startedAt': 1})[0] == 422
        valid = {'name': 'Test Visitor', 'email': 'visitor@example.test',
                 'projectType': 'Website', 'message': 'A sufficiently long project message.',
                 'privacy': True, 'website': '', 'startedAt': 1}
        assert request('/api/contact.php', {**valid, 'email': 'invalid'})[0] == 422
        for _ in range(5):
            status, body, _ = request('/api/contact.php', valid)
            assert status == 200 and json.loads(body)['ok'] is True
        status, _, headers = request('/api/contact.php', valid,
                                     {'X-Forwarded-For': '203.0.113.99'})
        assert status == 429 and 0 < int(headers['Retry-After']) <= 900
        mail = docker('exec', cid, 'cat', '/tmp/captured-mail')
        assert 'To: recipient@example.test' in mail
        assert 'From: sender@example.test' in mail
        assert 'Reply-To: visitor@example.test' in mail
        assert docker('exec', cid, 'php', '-r', 'echo extension_loaded("mbstring") ? "yes" : "no";') == 'yes'
        for binary in ['node', 'nodejs', 'npm', 'npx', 'vitest']:
            assert docker('exec', cid, 'sh', '-c', f'command -v {binary} || true') == ''
        assert docker('exec', cid, 'sh', '-c',
            'find /var/www /usr/local /usr/bin /opt -name node -o -name nodejs -o -name npm -o -name npx -o -name vitest') == ''
        assert docker('exec', cid, 'stat', '-c', '%a %U:%G', '/run/msmtp/password') == '640 root:www-data'
        docker('exec', '-u', 'www-data', cid, 'msmtp', '--file=/run/msmtp/config',
               '--pretend', '--account=default', 'recipient@example.test')
        docker('exec', '-u', 'www-data', cid, 'sh', '-c',
               'printf "{}" > /var/lib/contact/rate-limit.json')
        with ThreadPoolExecutor(max_workers=10) as pool:
            results = list(pool.map(lambda _: request('/api/contact.php', valid)[0], range(10)))
        assert results.count(200) == 5 and results.count(429) == 5, results
        # Exercise PHP mail() failure without contacting SMTP.
        docker('exec', '-u', 'www-data', cid, 'sh', '-c',
               'printf "{}" > /var/lib/contact/rate-limit.json; rm /tmp/captured-mail; mkdir /tmp/captured-mail')
        assert request('/api/contact.php', valid)[0] == 500
        # Rate-limit storage failure must not bypass throttling.
        docker('exec', '-u', 'www-data', cid, 'sh', '-c',
               'printf "broken" > /var/lib/contact/rate-limit.json')
        assert request('/api/contact.php', valid)[0] == 503
        print('PASS: SPA/API routing, PHP/mbstring, honeypot, timing, validation,')
        print('      mail headers, IP limit/spoof protection, mail/storage failures,')
        print('      msmtp config/permissions and no Node runtime.')
    finally:
        docker('rm', '-f', cid)

# Start the same image with no SMTP variables: website and explicit fallback work.
cid = docker('run', '-d', '--rm', '-p', '127.0.0.1::80', image)
try:
    port = json.loads(docker('inspect', cid))[0]['NetworkSettings']['Ports']['80/tcp'][0]['HostPort']
    base = f'http://127.0.0.1:{port}'
    for attempt in range(50):
        try:
            with urllib.request.urlopen(base + '/api/contact-config.php', timeout=5) as response:
                assert json.load(response) == {'mode': 'mailto'}
                break
        except OSError:
            time.sleep(0.2)
    else:
        raise AssertionError('SMTP-free startup failed')
    with urllib.request.urlopen(base + '/de/kontakt') as response:
        assert response.status == 200
    print('PASS: startup without SMTP and runtime mailto fallback.')
finally:
    docker('rm', '-f', cid)
