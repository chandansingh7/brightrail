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

  it('exports futuristic shell snippets', () => {
    expect(RADIO_VARIATION_SNIPPETS.futuristicNeon).toContain('ff-future-shell--neon');
    expect(RADIO_VARIATION_SNIPPETS.futuristicHolo).toContain('brightrail-radio');
  });

  it('documents seven reference sections', () => {
    expect(RADIO_DOC_SECTION_COUNT).toBe(7);
  });

  it('includes footer HTML examples', () => {
    expect(RADIO_HTML_EXAMPLES).toContain('brightrail-radio');
    expect(RADIO_HTML_EXAMPLES).toContain('brightrail-radio-group');
    expect(RADIO_HTML_EXAMPLES).toContain('errorText="Please select an option."');
  });
});
