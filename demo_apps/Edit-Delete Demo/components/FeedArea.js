import React from 'react'
import FeedPost from './FeedPost'
import dummy_pfp from "../images/dummy-pfp.png"
import dummy_post from "../images/dummy-post.jpg"
import rutgers_park from "../images/rutgers-park.jpg"


const FeedArea = () => {
  return (
    
    <div className ="feed-area">
      <div class="d-grid gap-2 col-6 mx-auto">
      <a className="btn btn-secondary" href="http://localhost:3000/edit">Edit</a> 
      </div>
        <FeedPost pfp = {dummy_pfp} posterName = "Company 1" thumbnail= {dummy_post} />

        
        <FeedPost pfp = {dummy_pfp} posterName = "Company 2" thumbnail= {rutgers_park}/>
        <FeedPost pfp = {dummy_pfp} posterName = "Company 3" thumbnail= {dummy_post} />
        <FeedPost pfp = {dummy_pfp} posterName = "Company 4" thumbnail= {rutgers_park}/>
    </div>
  )
}

export default FeedArea
