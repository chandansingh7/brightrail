import {
  BREADCRUMB_DOC_SECTION_COUNT,
  BREADCRUMB_HTML_EXAMPLES,
  BREADCRUMB_VARIATION_SNIPPETS,
} from './breadcrumb-variation-snippets';

describe('breadcrumb-variation-snippets', () => {
  it('exports copy-ready snippets for core and separator variants', () => {
    expect(BREADCRUMB_VARIATION_SNIPPETS.coreWithCurrent).toContain('brightrail-breadcrumb');
    expect(BREADCRUMB_VARIATION_SNIPPETS.separatorSlash).toContain('separator="slash"');
    expect(BREADCRUMB_VARIATION_SNIPPETS.truncationLong).toContain('collapse-middle');
  });

  it('documents nine reference sections', () => {
    expect(BREADCRUMB_DOC_SECTION_COUNT).toBe(9);
  });

  it('includes footer HTML examples', () => {
    expect(BREADCRUMB_HTML_EXAMPLES).toContain('brightrail-breadcrumb');
    expect(BREADCRUMB_HTML_EXAMPLES).toContain('currentItemStyle="accent"');
  });
});
