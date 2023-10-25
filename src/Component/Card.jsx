import { useDispatch } from "react-redux";

import { addToWishlist } from "../redux/wishlistslicee";
import { addToCart} from "../redux/cartSlice";
import {manageCartCountFromSlice} from "../redux/cartSlice";
import { manageWishlistCountFromSlice } from "../redux/wishlistslicee";
import {jsonAddToCart} from "../helperForAxios/allapi";
import {jsonAddToWishlist} from "../helperForAxios/allapi";

function Card({product}) {

  const dispatch=useDispatch()
  const addToWishlistFromCard=async({title,price,image1,image2})=>{
    const productDetailsSplit={title:title,price:price,image1:image1,image2:image2}
    const jsonWishlistResponseToTrendy=await jsonAddToWishlist(productDetailsSplit)
    console.log("duuuplicationnnn",jsonWishlistResponseToTrendy)
    if(jsonWishlistResponseToTrendy.statusText==="Created"){dispatch(manageWishlistCountFromSlice(1));alert("Item Added To Wishlist") }else{alert("Item Not Added To Wishlist Due To Some Network Problem")}
   
    
}

const addToCartFromCard=async({title,price,image1,image2})=>{
  const productDetailsSplit={title:title,price:price,image1:image1,image2:image2}
  const jsonCartResponseToTrendy=await jsonAddToCart(productDetailsSplit)
  console.log("Item Added To Cart",jsonCartResponseToTrendy)
  if(jsonCartResponseToTrendy.statusText==="Created"){dispatch(manageCartCountFromSlice(1));alert("Item Added To Cart")}else{alert("Item Not Added To Cart Due To Some Network Problem")}

}

  return (
    <div className='group relative mt-5 h-[400px] w-[350px] rounded-xl hover:bg-slate-100 hover:scale-[1.1] duration-500'>
           <img
            src={product.image1}
          
            className="absolute min-w-[300px] max-w-[305px] h-[250px] ml-[22px] mt-3 rounded-lg group-hover:opacity-0 duration-1000"
          ></img>
              <img
             src={product.image2}
            className="absolute opacity-0 max-w-[305px] min-w-[300px] h-[250px] ml-[22px] mt-3 rounded-lg group-hover:opacity-100 duration-1000"
          ></img>
               <div className='absolute inset-0 flex flex-col items-center justify-end gap-5 opacity-0 translate-y-[10%] group-hover:translate-y-0 group-hover:opacity-60 transition-transform duration-700'>
          <h1 className='text-xl font-serif'>{product.title}</h1>
            <h1 className='text-xl font-bold'>₹{product.price}</h1>
            <div className="flex gap-5"> 
                     <button onClick={()=>addToWishlistFromCard(product)} className="border mb-1 border-4 border-neutral-700 rounded-sm w-40 h-10  hover:bg-slate-400 ">
                    ADD TO WISHLIST
                  </button>
                  <button onClick={()=>addToCartFromCard(product)} className="border mb-1 border-4 border-neutral-700 rounded-sm w-40  h-10  hover:bg-slate-400 ">
                    ADD TO CART
                  </button>
                  </div>
          </div>
           
        
           </div>
  )
}

export default Card


