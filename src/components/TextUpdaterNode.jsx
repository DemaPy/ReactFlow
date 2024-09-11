import { useCallback } from "react";
import { Handle, Position } from "@xyflow/react";

const handleStyle = { left: 10 };

export function TextUpdaterNode({ data }) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return (
    <div className="border-slate-600 border p-4 rounded-md bg-white">
      <Handle type="target" position={Position.Top} />
      <div className="flex flex-col items-start">
        <label htmlFor="text">Text:</label>
        <input id="text" name="text" onChange={onChange} className="nodrag border rounded-md" />
      </div>
      <Handle type="source" position={Position.Bottom} id="a" />
    </div>
  );
}
