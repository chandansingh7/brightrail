import type { BrightrailCommandPaletteItem } from './brightrail-command-palette.types';

/** Case-insensitive filter across label, group, keywords, and shortcut. */
export function filterCommandPaletteItems(
  items: BrightrailCommandPaletteItem[],
  query: string,
): BrightrailCommandPaletteItem[] {
  const q = query.trim().toLowerCase();
  if (!q) {
    return items.filter((item) => !item.disabled);
  }
  return items.filter((item) => {
    if (item.disabled) {
      return false;
    }
    const haystack = [
      item.label,
      item.group ?? '',
      item.shortcut ?? '',
      ...(item.keywords ?? []),
    ]
      .join(' ')
      .toLowerCase();
    return haystack.includes(q);
  });
}

/** Group filtered items by `group` (ungrouped bucket last). */
export function groupCommandPaletteItems(
  items: BrightrailCommandPaletteItem[],
): { group: string; items: BrightrailCommandPaletteItem[] }[] {
  const map = new Map<string, BrightrailCommandPaletteItem[]>();
  for (const item of items) {
    const key = item.group?.trim() || '';
    const bucket = map.get(key) ?? [];
    bucket.push(item);
    map.set(key, bucket);
  }
  const groups = [...map.entries()].sort(([a], [b]) => {
    if (!a) return 1;
    if (!b) return -1;
    return a.localeCompare(b);
  });
  return groups.map(([group, groupItems]) => ({ group, items: groupItems }));
}
