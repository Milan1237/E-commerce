import { createSlice } from "@reduxjs/toolkit";

const initialState={
    isLoggedIn: false ,
    userData: null 
}
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        LogIn: (state)=>{
            return {...state , isLoggedIn: true }
        },
        LogOut: (state)=>{
            return {...state , isLoggedIn: false}
        },
        setUserData: (state , action)=>{
            state.userData = action.payload ; 
        }

    }
});

export default authSlice.reducer ; 
export const {LogIn , LogOut , setUserData} = authSlice.actions; 