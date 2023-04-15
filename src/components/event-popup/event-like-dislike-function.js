import React, {useState, useEffect} from 'react'
import { enforceHTTPS, checkSessionId } from '../../App';
import { BrowserRouter, Route, Link, useNavigate } from 'react-router-dom';


const CheckSession = () => {

    const navigate = useNavigate()
    console.log("ayo")
    useEffect(() => {
        console.log("in")
        // forces https connection
        enforceHTTPS()
        console.log("in htt")
        // checks if user is logged in. if not, make them log in
        checkSessionId().then(validUser =>{
            console.log("in check")
            if(!validUser){
                console.log("in if")
                navigate("/login")
            }
        })
    }, [])
    
}
    
export default CheckSession



