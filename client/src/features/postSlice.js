import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';


import axios from '../axios/axios';


const initialState={
    loading:false,
    posts:[],
    currentPage:1,
    numberOfPages:0,
    error:'',
    
}
export const fetchPosts=createAsyncThunk('post/fetchPosts',async (page)=>{
 return await axios.get(`/posts?page=${page}`)
    .then((res)=>res)
   
    
   
})

const postSlice=createSlice({
    name:'post',
    initialState,
    reducers:{
        update:(state,action)=>{
            state.posts=state.posts.map((post)=>post._id===action.payload._id?action.payload:post)
        },
        removePost: (state,action)=>{
            state.posts=state.posts.filter((post)=>post._id !== action.payload)
        },
        createPost: (state,action)=>{
            state.posts.push(action.payload)
        },
        likePost:(state,action)=>{
            state.posts=state.posts.map((post)=>post._id===action.payload._id?action.payload:post)
        },
        getPostBySearch:(state,action)=>{
            console.log(action.payload)
            state.posts=action.payload
        }
       
       
    },
    extraReducers : builder=>{
        builder.addCase(fetchPosts.pending,state => {
        state.loading = true
    })
    builder.addCase(fetchPosts.fulfilled,(state,action)=>{
        // console.log(action.payload.data)//contains posts currpage noofpages
        state.loading=false
        state.posts=action.payload.data.data
        state.currentPage=action.payload.data.currentPage
        state.numberOfPages=action.payload.data.numberOfPages
        state.error=''
    })
    builder.addCase(fetchPosts.rejected,(state,action)=>{
        state.loading=false
        state.posts=[]
        state.error=action.error.message
    })
   
}
})

export default postSlice.reducer
export const {update,removePost,createPost,likePost,getPostBySearch}=postSlice.actions