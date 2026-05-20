import {
  DATE_PICKER_DOC_SECTION_COUNT,
  DATE_PICKER_HTML_EXAMPLES,
  DATE_PICKER_VARIATION_SNIPPETS,
} from './date-picker-variation-snippets';

describe('date-picker-variation-snippets', () => {
  it('exports copy-ready snippets for all ten catalog sections', () => {
    expect(DATE_PICKER_VARIATION_SNIPPETS.typeInline).toContain('type="inline"');
    expect(DATE_PICKER_VARIATION_SNIPPETS.singleOpen).toContain('[open]="true"');
    expect(DATE_PICKER_VARIATION_SNIPPETS.enterpriseBooking).toContain('type="range"');
    expect(DATE_PICKER_VARIATION_SNIPPETS.futuristicGlass).toContain('dp-glass-shell');
  });

  it('documents ten reference sections', () => {
    expect(DATE_PICKER_DOC_SECTION_COUNT).toBe(10);
  });

  it('includes footer HTML examples', () => {
    expect(DATE_PICKER_HTML_EXAMPLES).toContain('brightrail-date-picker');
    expect(DATE_PICKER_HTML_EXAMPLES).toContain('[(ngModel)]');
  });
});
