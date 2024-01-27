import React, { useEffect, useState } from "react"
import Tree from "./tree";

export type NodeProps = {
  node: {
    key: string;
    label: string;
    children: NodeProps[]
  },
  expand:boolean
};


export default function TreeNode({ node, expand }: NodeProps,) {
  const { key, children, label } = node;

  // Have children nodes hidden by default
  const [showChildren, setShowChildren] = useState(expand);

  const handleClick = () => {
    setShowChildren(!showChildren);
  };

  // Full expand/collapse
  useEffect(() =>{
    if(expand == true){
      setShowChildren(true);
    } else{
      setShowChildren(false);
    }
  }, [expand])

  const componentReturn = (svg: string) => {
    if (svg.length == 0) {
      return (
        <>
          <div onClick={handleClick} className="mb-3">
            <span className="cursor-pointer select-none">{label}</span>
          </div>
          <ul className="pl-3 border-l border-black">
            {showChildren && <Tree treeData={children} />}
          </ul>
        </>
      );
    }
    if (svg == "leaf") {
      return (
        <>
          <div onClick={handleClick} className="mb-3">
            <span className="select-none">{label}</span>
          </div>
          <ul className="pl-3 border-l border-black">
            {showChildren && <Tree treeData={children} />}
          </ul>
        </>
      );
    }
    return (
      <>
        <div onClick={handleClick} className="mb-3 flex flex-row">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
            <path strokeLinecap="round" strokeLinejoin="round" d={svg} />
          </svg>
          <span className="cursor-pointer select-none transition-all duration-300 ease-in hover:text-cyan-600 hover:font-bold"> {label}</span>
        </div>
        <ul className="pl-3 border-l border-black">
          {showChildren && <Tree treeData={children} />}
        </ul>
      </>
    );
  }

  // If leaf node
  if (children == null || children.length == 0) {
    return componentReturn("leaf");
    // Is Root
  } else if (key.length == 1) {
    if (label == "Music") {
      return componentReturn("m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 0 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553Z");
    } if (label == "Video") {
      return componentReturn("M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125Z");
    } if (label == "Text") {
      return componentReturn("M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25");
    } if (label == "Picture") {
      return componentReturn("m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z");
    }
    // Has children
  } else {
    return componentReturn("");
  }
}
