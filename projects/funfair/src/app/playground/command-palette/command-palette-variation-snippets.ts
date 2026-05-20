import type { BrightrailCommandPaletteItem } from 'brightrail';

export const COMMAND_PALETTE_DEMO_COMMANDS: BrightrailCommandPaletteItem[] = [
  { id: 'new', label: 'New document', group: 'File', shortcut: '⌘N' },
  { id: 'open', label: 'Open…', group: 'File', shortcut: '⌘O' },
  { id: 'save', label: 'Save', group: 'File', shortcut: '⌘S' },
  { id: 'settings', label: 'Settings', group: 'App', shortcut: '⌘,' },
  { id: 'help', label: 'Help center', group: 'App' },
];

export const COMMAND_PALETTE_GROUPED: BrightrailCommandPaletteItem[] = [
  { id: 'goto-dashboard', label: 'Go to Dashboard', group: 'Navigation' },
  { id: 'goto-projects', label: 'Go to Projects', group: 'Navigation' },
  { id: 'invite', label: 'Invite teammate', group: 'Actions' },
  { id: 'export', label: 'Export CSV', group: 'Actions', shortcut: '⌘E' },
];

export const COMMAND_PALETTE_WITH_DISABLED: BrightrailCommandPaletteItem[] = [
  { id: 'publish', label: 'Publish changes', group: 'Workflow' },
  { id: 'rollback', label: 'Rollback (admin only)', group: 'Workflow', disabled: true },
  { id: 'archive', label: 'Archive project', group: 'Workflow', disabled: true },
];

/** Copy-ready markup for command-palette catalog tiles (import from `brightrail`). */
export const COMMAND_PALETTE_VARIATION_SNIPPETS = {
  coreOpen: `<button type="button" (click)="paletteOpen.set(true)">Open palette</button>
<brightrail-command-palette
  [isOpen]="paletteOpen()"
  [commands]="commands"
  placeholder="Search commands…"
  (commandSelect)="onCommand($event)"
  (closed)="paletteOpen.set(false)"
/>`,

  coreClosed: `<brightrail-command-palette
  [isOpen]="false"
  [commands]="commands"
/>`,

  groupedCommands: `<brightrail-command-palette
  [isOpen]="true"
  [commands]="groupedCommands"
  placeholder="Jump to…"
/>`,

  withShortcuts: `<brightrail-command-palette
  [isOpen]="true"
  [commands]="commandsWithShortcuts"
/>`,

  emptyQuery: `<brightrail-command-palette
  [isOpen]="true"
  [commands]="[]"
  emptyLabel="No matching commands"
/>`,

  disabledItems: `<brightrail-command-palette
  [isOpen]="true"
  [commands]="commandsWithDisabled"
/>`,

  advancedKeywords: `<brightrail-command-palette
  [isOpen]="paletteOpen()"
  [commands]="commands"
  placeholder="Type to filter by label or keyword…"
  ariaLabel="Workspace command palette"
  [closeOnEscape]="true"
  [closeOnBackdrop]="true"
/>`,
} as const;

export const COMMAND_PALETTE_DOC_SECTION_COUNT = 6;

export const COMMAND_PALETTE_HTML_EXAMPLES = `<brightrail-command-palette
  [isOpen]="isOpen()"
  [commands]="commands"
  placeholder="Search commands…"
  (commandSelect)="runCommand($event)"
  (closed)="isOpen.set(false)"
/>

<!-- commands: BrightrailCommandPaletteItem[] -->
{ id: 'save', label: 'Save', group: 'File', shortcut: '⌘S' }`;
