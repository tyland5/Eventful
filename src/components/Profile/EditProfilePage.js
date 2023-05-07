import pfp from '../../images/dummy-pfp.png';
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
    const [displayPic, setDisplayPic] = useState(pfp)
    
    function displaySlideoutMenu(){
        setShowSlideout(!showSlideout)
    }

    async function FillProfile() {
        const response = await Axios.get('https://www-student.cse.buffalo.edu/CSE442-542/2023-Spring/cse-442b/loadSettings.php');
        if(response.data)
            setDetails({...details, name: response.data[1], displayname: response.data[2], website: response.data[3], bio: response.data[4]})
    }

    async function getUserPfp() {
        const response = await Axios.get('https://www-student.cse.buffalo.edu/CSE442-542/2023-Spring/cse-442b/uploadPfp.php');
        if(response.data){
            console.log(response.data)
            const url = 'https://www-student.cse.buffalo.edu/CSE442-542/2023-Spring/cse-442b/' + response.data;
            setDisplayPic(url)
        }
    }

    if(refreshed){
        setRefresh(false);
        FillProfile();
        getUserPfp();
    }

    const SaveProfile = details => {
        async function updateProfile(){
            const {data} = await Axios.post("https://www-student.cse.buffalo.edu/CSE442-542/2023-Spring/cse-442b/edit-profile.php", {
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

    const uploadPic = async e => {
        const image = URL.createObjectURL(e.target.files[0])
        setDisplayPic(image)
        console.log(e.target.files[0])

        const fd = new FormData()
        fd.append('image', e.target.files[0])
        const {data} = await Axios.post("https://www-student.cse.buffalo.edu/CSE442-542/2023-Spring/cse-442b/edit-profile-pic.php", fd)
        console.log(data)
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
            <img className="profile-pfp" src = {displayPic}></img>
            <br></br>
            <br></br>
            <label htmlFor='filePicker' className='profile-pic-button'>Edit Profile Pic</label>
            <input id='filePicker' type='file' accept='image/png, image/jpg, image/jpeg' style={{display:'none'}} onChange={(e) => uploadPic(e)}></input>
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