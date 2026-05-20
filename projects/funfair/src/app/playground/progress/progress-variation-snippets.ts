/** Copy-ready markup for progress catalog tiles (consumers import from `brightrail`). */
export const PROGRESS_VARIATION_SNIPPETS = {
  linearDefault: `<brightrail-progress type="linear" [value]="72" label="Default" [showPercentage]="true" />`,
  linearSuccess: `<brightrail-progress type="linear" [value]="100" label="Success" statusColor="success" [showPercentage]="true" />`,
  linearWarning: `<brightrail-progress type="linear" [value]="45" label="Warning" statusColor="warning" [showPercentage]="true" />`,
  linearDanger: `<brightrail-progress type="linear" [value]="28" label="Danger" statusColor="danger" [showPercentage]="true" />`,
  ringSm: `<brightrail-progress type="circular" size="sm" [value]="48" [showLabel]="false" />`,
  ringMd: `<brightrail-progress type="circular" size="md" [value]="75" [showLabel]="false" />`,
  ringLgComplete: `<brightrail-progress type="circular" size="lg" [value]="92" [showRingCompleteIcon]="true" [showLabel]="false" />`,
  indeterminate: `<brightrail-progress type="linear" [indeterminate]="true" label="Indeterminate" [showPercentage]="false" />`,
  buffered: `<brightrail-progress type="linear" [buffer]="true" [value]="64" [bufferValue]="85" label="Buffered" [showPercentage]="true" />`,
  queryMode: `<brightrail-progress type="linear" mode="query" [value]="50" label="Query buffering" [showPercentage]="false" />`,
  milestoneStepper: `<brightrail-stepper [activeStep]="2" preset="milestone" ariaLabel="Milestones">
  <brightrail-step caption="Complete" />
  <brightrail-step caption="Complete" />
  <brightrail-step caption="60%" />
  <brightrail-step caption="Pending" />
  <brightrail-step caption="Pending" />
</brightrail-stepper>`,
  workflowStepper: `<brightrail-stepper [activeStep]="2" preset="workflow" ariaLabel="Onboarding">
  <brightrail-step label="Account Created" />
  <brightrail-step label="Profile Setup" />
  <brightrail-step label="Verify Email" />
  <brightrail-step label="Payment Details" />
  <brightrail-step label="Complete" />
</brightrail-stepper>`,
  fileComplete: `<brightrail-progress-file-row fileName="Project_Proposal.pdf" fileSizeLabel="2.4 MB" [value]="100" state="complete">
  <span class="br-file-icon-slot">📄</span>
  <span class="br-file-status-slot" aria-label="Done">✓</span>
</brightrail-progress-file-row>`,
  fileActive: `<brightrail-progress-file-row fileName="Budget_2024.xlsx" fileSizeLabel="1.2 MB" [value]="78" state="active">
  <span class="br-file-icon-slot">📊</span>
</brightrail-progress-file-row>`,
  filePaused: `<brightrail-progress-file-row fileName="Dashboard.png" fileSizeLabel="3.1 MB" [value]="45" state="paused">
  <span class="br-file-icon-slot">🖼</span>
  <span class="br-file-status-slot">⏸</span>
</brightrail-progress-file-row>`,
  fileQueued: `<brightrail-progress-file-row fileName="data_export.csv" fileSizeLabel="650 KB" [value]="0" state="queued">
  <span class="br-file-icon-slot">📑</span>
  <span class="br-file-status-slot">⏱</span>
</brightrail-progress-file-row>`,
  tableRowComplete: `<!-- Table cell -->
<brightrail-progress type="linear" [value]="100" statusColor="success" [showLabel]="false" [showPercentage]="false" size="sm" />`,
  tableRowInProgress: `<brightrail-progress type="linear" [value]="75" [showLabel]="false" [showPercentage]="false" size="sm" />`,
  kpiRevenue: `<brightrail-progress type="circular" size="sm" kpiTitle="Revenue" [value]="82" detailText="$820K / $1M" kpiStatus="On track" [showLabel]="false" />`,
  kpiUtilization: `<brightrail-progress type="circular" size="sm" kpiTitle="Utilization" [value]="64" kpiStatus="Good" [showLabel]="false" />`,
  kpiSla: `<brightrail-progress type="circular" size="sm" kpiTitle="SLA" [value]="91" statusColor="success" kpiStatus="Excellent" [showLabel]="false" />`,
  kpiNps: `<brightrail-progress type="circular" size="sm" kpiTitle="NPS" [value]="68" statusColor="warning" kpiStatus="Improving" [showLabel]="false" />`,
  futuristicGlowRing: `<brightrail-progress
  type="circular"
  variant="futuristic"
  surface="dark"
  trackStyle="glow"
  canvasBackground="rgba(24, 28, 40, 0.55)"
  [value]="78"
  label="Loading…"
  [showPercentage]="true"
/>`,
  futuristicGlassLinear: `<brightrail-progress type="linear" variant="glass" surface="dark" [value]="65" label="Processing…" [showPercentage]="false" />`,
  futuristicNeonArc: `<brightrail-progress type="circular" variant="neon-arc" surface="dark" trackStyle="glow" [value]="60" label="Syncing data" />`,
  futuristicCompactCard: `<brightrail-progress variant="compact-card" [value]="60" label="Upload speed 1.2 GB / 2 GB" etaText="ETA 00:16" surface="dark" />`,
} as const;

export const PROGRESS_DOC_SECTION_COUNT = 9;

export const PROGRESS_HTML_EXAMPLES = `<brightrail-progress type="linear" [value]="72" label="Uploading…" [showPercentage]="true" />

<brightrail-progress-file-row fileName="report.pdf" fileSizeLabel="2.4 MB" [value]="78" state="active">
  <span class="br-file-icon-slot">📄</span>
</brightrail-progress-file-row>

<brightrail-progress type="circular" size="sm" kpiTitle="Revenue" [value]="82" kpiStatus="On track" [showLabel]="false" />`;
