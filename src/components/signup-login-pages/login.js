import React from 'react';
import '../../style/signupLogin.css';

const LoginPage = () => {
  const TextBar = (props) => {
    return(
      <>
        <div className="signup-div">
          <div className="signup-text">
            <p className="signup-title">{props.title}</p>
          </div>
          <div className="signup-boxes">
            <input className="signupTextBox" id="signup-text-box" type="text" name={props.title}/>
          </div>
        </div>
      </>
    )
  }

  const Button = (props) => {
    return(
      <>
        <button className="login-signup-button">{props.title}</button>
      </>
    )
  }
  

  return (
    <div className="login-signup-app">
      <h1 className="signupGreeting">Log In</h1>
      <div className="login-form">
        <div className="login-text">
          <label htmlfor="username"><p className="login-title">Username</p></label>
        </div>
        <input type="text" name="username" id="username"></input>
      </div>
      <div className="login-form">
        <div className="login-text">
          <label htmlfor="password"><p className="login-title">Password</p></label>
        </div>
        <input type="text" name="password" id="password"></input>
      </div>
      <p className="forgotPass">forgot your password?</p>
      <br></br>
      <button className="login-signup-button">Log In</button>
      <p className="dontHaveAccount">Don't have an account?</p>

      <div className="signUpButton">
        <button className="login-signup-button">Sign Up</button>
      </div>
      
    </div>
  );
}

export default LoginPage;
