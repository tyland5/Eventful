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


//Upon receiving a GET request from axios
if (isset($_GET)) {
    $session_id = $_COOKIE["session"];
    $sql = "SELECT user_id FROM Sessions WHERE session_id = ? ";
    $stsm = $conn->prepare($sql);
    $stsm->bind_param("s", $session_id);
    $stsm->execute();
    $stsm->bind_result($user_id);
    $stsm->fetch();
    $stsm->close();

    $sql2 = "SELECT * FROM `User Attendance` WHERE user_id = ?";
    $stsm2 = $conn->prepare($sql2);
    $stsm2->bind_param("i", $user_id);
    $stsm2->execute();

	$resultSet = $stsm2->get_result();
	$data = $resultSet->fetch_all(MYSQLI_ASSOC);
	echo json_encode($data);
    return;
    
    /*
    $stsm2 = $conn->prepare($sql2);
    $stsm2->bind_param("i", $user_id);
    $stsm2->execute();
    echo $stsm2->bind_result($res[]);
    $stsm2->fetch();
    echo $res[1];
    */
    //echo "reached";
}
?>