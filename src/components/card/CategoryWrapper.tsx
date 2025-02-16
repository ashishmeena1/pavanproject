import React from 'react'
import Categorycard from './Categorycard'

function CategoryWrapper() {
  const arr = [1,2,3,4,5,6,7,8,9]
  return (
    <div id="category-item" className='w-full h-[200px] flex  overflow-x-scroll items-center justify-around'>
       {
         arr.map((index)=><Categorycard key={index}/>)
       } 
    </div>
  )
}

export default CategoryWrapper