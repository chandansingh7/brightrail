/** Shipped enterprise governance contract (not doc-only). */
export const BRIGHTRAIL_GOVERNANCE_VERSION = '1.0.0';

export interface BrightrailAdoptionChecklistItem {
  readonly id: string;
  readonly label: string;
  readonly required: boolean;
}

/** Bootstrap checklist every consuming admin app should complete. */
export const BRIGHTRAIL_ADOPTION_CHECKLIST: readonly BrightrailAdoptionChecklistItem[] = [
  { id: 'platform', label: 'Call provideBrightrailPlatform() once in ApplicationConfig', required: true },
  { id: 'i18n', label: 'Call provideBrightrailI18n() for locale and document direction (LTR/RTL)', required: true },
  { id: 'styles', label: 'Import brightrail/styles/brightrail-root.scss and override --br-* tokens', required: true },
  { id: 'forms', label: 'Use brightrail-form-field for labelled controls with aria-describedby', required: true },
  { id: 'a11y-ci', label: 'Run axe + visual baselines on routes that embed Brightrail surfaces', required: false },
  { id: 'semver', label: 'Follow BRIGHTRAIL_SEMVER_POLICY for upgrades and deprecations', required: true },
] as const;

export const BRIGHTRAIL_SEMVER_POLICY = {
  major: 'Breaking API, token renames, or removed exports — require migration notes.',
  minor: 'New components, optional inputs, and backward-compatible behavior.',
  patch: 'Bug fixes, a11y fixes, and visual parity without API changes.',
  deprecationWindow: 'At least one minor release with @deprecated JSDoc before removal.',
} as const;

export const BRIGHTRAIL_OPERATIONAL_GATES = {
  unitTests: 'ng test brightrail (library) on every PR',
  consumerVerify: 'npm run verify:package — APF build + Midway consumer compile',
  a11yGate: 'npm run e2e:a11y — axe semantic rules on every Funfair a11y-preview route',
  visualGate: 'npm run e2e:visual — Playwright screenshot baselines on Funfair previews',
  claimsGate: 'npm run verify:claims — platform registry, CI wiring, and secondary entry points',
} as const;
