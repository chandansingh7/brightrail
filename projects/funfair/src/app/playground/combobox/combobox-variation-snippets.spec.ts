import {
  COMBOBOX_DOC_SECTION_COUNT,
  COMBOBOX_HTML_EXAMPLES,
  COMBOBOX_VARIATION_SNIPPETS,
} from './combobox-variation-snippets';

describe('combobox-variation-snippets', () => {
  it('exports copy-ready combobox snippets', () => {
    expect(COMBOBOX_VARIATION_SNIPPETS.coreDefault).toContain('brightrail-combobox');
    expect(COMBOBOX_VARIATION_SNIPPETS.filterableOff).toContain('[filterable]="false"');
    expect(COMBOBOX_VARIATION_SNIPPETS.enterpriseMultiField).toContain('cbco-form-row');
  });

  it('documents seven reference sections', () => {
    expect(COMBOBOX_DOC_SECTION_COUNT).toBe(7);
    expect(COMBOBOX_VARIATION_SNIPPETS.futuristicGlass).toContain('ff-future-shell--glass');
  });

  it('includes footer HTML examples', () => {
    expect(COMBOBOX_HTML_EXAMPLES).toContain('[filterable]="true"');
    expect(COMBOBOX_HTML_EXAMPLES).toContain('disabled: true');
  });
});
