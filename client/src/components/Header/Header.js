import React, { useEffect, useState } from 'react'
import './Header.css'
import {Link} from 'react-router-dom'

function Header() {
   const [user,setUser]=useState(JSON.parse(localStorage.getItem('profile')));

    useEffect(()=>{
        const token=user?.token

        setUser(JSON.parse(localStorage.getItem('profile')))
    })

   console.log(user)
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
                            {user.result.given_name}
                        </span>
                        <button className='header_button'>Logout</button>
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