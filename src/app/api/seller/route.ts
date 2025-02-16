import { NextRequest, NextResponse } from "next/server";



export async function GET(req: NextRequest){
   return NextResponse.json("this is seller page", { status: 200 })
}