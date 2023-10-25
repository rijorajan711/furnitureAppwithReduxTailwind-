import React from 'react'
import { Link, useParams } from 'react-router-dom'
import {jsonRemoveCartAllDataFromServer} from '../helperForAxios/allapi'
function Checkout() {
   const deleteCart=async()=>{
   
     const deletedresposnse=await jsonRemoveCartAllDataFromServer()
     console.log("deletedresposnse",deletedresposnse)
   }
    const {price}=useParams()
  return (
    <div className='relative w-full h-[500px]'>
         <img className='w-full h-full' src='https://i.pinimg.com/originals/c8/6b/d8/c86bd8939fe40456d5211d19a8acb60b.gif'></img>
         <div className='absolute top-1/2 left-10 flex items-center flex-col'>
            <h1 className='text-2xl font-mono '>Your order is placed successfully</h1>
            <h1 className='text-5xl font-bold'>Total Price:{price}</h1>
             <Link to={"/"}><button className="btn border w-48 h-14 mt-7 bg-orange-500 rounded-xl hover:bg-slate-600 text-white">BACK TO HOME</button></Link> 
         </div>
    </div>
  )
}

export default Checkout
