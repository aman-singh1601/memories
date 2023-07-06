import {createSlice} from '@reduxjs/toolkit'

const initialState={
    authData:null
}

const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{
        authSignin:(state,action)=>{
            console.log(action.payload)
        }
    }
})


export default authSlice.reducer
export const {authSignin}=authSlice.actions