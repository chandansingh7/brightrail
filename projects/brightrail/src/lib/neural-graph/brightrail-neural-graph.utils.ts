import {
  BrightrailNeuralGraphLayoutNode,
  BrightrailNeuralGraphLink,
  BrightrailNeuralGraphNode,
} from './brightrail-neural-graph.types';

/** Places nodes on a circle for lightweight SVG layouts. */
export function layoutNeuralGraphNodes(
  nodes: readonly BrightrailNeuralGraphNode[],
  width = 320,
  height = 200,
): readonly BrightrailNeuralGraphLayoutNode[] {
  if (nodes.length === 0) return [];
  const cx = width / 2;
  const cy = height / 2;
  const radius = Math.min(width, height) * 0.36;
  return nodes.map((node, index) => {
    const angle = (2 * Math.PI * index) / nodes.length - Math.PI / 2;
    return {
      ...node,
      x: cx + radius * Math.cos(angle),
      y: cy + radius * Math.sin(angle),
    };
  });
}

export function neuralGraphEdges(
  layout: readonly BrightrailNeuralGraphLayoutNode[],
  links: readonly BrightrailNeuralGraphLink[],
): string {
  const byId = new Map(layout.map((n) => [n.id, n]));
  return links
    .map((link) => {
      const from = byId.get(link.source);
      const to = byId.get(link.target);
      if (!from || !to) return '';
      return `${from.x},${from.y} ${to.x},${to.y}`;
    })
    .filter(Boolean)
    .join(' ');
}
