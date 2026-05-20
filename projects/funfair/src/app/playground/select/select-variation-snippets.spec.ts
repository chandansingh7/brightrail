import {
  SELECT_DOC_SECTION_COUNT,
  SELECT_HTML_EXAMPLES,
  SELECT_VARIATION_SNIPPETS,
} from './select-variation-snippets';

describe('select-variation-snippets', () => {
  it('exports copy-ready snippets for appearances, sizes, and states', () => {
    expect(SELECT_VARIATION_SNIPPETS.appearanceOutlined).toContain('brightrail-select');
    expect(SELECT_VARIATION_SNIPPETS.appearanceReadonly).toContain('appearance="readonly"');
    expect(SELECT_VARIATION_SNIPPETS.sizeMd).toContain('size="md"');
    expect(SELECT_VARIATION_SNIPPETS.statusError).toContain('status="error"');
    expect(SELECT_VARIATION_SNIPPETS.iconFilter).toContain('brightrail-button-icon');
    expect(SELECT_VARIATION_SNIPPETS.textTruncate).toContain('textOverflow="truncate"');
    expect(SELECT_VARIATION_SNIPPETS.stateLoading).toContain('[loading]="true"');
  });

  it('documents six reference sections', () => {
    expect(SELECT_DOC_SECTION_COUNT).toBe(6);
  });

  it('includes footer HTML examples with displayText', () => {
    expect(SELECT_HTML_EXAMPLES).toContain('displayText=');
    expect(SELECT_HTML_EXAMPLES).toContain('br-select-panel');
  });
});
