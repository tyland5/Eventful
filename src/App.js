import Navbar from './components/Navbar';
import FeedArea from './components/home/FeedArea';
import SlideoutMenu from './components/SlideoutMenu';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUpPage from './components/signup-login-pages/signup.js';

import { useState } from 'react';
import LoginPage from './components/signup-login-pages/login';

function App() {
  const [showSlideout, setShowSlideout] = useState(false)
  
  function displaySlideoutMenu(){
    setShowSlideout(!showSlideout)
  }
  
  return (
    <>
      
      <Routes>
        <Route path ='/' element={
            <div className="App">
              <Navbar displaySlideoutMenu={displaySlideoutMenu}/>
              {showSlideout && <SlideoutMenu />}
              <FeedArea />
            </div>
        }>
        </Route>

        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/signup" element={<SignUpPage />}></Route>
      </Routes>

      
    </>
  );
}

export default App;

