import React, { useState,useEffect } from 'react'
import './Auth.css'
import jwt_decode from 'jwt-decode'
import { useDispatch } from 'react-redux'
import { authSignin } from '../../features/authSlice'


// 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

function Auth() {
    const dispatch=useDispatch()
    const [isSignUp,setSignUp]=useState(false)
    const handleCallBackResponse=(res)=>{
     
        // console.log('Encoded JWT Id token : ',res.credential)
        // console.log('res : ',res)
        const result=jwt_decode(res.credential)
        const token=res.credential
        // console.log('UserObject : ',userObject)
        dispatch(authSignin({result,token}))


    }
   useEffect(()=>{
    /*global google*/
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