const GRID_KEYS = new Set(['ArrowRight', 'ArrowLeft', 'ArrowDown', 'ArrowUp', 'Home', 'End']);

/** Returns the next grid cell index for calendar arrow-key navigation, or null if unhandled. */
export function stepDateGridIndex(
  index: number,
  key: string,
  columnCount: number,
  total: number,
): number | null {
  if (!GRID_KEYS.has(key) || total <= 0 || columnCount <= 0) {
    return null;
  }

  const row = Math.floor(index / columnCount);
  const col = index % columnCount;

  switch (key) {
    case 'ArrowRight':
      return Math.min(index + 1, total - 1);
    case 'ArrowLeft':
      return Math.max(index - 1, 0);
    case 'ArrowDown':
      return Math.min(index + columnCount, total - 1);
    case 'ArrowUp':
      return Math.max(index - columnCount, 0);
    case 'Home':
      return row * columnCount;
    case 'End':
      return Math.min(row * columnCount + (columnCount - 1), total - 1);
    default:
      return null;
  }
}

export function isDateGridNavigationKey(key: string): boolean {
  return GRID_KEYS.has(key);
}
