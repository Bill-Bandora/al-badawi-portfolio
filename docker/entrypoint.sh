#!/bin/sh
set -eu

# Secrets are generated only at runtime, never during the image build.
install -d -o root -g www-data -m 0750 /run/msmtp
php <<'PHP'
<?php
function required(string $name): string {
    $value = getenv($name);
    if ($value === false || $value === '' || preg_match('/[\x00-\x1f\x7f]/', $value)) {
        file_put_contents('php://stderr', "Missing or invalid runtime variable: $name\n");
        exit(1);
    }
    return $value;
}
$names = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASSWORD', 'SMTP_FROM', 'CONTACT_RECIPIENT'];
$complete = count(array_filter($names, static fn($name) => getenv($name) !== false && getenv($name) !== '')) === count($names);
if (!$complete) {
    // Remove stale credentials if the container is restarted without SMTP.
    foreach (['/run/msmtp/config', '/run/msmtp/password'] as $file) {
        if (is_file($file)) { unlink($file); }
    }
    file_put_contents('php://stderr', "SMTP not configured; contact form uses mailto fallback.\n");
    exit(0);
}
$host = required('SMTP_HOST');
$port = required('SMTP_PORT');
$user = required('SMTP_USER');
$password = required('SMTP_PASSWORD');
$from = required('SMTP_FROM');
$recipient = required('CONTACT_RECIPIENT');
if (!ctype_digit($port) || (int)$port < 1 || (int)$port > 65535
    || !filter_var($from, FILTER_VALIDATE_EMAIL)
    || !filter_var($recipient, FILTER_VALIDATE_EMAIL)) {
    file_put_contents('php://stderr', "Invalid SMTP port or mail address configuration\n");
    exit(1);
}
$quote = static fn(string $s): string => '"' . str_replace(['\\', '"'], ['\\\\', '\\"'], $s) . '"';
$config = "defaults\nauth on\ntls on\ntls_trust_file /etc/ssl/certs/ca-certificates.crt\ntimeout 15\n";
$config .= "account default\nhost " . $quote($host) . "\nport $port\nuser " . $quote($user);
$config .= "\nfrom " . $quote($from) . "\nallow_from_override off\n";
$config .= 'passwordeval "cat /run/msmtp/password"' . "\n";
$config .= 'tls_starttls ' . ((int)$port === 465 ? 'off' : 'on') . "\n";
umask(0077);
if (file_put_contents('/run/msmtp/password', $password . "\n") === false
    || file_put_contents('/run/msmtp/config', $config) === false) {
    exit(1);
}
PHP
if [ -f /run/msmtp/config ]; then
    chown root:www-data /run/msmtp/config /run/msmtp/password
    chmod 0640 /run/msmtp/config /run/msmtp/password
fi
exec docker-php-entrypoint "$@"
