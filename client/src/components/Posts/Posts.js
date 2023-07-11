import React from 'react'
import Post from './Post/Post'
import './Posts.css'


import { useSelector } from 'react-redux'

const Posts=({setCurrentId})=> {
  
  const post=useSelector(state=>state.post)

  return (
    <>
       {
        post?.loading && <div>Loading...</div>
       }
       {
        !post?.loading && post?.posts?.length 
        ?(
          <div className='post_store'>
            
            {
              post.posts.map((post,index)=>(
                <Post 
                 key={index}  
                 
                 setCurrentId={setCurrentId} 
                 post={post}/>
              ))
            }
           
          </div>
        )
        :null
       }
    </>
  )
}

export default Posts