import { resolveTreeKeyAction, stepTreeIndex } from './brightrail-tree-keyboard.utils';

describe('brightrail-tree-keyboard.utils', () => {
  it('maps tree navigation keys', () => {
    expect(resolveTreeKeyAction('ArrowDown')).toBe('next');
    expect(resolveTreeKeyAction('ArrowUp')).toBe('prev');
    expect(resolveTreeKeyAction('ArrowRight')).toBe('expand');
    expect(resolveTreeKeyAction('ArrowLeft')).toBe('collapse');
    expect(resolveTreeKeyAction('Home')).toBe('first');
    expect(resolveTreeKeyAction('End')).toBe('last');
    expect(resolveTreeKeyAction('Enter')).toBe('activate');
  });

  it('steps tree indices within bounds', () => {
    expect(stepTreeIndex(1, 1, 5)).toBe(2);
    expect(stepTreeIndex(4, 1, 5)).toBe(4);
    expect(stepTreeIndex(0, -1, 5)).toBe(0);
  });
});
