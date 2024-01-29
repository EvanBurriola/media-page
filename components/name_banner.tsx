'use client'
import React, { useEffect, useState } from "react"
import localFont from 'next/font/local';

const sixtyfour = localFont({
  src: [
    {
      path: '../public/fonts/Sixtyfour-Regular.ttf'
    },
  ],
  variable: '--font-sixtyfour'
})

export default function NameBanner() {
  const [loaded, setLoaded] = useState(false);

  const handleLoad = () => {
    setLoaded(true);
  }

  window.addEventListener('load', handleLoad);

  useEffect(() =>{
    if(loaded == true){
        setLoaded(true);
    } else{
      setLoaded(true);
    }
  }, [loaded])

  // bg-gradient-to-b from-transparent via-gray-200 to-transparent

  if (loaded) {
    return (
      <main className="flex flex-col h-10 mx-12 pr-16 transition-opacity opacity-100 duration-[2s]">
        <div className={`${sixtyfour.className}`}>
          <h1 className="flex items-start text-7xl drop-shadow-[0_8.2px_1.2px_rgba(0,0,0,0.8)] w-fit h-fit pt-24  bg-gradient-to-b from-white via-gray-200 to-gray-400 text-transparent bg-clip-text cursor-default select-none">Evan Burriola</h1>
        </div>
      </main>
    );
  } else {
    return (
      <main className="flex flex-col h-10 justify-end mx-12 w-fit transition-opacity opacity-0">
        <div className={`${sixtyfour.className}`}>
          <h1 className="flex items-center text-7xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-white w-fit h-fit cursor-default select-none">Evan Burriola</h1>
        </div>
      </main>
    );
  }
}