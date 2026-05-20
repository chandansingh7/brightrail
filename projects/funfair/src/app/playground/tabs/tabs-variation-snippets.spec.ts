import {
  TABS_DOC_SECTION_COUNT,
  TABS_HTML_EXAMPLES,
  TABS_VARIATION_SNIPPETS,
} from './tabs-variation-snippets';

describe('tabs-variation-snippets', () => {
  it('exports copy-ready snippets for appearances and orientations', () => {
    expect(TABS_VARIATION_SNIPPETS.appearanceUnderline).toContain('brightrail-tabs');
    expect(TABS_VARIATION_SNIPPETS.appearancePill).toContain('appearance="pill"');
    expect(TABS_VARIATION_SNIPPETS.orientationVertical).toContain('orientation="vertical"');
  });

  it('documents six reference sections', () => {
    expect(TABS_DOC_SECTION_COUNT).toBe(6);
  });

  it('includes footer HTML examples', () => {
    expect(TABS_HTML_EXAMPLES).toContain('brightrail-tab');
    expect(TABS_HTML_EXAMPLES).toContain('brightrailTabContent');
  });
});
