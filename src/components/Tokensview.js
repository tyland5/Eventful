import axios from 'axios';
import Tokens from './Tokens'
import Navbar from './Navbar'
import { useEffect } from 'react';
import React, { useState } from 'react'

const Tokensview = () =>{
   const isMobile = window.innerWidth > 480;
   const [showSlideout, setShowSlideout] = useState(false)
   const [response, setResponse] = useState("")
   const [renderPage, setRenderPage] = useState(false)

   function displaySlideoutMenu(){
    setShowSlideout(!showSlideout)
  }
  
    useEffect(()=>{
      axios.get('https://www-student.cse.buffalo.edu/CSE442-542/2023-Spring/cse-442b/getBadges.php').then(result =>{
        setResponse(result.data)
        setRenderPage(true)
        console.log(response)
        console.log(result.data)
      });
    }, [])

   if (!isMobile){
    return(
    
    <>
    {renderPage && <>
      <div className='navigator'>
      <div style = {{display: "flex"}}>
      <Navbar displaySlideoutMenu={displaySlideoutMenu}/>
      </div>
      </div>
      <div  id="feed-area" >
      <Tokens x={response[0]['recreation']} event="Recreation" />
      <hr></hr>
      <Tokens x={response[0]['volunteer']} event = "Volunteer"/>
      <hr></hr>
      <Tokens x={response[0]['entertainment']} event = "Entertainment"/>
      <hr></hr>
      <Tokens x={response[0]['food']} event = "Food"/>
      <hr></hr>
      <Tokens x={response[0]['adult']} event = "Adult"/>
      <hr></hr>
      </div>
      </>
    }
    </>

    )
   }
   else{
      return(
      <>

      {renderPage && <>
      <div className='navigator'>
      <div style = {{display: "flex"}}>
      <Navbar displaySlideoutMenu={displaySlideoutMenu}/>
      </div>
      </div>
      <div className="post-feedview" style={{marginLeft:"260px",marginTop:"20px"}}>
      <Tokens x={response[0]['recreation']} event="Recreation" />
      <hr></hr>
      <Tokens x={response[0]['volunteer']} event = "Volunteer"/>
      <hr></hr>
      <Tokens x={response[0]['entertainment']} event = "Entertainment"/>
      <hr></hr>
      <Tokens x={response[0]['food']} event = "Food"/>
      <hr></hr>
      <Tokens x={response[0]['adult']} event = "Adult"/>
      <hr></hr>
      </div>
      </>
      }
      </>
      )
   }
}
 
 export default Tokensview;