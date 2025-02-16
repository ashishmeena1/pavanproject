"use client"
import React from 'react'
import Card from '../card/Card'
import { Category } from '@mui/icons-material'
import CategoryWrapper from '../card/CategoryWrapper'

const arr = [1,2,3,4,5,6,7,8,9]

function Homepage() {
  
  return (
    <div className='bg-yellow-100 w-full h-[100vh] relative flex flex-col justify-between items-center top-[70px] text-pretty px-2'>
     <h1 className='p-1  h-30 uppercase font-sans text-center text-blue-700 font-extrabold text-3xl m-1 '>Buy anythingh easyly at your fintertip</h1>
     <h2 className='p-2 text-slate-800 font-extrabold text-xl uppercase'>Category</h2>
     <section className='w-full h-[200px] scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100 bg-white shadow-md  px-5' >
      <CategoryWrapper/>
     </section>
      
      <section id='today-trending' className='w-full m-2 bg-red-200 text-center'>
          <h2 className='text-3xl uppercase font-extrabold  text-white bg-black m-1'>Trending now</h2>
        <div className='flex flex-wrap items-center justify-center'>
          {
            arr.map((index)=>{
              return <Card  data={{type:"moblie",startingprice:"2000",highestprice:"3000",key:index}}/>
            })
          }
        </div>
      </section>
    </div>
  )
}

export default Homepage