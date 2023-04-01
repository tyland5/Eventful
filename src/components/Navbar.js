import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom';



const Navbar = ({displaySlideoutMenu}) => {

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
            <Link to="/edit-profile" className="routing-link" ><p className='nav-links'>Profile</p></Link>
            <Link to="/account-settings" className="routing-link" ><p className='nav-links'>Account Settings</p></Link>
            <Link to="/login" className="routing-link" ><p className='nav-links'>Login</p></Link>
            <p className='nav-links' onClick={SignoutFunction}>Sign Out</p>

        </div>
        <div className="nav-logsign-btns">
            <button type="button" className="btn btn-secondary">Sign up</button>
        </div>
    </div>
  )
}

export default Navbar