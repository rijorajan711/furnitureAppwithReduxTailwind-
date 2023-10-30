import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (


    
    
    <div className='flex justify-around h-80 bg-black opacity-80 text-white pt-11 flex-wrap'>
        <div className='flex flex-col justify-evenly '>
         <Link to={"/"}>
          <div className='flex text- text-4xl text-sl gap-2 hover:text-slate-400'>
        <i className="fa-solid fa-registered "></i>
        <h1 className='text-2xl'>ShoppingMart</h1>
        </div>
         </Link>
       
        
         <div className='flex gap-3 rounded-xl'>
        <input className='lg:w-96 text-slate-800 text-xl p-2 rounded-lg'></input>
        <button className='bg-slate-400 lg:w-36 h-12 rounded-lg hover:scale-110'>Submit</button>
        </div>

        <div className='flex text-2xl gap-5 hover:cursor-pointer'>
        <Link className='hover:text-slate-400 transition duration-200'><i className="fa-brands fa-github"></i></Link>
        <Link className='hover:text-slate-400 transition duration-500'><i className="fa-brands fa-whatsapp"></i></Link>
        <Link className='hover:text-slate-400 transition duration-500'><i className="fa-brands fa-facebook"></i></Link>
        <Link className='hover:text-slate-400 transition duration-500'><i class="fa-brands fa-twitter"></i></Link>
        <Link className='hover:text-slate-400 transition duration-500'><i class="fa-brands fa-instagram"></i></Link>
        </div>

        </div>

        <div className='flex flex-col justify-evenly'>
            <h1 className='text-2xl'>Link</h1>

            <Link to={"/"} className='hover:text-slate-400 transition duration-500'>Home</Link>
            <Link to={"/shopenow"} className='hover:text-slate-400 transition duration-500'>Shopping</Link>
            <Link to={"/wishlist"} className='hover:text-slate-400 transition duration-500'>WishList</Link>
            <Link to={"/cart"} className='hover:text-slate-400 transition duration-500'>Cart</Link>
        </div>

        <div className='flex flex-col justify-evenly'>
        <h1 className='text-2xl'>Guids</h1>
            <Link to={"/"} className='hover:text-slate-400 transition duration-500'>Home</Link>
            <Link to={"/shopenow"} className='hover:text-slate-400 transition duration-500'>Shopping</Link>
            <Link to={"/wishlist"} className='hover:text-slate-400 transition duration-500'>WishList</Link>
            <Link to={"/cart"} className='hover:text-slate-400 transition duration-500'>Cart</Link>
        </div>

        <div className='flex flex-col justify-evenly'>
        <h1 className='text-2xl'>Contact</h1> 
            <Link to={"/"} className='hover:text-slate-400 transition duration-500'>Home</Link>
            <Link to={"/shopenow"} className='hover:text-slate-400 transition duration-500'>Shopping</Link>
            <Link to={"/wishlist"} className='hover:text-slate-400 transition duration-500'>WishList</Link>
            <Link to={"/cart"} className='hover:text-slate-400 transition duration-500'>Cart</Link>
        </div>
      
    </div>
   
  )
}

export default Footer
