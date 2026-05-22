import type { BrightrailTreeTableFlatRow, BrightrailTreeTableNode } from './brightrail-tree-table.types';

export function flattenTreeTableRows(
  nodes: readonly BrightrailTreeTableNode[],
  expanded: ReadonlySet<string>,
  depth = 0,
): BrightrailTreeTableFlatRow[] {
  const rows: BrightrailTreeTableFlatRow[] = [];
  for (const node of nodes) {
    const hasChildren = (node.children?.length ?? 0) > 0;
    const isExpanded = expanded.has(node.id);
    rows.push({
      id: node.id,
      label: node.label,
      meta: node.meta,
      depth,
      hasChildren,
      expanded: isExpanded,
      node,
    });
    if (hasChildren && isExpanded) {
      rows.push(...flattenTreeTableRows(node.children ?? [], expanded, depth + 1));
    }
  }
  return rows;
}
