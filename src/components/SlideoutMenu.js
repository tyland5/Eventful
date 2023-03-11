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
              <Link to="/login">Log In</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
        </ul>
    </div>
  )
}

export default SlideoutMenu