
import { NextRequest, NextResponse } from 'next/server';
import { NextMiddlewareWithAuth } from 'next-auth/middleware';

import { getToken } from 'next-auth/jwt';
import { cookies } from 'next/headers';


const middleware: NextMiddlewareWithAuth = async (req: NextRequest, next) => {
    const {pathname} = await req.nextUrl;
    const check = pathname.startsWith("/signin")
   
    if(check){
        
    }
};

// export const config = [
//     "/",
//     "/dashboard"
// ]


export default middleware;