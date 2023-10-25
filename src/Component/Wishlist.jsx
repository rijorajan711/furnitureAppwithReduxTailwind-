
import {useSelector } from 'react-redux'
import { removeFromWishList } from '../redux/wishlistslicee'
import { jsonGetAllDataFromWishlist } from '../helperForAxios/allapi'
import { useState,useEffect } from 'react'
import { jsonAddToCart } from '../helperForAxios/allapi'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { jsonRemoveWishlistDataFromServer } from '../helperForAxios/allapi'
import { manageWishlistCountFromSlice } from '../redux/wishlistslicee'
import { manageCartCountFromSlice } from '../redux/cartSlice'
import { removeFromCart } from '../redux/cartSlice'
import { addToCart } from '../redux/cartSlice'
import { useDispatch } from 'react-redux'
function Wishlist() {
  const dispatch=useDispatch()
  const [wishlistProductArray,setwishlistProductArray]=useState([])


  const getWishlistDataFromWishlist=async()=>{
    
    const {data}=await jsonGetAllDataFromWishlist()
    console.log("carttttttDATAAAA",data)
    setwishlistProductArray(data)
     
  }

  const addToCartFromWishlist=async({id,title,price,image1,image2})=>{
       
    const productDetailsSplit={title:title,price:price,image1:image1,image2:image2}
    const jsonCartResponseToTrendy=await jsonAddToCart(productDetailsSplit)
    await removeDataFromWishlist(id)
    if(jsonCartResponseToTrendy.status>=200&&jsonCartResponseToTrendy.status<300){dispatch(manageCartCountFromSlice(1));toast.warning("Item Added To Cart")}else{toast.warning("Item Not Added To Cart Due To Some Network Problem")}
}

  
  const removeDataFromWishlist=async(id)=>{
       console.log("wishlist iddddddddddddd",id)
       const removeStatusFromWishlist=await jsonRemoveWishlistDataFromServer(id)
       console.log(removeStatusFromWishlist)
       if(removeStatusFromWishlist.status>=200&&removeStatusFromWishlist.status<300){dispatch(manageWishlistCountFromSlice(-1))}
       getWishlistDataFromWishlist()
  }
  

  useEffect(()=>{
    getWishlistDataFromWishlist()
  },[])

  return (
    <div>


    
    <div className='flex justify-center items-center text-6xl font-medium text-zinc-400  h-36 bg-gradient-to-r from-slate-100 to-slate-300 '>
    <h1>Wish List</h1>
 </div>
    <div className='ml-5 mt-10 mb-5'>
      {
    wishlistProductArray?.length>0?
    <table className='w-full'>
      <thead >
      
          <tr className='border border-b-gray-500'> 
            <th>Number</th>
            <th>Product</th>
            <th>Image</th>
            <th>Price</th>
            <th>Remove</th>
            <th>Add To Cart</th>
          </tr>
        
      </thead>

      <tbody>
       
       
         { wishlistProductArray?.map((data,index)=>(

          <tr className='border border-b-gray-500 text-center hover:scale-[1.1] duration-700'>
          <td>{index+1}</td>
          <td>{data.title}</td>
          <td><img className='h-[100px] w-[100px]' src={data.image1}></img></td>
          <td className='font-semibold text-lg'>₹{data.price}</td>
          <td><button onClick={()=>removeDataFromWishlist(data.id)} className="btn border w-24 h-14 bg-orange-500 rounded-xl hover:bg-slate-600 text-white">Remove</button></td>
          <td><button onClick={()=>addToCartFromWishlist(data)} className="btn border w-24 h-14 bg-green-300 rounded-xl hover:bg-slate-600 text-white">Add To Cart</button></td>
          </tr>
          
          ))

         }

      


       
      </tbody>
    </table>:<div className='w-full flex justify-center'>
           
        <img src='https://i.pinimg.com/originals/f6/e4/64/f6e464230662e7fa4c6a4afb92631aed.png'></img>
      </div>}

  </div>

  <ToastContainer position='top-center'  theme='colored' autoClose={500}/>
  </div>

  )
}

export default Wishlist
