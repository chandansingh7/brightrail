/** Copy-ready markup for form-field catalog tiles (consumers import from `brightrail`). */
export const FORM_FIELD_VARIATION_SNIPPETS = {
  coreLabelHint: `<brightrail-form-field label="Email" hint="We will never share your email.">
  <brightrail-text-field
    appearance="outlined"
    labelPosition="none"
    placeholder="you@example.com"
    [(ngModel)]="email"
  />
</brightrail-form-field>`,

  coreLabelOnly: `<brightrail-form-field label="Display name">
  <brightrail-text-field
    appearance="outlined"
    labelPosition="none"
    placeholder="Jane Doe"
    [(ngModel)]="displayName"
  />
</brightrail-form-field>`,

  coreHintOnly: `<brightrail-form-field hint="Optional — shown when the field is valid.">
  <brightrail-text-field
    appearance="outlined"
    labelPosition="none"
    placeholder="Reference code"
    [(ngModel)]="reference"
  />
</brightrail-form-field>`,

  requiredField: `<brightrail-form-field label="Workspace name" [required]="true">
  <brightrail-text-field
    appearance="outlined"
    labelPosition="none"
    placeholder="Acme Corp"
    [(ngModel)]="workspace"
  />
</brightrail-form-field>`,

  errorInvalid: `<brightrail-form-field
  label="Password"
  [required]="true"
  [invalid]="true"
  error="Password must be at least 8 characters."
>
  <brightrail-text-field
    appearance="outlined"
    labelPosition="none"
    inputType="password"
    placeholder="••••••••"
    [(ngModel)]="password"
  />
</brightrail-form-field>`,

  errorWithHint: `<brightrail-form-field
  label="API key"
  hint="Rotate keys from the admin console."
  [invalid]="showApiKeyError"
  error="API key is required."
>
  <brightrail-text-field
    appearance="outlined"
    labelPosition="none"
    placeholder="sk_live_…"
    [(ngModel)]="apiKey"
  />
</brightrail-form-field>`,

  withTextField: `<brightrail-form-field label="Company" hint="Legal entity name on invoices.">
  <brightrail-text-field
    appearance="filled"
    labelPosition="none"
    placeholder="Brightrail Inc."
    [(ngModel)]="company"
  />
</brightrail-form-field>`,

  withTextFieldOutlined: `<brightrail-form-field label="Job title">
  <brightrail-text-field
    appearance="outlined"
    labelPosition="none"
    placeholder="Product designer"
    [(ngModel)]="title"
  />
</brightrail-form-field>`,

  withSwitch: `<brightrail-form-field
  label="Email notifications"
  hint="Receive product updates and security alerts."
>
  <brightrail-switch label="Enable notifications" [(ngModel)]="notificationsOn" />
</brightrail-form-field>`,

  withSwitchRequired: `<brightrail-form-field
  label="Terms of service"
  [required]="true"
  [invalid]="!acceptedTerms"
  error="You must accept the terms to continue."
>
  <brightrail-switch label="I accept the terms" [(ngModel)]="acceptedTerms" />
</brightrail-form-field>`,

  layoutStack: `<div class="ffco-stack">
  <brightrail-form-field label="First name" [required]="true">
    <brightrail-text-field appearance="outlined" labelPosition="none" [(ngModel)]="firstName" />
  </brightrail-form-field>
  <brightrail-form-field label="Last name" [required]="true">
    <brightrail-text-field appearance="outlined" labelPosition="none" [(ngModel)]="lastName" />
  </brightrail-form-field>
</div>`,

  layoutSettings: `<brightrail-form-field label="Public profile" hint="Visible to anyone with the link.">
  <brightrail-switch label="Make profile public" [(ngModel)]="isPublic" />
</brightrail-form-field>`,

  futuristicGlass: `<div class="ff-future-shell ff-future-shell--glass">
  <brightrail-form-field label="Access token" hint="Scoped to read-only operations.">
    <brightrail-text-field
      appearance="outlined"
      labelPosition="none"
      placeholder="br_live_…"
      [(ngModel)]="apiKey"
    />
  </brightrail-form-field>
</div>`,
  futuristicNeon: `<div class="ff-future-shell ff-future-shell--neon">
  <brightrail-form-field label="Node alias" [required]="true">
    <brightrail-text-field
      appearance="outlined"
      labelPosition="none"
      placeholder="alpha-01"
      [(ngModel)]="displayName"
    />
  </brightrail-form-field>
</div>`,
  futuristicCyber: `<div class="ff-future-shell ff-future-shell--cyber">
  <brightrail-form-field label="Encryption key" hint="Rotates every 24 hours.">
    <brightrail-text-field
      appearance="outlined"
      labelPosition="none"
      inputType="password"
      placeholder="••••••••"
      [(ngModel)]="password"
    />
  </brightrail-form-field>
</div>`,
  futuristicHolo: `<div class="ff-future-shell ff-future-shell--holo">
  <brightrail-form-field label="Telemetry stream" hint="Enable real-time metrics.">
    <brightrail-switch label="Stream active" [(ngModel)]="notificationsOn" />
  </brightrail-form-field>
</div>`,
} as const;

export const FORM_FIELD_DOC_SECTION_COUNT = 7;

export const FORM_FIELD_HTML_EXAMPLES = `<brightrail-form-field label="Email" hint="Work email for invites." [required]="true">
  <brightrail-text-field
    appearance="outlined"
    labelPosition="none"
    placeholder="you@company.com"
    [(ngModel)]="email"
  />
</brightrail-form-field>

<brightrail-form-field
  label="Password"
  [invalid]="passwordInvalid"
  error="Password must be at least 8 characters."
>
  <brightrail-text-field
    appearance="outlined"
    labelPosition="none"
    inputType="password"
    [(ngModel)]="password"
  />
</brightrail-form-field>

<brightrail-form-field label="Notifications" hint="Control alert channels.">
  <brightrail-switch label="Email me updates" [(ngModel)]="notify" />
</brightrail-form-field>`;
