/** Copy-ready markup for checkbox catalog tiles (consumers import from `brightrail`). */
export const CHECKBOX_VARIATION_SNIPPETS = {
  coreUnchecked: `<brightrail-checkbox label="Option label" />`,
  coreChecked: `<brightrail-checkbox label="Option label" [checked]="true" />`,
  coreIndeterminate: `<brightrail-checkbox label="Option label" [indeterminate]="true" />`,
  coreWithHelper: `<brightrail-checkbox
  label="Option label"
  helperText="Optional helper text"
/>`,

  tonePrimary: `<brightrail-checkbox label="Primary" tone="primary" [checked]="true" />`,
  toneSuccess: `<brightrail-checkbox label="Success" tone="success" [checked]="true" />`,
  toneWarning: `<brightrail-checkbox label="Warning" tone="warning" [checked]="true" />`,
  toneDanger: `<brightrail-checkbox label="Danger" tone="danger" [checked]="true" />`,
  toneNeutral: `<brightrail-checkbox label="Neutral" tone="neutral" [checked]="true" />`,

  variantDefault: `<brightrail-checkbox label="Default" variant="default" [checked]="true" />`,
  variantOutlined: `<brightrail-checkbox label="Outlined" variant="outlined" [checked]="true" />`,
  variantFilled: `<brightrail-checkbox label="Filled" variant="filled" [checked]="true" />`,

  sizeSm: `<brightrail-checkbox label="Small" size="sm" [checked]="true" />`,
  sizeMd: `<brightrail-checkbox label="Medium" size="md" [checked]="true" />`,
  sizeLg: `<brightrail-checkbox label="Large" size="lg" [checked]="true" />`,

  stateChecked: `<brightrail-checkbox label="Checked" [checked]="true" />`,
  stateIndeterminate: `<brightrail-checkbox label="Indeterminate" [indeterminate]="true" />`,
  stateDisabled: `<brightrail-checkbox label="Disabled" state="disabled" [checked]="true" />`,
  stateInvalid: `<brightrail-checkbox
  label="I agree to the terms"
  [invalid]="true"
  status="error"
  errorText="This field is required"
/>`,

  groupVertical: `<brightrail-checkbox-group
  layout="vertical"
  [options]="options"
  [selectedIds]="selectedIds"
  (selectedIdsChange)="selectedIds = $event"
/>`,
  groupHorizontal: `<brightrail-checkbox-group
  layout="horizontal"
  [options]="options"
  [selectedIds]="selectedIds"
  (selectedIdsChange)="selectedIds = $event"
/>`,
  groupSelectAll: `<brightrail-checkbox-group
  [showSelectAll]="true"
  selectAllLabel="Select all items"
  [options]="options"
  [selectedIds]="selectedIds"
  (selectedIdsChange)="selectedIds = $event"
/>`,
} as const;

export const CHECKBOX_DOC_SECTION_COUNT = 6;

export const CHECKBOX_HTML_EXAMPLES = `<brightrail-checkbox
  label="Receive notifications"
  helperText="Optional helper text"
  variant="default"
  size="md"
  [checked]="true"
/>

<brightrail-checkbox-group
  layout="vertical"
  [options]="notificationOptions"
  [selectedIds]="selectedIds"
  (selectedIdsChange)="onSelectionChange($event)"
/>

<brightrail-checkbox
  label="I agree to the privacy policy"
  [invalid]="true"
  status="error"
  errorText="This field is required"
/>`;
