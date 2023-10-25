import { createSlice } from "@reduxjs/toolkit";


const cartSlice=createSlice({

    name:"cart",
    initialState:0,
    reducers:{
        cartCountFromSlice:(state,action)=>{
           return state=action.payload
        },
        manageCartCountFromSlice:(state,action)=>{
            return state=state+action.payload
        }
    }
})

export const {cartCountFromSlice,manageCartCountFromSlice}=cartSlice.actions
export default cartSlice.reducer