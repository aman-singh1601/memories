import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'

function Header() {
    const user=null;
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
                            className='user_profile'
                            alt={user.result.name}
                            src={user.result.imageUrl}
                        />
                        {/* <span>{user.result.name.charAt(0)}</span> */}
                        <span
                            className='user_name'
                        >{user.result.name}</span>
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