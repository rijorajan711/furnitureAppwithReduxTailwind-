import React, { useState } from "react";
import Trendy from "./Trendy";
import { Link } from "react-router-dom";



function Home() {
  const coverImgArray=["https://www.interiio.sg/img/uploads/blog-articles/definitive-guide-to-scandinavian-interior-design-style/09-scandinavian-monochrome.jpg","https://t4.ftcdn.net/jpg/05/51/69/95/360_F_551699573_1wjaMGnizF5QeorJJIgw5eRtmq5nQnzz.jpg","https://img.freepik.com/premium-photo/interior-modern-living-room-panorama-3d-rendering-generative-ai_786587-12950.jpg"]
  const [coverIndex,setCoverIndex]=useState(0)
  
  
  
  const changeCoverImg=(clickStatus,coverIndex)=>{
   if(clickStatus===1) {if(coverIndex>=2){
      setCoverIndex(0)
    }else{
      setCoverIndex(coverIndex+1)
    }}else{
      if(coverIndex<=0){
        setCoverIndex(2)
      }else{
        setCoverIndex(coverIndex-1)
      }
    }
  }
  
  return (
    <>
   
   
    <div className="xl:h-[600px]  bg-slate-50 mb-10 mt-10 flex flex-row gap-5 justify-center pt-16 xl:hover:scale-[1.08] duration-1000 flex-wrap">
      <div className="relative bg-slate-500 h-[520px] w-[800px] rounded-lg">
       <div className="top-40 left-24 text-white absolute z-20 flex flex-col gap-2">
        <h1 className="text-2xl font-semibold">Topsale Collection</h1>
        <h1 className="text-6xl font-bold">Living Room</h1>
        <h1 className="text-6xl font-bold">Furniture</h1>
         <Link to={"/shopenow"}><button className="btn border w-24 h-14 rounded-xl hover:bg-slate-600">Shope Now</button></Link>

       </div>
    
      <button onClick={()=>changeCoverImg(0,coverIndex)}> <i className="z-20 absolute top-2/4 text-white left-14 text-5xl fa-solid fa-chevron-left hover:text-zinc-300 cursor-pointer"></i></button>
    
        
       
        <img
          src={coverImgArray[coverIndex]}
          className="absolute top-0 h-full w-full rounded-lg"
        ></img>
        <button className="btn" onClick={()=>changeCoverImg(1,coverIndex)}><i className="z-20 absolute top-2/4 text-white right-14 text-5xl fa-solid fa-chevron-right hover:text-zinc-300 cursor-pointer"></i></button>
        <div class="absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-lg hover:opacity-70"></div>
      </div>
      <div className="bg-slate-100 h-[500px] flex flex-col gap-5 rounded-lg">
        <div className="relative bg-slate-500 w-full h-[250px] rounded-lg">

        <div className="top-10 left-12 text-white absolute z-20 flex flex-col gap-2">
        <h1 className="text-xl font-thin">Clearence</h1>
        <h1 className="text-xl font-bold">Chairs & Chaises<br></br> Up to 40% off</h1>
                                                                   
      
         <Link to={"/shopenow"}><button className="btn border w-24 h-14 rounded-xl hover:bg-slate-600">Shope Now</button></Link>
        

       </div>
          <img
            src="data:image/jpeg;base64,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"
            className="rounded-lg w-[400px] h-[250px]"
          ></img>
          <div class="absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-lg hover:opacity-70"></div>
       
        </div>
        <div className="relative bg-slate-800 w-full h-[250px] rounded-lg ">
           
        <div className="top-10 left-12 text-white absolute z-20 flex flex-col gap-2">
        <h1 className="text-xl font-thin">New In</h1>
        <h1 className="text-xl font-bold">Best Light<br></br> Collection For You</h1>
                                                                 
      
        <Link to={"/shopenow"}><button className="btn border w-24 h-14 rounded-xl hover:bg-slate-600">Shop Now</button></Link>
        

       </div>

          <img
            src="https://images.unsplash.com/photo-1573621622238-f7ac6ac0429a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGlnaHQlMjBidWxifGVufDB8fDB8fHww&w=1000&q=80"
            className="w-[400px] h-[250px] rounded-lg"
          ></img>
          <div class="absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-lg hover:opacity-70"></div>
        </div>
      </div>
    </div>
     

 
    </>
     
       
  );
}

export default Home;
