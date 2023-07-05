import React, { useEffect, useState } from 'react'
import './Home.css'
import Posts from '../Posts/Posts'
import Form from '../Form/Form'

import { fetchPosts } from '../../features/postSlice'
import { useDispatch } from 'react-redux';

function Home() {
    const dispatch=useDispatch();
  const [currentId,setCurrentId]=useState(null);


  useEffect(()=>{
    dispatch(fetchPosts())
  },[currentId,dispatch])
  return (
    <div className='main_body'>
            <div className='posts_con' >
                <Posts setCurrentId={setCurrentId}/>
            </div>
            <div className='form_con'>
                <Form currentId={currentId} setCurrentId={setCurrentId}/>
            </div>
        </div>
  )
}

export default Home