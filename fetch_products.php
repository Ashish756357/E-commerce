<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "your_database_name";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Fetch products from database
$sql = "SELECT * FROM products";
$result = $conn->query($sql);

$products = array();
while ($row = $result->fetch_assoc()) {
    $products[] = $row;
}

// Return JSON response
header('Content-Type: application/json');
echo json_encode($products);

$conn->close();
?>
