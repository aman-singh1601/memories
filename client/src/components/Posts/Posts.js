import React from 'react'
import Post from './Post/Post'

import { useSelector } from 'react-redux'

const Posts=({setCurrentId})=> {
  const post=useSelector(state=>state.post)

  return (
    <>
       {
        post.loading && <div>Loading...</div>
       }
       {
        !post.loading && post.posts.length 
        ?(
          <div>
            {
              post.posts.map((post,index)=>(
                <Post key={index}  setCurrentId={setCurrentId} post={post}/>
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