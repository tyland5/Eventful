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

function Leaderboard () {

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

    const SideNav = () => {
        return(
            <ul className='sideNav'>
                <div style={{backgroundColor:'#262625', height:'42px'}}/>
                <Link to="/leaderboard" className="routing-link"><li><a href='#recreation'>Recreation</a></li></Link>
                <Link to="/volunteer-leaderboard" className="routing-link"><li><a href = '#volunteer'>Volunteer</a></li></Link>
                <Link to="/entertainment-leaderboard" className="routing-link"><li><a href = '#entertainment'>Entertainment</a></li></Link>
                <Link to="/food-leaderboard" className="routing-link"><li><a class='active' href = '#food'>Food</a></li></Link>
                <Link to="/adult-leaderboard" className="routing-link"><li><a href = '#adult'>Adult</a></li></Link>
            </ul>
        )
    }

    function RowColor(idx){
        if (idx == 0){
            return "light-row"
        }
        else if (idx % 2 == 1){
            return "dark-row"
        }else{
            return "light-row"
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

    const Leaderboard = () => {
        return (
            <div className='leader'>
                <div style={{backgroundColor:'black', height:'10px'}}/>
                <p className='header-text' style={{textAlign: 'left', paddingLeft: '220px'}}>Leaderboard</p>
                <div style={{backgroundColor:'black', height:'10px'}}/>
                <div style={{backgroundColor: "#6F38C5", height: "4px"}}/>
                <br></br>
                <div style={{display:'flex', flexDirection:'row'}}>
                    <p className='user'>Username</p>
                    <p className='badge'>Badge</p>
                    <p className='eventsAttended'>Events Attended</p>
                </div>
                {createLeaderboard.map((value, idx) => {
                    return (
                        <LeaderboardRow username={createLeaderboard[idx].user_id} rank={idx+1} rowColor={RowColor(idx)} badge={BadgeType(createLeaderboard[idx].food)} eventsAttended={createLeaderboard[idx].food}/>
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
            <SideNav/>
            <Leaderboard/>
        </div>
    )
}
export default Leaderboard