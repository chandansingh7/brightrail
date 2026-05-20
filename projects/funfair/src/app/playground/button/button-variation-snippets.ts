/** Copy-ready markup for button catalog tiles (consumers import from `brightrail`). */
export const BUTTON_VARIATION_SNIPPETS = {
  corePrimary: `<brightrail-button variant="primary" size="md">Save changes</brightrail-button>`,
  coreSecondary: `<brightrail-button variant="secondary" size="md">Cancel</brightrail-button>`,
  coreOutline: `<brightrail-button variant="outline" size="md">Learn more</brightrail-button>`,
  coreGhost: `<brightrail-button variant="ghost" size="md">Skip</brightrail-button>`,
  coreLink: `<brightrail-button variant="link" size="md">View details</brightrail-button>`,

  semanticSuccess: `<brightrail-button variant="success" size="md">Approve</brightrail-button>`,
  semanticWarning: `<brightrail-button variant="warning" size="md">Review</brightrail-button>`,
  semanticDanger: `<brightrail-button variant="danger" size="md">Delete</brightrail-button>`,
  semanticInfo: `<brightrail-button variant="info" size="md">Info</brightrail-button>`,
  semanticApprove: `<brightrail-button variant="approve" size="md">Confirm</brightrail-button>`,
  semanticReject: `<brightrail-button variant="reject" size="md">Reject</brightrail-button>`,

  sizeXs: `<brightrail-button variant="primary" size="xs">Extra small</brightrail-button>`,
  sizeSm: `<brightrail-button variant="primary" size="sm">Small</brightrail-button>`,
  sizeMd: `<brightrail-button variant="primary" size="md">Medium</brightrail-button>`,
  sizeLg: `<brightrail-button variant="primary" size="lg">Large</brightrail-button>`,
  sizeXl: `<brightrail-button variant="primary" size="xl">Extra large</brightrail-button>`,

  shapeDefault: `<brightrail-button variant="primary" shape="default">Default</brightrail-button>`,
  shapePill: `<brightrail-button variant="primary" shape="pill">Pill</brightrail-button>`,
  shapeIcon: `<brightrail-button variant="primary" shape="icon" iconLeft="plus" ariaLabel="Add" />`,
  shapeCircle: `<brightrail-button variant="primary" shape="circle" iconLeft="plus" ariaLabel="Create" />`,

  iconLeft: `<brightrail-button variant="primary" iconLeft="download">Download</brightrail-button>`,
  iconRight: `<brightrail-button variant="primary" iconRight="chevron-right">Next</brightrail-button>`,
  iconDropdown: `<brightrail-button variant="primary" [dropdownIndicator]="true">Options</brightrail-button>`,

  stateLoading: `<brightrail-button variant="primary" [loading]="true">Saving…</brightrail-button>`,
  stateDisabled: `<brightrail-button variant="primary" [disabled]="true">Disabled</brightrail-button>`,
  stateFullWidth: `<brightrail-button variant="primary" [fullWidth]="true">Continue</brightrail-button>`,

  futuristicNeon: `<div class="ff-future-shell ff-future-shell--neon">
  <brightrail-button variant="primary" shape="pill" iconLeft="plus">Launch mission</brightrail-button>
</div>`,

  futuristicGlass: `<div class="ff-future-shell ff-future-shell--glass">
  <brightrail-button variant="ghost" shape="pill">Glass pill</brightrail-button>
</div>`,

  futuristicGradient: `<div class="ff-future-shell ff-future-shell--gradient">
  <brightrail-button variant="secondary">Deploy fleet</brightrail-button>
</div>`,

  futuristicCyber: `<div class="ff-future-cyber-frame">
  <span class="ff-future-cyber-corner ff-future-cyber-corner--tl" aria-hidden="true"></span>
  <span class="ff-future-cyber-corner ff-future-cyber-corner--tr" aria-hidden="true"></span>
  <span class="ff-future-cyber-corner ff-future-cyber-corner--bl" aria-hidden="true"></span>
  <span class="ff-future-cyber-corner ff-future-cyber-corner--br" aria-hidden="true"></span>
  <brightrail-button variant="outline">Authorize</brightrail-button>
</div>`,
} as const;

export const BUTTON_DOC_SECTION_COUNT = 7;

export const BUTTON_HTML_EXAMPLES = `<brightrail-button variant="primary" size="md" iconLeft="check">
  Save changes
</brightrail-button>

<brightrail-button variant="outline" size="sm" iconRight="chevron-down" [dropdownIndicator]="true">
  Export
</brightrail-button>

<brightrail-button variant="danger" shape="pill" [loading]="isDeleting">
  Delete project
</brightrail-button>`;
