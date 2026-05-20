/** Copy-ready markup for timeline catalog tiles (import from `brightrail`). */
export const TIMELINE_VARIATION_SNIPPETS = {
  coreWorkflow: `<brightrail-timeline ariaLabel="Deployment progress">
  <brightrail-timeline-item
    title="Build started"
    description="CI pipeline #4821"
    status="completed"
  />
  <brightrail-timeline-item
    title="Running tests"
    description="Unit and integration suites"
    status="current"
  />
  <brightrail-timeline-item
    title="Deploy to production"
    status="pending"
  />
</brightrail-timeline>`,

  statusCompleted: `<brightrail-timeline-item
  title="Payment received"
  description="Invoice #1042"
  status="completed"
/>`,

  statusCurrent: `<brightrail-timeline-item
  title="Under review"
  description="Compliance team"
  status="current"
/>`,

  statusError: `<brightrail-timeline-item
  title="Upload failed"
  description="Retry or contact support"
  status="error"
/>`,

  auditTrail: `<brightrail-timeline ariaLabel="Audit trail">
  <brightrail-timeline-item title="Created" description="Jan 4, 2026" status="completed" />
  <brightrail-timeline-item title="Approved" description="Jan 5, 2026" status="completed" />
  <brightrail-timeline-item title="Published" description="Pending release" status="current" />
</brightrail-timeline>`,

  minimalSingle: `<brightrail-timeline>
  <brightrail-timeline-item title="Account created" status="completed" />
</brightrail-timeline>`,

  mixedStatuses: `<brightrail-timeline>
  <brightrail-timeline-item title="Submitted" status="completed" />
  <brightrail-timeline-item title="Validation error" status="error" />
  <brightrail-timeline-item title="Resubmit" status="pending" />
</brightrail-timeline>`,
} as const;

export const TIMELINE_DOC_SECTION_COUNT = 6;

export const TIMELINE_HTML_EXAMPLES = `<brightrail-timeline ariaLabel="Order status">
  <brightrail-timeline-item
    title="Order placed"
    description="Confirmation sent"
    status="completed"
  />
  <brightrail-timeline-item
    title="Shipped"
    status="current"
  />
  <brightrail-timeline-item
    title="Delivered"
    status="pending"
  />
</brightrail-timeline>`;
