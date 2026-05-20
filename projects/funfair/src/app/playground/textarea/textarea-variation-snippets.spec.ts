import {
  TEXTAREA_DOC_SECTION_COUNT,
  TEXTAREA_HTML_EXAMPLES,
  TEXTAREA_VARIATION_SNIPPETS,
} from './textarea-variation-snippets';

describe('textarea-variation-snippets', () => {
  it('exports copy-ready snippets for appearances and status states', () => {
    expect(TEXTAREA_VARIATION_SNIPPETS.appearanceOutlined).toContain('brightrail-textarea');
    expect(TEXTAREA_VARIATION_SNIPPETS.statusError).toContain('status="error"');
    expect(TEXTAREA_VARIATION_SNIPPETS.formFullWidth).toContain('[fullWidth]="true"');
  });

  it('documents six reference sections', () => {
    expect(TEXTAREA_DOC_SECTION_COUNT).toBe(7);
    expect(TEXTAREA_VARIATION_SNIPPETS.futuristicHolo).toContain('ff-future-shell--holo');
  });

  it('includes footer HTML examples', () => {
    expect(TEXTAREA_HTML_EXAMPLES).toContain('brightrail-textarea');
    expect(TEXTAREA_HTML_EXAMPLES).toContain('status="success"');
    expect(TEXTAREA_HTML_EXAMPLES).toContain('appearance="readonly"');
  });
});
