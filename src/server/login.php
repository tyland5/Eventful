<?php
// PLACE THIS FILE IN YOUR HTDOCS
header("Access-Control-Allow-Origin: http://localhost:3000");
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

//returns false on error. returns array of results if successful. could be empty array 
$result = mysqli_query($conn, "SELECT * FROM Users");

if(!$result){
    die(mysqli_error($conn));
}

//checks the number of results returned
if (mysqli_num_rows($result) > 0) {
    
    //gets each result returned. each result referred to as a "row"
    while($rowData = mysqli_fetch_array($result)){
            //print($rowData["Username"]); //print the particular field value
    }
}
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
	header('HTTP/1.1 200 OK');
	exit();
}

//Upon receiving a POST request from axios
if (isset($_POST)) {
    $data = json_decode(file_get_contents('php://input'), true);
    
    $username = $data['username'];
    $password = $data['password'];

	
	if ($username === "" | $password === "") {
		echo "Missing information";
		return;
	}

	$sql = "SELECT * FROM `Users` WHERE `Username` = '".$username."' AND `Password` = '".$password."' ";
	$res = $conn->query($sql);
    
	//successful login
	if ($res->num_rows > 0) {
		
		//create session id for the now logged in user and store into db.
		session_start();
		
		//setting up a persistent cookie and pairing up with the database
        //persistent lasts even with browser closed until expiration
        $cookie_name = "session";
        $cookie_value = session_id(); //grab the unique identifier to be stored into database
        $expiration = time() + 86400; // 86400 seconds or 1 day
        setcookie($cookie_name, $cookie_value, $expiration, "/"); 
        
        //inserting the cookie into database
        $sess_id = $cookie_value;
        $mysql_exp = date("Y-m-d H:i:s", $expiration - 14400); // -4 hours to match with mysql time (daylight savings)
        $result = mysqli_query($conn, "INSERT INTO Sessions (username, session_id, expiration) VALUES ('$username', '$sess_id', '$mysql_exp') ");

		//header('Location: https://www-student.cse.buffalo.edu/CSE442-542/2023-Spring/cse-442b/build/'); //redirect to home page. doesnt work?
		echo $sess_id; //return session id to react app

	} else {
		//send error Wrong username or password
		$message = "Wrong username or password";
		echo $message;
	}
	
}
    ?>