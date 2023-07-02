import React, { useState } from 'react'
import FileBase from 'react-file-base64'

import './Form.css'

const Form=() =>{
  const [postData,setpostData]=useState({
    creator:'',
    title:'',
    message:'',
    tags:'',
    selectedFile:''
  })
  const handleSubmit=()=>{

  }
  const clear=()=>{
    
  }
  return (
    <div>
      <form onsubmit={handleSubmit}>
        <h6>Creating a Memory</h6>
        <label>Creator</label>
        <input
          type="text"
          name="creator"
          value={postData.creator}
          onChange={(e)=>setpostData({...postData ,creator:e.target.value})}
        />
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={postData.title}
          onChange={(e)=>setpostData({...postData ,title:e.target.value})}
        />
        <label>Message</label>
        <textarea
          type="text"
          name="message"
          value={postData.message}
          onChange={(e)=>setpostData({...postData ,message:e.target.value})}
        />
        <label>Tags</label>
        <input
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