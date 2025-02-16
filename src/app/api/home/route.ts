import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";



export async function GET(req: NextRequest) {
   const user = await prisma.user.findMany()
   const seller = await prisma.seller.create({
     data:{
        storename:"pavan kirana store",
        address:"dhaga factory rajgarh mp",
        phone_number:"1234567890",
        id:"cm6vv9j7i0000xhz8wokyf9r",
     }
   })

   console.log(user)

   return NextResponse.json({user,seller},{status:200})
}