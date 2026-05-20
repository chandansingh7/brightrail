import type { BrightrailTreeNode } from 'brightrail';

/** Sample hierarchy for catalog tiles and playground preview. */
export const TREE_DEMO_WORKSPACE: BrightrailTreeNode[] = [
  {
    id: 'workspace',
    label: 'Workspace',
    expanded: true,
    children: [
      {
        id: 'projects',
        label: 'Projects',
        expanded: true,
        children: [
          { id: 'alpha', label: 'Alpha rollout' },
          { id: 'beta', label: 'Beta queue' },
        ],
      },
      { id: 'settings', label: 'Settings' },
    ],
  },
];

export const TREE_DEMO_FILES: BrightrailTreeNode[] = [
  {
    id: 'src',
    label: 'src',
    expanded: true,
    children: [
      { id: 'app', label: 'app.component.ts' },
      { id: 'main', label: 'main.ts' },
    ],
  },
  { id: 'readme', label: 'README.md' },
];

export const TREE_DEMO_ORG: BrightrailTreeNode[] = [
  {
    id: 'org',
    label: 'Acme Corp',
    expanded: true,
    children: [
      {
        id: 'eng',
        label: 'Engineering',
        expanded: true,
        children: [
          { id: 'platform', label: 'Platform' },
          { id: 'product', label: 'Product' },
        ],
      },
      { id: 'sales', label: 'Sales' },
    ],
  },
];

/** Copy-ready markup for tree catalog tiles (import from `brightrail`). */
export const TREE_VARIATION_SNIPPETS = {
  coreWorkspace: `<brightrail-tree
  [nodes]="workspaceNodes"
  selectionMode="single"
  [selectedId]="'alpha'"
/>`,
  coreFiles: `<brightrail-tree
  [nodes]="fileNodes"
  selectionMode="single"
  [selectedId]="'app'"
/>`,
  coreFlat: `<brightrail-tree
  [nodes]="[{ id: 'inbox', label: 'Inbox' }, { id: 'sent', label: 'Sent' }]"
  selectionMode="single"
  [selectedId]="'inbox'"
/>`,
  selectionSingle: `<brightrail-tree
  [nodes]="nodes"
  selectionMode="single"
  [selectedId]="selectedId"
  (selectedIdChange)="selectedId = $event"
/>`,
  selectionNone: `<brightrail-tree
  [nodes]="nodes"
  selectionMode="none"
/>`,
  expandedDefault: `<brightrail-tree
  [nodes]="[{ id: 'a', label: 'Expanded parent', expanded: true, children: [{ id: 'b', label: 'Child' }] }]"
  selectionMode="none"
/>`,
  expandedCollapsed: `<brightrail-tree
  [nodes]="[{ id: 'a', label: 'Collapsed parent', expanded: false, children: [{ id: 'b', label: 'Child' }] }]"
  selectionMode="none"
/>`,
  disabledNode: `<brightrail-tree
  [nodes]="[
    { id: 'ok', label: 'Available' },
    { id: 'locked', label: 'Locked', disabled: true }
  ]"
  selectionMode="single"
  [selectedId]="'ok'"
/>`,
  disabledBranch: `<brightrail-tree
  [nodes]="[
    { id: 'parent', label: 'Parent', disabled: true, children: [{ id: 'child', label: 'Child' }] }
  ]"
  selectionMode="none"
/>`,
  enterpriseNav: `<brightrail-tree
  ariaLabel="Primary navigation"
  [nodes]="navNodes"
  selectionMode="single"
  [selectedId]="activeRouteId"
/>`,
  enterpriseOrg: `<brightrail-tree
  [nodes]="orgNodes"
  selectionMode="single"
  [selectedId]="'platform'"
/>`,
  advancedDeep: `<brightrail-tree
  [nodes]="deepNodes"
  selectionMode="single"
  levelIndent="1.5rem"
/>`,
  advancedMultiBranch: `<span class="trco-split">
  <brightrail-tree [nodes]="leftNodes" selectionMode="single" [selectedId]="'docs'" />
  <brightrail-tree [nodes]="rightNodes" selectionMode="single" [selectedId]="'queue'" />
</span>`,

  futuristicGlass: `<div class="ff-future-shell ff-future-shell--glass">
  <brightrail-tree
    ariaLabel="Workspace"
    [nodes]="workspaceNodes"
    selectionMode="single"
    [selectedId]="'projects'"
  />
</div>`,
  futuristicNeon: `<div class="ff-future-shell ff-future-shell--neon">
  <brightrail-tree
    ariaLabel="Systems"
    [nodes]="fileNodes"
    selectionMode="single"
    [selectedId]="'app'"
  />
</div>`,
  futuristicCyber: `<div class="ff-future-shell ff-future-shell--cyber">
  <brightrail-tree
    ariaLabel="Network"
    [nodes]="orgNodes"
    selectionMode="single"
    [selectedId]="'platform'"
  />
</div>`,
  futuristicHolo: `<div class="ff-future-shell ff-future-shell--holo">
  <brightrail-tree
    ariaLabel="Lanes"
    [nodes]="flatNodes"
    selectionMode="single"
    [selectedId]="'inbox'"
  />
</div>`,
} as const;

export const TREE_DOC_SECTION_COUNT = 7;

export const TREE_HTML_EXAMPLES = `<brightrail-tree
  [nodes]="nodes"
  selectionMode="single"
  [selectedId]="selectedId"
  (selectedIdChange)="onSelect($event)"
/>

<brightrail-tree
  [nodes]="nodes"
  selectionMode="none"
  ariaLabel="File explorer"
/>`;
