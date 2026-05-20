import { graphDemoDataset, GRAPH_DEMO_SALES_OVERVIEW, sliceGraphSeries } from './graph-demo-data';

describe('graph-demo-data', () => {
  it('returns sales overview by default', () => {
    expect(graphDemoDataset('sales-overview')).toEqual(GRAPH_DEMO_SALES_OVERVIEW);
  });

  it('slices series to requested point count', () => {
    const sliced = sliceGraphSeries(3, graphDemoDataset('sales-overview'));
    expect(sliced[0].points.length).toBe(3);
  });
});
