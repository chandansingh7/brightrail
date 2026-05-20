import type { BrightrailTreeNode } from './brightrail-tree.types';

export interface BrightrailTreeFlatNode extends BrightrailTreeNode {
  depth: number;
  hasChildren: boolean;
}

/** Collect ids of nodes marked `expanded: true` in the tree (depth-first). */
export function collectInitiallyExpandedIds(nodes: BrightrailTreeNode[]): Set<string> {
  const ids = new Set<string>();
  const walk = (list: BrightrailTreeNode[]): void => {
    for (const node of list) {
      if (node.expanded) {
        ids.add(node.id);
      }
      if (node.children?.length) {
        walk(node.children);
      }
    }
  };
  walk(nodes);
  return ids;
}

/** Find a node by id (depth-first). */
export function findTreeNodeById(nodes: BrightrailTreeNode[], id: string): BrightrailTreeNode | undefined {
  for (const node of nodes) {
    if (node.id === id) {
      return node;
    }
    if (node.children?.length) {
      const found = findTreeNodeById(node.children, id);
      if (found) {
        return found;
      }
    }
  }
  return undefined;
}

/** Depth-first list of visible nodes respecting expanded branch ids. */
export function flattenVisibleTreeNodes(
  nodes: BrightrailTreeNode[],
  expandedIds: Set<string>,
  depth = 0,
): BrightrailTreeFlatNode[] {
  const out: BrightrailTreeFlatNode[] = [];
  for (const node of nodes) {
    const hasChildren = (node.children?.length ?? 0) > 0;
    out.push({ ...node, depth, hasChildren });
    if (hasChildren && expandedIds.has(node.id)) {
      out.push(...flattenVisibleTreeNodes(node.children!, expandedIds, depth + 1));
    }
  }
  return out;
}
