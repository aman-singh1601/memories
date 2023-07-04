import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';

import * as api from '../api'
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
export const {update}=postSlice.actions