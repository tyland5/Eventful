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
error_reporting(E_ALL);
ini_set('display_errors', 'on');

//Upon receiving a POST request from axios
if (isset($_POST)) {
    $filters = $_POST['filters']; //works properly

    if($filters[0] == "all"){
        $sql = "SELECT poster, title, type, location, description, thumbnail, images FROM Posts";
        $stsm = $conn->prepare($sql);
        $stsm->execute();

	    $resultSet = $stsm->get_result();
	    $data = $resultSet->fetch_all(MYSQLI_ASSOC);
	    echo json_encode($data);
        return;
    }

    // there are filters
    $sql = "SELECT poster, title, type, location, description, thumbnail, images FROM Posts WHERE ";
    $sql .= "type = ? ";

    if(count($filters) > 1){
        for($i = 1; $i < count($filters); $i++){
            $sql .= "OR type = ? ";
        }
    }

    $stsm = $conn->prepare($sql);
    $types = str_repeat("s", count($filters));
    $stsm->bind_param($types, ...$filters);
    $stsm->execute();

    $resultSet = $stsm->get_result();
    $data = $resultSet->fetch_all(MYSQLI_ASSOC);
    echo json_encode($data);
}


?>