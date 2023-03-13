import Navbar from './components/Navbar';
import FeedArea from './components/home/FeedArea';
import SlideoutMenu from './components/SlideoutMenu';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUpPage from './components/signup-login-pages/signup.js';
import Profile from './components/Profile/Profile.js';
import React from 'react'

import { useState } from 'react';
import LoginPage from './components/signup-login-pages/login';
import Profile from './components/Profile/Profile'

function App() {
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
        <Route path="/Profile" element={<Profile />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/signup" element={<SignUpPage />}></Route>
      </Routes>

      
    </>
  );
}

export default App;
