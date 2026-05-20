/** Copy-ready markup for switch catalog tiles (consumers import from `brightrail`). */
export const SWITCH_VARIATION_SNIPPETS = {
  coreUnchecked: `<brightrail-switch label="Enable notifications" />`,
  coreChecked: `<brightrail-switch label="Enable notifications" [checked]="true" />`,
  coreNoLabel: `<brightrail-switch ariaLabel="Toggle feature" [checked]="true" />`,
  coreDisabled: `<brightrail-switch label="Disabled switch" [disabled]="true" [checked]="true" />`,

  tonePrimary: `<brightrail-switch label="Primary" tone="primary" [checked]="true" />`,
  toneSuccess: `<brightrail-switch label="Success" tone="success" [checked]="true" />`,
  toneWarning: `<brightrail-switch label="Warning" tone="warning" [checked]="true" />`,
  toneDanger: `<brightrail-switch label="Danger" tone="danger" [checked]="true" />`,
  toneNeutral: `<brightrail-switch label="Neutral" tone="neutral" [checked]="true" />`,

  sizeSm: `<brightrail-switch label="Small" size="sm" [checked]="true" />`,
  sizeMd: `<brightrail-switch label="Medium" size="md" [checked]="true" />`,
  sizeLg: `<brightrail-switch label="Large" size="lg" [checked]="true" />`,

  stateOff: `<brightrail-switch label="Off" />`,
  stateOn: `<brightrail-switch label="On" [checked]="true" />`,
  stateDisabledOff: `<brightrail-switch label="Disabled off" [disabled]="true" />`,
  stateDisabledOn: `<brightrail-switch label="Disabled on" [disabled]="true" [checked]="true" />`,

  settingsNotifications: `<brightrail-switch
  label="Email notifications"
  tone="primary"
  [checked]="emailEnabled"
  (checkedChange)="onEmailToggle($event)"
/>`,
  settingsDarkMode: `<brightrail-switch
  label="Dark mode"
  tone="neutral"
  [checked]="darkMode"
  (checkedChange)="onDarkModeToggle($event)"
/>`,
  settingsAutoSave: `<brightrail-switch
  label="Auto-save drafts"
  tone="success"
  [checked]="autoSave"
  (checkedChange)="autoSave = $event"
/>`,

  formNgModel: `<brightrail-switch
  label="I agree to marketing emails"
  [(ngModel)]="marketingOptIn"
/>`,
  formReactive: `<brightrail-switch
  label="Two-factor authentication"
  [formControl]="twoFactorControl"
/>`,
  formSettingsRow: `<div class="settings-row">
  <span>Push notifications</span>
  <brightrail-switch
    ariaLabel="Push notifications"
    size="sm"
    [checked]="pushEnabled"
    (checkedChange)="pushEnabled = $event"
  />
</div>`,

  futuristicGlass: `<div class="ff-future-shell ff-future-shell--glass">
  <brightrail-switch label="Glass shield" tone="primary" [checked]="true" />
</div>`,
  futuristicNeon: `<div class="ff-future-shell ff-future-shell--neon">
  <brightrail-switch label="Neon relay" tone="primary" [checked]="true" />
</div>`,
  futuristicCyber: `<div class="ff-future-shell ff-future-shell--cyber">
  <div class="ff-future-cyber-frame">
    <brightrail-switch label="Cyber override" tone="danger" [checked]="true" />
  </div>
</div>`,
  futuristicHolo: `<div class="ff-future-shell ff-future-shell--holo">
  <brightrail-switch label="Holo sync" tone="success" [checked]="true" />
</div>`,

} as const;

export const SWITCH_DOC_SECTION_COUNT = 7;

export const SWITCH_HTML_EXAMPLES = `<brightrail-switch
  label="Enable notifications"
  tone="primary"
  size="md"
  [checked]="notificationsEnabled"
  (checkedChange)="onNotificationsChange($event)"
/>

<brightrail-switch
  label="Dark mode"
  tone="neutral"
  [(ngModel)]="darkMode"
/>

<brightrail-switch
  ariaLabel="Auto-save"
  tone="success"
  size="sm"
  [disabled]="true"
  [checked]="true"
/>`;
