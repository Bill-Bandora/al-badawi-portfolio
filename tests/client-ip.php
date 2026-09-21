<?php
require '/var/www/html/api/client-ip.php';
$proxy = '172.18.0.5';
$tunnel = '172.18.0.1';
$cases = [
    [['REMOTE_ADDR' => '203.0.113.1', 'HTTP_CF_CONNECTING_IP' => '198.51.100.1'], '203.0.113.1'],
    [['REMOTE_ADDR' => $proxy, 'HTTP_X_FORWARDED_FOR' => '198.51.100.9, 203.0.113.1', 'HTTP_CF_CONNECTING_IP' => '198.51.100.2'], '203.0.113.1'],
    [['REMOTE_ADDR' => $proxy, 'HTTP_X_FORWARDED_FOR' => 'spoofed, ' . $tunnel, 'HTTP_CF_CONNECTING_IP' => '198.51.100.3'], '198.51.100.3'],
    [['REMOTE_ADDR' => $proxy, 'HTTP_X_FORWARDED_FOR' => $tunnel, 'HTTP_CF_CONNECTING_IP' => '198.51.100.4'], '198.51.100.4'],
    [['REMOTE_ADDR' => $proxy, 'HTTP_X_FORWARDED_FOR' => $tunnel, 'HTTP_CF_CONNECTING_IP' => 'invalid'], $tunnel],
    [['REMOTE_ADDR' => $proxy, 'HTTP_X_FORWARDED_FOR' => 'bad'], $proxy],
    [['REMOTE_ADDR' => '203.0.113.5', 'HTTP_X_REAL_IP' => '198.51.100.8', 'HTTP_X_FORWARDED_FOR' => $tunnel], '203.0.113.5'],
];
foreach ($cases as [$request, $expected]) {
    if (contactClientIp($request, $proxy, $tunnel) !== $expected) { exit(1); }
}
echo "PASS: client IP trust boundaries (7 cases)\n";
