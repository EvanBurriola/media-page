import Link from "next/link";
import React, { useState } from "react"
import NameBanner from "@/components/name_banner";


export default function Home() {
  return (
    <>
      <div className="flex justify-stretch w-screen absolute -z-10 blur-sm">
        <img src="innerChamber.jpg" alt="Inner Chamber" className="object-fill w-screen h-screen absolute saturate-50"></img>
      </div>

      <div className="flex flex-row h-screen justify-between">
        <div className="flex flex-col h-fit w-2/4 pt-24">
          <NameBanner></NameBanner>

          <h2 className="flex justify-center mx-12 mt-12 text-white text-4xl font-bold drop-shadow-[0_8.2px_1.2px_rgba(0,0,0,0.8)]">Why CSCE445?</h2>
          <div className="w-fit h-fit mx-12 mt-2 bg-white bg-opacity-40">
            <p className="px-2 text-black text-2xl">I am in CSCE445 for my final semester at A&M! I took this course because it satisfied my credits
            and seemed interesting. I am enjoying discussing the social implications of certain media technologies and am excited to see what we continue to study.</p>
          </div>

          <Link href='/media' className="flex justify-center mx-12 mt-12 text-white hover:bg-blue-800 bg-blue-600 transition-colors duration-150 rounded-3xl drop-shadow-[0_8.2px_1.2px_rgba(0,0,0,0.8)]">Media Use Tree</Link>
          
        </div>

        <img src="newOrleans.jpg" className="flex object-cover mr-32 rounded-full"></img>
      </div>
    </>
  )
}