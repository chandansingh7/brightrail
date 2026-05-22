import { layoutNeuralGraphNodes, neuralGraphEdges } from './brightrail-neural-graph.utils';

describe('neural graph utils', () => {
  it('layouts nodes in a circle', () => {
    const layout = layoutNeuralGraphNodes([
      { id: 'a', label: 'A' },
      { id: 'b', label: 'B' },
    ]);
    expect(layout.length).toBe(2);
    expect(layout[0].x).toBeGreaterThan(0);
    expect(layout[0].y).toBeGreaterThan(0);
  });

  it('builds polyline segments for links', () => {
    const layout = layoutNeuralGraphNodes([{ id: 'a', label: 'A' }, { id: 'b', label: 'B' }]);
    const edges = neuralGraphEdges(layout, [{ source: 'a', target: 'b' }]);
    expect(edges.length).toBeGreaterThan(0);
    expect(edges.includes(',')).toBe(true);
  });
});
