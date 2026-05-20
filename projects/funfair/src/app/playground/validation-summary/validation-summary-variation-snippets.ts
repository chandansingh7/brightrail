import type { BrightrailValidationSummaryError } from 'brightrail';

export const VALIDATION_SUMMARY_DEMO_ERRORS: BrightrailValidationSummaryError[] = [
  'Email is required',
  'Password must be at least 8 characters',
];

export const VALIDATION_SUMMARY_FIELD_ERRORS: BrightrailValidationSummaryError[] = [
  { field: 'email', message: 'Enter a valid email address' },
  { field: 'password', message: 'Include a number and symbol' },
];

/** Copy-ready markup for validation-summary catalog tiles (import from `brightrail`). */
export const VALIDATION_SUMMARY_VARIATION_SNIPPETS = {
  coreStrings: `<brightrail-validation-summary
  [errors]="['Email is required', 'Password must be at least 8 characters']"
/>`,

  withTitle: `<brightrail-validation-summary
  title="Please fix the following errors:"
  [errors]="errors"
/>`,

  fieldErrors: `<brightrail-validation-summary
  [errors]="[
    { field: 'email', message: 'Enter a valid email address' },
    { field: 'password', message: 'Include a number and symbol' }
  ]"
/>`,

  singleError: `<brightrail-validation-summary
  [errors]="['You must accept the terms']"
/>`,

  manyErrors: `<brightrail-validation-summary
  title="Unable to submit the form"
  [errors]="manyErrors"
/>`,

  customTitle: `<brightrail-validation-summary
  title="Review your profile details"
  [errors]="profileErrors"
  ariaLabel="Profile validation errors"
/>`,

  hiddenWhenEmpty: `<!-- Renders nothing when errors array is empty -->
<brightrail-validation-summary [errors]="[]" />`,
} as const;

export const VALIDATION_SUMMARY_DOC_SECTION_COUNT = 6;

export const VALIDATION_SUMMARY_HTML_EXAMPLES = `<brightrail-validation-summary
  title="Please fix the following errors:"
  [errors]="formErrors"
/>

<!-- formErrors: BrightrailValidationSummaryError[] -->
{ field: 'email', message: 'Enter a valid email address' }`;
