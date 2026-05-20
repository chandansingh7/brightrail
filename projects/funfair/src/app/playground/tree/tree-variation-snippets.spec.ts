import {
  TREE_DEMO_WORKSPACE,
  TREE_DOC_SECTION_COUNT,
  TREE_HTML_EXAMPLES,
  TREE_VARIATION_SNIPPETS,
} from './tree-variation-snippets';

describe('tree-variation-snippets', () => {
  it('exports copy-ready snippets for hierarchy and selection', () => {
    expect(TREE_VARIATION_SNIPPETS.coreWorkspace).toContain('brightrail-tree');
    expect(TREE_VARIATION_SNIPPETS.selectionSingle).toContain('selectionMode="single"');
    expect(TREE_VARIATION_SNIPPETS.selectionNone).toContain('selectionMode="none"');
    expect(TREE_VARIATION_SNIPPETS.advancedMultiBranch).toContain('trco-split');
  });

  it('provides demo workspace nodes with nested children', () => {
    expect(TREE_DEMO_WORKSPACE[0]?.children?.length).toBeGreaterThan(0);
  });

  it('documents six reference sections', () => {
    expect(TREE_DOC_SECTION_COUNT).toBe(6);
  });

  it('includes footer HTML examples', () => {
    expect(TREE_HTML_EXAMPLES).toContain('brightrail-tree');
    expect(TREE_HTML_EXAMPLES).toContain('selectedIdChange');
  });
});
