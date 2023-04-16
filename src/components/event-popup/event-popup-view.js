import React, {useState, useEffect} from 'react'
import "../../style/eventPopup.css";
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Xbutton from '../../images/X-button.png'
import FeedPost from '../home/FeedPost'
import axios from 'axios'


const EventPopup = ({post_id, pfp, posterName, title, thumbnail, numBookmarked, eventTag, displayEventPopup}) => {
  
  var date = new Date().getDate(); //To get the Current Date
  var month = new Date().getMonth() + 1; //To get the Current Month
  var year = new Date().getFullYear(); //To get the Current Year
  const [showEventPopup = FeedPost.showEventPopup, setEventPopup = FeedPost.setEventPopup] = useState(false)

    function displayEventPopup(){
        setEventPopup(!showEventPopup)
    }
  
  const Button = (props) => {
    return(
      <>
        <button className="loginButton">{props.title}</button>
      </>
    )
  }

  const [comment, setComment] = useState([]);
  const[error, setError] = useState("");

  useEffect(() => {

    axios.post("https://www-student.cse.buffalo.edu/CSE442-542/2023-Spring/cse-442b/load-comment.php", post_id)
    // axios.get("http://localhost/load-event.php")
    .then(val => {

      if(val.data !== "Nothing"){
        setComment(val.data)
        // console.log(val.data);
      }
      
      })

  }, [comment]);






  return (
    <>
      
        <div className='image-info-boxes-div'>
          <img className ="post-popup-thumbnail" src={thumbnail} alt= {`${posterName}'s thumbnail`}/>
          <div className='description-box-container'>
            <p className='description-box-title'>Description</p>
            <p className='description'>
                Come to the event for tons of fun and games!
            </p>
          </div>

          <div className='location-box-container'>
            <p className='location-box-title'>Location</p>
            <p className='location'>
                madison square garden
            </p>
          </div>

          <div className='comments-box-container'>
            <div className='comments-box-title'>Comments
              <div className='comments'>
                <p className='commenter'>

                {comment.map((value, idx) => {
                    return (
                      <>
                      <p className='commenter'> </p>
                          <p className='comment-time-stamp'>{comment[idx].date}</p>
                          <img className='comments-pfp' src = {pfp}></img>
                          <p className='commenter-username'>{comment[idx].username} :</p>
                          <p className='the-comment'>{comment[idx].comment}</p>
                          {/* <p > {pfp} posterName = {comment[idx].user_id} comment = {comment[idx].comment} date = {comment[idx].date}</p > */}
                      </>
                    )
                    })}

                  </p>
              </div>
            </div>
          </div>
        </div>
  
        

      

    </>
  )
}

export default EventPopup