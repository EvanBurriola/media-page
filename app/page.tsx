import Link from "next/link";
import React, { useState } from "react"
import NameBanner from "@/components/name_banner";


export default function Home() {
  return (
    <>
      <div className="flex justify-stretch w-screen absolute -z-10 blur-sm">
        <img src="innerChamber.jpg" alt="Inner Chamber" className="object-none w-screen h-screen absolute saturate-50"></img>
      </div>
      <div className="flex flex-row h-fit w-fit">
        <NameBanner></NameBanner>
        <Link href="/media">Media</Link>
      </div>

    </>
  )
}