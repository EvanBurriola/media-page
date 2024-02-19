import React, { useState } from "react"
import Link from "next/link";

const fantasyPeers = [
  {
    key: '1',
    name: 'Kavya Kotra',
    link: 'https://saiskotra24.wixsite.com/kavya'
  },
  {
    key: '2',
    name: 'Juliana Leano',
    link: 'https://cs412jleano.xyz/cs445/assingmentOne.html'
  },
  {
    key: '3',
    name: 'Kimberly Chen',
    link: 'https://kimberlykchen.wixsite.com/kimchencsce445'
  },
  {
    key: '4',
    name: 'Liam Benkel',
    link: 'https://liambenkel.github.io/'
  },
  {
    key: '5',
    name: 'Miguel Garcia',
    link: 'https://migugi347.github.io/'
  },
]

const gamingPeers = [
  {
    key: '1',
    name: 'Mateo Lopez',
    link: 'https://people.tamu.edu/~jose_montenegro/'
  },
  {
    key: '2',
    name: 'Juliana Leano',
    link: 'https://cs412jleano.xyz/cs445/assingmentOne.html'
  },
  {
    key: '3',
    name: 'Akhil Mathew',
    link: 'https://mathewakhil.github.io/'
  },
  {
    key: '4',
    name: 'Prachi Miyan',
    link: 'https://prachinewmedia.wordpress.com/2024/01/30/16/'
  },
  {
    key: '5',
    name: 'Benson Nguyen',
    link: 'https://628005910.github.io/'
  },
  {
    key: '6',
    name: 'Ritika Nigam',
    link: 'https://ritikanigam.wixsite.com/assignment1'
  },
  {
    key: '7',
    name: 'Alan Perez',
    link: 'https://przalan12.github.io/'
  },
  {
    key: '8',
    name: 'Victor Phan',
    link: 'https://move2slowly.github.io/single.html'
  }
]

const navigatingContent = [
  {
    key: '1',
    name: 'Bella Woliver',
    link: 'https://people.tamu.edu/~bellawoliver/csce445/home.html'
  },
  {
    key: '2',
    name: 'Zihao Wang',
    link: 'https://howard-wang-323.github.io/'
  },
  {
    key: '3',
    name: 'Prachi Surbhi',
    link: 'https://sites.google.com/tamu.edu/psurbhi/home'
  },
  {
    key: '4',
    name: 'Romaanchan Skanda',
    link: 'https://sites.google.com/tamu.edu/romey-media-journey/home'
  },
  {
    key: '5',
    name: 'Uma Sarkar',
    link: 'https://umaesarkar.wixsite.com/home'
  },
]


export default function PeersPage(){
    return (
        <>
          <div className="w-full min-h-screen absolute -z-10 blur-3xl overflow-y-hidden">
            <img src="innerChamber.jpg" alt="Inner Chamber" className="object-fill absolute saturate-50 select-none"></img>
          </div>
          <main className="flex w-screen h-[80vh] flex-row items-center place-content-center p-4">

          <Link href='/' className=" self-start mt-4 mr-4 w-20 h-6 text-center text-white hover:bg-blue-800 bg-blue-600 transition-colors duration-300 rounded-xl drop-shadow-[0_8.2px_1.2px_rgba(0,0,0,0.8)] select-none">Home</Link>

            <div className="flex h-[80vh] flex-col items-center place-content-between p-4 gap-y-3">
              <div>
                <h2 className="text-center text-white text-4xl font-bold drop-shadow-[0_8.2px_1.2px_rgba(0,0,0,0.8)] select-none">Fantasy Texts</h2>
                <p className=" w-96 h-fit mx-12 p-2 bg-white bg-opacity-40 select-none">I found a considerable amount of people 
                that were interested in fantasy literature. This was interesting to me as I also read fantasy novels and I didn't realize
                how many of my peers did as well.</p>
              </div>
              <div>
                <h2 className="text-center text-white text-4xl font-bold drop-shadow-[0_8.2px_1.2px_rgba(0,0,0,0.8)] select-none">Interactive Media</h2>
                <p className="w-96 h-fit mx-12 p-2 bg-white bg-opacity-40 select-none">There were a considerable amount of people that consumed video game content.
                There were many genres and methods of this consumption, but I think it is interesting how prevelant it is as an interactive media.</p>
              </div>
              <div>
                <h2 className="text-center text-white text-4xl font-bold drop-shadow-[0_8.2px_1.2px_rgba(0,0,0,0.8)] select-none">Shared Difficulty</h2>
                <p className="w-96 h-fit mx-12 p-2 bg-white bg-opacity-40 select-none">Many people said that their struggles with media had to do with navigation.
                Many people expressed the abundance of media in all forms and how it can be disorienting and difficult
                to navigate at times.</p>
              </div>


            </div>

            <div className="flex h-[80vh] flex-col items-center place-content-evenly content-center p-4 mt-14 gap-y-2">
                              
              <div className="w-fit h-fit mx-12 bg-white bg-opacity-40">

                  {fantasyPeers.map((elem: any) => (
                    <ul>
                      <Link href={elem.link} target="_blank" className="hover:font-bold transition-all duration-500">{elem.name}</Link>
                    </ul>
                  ))}
              </div>
                
              <div className="w-fit h-fit mx-12 bg-white bg-opacity-40">
                {gamingPeers.map((elem: any) => (
                  <ul>
                    <Link href={elem.link} target="_blank" className="hover:font-bold transition-all duration-500">{elem.name}</Link>
                  </ul>
                ))}
              </div>

              <div className="w-fit h-fit mx-12 bg-white bg-opacity-40">
                {navigatingContent.map((elem: any) => (
                  <ul>
                    <Link href={elem.link} target="_blank" className="hover:font-bold transition-all duration-500">{elem.name}</Link>
                  </ul>
                ))}
              </div>
            </div>
          </main>
        </> 
      );
}