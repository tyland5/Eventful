import React, { useState, useEffect, useRef } from 'react';
import '../../style/signupLogin.css';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  
  const [details, setDetails] = useState({username: "", password: ""});
  const[user, setUser] = useState({username: "", password: ""});
  const[error, setError] = useState("");

  let navigate = useNavigate();

  const loginHandler = async (e) => {
    e.preventDefault();
    

    console.log(details);
    setError("");

    // Login(details);

    axios.post('https://www-student.cse.buffalo.edu/CSE442-542/2023-Spring/cse-442b/login.php', {
      username: details.username,
      password: details.password
    }).then(val => {
 
    if(val.data === "Wrong username or password"){
      console.log("Wrong Username or Password");
      setError("Wrong Username or Password");
      
    } else if (val.data === "Missing information"){
        console.log("Missing information");
        setError("Missing information");

    } else{
      
      console.log(val.data);
      console.log("Logged in");
      setUser({
        username: details.username,
        password: details.password
      })
      console.log(user.username);
    }
    
  })

}
const isFirstRender = useRef(true);
const isSecondRender = useRef(true)
//two useRefs because react hooks double render when react strict mode is on

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return; // 👈️ return early if initial render
    }
    if (isSecondRender.current) {
      isSecondRender.current = false;
      return; // 👈️ return early if initial render
    }

    if (user.username !== ""){
      navigate("/");
    } else console.log(user.username);

  }, [user]); // 👈️ add state variables you want to track

  return (
    <div className="login-signup-app">
      <h1 className="signupGreeting">Log In</h1>
      {(error !== "") ? (<div className="error">{error}</div> ): ""}
      <div className="login-form">
        <div className="login-text">
          <label htmlfor="username"><p className="login-title">Username</p></label>
        </div>
        <input type="text" name="username" id="username" onChange={e => setDetails({...details, username: e.target.value})} value={details.username}></input>
      </div>
      <div className="login-form">
        <div className="login-text">
          <label htmlfor="password"><p className="login-title">Password</p></label>
        </div>
        <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}></input>
      </div>
      <p className="forgotPass">forgot your password?</p>
      <br></br>
      <button className="login-signup-button" onClick = {loginHandler} >Log In</button>
      <p className="dontHaveAccount">Don't have an account?</p>

      <div className="signUpButton">
        <button className="login-signup-button" onClick={() => navigate('/signup')}>Sign Up</button>
      </div>
      
    
  
    </div>
  );
}

export default LoginPage;

