import pfp from '../../images/pfp.jpg';
import '../../style/profile.css';
import { Link } from 'react-router-dom';
import React, { useState } from 'react'
import Axios from 'axios';
import Navbar from '../Navbar';
import SlideoutMenu from '../SlideoutMenu';

function EditProfile () {

    const [details, setDetails] = useState({name: "", displayname: "", website: "", bio: ""});
    const [save, setSave]=useState(false);
    const [refreshed, setRefresh] = useState(true);

    const [showSlideout, setShowSlideout] = useState(false)
    
    function displaySlideoutMenu(){
        setShowSlideout(!showSlideout)
    }

    async function FillProfile() {
        const response = await Axios.get('http://localhost/loadSettings.php');
        if(response.data)
            setDetails({...details, name: response.data[1], displayname: response.data[2], website: response.data[3], bio: response.data[4]})
    }

    if(refreshed){
        setRefresh(false);
        FillProfile();
    }

    const SaveProfile = details => {
        async function updateProfile(){
            const {data} = await Axios.post("http://localhost/edit-profile.php", {
                name: details.name,
                displayname: details.displayname,
                website: details.website,
                bio: details.bio
            })
            console.log(data)
            return data
        };
            updateProfile()
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
            <div className="App" style = {{textAlign: 'left'}}>
              <Navbar displaySlideoutMenu={displaySlideoutMenu}/>
              {showSlideout && <SlideoutMenu />}
            </div>
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
            <p className='profile-text'>Name</p>
            <br></br>
            <input id = "profile-text-box" onChange = {e => setDetails({...details, name: e.target.value})} value={details.name}/>
            <script>console.log(refreshed);</script>
            <br></br>
            <br></br>
            <p className='profile-text'>Display Name</p>
            <br></br>
            <input  id = "profile-text-box" onChange={e => setDetails({...details, displayname: e.target.value})} value={details.displayname}/>
            <br></br>
            <br></br>
            <p className='profile-text'>Website</p>
            <br></br>
            <input id = "profile-text-box" onChange={e => setDetails({...details, website: e.target.value})} value={details.website}/>
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