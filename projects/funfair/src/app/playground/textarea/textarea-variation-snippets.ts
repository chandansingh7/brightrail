/** Copy-ready markup for textarea catalog tiles (consumers import from `brightrail`). */
export const TEXTAREA_VARIATION_SNIPPETS = {
  appearanceFilled: `<brightrail-textarea
  appearance="filled"
  label="Description"
  placeholder="Enter details…"
  [(ngModel)]="description"
/>`,
  appearanceOutlined: `<brightrail-textarea
  appearance="outlined"
  label="Description"
  placeholder="Enter details…"
  [(ngModel)]="description"
/>`,
  appearanceUnderline: `<brightrail-textarea
  appearance="underline"
  label="Notes"
  placeholder="Add notes…"
  [(ngModel)]="notes"
/>`,
  appearanceGhost: `<brightrail-textarea
  appearance="ghost"
  label="Comments"
  placeholder="Optional comments…"
  [(ngModel)]="comments"
/>`,
  appearanceReadonly: `<brightrail-textarea
  appearance="readonly"
  label="Terms"
  [rows]="3"
  [(ngModel)]="termsText"
/>`,

  labelWithHelper: `<brightrail-textarea
  appearance="outlined"
  label="Bio"
  helperText="Brief summary shown on your profile."
  [rows]="4"
  [(ngModel)]="bio"
/>`,
  labelRequired: `<brightrail-textarea
  appearance="outlined"
  label="Feedback"
  [required]="true"
  [rows]="4"
  [(ngModel)]="feedback"
/>`,
  labelCompact: `<brightrail-textarea
  appearance="outlined"
  label="Short note"
  [rows]="2"
  placeholder="Quick note…"
  [(ngModel)]="shortNote"
/>`,
  labelNoLabel: `<brightrail-textarea
  appearance="outlined"
  placeholder="Write a message…"
  [rows]="4"
  [(ngModel)]="message"
/>`,

  sizeXs: `<brightrail-textarea appearance="outlined" size="xs" label="Extra small" [rows]="3" [(ngModel)]="value" />`,
  sizeSm: `<brightrail-textarea appearance="outlined" size="sm" label="Small" [rows]="3" [(ngModel)]="value" />`,
  sizeMd: `<brightrail-textarea appearance="outlined" size="md" label="Medium" [rows]="4" [(ngModel)]="value" />`,
  sizeLg: `<brightrail-textarea appearance="outlined" size="lg" label="Large" [rows]="4" [(ngModel)]="value" />`,
  sizeXl: `<brightrail-textarea appearance="outlined" size="xl" label="Extra large" [rows]="5" [(ngModel)]="value" />`,

  statusSuccess: `<brightrail-textarea
  appearance="outlined"
  label="Summary"
  status="success"
  helperText="Looks good!"
  [(ngModel)]="summary"
/>`,
  statusWarning: `<brightrail-textarea
  appearance="outlined"
  label="Address"
  status="warning"
  [(ngModel)]="address"
/>`,
  statusError: `<brightrail-textarea
  appearance="outlined"
  label="Reason"
  status="error"
  helperText="This field is required."
  [(ngModel)]="reason"
/>`,
  statusInfo: `<brightrail-textarea
  appearance="outlined"
  label="Instructions"
  status="info"
  [(ngModel)]="instructions"
/>`,
  statusDisabled: `<brightrail-textarea
  appearance="outlined"
  label="Locked field"
  [disabled]="true"
  [(ngModel)]="lockedValue"
/>`,

  resizeNone: `<brightrail-textarea
  appearance="outlined"
  label="Fixed height"
  resize="none"
  [rows]="4"
  [(ngModel)]="fixedText"
/>`,
  resizeVertical: `<brightrail-textarea
  appearance="outlined"
  label="Vertical resize"
  resize="vertical"
  [rows]="4"
  [(ngModel)]="verticalText"
/>`,
  resizeHorizontal: `<brightrail-textarea
  appearance="outlined"
  label="Horizontal resize"
  resize="horizontal"
  [rows]="3"
  [(ngModel)]="horizontalText"
/>`,
  resizeBoth: `<brightrail-textarea
  appearance="outlined"
  label="Both axes"
  resize="both"
  [rows]="3"
  [(ngModel)]="bothText"
/>`,

  formFullWidth: `<brightrail-textarea
  appearance="outlined"
  label="Project description"
  [fullWidth]="true"
  [rows]="5"
  [(ngModel)]="projectDescription"
/>`,
  formLoading: `<brightrail-textarea
  appearance="outlined"
  label="Draft"
  [loading]="true"
  [rows]="4"
  [(ngModel)]="draft"
/>`,
  formReactive: `<brightrail-textarea
  appearance="outlined"
  label="Comments"
  [rows]="4"
  [formControl]="commentsControl"
/>`,
} as const;

export const TEXTAREA_DOC_SECTION_COUNT = 6;

export const TEXTAREA_HTML_EXAMPLES = `<brightrail-textarea
  appearance="outlined"
  label="Project description"
  placeholder="Describe your project…"
  [rows]="4"
  status="success"
  helperText="Looks good!"
  [(ngModel)]="description"
/>

<brightrail-textarea
  appearance="filled"
  label="Feedback"
  [required]="true"
  status="error"
  helperText="This field is required."
  [fullWidth]="true"
  [(ngModel)]="feedback"
/>

<brightrail-textarea
  appearance="readonly"
  label="Terms and conditions"
  [rows]="3"
  resize="none"
  [(ngModel)]="termsText"
/>`;
