"use client"

import { GitHub } from '@mui/icons-material'
import { signIn, useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'

function page() {
   const data = useSession()

   const [email, setEmail] = useState("")
   const [name, setName] = useState("")
   const [password, setPassword] = useState("")
   const [renterpassword, setRenterpassword] = useState('')

   async function handlelogin(e:any) {
      try {
         e.preventDefault();
         const res = await signIn('credentials', {
            redirect: false,
            email,
            password
         });
         console.log(res)
      } catch (error) {
         console.log(error)
      }

   }

   useEffect(() => {

      console.log(data)
      return () => {
      }
   }, [data])



   return (
      <>
         <div className='w-full h-[100vh] bg-yellow-100 flex items-center justify-center text-cyan-400'>
            <div className="form">
               <div>email:{email}</div>
               <div>password:{password}</div>
               <div>name:{name}</div>
               <div>name:{renterpassword}</div>

               <form onSubmit={handlelogin} className=' bg-zinc-100 text-slate-800 w-80 h-80 flex items-center justify-center flex-col'>

                  <label htmlFor="email">email</label>
                  <input type='email' id='email' onChange={(e) => {
                     setEmail(e.target.value)
                  }} className='bg-slate-50 border-2 border-slate-950 text-black rounded-md'></input>

                  <label htmlFor="name">name</label>
                  <input type='text' id="name" onChange={(e) => {
                     setName(e.target.value)
                  }} className='bg-slate-50 border-2 border-slate-900 text-black rounded-md'></input>

                  <label htmlFor="Password">password</label>
                  <input type='Password' id='Password' onChange={(e) => {
                     setPassword(e.target.value)
                  }} className='bg-slate-50 border-2 border-slate-900 text-black rounded-md'></input>

                  <label htmlFor="renterpassword"> renter password</label>
                  <input type='text' id='renterpassword' onChange={(e) => {
                     setRenterpassword(e.target.value)
                  }} className='bg-slate-50 border-2 border-slate-900 text-black rounded-md'></input>

                  <input type="submit" />
               </form>
            </div>

         </div>

      </>
   )
}

export default page