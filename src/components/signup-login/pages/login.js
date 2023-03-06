import './signupLogin.css';

const App = () => {
  const TextBar = (props) => {
    return(
      <>
        <div className="signupDiv">
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
        <button className="button">{props.title}</button>
      </>
    )
  }
  

  return (
    <div className="App">
      <h1 className="signupGreeting">Log In</h1>
      <TextBar title={"Username"}/>
      <TextBar title={"Password"}/>
      <p className="forgotPass">forgot your password?</p>
      <br></br>
      <Button title={"Log In"}/>
      <p className="dontHaveAccount">Don't have an account?</p>

      <div className="signUpButton">
        <Button title={"Sign Up"}/>
      </div>
      
    </div>
  );
}

export default App;
