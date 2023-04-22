import React from 'react'
import gold from '../images/goldnew.png'
import bronze from '../images/Bronzenew.png'
import silver from '../images/silvernew.png'
import nobadge from '../images/nobadge.png'
 const Tokens = ({x,event}) =>{
    x = parseInt(x)
    if(x>20){
        return(
        <>
        <center>
            <div style={{height:"300px",width:"200px"}}>
                <center>
                <h3 style={{fontSize:"20px",color:"White"}}>Event Category : {event}</h3>
                    <img style={{padding: "30px",height:"100px",width:"150px;"}}  src = {gold}/>
                    <h3 style={{fontSize:"20px",color:"White"}}>You have gold badge {x} Events attended</h3>
                    </center>
            </div>
            </center>
            </>
            
        )
    }
    else if(x > 10) {
        return(
        <center>
            <div style={{height:"300px",width:"200px"}}>
                <center>
                <h3 style={{fontSize:"20px",color:"White"}}>Event Category : {event}</h3>
                    <img style={{padding:"30px",height:"100px",width:"150px;"}}  src = {silver}/>
                    <h3 style={{fontSize:"20px",color:"White"}}>You have silver badge with {x} Events attended</h3>
                    </center>
            </div>
            </center>
        )
    } 
    else if(x == 0) {
        return(
        <center>
            <div style={{height:"300px",width:"200px"}}>
                <center>
                <h3 style={{fontSize:"20px",color:"White"}}>Event Category : {event}</h3>
                
                    <img style={{padding:"30px",height:"100px",width:"150px;"}}  src = {nobadge}/>
                    <h3 style={{fontSize:"20px",color:"White"}}> NO Badges </h3>
                    <h3 style={{fontSize:"20px",color:"White"}}>Attended {x} Events </h3>
                    </center>
            </div>
            </center>
        )
    } 
    else{
        return(
            <center>
            <div style={{height:"300px",width:"200px"}}>
                <center>
                <h3 style={{fontSize:"20px",color:"White"}}>Event Category : {event}</h3>
                    <img style={{padding: "30px",height:"100px",width:"150px;"}}  src = {bronze}/>
                    <h3 style={{fontSize:"20px",color:"White"}}>You have bronze badge with {x} Events attended</h3>
                    </center>   
            </div>
            </center>
        )
    
    }
 }
 export default Tokens;