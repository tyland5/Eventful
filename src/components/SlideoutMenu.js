import React from 'react'

import { BrowserRouter, Route, Link } from 'react-router-dom';

const SlideoutMenu = () => {

  const Button = (props) => {
    return(
      <>
        <button className="loginButton">{props.title}</button>
      </>
    )
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
        </ul>
    </div>
  )
}

export default SlideoutMenu