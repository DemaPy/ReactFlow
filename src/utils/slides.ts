import { SLIDE_WIDTH, SlideData } from "../components/Slide";

type EdgeNode = { id: string; source: string; target: string };
type StackNode = { id: string; position: { x: number; y: number } };
type Node = {
  id: string;
  type: string;
  position: { x: number; y: number };
  data: SlideData;
};

export function slidesToElements({
  initial,
  slides,
}: {
  initial: string;
  slides: SlideData;
}) {
  const visited = new Set();
  const nodes: Node[] = [];
  const edges: EdgeNode[] = [];
  const stack: StackNode[] = [{ id: initial, position: { x: 0, y: 0 } }];

  while (stack.length) {
    const { id, position } = stack.pop()!;
    const data = slides[id];
    const node = { id, type: "slide", position, data };
    nodes.push(node);
    visited.add(id);

    if (data.left && !visited.has(data.left)) {
      const nextPosition = {
        x: position.x - SLIDE_WIDTH,
        y: position.y,
      };
      //   Add new node on the left side from the current node to stack with computed position
      stack.push({ id: data.left, position: nextPosition });
      // Push a new edge onto the edges array connecting the current slide to the
      // new slide.
      edges.push({ id: `${id}->${data.left}`, source: id, target: data.left });
    }
  }

  return { nodes, edges };
}
