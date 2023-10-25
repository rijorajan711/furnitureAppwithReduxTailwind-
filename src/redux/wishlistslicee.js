import { createSlice } from "@reduxjs/toolkit";

const wishlistslice=createSlice({
    name:"wishlist",
    initialState:0,
    reducers:{
      wishlistCountFromSlice:(state,action)=>{
         return state=action.payload
      },
      manageWishlistCountFromSlice:(state,action)=>{
          return state=state+action.payload
      }
    }
})


export const {wishlistCountFromSlice,manageWishlistCountFromSlice}=wishlistslice.actions
export default wishlistslice.reducer