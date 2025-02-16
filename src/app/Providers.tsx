"use client"

import { SessionProvider } from 'next-auth/react'
import { ImageKitProvider } from "imagekitio-next";
import React from 'react'

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>

      <SessionProvider>
          {children}
      </SessionProvider>
    </>
  )
}

export default Providers