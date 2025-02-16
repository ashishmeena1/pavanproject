"use client"
import React, { FormEvent, useEffect, useRef, useState } from 'react'
import { Close } from '@mui/icons-material';

function page() {
    const [open, setOpen] = useState(true);
    const [productName, setProductName] = useState("")
    const [productDescription, setProductDesciption] = useState("")
    const [price, setPrice] = useState("")
    const [file, setFile] = useState<File | "">("");

    const [img, setImg] = useState("");
    function handleOpen() {
        setOpen(false)
    }

    function handleClose() {
        console.log(open)
        setOpen(true)
    }

    function handleFile(e: any) {
        console.log(e.target.files[0])
        setFile(e.target.files[0])
    }

    function handlechange(e: any) {
        console.log(productDescription, productName, price)
        if (e.target.id === "name") {
            setProductName(e.target.value)
            return;
        }
        else if (e.target.id === "price") {
            setPrice(e.target.value)
            return;
        }
        setProductDesciption(e.target.value)
        return;
    }

    async function handlesubmition(e: FormEvent) {
        e.preventDefault()
        const formdata = new FormData();
        formdata.append("productName", productName)
        formdata.append("Description", productDescription)
        formdata.append("price", price)
        formdata.append("image", file)


        try {
            const response = await fetch("http://localhost:3000/api/seller/addproduct", {
                method: "POST",
                body:formdata
            })

            console.log(response.json())
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        console.log("it is re running")
    }, [open, img])

    return (
        <>
            <div className='bg-black w-full h-[100vh] relative'>
                <div className='main-page bg-red-500 w-full h-[100vh] flex items-center justify-center flex-col'>
                    hello this is seller page
                    <div>this is your product</div>
                    <div>
                        <button className='bg-blue-600 p-2 text-white rounded-sm' onClick={handleOpen}>add product</button>
                    </div>
                </div>
                <div className={`bg-red-50 backdrop:blur-md absolute top-[10%] left-[50%] translate-x-[-50%] w-1/2 h-1/2 ${open ? "hidden" : ""} flex flex-col items-center text-center`} >
                    <button onClick={handleClose} className='right-0 top-0 absolute'><Close></Close></button>
                    <h3 className="bg-slate">add your product</h3>
                    <div>
                        <form onSubmit={handlesubmition} className=' flex flex-col items-center m-5'>
                            <input type="text" placeholder='enter your product name ' id='name' onChange={handlechange} className='p-2 m-1' />
                            <input type="text" placeholder='enter the price of product ' id="price" onChange={handlechange} className='p-2 m-1' />
                            <input type="text" placeholder='enter description' id="description" className='p-2 m-1 h-20' onChange={handlechange} />
                            <input type="file" name="file" id="file" onChange={handleFile} accept='image/*' />
                            <img src={img} alt="" />
                            <input type="submit" value="submit the info" />
                        </form>
                    </div>
                </div>
            </div>
        </>

    )
}

export default page