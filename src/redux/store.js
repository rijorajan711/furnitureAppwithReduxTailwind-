import {configureStore} from '@reduxjs/toolkit'
import wishlistslice from "./wishlistslicee"
import cartSlice from './cartSlice'
const store=configureStore({

    reducer:{
    
        wishListCountReducer:wishlistslice,
        cartCountReducer:cartSlice
    }
    
})

export default store