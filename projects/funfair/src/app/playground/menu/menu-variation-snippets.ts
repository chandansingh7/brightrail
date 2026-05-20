/** Copy-ready markup for menu catalog tiles (consumers import from `brightrail`). */
export const MENU_VARIATION_SNIPPETS = {
  coreActions: `<button type="button" [brightrailMenuTrigger]="menu">Actions</button>
<brightrail-menu #menu>
  <brightrail-menu-item label="Edit" />
  <brightrail-menu-item label="Duplicate" />
  <brightrail-menu-item label="Archive" />
</brightrail-menu>`,

  coreOverflow: `<button type="button" [brightrailMenuTrigger]="menu" aria-label="More options">⋯</button>
<brightrail-menu #menu>
  <brightrail-menu-item label="Rename" />
  <brightrail-menu-item label="Move" />
  <brightrail-menu-item label="Delete" />
</brightrail-menu>`,

  coreAccount: `<button type="button" [brightrailMenuTrigger]="menu">Account</button>
<brightrail-menu #menu>
  <brightrail-menu-item label="Profile" />
  <brightrail-menu-item label="Settings" />
  <brightrail-menu-item label="Sign out" />
</brightrail-menu>`,

  stateSelected: `<button type="button" [brightrailMenuTrigger]="menu">View</button>
<brightrail-menu #menu>
  <brightrail-menu-item label="List" [selected]="true" />
  <brightrail-menu-item label="Board" />
  <brightrail-menu-item label="Calendar" />
</brightrail-menu>`,

  stateDisabled: `<button type="button" [brightrailMenuTrigger]="menu">Row actions</button>
<brightrail-menu #menu>
  <brightrail-menu-item label="Edit" />
  <brightrail-menu-item label="Share" />
  <brightrail-menu-item label="Delete" [disabled]="true" />
</brightrail-menu>`,

  stateMixed: `<button type="button" [brightrailMenuTrigger]="menu">Sort</button>
<brightrail-menu #menu>
  <brightrail-menu-item label="Name (A–Z)" [selected]="true" />
  <brightrail-menu-item label="Last updated" />
  <brightrail-menu-item label="Custom order" [disabled]="true" />
</brightrail-menu>`,

  contextRow: `<button type="button" [brightrailMenuTrigger]="menu" aria-label="Row menu">⋯</button>
<brightrail-menu #menu>
  <brightrail-menu-item label="Open" />
  <brightrail-menu-item label="Assign" />
  <brightrail-menu-item label="Remove" />
</brightrail-menu>`,

  contextBulk: `<button type="button" [brightrailMenuTrigger]="menu">Bulk actions</button>
<brightrail-menu #menu>
  <brightrail-menu-item label="Export CSV" />
  <brightrail-menu-item label="Add tag" />
  <brightrail-menu-item label="Delete selected" />
</brightrail-menu>`,

  contextDanger: `<button type="button" [brightrailMenuTrigger]="menu">Manage</button>
<brightrail-menu #menu>
  <brightrail-menu-item label="Edit details" />
  <brightrail-menu-item label="Deactivate" />
  <brightrail-menu-item label="Delete workspace" [disabled]="true" />
</brightrail-menu>`,

  layoutSplit: `<span class="mco-split">
  <button type="button" class="mco-split__primary">Save</button>
  <button type="button" [brightrailMenuTrigger]="menu" class="mco-split__menu" aria-label="More save options">▾</button>
</span>
<brightrail-menu #menu>
  <brightrail-menu-item label="Save and continue" />
  <brightrail-menu-item label="Save as draft" />
</brightrail-menu>`,

  layoutToolbar: `<span class="mco-toolbar">
  <button type="button" [brightrailMenuTrigger]="filterMenu">Filter</button>
  <button type="button" [brightrailMenuTrigger]="sortMenu">Sort</button>
</span>
<brightrail-menu #filterMenu>
  <brightrail-menu-item label="Active only" [selected]="true" />
  <brightrail-menu-item label="Archived" />
</brightrail-menu>
<brightrail-menu #sortMenu>
  <brightrail-menu-item label="Newest" [selected]="true" />
  <brightrail-menu-item label="Oldest" />
</brightrail-menu>`,

  advancedActivate: `<button type="button" [brightrailMenuTrigger]="menu">File</button>
<brightrail-menu #menu>
  <brightrail-menu-item label="Download" (activate)="onDownload()" />
  <brightrail-menu-item label="Print" (activate)="onPrint()" />
</brightrail-menu>`,

  futuristicGlass: `<div class="ff-future-shell ff-future-shell--glass">
  <button type="button" [brightrailMenuTrigger]="menu">Actions</button>
  <brightrail-menu #menu>
    <brightrail-menu-item label="Edit" />
    <brightrail-menu-item label="Duplicate" />
  </brightrail-menu>
</div>`,
  futuristicNeon: `<div class="ff-future-shell ff-future-shell--neon">
  <button type="button" [brightrailMenuTrigger]="menu" aria-label="More options">⋯</button>
  <brightrail-menu #menu>
    <brightrail-menu-item label="Open" />
    <brightrail-menu-item label="Assign" />
  </brightrail-menu>
</div>`,
  futuristicCyber: `<div class="ff-future-shell ff-future-shell--cyber">
  <button type="button" [brightrailMenuTrigger]="menu">Command</button>
  <brightrail-menu #menu>
    <brightrail-menu-item label="Deploy" />
    <brightrail-menu-item label="Rollback" />
  </brightrail-menu>
</div>`,
  futuristicHolo: `<div class="ff-future-shell ff-future-shell--holo">
  <button type="button" [brightrailMenuTrigger]="menu">View</button>
  <brightrail-menu #menu>
    <brightrail-menu-item label="Grid" [selected]="true" />
    <brightrail-menu-item label="Orbit" />
  </brightrail-menu>
</div>`,
} as const;

export const MENU_DOC_SECTION_COUNT = 7;

export const MENU_HTML_EXAMPLES = `<button type="button" [brightrailMenuTrigger]="menu">Actions</button>
<brightrail-menu #menu>
  <brightrail-menu-item label="Edit" (activate)="onEdit()" />
  <brightrail-menu-item label="Delete" [disabled]="isLocked" />
</brightrail-menu>

<!-- View switcher with selected state -->
<button type="button" [brightrailMenuTrigger]="viewMenu">View</button>
<brightrail-menu #viewMenu>
  <brightrail-menu-item label="List" [selected]="view === 'list'" />
  <brightrail-menu-item label="Board" [selected]="view === 'board'" />
</brightrail-menu>`;
