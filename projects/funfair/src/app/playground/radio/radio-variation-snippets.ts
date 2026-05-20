/** Copy-ready markup for radio catalog tiles (consumers import from `brightrail`). */
export const RADIO_VARIATION_SNIPPETS = {
  coreDefault: `<brightrail-radio name="demo" value="option" label="Option" />`,
  coreSelected: `<brightrail-radio name="demo" value="option" label="Option" [checked]="true" />`,
  coreDisabled: `<brightrail-radio name="demo" value="option" label="Option" state="disabled" />`,

  tonePrimary: `<brightrail-radio name="tone" value="primary" label="Primary" tone="primary" [checked]="true" />`,
  toneSuccess: `<brightrail-radio name="tone" value="success" label="Success" tone="success" [checked]="true" />`,
  toneWarning: `<brightrail-radio name="tone" value="warning" label="Warning" tone="warning" [checked]="true" />`,
  toneDanger: `<brightrail-radio name="tone" value="danger" label="Danger" tone="danger" [checked]="true" />`,
  toneNeutral: `<brightrail-radio name="tone" value="neutral" label="Neutral" tone="neutral" [checked]="true" />`,

  sizeSm: `<brightrail-radio name="size" value="sm" label="Small" size="sm" [checked]="true" />`,
  sizeMd: `<brightrail-radio name="size" value="md" label="Medium" size="md" [checked]="true" />`,
  sizeLg: `<brightrail-radio name="size" value="lg" label="Large" size="lg" [checked]="true" />`,

  stateDefault: `<brightrail-radio name="state" value="default" label="Default" />`,
  stateHover: `<brightrail-radio name="state" value="hover" label="Hover" state="hover" [checked]="true" />`,
  stateFocused: `<brightrail-radio name="state" value="focused" label="Focused" state="focused" [checked]="true" />`,
  stateDisabled: `<brightrail-radio name="state" value="disabled" label="Disabled" state="disabled" />`,
  stateInvalid: `<brightrail-radio
  name="state"
  value="invalid"
  label="Invalid"
  [invalid]="true"
  status="error"
/>`,

  groupVertical: `<brightrail-radio-group
  name="notification-preference"
  groupLabel="Notification preference"
  layout="vertical"
  [options]="options"
  [selectedId]="selectedId"
  (selectedIdChange)="selectedId = $event"
/>`,
  groupHorizontal: `<brightrail-radio-group
  name="plan-choice"
  layout="horizontal"
  [options]="options"
  [selectedId]="selectedId"
  (selectedIdChange)="selectedId = $event"
/>`,

  validationSingle: `<brightrail-radio
  name="consent"
  value="no"
  label="No"
  [invalid]="true"
  status="error"
  errorText="Please select an option."
  [checked]="true"
/>`,
  validationGroup: `<brightrail-radio-group
  name="approval"
  groupLabel="Approval choice"
  layout="vertical"
  [invalid]="true"
  errorText="Please select an option."
  [options]="options"
  [selectedId]="selectedId"
  (selectedIdChange)="selectedId = $event"
/>`,
} as const;

export const RADIO_DOC_SECTION_COUNT = 6;

export const RADIO_HTML_EXAMPLES = `<brightrail-radio
  name="notification-preference"
  value="email"
  label="Email notifications"
  groupLabel="Notification preference"
  size="md"
  [checked]="true"
/>

<brightrail-radio-group
  name="account-type"
  groupLabel="Account type"
  layout="vertical"
  [options]="accountOptions"
  [selectedId]="accountType"
  (selectedIdChange)="accountType = $event"
/>

<brightrail-radio-group
  name="approval"
  groupLabel="Approval choice"
  layout="vertical"
  [invalid]="true"
  errorText="Please select an option."
  [options]="approvalOptions"
  [selectedId]="approvalId"
  (selectedIdChange)="approvalId = $event"
/>`;
