import React, { useEffect, useState } from 'react'
import './Header.css'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { authLogout } from '../../features/authSlice';
import decode from 'jwt-decode'

function Header() {
   const [user,setUser]=useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch=useDispatch();
    const nagivate=useNavigate();
    const location=useLocation();
    const logout=()=>{
        dispatch(authLogout());
        nagivate('/');
        setUser(null);
    }
    useEffect(()=>{
        const token=user?.token;
        if(token){
            const decodedToken=decode(token)
            if(decodedToken.exp*1000<new Date().getTime())
                logout();
        }
        setUser(JSON.parse(localStorage.getItem('profile')))
    },[location])
   
  
  return (
    <nav className='home_header'>
        <div className='header_name'>
        <h2 className='header_heading'>Memories</h2>
        <Link className='logo_link' to='/'>
        <img className='header_image'  src='https://raw.githubusercontent.com/adrianhajdin/project_mern_memories/master/client/src/images/memories.png?token=AF56X74XONEUGZ4FD2FUIA27UURPI'
         alt='' />
         </Link>
         </div>
         <div className='user_info'>
            {
                user
                ?(
                    <div className='user_profile'>
                        <img
                            className='user_image'
                            src={user?.result?.picture}       
                        />
                        <span
                         className='user_name'
                        >
                            {user.result.name}
                        </span>
                        <button className='header_button' onClick={logout}>Logout</button>
                    </div>

                )
                :(
                    <Link to='/auth' >
                    <button className='header_button'>SignIn</button>
                    </Link>
                )
            }
         </div>
        
       
    </nav>
    
  )
}

export default Header