/** Selectors for enabled options inside a listbox panel. */
export const BRIGHTRAIL_LISTBOX_OPTION_SELECTOR =
  '[role="option"]:not([disabled]), button.br-select-option:not([disabled]), button.br-combobox__option:not([disabled]), .br-select-panel button:not([disabled])';

export type BrightrailListboxKeyAction =
  | 'none'
  | 'next'
  | 'prev'
  | 'first'
  | 'last'
  | 'select'
  | 'close';

/** Maps keyboard events to listbox navigation actions per WAI-ARIA APG. */
export function resolveListboxKeyAction(key: string): BrightrailListboxKeyAction {
  switch (key) {
    case 'ArrowDown':
      return 'next';
    case 'ArrowUp':
      return 'prev';
    case 'Home':
      return 'first';
    case 'End':
      return 'last';
    case 'Enter':
    case ' ':
      return 'select';
    case 'Escape':
    case 'Tab':
      return 'close';
    default:
      return 'none';
  }
}

/** Returns enabled option elements inside a listbox container. */
export function queryEnabledListboxOptions(listbox: HTMLElement): HTMLElement[] {
  return Array.from(
    listbox.querySelectorAll<HTMLElement>(BRIGHTRAIL_LISTBOX_OPTION_SELECTOR),
  ).filter(
    (el) => !el.hasAttribute('disabled') && el.getAttribute('aria-disabled') !== 'true',
  );
}

/** Ensures each option has a stable id and listbox-appropriate ARIA attrs. */
export function ensureListboxOptionIds(options: readonly HTMLElement[], prefix: string): void {
  options.forEach((el, index) => {
    if (!el.id) {
      el.id = `${prefix}-opt-${index}`;
    }
    if (!el.getAttribute('role')) {
      el.setAttribute('role', 'option');
    }
    el.tabIndex = -1;
  });
}

export function stepListboxIndex(current: number, delta: 1 | -1, count: number): number {
  if (count <= 0) {
    return -1;
  }
  if (current < 0) {
    return delta > 0 ? 0 : count - 1;
  }
  return (current + delta + count) % count;
}

export function clampListboxIndex(index: number, count: number): number {
  if (count <= 0) {
    return -1;
  }
  return Math.max(0, Math.min(index, count - 1));
}

/** Activates an option via programmatic click (respects existing handlers). */
export function activateListboxOption(option: HTMLElement): void {
  option.click();
}
