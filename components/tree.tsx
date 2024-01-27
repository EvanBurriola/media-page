import React, { useState } from "react"
import TreeNode from "./tree_node";
// import {NodeProps} from "./tree_node";

// Fix any
export default function Tree({ treeData, expand}: any) {
  if (treeData === undefined)
    return false;

  return (
    <>
      <ul>
        {treeData.map((node: any) => (
          <TreeNode node={node} key={node.key} expand={expand}/>
        ))}
      </ul>
    </>
  );
}