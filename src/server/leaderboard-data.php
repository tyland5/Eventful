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

//REPLACE EVERY USERID WITH USERNAME
//Upon receiving a POST request from axios
if (isset($_POST)) {
    $data = json_decode(file_get_contents('php://input'), true);
    
    $category = $data["category"];
    $top10 = [];
    $amount = 20;

    if ($category == "recreation"){
        //$currentLikes = "SELECT likes FROM Posts";
        $sql2 = "SELECT * FROM `User Attendance` ORDER BY `recreation` DESC"; 
        $result = $conn->query($sql2);
        $list = mysqli_fetch_all($result, MYSQLI_ASSOC);
        //$row = mysqli_fetch_array($result);

        for($i = 0; $i < $amount; $i++){
            $sql3 = "SELECT Username FROM `Users` WHERE user_id=(?)"; 
            $stsm3 = $conn->prepare($sql3);
            $stsm3->bind_param("i", $list[$i]["user_id"]);
            $stsm3->execute();
            $stsm3->bind_result($username);
            $stsm3->fetch();   
            $stsm3->close();
            $list[$i]["user_id"] = $username;
            if ($list[$i]["recreation"] >= 0){
                array_push($top10, $list[$i]);
            }
            // else{
            //     $nullText = "---------";
            //     $list[$i]["user_id"] = $nullText;
            //     array_push($top10, $list[$i]);
            // }
        }
    }
    elseif ($category == "volunteer"){
        //$currentLikes = "SELECT likes FROM Posts";
        $sql2 = "SELECT * FROM `User Attendance` ORDER BY `volunteer` DESC"; 
        $result = $conn->query($sql2);
        $list = mysqli_fetch_all($result, MYSQLI_ASSOC);
        //$row = mysqli_fetch_array($result);

        for($i = 0; $i < $amount; $i++){
            $sql3 = "SELECT Username FROM `Users` WHERE user_id=(?)"; 
            $stsm3 = $conn->prepare($sql3);
            $stsm3->bind_param("i", $list[$i]["user_id"]);
            $stsm3->execute();
            $stsm3->bind_result($username);
            $stsm3->fetch();   
            $stsm3->close();
            $list[$i]["user_id"] = $username;
            if ($list[$i]["volunteer"] >= 0){
                array_push($top10, $list[$i]);
            }
            // else{
            //     $nullText = "---------";
            //     $list[$i]["user_id"] = $nullText;
            //     array_push($top10, $list[$i]);
            // }
        }
    }
    elseif ($category == "entertainment"){
        //$currentLikes = "SELECT likes FROM Posts";
        $sql2 = "SELECT * FROM `User Attendance` ORDER BY `entertainment` DESC"; 
        $result = $conn->query($sql2);
        $list = mysqli_fetch_all($result, MYSQLI_ASSOC);
        //$row = mysqli_fetch_array($result);

        for($i = 0; $i < $amount; $i++){
            $sql3 = "SELECT Username FROM `Users` WHERE user_id=(?)"; 
            $stsm3 = $conn->prepare($sql3);
            $stsm3->bind_param("i", $list[$i]["user_id"]);
            $stsm3->execute();
            $stsm3->bind_result($username);
            $stsm3->fetch();   
            $stsm3->close();
            $list[$i]["user_id"] = $username;
            if ($list[$i]["entertainment"] >= 0){
                array_push($top10, $list[$i]);
            }
            // else{
            //     $nullText = "---------";
            //     $list[$i]["user_id"] = $nullText;
            //     array_push($top10, $list[$i]);
            // }
        }
    }
    elseif ($category == "food"){
        //$currentLikes = "SELECT likes FROM Posts";
        $sql2 = "SELECT * FROM `User Attendance` ORDER BY `food` DESC"; 
        $result = $conn->query($sql2);
        $list = mysqli_fetch_all($result, MYSQLI_ASSOC);
        //$row = mysqli_fetch_array($result);

        for($i = 0; $i < $amount; $i++){
            $sql3 = "SELECT Username FROM `Users` WHERE user_id=(?)"; 
            $stsm3 = $conn->prepare($sql3);
            $stsm3->bind_param("i", $list[$i]["user_id"]);
            $stsm3->execute();
            $stsm3->bind_result($username);
            $stsm3->fetch();   
            $stsm3->close();
            $list[$i]["user_id"] = $username;
            array_push($top10, $list[$i]);
            // else{
            //     $nullText = "---------";
            //     $list[$i]["user_id"] = $nullText;
            //     array_push($top10, $list[$i]);
            // }
        }
    }
    elseif ($category == "adult"){
        //$currentLikes = "SELECT likes FROM Posts";
        $sql2 = "SELECT * FROM `User Attendance` ORDER BY `adult` DESC"; 
        $result = $conn->query($sql2);
        $list = mysqli_fetch_all($result, MYSQLI_ASSOC);
        //$row = mysqli_fetch_array($result);

        for($i = 0; $i < $amount; $i++){
            $sql3 = "SELECT Username FROM `Users` WHERE user_id=(?)"; 
            $stsm3 = $conn->prepare($sql3);
            $stsm3->bind_param("i", $list[$i]["user_id"]);
            $stsm3->execute();
            $stsm3->bind_result($username);
            $stsm3->fetch();   
            $stsm3->close();
            $list[$i]["user_id"] = $username;
            array_push($top10, $list[$i]);
            // else{
            //     $nullText = "---------";
            //     $list[$i]["user_id"] = $nullText;
            //     array_push($top10, $list[$i]);
            // }
        }
    }
    
    //var_dump($top10);
    //$id = $postID
    //$stsm = $conn->prepare($currentLikes);
    //$stsm->bind_param("i", $id);
    //$stsm->execute();


    //$result = mysqli_query($conn, "UPDATE `Posts` SET `likes`='$currentLikes' WHERE `post_id`='$postID'");

    echo json_encode($top10);

    
}


?>