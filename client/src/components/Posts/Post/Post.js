import React from 'react'
import './Post.css'

const Post = ({post}) => {
  return (
    <div>
      <img 
      className='post_image'
      src={post.selectedFile}
      alt=''/>
      <div className=''>
        <span>{post.creator}</span>
        <span></span>
      </div>
    </div>
  )
}

export default Post