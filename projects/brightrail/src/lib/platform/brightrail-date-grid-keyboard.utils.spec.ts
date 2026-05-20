import { isDateGridNavigationKey, stepDateGridIndex } from './brightrail-date-grid-keyboard.utils';

describe('brightrail-date-grid-keyboard.utils', () => {
  it('detects grid navigation keys', () => {
    expect(isDateGridNavigationKey('ArrowDown')).toBeTrue();
    expect(isDateGridNavigationKey('Enter')).toBeFalse();
  });

  it('steps within a 7-column calendar grid', () => {
    expect(stepDateGridIndex(0, 'ArrowRight', 7, 35)).toBe(1);
    expect(stepDateGridIndex(7, 'ArrowUp', 7, 35)).toBe(0);
    expect(stepDateGridIndex(10, 'ArrowDown', 7, 35)).toBe(17);
    expect(stepDateGridIndex(10, 'Home', 7, 35)).toBe(7);
    expect(stepDateGridIndex(10, 'End', 7, 35)).toBe(13);
  });
});
