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
    die("connection failed");
}
else{
    //print("Connected fine");
}

//Upon receiving a GET request from axios
if (isset($_GET)) {
   if(!isset($_COOKIE["session"])){
    echo "invalid";
    return;
   }

   $session_id = $_COOKIE["session"];
  
   //check if the session id is actually valid and not some forged session id in cookie
   $sql = "SELECT * FROM `Sessions` WHERE `session_id` = '$session_id' ";
   $res = $conn->query($sql);
   if ($res->num_rows === 0){
    echo "invalid"; //i may have to put this instead of "" cause good will always be echo'd?
    return;
   }

   echo "good";

}

?>