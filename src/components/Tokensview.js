import React from 'react'
import Tokens from './Tokens'
 export const Tokensview = () =>{
   const isMobile = window.innerWidth > 480;
   if (!isMobile){
    return(

      <>
    <div  id="feed-area" >
    <Tokens x={25} event="Sports" />
    <hr></hr>
    <Tokens x={2} event = "Volunteer"/>
    <hr></hr>
    <Tokens x={0} event = "Entertainment"/>
    <hr></hr>
    <Tokens x={0} event = "Food"/>
    <hr></hr>
    <Tokens x={15} event = "Adult"/>
    <hr></hr>
    </div>
    </>

    )
   }
   else{
      return(
      <div className="post-feedview" style={{marginLeft:"260px",marginTop:"20px"}}>
      <Tokens x={25} event="Sports" />
      <Tokens x={2} event = "Volunteer"/>
      <Tokens x={0} event = "Entertainment"/>
      <Tokens x={0} event = "Food"/>
      <Tokens x={15} event = "Adult"/>
      </div>
  
  
      )
   }
}
 
 export default Tokensview;