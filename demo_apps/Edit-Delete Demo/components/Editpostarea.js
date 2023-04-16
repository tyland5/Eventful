import React from 'react'
import dummy_pfp from "../images/dummy-pfp.png"
import dummy_post from "../images/dummy-post.jpg"
import rutgers_park from "../images/rutgers-park.jpg"
import Editpost from './Editpost'

const Editpostarea = () => {
  return (
    <div className ="feed-area">
        <Editpost pfp = {dummy_pfp} posterName = "Company 1" thumbnail= {dummy_post} />
        <Editpost pfp = {dummy_pfp} posterName = "Company 2" thumbnail= {rutgers_park}/>
        <Editpost pfp = {dummy_pfp} posterName = "Company 3" thumbnail= {dummy_post} />
        <Editpost pfp = {dummy_pfp} posterName = "Company 4" thumbnail= {rutgers_park}/>
    </div>
  )
}

export default Editpostarea
