import React, { useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import {useSelector } from 'react-redux/es/hooks/useSelector'
import { jsonGetAllDataFromCart } from "../helperForAxios/allapi";
import { jsonGetAllDataFromWishlist } from '../helperForAxios/allapi';
import { cartCountFromSlice } from "../redux/cartSlice";
import { wishlistCountFromSlice } from '../redux/wishlistslicee';
import { useDispatch } from 'react-redux';

function Headerr() {
     const dispatch=useDispatch()
    const wishlistCount=useSelector((state)=>state.wishListCountReducer)
    const cartCount=useSelector((state)=>state.cartCountReducer)
   
   const [dropdown,setDropdown]=useState(false)
   const [dropdown2,setDropdown2]=useState(false)

   const handleDropdown=()=>{
          setDropdown(!dropdown)
          setDropdown2(false)
   }

   const handleDropdown2=()=>{
    setDropdown2(!dropdown2)
    setDropdown(false)
}

const countCartDataFromHeader=async()=>{
  const {data}=await jsonGetAllDataFromCart()
  let cartDataCountFromArray=data.length
  dispatch(cartCountFromSlice(cartDataCountFromArray))

}

const countWishlistDataFromHeader=async()=>{
  const {data}=await jsonGetAllDataFromWishlist()
  let wishlistDataCountFromArray=data.length
  console.log("wishlistDataCountFromArray",wishlistDataCountFromArray)
  dispatch(wishlistCountFromSlice(wishlistDataCountFromArray))
}

useEffect(()=>{
  countCartDataFromHeader()
},[])
useEffect(()=>{
  countWishlistDataFromHeader()
},[])

  return (
  <>
     
    <div className='flex justify-around text-lg w-100 bg-white justify-center shadow-sm border-b-4 border-gray-100 h-36 items-center'>
   
        <Link to={"/"}>
        <div className='flex text- text-4xl text-slate-500 gap-2 text-amber-600'>
        <i className="fa-solid fa-registered"></i>
        <h1 className='text-2xl'>ShoppingMart</h1>
        </div>
        </Link>
    
    <div className='flex gap-6'>
           <Link to={"/"}><h1 className='font-serif hover:text-amber-600 cursor-pointer'>Home</h1></Link>
          <div className='relative'>
          <button onClick={handleDropdown}><h1 className='font-serif hover:text-amber-600 cursor-pointer'>Pages <i className="fa-solid fa-angle-down"></i></h1></button> 
          {dropdown&&<div className='flex flex-col gap-4 mt-5 text-center absolute w-40 shadow-2xl h-48 bg-slate-100 z-50  rounded-xl text-amber-600'>
                     <Link onClick={()=>setDropdown(false)} to={"/"}>Home</Link>
                     <Link onClick={()=>setDropdown(false)} to={"/cart"}>Cart</Link>
                     <Link onClick={()=>setDropdown(false)} to={"shopenow"}>Shope</Link>
                     <Link onClick={()=>setDropdown(false)} to={"shopenow"}>WishList</Link>
            
            
                    </div>}

          </div>

          <div className='relative'>
          <button onClick={handleDropdown2}><h1 className='font-serif hover:text-amber-600 cursor-pointer'>Shop<i className="fa-solid fa-angle-down"></i></h1></button> 
          {dropdown2&&<div className='flex flex-col gap-4 mt-5 text-center absolute w-40 shadow-2xl h-48 bg-slate-100 z-50  rounded-xl text-amber-600'>
                   
                     <Link onClick={()=>setDropdown2(false)} to={"/cart"}>Cart</Link>
                     <Link onClick={()=>setDropdown2(false)} to={"/shopenow"}>Shope</Link>
                     <Link onClick={()=>setDropdown2(false)} to={"/wishlist"}>WishList</Link>
            
            
                    </div>}

          </div>
      
      
        
    </div>
    
    
    

    <div className='flex gap-10 font-semibold text-xl'>
    <div><i className="fa-solid fa-magnifying-glass "></i></div>
    <div><Link to={'/wishlist'}> <i id='rijo' className="fa-solid fa-cart-plus"></i> <span>WishList</span> <span ><i>{wishlistCount}</i></span></Link></div>
    <div><Link to={'/cart'}> <i id='rijo' className="fa-solid fa-cart-plus"></i> <span>Cart</span><span > <i>{cartCount}</i></span></Link></div>
    
   

    </div>



    
     
    </div>
    
  </>
  )
}

export default Headerr
