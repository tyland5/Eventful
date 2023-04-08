import React, {useState, useEffect} from 'react'
import FeedPost from './FeedPost'
import dummy_pfp from "../../images/dummy-pfp.png"
import dummy_post from "../../images/dummy-post.jpg"
import rutgers_park from "../../images/rutgers-park.jpg"
import PostButton from '../createEvent/PostButton'
import axios from 'axios'

const FeedArea = () => {
  const[allowClickEvent, setClickEvent] = useState(true)

  function allowClickableEvent(){
    setClickEvent(!allowClickEvent)
  }

  function giveClickEvent(){
    return allowClickEvent
  }


  // const [post, setPost] = useState([{poster: "", title: "", type: "", location: "", description: "", thumbnail: "", images: ""}]);
  const [post, setPost] = useState([]);
  const[error, setError] = useState("");

  
    let arr = [];
      // axios.get("https://www-student.cse.buffalo.edu/CSE442-542/2023-Spring/cse-442b/load-event.php")
      axios.get("http://localhost/load-event.php")
      .then(val => {

      if (val.data === "Nothing"){
        // No images
      } else {
          //console.log(val.data)
          // for (const i in val.data){
          //     //console.log("HELLO")
          //     //console.log(val.data[i].poster)
          //     setPost(post => [...post, {poster: val.data[i].poster, title: val.data[i].title,
          //        type: val.data[i].type, location: val.data[i].location, description: val.data[i].description }])
                 
          // }
          setPost(val.data)
          
      }
    })
    useEffect(() => {
      if (post.length !== 0){
          //console.log(post)
      }
  }, [post]);
    
    





  return (
    
    
    <>
    <p className="filter-btn" >Filter</p>
    <div className ="feed-area">

    {post.map((value, idx) => {
          return (
            <FeedPost pfp = {dummy_pfp} posterName = {post[idx].poster} title = {post[idx].title} 
        thumbnail= {dummy_post} numBookmarked = "400" eventTag= {post[idx].type} allowClickEvent={allowClickEvent}/>
           )
          })}

        {/* <FeedPost pfp = {dummy_pfp} posterName = "Company 1" title = "Firework showing at Fairgrounds!" 
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
        thumbnail= {rutgers_park} numBookmarked = "400" eventTag= "Recreation"/> */}
    </div>

    <div>
      <PostButton />
    </div>
    </>
  )
}

export default FeedArea
