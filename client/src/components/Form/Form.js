import React, { useState } from 'react'
import FileBase from 'react-file-base64'
import axios from 'axios'

import './Form.css'

const Form=() =>{
  const [postData,setpostData]=useState({
    creator:'',
    title:'',
    message:'',
    tags:'',
    selectedFile:''
  })
  const handleSubmit= async (e)=>{
      e.preventDefault()
      await axios.post('http://localhost:5000/posts',postData)
                  .then((res)=>{
                    console.log(res)
                  })
                  .catch((err)=>{
                    console.log((err))
                  })


  }
  const clear=()=>{

  }
  return (
    <div className='form_container'>
      <h4>Creating a Memory</h4>
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