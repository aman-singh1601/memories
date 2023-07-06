import React, { useState,useEffect, useCallback } from 'react'
import './Auth.css'
import {LockOutlined} from '@mui/icons-material';

import { gapi } from "gapi-script"
import Icon from './Icon'


// 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

function Auth() {
    const [isSignUp,setSignUp]=useState(false)
    const handleCallBackResponse=(res)=>{
        console.log('Encoded JWT Id token : ',res.credential)
    }
   useEffect(()=>{
    /*  global google*/
    google.accounts.id.initialize({
        client_id:'716607211235-rucae2jlqhmnvr2d190pc6p0smf4imp2.apps.googleusercontent.com',
        callback:handleCallBackResponse
    });
    google.accounts.id.renderButton(
        document.getElementById('google-button'),
        {theme:'outline',size:'large'}
    )
   })
   const handleSignup=()=>{
    setSignUp(!isSignUp)
   }
    const handleSubmit=()=>{
        
    }
    const handleChange=()=>{

    }
   
  return (
    <div className='auth_container'>
        <div className='auth_upperContainer'>
        
        <form className='auth_form' onSubmit={handleSubmit}>
        <span className='text_center'>
            {
                isSignUp ? "Sign Up" : "Sign In"
            }
        </span>
            {
                isSignUp && (
                    <>
                    <div className='input-container'>
                    <input
                      name='firstName'
                      onChange={handleChange}
                        required
                        autoFocus
                        type='text'
                    /> 
                    <label>First Name</label>
                    </div>
                    <div className='input-container'>
                    <input
                      name='lastName'
                      onChange={handleChange}
                        required
                        autoFocus
                        type='text'
                    />
                    <label>Last Name</label>
                    </div> 
                    </>
                )
            }
            <div className='input-container'>
             <input
                 name='email'
                 onChange={handleChange}
                 required
                 autoFocus
                 type='email'
             /> 
             <label>Email</label>
             </div>
             <div className='input-container'>
             <input
                 name='password'
                 onChange={handleChange}
                 required
                 autoFocus
                 type='password'
             /> 
             <label>Password</label>
             </div>
             {
                isSignUp && (
                    <div className='input-container'>
                    <input
                        name='password'
                        onChange={handleChange}
                        required
                        autoFocus
                        type='password'
                    /> 
                    <label>Confirm Password</label>
                    </div>
                )
             }
             
             
              <div className='auth_btn'>
                <div id='google-button'>
                </div>
               <button type='submit' className='btn' >
                {isSignUp ? 'Sign Up':'Sign In'}
               </button>
               <button className='btn_switch' onClick={handleSignup}>
                {
                    isSignUp
                    ? 'Already have an account'
                    : 'Dont have an account'
                }
               </button>
               </div>
               
        </form>
        
        </div>

    </div>
  )
}

export default Auth