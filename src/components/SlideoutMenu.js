import React from 'react'
import axios from 'axios'

import { BrowserRouter, Route, Link } from 'react-router-dom';

const SlideoutMenu = () => {

  const Button = (props) => {
    return(
      <>
        <button className="loginButton">{props.title}</button>
      </>
    )
  }

  const SignoutFunction = async () =>{
    
    await axios.get('https://www-student.cse.buffalo.edu/CSE442-542/2023-Spring/cse-442b/signout.php').then((response) => {
      if(response.data === "not connected"){
        console.log("not connected to database")
      }
      else if (response.data === "hello"){
        console.log("all done")
      }
    }, (error) => {
      console.log(error);
    });
  }
  

  return (
    <div className='slideout-menu'>
        <ul>
            <li>
              <Link to="/login" className="routing-link">Log In</Link>
            </li>
            <li>
              <Link to="/signup" className="routing-link">Sign Up</Link>
            </li>
            <li>
              <Link to="/edit-profile" className="routing-link">Profile</Link>
            </li>
            <li>
              <Link to="/account-settings" className="routing-link">Account Settings</Link>
            </li>
            <li>
              <p onClick={SignoutFunction}>Sign Out</p>
            </li>
        </ul>
    </div>
  )
}

export default SlideoutMenu