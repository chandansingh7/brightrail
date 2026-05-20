/** Copy-ready markup for text field catalog tiles (consumers import from `brightrail`). */
export const TEXT_FIELD_VARIATION_SNIPPETS = {
  appearanceFilled: `<brightrail-text-field
  appearance="filled"
  label="Label"
  placeholder="Placeholder"
  [(ngModel)]="value"
/>`,
  appearanceOutlined: `<brightrail-text-field
  appearance="outlined"
  label="Label"
  placeholder="Placeholder"
  [(ngModel)]="value"
/>`,
  appearanceUnderline: `<brightrail-text-field
  appearance="underline"
  label="Label"
  placeholder="Placeholder"
  [(ngModel)]="value"
/>`,

  labelTop: `<brightrail-text-field
  appearance="outlined"
  labelPosition="top"
  label="Email"
  placeholder="you@company.com"
  [(ngModel)]="email"
/>`,
  labelInset: `<brightrail-text-field
  appearance="outlined"
  labelPosition="inset"
  label="Project name"
  placeholder=" "
  [(ngModel)]="projectName"
/>`,
  labelLeft: `<brightrail-text-field
  appearance="outlined"
  labelPosition="left"
  label="Amount"
  suffix="USD"
  suffixPosition="right"
  [(ngModel)]="amount"
/>`,
  labelRight: `<brightrail-text-field
  appearance="outlined"
  labelPosition="right"
  label="Notes"
  [(ngModel)]="notes"
/>`,
  labelNone: `<brightrail-text-field
  appearance="outlined"
  labelPosition="none"
  placeholder="Search…"
  iconLeft="search"
  [(ngModel)]="query"
/>`,

  sizeXs: `<brightrail-text-field appearance="outlined" size="xs" label="Extra small" [(ngModel)]="value" />`,
  sizeSm: `<brightrail-text-field appearance="outlined" size="sm" label="Small" [(ngModel)]="value" />`,
  sizeMd: `<brightrail-text-field appearance="outlined" size="md" label="Medium" [(ngModel)]="value" />`,
  sizeLg: `<brightrail-text-field appearance="outlined" size="lg" label="Large" [(ngModel)]="value" />`,
  sizeXl: `<brightrail-text-field appearance="outlined" size="xl" label="Extra large" [(ngModel)]="value" />`,

  statusSuccess: `<brightrail-text-field
  appearance="outlined"
  label="Username"
  status="success"
  hint="Available"
  [(ngModel)]="username"
/>`,
  statusWarning: `<brightrail-text-field
  appearance="outlined"
  label="Phone"
  status="warning"
  [(ngModel)]="phone"
/>`,
  statusError: `<brightrail-text-field
  appearance="outlined"
  label="Email"
  status="error"
  [(ngModel)]="email"
/>`,
  statusInfo: `<brightrail-text-field
  appearance="outlined"
  label="Reference"
  status="info"
  [(ngModel)]="reference"
/>`,
  statusDisabled: `<brightrail-text-field
  appearance="outlined"
  label="Account ID"
  [disabled]="true"
  [(ngModel)]="accountId"
/>`,

  shapeDefault: `<brightrail-text-field appearance="outlined" shape="default" label="Rounded" [(ngModel)]="value" />`,
  shapeSquare: `<brightrail-text-field appearance="outlined" shape="square" label="Square" [(ngModel)]="value" />`,
  shapePill: `<brightrail-text-field appearance="outlined" shape="pill" label="Pill" [(ngModel)]="value" />`,

  clearable: `<brightrail-text-field
  appearance="outlined"
  label="Search"
  iconLeft="search"
  [clearable]="true"
  [(ngModel)]="query"
/>`,
  password: `<brightrail-text-field
  appearance="outlined"
  label="Password"
  inputType="password"
  [showPasswordToggle]="true"
  [(ngModel)]="password"
/>`,
  iconLeft: `<brightrail-text-field
  appearance="outlined"
  label="Email"
  iconLeft="user"
  [(ngModel)]="email"
/>`,
  iconRight: `<brightrail-text-field
  appearance="outlined"
  label="Website"
  iconRight="info"
  [(ngModel)]="website"
/>`,
  iconsBoth: `<brightrail-text-field
  appearance="outlined"
  label="Amount"
  iconLeft="filter"
  suffix="kg"
  suffixPosition="right"
  [(ngModel)]="weight"
/>`,
} as const;

export const TEXT_FIELD_DOC_SECTION_COUNT = 6;

export const TEXT_FIELD_HTML_EXAMPLES = `<brightrail-text-field
  appearance="outlined"
  labelPosition="top"
  label="Work email"
  placeholder="you@company.com"
  status="success"
  hint="Looks good"
  iconLeft="user"
  [(ngModel)]="email"
/>

<brightrail-text-field
  appearance="filled"
  label="Password"
  inputType="password"
  [showPasswordToggle]="true"
  [clearable]="true"
  [(ngModel)]="password"
/>

<brightrail-text-field
  appearance="underline"
  labelPosition="inset"
  label="Project name"
  shape="pill"
  size="lg"
  [(ngModel)]="projectName"
/>`;
