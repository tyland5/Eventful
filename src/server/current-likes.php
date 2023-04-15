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
    echo "not connected";
    die("connection failed");
}
else{
    //print("Connected fine");
}

//Upon receiving a POST request from axios
if (isset($_POST)) {
    $data = json_decode(file_get_contents('php://input'), true);
    
    $postID = $data["id"];

    //$currentLikes = "SELECT likes FROM Posts";
    $sql2 = "SELECT likes FROM Posts WHERE post_id=(?)"; 
    $stsm1 = $conn->prepare($sql2);
    $stsm1->bind_param("i", $postID);
    $stsm1->execute();
    $stsm1->bind_result($currentLikes);
    $stsm1->fetch();   
    $stsm1->close();


    echo $currentLikes;

    
}


?>