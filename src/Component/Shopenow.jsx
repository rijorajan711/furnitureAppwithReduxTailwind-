import React from 'react'
import Card from './Card'
import { useState, useEffect } from "react";
import { getAllData } from "../helperForAxios/allapi";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Shopenow() {




  const [allData, setAllData] = useState([]);

  const dataFromJsonServerr = async (routeis) => {
    const { data } = await getAllData(routeis);
    setAllData(data);
  };

  useEffect(() => {
    dataFromJsonServerr("allProducts");
  }, []);



  return (
    <div className='mt-[60px] mb-10 flex flex-col flex-wrap gap-5 '>
    <div className='flex justify-center font-bold text-4xl opacity-75'>
     All Product
    </div>
    <div className='flex justify-center gap-5 flex-wrap'>
       
    {allData?.length > 0 ? (
          allData?.map((dataobj) => <Card product={dataobj} />)
        ) : (
          <h1>sorry</h1>
        )} 
            
       

     </div>
     <ToastContainer position='top-center'  theme='colored' autoClose={500}/>
    </div>
  )
}

export default Shopenow
