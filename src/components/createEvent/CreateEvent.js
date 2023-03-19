import React from 'react'
import { useState } from 'react'
import PreviewImages from './PreviewImages'
import { BrowserRouter, Route, Link } from 'react-router-dom';

//if you want to remove react-date-picker pkg, go to sprint2-staticCreateEvent branch
//and look for first pull from dev. that's where you'll get the package-lock and package.json prior to this
import DateTimePicker from 'react-datetime-picker' //https://github.com/wojtekmaj/react-date-picker

const CreateEvent = () => {

    const [eventTitle, setEventTitle] = useState("")
    const [eventDateTime, changeEventDateTime] = useState(new Date())
    const [eventLocation, setEventLocation] = useState("")
    const [eventType, setEventType] = useState("")
    const [eventDescription, setEventDescription] = useState("")
    const [eventThumbnail, setEventThumbnail] = useState("")
    const [eventImages, setEventImages] = useState([])
    const [submittable, setSubmittable] = useState(true)
    


    function uploadImages(e){
        const imageList = e.target.files
        const images = []
        
        for(let i = 0; i < imageList.length; i++){
            images.push(URL.createObjectURL(imageList[i]))
        }

        //note this might not be the final format necessary for storage of images 
        //in data base. This only guarantees an preview of the images in the page
        setEventImages(images)
        
    }

    function uploadThumbnail(e){
        if(e.target.files.length !== 0){
            const image = URL.createObjectURL(e.target.files[0])
            setEventThumbnail(image)
        }
        else{
            //get rid of preview and fail submit since user didn't properly select
            setEventThumbnail("") 
        }
    }

    function onSubmit(e){
        e.preventDefault()

        //Check input for users
        //might have to use google api to validate address
        //might have to check date so it's not before current
        if(eventTitle === "" || eventLocation === "" || eventType === "" || eventType === "Select Type" || 
        eventThumbnail === "" || eventImages.length === 0 || eventDescription ===""){
            setSubmittable(false)
            return
        }

        //got past all the checks so
        setSubmittable(true)

        /*
        // used for testing
        console.log(eventTitle)
        console.log(eventDateTime)
        console.log(eventLocation)
        console.log(eventType)
        console.log(eventDescription)
        console.log(eventThumbnail)
        console.log(eventImages)
        */

        //put whatever php/sql things you need here


    }


    return (
        <form id='create-event' onSubmit={onSubmit}>

            <div className='create-event-section'>
                <label hmtlFor="create-title">Event Title</label>
                <input id="create-title" type="text" onChange = {(e) => setEventTitle(e.target.value)}/>
            </div>
            
            <div className='create-event-section'>
                <label hmtlFor="create-date">When?</label>
                <div id="create-date">
                    <DateTimePicker onChange={changeEventDateTime} value={eventDateTime} />
                </div>
            </div>

            <div className='create-event-section'>
                <label hmtlFor="create-location">Where?</label>
                <input id="create-location" type="text" onChange = {(e) => setEventLocation(e.target.value)}/>
            </div>

            <div className='create-event-section'>
                <label htmlFor= 'create-tag'>What type of Event is this?</label>
                <select id="create-tag" onChange={(e) => setEventType(e.target.value)}>
                    <option>Select Type</option> {/*Helps user trigger onChange event*/}
                    <option>Recreation</option>
                    <option>Volunteer</option>
                    <option>Entertainment</option>
                    <option>Food</option>
                    <option>Adult</option>
                </select>
            </div>

            <div className='create-event-section'>
                <label hmtlFor="create-description">Event Description</label>
                <textarea id="create-description" onChange = {(e) => setEventDescription(e.target.value)}/>
            </div>

            <div className='create-event-section'>
                <label hmtlFor="create-thumbnail">Event Thumbnail</label>
                <input id="create-thumbnail" type= "file" accept='image/png, image/jpg' onChange={(e) => uploadThumbnail(e)}/>
            </div>

            {eventThumbnail && <img id="preview-thumbnail" alt = "preview-thumbnail" src= {eventThumbnail}/>}

            <div className='create-event-section'>
                <label hmtlFor="create-images">Event Images</label>
                <input id="create-images" type= "file" accept='image/png, image/jpg' multiple onChange={(e) => uploadImages(e)}/>
            </div>

            {eventImages && <PreviewImages images= {eventImages}/>} 

            <Link to="/"><button type= "button" className='cancel-create-event'>Cancel</button></Link>
            <button type = "submit" className='create-event-submit' form = "create-event">Post</button>

            {!submittable && <p id="create-error">Please fill in all fields properly</p>}
        </form>
  )
}

export default CreateEvent
