import fs from "fs";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req:NextRequest) {
  try {
    const body = await req.body;
    const formdata = await req.formData
   //  const {product} = await body
    
    return NextResponse.json(formdata)
  } catch (error) {
     return NextResponse.json(error,{status:301})
  }
}

export async function POST(req:NextRequest) {
  try {
    const body = await req.body;
    const form = await req.formData()
    const image = form.get("image")
    console.log(image)
     await fs.appendFile("./register","h" ,(err)=>{
           console.log(err?.path)
     })
   //  console.log(fs)

    return NextResponse.json("j")

  } catch (error) {
   console.log(error)
     return NextResponse.json(error,{status:301})
  }
}