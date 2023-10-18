import React from 'react'
import { Link } from 'react-router-dom'


function Headerr() {
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
        <h1 className='font-serif hover:text-amber-600 cursor-pointer'>Home</h1>
        <h1 className='font-serif hover:text-amber-600 cursor-pointer'>Pages <i className="fa-solid fa-angle-down"></i></h1>
        <h1 className='font-serif hover:text-amber-600 cursor-pointer'>Shope <i className="fa-solid fa-angle-down"></i></h1>  
    </div>
    
    
    

    <div className='flex gap-5 text-2xl'>
    <div><i className="fa-solid fa-magnifying-glass "></i></div>
    <div><Link> <i id='rijo' className="fa-solid fa-cart-plus"></i> <span>Cart</span></Link></div>
   

    </div>



    
     
    </div>
    
  </>
  )
}

export default Headerr
