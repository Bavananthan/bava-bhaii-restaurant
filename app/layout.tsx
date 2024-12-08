import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "../components/Navbar";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
const Urbanist = localFont({
  src: "./fonts/Urbanist-Medium.ttf",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Bava Restaurant",
  description: "Food ordering website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${Urbanist.variable} antialiased  bg-slate-700  text-gray-500`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
