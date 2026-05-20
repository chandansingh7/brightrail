import {
  TEXT_FIELD_DOC_SECTION_COUNT,
  TEXT_FIELD_HTML_EXAMPLES,
  TEXT_FIELD_VARIATION_SNIPPETS,
} from './text-field-variation-snippets';

describe('text-field-variation-snippets', () => {
  it('exports copy-ready snippets for appearances and label positions', () => {
    expect(TEXT_FIELD_VARIATION_SNIPPETS.appearanceFilled).toContain('brightrail-text-field');
    expect(TEXT_FIELD_VARIATION_SNIPPETS.appearanceFilled).toContain('appearance="filled"');
    expect(TEXT_FIELD_VARIATION_SNIPPETS.labelInset).toContain('labelPosition="inset"');
  });

  it('documents six reference sections', () => {
    expect(TEXT_FIELD_DOC_SECTION_COUNT).toBe(6);
  });

  it('includes footer HTML examples', () => {
    expect(TEXT_FIELD_HTML_EXAMPLES).toContain('brightrail-text-field');
    expect(TEXT_FIELD_HTML_EXAMPLES).toContain('[showPasswordToggle]="true"');
  });
});
