import {
  PAGINATION_DOC_SECTION_COUNT,
  PAGINATION_HTML_EXAMPLES,
  PAGINATION_VARIATION_SNIPPETS,
} from './pagination-variation-snippets';

describe('pagination-variation-snippets', () => {
  it('exports copy-ready snippets for every catalog section', () => {
    expect(PAGINATION_VARIATION_SNIPPETS.coreNumbered).toContain('brightrail-pagination');
    expect(PAGINATION_VARIATION_SNIPPETS.mobileSheet).toContain('variant="mobile-sheet"');
    expect(PAGINATION_VARIATION_SNIPPETS.advancedJumpToPage).toContain('[showJumpToPage]="true"');
  });

  it('exports futuristic shell snippets', () => {
    expect(PAGINATION_VARIATION_SNIPPETS.futuristicGlass).toContain('ff-future-shell--glass');
    expect(PAGINATION_VARIATION_SNIPPETS.futuristicCyber).toContain('ff-future-cyber-frame');
  });

  it('documents ten reference sections', () => {
    expect(PAGINATION_DOC_SECTION_COUNT).toBe(10);
  });

  it('includes footer HTML examples', () => {
    expect(PAGINATION_HTML_EXAMPLES).toContain('brightrail-pagination');
    expect(PAGINATION_HTML_EXAMPLES).toContain('summaryMode="range"');
  });
});
