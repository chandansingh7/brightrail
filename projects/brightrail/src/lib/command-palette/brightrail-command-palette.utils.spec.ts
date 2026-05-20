import { filterCommandPaletteItems, groupCommandPaletteItems } from './brightrail-command-palette.utils';

describe('brightrail-command-palette.utils', () => {
  const items = [
    { id: 'a', label: 'Open settings', group: 'General', keywords: ['prefs'] },
    { id: 'b', label: 'Sign out', group: 'Account', disabled: true },
    { id: 'c', label: 'New file', shortcut: 'Ctrl+N' },
  ];

  it('filterCommandPaletteItems matches label and keywords', () => {
    expect(filterCommandPaletteItems(items, 'prefs').map((i) => i.id)).toEqual(['a']);
    expect(filterCommandPaletteItems(items, '').map((i) => i.id)).toEqual(['a', 'c']);
  });

  it('groupCommandPaletteItems buckets by group', () => {
    const groups = groupCommandPaletteItems(filterCommandPaletteItems(items, ''));
    expect(groups.some((g) => g.group === 'General' && g.items.length === 1)).toBeTrue();
    expect(groups.some((g) => g.group === '' && g.items.some((i) => i.id === 'c'))).toBeTrue();
  });
});
