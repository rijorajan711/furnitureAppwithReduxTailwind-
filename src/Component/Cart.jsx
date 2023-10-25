import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../redux/cartSlice'
import { jsonGetAllDataFromCart } from '../helperForAxios/allapi'
import { jsonRemoveCartDataFromServer } from '../helperForAxios/allapi'
import { manageCartCountFromSlice } from '../redux/cartSlice'
import {Link} from "react-router-dom"
function Cart() {
    const quantity=useSelector((state)=>state.cartCountReducer)
    const dispatch=useDispatch()
    const [cartProductArray,setCartProductArray]=useState([])
    const [totalPrice,setTotalPrice]=useState(0)

    const getCartDataFromCart=async()=>{
      
      const {data}=await jsonGetAllDataFromCart()
      console.log("carttttttDATAAAA",data)
      setCartProductArray(data)
      
      const priceArray=data.map((item)=>Number(item.price))
      const totalprice=priceArray.reduce((total,price)=>{return total=total+price},0)
      setTotalPrice(totalprice)
      
       
    }



    const removeDataFromCart=async(id)=>{
      const removeStatusFromCart=await jsonRemoveCartDataFromServer(id)
       console.log("removeStatusFromCart",removeStatusFromCart)
       if(removeStatusFromCart?.status>=200&&removeStatusFromCart?.status<300){dispatch(manageCartCountFromSlice(-1))}
       getCartDataFromCart()
    }
    
    const cartDelete=()=>{
        cartProductArray.map((item)=>{
          removeDataFromCart(item.id)
        })
    }



    useEffect(()=>{
      getCartDataFromCart()
    },[])

  return (
    <div className='mb-36' >
     <div className='flex justify-center items-center text-6xl font-medium text-zinc-400  h-36 bg-gradient-to-r from-slate-100 to-slate-300 '>
        <h1>Shopping Cart</h1>
     </div>
    { cartProductArray?.length>0?
     <div className='grid grid-cols-6 gap-5 mt-5 w-full '>
    <div className='col-span-4 ml-5'>
      <table className='w-full'>
        <thead >
          
            <tr className='border border-b-gray-500'> 
              <th>Number</th>
              <th>Product</th>
              <th>Image</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          
        </thead>

        <tbody>
         
        

         {cartProductArray?.map((data,index)=>(


          <tr className='border border-b-gray-500 text-center hover:scale-[1.1] duration-700'>
            <td>{index+1}</td>
            <td>{data.title}</td>
            <td><img className='h-[100px] w-[100px]' src={data.image1}></img></td>
            <td className='font-semibold text-lg'>₹{data.price}</td>
            <td><button onClick={()=>removeDataFromCart(data.id)}  className="btn border w-24 h-14 bg-orange-500 rounded-xl hover:bg-slate-600 text-white">Remove</button></td>
          </tr>

          )) 

         } 


         
        </tbody>
      </table>

    </div>
    <div className='col-span-2 h-[500px]  right-0 p-14 mr-5 bg-gradient-to-b rounded-2xl from-slate-200 to-slate-400'>
   
    <div className='flex justify-center items-center rounded-2xl text-6xl font-medium text-zinc-400  h-36 bg-gradient-to-r from-slate-100 to-slate-300 '>
        <h1>Cart Total</h1>
     </div >
      <h1 className='text-3xl font-serif mt-7 text-slate-500'>Quantity:{quantity}</h1>
      <h1 className='text-3xl font-serif mt-7 text-slate-500'> Total Price:{totalPrice}</h1>
      <Link to={`/checkout/${totalPrice}`}><button onClick={cartDelete} className="btn border w-48 h-14 mt-7 bg-orange-500 rounded-xl hover:bg-slate-600 text-white">PROCEED TO CHECKOUT</button></Link> 
      

    </div>
     </div>:<div className='w-full h-96 flex justify-center'>
           
           <img src='https://www.easygiftflorist.com/public-assets/images/empty-cart.png'></img>
         </div>

      }

    </div>
  )
}

export default Cart
