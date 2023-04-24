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

function Leaderboard () {

    const [showSlideout, setShowSlideout] = useState(false)

    function displaySlideoutMenu(){
        setShowSlideout(!showSlideout)
    }

    const SideNav = () => {
        return(
            <ul className='sideNav'>
                <div style={{backgroundColor:'#262625', height:'42px'}}/>
                <li><a class='active' href='#recreation'>Recreation</a></li>
                <li><a href = '#volunteer'>Volunteer</a></li>
                <li><a href = '#entertainment'>Entertainment</a></li>
                <li><a href = '#food'>Food</a></li>
                <li><a href = '#adult'>Adult</a></li>
            </ul>
        )
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
                <div className='light-row'>
                    <p className='rank'>1</p>
                    <p className='leaderName'>johntolo99</p>
                    <img className="badge-pic" src = {goldBadge}></img>
                    <p className='leaderEventsAttended'>64</p>
                </div>
                <div className='dark-row'>
                    <p className='rank'>2</p>
                    <p className='leaderName'>asmith47</p>
                    <img className="badge-pic" src = {goldBadge}></img>
                    <p className='leaderEventsAttended'>61</p>
                </div>
                <div className='light-row'>
                    <p className='rank'>3</p>
                    <p className='leaderName'>cseStud39</p>
                    <img className="badge-pic" src = {goldBadge}></img>
                    <p className='leaderEventsAttended'>55</p>
                </div>
                <div className='dark-row'>
                    <p className='rank'>4</p>
                    <p className='leaderName'>jgreen48</p>
                    <img className="badge-pic" src = {silverBadge}></img>
                    <p className='leaderEventsAttended'>54</p>
                </div>
                <div className='light-row'>
                    <p className='rank'>5</p>
                    <p className='leaderName'>eventGoer6</p>
                    <img className="badge-pic" src = {silverBadge}></img>
                    <p className='leaderEventsAttended'>50</p>
                </div>
                <div className='dark-row'>
                    <p className='rank'>6</p>
                    <p className='leaderName'>maryb716</p>
                    <img className="badge-pic" src = {silverBadge}></img>
                    <p className='leaderEventsAttended'>45</p>
                </div>
                <div className='light-row'>
                    <p className='rank'>7</p>
                    <p className='leaderName'>potterh713</p>
                    <img className="badge-pic" src = {silverBadge}></img>
                    <p className='leaderEventsAttended'>39</p>
                </div>
                <div className='dark-row'>
                    <p className='rank'>8</p>
                    <p className='leaderName'>jeffreyp4</p>
                    <img className="badge-pic" src = {silverBadge}></img>
                    <p className='leaderEventsAttended'>37</p>
                </div>
                <div className='light-row'>
                    <p className='rank'>9</p>
                    <p className='leaderName'>coder69</p>
                    <img className="badge-pic" src = {bronzeBadge}></img>
                    <p className='leaderEventsAttended'>33</p>
                </div>
                <div className='dark-row'>
                    <p className='rank' style={{marginLeft: '-50px'}}>10</p>
                    <p className='leaderName'>billsmafia21</p>
                    <img className="badge-pic" src = {bronzeBadge}></img>
                    <p className='leaderEventsAttended'>31</p>
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
            <SideNav/>
            <Leaderboard/>
        </div>
    )
}
export default Leaderboard