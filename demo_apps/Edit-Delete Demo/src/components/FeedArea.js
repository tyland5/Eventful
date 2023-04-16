import React from 'react'
import FeedPost from './FeedPost'
import dummy_pfp from "../images/dummy-pfp.png"
import dummy_post from "../images/dummy-post.jpg"
import rutgers_park from "../images/rutgers-park.jpg"
import Editpost from './Editpost'

const FeedArea = () => {
  return (
    <div className ="feed-area">
        <FeedPost pfp = {dummy_pfp} posterName = "Company 1" thumbnail= {dummy_post} />
        <div >
      <div class="row">
        <div class="col">
        <button class="btn btn-danger form-control  btn-block" >Edit</button></div>
      <div class="col">
        <button class="btn btn-primary form-control btn-block">Delete</button>
        </div>
    </div>
  </div>

        <FeedPost pfp = {dummy_pfp} posterName = "Company 2" thumbnail= {rutgers_park}/>
        <FeedPost pfp = {dummy_pfp} posterName = "Company 3" thumbnail= {dummy_post} />
        <FeedPost pfp = {dummy_pfp} posterName = "Company 4" thumbnail= {rutgers_park}/>
    </div>
  )
}

export default FeedArea
