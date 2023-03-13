import '../../style/profile.css';

const TextBox = ({title}) => {
    return (
        <div className='nameDiv'>
            <p className='profile-text'>{title}</p>
            <br></br>
            <input id = "profile-text-box"/>
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
export default AccountSettingsPage