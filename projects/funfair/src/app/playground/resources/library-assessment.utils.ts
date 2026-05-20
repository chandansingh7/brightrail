import type { BrightrailBadgeColor } from 'brightrail';

import type { LibraryMissingItem } from './library-assessment.content';

export function priorityBadgeColor(priority: LibraryMissingItem['priority']): BrightrailBadgeColor {
  switch (priority) {
    case 'High':
      return 'danger';
    case 'Medium':
      return 'warning';
    default:
      return 'neutral';
  }
}

export function missingItemsToTableRows(items: readonly LibraryMissingItem[]): Record<string, unknown>[] {
  return items.map((item) => ({
    id: item.name,
    priority: item.priority,
    name: item.name,
    why: item.why,
    note: item.note ?? '',
    showcaseRoute: item.showcaseRoute ?? '',
  }));
}
