<?php
// /api/contact.php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Ensure it's a POST request
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "Method not allowed"]);
    exit();
}

// Database Credentials
$dbHost = 'localhost'; // Standard for Hostinger shared
$dbName = 'u224063079_MadQueries';
$dbUser = 'u224063079_MADman';
$dbPass = 'Madman@9870@';

// Get POST body
$json = file_get_contents('php://input');
$data = json_decode($json, true);

if (!$data) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Invalid JSON payload"]);
    exit();
}

$name = trim($data['name'] ?? '');
$company = trim($data['company'] ?? '');
$whatsapp = trim($data['whatsapp'] ?? '');
$problem = trim($data['problem'] ?? '');

// Basic validation
if (empty($name) || empty($company) || empty($whatsapp) || strlen($problem) < 20) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Missing or invalid required fields"]);
    exit();
}

try {
    // 1. Save to Database
    $dsn = "mysql:host=$dbHost;dbname=$dbName;charset=utf8mb4";
    $options = [
        PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES   => false,
    ];
    
    $pdo = new PDO($dsn, $dbUser, $dbPass, $options);
    
    $stmt = $pdo->prepare("INSERT INTO assessment_requests (name, company, whatsapp, problem) VALUES (?, ?, ?, ?)");
    $stmt->execute([$name, $company, $whatsapp, $problem]);

    // 2. Send Email
    $to = "connect@madmarketers.in";
    $subject = "New Assessment Request from $name ($company)";
    
    $message = "You have received a new assessment request:\n\n";
    $message .= "Name: $name\n";
    $message .= "Company: $company\n";
    $message .= "WhatsApp: $whatsapp\n\n";
    $message .= "Problem Statement:\n$problem\n";
    
    $headers = "From: noreply@madmarketers.in\r\n";
    $headers .= "Reply-To: noreply@madmarketers.in\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    $mailSent = mail($to, $subject, $message, $headers);

    // Respond Success
    http_response_code(200);
    echo json_encode([
        "success" => true, 
        "message" => "Assessment request saved successfully.",
        "email_sent" => $mailSent
    ]);

} catch (PDOException $e) {
    // Return 500 if database connection/insertion fails
    error_log("Database Error: " . $e->getMessage());
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "Server error occurred while saving your request."]);
}
?>
