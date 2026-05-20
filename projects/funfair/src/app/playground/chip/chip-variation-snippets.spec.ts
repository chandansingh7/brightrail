import {
  CHIP_DOC_SECTION_COUNT,
  CHIP_HTML_EXAMPLES,
  CHIP_VARIATION_SNIPPETS,
} from './chip-variation-snippets';

describe('chip-variation-snippets', () => {
  it('exports copy-ready snippets for core and interactive patterns', () => {
    expect(CHIP_VARIATION_SNIPPETS.coreFilledProduct).toContain('brightrail-chip');
    expect(CHIP_VARIATION_SNIPPETS.filterSelected).toContain('[selected]="true"');
    expect(CHIP_VARIATION_SNIPPETS.advancedQuarterGroup).toContain('cco-group');
    expect(CHIP_VARIATION_SNIPPETS.removableMarketing).toContain('[removable]="true"');
  });

  it('documents ten reference sections in the mock', () => {
    expect(CHIP_DOC_SECTION_COUNT).toBe(11);
  });

  it('includes footer HTML examples', () => {
    expect(CHIP_HTML_EXAMPLES).toContain('brightrail-chip');
    expect(CHIP_HTML_EXAMPLES).toContain('[removable]="true"');
  });
});
