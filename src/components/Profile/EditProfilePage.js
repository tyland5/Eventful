import pfp from '../../images/pfp.jpg';
import '../../style/profile.css';
import { Link } from 'react-router-dom';
import React, { useState } from 'react'
import Axios from 'axios';
import e from 'cors';

function EditProfile () {

    const [details, setDetails] = useState({name: "", displayname: "", website: "", bio: ""});
    const [save, setSave] = useState(false);

    const SaveProfile = details => {
        console.log(details);
        async function updateProfile(){
            const {data} = await Axios.post('http://localhost/edit-profile.php', {
                name: details.name,
                displayname: details.displayname,
                website: details.website,
                bio: details.bio
        })
        console.log(data)
        return data
            };
            updateProfile().then(val => {
                console.log(val);
                console.log("Changes Saved");
            })
        }

    const SaveHandler = async (e) => {
        e.preventDefault();
        SaveProfile(details);
        setSave(true);
    }

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
                <Link to="/edit-profile"><button style = {{backgroundColor: "#B3B3B3", fontFamily: "Times"}}>Edit Profile</button></Link>
                <Link to="/account-settings"><button style = {{backgroundColor: "#FFE455", fontFamily: "Times"}}>Account Settings</button></Link>
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
            <p className='profile-text'>Name</p>
            <br></br>
            <input  id = "profile-text-box" onChange={e => setDetails({...details, name: e.target.value})} value={details.name}/>
            <br></br>
            <br></br>
            <p className='profile-text'>Display Name</p>
            <br></br>
            <input  id = "profile-text-box" onChange={e => setDetails({...details, displayname: e.target.value})} value={details.displayname}/>
            <br></br>
            <br></br>
            <p className='profile-text'>Website</p>
            <br></br>
            <input  id = "profile-text-box" onChange={e => setDetails({...details, website: e.target.value})} value={details.website}/>
            <br></br>
            <br></br>
            <p className = "profile-text">Bio</p>
            <br></br>
            <input id = "bio-text-box" onChange={e => setDetails({...details, bio: e.target.value})} value={details.bio}/>
            <br></br>
            <br></br>
            <button style = {{backgroundColor: '#00C52B', height:40, fontFamily: "Times", borderRadius:8}} onClick = {SaveHandler}>Save Changes</button>
            <br></br>
            <br></br>
            {save && <p className='profile-text'>Changes Saved!</p>}
        </div>
    )
}
export default EditProfile