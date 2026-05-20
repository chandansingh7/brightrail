import {
  collectInitiallyExpandedIds,
  findTreeNodeById,
  flattenVisibleTreeNodes,
} from './brightrail-tree.utils';

describe('brightrail-tree.utils', () => {
  const sample = [
    {
      id: 'a',
      label: 'A',
      expanded: true,
      children: [{ id: 'a1', label: 'A1', expanded: true }],
    },
    { id: 'b', label: 'B' },
  ];

  it('collectInitiallyExpandedIds gathers expanded nodes', () => {
    const ids = collectInitiallyExpandedIds(sample);
    expect(ids.has('a')).toBeTrue();
    expect(ids.has('a1')).toBeTrue();
    expect(ids.has('b')).toBeFalse();
  });

  it('findTreeNodeById returns nested node', () => {
    expect(findTreeNodeById(sample, 'a1')?.label).toBe('A1');
    expect(findTreeNodeById(sample, 'missing')).toBeUndefined();
  });

  it('flattenVisibleTreeNodes respects expanded ids', () => {
    const expanded = new Set(['a']);
    const flat = flattenVisibleTreeNodes(sample, expanded);
    expect(flat.map((n) => n.id)).toEqual(['a', 'a1', 'b']);
  });
});
