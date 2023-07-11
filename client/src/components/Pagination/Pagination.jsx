import React, { useEffect } from "react";
import { Pagination, PaginationItem } from '@mui/material';
import {Link} from 'react-router-dom'
import { useDispatch,useSelector } from "react-redux";
import { fetchPosts } from "../../features/postSlice";
import './Pagination.css'

const Paginate =({page})=>{
  const {numberOfPages}=useSelector((state)=>state.post)
  console.log('total pages :: ',numberOfPages)
  const dispatch=useDispatch();
  useEffect(()=>{
    if(page)
      dispatch(fetchPosts(page))
},[page])
    return (
        <Pagination
            count={numberOfPages}
            page={Number(page) || 1}
            renderItem={(item)=>(
                <PaginationItem {...item} component={Link} to={`/posts?page=${item.page}`}/>
            )}
        />
    )
}

export default Paginate
