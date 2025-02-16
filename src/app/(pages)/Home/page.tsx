"use client"
import React, { useEffect, useState } from 'react';
import { CardWrapper } from '@/components';
import { useSession } from 'next-auth/react';

function page() {

  const session = useSession()
 

  useEffect(() => {
  }, [])

 
  return (
    
        <div className="absolute w-full h-[100%] max-w-[1600px] left-1/2 translate-x-[-50%] mt-[70px] bg-yellow-50 flex flex-col items-center">
          <h1 className="uppercase font-bold m-1 mx-2 text-black-900 text-3xl bg-blend-darken sm:text-4xl md:text-6xl text-center p-3 bg-slate-50 w-[99%]">Buy Here get it at home</h1>
          <CardWrapper/>
        </div>
  )
}

export default page