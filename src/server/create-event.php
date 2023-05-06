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

    //in case a user's session has expired
    if(!isset($_COOKIE["session"])){
        echo "invalid session";
        return;
    }

    // htmlspecialchars used to prevent Cross Site Scripting
    $title = htmlspecialchars($_POST['title']);
    $dateTime = $_POST['dateTime'];
    $location = htmlspecialchars($_POST['location']);
    $eventCode = $_POST['eventCode'];
    $type = $_POST['type'];
    $description = htmlspecialchars($_POST['description']);
    $thumbnail = $_FILES["thumbnail"];
    $images = $_FILES["images"]; //works now

    $session_id = $_COOKIE["session"];

    //set up date time of event properly
    $dateTime = intdiv($dateTime, 1000);
    $dateTime = $dateTime - 14400;
    $dateTime = date("Y-m-d H:i:s", $dateTime);
    $la2 = "fd";
    
    //get the username associated with current session id 
    $sql = "SELECT Username FROM Sessions JOIN Users USING (user_id) WHERE session_id = (?) LIMIT 1";
    $stsm = $conn->prepare($sql);
    $stsm->bind_param("s", $session_id);
    $stsm->execute();
    $stsm->bind_result($username);
    $stsm->fetch();
    $stsm->close(); //need this to do another query
    
    //get the latest post id number so you can create good image name on server
    $sql2 = "SELECT post_id FROM Posts ORDER BY post_id DESC LIMIT 1"; 
    $stsm2 = $conn->prepare($sql2);
    $stsm2->execute();
    $stsm2->bind_result($postID);
    $stsm2->fetch();   
    $stsm2->close();

    //setting the name for thumbnail that will be in the webserver and database
    $postID = $postID + 1;
    $thumbnailName = "post" . $postID . "_thumbnail." . pathinfo($thumbnail['name'], PATHINFO_EXTENSION);   
    $imageNames = "";

    //upload images onto webserver
    $counter = 1;
    foreach ($images["error"] as $key => $error) {
        if ($error == UPLOAD_ERR_OK) {
            $tmp_name = $images["tmp_name"][$key];
            $name = "post" . $postID . "_img" . $counter . "." . pathinfo($images['name'][$key], PATHINFO_EXTENSION);
            $imageNames = $imageNames . $name . " ";
            $counter += 1;
            move_uploaded_file($tmp_name, "uploads/" . $name);
        }
    }
   
    //insert post information into database
    $sql3 = "INSERT INTO Posts (poster, title, time, location, event_code, type, description, thumbnail, images) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
    $stsm3 = $conn->prepare($sql3);
    $stsm3->bind_param("sssssssss", $username, $title, $dateTime, $location, $eventCode, $type, $description, $thumbnailName, $imageNames);
    $stsm3->execute();
    $stsm3->close();

    //upload thumbnail onto webserver
    move_uploaded_file($thumbnail["tmp_name"], "uploads/" . $thumbnailName);

    $zero = 0;
    $empty = "";
    $sql4 = "INSERT INTO `Post Analytics` (likes, dislikes, user_ids_who_disliked, user_ids_who_liked) VALUES (?, ?, ?, ?)";
    $stsm4 = $conn->prepare($sql4);
    $stsm4->bind_param("iiss", $zero, $zero, $empty, $empty);
    $stsm4->execute();
    
    

    return;
    
}


?>