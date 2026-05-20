export type BrightrailTreeKeyAction =
  | 'none'
  | 'next'
  | 'prev'
  | 'expand'
  | 'collapse'
  | 'first'
  | 'last'
  | 'activate';

/** Maps keyboard events to tree navigation actions per WAI-ARIA tree APG. */
export function resolveTreeKeyAction(key: string): BrightrailTreeKeyAction {
  switch (key) {
    case 'ArrowDown':
      return 'next';
    case 'ArrowUp':
      return 'prev';
    case 'ArrowRight':
      return 'expand';
    case 'ArrowLeft':
      return 'collapse';
    case 'Home':
      return 'first';
    case 'End':
      return 'last';
    case 'Enter':
    case ' ':
      return 'activate';
    default:
      return 'none';
  }
}

export function stepTreeIndex(current: number, delta: 1 | -1, count: number): number {
  if (count <= 0) {
    return -1;
  }
  return Math.max(0, Math.min(current + delta, count - 1));
}
