<?php
// PLACE THIS FILE IN YOUR HTDOCS

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credentials: false");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


$conn = mysqli_connect("oceanus.cse.buffalo.edu", "dchen83", "50360060", "cse442_2023_spring_team_b_db", "3306");
if($conn -> connect_error){
    print("Connection Failed");
    die("connection failed");

}
else{
    print("Connected fine\n");
}

$sql = "SELECT * FROM `Sessions` ORDER BY `expiration` DESC LIMIT 1";
$stmt = $conn->prepare($sql);
$stmt->execute();
$res = $stmt->get_result(); 
$row = mysqli_fetch_row($res);
$user_id = $row[0];

//Upon receiving a POST request from axios
if (isset($_POST)) {
    $data = json_decode(file_get_contents('php://input'), true);
    
    $firstname = $data['firstname'];
    $lastname = $data['lastname'];
    $email = $data['email'];
    $phonenumber = $data['phonenumber'];
    $password = $data['password'];

    $sql = "SELECT * FROM `Account Settings` WHERE `User ID` = '$user_id'";
    $stmt = $conn->prepare($sql);
    $stmt->execute();
    $res = $stmt->get_result();

    if($res->num_rows > 0) {
        $sql = "UPDATE `Account Settings` SET `User ID`= '$user_id',`First Name`='$firstname',`Last Name`= '$lastname',`Email`='$email', `Phone Number`='$phonenumber', `Password`='$password' WHERE `User ID`='$user_id'";
        $stmt2 = $conn->prepare($sql);
        $stmt2->execute();
    }

    else {
        $sql = "INSERT INTO `Account Settings` (`User ID`, `First Name`, `Last Name`, `Email`, `Phone Number`, `Password`) VALUES ('".$user_id."', '".$firstname."','".$lastname."','".$email."','".$phonenumber."','".$password."')";
	    $stmt3 = $conn->prepare($sql);
        $stmt3->execute();
    }
}
?>