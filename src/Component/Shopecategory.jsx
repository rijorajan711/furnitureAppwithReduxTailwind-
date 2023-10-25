import React from 'react'
import { Link } from 'react-router-dom'

function Shopecategory() {
  return (
    <div className='mt-[60px] mb-10 flex flex-col gap-5 hover:scale-[1.05] duration-500'>
    <div className='flex justify-center font-bold text-4xl opacity-75'>
     Shope By Category
    </div>
    <div className='grid grid-cols-3 gap-5 ml-28 mr-28 mt-10 justify-evenly w=[100%] box-content  '>
        <div className='group relative lg:grid-cols-3 h=[600px]'>

        <img className='h-full' src="https://t4.ftcdn.net/jpg/05/51/69/95/360_F_551699573_1wjaMGnizF5QeorJJIgw5eRtmq5nQnzz.jpg" alt="" />
        <div class="absolute top-0 left-0 w-full h-full bg-black opacity-30 rounded-lg hover:opacity-40"></div>
        <h1 className='absolute left-2/4  top-1/2 text-white font-semibold text-3xl gro group-hover:top-96 duration-700'>Outdoor</h1>
        <Link to={"/shopenow"}><button className="btn absolute left-1/3  top-1/2 text-white font-semibold text-2xl border w-48 opacity-0 h-14 rounded-xl hover:bg-slate-200 hover:text-black  group-hover:opacity-100">Shop Now</button></Link>
        </div>



        <div className='flex flex-col h-[600px] justify-between'>
       
        <div className='group relative h-[48%]'>
        <img className='h-full w-[100%]' src="https://img.freepik.com/premium-photo/painting-spiral-is-wall-room_745528-1937.jpg" alt="" />
        <div class="absolute top-0 left-0 w-full h-full bg-black opacity-10 rounded-lg hover:opacity-40"></div>
        <h1 className='absolute left-2/4  top-1/2 text-white font-semibold text-3xl gro group-hover:top-56 duration-700'>Outdoor</h1>
        <Link to={"/shopenow"}><button className="btn absolute left-1/3  top-1/2 text-white font-semibold text-2xl border w-48 opacity-0 h-14 rounded-xl hover:bg-slate-200 hover:text-black  group-hover:opacity-100">Shop Now</button></Link>
        </div>
        
        
        <div className='group relative h-[48%] '>
        <img className='h-full w-[100%]' src="https://img.freepik.com/premium-photo/gray-minimalistic-interior-with-marble-coffee-table-sofa-3d-render-illustration-mock-up_756748-82517.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1697414400&semt=ais"></img>
        <div className='absolute top-0 left-0 w-full h-full bg-black opacity-10 hover:opacity-40'></div>
        <h1 className='absolute left-2/4  top-1/2 text-white font-semibold text-3xl gro group-hover:top-56 duration-700'>Outdoor</h1>
        <Link to={"/shopenow"}><button className="btn absolute left-1/3  top-1/2 text-white font-semibold text-2xl border w-48 opacity-0 h-14 rounded-xl hover:bg-slate-200 hover:text-black  group-hover:opacity-100">Shop Now</button></Link>
        </div>

        </div>
        <div className='group relative h-[600px]'>

        <img className='h-[600px]' src="https://img.freepik.com/premium-photo/interior-modern-living-room-panorama-3d-rendering-generative-ai_786587-12950.jpg"></img>
        <div className='absolute left-0 top-0 w-full h-full bg-black opacity-10 hover:opacity-40 '></div>
        <h1 className='absolute left-2/4  top-1/2 text-white font-semibold text-3xl gro group-hover:top-96 duration-700'>Outdoor</h1>
        <Link to={"/shopenow"}><button className="btn absolute left-1/3  top-1/2 text-white font-semibold text-2xl border w-48 opacity-0 h-14 rounded-xl hover:bg-slate-200 hover:text-black  group-hover:opacity-100">Shop Now</button></Link>
        </div>
     
    </div>
    </div>
  )
}

export default Shopecategory
