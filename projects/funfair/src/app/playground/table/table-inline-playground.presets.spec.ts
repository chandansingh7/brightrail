import type { BrightrailTableRow } from 'brightrail';

import { tpMergeInlineRows } from './table-inline-playground.presets';

describe('table-inline-playground.presets', () => {
  it('tpMergeInlineRows patches the matching row by id', () => {
    const rows: BrightrailTableRow[] = [
      { id: '1', name: 'Ada', role: 'Admin' },
      { id: '2', name: 'Lin', role: 'Viewer' },
    ];
    const next = tpMergeInlineRows(rows, '2', { name: 'Linh', role: 'Owner' });
    expect(next[0]).toEqual(rows[0]);
    expect(next[1]).toEqual({ id: '2', name: 'Linh', role: 'Owner' });
  });

  it('tpMergeInlineRows leaves rows unchanged when id is unknown', () => {
    const rows: BrightrailTableRow[] = [{ id: '1', x: 1 }];
    expect(tpMergeInlineRows(rows, 'missing', { x: 2 })).toEqual(rows);
  });
});
