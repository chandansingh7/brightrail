import {
  formatGraphHeatmapLiteral,
  formatGraphSegmentsLiteral,
  formatGraphSeriesLiteral,
} from './graph-snippet-format';
import {
  GRAPH_DEMO_DONUT_SEGMENTS,
  GRAPH_DEMO_HEATMAP_CELLS,
  GRAPH_DEMO_SALES_OVERVIEW,
} from './graph-demo-data';

describe('graph-snippet-format', () => {
  it('formats series literals for copy-ready TS snippets', () => {
    const text = formatGraphSeriesLiteral(GRAPH_DEMO_SALES_OVERVIEW.slice(0, 1).map((s) => ({
      ...s,
      points: s.points.slice(0, 2),
    })));

    expect(text).toContain("id: 'revenue'");
    expect(text).toContain("{ x: 'Jan', y: 4200 }");
    expect(text).toContain("{ x: 'Feb', y: 5100 }");
  });

  it('formats segment literals', () => {
    const text = formatGraphSegmentsLiteral(GRAPH_DEMO_DONUT_SEGMENTS.slice(0, 2));
    expect(text).toContain("label: 'Direct'");
    expect(text).toContain('value: 38');
  });

  it('formats heatmap cell literals', () => {
    const text = formatGraphHeatmapLiteral(GRAPH_DEMO_HEATMAP_CELLS.slice(0, 2));
    expect(text).toContain("row: 'Mon'");
    expect(text).toContain("col: 'AM'");
    expect(text).toContain('value: 12');
  });
});
