import React from 'react'
import './Auth.css'
import {LockOutlined} from '@mui/icons-material';

function Auth() {
    const isSignUp=false;
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
               <button type='submit' className='btn' >
                {isSignUp ? 'Sign Up':'Sign In'}
               </button>
        </form>
        
        </div>

    </div>
  )
}

export default Auth