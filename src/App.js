import Navbar from './components/Navbar';
import FeedArea from './components/home/FeedArea';
import SlideoutMenu from './components/SlideoutMenu';
import React from 'react'
import CreateEvent from './components/createEvent/CreateEvent';

import { useState } from 'react';

function App() {
  const [showSlideout, setShowSlideout] = useState(false)
  
  function displaySlideoutMenu(){
    setShowSlideout(!showSlideout)
  }
  
  return (
    <div className="App">
      {/* 
      <Navbar displaySlideoutMenu={displaySlideoutMenu}/>
      {showSlideout && <SlideoutMenu />}
      <FeedArea />
      */}
      <CreateEvent />
    </div>
  );
}

export default App;
