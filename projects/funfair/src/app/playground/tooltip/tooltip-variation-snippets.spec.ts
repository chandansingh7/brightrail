import {
  TOOLTIP_DOC_SECTION_COUNT,
  TOOLTIP_HTML_EXAMPLES,
  TOOLTIP_VARIATION_SNIPPETS,
} from './tooltip-variation-snippets';

describe('tooltip-variation-snippets', () => {
  it('exports copy-ready snippets for core types and placements', () => {
    expect(TOOLTIP_VARIATION_SNIPPETS.defaultInfo).toContain('brightrailTooltip');
    expect(TOOLTIP_VARIATION_SNIPPETS.richContent).toContain('richTooltipTemplate');
    expect(TOOLTIP_VARIATION_SNIPPETS.placementTop).toContain('brightrailTooltipPlacement="top"');
    expect(TOOLTIP_VARIATION_SNIPPETS.variantNeon).toContain('brightrailTooltipVariant="neon"');
  });

  it('documents seven reference sections', () => {
    expect(TOOLTIP_DOC_SECTION_COUNT).toBe(7);
  });

  it('includes footer HTML examples', () => {
    expect(TOOLTIP_HTML_EXAMPLES).toContain('brightrail-avatar');
    expect(TOOLTIP_HTML_EXAMPLES).toContain('brightrailTooltip');
  });
});
