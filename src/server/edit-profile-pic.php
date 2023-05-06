<?php
// PLACE THIS FILE IN YOUR HTDOCS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credentials:true");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Methods: GET, OPTIONS");


header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


$conn = mysqli_connect("oceanus.cse.buffalo.edu", "dchen83", "50360060", "cse442_2023_spring_team_b_db", "3306");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
	header('HTTP/1.1 200 OK');
	exit();
}

$sql = "SELECT * FROM `Sessions` ORDER BY `expiration` DESC LIMIT 1";
$res = $conn->query($sql);
$row = mysqli_fetch_row($res);
$user_id = $row[0];

//Upon receiving a POST request from axios
if (isset($_POST)) {
    $image = $_FILES["image"];

            $tmp_name = $image["tmp_name"][$key];
            $pfpName = "user" . $user_id . "_pfp" .$counter ."." .pathinfo($image['name'], PATHINFO_EXTENSION);
            move_uploaded_file($image["tmp_name"], "uploads/" . $pfpName);

    $sql = "UPDATE Users SET pfp=(?) WHERE user_id=(?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("si", $pfpName, $user_id);
    $stmt->execute();
}

?>