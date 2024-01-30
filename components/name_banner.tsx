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
      <main className="flex flex-col mx-12 pr-16 h-fit transition-opacity opacity-100 duration-[2s]">
        <div className={`${sixtyfour.className}`}>
          <h1 className="flex items-start text-6xl drop-shadow-[0_8.2px_1.2px_rgba(0,0,0,0.8)] w-fit h-fit  bg-gradient-to-b from-white via-gray-200 to-gray-400 text-transparent bg-clip-text cursor-default select-none">Evan Burriola</h1>
        </div>
      </main>
    );
  } else {
    return (
      <main className="flex flex-col mx-12 pr-16 h-10 transition-opacity opacity-0">
        <div className={`${sixtyfour.className}`}>
          <h1 className="flex items-center text-6xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-white w-fit h-fit cursor-default select-none">Evan Burriola</h1>
        </div>
      </main>
    );
  }
}