<?php
// PLACE THIS FILE IN YOUR HTDOCS
//header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credentials:true");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Methods: GET, OPTIONS");


header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


$conn = mysqli_connect("oceanus.cse.buffalo.edu", "dchen83", "50360060", "cse442_2023_spring_team_b_db", "3306");
if($conn -> connect_error){
    echo "not connected";
    die("connection failed");
}
else{
    //print("Connected fine");
}

if (isset($_GET)){

    $current_cookies = $_COOKIE["session"];
    $result = mysqli_query($conn, "DELETE FROM `Sessions` WHERE `session_id`='$current_cookies'");

    $cookie_name = "session";
    $cookie_value = ""; //grab the unique identifier to be stored into database
    $expiration = time() -86400; // 86400 seconds or 1 day
    setcookie($cookie_name, $cookie_value, $expiration, "/CSE442-542", ".cse.buffalo.edu"); 

    echo "hello";
}
?>