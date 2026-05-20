import {
  PROGRESS_DOC_SECTION_COUNT,
  PROGRESS_HTML_EXAMPLES,
  PROGRESS_VARIATION_SNIPPETS,
} from './progress-variation-snippets';

describe('progress-variation-snippets', () => {
  it('exports copy-ready snippets for progress and related patterns', () => {
    expect(PROGRESS_VARIATION_SNIPPETS.linearDefault).toContain('brightrail-progress');
    expect(PROGRESS_VARIATION_SNIPPETS.milestoneStepper).toContain('brightrail-stepper');
    expect(PROGRESS_VARIATION_SNIPPETS.fileComplete).toContain('brightrail-progress-file-row');
    expect(PROGRESS_VARIATION_SNIPPETS.futuristicNeonArc).toContain('variant="neon-arc"');
  });

  it('documents nine reference sections', () => {
    expect(PROGRESS_DOC_SECTION_COUNT).toBe(9);
  });

  it('includes footer HTML examples', () => {
    expect(PROGRESS_HTML_EXAMPLES).toContain('brightrail-progress');
    expect(PROGRESS_HTML_EXAMPLES).toContain('brightrail-progress-file-row');
  });
});
