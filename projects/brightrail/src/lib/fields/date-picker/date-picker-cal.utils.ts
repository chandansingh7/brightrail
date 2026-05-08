/** Normalizes to local date at midnight (no time component). */
export function stripTime(d: Date): Date {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}

export function startOfMonth(d: Date): Date {
  return new Date(d.getFullYear(), d.getMonth(), 1);
}

export function addMonths(d: Date, delta: number): Date {
  const x = new Date(d);
  x.setMonth(x.getMonth() + delta);
  return x;
}

export function compareDay(a: Date, b: Date): number {
  return stripTime(a).getTime() - stripTime(b).getTime();
}

export function isSameDay(a: Date, b: Date): boolean {
  return compareDay(a, b) === 0;
}

export function daysInMonth(year: number, monthIndexZeroBased: number): number {
  return new Date(year, monthIndexZeroBased + 1, 0).getDate();
}

export type BrightrailWeekStart = 'sunday' | 'monday';

/**
 * Calendar column index for `d`'s weekday, 0..6, based on week start.
 * 0 = first column (Sunday or Monday per `weekStart`).
 */
export function weekdayColumnIndex(d: Date, weekStart: BrightrailWeekStart): number {
  const sun0 = d.getDay();
  if (weekStart === 'sunday') {
    return sun0;
  }
  return sun0 === 0 ? 6 : sun0 - 1;
}

export interface BrightrailCalendarCell {
  date: Date;
  inMonth: boolean;
}

/** 6 rows × 7 columns = 42 cells for month grid. */
export function buildMonthGrid(anchorMonth: Date, weekStart: BrightrailWeekStart): BrightrailCalendarCell[] {
  const first = startOfMonth(anchorMonth);
  const lead = weekdayColumnIndex(first, weekStart);
  const year = first.getFullYear();
  const month = first.getMonth();
  const gridStart = new Date(year, month, 1 - lead);
  const cells: BrightrailCalendarCell[] = [];
  for (let i = 0; i < 42; i++) {
    const date = new Date(gridStart.getFullYear(), gridStart.getMonth(), gridStart.getDate() + i);
    cells.push({
      date,
      inMonth: date.getMonth() === month,
    });
  }
  return cells;
}

export type BrightrailDateFormatId =
  | 'MM/dd/yyyy'
  | 'dd/MM/yyyy'
  /** e.g. "May 20, 2025" in `locale` */
  | 'long'
  /** e.g. "May 2025" */
  | 'monthYear';

export function formatBrightrailDate(
  d: Date,
  format: BrightrailDateFormatId,
  locale?: string,
): string {
  if (format === 'long') {
    return d.toLocaleDateString(locale, { month: 'long', day: 'numeric', year: 'numeric' });
  }
  if (format === 'monthYear') {
    return d.toLocaleDateString(locale, { month: 'long', year: 'numeric' });
  }
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  const yyyy = d.getFullYear();
  if (format === 'dd/MM/yyyy') {
    return `${dd}/${mm}/${yyyy}`;
  }
  return `${mm}/${dd}/${yyyy}`;
}

export function firstDayOfMonthFrom(d: Date): Date {
  return new Date(d.getFullYear(), d.getMonth(), 1);
}

export function clampDayToMonth(year: number, monthIndex: number, day: number): Date {
  const dim = daysInMonth(year, monthIndex);
  const d = Math.min(Math.max(day, 1), dim);
  return new Date(year, monthIndex, d);
}
