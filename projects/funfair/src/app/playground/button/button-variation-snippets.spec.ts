import {
  BUTTON_DOC_SECTION_COUNT,
  BUTTON_HTML_EXAMPLES,
  BUTTON_VARIATION_SNIPPETS,
} from './button-variation-snippets';

describe('button-variation-snippets', () => {
  it('exports copy-ready snippets for core and semantic variants', () => {
    expect(BUTTON_VARIATION_SNIPPETS.corePrimary).toContain('brightrail-button');
    expect(BUTTON_VARIATION_SNIPPETS.semanticDanger).toContain('variant="danger"');
    expect(BUTTON_VARIATION_SNIPPETS.shapeCircle).toContain('shape="circle"');
  });

  it('documents six reference sections', () => {
    expect(BUTTON_DOC_SECTION_COUNT).toBe(6);
  });

  it('includes footer HTML examples', () => {
    expect(BUTTON_HTML_EXAMPLES).toContain('brightrail-button');
    expect(BUTTON_HTML_EXAMPLES).toContain('[loading]="isDeleting"');
  });
});
