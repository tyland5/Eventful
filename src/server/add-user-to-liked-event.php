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
    $session_id = $_COOKIE["session"];

    //$currentLikes = "SELECT likes FROM Posts";
    $sql2 = "SELECT user_id FROM Sessions WHERE session_id=(?)"; 
    $stsm1 = $conn->prepare($sql2);
    $stsm1->bind_param("s", $session_id);
    $stsm1->execute();
    $stsm1->bind_result($current_user);
    $stsm1->fetch();   
    $stsm1->close();
    //$id = $postID
    //$stsm = $conn->prepare($currentLikes);
    //$stsm->bind_param("i", $id);
    //$stsm->execute();
    
    $sql3 = "SELECT user_ids_who_liked FROM Posts WHERE post_id=(?)"; 
    $stsm3 = $conn->prepare($sql2);
    $stsm3->bind_param("i", $post_id);
    $stsm3->execute();
    $stsm3->bind_result($json_list_of_users);
    $stsm3->fetch();   
    $stsm3->close();
    

    //TODO: turn json to list
    $list_of_users = json_decode($json_list_of_users);
    
    $zero = 0;
    $checkIfEmpty = gettype($list_of_users);
    $to_insert = json_encode([$current_user]);
    $sql4 = "UPDATE Posts SET user_ids_who_liked=$zero WHERE post_id=$post_id";
    
    /*
    if (!is_array($list_of_users)) {
        $to_insert = json_encode([$current_user]);
        $sql4 = "UPDATE Posts SET user_ids_who_liked=$zero WHERE post_id=$post_id";
        //$stsm4 = $conn->prepare($sql4);
        //$stsm4->bind_param("b", $to_insert);
        //$stsm4->execute();
    }*/

    //$newLikes = $currentLikes + 1;
    //$result = mysqli_query($conn, "UPDATE `Posts` SET `likes`='$currentLikes' WHERE `post_id`='$postID'");

    //$result = "UPDATE Posts SET likes=(?) WHERE post_id=(?)"; 
    //$stsm2 = $conn->prepare($result);
    //$stsm2->bind_param("ii", $newLikes, $postID);
    //$stsm2->execute();
    //$stsm2->bind_result($result2);
    //$stsm2->fetch();   
    //$stsm2->close();
    //echo $newLikes;

    echo $checkIfEmpty;

    
}


?>