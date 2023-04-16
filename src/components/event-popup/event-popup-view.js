import React, {useState} from 'react'
import "../../style/eventPopup.css";
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Xbutton from '../../images/X-button.png'
import FeedPost from '../home/FeedPost'


const EventPopup = ({pfp, posterName, title, thumbnail, numBookmarked, eventTag, displayEventPopup, event}) => {
  
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
                  <p className='comment-time-stamp'>{month}/{date}/{year}</p>
                  <img className='comments-pfp' src={pfp} alt = {`${posterName}'s profile pic`}></img>
                  <p className='commenter-username'>carrot eater:</p>
                  <p className='the-comment'>I enjoyed this event</p>
                </p>
                <p className='commenter'>
                  <p className='comment-time-stamp'>{month}/{date}/{year}</p>
                  <img className='comments-pfp' src={pfp} alt = {`${posterName}'s profile pic`}></img>
                  <p className='commenter-username'>garry:</p>
                  <p className='the-comment'>Event could have been longer</p>
                </p>
                <p className='commenter'>
                  <p className='comment-time-stamp'>{month}/{date}/{year}</p>
                  <img className='comments-pfp' src={pfp} alt = {`${posterName}'s profile pic`}></img>
                  <p className='commenter-username'>bonvoyage:</p>
                  <p className='the-comment'>Food stands were decent. However, there was one lady who didn't give me enough popcorn, so 7/10 event</p>
                </p>
              </div>
            </div>
          </div>
        </div>
  
        

      

    </>
  )
}

export default EventPopup