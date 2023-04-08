import React, {useState} from 'react'
import "../../style/eventPopup.css";
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Xbutton from '../../images/X-button.png'
import FeedPost from '../home/FeedPost'


const EventPopup = ({pfp, posterName, title, thumbnail, numBookmarked, eventTag, displayEventPopup}) => {
  
  
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
            <p className='comments-box-title'>Comments</p>
            <p className='comments'>
                10/10 event, would go again
            </p>
          </div>
        </div>
  
        

      

    </>
  )
}

export default EventPopup