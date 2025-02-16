"use client"
import React, { useEffect, useState } from 'react'
import Card from "./Card"
import { error } from 'console'

function CardWrapper() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<[]>([]);



  useEffect(() => {
    async function fetching() {
      console.log("intializing...")
      try {
        console.log("trying....")
        const res = await fetch("http://localhost:3000/api/home/homepagedata", { method: "get" })
        console.log("there is an error 1")
        if (res.ok) {
          console.log("there is no error")
          const body = await res.json();
          setData(body)
          setTimeout(() => {
            setLoading(false)
          }, 2000);
        }
        else {
          console.log("ya error")
          setError(true)
        }
      } catch (err) {
        console.log(err)
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    fetching();
  }, [])



  return (
    (loading === true) ? <div>Your page is loading.....</div> :
    (error === true) ? <div>there is a error</div> :
    <div>
      <div id="card-Wrapper" className='flex items-center flex-wrap justify-center '>
        {
          (data.length > 0) ? data.map((data) => {
            return <Card key={data.type} data={data} />
          }) : <div> no daata</div>
        }
      </div>
    </div>
  )
}

export default CardWrapper