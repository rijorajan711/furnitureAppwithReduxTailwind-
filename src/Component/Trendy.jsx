import React from 'react'

function Trendy() {
  return (
    <div className='mt-5 mb-10 flex flex-col gap-5'>
       <div className='flex justify-center font-semibold text-4xl'>
        Trendy Product
       </div>
       <div className='flex gap-6 justify-center'>
        <h1 className=' border-b hover:cursor-pointer hover:border-black border-b-3 hover:text-red-300'>FURNITURE</h1>
        <h1 className=' border-b hover:cursor-pointer hover:border-black border-b-3 hover:text-red-300' >LIGHTS</h1> 
       </div>
       <div className='flex items-center justify-center'>

       <i class="fa-solid fa-arrow-left text-6xl opacity-30 hover:opacity-50 hover:cursor-pointer"></i>
       <div className='flex justify-center'>
       <div className='group relative h-[400px] w-[350px] rounded-xl hover:bg-slate-100 hover:scale-[1.1] duration-500'>
           <img
            src="https://img.freepik.com/free-psd/armchair-pillow_176382-863.jpg?size=626&ext=jpg"
            className="w-[300px] h-[250px] ml-[22px] mt-3 rounded-lg"
          ></img>
               <div className='absolute inset-0 flex flex-col items-center justify-end gap-5 opacity-0 translate-y-[60%] group-hover:translate-y-0 group-hover:opacity-60 transition-transform duration-700'>
          <h1 className='text-xl font-serif'>White Pillow</h1>
            <h1 className='text-xl font-bold'>₹250</h1>
            <button className='border mb-1 border-4 border-neutral-700 rounded-sm w-60 h-10  hover:bg-slate-400 '>ADD TO CART</button>
          </div>
          
           
           </div>
           <div className='group relative h-[400px] w-[350px] rounded-xl hover:bg-slate-100 hover:scale-[1.1] duration-500'>

           <img
            src="https://img.freepik.com/premium-photo/modern-white-sofa-isolated-white-background_718046-307.jpg?size=338&ext=jpg&ga=GA1.1.1413502914.1696896000&semt=ais"
            className="w-[300px] h-[250px] ml-[22px] mt-3 rounded-lg"
          ></img>
               <div className='absolute inset-0 flex flex-col items-center justify-end gap-5 opacity-0 translate-y-[60%] group-hover:translate-y-0 group-hover:opacity-60 transition-transform duration-700'>
          <h1 className='text-xl font-serif'>White Pillow</h1>
            <h1 className='text-xl font-bold'>₹250</h1>
            <button className='border mb-1 border-neutral-700 border-4 w-60 h-10 rounded-sm hover:bg-slate-400'>ADD TO CART</button>
          </div>

           </div>
           <div className='group relative h-[400px] w-[350px] rounded-xl hover:bg-slate-100 hover:scale-[1.1] duration-500'>
           <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvqvAo_7KXQzNLwk8_lOu6fKDoX_Y36W8mTQ&usqp=CAU"
            className="w-[300px] h-[250px] ml-[22px] mt-3 rounded-lg"
          ></img>
            <div className='absolute inset-0 flex flex-col items-center justify-end gap-5 opacity-0 translate-y-[60%] group-hover:translate-y-0 group-hover:opacity-60 transition-transform duration-700'>
          <h1 className='text-xl font-serif'>White Pillow</h1>
            <h1 className='text-xl font-bold'>₹250</h1>
            <button className='border mb-1 border-4 border-neutral-700 w-60 h-10 rounded-sm hover:bg-slate-400'>ADD TO CART</button>
          </div>
            </div>

            <div className='group relative h-[400px] w-[350px] rounded-xl hover:bg-slate-100 hover:scale-[1.1] duration-500'>
           <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX2Jv_Ezg0zXIYq0bW0ANI_Y9mOQ3PcQd2mQ&usqp=CAU"
            className="w-[300px] h-[250px] ml-[22px] mt-3 rounded-lg"
          ></img>
          
          {/* <div className='absolute inset-0 h-full w-full bg-gradient-to-b from-transparent via-transparent to-slate-100'></div> */}
          <div className='absolute inset-0 flex flex-col items-center justify-end gap-5 opacity-0 translate-y-[60%] group-hover:translate-y-0 group-hover:opacity-60 transition-transform duration-700'>
          <h1 className='text-xl font-serif'>White Pillow</h1>
            <h1 className='text-xl font-bold'>₹250</h1>
            <button className='border mb-1 border-neutral-700 border-4 w-60  h-10 rounded-sm hover:bg-slate-400'>ADD TO CART</button>
          </div>
          </div>
       </div>

       <i class="fa-solid fa-arrow-right text-6xl opacity-30 hover:opacity-50 hover:cursor-pointer"></i>
       </div>

      
    </div>
  )
}

export default Trendy
