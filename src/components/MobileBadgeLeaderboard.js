import '../style/profile.css';
import '../style/leaderboard.css';
import { Link } from 'react-router-dom';
import React, { useState } from 'react'
import Axios from 'axios';
import Navbar from './Navbar';
import SlideoutMenu from './SlideoutMenu';
import goldBadge from '../images/goldnew.png'
import silverBadge from '../images/silvernew-1.png'
import bronzeBadge from '../images/Bronzenew.png'

function MobileLeaderboard () {

    const [showSlideout, setShowSlideout] = useState(false)

    function displaySlideoutMenu(){
        setShowSlideout(!showSlideout)
    }

    const MobileBadgeNav = () => {
        return(
            <div className='mobileBadgeNav'>
                <a class='active' href='#recreation' style={{color: 'white'}}>Recreation</a>
                <a href = '#volunteer' style={{color: 'white'}}>Volunteer</a>
                <a href = '#entertainment' style={{color: 'white'}}>Entertainment</a>
                <a href = '#food' style={{color: 'white'}}>Food</a>
                <a href = '#adult' style={{color: 'white'}}>Adult</a>
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
                <div className='light-row-mobile'>
                    <p className='rank'>1</p>
                    <p className='leaderName'>johntolo99</p>
                    <img className="badge-pic-mobile" src = {goldBadge}></img>
                    <p className='leaderEventsAttendedMobile'>64</p>
                </div>
                <div className='dark-row-mobile'>
                    <p className='rank'>2</p>
                    <p className='leaderName'>asmith47</p>
                    <img className="badge-pic-mobile" src = {goldBadge}></img>
                    <p className='leaderEventsAttendedMobile'>61</p>
                </div>
                <div className='light-row-mobile'>
                    <p className='rank'>3</p>
                    <p className='leaderName'>cseStud39</p>
                    <img className="badge-pic-mobile" src = {goldBadge}></img>
                    <p className='leaderEventsAttendedMobile'>55</p>
                </div>
                <div className='dark-row-mobile'>
                    <p className='rank'>4</p>
                    <p className='leaderName'>jgreen48</p>
                    <img className="badge-pic-mobile" src = {silverBadge}></img>
                    <p className='leaderEventsAttendedMobile'>54</p>
                </div>
                <div className='light-row-mobile'>
                    <p className='rank'>5</p>
                    <p className='leaderName'>eventGoer6</p>
                    <img className="badge-pic-mobile" src = {silverBadge}></img>
                    <p className='leaderEventsAttendedMobile'>50</p>
                </div>
                <div className='dark-row-mobile'>
                    <p className='rank'>6</p>
                    <p className='leaderName'>maryb716</p>
                    <img className="badge-pic-mobile" src = {silverBadge}></img>
                    <p className='leaderEventsAttendedMobile'>45</p>
                </div>
                <div className='light-row-mobile'>
                    <p className='rank'>7</p>
                    <p className='leaderName'>potterh713</p>
                    <img className="badge-pic-mobile" src = {silverBadge}></img>
                    <p className='leaderEventsAttendedMobile'>39</p>
                </div>
                <div className='dark-row-mobile'>
                    <p className='rank'>8</p>
                    <p className='leaderName'>jeffreyp4</p>
                    <img className="badge-pic-mobile" src = {silverBadge}></img>
                    <p className='leaderEventsAttendedMobile'>37</p>
                </div>
                <div className='light-row-mobile'>
                    <p className='rank'>9</p>
                    <p className='leaderName'>coder69</p>
                    <img className="badge-pic-mobile" src = {bronzeBadge}></img>
                    <p className='leaderEventsAttendedMobile'>33</p>
                </div>
                <div className='dark-row-mobile'>
                    <p className='rank' style={{marginLeft: '-50px'}}>10</p>
                    <p className='leaderName'>billsmafia21</p>
                    <img className="badge-pic-mobile" src = {bronzeBadge}></img>
                    <p className='leaderEventsAttendedMobile'>31</p>
                </div>
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