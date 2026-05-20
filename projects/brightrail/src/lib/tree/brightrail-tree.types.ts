export type BrightrailTreeSelectionMode = 'single' | 'none';

/** One node in a {@link BrightrailTreeComponent} hierarchy. */
export interface BrightrailTreeNode {
  id: string;
  label: string;
  children?: BrightrailTreeNode[];
  expanded?: boolean;
  disabled?: boolean;
}
