import React from 'react'
import addIcon from "../../images/add-post-icon.png"
import { BrowserRouter, Route, Link } from 'react-router-dom';

const PostButton = () => {
  return (
    <>
      <Link to="/create-event"><img title = "Post something" id = "post-btn" src={addIcon} alt = "addIcon" /></Link>
    </>
  )
}

export default PostButton

