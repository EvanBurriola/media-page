import Image from "next/image";
import Button from "@/components/button";
import Tree from "@/components/tree";

const treeData = [
  {
    key: "0",
    label: "Documents",
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
    label: "Desktop",
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
    label: "Downloads",
    children: [],
  },
];

export default function Home() {
  return (
    // "flex min-h-screen flex-col items-center justify-between p-24"
    <main className="flex min-h-screen flex-col items-left p-4">
      <h1>React Tree View</h1>
      <Tree treeData={treeData} />
    </main>
  );
}
