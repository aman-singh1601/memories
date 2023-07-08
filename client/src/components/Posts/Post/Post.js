import React from 'react'
import './Post.css'
import moment from 'moment'
import {MoreHoriz,ThumbUpAlt,Delete} from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { removePost,likePost } from '../../../features/postSlice';
import axios from '../../../axios/axios';

const Post = ({post,setCurrentId}) => {
  const dispatch=useDispatch();
  const user=JSON.parse(localStorage.getItem('profile'))
  
  const deletePost=async()=>{
    console.log(post._id);
    try{
    await axios.delete(`posts/${post._id}`)
    }catch(err){
      console.log(err)
    }
    dispatch(removePost(post._id))
  }
  const likeCard= async ()=>{
    try{
      const {data}=await axios.patch(`posts/${post._id}/likepost`)
      dispatch(likePost(data))
    }catch(err){
      console.log(err)
    }
  }
  

  return (
    <div  className='post_container'>
     
      <img 
      className='post_image'
      src={post.selectedFile}
      alt=''/>
      <div className='post_head'>
              <div className='post_info'>
                <span className='post_creator'>{post.name}</span>
                <span className='post_time'>{moment(post.createdAt).fromNow()}</span>
              </div>
              <div className='post_horiz' >
              {
              (user?.result.name===post.name || user?.result?._id==post?.creator) && ( <MoreHoriz
                className='post_icon'
                onClick={()=>setCurrentId(post._id)}
               />) 
            }
                 
              </div>
      </div>
      <div className='post_details'>
          <span>
            {
              post.tags.map((tag)=> `#${tag} `)
            }
          </span>
         
      </div>
      <div className='post_title'>
            {post.title}
      </div>
      <div className='post_message'>
            {post.message}
      </div>
      <div className='post_actions'>
            <div className='like_button'>
            {
              user?.result && (<ThumbUpAlt className='post_icon' onClick={likeCard}/>) 
            }
            <span className='like_count'>
              {
                post?.likes?.length
              }
            </span>
            </div>
            <div className='like_button'>
            {
              (user?.result.name===post.name || user?.result?._id==post?.creator) && (<Delete
                onClick={deletePost} 
                className='post_icon'
              />) 
            }
            
            </div>
      </div>
    </div>
  )
}


export default Post