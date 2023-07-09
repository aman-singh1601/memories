import React, { useEffect, useState } from 'react'
import './Home.css'
import Posts from '../Posts/Posts'
import Form from '../Form/Form'
// import ChipInput from 'material-ui-chip-input'
import { fetchPosts } from '../../features/postSlice'
import { useDispatch } from 'react-redux';
import { useNavigate,useLocation } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import axios from '../../axios/axios'
function useQuery(){
  return new URLSearchParams(useLocation().search)
}

function Home() {
    const dispatch=useDispatch();
    const query=useQuery();
    const nagivate=useNavigate();
    const page=query.get('page') || 1;
    const searchQuery= query.get('searchQuery')
    const [currentId,setCurrentId]=useState(null);
    const [search,setSearch]=useState('')

    useEffect(()=>{
      dispatch(fetchPosts())
    },[currentId,dispatch])

    const user=JSON.parse(localStorage.getItem('profile'))
    const searchPost= async()=>{
      if(search.trim()){
        console.log('search : ', search)
        const {data:{data}}= await axios.get(`/posts/search?searchQuery=${search || 'none'}`)
        setSearch('');
        console.log('result : ',data)

      }else {
        nagivate('/');
      }

    }
    const handleKeyDown=(e)=>{
        if(e.key === 'Enter'){
          searchPost();
        }
    }
  
  return (
    <div className='main_body'>
            <div className='posts_con' >
                <Posts setCurrentId={setCurrentId}/>
            </div>
            {
              user&&(
                <div className='form_con'>
              
                <div className='search_input'>
                  <input
                   name='search'
                   onKeyDown={handleKeyDown}
                   value={search}
                   onChange={(e)=>setSearch(e.target.value)}
                  />
                  <label>Search</label>
                  <SearchIcon 
                  className='search_icon'
                  onClick={searchPost}
                  />
               
                
                </div>
                <Form currentId={currentId} setCurrentId={setCurrentId}/>
            </div>
              )
            }
            
        </div>
  )
}

export default Home