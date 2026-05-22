import type { BrightrailTreeNode } from '../tree/brightrail-tree.types';

/** Tree node with optional secondary column text for tree-table rows. */
export interface BrightrailTreeTableNode extends BrightrailTreeNode {
  meta?: string;
  children?: BrightrailTreeTableNode[];
}

export interface BrightrailTreeTableColumn {
  readonly id: string;
  readonly header: string;
  readonly field?: 'label' | 'meta';
}

export interface BrightrailTreeTableFlatRow {
  readonly id: string;
  readonly label: string;
  readonly meta?: string;
  readonly depth: number;
  readonly hasChildren: boolean;
  readonly expanded: boolean;
  readonly node: BrightrailTreeTableNode;
}
