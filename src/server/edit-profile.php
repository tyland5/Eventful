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
if($conn -> connect_error){
    die("connection failed\n");
}
else{
    print("Connected fine\n");
}

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
	header('HTTP/1.1 200 OK');
	exit();
}

$sess_id = "v51fllvag31alj1u0gp5e7vevn";
$sess_id2 = "ko9o0p72jhh6vs2hb6gnsnvren";
$sess_id3 = "f9lb341f559gg3d5745m1r3gvh";
$sql = "SELECT * FROM `Sessions` WHERE `session_id` = '$sess_id2'";
$res = $conn->query($sql);
$row = mysqli_fetch_row($res);
$user_id = $row[0];


//Upon receiving a POST request from axios
if (isset($_POST)) {
    $data = json_decode(file_get_contents('php://input'), true);
    
    $name = $data['name'];
    $displayname = $data['displayname'];
    $website = $data['website'];
    $bio = $data['bio'];

    $sql = "SELECT * FROM `Edit Profile` WHERE `User ID` = '$user_id'";
    $res = $conn->query($sql);

    if($res->num_rows > 0) {
        $sql = "UPDATE `Edit Profile` SET `User ID`= '$user_id',`Name`='$name',`Display Name`= '$displayname',`Website`='$website', `Bio`='$bio' WHERE `User ID`='$user_id'";
        $res = $conn->query($sql);
    }

    else {
        $sql = "INSERT INTO `Edit Profile`(`User ID`, `Name`, `Display Name`, `Website`, `Bio`) VALUES ('".$user_id."', '".$name."','".$displayname."','".$website."','".$bio."')";
	    $res = $conn->query($sql);
    }
}
?>