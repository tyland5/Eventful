import React from 'react';
import '../../style/signupLogin.css';

const SignUpPage = () => {
  const TextBar = (props) => {
    return(
      <>
        <div className="signup-div">
          <div className="signup-text">
            <p className="signup-title">{props.title}</p>
          </div>
          <div className="signup-boxes">
            <input id="signup-text-box" type="text" name={props.title}/>
          </div>
        </div>
      </>
    )
  }

  const SignupButton = () => {
    return(
      <>
        <button className="signupButton">Sign Up</button>
      </>
    )
  }

  return (
    <div className="login-signup-app">
      <h1 className="signupGreeting">Sign Up</h1>

      <div className="signup-form">
        <div className="signup-text">
          <label htmlfor="username"><p className="login-title">Username</p></label>
        </div>
        <input type="text" name="username" id="username"></input>
      </div>

      <div className="signup-form">
        <div className="signup-text">
          <label htmlfor="email" ><p className="login-title">Email</p></label>
        </div>
        <input type="text" name="email" id="email"></input>
      </div>

      <div className="signup-form">
        <div className="signup-text">
          <label htmlfor="password"><p className="login-title">Password</p></label>
        </div>
        <input type="text" name="password" id="password"></input>
      </div>

      <div className="signup-form">
        <div className="signup-text">
          <label htmlfor="confirm-password" ><p className="login-title">Confirm Password</p></label>
        </div>
        <input type="text" name="confirm-password" id="confirm-password"></input>
      </div>

      <br></br>
      <SignupButton />
    </div>
  );
}

export default SignUpPage;