import React from 'react'
import { useState, useEffect } from 'react'
import Navbar from '../Navbar'
import SlideoutMenu from '../SlideoutMenu'
import FeedArea from '../home/FeedArea'
import FeedPost from '../home/FeedPost'
import '../../style/searchEvent.css';

const SearchEvent = () => {
    const [showSlideout, setShowSlideout] = useState(false)
    const [query, setQuery] = useState("")
    const [showFeed, setShowFeed] = useState(true)
    const [showFeed2, setShowFeed2] = useState(false)
  
    function displaySlideoutMenu(){
        setShowSlideout(!showSlideout)
    }

    useEffect(() => {
        setShowFeed(!showFeed)
        setShowFeed2(!showFeed2)
      }, [query])

    return (
        <>
        
            <div className='navigator'>
            <div style = {{display: "flex"}}>
            <div className="App" style = {{textAlign: 'left'}}>
              <Navbar displaySlideoutMenu={displaySlideoutMenu}/>
              {showSlideout && <SlideoutMenu />}
            </div>
            </div>
            </div>

            <p className='search-bar-title'>Search for Events</p>
            <input type='text' className='search-bar' onChange={(e) => setQuery(e.target.value)}/>

            {/* Cop out done to pass updated prop to FeedArea */}
            {showFeed && <FeedArea showFilterButton={false} query = {query}/>}
            {showFeed2 && <FeedArea showFilterButton={false} query = {query}/>}
            
            
        
        </>
  )
}

export default SearchEvent
