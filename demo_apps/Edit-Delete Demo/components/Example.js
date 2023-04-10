import React, { Component } from "react";
import LoginModal from "react-login-modal";
 
export class Example extends Component {
  handleSignup = (username, email, password) => {};
  handleLogin = (username, password) => {}
 
  render() {
    return (
      <LoginModal
        handleSignup={this.handleSignup}
        handleLogin={this.handleLogin}
      />
    );
  }
}