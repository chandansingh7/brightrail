import {
  addMonths,
  buildMonthGrid,
  compareDay,
  daysInMonth,
  firstDayOfMonthFrom,
  formatBrightrailDate,
  isSameDay,
  startOfMonth,
  stripTime,
  weekdayColumnIndex,
} from './date-picker-cal.utils';

describe('date-picker-cal.utils', () => {
  it('stripTime removes time portion', () => {
    const d = new Date(2026, 4, 7, 15, 30, 45);
    const n = stripTime(d);
    expect(n.getHours()).toBe(0);
    expect(n.getMinutes()).toBe(0);
    expect(n.getDate()).toBe(7);
  });

  it('compareDay orders calendar dates ignoring time', () => {
    const a = new Date(2026, 0, 2, 23, 59);
    const b = new Date(2026, 0, 3, 1, 0);
    expect(compareDay(a, b)).toBeLessThan(0);
    expect(isSameDay(a, new Date(2026, 0, 2, 1))).toBeTrue();
  });

  it('daysInMonth handles leap February', () => {
    expect(daysInMonth(2024, 1)).toBe(29);
    expect(daysInMonth(2025, 1)).toBe(28);
  });

  it('addMonths crosses year boundary', () => {
    const d = addMonths(new Date(2026, 11, 31), 1);
    expect(d.getFullYear()).toBe(2027);
    expect(d.getMonth()).toBe(0);
  });

  it('weekdayColumnIndex aligns to week start', () => {
    const wed = new Date(2026, 4, 6);
    expect(weekdayColumnIndex(wed, 'sunday')).toBe(3);
    expect(weekdayColumnIndex(wed, 'monday')).toBe(2);
    const sun = new Date(2026, 4, 3);
    expect(weekdayColumnIndex(sun, 'monday')).toBe(6);
  });

  it('buildMonthGrid produces 42 cells starting on correct weekday', () => {
    const may2026 = new Date(2026, 4, 15);
    const gridSunday = buildMonthGrid(may2026, 'sunday');
    expect(gridSunday.length).toBe(42);
    expect(gridSunday[0].date.getDay()).toBe(0);
    expect(gridSunday.filter((c) => c.inMonth).length).toBe(31);
    const gridMonday = buildMonthGrid(may2026, 'monday');
    expect(gridMonday[0].date.getDay()).toBe(1);
  });

  it('startOfMonth and firstDayOfMonthFrom are consistent', () => {
    const d = new Date(2026, 7, 19);
    expect(startOfMonth(d).getDate()).toBe(1);
    expect(+firstDayOfMonthFrom(d)).toBe(+startOfMonth(d));
  });

  it('formatBrightrailDate supports tokens', () => {
    const d = new Date(2026, 4, 7);
    expect(formatBrightrailDate(d, 'MM/dd/yyyy')).toBe('05/07/2026');
    expect(formatBrightrailDate(d, 'dd/MM/yyyy')).toBe('07/05/2026');
    expect(formatBrightrailDate(d, 'long', 'en-US')).toMatch(/May/);
    expect(formatBrightrailDate(d, 'monthYear', 'en-US')).toMatch(/2026/);
  });
});
