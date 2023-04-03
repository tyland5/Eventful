import React, {useState} from 'react'
import FeedPost from './FeedPost'
import dummy_pfp from "../../images/dummy-pfp.png"
import dummy_post from "../../images/dummy-post.jpg"
import rutgers_park from "../../images/rutgers-park.jpg"
import PostButton from '../createEvent/PostButton'

const FeedArea = () => {
  const[allowClickEvent, setClickEvent] = useState(true)

  function allowClickableEvent(){
    setClickEvent(!allowClickEvent)
  }

  function giveClickEvent(){
    return allowClickEvent
  }

  return (
    <>
    <p className="filter-btn">Filter</p>
    <div className ="feed-area">
        <FeedPost pfp = {dummy_pfp} posterName = "Company 1" title = "Firework showing at Fairgrounds!" 
        thumbnail= {dummy_post} numBookmarked = "400" eventTag= "Recreation" allowClickEvent={allowClickEvent}/>

        <FeedPost pfp = {dummy_pfp} posterName = "Company 2" title = "Basketball Tournament @ Ruckers!" 
        thumbnail= {rutgers_park} numBookmarked = "400" eventTag= "Recreation"/>

        <FeedPost pfp = {dummy_pfp} posterName = "Company 3" title = "Firework showing at Fairgrounds!" 
        thumbnail= {dummy_post} numBookmarked = "400" eventTag= "Recreation" />

        <FeedPost pfp = {dummy_pfp} posterName = "Company 4" title = "Basketball Tournament @ Ruckers!" 
        thumbnail= {rutgers_park} numBookmarked = "400" eventTag= "Recreation"/>

        <FeedPost pfp = {dummy_pfp} posterName = "Company 4" title = "Basketball Tournament @ Ruckers!" 
        thumbnail= {rutgers_park} numBookmarked = "400" eventTag= "Recreation"/>
        <FeedPost pfp = {dummy_pfp} posterName = "Company 4" title = "Basketball Tournament @ Ruckers!" 
        thumbnail= {rutgers_park} numBookmarked = "400" eventTag= "Recreation"/>
        <FeedPost pfp = {dummy_pfp} posterName = "Company 4" title = "Basketball Tournament @ Ruckers!" 
        thumbnail= {rutgers_park} numBookmarked = "400" eventTag= "Recreation"/>
        <FeedPost pfp = {dummy_pfp} posterName = "Company 4" title = "Basketball Tournament @ Ruckers!" 
        thumbnail= {rutgers_park} numBookmarked = "400" eventTag= "Recreation"/>
        <FeedPost pfp = {dummy_pfp} posterName = "Company 4" title = "Basketball Tournament @ Ruckers!" 
        thumbnail= {rutgers_park} numBookmarked = "400" eventTag= "Recreation"/>
        <FeedPost pfp = {dummy_pfp} posterName = "Company 4" title = "Basketball Tournament @ Ruckers!" 
        thumbnail= {rutgers_park} numBookmarked = "400" eventTag= "Recreation"/>
    </div>

    <div>
      <PostButton />
    </div>
    </>
  )
}

export default FeedArea
