import pfp from '../../images/pfp.jpg';
import '../../style/profile.css';
import React, {Component} from 'react'
import { useState } from 'react';

const TextBox = ({title}) => {
    return (
        <div className='nameDiv'>
            <p className='profile-text'>{title}</p>
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

const EditProfilePage = () => {
    return (
        <div className='App' style={{textAlign:'center'}}>
            <div className='navigator'>
            <div style = {{display: "flex"}}>
                <div>
                    <div className = "hamburger"></div>
                    <div className = "hamburger"></div>
                    <div className = "hamburger"></div>
                </div>
            <p style = {{color: "black", fontFamily: "Times", fontSize: "35px", backgroundColor: "#FFE455", textAlign:'center'}}>Settings</p>
            </div>
            <div className='settings-button'>
                <button style = {{backgroundColor: "#B3B3B3", fontFamily: "Times"}}>Edit Profile</button>
                <button style = {{backgroundColor: "#FFE455", fontFamily: "Times"}}>Account Settings</button>
            </div>
            </div>
            <br></br>
            <br></br>
            <img className="profile-pfp" src = {pfp}></img>
            <br></br>
            <br></br>
            <button style = {{fontFamily: "Times", backgroundColor: "#FFE455", borderRadius:6}}>Edit Profile Photo</button>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <TextBox title = "Name"/>
            <br></br>
            <TextBox title = "Username"/>
            <br></br>
            <TextBox title = "Website"/>
            <br></br>
            <Bio />
            <br></br>
            <br></br>
            <button style = {{backgroundColor: '#00C52B', height:40, fontFamily: "Times", borderRadius:8}}>Save Changes</button>
            <br></br>
            <br></br>
        </div>
    )
}

const AccountSettingsPage = () => {
    return (
        <div className='App' style={{textAlign:'center'}}>
            <div className='navigator'>
            <div style = {{display: "flex"}}>
                <div>
                    <div className = "hamburger"></div>
                    <div className = "hamburger"></div>
                    <div className = "hamburger"></div>
                </div>
            <p style = {{color: "black", fontFamily: "Times", fontSize: "35px", backgroundColor: "#FFE455", textAlign:'center'}}>Settings</p>
            </div>
            <div className='settings-button'>
                <button style = {{backgroundColor: "#FFE455", fontFamily: "Times"}}>Edit Profile</button>
                <button style = {{backgroundColor: "#B3B3B3", fontFamily: "Times"}} onClick = {AccountSettingsPage}>Account Settings</button>
            </div>
            </div>
            <br></br>
            <TextBox title = "First Name"/>
            <br></br>
            <TextBox title = "Last Name"/>
            <br></br>
            <TextBox title = "Email"/>
            <br></br>
            <TextBox title = "Phone Number"/>
            <br></br>
            <TextBox title = "Password"/>
            <br></br>
            <br></br>
            <button style = {{height:30, width:300, fontFamily: "Times", borderRadius: 6}}>Change Password</button>
            <br></br>
            <br></br>
            <button style = {{backgroundColor: '#00C52B', height:40, fontFamily: "Times", borderRadius:8}}>Save Changes</button>
            </div>
    )
}
export default EditProfilePage