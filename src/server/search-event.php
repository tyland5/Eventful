<?php
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
    $query = $data["query"];

    $query = "%" . $query . "%";
    // doesn't seem to be case sensitive
    $sql = "SELECT post_id, poster, title, type, location, description, thumbnail, images FROM Posts WHERE title LIKE ? OR description LIKE ? ";
    $stsm = $conn->prepare($sql);
    $stsm->bind_param("ss", $query, $query);
    $stsm->execute();

    $resultSet = $stsm->get_result();
    $data = $resultSet->fetch_all(MYSQLI_ASSOC);
    echo json_encode($data);
    return;

}

?>