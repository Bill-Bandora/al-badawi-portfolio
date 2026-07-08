<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'message' => 'Method not allowed']);
    exit;
}

$configPath = __DIR__ . '/config.php';
$config = file_exists($configPath)
    ? require $configPath
    : require __DIR__ . '/config.example.php';

$raw = file_get_contents('php://input');
$data = json_decode($raw ?: '', true);
if (!is_array($data)) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'message' => 'Invalid request']);
    exit;
}

function value(array $data, string $key, int $max): string {
    $text = trim((string)($data[$key] ?? ''));
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
$message = trim((string)($data['message'] ?? ''));
$message = mb_substr($message, 0, 1200, 'UTF-8');

if ($name === '' || $projectType === '' || mb_strlen($message, 'UTF-8') < 20 || empty($data['privacy']) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'message' => 'Please check your entries']);
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
    'From: ' . $config['from'],
    'Reply-To: ' . $email,
    'Content-Type: text/plain; charset=UTF-8',
    'X-Content-Type-Options: nosniff',
];

$sent = mail($config['recipient'], $subject, $body, implode("\r\n", $headers));
if (!$sent) {
    http_response_code(500);
    echo json_encode(['ok' => false, 'message' => 'Message could not be sent']);
    exit;
}

echo json_encode(['ok' => true]);
