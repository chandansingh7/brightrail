import { TOAST_DOC_SECTION_COUNT, TOAST_HTML_EXAMPLES, TOAST_VARIATION_SNIPPETS } from './toast-variation-snippets';

describe('toast-variation-snippets', () => {
  it('exports copy-ready snippets for variants and service usage', () => {
    expect(TOAST_VARIATION_SNIPPETS.coreSuccess).toContain('brightrail-toast');
    expect(TOAST_VARIATION_SNIPPETS.dismissibleYes).toContain('[dismissible]="true"');
    expect(TOAST_VARIATION_SNIPPETS.serviceShow).toContain('BrightrailToastService');
  });

  it('documents six reference sections in the mock', () => {
    expect(TOAST_DOC_SECTION_COUNT).toBe(7);
    expect(TOAST_VARIATION_SNIPPETS.futuristicGlass).toContain('ff-future-shell--glass');
  });

  it('includes footer HTML examples', () => {
    expect(TOAST_HTML_EXAMPLES).toContain('brightrail-toast-container');
    expect(TOAST_HTML_EXAMPLES).toContain('show({');
  });
});
