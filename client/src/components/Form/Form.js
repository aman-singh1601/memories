import React, { useEffect, useState } from 'react'
import FileBase from 'react-file-base64'
import axios from 'axios'
import { useSelector,useDispatch } from 'react-redux'

import './Form.css'
import { createPost, update } from '../../features/postSlice'



const Form=({currentId,setCurrentId}) =>{
  const post=useSelector(state=>currentId?state.post.posts.find(p=>p._id===currentId):null)

  const dispatch=useDispatch();  
  
  const [postData,setpostData]=useState({
    creator:'',
    title:'',
    message:'',
    tags:'',
    selectedFile:''
  })
  useEffect(()=>{
      if(post)
        setpostData(post);
  },[post])

  const clear=()=>{
    setCurrentId(null);
    setpostData(
      {
        creator:'',
        title:'',
        message:'',
        tags:'',
        selectedFile:''
      }
    )
}
  const handleSubmit= async (e)=>{
      e.preventDefault()
      
      if(currentId){
        const {data}= await axios.patch(`http://localhost:5000/posts/${currentId}`,postData);
        console.log(data)
        dispatch(update(data))
        
         
      }else{
        //create post
       axios.post('http://localhost:5000/posts',postData)
       .then(res=>{
        console.log( 'res : ' ,res)
        dispatch(createPost(postData))
       })
     
      }
      clear();
    }
    
    
  
  return (
    <div className='form_container'>
      <h4>{post?'Editing' : 'Creating'} a Memory</h4>
      <form onSubmit={handleSubmit} className='form'>
        
        <input
          placeholder='Creator'
          className='form_input'
          type="text"
          name="creator"
          value={postData.creator}
          onChange={(e)=>setpostData({...postData ,creator:e.target.value})}
        />
        
        <input
          placeholder='Title'
          className='form_input'
          type="text"
          name="title"
          value={postData.title}
          onChange={(e)=>setpostData({...postData ,title:e.target.value})}
        />
        
        <textarea
          placeholder='Message'
          className='form_input input_message'
          type="text"
          name="message"
          value={postData.message}
          onChange={(e)=>setpostData({...postData ,message:e.target.value})}
        />
        
        <input
          placeholder='Tags'
         className='form_input'
          type="text"
          name="tags"
          value={postData.tags}
          onChange={(e)=>setpostData({...postData ,tags:e.target.value})}
        />
        <div className='fileInput'>
          <FileBase
          type='file'
          multiple={false}
          onDone ={({base64})=>setpostData({...postData,selectedFile:base64})}
          />
        </div>
        <button 
          className='submit_button'
          type='submit'
        >
          Submit
        </button>
        <button 
          className='clear_button'
          onClick={clear}
        >
          Clear
        </button>

      </form>
    </div>
  )
}

export default Form