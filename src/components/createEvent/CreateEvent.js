import React from 'react'
import { useState } from 'react'
import PreviewImages from './PreviewImages'

const CreateEvent = () => {

    const [eventTitle, setEventTitle] = useState("")
    const [eventDate, setEventDate] = useState("")
    const[eventLocation, setEventLocation] = useState("")

    const [eventDescription, setEventDescription] = useState("")
    const [eventImages, setEventImages] = useState([""])
    
    function uploadImages(e){
        const imageList = e.target.files
        const images = []
        
        for(let i = 0; i < imageList.length; i++){
            images.push(URL.createObjectURL(imageList[i]))
            console.log(`added ${imageList[i].name}`)
        }

        setEventImages(images)
    }


    return (
        <form id='create-event'>

            <div className='create-event-section'>
                <label hmtlfor="create-title">Event Title</label>
                <input id="create-title" type="text" onChange = {(e) => setEventTitle(e.target.value)}/>
            </div>
            
            <div className='create-event-section'>
                <label hmtlfor="create-date">When?</label>
                <input id="create-date" type="datetime-local" />
            </div>

            <div className='create-event-section'>
                <label hmtlfor="create-location">Where?</label>
                <input id="create-location" type="text" onChange = {(e) => setEventLocation(e.target.value)}/>
            </div>

            <div className='create-event-section'>
                <label htmlfor= 'create-tag'>What type of Event is this?</label>
                <select id="create-tag">
                    <option>Recreation</option>
                    <option>Volunteer</option>
                    <option>Entertainment</option>
                    <option>Food</option>
                    <option>Adult</option>
                </select>
            </div>

            <div className='create-event-section'>
                <label hmtlfor="create-description">Event Description</label>
                <textarea id="create-title" onChange = {(e) => setEventDescription(e.target.value)}/>
            </div>

            <div className='create-event-section'>
                <label hmtlfor="create-images">Event Images</label>
                <input id="create-images" type= "file" accept='image/png, image/jpg' multiple onChange={(e) => uploadImages(e)}/>
            </div>

            {eventImages && <PreviewImages images= {eventImages}/>}

            <button type = "submit" className='create-event-submit' form = "create-event">Post</button>
        </form>
  )
}

export default CreateEvent
