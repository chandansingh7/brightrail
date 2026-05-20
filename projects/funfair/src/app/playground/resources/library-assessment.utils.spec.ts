import { missingItemsToTableRows, priorityBadgeColor } from './library-assessment.utils';
import type { LibraryMissingItem } from './library-assessment.content';

describe('library-assessment.utils', () => {
  const sample: LibraryMissingItem = {
    priority: 'High',
    name: 'Rich text editor',
    why: 'Content workflows',
    note: 'Optional note',
    showcaseRoute: 'graph/catalog',
  };

  it('maps priority to badge colors', () => {
    expect(priorityBadgeColor('High')).toBe('danger');
    expect(priorityBadgeColor('Medium')).toBe('warning');
    expect(priorityBadgeColor('Lower')).toBe('neutral');
  });

  it('maps missing items to table rows with stable ids', () => {
    const rows = missingItemsToTableRows([sample]);
    expect(rows[0]['id']).toBe('Rich text editor');
    expect(rows[0]['showcaseRoute']).toBe('graph/catalog');
    expect(rows[0]['note']).toBe('Optional note');
  });
});
