# Single-container Docker deployment

Build with `docker build -t al-badawi-portfolio:local .`. The Node 22 build
stage runs `npm ci` and builds with `VITE_CONTACT_MODE=php`. The runtime is
`php:8.3-apache` with mbstring and msmtp, serving the compiled `dist` on port 80.
There is no Node runtime, mail daemon, database or separate API service.

For a future Coolify deployment, choose Dockerfile and container port 80.
Configure these variables as **runtime-only** environment variables (not build
arguments); mark the password secret in Coolify:

- `SMTP_HOST`: SMTP server hostname
- `SMTP_PORT`: 587 for STARTTLS or 465 for implicit TLS
- `SMTP_USER`: SMTP authentication username
- `SMTP_PASSWORD`: SMTP authentication password
- `SMTP_FROM`: single validated sender address (also the envelope sender)
- `CONTACT_RECIPIENT`: single validated recipient address

If any variable is missing, Apache still starts and `/api/contact-config.php`
reports `mailto`. The React form displays the localized mailto notice and opens
the existing public contact address in the user's email client. No fake credentials
are configured. With all six valid variables set, the same image switches to PHP
mail delivery after restart. TLS certificate verification is always enabled.
The entrypoint generates root-owned, www-data-readable configuration and password
files in `/run/msmtp` (directory 0750, files 0640). No credentials are build args
or image contents; do not commit env files or pass secrets during Docker builds.
`mail()` invokes msmtp synchronously, with a 15-second SMTP timeout. Reply-To is
the validated visitor address. No queue or SMTP daemon runs in the container.

Apache serves static assets and falls back to `index.html` for React routes.
`/api/*` bypasses the fallback; missing APIs return 404. Existing honeypot,
minimum form-fill time and field validation remain in place.

The API allows five validated submission attempts per TCP-peer IP in 15 minutes,
including failed mail attempts. It uses one locked, bounded file outside the web
root at `/var/lib/contact/rate-limit.json`. Expired entries are removed on access;
at most 10,000 active IP records are retained. A normal restart retains the file,
but container replacement resets it. No database or persistent volume is required.

**Reverse proxies:** `TRUSTED_PROXY_IPS` is a comma-separated list of exact
Coolify proxy IPs; `TRUSTED_TUNNEL_IPS` lists the connector peer addresses that
Traefik observes. Both default to empty (trust no forwarding headers). The API
trusts `CF-Connecting-IP` only if `REMOTE_ADDR` is an approved proxy AND the final
`X-Forwarded-For` element appended by Traefik is an approved connector. Otherwise
it uses the final XFF peer from a trusted proxy, or the direct TCP peer. Earlier
XFF elements and `X-Real-IP` are never trusted. Do not use private-network wildcards.

Before public routing, verify the actual headers through Cloudflare -> tunnel ->
Coolify proxy and test a direct request with forged headers. Only then set these
addresses in the application's runtime variables. Revalidate if proxy addresses
change; a mismatch fails safely to a shared peer limit. The application needs no
published host port. Do not enable Traefik's insecure forwarded-header trust.

## Checks

```
npm ci
npm audit --omit=dev
npm run lint
npm run typecheck
npm test
VITE_CONTACT_MODE=php npm run build
docker build -t al-badawi-portfolio:local .
python3 tests/docker-smoke.py al-badawi-portfolio:local
```

The smoke test runs one temporary application container on a random loopback
port. It substitutes a local mail capture program for PHP's sendmail command,
so no real mail or external SMTP connection occurs. It checks routing, PHP,
validation, honeypot, rate limiting, headers, secret file permissions and the
absence of Node. The container is removed afterwards. A real SMTP delivery test
requires provider credentials and is intentionally not part of these checks.

The runtime includes a local HTTP healthcheck. Configure the Coolify application
with restart `unless-stopped`/`always`, bounded Docker log rotation and its normal
proxy routing on internal port 80. `al-badawi-site` is the legacy GitHub Pages
output repository and is not the source for this deployment.
