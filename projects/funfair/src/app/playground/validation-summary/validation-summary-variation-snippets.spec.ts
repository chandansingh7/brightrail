import {
  VALIDATION_SUMMARY_DEMO_ERRORS,
  VALIDATION_SUMMARY_DOC_SECTION_COUNT,
  VALIDATION_SUMMARY_FIELD_ERRORS,
  VALIDATION_SUMMARY_HTML_EXAMPLES,
  VALIDATION_SUMMARY_VARIATION_SNIPPETS,
} from './validation-summary-variation-snippets';

describe('validation-summary-variation-snippets', () => {
  it('exports copy-ready snippets for string and field errors', () => {
    expect(VALIDATION_SUMMARY_VARIATION_SNIPPETS.coreStrings).toContain('brightrail-validation-summary');
    expect(VALIDATION_SUMMARY_VARIATION_SNIPPETS.fieldErrors).toContain("field: 'email'");
    expect(VALIDATION_SUMMARY_VARIATION_SNIPPETS.hiddenWhenEmpty).toContain('[errors]="[]"');
  });

  it('provides demo error arrays', () => {
    expect(VALIDATION_SUMMARY_DEMO_ERRORS.length).toBe(2);
    expect(VALIDATION_SUMMARY_FIELD_ERRORS[0]).toEqual(
      jasmine.objectContaining({ field: 'email' }),
    );
  });

  it('documents six reference sections', () => {
    expect(VALIDATION_SUMMARY_DOC_SECTION_COUNT).toBe(6);
  });

  it('includes footer HTML examples', () => {
    expect(VALIDATION_SUMMARY_HTML_EXAMPLES).toContain('BrightrailValidationSummaryError');
  });
});
