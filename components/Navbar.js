import React from 'react'
import Loginstate from './Loginstate'

const Navbar = () => {
  return (
    <div className="navigator">
        <div style = {{display: "flex", alignItems: "center"}}>
            <div>
                <div className = "hamburger"></div>
                <div className = "hamburger"></div>
                <div className = "hamburger"></div>
            </div>
            <p>Company</p>
        </div>
        <div className="nav-logsign-btns">
            <button type="button" className="btn btn-secondary">Sign up</button>
            
        </div>
        <div>
        < Loginstate ></Loginstate>
        </div>
    </div>
  )
}

export default Navbar