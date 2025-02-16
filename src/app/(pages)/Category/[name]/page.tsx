"use client"
import { useParams } from 'next/navigation'
import React, { useEffect } from 'react'

function page() {
    const prop = useParams()

    useEffect(() => {
        console.log(prop)
    }, [])


    return (
        <div className='bg-blue-500 flex items-center justify-center w-full h-[100vh] max-w-[1600px] absolute left-1/2 translate-x-[-50%]'>this is a category {prop.name} page</div>
    )
}

export default page