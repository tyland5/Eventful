import React, {useState, useEffect} from 'react'
import FeedPost from './FeedPost'
import dummy_pfp from "../../images/dummy-pfp.png"
import dummy_post from "../../images/dummy-post.jpg"
import rutgers_park from "../../images/rutgers-park.jpg"
import PostButton from '../createEvent/PostButton'
import axios from 'axios'

const FeedArea = () => {
  const[allowClickEvent, setClickEvent] = useState(true)
  const[showFilters, setShowFilters] = useState(false)
  const[filter, setFilter] = useState(eventTags) //upon first render of page, want to show all events
  const[updatePage, setUpdatePage] = useState(true)
  const eventTags = ["Recreation", "Volunteer", "Entertainment", "Food", "Adult"]

  function allowClickableEvent(){
    setClickEvent(!allowClickEvent)
  }

  function giveClickEvent(){
    return allowClickEvent
  }

  function alterFilter(e){
    const tag = e.target.value
    
    //constant time so not bad
    if(filter.has(tag)){
      filter.delete(tag)
    }
    else{
      filter.add(tag)
    }
    console.log(filter)
  }

  function applyFilter(){
    //Just in case people want to be weird. no filter applied
    if(filter.size ===0){
      setFilter(new Set())
      filter.add("all")
    }

    console.log(filter)
    setShowFilters(!showFilters)
    
  }


  // const [post, setPost] = useState([{poster: "", title: "", type: "", location: "", description: "", thumbnail: "", images: ""}]);
  const [post, setPost] = useState([]);
  const[error, setError] = useState("");

  
    useEffect(() => {
      
      axios.post("https://www-student.cse.buffalo.edu/CSE442-542/2023-Spring/cse-442b/load-event.php", filter)
      // axios.get("http://localhost/load-event.php")
      .then(val => {

        if(val.data !== "Nothing"){
          setPost(val.data)
        }
      })
      
      if (post.length !== 0){
          //console.log(post)
      }
    }, [updatePage]);
    

  return (
    <>
    {/*<p className="filter-btn" >Filter</p>*/}

    <p className='filter-btn' onClick={() => {setShowFilters(!showFilters); setFilter(new Set())}}>Filters</p>
    {showFilters && eventTags.map(event => {
      return(
      <div className='filter-choice'>
      <input className = "filter-box" type= "checkbox" id={event} value={event} onChange={e=>alterFilter(e)}/>
      <label className = "filter-label" htmlFor= {event}>{event}</label> 
      </div>
      )})}
    {showFilters && <button id = 'filter-submit-btn' onClick={applyFilter}>Filter Posts</button>}
    {/*
    <input type= "checkbox" id="Recreation" value="Recreation"/>
    <label htmlFor="Recreation">Recreation</label> 
    <input type= "checkbox" id="Recreation" value="Recreation"/>
    <label htmlFor="Recreation">Recreation</label> 
    <input type= "checkbox" id="Recreation" value="Recreation"/>
    <label htmlFor="Recreation">Recreation</label> 
    
  */} 

    <div className ="feed-area">
      <PostButton/>
    {post.map((value, idx) => {
          return (
            <FeedPost pfp = {dummy_pfp} posterName = {post[idx].poster} title = {post[idx].title} 
        thumbnail= {`https://www-student.cse.buffalo.edu/CSE442-542/2023-Spring/cse-442b/uploads/${post[idx].thumbnail}`} numBookmarked = "400" eventTag= {post[idx].type} allowClickEvent={allowClickEvent}/>
           )
          })}
    </div>
    </>
  )
}

export default FeedArea
