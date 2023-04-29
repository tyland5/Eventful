import React from 'react'
import addIcon from "../../images/add-post-icon.png"
import { BrowserRouter, Route, Link } from 'react-router-dom';

const LeaderboardRow = ({username, rank, rowColor, badge, eventsAttended}) => {
  return (
    <>
      <div className={rowColor}>
          <p className='rank'>{rank}</p>
          <p className='leaderName'>{username}</p>
          <img className="badge-pic" src = {badge}></img>
          <p className='leaderEventsAttended'>{eventsAttended}</p>
      </div>
    </>
  )
}

export default LeaderboardRow