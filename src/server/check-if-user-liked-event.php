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
    
    $sql3 = "SELECT user_ids_who_liked FROM `Post Analytics` WHERE post_id=(?)"; 
    $stsm3 = $conn->prepare($sql3);
    $stsm3->bind_param("i", $postID);
    $stsm3->execute();
    $stsm3->bind_result($json_list_of_users);
    $stsm3->fetch();   
    $stsm3->close();


    $list_of_users = json_decode($json_list_of_users);

    $list_size = count($list_of_users);
    $user_in_list = FALSE;
    foreach ($list_of_users as $user){
        if ($user == $current_user){
            $user_in_list = TRUE;
        }
    }

    if ($user_in_list){
        echo "liked";
    }else{
        echo "not liked";
    }

    
}


?>