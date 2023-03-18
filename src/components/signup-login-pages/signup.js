import React, { useState, useEffect, useRef } from 'react';
import '../../style/signupLogin.css';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const SignUpPage = () => {

  const [details, setDetails] = useState({username: "", email: "", password: ""});
  const[regSuccess, setRegSuccess] = useState("");

  let navigate = useNavigate();

  const registerHandler = async (e) => {
    e.preventDefault();
    
    console.log(details);

    setRegSuccess("");
    

    axios.post('http://localhost/register.php', {
        username : details.username,
        password : details.password,
        email : details.email
        
      }).then(val => {

    if(val.data === "Username already taken"){
      console.log("Username already taken");
      setRegSuccess("Username already taken");
      
      
    } else{
      console.log(val.data);
      console.log("Successfully Registered");
      setRegSuccess("Successfully Registered");
    }
      
  })

}

  return (
    <div className="login-signup-app">
      <h1 className="signupGreeting">Sign Up</h1>
      {(regSuccess !== "") ? (<div className="error">{regSuccess}</div> ): ""}
      <div className="signup-form">
        <div className="signup-text">
          <label htmlfor="username"><p className="login-title">Username</p></label>
        </div>
        <input type="text" name="username" id="username" onChange={e => setDetails({...details, username: e.target.value})} value={details.username}></input>
      </div>

      <div className="signup-form">
        <div className="signup-text">
          <label htmlfor="email" ><p className="login-title">Email</p></label>
        </div>
        <input type="text" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}></input>
      </div>

      <div className="signup-form">
        <div className="signup-text">
          <label htmlfor="password"><p className="login-title">Password</p></label>
        </div>
        <input type="text" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}></input>
      </div>

      <div className="signup-form">
        <div className="signup-text">
          <label htmlfor="confirm-password" ><p className="login-title">Confirm Password</p></label>
        </div>
        <input type="text" name="confirm-password" id="confirm-password"></input>
      </div>

      <br></br>
      <button className="signupButton" onClick={registerHandler} >Sign Up</button>
    </div>
  );
}

export default SignUpPage;