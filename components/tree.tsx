'use client'
import React, { useState } from "react"
import TreeNode from "./tree_node";
// import {NodeProps} from "./tree_node";

// Fix any
export default function Tree({ treeData }: any) {
  if (treeData === undefined)
    return false;

  // Have children nodes hidden by default
  const [showAll, setShowAll] = useState(false);

  const handleClick = () => {
    setShowAll(!showAll);
  };

  return (
    <ul>
      {treeData.map((node: any) => (
        <TreeNode node={node} key={node.key} />
      ))}
    </ul>
  );
}