<?php
// PLACE THIS FILE IN YOUR HTDOCS

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credentials: false");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


$conn = mysqli_connect("oceanus.cse.buffalo.edu", "dchen83", "50360060", "cse442_2023_spring_team_b_db", "3306");
if($conn -> connect_error){
    print("Connection Failed");
    die("connection failed");

}
else{
    print("Connected fine");
}

//Upon receiving a POST request from axios
if (isset($_POST)){
    $data = json_decode(file_get_contents('php://input'), true);
    
    $firstname = $data['firstname'];
    $lastname = $data['lastname'];
    $email = $data['email'];
    $phonenumber = $data['phonenumber'];
    $password = $data['password'];

	// print($username);
    // print($password);

	$sql = "INSERT INTO `Account Settings` (`First Name`, `Last Name`, `Email`, `Phone Number`, `Password`) VALUES ('".$firstname."','".$lastname."','".$email."','".$phonenumber."','".$password."')";
	$res = $conn->query($sql);
    if ($res->num_rows > 0) {
		//send results
		// echo '<pre>'; print_r($result); echo '</pre>';
		// while($row = mysqli_fetch_array($res)){							IF YOU WANT TO GET THE OUTPUT FROM $RESULT ARRAY
		// 	// Assuming DB's default fetchmode is DB_FETCHMODE_ORDERED
		// 	echo $row[0] . "\n";
		// }
		echo "Good to go";
	} else {
		//send error Wrong username or password
		$message = "Wrong username or password";
		echo $message;
	}
	
}
    ?>