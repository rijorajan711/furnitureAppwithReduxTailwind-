import React from "react";
import Card from "./Card";
import { useState, useEffect } from "react";
import { getAllData } from "../helperForAxios/allapi";
function Allproduct() {
  const [allData, setAllData] = useState([]);

  const dataFromJsonServerr = async (routeis) => {
    const { data } = await getAllData(routeis);
    setAllData(data);
  };

  useEffect(() => {
    dataFromJsonServerr("allProducts");
  }, []);

  return (
    <div className="mt-[60px] mb-10 flex flex-col flex-wrap gap-5 ">
      <div className="flex justify-center font-bold text-4xl opacity-75">
        All Product
      </div>
      <div className="flex justify-center gap-5 flex-wrap">
        {allData?.length > 0 ? (
          allData?.map((dataobj) => <Card product={dataobj} />)
        ) : (
          <h1>sorry</h1>
        )}
      </div>
    </div>
  );
}

export default Allproduct;
