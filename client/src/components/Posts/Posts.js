import React from 'react'
import Post from './Post/Post'

import { useSelector } from 'react-redux'

const Posts=()=> {
  const post=useSelector(state=>state.post)
  console.log('posts : ',post)
  

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
                <Post key={index}  post={post}/>
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