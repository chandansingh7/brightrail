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

  it('documents nine reference sections', () => {
    expect(PAGINATION_DOC_SECTION_COUNT).toBe(9);
  });

  it('includes footer HTML examples', () => {
    expect(PAGINATION_HTML_EXAMPLES).toContain('brightrail-pagination');
    expect(PAGINATION_HTML_EXAMPLES).toContain('summaryMode="range"');
  });
});
