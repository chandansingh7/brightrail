import { flattenTreeTableRows } from './brightrail-tree-table.utils';

describe('flattenTreeTableRows', () => {
  it('flattens expanded branches only', () => {
    const nodes = [
      {
        id: 'org',
        label: 'Org',
        expanded: true,
        children: [{ id: 'team', label: 'Team' }],
      },
    ];
    const rows = flattenTreeTableRows(nodes, new Set(['org']));
    expect(rows.map((r) => r.label)).toEqual(['Org', 'Team']);
    expect(rows[1].depth).toBe(1);
  });
});
