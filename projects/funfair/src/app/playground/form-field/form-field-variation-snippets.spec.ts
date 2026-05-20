import {
  FORM_FIELD_DOC_SECTION_COUNT,
  FORM_FIELD_HTML_EXAMPLES,
  FORM_FIELD_VARIATION_SNIPPETS,
} from './form-field-variation-snippets';

describe('form-field-variation-snippets', () => {
  it('exports copy-ready form-field snippets', () => {
    expect(FORM_FIELD_VARIATION_SNIPPETS.coreLabelHint).toContain('brightrail-form-field');
    expect(FORM_FIELD_VARIATION_SNIPPETS.withSwitch).toContain('brightrail-switch');
    expect(FORM_FIELD_VARIATION_SNIPPETS.errorInvalid).toContain('[invalid]="true"');
    expect(FORM_FIELD_VARIATION_SNIPPETS.layoutStack).toContain('ffco-stack');
  });

  it('documents seven reference sections', () => {
    expect(FORM_FIELD_DOC_SECTION_COUNT).toBe(7);
    expect(FORM_FIELD_VARIATION_SNIPPETS.futuristicHolo).toContain('ff-future-shell--holo');
  });

  it('includes footer HTML examples', () => {
    expect(FORM_FIELD_HTML_EXAMPLES).toContain('brightrail-text-field');
    expect(FORM_FIELD_HTML_EXAMPLES).toContain('brightrail-switch');
  });
});
