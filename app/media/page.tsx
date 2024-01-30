'use client'
import Link from "next/link";
import Tree from "@/components/tree";
import React, { useState, useEffect } from "react"

const musicTree = [
  {
    key: "0",
    label: "Music",
    children: [
      {
        key: "0-0",
        label: "Listening",
        children: [
          {
            key: "0-1-1",
            label: "Apple Music",
            children: [
              {
                key: "0-1-1-1",
                label: "Sweet Pill",
              },
              {
                key: "0-1-1-2",
                label: "Sianvar",
              },
              {
                key: "0-1-1-3",
                label: "Hail the Sun",
              },
              {
                key: "0-1-1-4",
                label: "Jeff Buckley",
              },
              {
                key: "0-1-1-5",
                label: "Narco Debut",
              },
            ]
          },
          {
            key: "0-1-2",
            label: "Vinyl",
            children: [
              {
                key: "0-1-2-1",
                label: "The Beatles",
              },
              {
                key: "0-1-2-2",
                label: "Kendrick Lamar",
              },
              {
                key: "0-1-2-3",
                label: "Silversun Pickups",
              },
              {
                key: "0-1-2-4",
                label: "Billie Eilish",
              },
              {
                key: "0-1-2-5",
                label: "Pinegrove",
              },
            ]
          }
        ],
      },
      {
        key: "0-1",
        label: "Creating",
        children: [
          {
            key: "0-1-1",
            label: "Melanchology",
            children: [
              {
                key: "0-1-1-1",
                label: "Guitarist"
              },              
              {
                key: "0-1-1-2",
                label: "Drummer"
              },
            ]
          },
          {
            key: "0-1-2",
            label: "False Advert",
            children: [
              {
                key: "0-1-2-1",
                label: "Vocalist"
              },              
              {
                key: "0-1-2-2",
                label: "Guitarist"
              },
              {
                key: "0-1-2-3",
                label: "Writer"
              },
            ]
          }
        ]       
      }
      
    ],
  },
];

const videoTree = [
  {
    key: "1",
    label: "Video",
    children: [
      {
        key: "1-0",
        label: "YouTube",
        children: [
          {
            key: "1-0-0",
            label: "Music"
          },
          {
            key: "1-0-1",
            label: "Programming/Math"
          },
          {
            key: "1-0-2",
            label: "Gaming"
          }
        ]
      },
      {
        key: "1-1",
        label: "Instagram",
        children: [
          {
            key: "1-1-0",
            label: "Music"
          },
          {
            key: "1-1-1",
            label: "Friends/Family"
          },
          {
            key: "1-1-2",
            label: "Gaming"
          }
        ]
      },
    ],
  },
];

const textTree = [
  {
    key: "2",
    label: "Text",
    children: [
      {
        key: "2-0",
        label: "Books",
        children: [
          {
            key: "2-0-0",
            label: "Fantasy",
            children: [
              {
                key: "2-0-0-0",
                label: "Dragonlance: Chronicles"
              },
              {
                key: "2-0-0-1",
                label: "Legend of Drizzt"
              },
            ]
          }
        ]
      },
      {
        key: "2-1",
        label: "Internet",
        children: [
          {
            key: "2-1-0",
            label: "Messages",
          },
          {
            key: "2-1-1",
            label: "Text"
          },
          {
            key: "2-1-2",
            label: "Email"
          },
          {
            key: "2-1-3",
            label: "Social Media"
          },
          {
            key: "2-1-4",
            label: "Forums"
          }
        ]
      },
    ],
  },
];

const imageTree = [
  {
    key: "3",
    label: "Image",
    children: [
      {
        key: "3-0",
        label: "Instagram",
      },
      {
        key: "3-1",
        label: "Snapchat",
      },
    ],
  }  
];

export default function MediaTree() {
    // Have children nodes hidden by default
    const [expand, setExpand] = useState(false);

    const handleClick = () => {
      setExpand(!expand);
    };

    const [loaded, setLoaded] = useState(false);

    useEffect(() =>{
      if(loaded == true){
          setLoaded(true);
      } else{
        setLoaded(true);
      }
    }, [loaded])

  const treeComponent = (expand : boolean) => {
      return (
        <>
          <div className="w-full min-h-screen absolute -z-10 blur-3xl">
            <img src="innerChamber.jpg" alt="Inner Chamber" className="object-fill absolute saturate-50 select-none"></img>
          </div>
          <main className="flex min-h-screen flex-col items-center p-4">
            <div className="mb-3 flex flex-row pr-20">
              <Link href='/' className="mt-4 mr-4 w-20 h-6 text-center text-white hover:bg-blue-800 bg-blue-600 transition-colors duration-300 rounded-xl drop-shadow-[0_8.2px_1.2px_rgba(0,0,0,0.8)] select-none">Home</Link>
              <h1 className="select-none drop-shadow-[0_8.2px_1.2px_rgba(0,0,0,0.8)] text-white text-6xl">Media Breakdown</h1>
              <svg onClick={handleClick} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer select-none mt-6 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d={expand == true ? "m4.5 15.75 7.5-7.5 7.5 7.5" : "m19.5 8.25-7.5 7.5-7.5-7.5" } />
              </svg>
            </div>
            <div className="flex flex-row w-fill gap-x-12">
              <Tree treeData={musicTree} expand={expand} />
              <Tree treeData={videoTree} expand={expand} />
              <Tree treeData={textTree} expand={expand} />
              <Tree treeData={imageTree} expand={expand} />
            </div>
          </main>
        </>
      );  
  }

  return treeComponent(expand);
}
