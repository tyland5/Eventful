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

//Upon receiving a POST request from axios
if (isset($_POST)) {
    $data = json_decode(file_get_contents('php://input'), true);
    
    $title = $data["title"];
    $dateTime = $data["dateTime"];
    $location = $data["location"];
    $type = $data["type"];
    $thumbnail = $data["thumbnail"];
    $images = $data["images"];
    $session_id = $_COOKIE["session"];
    
    $dateTime = intdiv($dateTime, 1000);
    $dateTime = $dateTime - 14400;
    $dateTime = date("Y-m-d H:i:s", $dateTime);
    $la2 = "fd";
    

    $sql = "SELECT Username FROM Sessions JOIN Users USING (user_id) WHERE session_id = (?) LIMIT 1";
    //$sql = "SELECT Username FROM Users LIMIT 1";
    $stsm = $conn->prepare($sql);
    $stsm->bind_param("s", $session_id);
    $stsm->execute();
    $stsm->bind_result($username);
    $stsm->fetch();
    $stsm->close(); //need this to do another query
    
   
    $sql2 = "INSERT INTO Posts VALUES (?, ?, ?, ?, ?, ?, ?)";
    $stsm2 = $conn->prepare($sql2);
    //$stsm->bind_param("ssissss", "fdaf", "fdas", 434343, "fdsafsd", "fdsafsdf", "flksajfadaf", "sjksalfsjadf;");
    
    $stsm2->bind_param("sssssss", $username, $title, $dateTime, $location, $type, $la2, $la2);
    $stsm2->execute();
    
    //move_uploaded_file()

    return;
    
}


?>