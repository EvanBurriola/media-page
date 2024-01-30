'use client'
import Image from "next/image";
import Button from "@/components/button";
import Tree from "@/components/tree";
import React, { useState, useEffect } from "react"

const treeData = [
  {
    key: "0",
    label: "Music",
    children: [
      {
        key: "0-0",
        label: "Document 1-1",
        children: [
          {
            key: "0-1-1",
            label: "Document-0-1.doc",
          },
          {
            key: "0-1-2",
            label: "Document-0-2.doc",
          },
        ],
      },
    ],
  },
  {
    key: "1",
    label: "Video",
    children: [
      {
        key: "1-0",
        label: "document1.doc",
      },
      {
        key: "0-0",
        label: "documennt-2.doc",
      },
    ],
  },
  {
    key: "2",
    label: "Text",
    children: [
      {
        key: "1-0",
        label: "document1.doc",
      }
    ],
  },
  {
    key: "3",
    label: "Picture",
    children: [
      {
        key: "1-0",
        label: "document1.doc",
      },
      {
        key: "0-0",
        label: "documennt-2.doc",
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

  const treeComponent = (expand : boolean) => {
      return (
        <main className="flex min-h-screen flex-col items-left p-4">
          <div className="mb-3 flex flex-row">
            <h1 className="select-none drop-shadow-2xl text-black">Media Breakdown</h1>
            <svg onClick={handleClick} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer select-none">
            <path strokeLinecap="round" strokeLinejoin="round" d={expand == true ? "m4.5 15.75 7.5-7.5 7.5 7.5" : "m19.5 8.25-7.5 7.5-7.5-7.5" } />
            </svg>
          </div>
            <Tree treeData={treeData} expand={expand} />
        </main>
      );  
  }

  return treeComponent(expand);
}
