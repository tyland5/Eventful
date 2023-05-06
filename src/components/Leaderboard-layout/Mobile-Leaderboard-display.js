import React from 'react'
import addIcon from "../../images/add-post-icon.png"
import { BrowserRouter, Route, Link } from 'react-router-dom';

const LeaderboardRow = ({username, rank, rowColor, badge, eventsAttended}) => {
  return (
    <>
      <div className={rowColor}>
          <p className='rank'>{rank}</p>
          <p className='leaderName'>{username}</p>
          <img className="badge-pic-mobile" src = {badge}></img>
          <p className='leaderEventsAttendedMobile'>{eventsAttended}</p>
      </div>
    </>
  )
}

export default LeaderboardRow