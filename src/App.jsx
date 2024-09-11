import {
  Background,
  ReactFlow,
  Controls,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
} from "@xyflow/react";
import React, { useCallback, useMemo, useState } from "react";
import Slide, { SLIDE_WIDTH } from "./components/Slide";

const initialNodes = [
  {
    id: "0",
    type: "slide",
    position: { x: 0, y: 0 },
    data: { source: "## Hello, React Flow!" },
  },
  {
    id: "1",
    type: "slide",
    position: { x: SLIDE_WIDTH, y: 0 },
    data: { source: "- these are\n- some\n- bullet points!" },
  },
  {
    id: "2",
    type: "slide",
    position: { x: SLIDE_WIDTH * 2, y: 0 },
    data: { source: "- 1\n- 2\n- 3" },
  },
];
const nodeTypes = {
  slide: Slide,
};
const initialEdges = [];

const App = () => {
  const [nodes, setNodes] = useState(initialNodes);

  return (
    <>
      <div style={{ width: "100vw", height: "100vh" }}>
        <ReactFlow nodes={nodes} nodeTypes={nodeTypes} fitView minZoom={0.1}>
          <Background />
          <Controls />
        </ReactFlow>
      </div>
    </>
  );
};

export default App;
