<?php
declare(strict_types=1);

/** Trust exact proxy/connector addresses only; never entire private subnets. */
function contactClientIp(array $server, string $proxies, string $connectors): string {
    $valid = static fn(string $ip): bool => filter_var($ip, FILTER_VALIDATE_IP) !== false;
    $listed = static function (string $ip, string $list) use ($valid): bool {
        foreach (explode(',', $list) as $candidate) {
            $candidate = trim($candidate);
            if ($valid($candidate) && $valid($ip) && inet_pton($candidate) === inet_pton($ip)) {
                return true;
            }
        }
        return false;
    };
    $peer = (string)($server['REMOTE_ADDR'] ?? '');
    if (!$valid($peer)) { return 'unknown'; }
    if (!$listed($peer, $proxies)) { return $peer; }

    // Traefik appends its actual TCP peer as the final XFF element.
    // Ignore every earlier (potentially client-controlled) element.
    $chain = explode(',', (string)($server['HTTP_X_FORWARDED_FOR'] ?? ''));
    $upstream = trim((string)end($chain));
    if (!$valid($upstream)) { return $peer; }
    $cloudflare = (string)($server['HTTP_CF_CONNECTING_IP'] ?? '');
    if ($listed($upstream, $connectors) && $valid($cloudflare)) {
        return $cloudflare;
    }
    return $upstream;
}
