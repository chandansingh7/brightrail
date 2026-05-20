import {
  MENU_DOC_SECTION_COUNT,
  MENU_HTML_EXAMPLES,
  MENU_VARIATION_SNIPPETS,
} from './menu-variation-snippets';

describe('menu-variation-snippets', () => {
  it('exports copy-ready snippets with menu trigger wiring', () => {
    expect(MENU_VARIATION_SNIPPETS.coreActions).toContain('brightrailMenuTrigger');
    expect(MENU_VARIATION_SNIPPETS.coreActions).toContain('brightrail-menu-item');
    expect(MENU_VARIATION_SNIPPETS.stateDisabled).toContain('[disabled]="true"');
    expect(MENU_VARIATION_SNIPPETS.layoutSplit).toContain('mco-split');
  });

  it('documents seven reference sections', () => {
    expect(MENU_DOC_SECTION_COUNT).toBe(7);
    expect(MENU_VARIATION_SNIPPETS.futuristicGlass).toContain('ff-future-shell--glass');
  });

  it('includes footer HTML examples', () => {
    expect(MENU_HTML_EXAMPLES).toContain('brightrail-menu');
    expect(MENU_HTML_EXAMPLES).toContain('(activate)');
  });
});
