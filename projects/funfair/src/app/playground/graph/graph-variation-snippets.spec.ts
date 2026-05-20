import {
  GRAPH_DOC_SECTION_COUNT,
  GRAPH_VARIATION_SNIPPETS,
} from './graph-variation-snippets';

describe('graph-variation-snippets', () => {
  it('exports snippets for all catalog chart kinds', () => {
    expect(Object.keys(GRAPH_VARIATION_SNIPPETS).length).toBeGreaterThanOrEqual(24);
    expect(GRAPH_VARIATION_SNIPPETS.lineDefault).toContain('brightrail-graph');
    expect(GRAPH_VARIATION_SNIPPETS.funnel).toContain('kind="funnel"');
  });

  it('documents eleven reference sections', () => {
    expect(GRAPH_DOC_SECTION_COUNT).toBe(11);
    expect(GRAPH_VARIATION_SNIPPETS.futuristicNeon).toContain('surface="dark"');
  });
});
