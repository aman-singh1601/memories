import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';


import axios from '../axios/axios';


const initialState={
    loading:false,
    posts:[],
    error:''
}
export const fetchPosts=createAsyncThunk('post/fetchPosts',()=>{
    return axios.get('/posts')
    .then((res)=>res.data)
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

        }
       
       
    },
    extraReducers : builder=>{
        builder.addCase(fetchPosts.pending,state => {
        state.loading = true
    })
    builder.addCase(fetchPosts.fulfilled,(state,action)=>{
        state.loading=false
        state.posts=action.payload
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