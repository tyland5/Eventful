import React from 'react'

const Navbar = ({displaySlideoutMenu}) => {
  return (
    <div className="navigator">
        <div style = {{display: "flex", alignItems: "center"}}>
            <div className='hamburger-icon' onClick={displaySlideoutMenu}>
                <div className = "hamburger"></div>
                <div className = "hamburger"></div>
                <div className = "hamburger"></div>
            </div>
            <p className='nav-logo'>Company</p>
            <p className='nav-links'>Search</p>
            <p className='nav-links'>Notifications</p>
            <p className='nav-links'>Profile</p>
        </div>
        <div className="nav-logsign-btns">
            <button type="button" className="btn btn-secondary">Sign up</button>
        </div>
    </div>
  )
}

export default Navbar