import {
  MODAL_DOC_SECTION_COUNT,
  MODAL_HTML_EXAMPLES,
  MODAL_VARIATION_SNIPPETS,
} from './modal-variation-snippets';

describe('modal-variation-snippets', () => {
  it('exports copy-ready snippets for sizes, appearances, and patterns', () => {
    expect(MODAL_VARIATION_SNIPPETS.sizeSm).toContain('size="sm"');
    expect(MODAL_VARIATION_SNIPPETS.appearanceDanger).toContain('appearance="danger"');
    expect(MODAL_VARIATION_SNIPPETS.confirmDestructive).toContain('brightrail-modal-footer');
    expect(MODAL_VARIATION_SNIPPETS.formSubmit).toContain('type="submit"');
    expect(MODAL_VARIATION_SNIPPETS.patternLoading).toContain('Publishing changes');
  });

  it('documents six reference sections', () => {
    expect(MODAL_DOC_SECTION_COUNT).toBe(6);
  });

  it('includes footer HTML examples', () => {
    expect(MODAL_HTML_EXAMPLES).toContain('brightrail-modal');
    expect(MODAL_HTML_EXAMPLES).toContain('[contain]="true"');
    expect(MODAL_HTML_EXAMPLES).toContain('brightrail-button');
  });
});
