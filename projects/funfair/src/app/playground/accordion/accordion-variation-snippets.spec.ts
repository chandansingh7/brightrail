import { ACCORDION_DOC_SECTION_COUNT, ACCORDION_VARIATION_SNIPPETS } from './accordion-variation-snippets';

describe('accordion-variation-snippets', () => {
  it('exports copy-ready snippets for appearances and expand modes', () => {
    expect(ACCORDION_VARIATION_SNIPPETS.appearanceStandard).toContain('brightrail-accordion');
    expect(ACCORDION_VARIATION_SNIPPETS.expandMulti).toContain('expandMode="multi"');
    expect(ACCORDION_VARIATION_SNIPPETS.advancedCombined).toContain('badgeText');
  });

  it('documents six reference sections', () => {
    expect(ACCORDION_DOC_SECTION_COUNT).toBe(6);
  });
});
