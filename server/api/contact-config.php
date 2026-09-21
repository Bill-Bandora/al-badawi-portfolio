<?php
declare(strict_types=1);
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    http_response_code(405);
    echo json_encode(['ok' => false]);
    exit;
}
// Expose only availability, never SMTP values or credentials.
echo json_encode(['mode' => is_readable('/run/msmtp/config') ? 'php' : 'mailto']);
