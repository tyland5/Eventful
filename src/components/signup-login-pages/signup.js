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
      <TextBar title={"Username"}/>
      <TextBar title={"Email"}/>
      <TextBar title={"Password"}/>
      <TextBar title={"Confirm Password"}/>
      <br></br>
      <SignupButton />
    </div>
  );
}

export default SignUpPage;