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

  futuristicGlass: `<div class="ff-future-shell ff-future-shell--glass">
  <brightrail-timeline ariaLabel="Deployment pipeline">
    <brightrail-timeline-item title="Build" description="CI #4821" status="completed" />
    <brightrail-timeline-item title="Test" description="Running suites" status="current" />
    <brightrail-timeline-item title="Deploy" status="pending" />
  </brightrail-timeline>
</div>`,
  futuristicNeon: `<div class="ff-future-shell ff-future-shell--neon">
  <brightrail-timeline ariaLabel="Sync status">
    <brightrail-timeline-item title="Uplink" description="Connected" status="completed" />
    <brightrail-timeline-item title="Streaming" description="1.2 GB/s" status="current" />
  </brightrail-timeline>
</div>`,
  futuristicCyber: `<div class="ff-future-shell ff-future-shell--cyber">
  <brightrail-timeline ariaLabel="Security scan">
    <brightrail-timeline-item title="Perimeter" status="completed" />
    <brightrail-timeline-item title="Threat detected" status="error" />
    <brightrail-timeline-item title="Quarantine" status="current" />
  </brightrail-timeline>
</div>`,
  futuristicHolo: `<div class="ff-future-shell ff-future-shell--holo">
  <brightrail-timeline ariaLabel="Mission phases">
    <brightrail-timeline-item title="Launch" status="completed" />
    <brightrail-timeline-item title="Orbit" status="current" />
    <brightrail-timeline-item title="Dock" status="pending" />
  </brightrail-timeline>
</div>`,
} as const;

export const TIMELINE_DOC_SECTION_COUNT = 7;

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
