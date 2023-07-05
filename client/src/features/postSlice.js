import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';


import axios from 'axios'
const url='http://localhost:5000/posts';

const initialState={
    loading:false,
    posts:[],
    error:''
}
export const fetchPosts=createAsyncThunk('post/fetchPosts',()=>{
    return axios.get(url)
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
            
            console.log(action.payload)
            state.posts=state.posts.filter((post)=>post._id !== action.payload)
        },
        createPost: (state,action)=>{
            console.log(action.payload)
            state.posts.push(action.payload)
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
export const {update,removePost,createPost}=postSlice.actions