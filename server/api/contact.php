<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'message' => 'Method not allowed']);
    exit;
}

$raw = file_get_contents('php://input');
$data = json_decode($raw ?: '', true);
if (!is_array($data)) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'message' => 'Invalid request']);
    exit;
}

function value(array $data, string $key, int $max): string {
    $text = is_string($data[$key] ?? null) ? trim($data[$key]) : '';
    $text = str_replace(["\r", "\n"], ' ', $text);
    return mb_substr($text, 0, $max, 'UTF-8');
}

if (!empty($data['website'])) {
    echo json_encode(['ok' => true]);
    exit;
}

$startedAt = (int)($data['startedAt'] ?? 0);
if ($startedAt <= 0 || (time() * 1000 - $startedAt) < 2500) {
    http_response_code(429);
    echo json_encode(['ok' => false, 'message' => 'Please try again later']);
    exit;
}

$name = value($data, 'name', 120);
$email = value($data, 'email', 180);
$company = value($data, 'company', 120);
$projectType = value($data, 'projectType', 120);
$timeline = value($data, 'timeline', 120);
$budget = value($data, 'budget', 120);
$message = is_string($data['message'] ?? null) ? trim($data['message']) : '';
$message = mb_substr($message, 0, 1200, 'UTF-8');

if ($name === '' || $projectType === '' || mb_strlen($message, 'UTF-8') < 20 || empty($data['privacy']) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'message' => 'Please check your entries']);
    exit;
}

$recipient = getenv('CONTACT_RECIPIENT') ?: '';
$from = getenv('SMTP_FROM') ?: '';
if (!filter_var($recipient, FILTER_VALIDATE_EMAIL) || !filter_var($from, FILTER_VALIDATE_EMAIL)
    || preg_match('/[\r\n]/', $recipient . $from)) {
    http_response_code(503);
    echo json_encode(['ok' => false, 'message' => 'Contact service unavailable']);
    exit;
}

require_once __DIR__ . '/client-ip.php';
$ip = contactClientIp($_SERVER, getenv('TRUSTED_PROXY_IPS') ?: '', getenv('TRUSTED_TUNNEL_IPS') ?: '');
$now = time();
$window = 900;
$limit = 5;
$store = @fopen('/var/lib/contact/rate-limit.json', 'c+');
if ($store === false || !flock($store, LOCK_EX)) {
    http_response_code(503);
    echo json_encode(['ok' => false, 'message' => 'Contact service unavailable']);
    exit;
}
$rawLimits = stream_get_contents($store);
$limits = $rawLimits === '' ? [] : json_decode($rawLimits, true);
if (!is_array($limits)) {
    fclose($store);
    http_response_code(503);
    echo json_encode(['ok' => false, 'message' => 'Contact service unavailable']);
    exit;
}
foreach ($limits as $key => $entry) {
    if ($entry['expires'] <= $now) {
        unset($limits[$key]);
    }
}
$key = hash('sha256', $ip);
$entry = $limits[$key] ?? ['count' => 0, 'expires' => $now + $window];
if ($entry['count'] >= $limit) {
    fclose($store);
    header('Retry-After: ' . ($entry['expires'] - $now));
    http_response_code(429);
    echo json_encode(['ok' => false, 'message' => 'Please try again later']);
    exit;
}
// Bound the file size; fail closed if the active IP budget is exhausted.
if (!isset($limits[$key]) && count($limits) >= 10000) {
    fclose($store);
    http_response_code(503);
    echo json_encode(['ok' => false, 'message' => 'Contact service unavailable']);
    exit;
}
$entry['count']++;
$limits[$key] = $entry;
$encoded = json_encode($limits);
rewind($store);
$stored = ftruncate($store, 0) && fwrite($store, $encoded) === strlen($encoded) && fflush($store);
fclose($store);
if (!$stored) {
    http_response_code(503);
    echo json_encode(['ok' => false, 'message' => 'Contact service unavailable']);
    exit;
}

$safe = fn(string $text): string => htmlspecialchars($text, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
$subject = 'Projektanfrage ueber al-badawi.de';
$body = implode("\n", [
    'Name: ' . $safe($name),
    'E-Mail: ' . $safe($email),
    'Unternehmen: ' . $safe($company),
    'Projektart: ' . $safe($projectType),
    'Zeitraum: ' . $safe($timeline),
    'Budget: ' . $safe($budget),
    '',
    $safe($message),
]);

$headers = [
    'From: ' . $from,
    'Reply-To: ' . $email,
    'Content-Type: text/plain; charset=UTF-8',
    'X-Content-Type-Options: nosniff',
];

$sent = mail($recipient, $subject, $body, implode("\r\n", $headers));
if (!$sent) {
    http_response_code(500);
    echo json_encode(['ok' => false, 'message' => 'Message could not be sent']);
    exit;
}

echo json_encode(['ok' => true]);
