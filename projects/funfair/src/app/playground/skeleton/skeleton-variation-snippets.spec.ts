import {
  SKELETON_DOC_SECTION_COUNT,
  SKELETON_HTML_EXAMPLES,
  SKELETON_VARIATION_SNIPPETS,
} from './skeleton-variation-snippets';

describe('skeleton-variation-snippets', () => {
  it('exports copy-ready snippets for core variants and patterns', () => {
    expect(SKELETON_VARIATION_SNIPPETS.coreText).toContain('brightrail-skeleton');
    expect(SKELETON_VARIATION_SNIPPETS.animWave).toContain('animation="wave"');
    expect(SKELETON_VARIATION_SNIPPETS.patternListRow).toContain('skel-row');
    expect(SKELETON_VARIATION_SNIPPETS.advancedTable).toContain('skel-table');
  });

  it('documents six reference sections in the mock', () => {
    expect(SKELETON_DOC_SECTION_COUNT).toBe(6);
  });

  it('includes footer HTML examples', () => {
    expect(SKELETON_HTML_EXAMPLES).toContain('brightrail-skeleton');
    expect(SKELETON_HTML_EXAMPLES).toContain('[lines]="3"');
  });

  it('uses valid div wrappers only (no motion tags)', () => {
    const blob = Object.values(SKELETON_VARIATION_SNIPPETS).join('\n') + SKELETON_HTML_EXAMPLES;
    expect(blob).not.toContain('motion.');
  });
});
