import '../../style/profile.css';
import '../../style/leaderboard.css';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import Navbar from '../Navbar';
import SlideoutMenu from '../SlideoutMenu';
import goldBadge from '../../images/goldnew.png'
import silverBadge from '../../images/silvernew-1.png'
import bronzeBadge from '../../images/Bronzenew.png'
import LeaderboardRow from './Leaderboard-display-users';
import axios from 'axios'
import diamondBadge from '../../images/blue-star.png'
import blankImage from '../../images/empty_img.png'
import LeaderboardMobile from './Mobile-Leaderboard-display'

function MobileLeaderboard () {

    const[createLeaderboard, setLeaderboard] = useState([])
    const displayLeaderboard = async () => {
        await axios.post("https://www-student.cse.buffalo.edu/CSE442-542/2023-Spring/cse-442b/leaderboard-data.php", {category: "food"}).then((val) =>{
            //console.log("current dislikes: ")
            console.log(val.data)
            setLeaderboard(val.data)
        if(val.data === "not connected"){
            //console.log("not connected to database")
            }
            else if (val.data === "done"){
            //console.log("all done")
            }
        }, (error) => {
            console.log(error);
        });
    }
    useEffect(() => {
        displayLeaderboard()
    }, [])
    const [showSlideout, setShowSlideout] = useState(false)

    function displaySlideoutMenu(){
        setShowSlideout(!showSlideout)
    }

    function RowColor(idx){
        if (idx == 0){
            return "light-row-mobile"
        }
        else if (idx % 2 == 1){
            return "dark-row-mobile"
        }else{
            return "light-row-mobile"
        }
    }

    function BadgeType(attendance){
        if (attendance >= 1 && attendance < 5){
            return bronzeBadge
        }
        else if(attendance >= 5 && attendance < 10){
            return silverBadge
        }
        else if(attendance >= 10 && attendance < 20){
            return goldBadge
        }
        else if(attendance >= 20){
            return diamondBadge
        }
        else if (attendance == 0){
            return blankImage
        }
    }

    const MobileBadgeNav = () => {
        return(
            <div className='mobileBadgeNav'>
                <Link to="/mobile-leaderboard" className='routing-link'><a href='#recreation' style={{color: 'white'}}>Recreation</a></Link>
                <Link to="/mobile-volunteer-leaderboard" className='routing-link'><a href = '#volunteer' style={{color: 'white'}}>Volunteer</a></Link>
                <Link to="/mobile-entertainment-leaderboard" className='routing-link'><a href = '#entertainment' style={{color: 'white'}}>Entertainment</a></Link>
                <Link to="/mobile-food-leaderboard" className='routing-link'><a className="active" href = '#food' style={{color: 'white'}}>Food</a></Link>
                <Link to="/mobile-adult-leaderboard" className='routing-link'><a href = '#adult' style={{color: 'white'}}>Adult</a></Link>
            </div>
        )
    }

    const Leaderboard = () => {
        return (
            <div className='leader'>
                <div style={{display:'flex', flexDirection:'row'}}>
                    <p className='userMobile'>Username</p>
                    <p className='badgeMobile'>Badge</p>
                    <p className='eventsAttendedMobile'>Events Attended</p>
                </div>
                {createLeaderboard.map((value, idx) => {
                    return (
                        <LeaderboardMobile username={createLeaderboard[idx].user_id} rank={idx+1} rowColor={RowColor(idx)} badge={BadgeType(createLeaderboard[idx].food)} eventsAttended={createLeaderboard[idx].food}/>
                    )
                })}
            </div>
        )
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
            <div className='leader'>
                <div style={{backgroundColor:'black', height:'10px'}}/>
                <p className='header-text' style={{textAlign: 'left', marginLeft:'15px'}}>Leaderboard</p>
                <div style={{backgroundColor:'black', height:'10px'}}/>
                <div style={{backgroundColor: "#6F38C5", height: "4px"}}/>
            </div>
            <MobileBadgeNav/>
            <br></br>
            <br></br>
            <Leaderboard/>
        </div>
    )
}
export default MobileLeaderboard