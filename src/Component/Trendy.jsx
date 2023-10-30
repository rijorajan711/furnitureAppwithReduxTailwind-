import React from "react";
import { useState, useEffect } from "react";
import { getAllData } from "../helperForAxios/allapi";
import { UseSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { addToWishlist } from "../redux/wishlistslicee";
import { addToCart } from "../redux/cartSlice";
import { toast } from 'react-toastify';
import { jsonAddToCart } from "../helperForAxios/allapi";
import { jsonAddToWishlist } from "../helperForAxios/allapi";
import { manageCartCountFromSlice } from "../redux/cartSlice";
import { manageWishlistCountFromSlice } from "../redux/wishlistslicee";
import 'react-toastify/dist/ReactToastify.css';


function Trendy() {
  const dispatch=useDispatch()
  const [allData,setAllData] = useState([]);
  

  const dataFromJsonServer = async (routeis) => {
    const { data } = await getAllData(routeis);
    setAllData(data);
  };



  useEffect(() => {
    dataFromJsonServer("allProducts");
  
    }, []);
 
  
  const addToWishlistFromTrendy=async({title,price,image1,image2})=>{
    const productDetailsSplit={title:title,price:price,image1:image1,image2:image2}
    const jsonWishlistResponseToTrendy=await jsonAddToWishlist(productDetailsSplit)
    if(jsonWishlistResponseToTrendy.status>=200&&jsonWishlistResponseToTrendy.status<300){dispatch(manageWishlistCountFromSlice(1));toast.warning("Item Added To Wishlist")}else{toast.warning("Item Not Added To Wishlist Due To Some Network Problem")}
    
  }

  const addToCartFromTrendy=async({title,price,image1,image2})=>{
       
        const productDetailsSplit={title:title,price:price,image1:image1,image2:image2}
        const jsonCartResponseToTrendy=await jsonAddToCart(productDetailsSplit)
     
        if(jsonCartResponseToTrendy.status>=200&&jsonCartResponseToTrendy.status<300){dispatch(manageCartCountFromSlice(1));toast.warning("Item Added To Cart")}else{toast.warning("Item Not Added To Cart Due To Some Network Problem")}
  }

  return (
    <div className="mt-5 mb-10 flex flex-col gap-5 ">
      <div className="flex justify-center font-semibold text-4xl">
        Trendy Product
      </div>
      <div className="flex gap-6 justify-center flex-wrap">

      <button onClick={() => dataFromJsonServer("allProducts")}>
          <h1 className=" border-b hover:cursor-pointer hover:border-black border-b-3 hover:text-red-300">
            All
          </h1>
        </button>
        <button onClick={() => dataFromJsonServer("furniture")}>
          <h1 className=" border-b hover:cursor-pointer hover:border-black border-b-3 hover:text-red-300">
            FURNITURE
          </h1>
        </button>
        <button onClick={() => dataFromJsonServer("light")}>
          <h1 className=" border-b hover:cursor-pointer hover:border-black border-b-3 hover:text-red-300">
            LIGHTS
          </h1>
        </button>
      </div>
      <div className="flex h-[500px] items-center overflow-y-hidden overflow-x-auto flex-wrap" >
   
        <div className="flex ">
          {allData?.length > 0 ? (
            allData.map((data) => (
              <div className="group relative h-[400px] w-[350px] rounded-xl hover:bg-slate-100 hover:scale-[1.1] duration-500">
                <img
                  src={data.image1}
                  className="w-[300px] h-[250px] ml-[22px] mt-3 rounded-lg"
                ></img>
                <div className="absolute inset-0 flex flex-col items-center justify-end gap-5 opacity-0 translate-y-[10%] group-hover:translate-y-0 group-hover:opacity-60 transition-transform duration-700">
                  <h1 className="text-xl font-serif">{data.title}</h1>
                  <h1 className="text-xl font-bold">₹{data.price}</h1>
                  <div className="flex gap-5"> 
                     <button onClick={()=>addToWishlistFromTrendy(data)} className="border mb-1 border-4 border-neutral-700 rounded-sm w-40 h-10  hover:bg-slate-400 ">
                    ADD TO WISHLIST
                  </button>
                  <button onClick={()=>addToCartFromTrendy(data)} className="border mb-1 border-4 border-neutral-700 rounded-sm w-40  h-10  hover:bg-slate-400 ">
                    ADD TO CART
                  </button>
                  </div>
                
                 
                </div>
              </div>
            ))
          ) : (
            <h1>Sorry</h1>
          )}
        </div>

        
      </div>
    
      
  
    </div>
  );
}

export default Trendy;
