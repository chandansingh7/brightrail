import {
  DRAWER_DOC_SECTION_COUNT,
  DRAWER_HTML_EXAMPLES,
  DRAWER_VARIATION_SNIPPETS,
} from './drawer-variation-snippets';

describe('drawer-variation-snippets', () => {
  it('exports copy-ready snippets for core drawer types and placements', () => {
    expect(DRAWER_VARIATION_SNIPPETS.coreNavigation).toContain('brightrail-drawer');
    expect(DRAWER_VARIATION_SNIPPETS.placementLeft).toContain('placement="left"');
    expect(DRAWER_VARIATION_SNIPPETS.sizeWide).toContain('size="wide"');
    expect(DRAWER_VARIATION_SNIPPETS.modeModalGlass).toContain('backdropStyle="glass"');
    expect(DRAWER_VARIATION_SNIPPETS.surfaceAi).toContain('surface="ai"');
  });

  it('documents seven reference sections', () => {
    expect(DRAWER_DOC_SECTION_COUNT).toBe(7);
    expect(DRAWER_VARIATION_SNIPPETS.futuristicNeon).toContain('surface="ai"');
  });

  it('includes footer HTML examples', () => {
    expect(DRAWER_HTML_EXAMPLES).toContain('brightrail-drawer');
    expect(DRAWER_HTML_EXAMPLES).toContain('brightrail-drawer-footer');
  });
});
