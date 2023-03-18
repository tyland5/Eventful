<?php

    //establishing connection with remote database
    //Note: DONT INCLUDE THIS CONNECTION IN EVERY FILE. WILL BE INSANELY MESSY AND UNECESSARY
    //(I can't think why you would paste these commands a bunch of times tbh as of rn since you can just use import)
    $conn = mysqli_connect("oceanus.cse.buffalo.edu", "dchen83", "50360060", "cse442_2023_spring_team_b_db", "3306");
    if($conn -> connect_error){
        die("connection failed");
    }
    else{
        echo "Connected fine <br>";
    }

    //Checks if the browser remembers the user logging in and if the session id is not expired
    if(!isset($_COOKIE["session"])){

        //creates session id in browser cookies. does not change on refresh. only on closing the browser entirely
        //this is NOT a persistent cookie
        session_start(); 
        
        //setting up a persistent cookie and pairing up with the database
        //persistent lasts even with browser closed until expiration
        $cookie_name = "session";
        $cookie_value = session_id(); //grab the unique identifier to be stored into database
        $expiration = time() + 60; // 60 seconds or 1 minute
        setcookie($cookie_name, $cookie_value, $expiration, "/"); 
        
        //inserting the cookie into database
        $sess_id = $cookie_value;
        $mysql_exp = date("Y-m-d H:i:s", $expiration - 18000); // -5 hours to match with mysql time
        echo $mysql_exp;
        $result = mysqli_query($conn, "INSERT INTO Sessions (user_id, session_id, expiration) VALUES (1, '$sess_id', '$mysql_exp') ");
        if(!$result){
            die(mysqli_error($conn));
        }
    }

?>

<!DOCTYPE html>
<html>
    <head>
        <title>Practice</title>
    </head>

    <body>
        <h1>Hello</h1>
    </body>

</html>