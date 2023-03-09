import pfp from '../../images/pfp.jpg';
import '../../style/profile.css';
import React, {Component} from 'react'

const ProfilePage = () => {
const Name = () => {
    return (
        <div className='nameDiv'>
            <p className='profile-text'>Name</p>
            <br></br>
            <input id = "profile-text-box"/>
        </div>
    )
}

const Username = () => {
    return (
        <div className='nameDiv'>
            <p className='profile-text'>Username</p>
            <br></br>
            <input id = "profile-text-box"/>
        </div>
    )
}

const Website = () => {
    return (
        <div className='nameDiv'>
            <p className='profile-text'>Website</p>
            <br></br>
            <input id = "profile-text-box"/>
        </div>
    )
}

const Bio = () => {
    return (
        <div className='bioDiv'>
            <p className = "profile-text">Bio</p>
            <br></br>
            <input id="bio-text-box"/>
        </div>
    )
}

const Email = () => {
    return (
        <div className='nameDiv'>
            <p className='profile-text'>Email</p>
            <br></br>
            <input id = "profile-text-box"/>
        </div>
    )
}

    return (
        <div className='App' style={{textAlign:'center'}}>
            <div className='navigator'>
            <div style = {{display: "flex", alignItems: "center"}}>
                <div>
                    <div className = "hamburger"></div>
                    <div className = "hamburger"></div>
                    <div className = "hamburger"></div>
                </div>
            <p style = {{color: "black", fontFamily: "Times", fontSize: "35px", backgroundColor: "#FFE455"}}>Profile</p>
            </div>
            </div>
            <br></br>
            <br></br>
            <img className="profile-pfp" src = {pfp}></img>
            <br></br>
            <br></br>
            <button style = {{fontFamily: "Times", backgroundColor: "#FFE455"}}>Edit Profile Photo</button>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Name />
            <br></br>
            <Username />
            <br></br>
            <Website />
            <br></br>
            <Bio />
            <br></br>
            <Email />
            <br></br>
            <br></br>
        </div>
    )
}

export default ProfilePage