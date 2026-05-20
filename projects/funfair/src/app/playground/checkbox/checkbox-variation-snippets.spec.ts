import {
  CHECKBOX_DOC_SECTION_COUNT,
  CHECKBOX_HTML_EXAMPLES,
  CHECKBOX_VARIATION_SNIPPETS,
} from './checkbox-variation-snippets';

describe('checkbox-variation-snippets', () => {
  it('exports copy-ready snippets for core types and groups', () => {
    expect(CHECKBOX_VARIATION_SNIPPETS.coreChecked).toContain('brightrail-checkbox');
    expect(CHECKBOX_VARIATION_SNIPPETS.coreIndeterminate).toContain('[indeterminate]="true"');
    expect(CHECKBOX_VARIATION_SNIPPETS.groupVertical).toContain('brightrail-checkbox-group');
  });

  it('documents six reference sections', () => {
    expect(CHECKBOX_DOC_SECTION_COUNT).toBe(6);
  });

  it('includes footer HTML examples', () => {
    expect(CHECKBOX_HTML_EXAMPLES).toContain('brightrail-checkbox');
    expect(CHECKBOX_HTML_EXAMPLES).toContain('brightrail-checkbox-group');
    expect(CHECKBOX_HTML_EXAMPLES).toContain('errorText="This field is required"');
  });
});
