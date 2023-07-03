import React from 'react'
import './Post.css'
import moment from 'moment'
import {MoreHoriz,ThumbUpAlt,Delete} from '@mui/icons-material';
const Post = ({post}) => {
  return (
    <div className='post_container'>
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
                  <MoreHoriz/>
              </div>
      </div>
      <div className='post_details'>
          <span>
            {
              post.tags.map((tag)=>`#${tag} `)
            }
          </span>
         
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
            <Delete className='post_icon'/>
            </div>
      </div>
    </div>
  )
}

export default Post