import React from 'react'
import './Post.css'
import moment from 'moment'
import {MoreHoriz,ThumbUpAlt,Delete} from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { removePost } from '../../../features/postSlice';
import axios from 'axios';

const Post = ({post,setCurrentId}) => {
  const dispatch=useDispatch();
  const url='http://localhost:5000/posts';
  
  const deletePost=async()=>{
    console.log(post._id);
    try{
    await axios.delete(`${url}/${post._id}`)
    }catch(err){
      console.log(err)
    }
    dispatch(removePost(post._id))
  }
  

  return (
    <div  className='post_container'>
     
      <img 
      className='post_image'
      src={post.selectedFile}
      alt=''/>
      <div className='post_head'>
              <div className='post_info'>
                <span className='post_creator'>{post.creator}</span>
                <span className='post_time'>{moment(post.createdAt).fromNow()}</span>
              </div>
              <div className='post_horiz' >
                  <MoreHoriz
                   className='post_icon'
                   onClick={()=>setCurrentId(post._id)}
                  />
              </div>
      </div>
      <div className='post_details'>
          <span>
            {
              `#${post.tags}`
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
            <ThumbUpAlt className='post_icon'/>
            <span className='like_count'>
              {post.likeCount}
            </span>
            </div>
            <div className='like_button'>
            <Delete
              onClick={deletePost} 
              className='post_icon'
            />
            </div>
      </div>
    </div>
  )
}


export default Post