import {
  RADIO_DOC_SECTION_COUNT,
  RADIO_HTML_EXAMPLES,
  RADIO_VARIATION_SNIPPETS,
} from './radio-variation-snippets';

describe('radio-variation-snippets', () => {
  it('exports copy-ready snippets for core types and groups', () => {
    expect(RADIO_VARIATION_SNIPPETS.coreSelected).toContain('brightrail-radio');
    expect(RADIO_VARIATION_SNIPPETS.groupVertical).toContain('brightrail-radio-group');
    expect(RADIO_VARIATION_SNIPPETS.validationGroup).toContain('[invalid]="true"');
  });

  it('documents six reference sections', () => {
    expect(RADIO_DOC_SECTION_COUNT).toBe(6);
  });

  it('includes footer HTML examples', () => {
    expect(RADIO_HTML_EXAMPLES).toContain('brightrail-radio');
    expect(RADIO_HTML_EXAMPLES).toContain('brightrail-radio-group');
    expect(RADIO_HTML_EXAMPLES).toContain('errorText="Please select an option."');
  });
});
