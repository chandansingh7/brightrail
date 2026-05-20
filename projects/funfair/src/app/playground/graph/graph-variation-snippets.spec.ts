import { GRAPH_VARIATION_SNIPPETS } from './graph-variation-snippets';

describe('graph-variation-snippets', () => {
  it('exports snippets for all catalog chart kinds', () => {
    expect(Object.keys(GRAPH_VARIATION_SNIPPETS).length).toBeGreaterThanOrEqual(20);
    expect(GRAPH_VARIATION_SNIPPETS.lineDefault).toContain('brightrail-graph');
    expect(GRAPH_VARIATION_SNIPPETS.funnel).toContain('kind="funnel"');
  });
});
