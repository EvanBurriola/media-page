'use client'

import React, {useState} from "react"
import Tree from "./tree";

export type NodeProps = {
    node : {
        key: string;
        label: string;
        children: NodeProps
    }
};

export default function TreeNode({ node } : NodeProps) {
    const { children, label } = node;
  
    // Have children nodes hidden by default
    const [showChildren, setShowChildren] = useState(false);
  
    const handleClick = () => {
      setShowChildren(!showChildren);
    };

    // If leaf node
    if(children == null){
        return (
            <>
            <div onClick={handleClick} className="mb-3">
                <span className= "select-none">{label}</span>
            </div>
            <ul className="pl-3 border-l border-black">
                {showChildren && <Tree treeData={children} />}
            </ul>
            </>
        );
    // Has children
    }else{
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
}
