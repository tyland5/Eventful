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

if(isset($_POST)){
    $data = json_decode(file_get_contents('php://input'), true);

    $eventCode = $data['eventCode'];
    $eventID = $data['eventID'];

    $sql0 = "SELECT user_id FROM Sessions WHERE session_id = (?)";
    $stsm0 = $conn->prepare($sql0);
    $stsm0->bind_param("s", $_COOKIE['session']);
    $stsm0->execute();
    $stsm0->bind_result($userID);
    $stsm0->fetch();
    $stsm0->close();


    $sql = "SELECT COUNT(*) FROM `Event Attendance` WHERE user_id=(?) AND post_id = (?)";
    $stsm = $conn->prepare($sql);
    $stsm->bind_param("ii", $userID, $eventID);
    $stsm->execute();
    $stsm->bind_result($count);
    $stsm->fetch();
    $stsm->close();

    if($count > 0){
        echo "Already Marked Attended";
        return;
    }

    $sql2 = "SELECT event_code FROM Posts WHERE post_id=(?)"; 
    $stsm2 = $conn->prepare($sql2);
    $stsm2->bind_param("i", $eventID);
    $stsm2->execute();
    $stsm2->bind_result($actualCode);
    $stsm2->fetch();  
    $stsm2->close(); 
    
    if($eventCode != $actualCode){
        echo "Wrong Code";
        return;
    }
    
    $sql3 = "INSERT INTO `Event Attendance` (user_id, post_id) VALUES (?, ?)";
    $stsm3= $conn->prepare($sql3);
    $stsm3->bind_param("ii", $userID, $eventID);
    $stsm3-> execute();
    $stsm3->close();
    echo "Successfully Marked Attended";

    
    $sql4 = "SELECT type FROM Posts WHERE post_id = (?)";
    $stsm4 = $conn->prepare($sql4);
    $stsm4->bind_param("i", $eventID);
    $stsm4->execute();
    $stsm4->bind_result($eventType);
    $stsm4->fetch();
    $stsm4->close();

    
    $eventType = strtolower($eventType);
    //$sql5 = "UPDATE `User Attendance` SET total_events = total_events + 1 AND " . $eventType . " = " . $eventType . " + 1 WHERE user_id = ?";
    $sql5 = "UPDATE `User Attendance` SET total_events = total_events + 1, " . $eventType . " = " .  $eventType . " + 1 WHERE user_id = (?)";
    $stsm5 = $conn->prepare($sql5);
    $stsm5->bind_param("i", $userID);
    $stsm5->execute();
    
    return;
}

?>