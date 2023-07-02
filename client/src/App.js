import React, { useEffect } from 'react'
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import './App.css'
import { useDispatch } from 'react-redux';
import { fetchPosts } from './features/postSlice';



function App() {
  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(fetchPosts())
  },[])
  return (
    <div >
      <nav className='home_header'>
        <h2 className='header_heading'>Memories</h2>
        <img className='header_image'  src='https://raw.githubusercontent.com/adrianhajdin/project_mern_memories/master/client/src/images/memories.png?token=AF56X74XONEUGZ4FD2FUIA27UURPI'
         alt='' />
      </nav>
      
      <div className='main_body'>
            <div className='post_container' >
                <Posts/>
            </div>
            <div className='form_container'>
                <Form/>
            </div>
        </div>
    </div>
  );
}

export default App;