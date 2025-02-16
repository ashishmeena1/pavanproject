import { NextRequest, NextResponse } from "next/server";


export default function authmiddleware(req:NextRequest){

    return NextResponse.json("this is server auth middleware be sure about it")
}