import { LinkedIn } from "@mui/icons-material";
import Image from "next/image";
import React, { FormEvent, useEffect } from "react";

type Typedata = {
   type:string,
   startingprice:string,
   highestprice:string
   key:number
}


export default function VendorCard({data}:{data:Typedata}) {
   

   useEffect(()=>{
      console.log(data.key)
   },[])

   const handleclick = (e:Event) =>{
       e.preventDefault();
        console.log(e.target)
        console.log(data)
   }
   return (
         <div id="card" key={`${data.key}hello`} className='w-[200px] h-[300px] relative bg-white flex flex-col m-1 items-center shadow-md drop-shadow border-[1px] rounded-sm shadow-slate-700'>
            <div id="image" className='w-[99%] p-1 h-80 overflow-hidden'>
                <img key={data.key} src="vercel.jpg" alt="a image" className="hover:scale-110 w-full h-[100%] object-cover overflow-hidden"/>
            </div>
            <div className="text-center text-sm">
              <div id="pricing-range" className='capitalize text-sm'>Starting price {data.startingprice} </div>
              <div id="pricing-range" className=' capitalize '>highestprice price {data.highestprice}</div>
              <div id="about-shop" className=" capitalize opacity-85">{data.type} </div>
            </div>
         </div>
     
   );
}
