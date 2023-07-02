import React from 'react'
import Post from './Post/Post'
import { useSelector } from 'react-redux'

const Posts=()=> {
  const post=useSelector(state=>state.post)
  console.log(post)
  

  return (
    <>
    <h3>Posts</h3>
    <Post/>
    <Post/>
    
    </>
  )
}

export default Posts