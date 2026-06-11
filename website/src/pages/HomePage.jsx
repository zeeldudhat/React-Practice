import React from "react";
import axios from "axios"; //
import Navbar from "../component/Index";
import Products from "../component/Products"
import { useState, useEffect } from "react";

export default function HomePage() {
  const [data, setData] = useState();
  async function data_call() {
    const req = await axios("https://dummyjson.com/carts");
    const res = await req.data.carts;  
    setData(res);
  }
  useEffect(() => {
    data_call();
  }, []);
  return (
    <>
      <Navbar />
      <div className="part">
<div className="left-panel" >
      <Products data={data}/>
</div>
<div className="right-panel">
      <Products data={data}/>

</div>
      </div>
    </>
  );
}
