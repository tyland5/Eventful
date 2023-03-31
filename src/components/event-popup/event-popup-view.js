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
                hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello
            </p>
          </div>

          <div className='location-box-container'>
            <p className='location-box-title'>Location</p>
            <p className='location'>
                over there over there over there over over there over there there over there over there over there over there over there
            </p>
          </div>

          <div className='comments-box-container'>
            <p className='comments-box-title'>Comments</p>
            <p className='comments'>
                very wow very wow very wow very wow very wow very wow very wow very wow very wow very wow very wow very wow very wow very wow very wow 
            </p>
          </div>
        </div>
  
        

      

    </>
  )
}

export default EventPopup