/** Copy-ready markup for empty-state catalog tiles (consumers import from `brightrail`). */
export const EMPTY_STATE_VARIATION_SNIPPETS = {
  coreDefault: `<brightrail-empty-state
  title="No results found"
  description="Try adjusting your filters or search terms."
/>`,
  coreCompact: `<brightrail-empty-state
  title="No items"
  description="Add your first record to get started."
  [compact]="true"
/>`,

  compactDense: `<brightrail-empty-state
  title="Inbox zero"
  description="You are all caught up."
  [compact]="true"
/>`,
  compactTable: `<brightrail-empty-state
  title="No rows"
  description="Import a CSV or create a row manually."
  [compact]="true"
/>`,

  iconSearch: `<brightrail-empty-state title="No matches" description="We could not find anything for that query.">
  <span brightrailEmptyStateIcon aria-hidden="true">
    <svg viewBox="0 0 24 24" width="1.5rem" height="1.5rem" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20 L16 16" />
    </svg>
  </span>
</brightrail-empty-state>`,
  iconInbox: `<brightrail-empty-state title="Inbox empty" description="New messages will appear here.">
  <span brightrailEmptyStateIcon aria-hidden="true">📭</span>
</brightrail-empty-state>`,

  actionPrimary: `<brightrail-empty-state title="No projects yet" description="Create a workspace to collaborate with your team.">
  <brightrail-button brightrailEmptyStateAction variant="primary">Create project</brightrail-button>
</brightrail-empty-state>`,
  actionSecondary: `<brightrail-empty-state title="No files" description="Upload documents to share with reviewers.">
  <brightrail-button brightrailEmptyStateAction variant="outline">Upload file</brightrail-button>
</brightrail-empty-state>`,

  fullSearch: `<brightrail-empty-state title="No results found" description="Try different keywords or clear filters.">
  <span brightrailEmptyStateIcon aria-hidden="true">🔍</span>
  <brightrail-button brightrailEmptyStateAction variant="primary">Clear filters</brightrail-button>
</brightrail-empty-state>`,
  fullError: `<brightrail-empty-state title="Something went wrong" description="We could not load this view. Please try again.">
  <span brightrailEmptyStateIcon aria-hidden="true">⚠️</span>
  <brightrail-button brightrailEmptyStateAction variant="secondary">Retry</brightrail-button>
</brightrail-empty-state>`,

  advancedPermissions: `<brightrail-empty-state
  title="No access"
  description="Ask an administrator to grant you permission for this resource."
  [compact]="true"
>
  <span brightrailEmptyStateIcon aria-hidden="true">🔒</span>
  <brightrail-button brightrailEmptyStateAction variant="link">Request access</brightrail-button>
</brightrail-empty-state>`,
  advancedOnboarding: `<brightrail-empty-state title="Welcome" description="Complete setup to unlock dashboards and reports.">
  <span brightrailEmptyStateIcon aria-hidden="true">✨</span>
  <div brightrailEmptyStateAction class="es-actions">
    <brightrail-button variant="primary">Get started</brightrail-button>
    <brightrail-button variant="ghost">View guide</brightrail-button>
  </div>
</brightrail-empty-state>`,
} as const;

export const EMPTY_STATE_DOC_SECTION_COUNT = 6;

export const EMPTY_STATE_HTML_EXAMPLES = `<brightrail-empty-state
  title="No results found"
  description="Try adjusting your filters or search terms."
/>

<brightrail-empty-state title="No projects yet" description="Create a workspace to collaborate.">
  <span brightrailEmptyStateIcon aria-hidden="true">📭</span>
  <brightrail-button brightrailEmptyStateAction variant="primary">Create project</brightrail-button>
</brightrail-empty-state>`;
