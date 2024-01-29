import React, { useState } from "react"

export default function Home(){
    return (
        <>
            <div className="flex justify-stretch w-screen h-screen absolute -z-10">
                <img src="innerChamber.jpg" alt="Inner Chamber" className="object-none w-screen h-screen absolute"></img>
            </div>

            <main className="flex min-h-screen flex-col items-left p-4">
                <h1 className="text-8xl bg-gradient-to-b from-white via-gray-200 to-gray-300 shadow-black shadow-2xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-transparent bg-clip-text w-fit">I am Evan Burriola</h1>
            </main>
        </>
    ) 
}