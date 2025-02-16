import type { Metadata } from "next";

import "./globals.css";
import Navbar from "../components/Navbar";
import Providers from "./Providers";


export const metadata: Metadata = {
  title: "shop here",
  description: "A application that leverage your time",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning={true}>
        <body suppressHydrationWarning={true}>
          <Providers>
            <Navbar />
            {children}
          </Providers>
        </body>
      </html>
    </>
  );
}
