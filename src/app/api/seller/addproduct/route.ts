import { NextRequest, NextResponse } from "next/server";



export async function POST(req: NextRequest) {
    try {
        const body=  await req.body;
       
        //  for(data of body){
        //     console.log(data)
        //  }

        return NextResponse.json(`ya the data is uploaded`, { status: 200 })
    } catch (error) {
        return NextResponse.json("ERROR ",{status:300})
    }
}
// export async function GET(req: NextRequest) {
//     // const data = await req.body;
//     return NextResponse.json("ya the data is uploaded", { status: 200 })
// }