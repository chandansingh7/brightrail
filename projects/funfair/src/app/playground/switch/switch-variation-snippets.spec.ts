import {
  SWITCH_DOC_SECTION_COUNT,
  SWITCH_HTML_EXAMPLES,
  SWITCH_VARIATION_SNIPPETS,
} from './switch-variation-snippets';

describe('switch-variation-snippets', () => {
  it('exports copy-ready snippets for core types and form patterns', () => {
    expect(SWITCH_VARIATION_SNIPPETS.coreChecked).toContain('brightrail-switch');
    expect(SWITCH_VARIATION_SNIPPETS.coreNoLabel).toContain('ariaLabel');
    expect(SWITCH_VARIATION_SNIPPETS.formNgModel).toContain('[(ngModel)]');
  });

  it('exports futuristic shell snippets', () => {
    expect(SWITCH_VARIATION_SNIPPETS.futuristicGlass).toContain('ff-future-shell--glass');
    expect(SWITCH_VARIATION_SNIPPETS.futuristicCyber).toContain('Cyber override');
  });

  it('documents seven reference sections', () => {
    expect(SWITCH_DOC_SECTION_COUNT).toBe(7);
  });

  it('includes footer HTML examples', () => {
    expect(SWITCH_HTML_EXAMPLES).toContain('brightrail-switch');
    expect(SWITCH_HTML_EXAMPLES).toContain('[(ngModel)]');
    expect(SWITCH_HTML_EXAMPLES).toContain('[disabled]="true"');
  });
});
