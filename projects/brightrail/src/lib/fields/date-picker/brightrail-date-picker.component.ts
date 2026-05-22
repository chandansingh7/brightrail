import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  afterNextRender,
  computed,
  effect,
  forwardRef,
  inject,
  input,
  output,
  signal,
  untracked,
} from '@angular/core';
import { BRIGHTRAIL_FX_SHELL_HOST } from '../../futuristic/brightrail-futuristic-host';
import { DOCUMENT, NgStyle } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { fromEvent } from 'rxjs';

import {
  BrightrailButtonIcon,
  BrightrailButtonIconComponent,
} from '../../buttons/brightrail-button-icon.component';
import {
  BrightrailTextFieldLabelPosition,
  BrightrailTextFieldShape,
  BrightrailTextFieldSize,
  BrightrailTextFieldStatus,
} from '../text-field/brightrail-text-field.component';
import {
  BrightrailDateFormatId,
  BrightrailWeekStart,
  addMonths,
  buildMonthGrid,
  compareDay,
  firstDayOfMonthFrom,
  formatBrightrailDate,
  isSameDay,
  startOfMonth,
  stripTime,
} from './date-picker-cal.utils';
import {
  isDateGridNavigationKey,
  stepDateGridIndex,
} from '../../platform/brightrail-date-grid-keyboard.utils';
import { BrightrailAnchoredPanelController } from '../../platform/brightrail-anchored-panel.controller';

export type {
  BrightrailDateFormatId,
  BrightrailWeekStart,
} from './date-picker-cal.utils';

const STATUS_HINTS: Record<Exclude<BrightrailTextFieldStatus, 'none'>, string> = {
  success: 'Looks good!',
  warning: 'Please verify this information.',
  error: 'This field is required.',
  info: 'Enter details to continue.',
};

export type BrightrailDatePickerType = 'single' | 'range' | 'month' | 'inline';

export type BrightrailDatePickerAppearance =
  | 'filled'
  | 'soft'
  | 'outlined'
  | 'tonal'
  | 'pill'
  | 'underline'
  | 'readonly';
export type BrightrailDatePickerRangeCommitMode = 'apply' | 'instant';
export type BrightrailDatePickerRangeEndStyle = 'outline' | 'pill';
export type BrightrailDatePickerTextAlign = 'left' | 'center' | 'right';
export type BrightrailDatePickerTone = 'default' | 'teal' | 'violet' | 'rose' | 'amber';

export interface BrightrailDateRange {
  start: Date | null;
  end: Date | null;
}

export type BrightrailDatePickerChange =
  | { kind: 'single'; date: Date | null }
  | { kind: 'range'; range: BrightrailDateRange }
  | { kind: 'month'; date: Date | null };

@Component({
  selector: 'brightrail-date-picker',
  hostDirectives: [BRIGHTRAIL_FX_SHELL_HOST],
  standalone: true,
  imports: [BrightrailButtonIconComponent, NgStyle],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BrightrailDatePickerComponent),
      multi: true,
    },
  ],
  host: {
    '[class.br-dp-host--full]': 'fullWidth()',
  },
  templateUrl: './brightrail-date-picker.component.html',
  styleUrl: './brightrail-date-picker.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrightrailDatePickerComponent implements ControlValueAccessor {
  private static nextId = 0;
  private readonly uid = `br-dp-${BrightrailDatePickerComponent.nextId++}`;
  private readonly host = inject(ElementRef<HTMLElement>);
  private readonly document = inject(DOCUMENT);
  private readonly destroyRef = inject(DestroyRef);
  private readonly anchoredPanel = new BrightrailAnchoredPanelController(this.document, this.destroyRef);

  /** `single` — one day; `range` — start/end; `month` — month+year; `inline` — always-visible calendar. */
  readonly type = input<BrightrailDatePickerType>('single');
  readonly appearance = input<BrightrailDatePickerAppearance>('outlined');
  readonly status = input<BrightrailTextFieldStatus>('none');
  readonly size = input<BrightrailTextFieldSize>('md');
  readonly shape = input<BrightrailTextFieldShape>('default');
  readonly placeholder = input('Choose a date');
  readonly label = input<string | undefined>(undefined);
  readonly labelPosition = input<BrightrailTextFieldLabelPosition>('none');
  readonly required = input(false);
  readonly helperText = input<string | undefined>(undefined);
  readonly disabled = input(false);
  readonly fullWidth = input(false);
  /** Force panel visible (useful for docs/playgrounds). */
  readonly open = input(false);
  /** `apply` keeps draft until footer Apply; `instant` commits as soon as end date is selected. */
  readonly rangeCommitMode = input<BrightrailDatePickerRangeCommitMode>('apply');
  /** End-point chip style for range: outlined ring or solid pill. */
  readonly rangeEndStyle = input<BrightrailDatePickerRangeEndStyle>('outline');
  /** Alignment of selected date text inside trigger field. */
  readonly textAlign = input<BrightrailDatePickerTextAlign>('left');
  /** Optional trigger width when `fullWidth` is false (e.g. `22rem`, `320px`, `100%`). */
  readonly fieldWidth = input('');
  /** Allow selecting a start/end range when `type="range"`. */
  readonly rangeEnabled = input(true);
  /** Preset visual tone for selected/range states. */
  readonly tone = input<BrightrailDatePickerTone>('default');
  /** Optional custom selected-day background color (CSS color value). */
  readonly selectedDateColor = input('');
  /** Optional custom selected-day text color (CSS color value). */
  readonly selectedDateTextColor = input('');
  /** Optional custom range-fill color (CSS color value). */
  readonly rangeColor = input('');
  /** Optional custom range text color (CSS color value). */
  readonly rangeTextColor = input('');
  readonly showIcon = input(true);
  readonly clearable = input(false);
  readonly weekStart = input<BrightrailWeekStart>('sunday');
  readonly format = input<BrightrailDateFormatId>('MM/dd/yyyy');
  readonly locale = input<string | undefined>(undefined);
  readonly disableWeekends = input(false);
  readonly minDate = input<Date | null>(null);
  readonly maxDate = input<Date | null>(null);

  readonly inputId = input<string | undefined>(undefined);
  readonly ariaLabel = input<string | undefined>(undefined);

  readonly dateFilter = input<(d: Date) => boolean>((_) => false);

  readonly dateChange = output<BrightrailDatePickerChange>();

  protected readonly panelOpen = signal(false);
  protected readonly viewMonth = signal(startOfMonth(new Date()));
  private readonly disabledFromCva = signal(false);

  /** Committed ControlValueAccessor value. */
  protected readonly inner = signal<Date | BrightrailDateRange | null>(null);

  /** Staged selection for range picker before Apply. */
  protected readonly rangeDraft = signal<BrightrailDateRange>({ start: null, end: null });

  private onChange: (v: Date | BrightrailDateRange | null) => void = () => {};
  private onTouched: () => void = () => {};

  readonly controlId = computed(() => this.inputId() ?? this.uid);
  readonly externalLabelId = computed(() => `${this.controlId()}-label`);
  readonly insetLabelId = computed(() => `${this.controlId()}-inset-label`);
  readonly hintId = computed(() => `${this.controlId()}-hint`);

  readonly showLabel = computed(
    () => this.labelPosition() !== 'none' && !!this.label()?.trim(),
  );

  readonly effectiveDisabled = computed(() => this.disabled() || this.disabledFromCva());

  readonly resolvedHintText = computed((): string | undefined => {
    const custom = this.helperText()?.trim();
    if (custom) {
      return custom;
    }
    const s = this.status();
    if (s === 'none') return undefined;
    return STATUS_HINTS[s];
  });

  readonly viewMonthRight = computed(() => addMonths(this.viewMonth(), 1));

  readonly panelTitleLeft = computed(() =>
    formatBrightrailDate(this.viewMonth(), 'monthYear', this.locale() ?? undefined),
  );
  readonly panelTitleRight = computed(() =>
    formatBrightrailDate(this.viewMonthRight(), 'monthYear', this.locale() ?? undefined),
  );

  readonly monthNamesShort = computed(() => {
    const loc = this.locale();
    return Array.from({ length: 12 }, (_, i) =>
      new Date(2000, i, 1).toLocaleDateString(loc, { month: 'short' }),
    );
  });

  readonly leftCells = computed(() => buildMonthGrid(this.viewMonth(), this.weekStart()));
  readonly rightCells = computed(() => buildMonthGrid(this.viewMonthRight(), this.weekStart()));

  readonly weekdayLabels = computed((): string[] => {
    if (this.weekStart() === 'sunday') {
      return ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    }
    return ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
  });

  readonly displayFormat = computed((): BrightrailDateFormatId => {
    if (this.type() === 'month') {
      return this.format() === 'long' ? 'long' : 'monthYear';
    }
    return this.format();
  });

  readonly triggerText = computed((): string => {
    const t = this.type();
    const loc = this.locale();
    const df = this.displayFormat();
    const v = this.inner();
    if (t === 'range') {
      const r =
        this.rangeCommitMode() === 'instant' && (this.open() || this.panelOpen())
          ? this.rangeDraft()
          : this.asRange(v);
      if (!r.start && !r.end) return '';
      if (r.start && r.end) {
        return `${formatBrightrailDate(r.start, df, loc)} – ${formatBrightrailDate(r.end, df, loc)}`;
      }
      if (r.start) {
        return formatBrightrailDate(r.start, df, loc);
      }
      return '';
    }
    if (v instanceof Date) {
      return formatBrightrailDate(v, df, loc);
    }
    return '';
  });

  readonly showPlaceholder = computed(() => this.triggerText().length === 0);

  readonly triggerWrapClass = computed(() => {
    const base = this.appearance();
    const mapBase =
      base === 'outlined' || base === 'soft'
        ? 'outlined'
        : base === 'tonal'
          ? 'filled'
          : base === 'pill'
            ? 'outlined'
          : base === 'underline' || base === 'readonly'
            ? base
            : 'filled';
    const parts = [
      'br-tf__wrap',
      `br-tf__wrap--${mapBase}`,
      `br-tf__wrap--sz-${this.size()}`,
      `br-dp__trigger`,
      `br-dp__trigger--${base}`,
    ];
    const sh = this.shape();
    if (sh !== 'default') {
      parts.push(`br-tf__wrap--shape-${sh}`);
    } else if (base === 'pill') {
      // `appearance="pill"` should visually become pill even when shape is default.
      parts.push('br-tf__wrap--shape-pill');
    }
    if (this.labelPosition() === 'inset' && this.showLabel()) {
      parts.push('br-tf__wrap--inset-label');
    }
    const s = this.status();
    if (s !== 'none') {
      parts.push(`br-tf__wrap--status-${s}`);
    }
    return parts.join(' ');
  });

  readonly triggerWidth = computed(() => {
    if (this.fullWidth()) return '100%';
    const raw = `${this.fieldWidth() ?? ''}`.trim();
    return raw.length > 0 ? raw : null;
  });

  readonly hostStyleVars = computed((): Record<string, string | null> => {
    const tone = this.tone();
    const presetMap: Record<BrightrailDatePickerTone, { selected: string; selectedText: string; range: string }> = {
      default: { selected: '#0062ff', selectedText: '#ffffff', range: 'rgb(0 98 255 / 12%)' },
      teal: { selected: '#0f766e', selectedText: '#ffffff', range: 'rgb(15 118 110 / 16%)' },
      violet: { selected: '#6d28d9', selectedText: '#ffffff', range: 'rgb(109 40 217 / 16%)' },
      rose: { selected: '#be185d', selectedText: '#ffffff', range: 'rgb(190 24 93 / 16%)' },
      amber: { selected: '#b45309', selectedText: '#ffffff', range: 'rgb(180 83 9 / 16%)' },
    };
    const preset = presetMap[tone];
    const selected = this.selectedDateColor().trim() || preset.selected;
    const selectedText = this.selectedDateTextColor().trim() || preset.selectedText;
    const range = this.rangeColor().trim() || preset.range;
    const rangeText = this.rangeTextColor().trim() || selectedText;
    return {
      '--br-dp-selected-bg': selected,
      '--br-dp-selected-fg': selectedText,
      '--br-dp-range-bg': range,
      '--br-dp-range-fg': rangeText,
    };
  });

  readonly statusTrailingIcon = computed((): BrightrailButtonIcon => {
    switch (this.status()) {
      case 'success':
        return 'check';
      case 'warning':
        return 'warning';
      case 'error':
        return 'error';
      case 'info':
        return 'info';
      default:
        return 'none';
    }
  });

  readonly showClear = computed(
    () =>
      this.clearable() &&
      !this.showPlaceholder() &&
      !this.effectiveDisabled() &&
      this.type() !== 'inline',
  );

  readonly monthPickerYear = computed(() => this.viewMonth().getFullYear());

  constructor() {
    effect(() => {
      const popupVisible =
        this.type() !== 'inline' && (this.panelOpen() || this.open());
      if (!popupVisible) {
        this.anchoredPanel.detach();
        return;
      }
      untracked(() => {
        queueMicrotask(() => {
          const stillVisible =
            this.type() !== 'inline' && (this.panelOpen() || this.open());
          if (!stillVisible) {
            return;
          }
          const control = this.host.nativeElement.querySelector('.br-dp__control') as HTMLElement | null;
          const panel = this.host.nativeElement.querySelector(
            '.br-dp__panel:not(.br-dp__panel--inline)',
          ) as HTMLElement | null;
          if (control && panel) {
            this.anchoredPanel.attach(control, panel, {
              gap: 6,
              maxHeight: 420,
              zIndex: 1100,
              viewportPadding: 8,
            });
          }
        });
      });
    });

    afterNextRender(() => {
      fromEvent(this.document, 'click', { capture: true })
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe((ev) => {
          if (!this.panelOpen()) {
            return;
          }
          if (this.type() === 'inline') {
            return;
          }
          const t = ev.target;
          if (!(t instanceof Node)) {
            return;
          }
          const inside = this.anchoredPanel.isAttached()
            ? this.anchoredPanel.contains(t)
            : this.anchoredPanel.contains(t, this.host.nativeElement);
          if (!inside) {
            this.closePanelWithoutCommit();
          }
        });

      fromEvent<KeyboardEvent>(this.document, 'keydown', { capture: true })
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe((ev) => {
          if (!this.panelOpen()) return;
          if (ev.key === 'Escape') {
            ev.preventDefault();
            this.closePanelWithoutCommit();
          }
        });
    });
  }

  writeValue(val: Date | BrightrailDateRange | null | undefined): void {
    this.inner.set(this.normalizeInbound(val ?? null));
    if (this.type() === 'range') {
      this.rangeDraft.set({ ...this.asRange(this.inner()) });
    }
    const seed = this.focusDateFromValue();
    if (seed) {
      this.viewMonth.set(startOfMonth(seed));
    }
  }

  registerOnChange(fn: (v: Date | BrightrailDateRange | null) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabledFromCva.set(isDisabled);
  }

  togglePanel(ev: MouseEvent): void {
    ev.preventDefault();
    if (this.open()) {
      return;
    }
    if (this.effectiveDisabled()) {
      return;
    }
    const next = !this.panelOpen();
    if (next) {
      this.openPanel();
    } else {
      this.closePanelWithoutCommit();
    }
  }

  openPanel(): void {
    const seed = this.focusDateFromValue();
    if (seed) {
      this.viewMonth.set(startOfMonth(seed));
    }
    if (this.type() === 'range') {
      this.rangeDraft.set({ ...this.asRange(this.inner()) });
    }
    this.panelOpen.set(true);
    this.onTouched();
  }

  closePanelWithoutCommit(): void {
    this.panelOpen.set(false);
    if (this.type() === 'range') {
      this.rangeDraft.set({ ...this.asRange(this.inner()) });
    }
  }

  clearRangeDraft(): void {
    this.rangeDraft.set({ start: null, end: null });
  }

  clearRangeCommittedAndClose(): void {
    this.commitEmpty();
    this.panelOpen.set(false);
  }

  clearTrigger(ev: MouseEvent): void {
    ev.preventDefault();
    ev.stopPropagation();
    if (this.effectiveDisabled()) {
      return;
    }
    this.commitEmpty();
    if (this.panelOpen()) {
      this.panelOpen.set(false);
    }
  }

  commitEmpty(): void {
    if (this.type() === 'range') {
      const empty: BrightrailDateRange = { start: null, end: null };
      this.inner.set(empty);
      this.rangeDraft.set({ ...empty });
      this.onChange(empty);
      this.dateChange.emit({ kind: 'range', range: empty });
      return;
    }
    this.inner.set(null);
    this.onChange(null);
    this.dateChange.emit(
      this.type() === 'month' ? { kind: 'month', date: null } : { kind: 'single', date: null },
    );
  }

  onDayClick(d: Date): void {
    if (this.isDayDisabled(d)) {
      return;
    }
    const day = stripTime(d);
    const t = this.type();
    if (t === 'single' || t === 'inline') {
      this.inner.set(day);
      this.onChange(day);
      this.dateChange.emit({ kind: 'single', date: day });
      if (t === 'single') {
        this.panelOpen.set(false);
      }
      return;
    }
    if (t === 'range') {
      if (!this.rangeEnabled()) {
        return;
      }
      const cur = this.rangeDraft();
      let start = cur.start;
      let end = cur.end;
      if (!start || (start && end)) {
        start = day;
        end = null;
      } else {
        end = day;
        if (compareDay(end, start) < 0) {
          const tmp = start;
          start = end;
          end = tmp;
        }
      }
      this.rangeDraft.set({ start, end });
      if (start && end && this.rangeCommitMode() === 'instant') {
        const r: BrightrailDateRange = { start, end };
        this.inner.set(r);
        this.onChange(r);
        this.dateChange.emit({ kind: 'range', range: r });
        if (!this.open()) {
          this.panelOpen.set(false);
        }
      }
      return;
    }
  }

  applyRange(): void {
    const { start, end } = this.rangeDraft();
    if (!start || !end) {
      return;
    }
    const r: BrightrailDateRange = { start, end };
    this.inner.set(r);
    this.onChange(r);
    this.dateChange.emit({ kind: 'range', range: r });
    this.panelOpen.set(false);
  }

  setTodaySingle(): void {
    const t = stripTime(new Date());
    if (this.isDayDisabled(t)) {
      return;
    }
    this.inner.set(t);
    this.onChange(t);
    this.dateChange.emit({ kind: 'single', date: t });
    this.viewMonth.set(startOfMonth(t));
    this.panelOpen.set(false);
  }

  navMonth(delta: number): void {
    this.viewMonth.update((m) => addMonths(m, delta));
  }

  navYear(delta: number): void {
    this.viewMonth.update((m) => addMonths(m, delta * 12));
  }

  selectMonthCell(monthIndex: number): void {
    const y = this.monthPickerYear();
    const next = firstDayOfMonthFrom(new Date(y, monthIndex, 1));
    this.inner.set(next);
    this.onChange(next);
    this.dateChange.emit({ kind: 'month', date: next });
    this.panelOpen.set(false);
  }

  isDayDisabled(d: Date): boolean {
    const day = stripTime(d);
    const min = this.minDate();
    const max = this.maxDate();
    if (min && compareDay(day, stripTime(min)) < 0) {
      return true;
    }
    if (max && compareDay(day, stripTime(max)) > 0) {
      return true;
    }
    if (this.disableWeekends()) {
      const w = day.getDay();
      if (w === 0 || w === 6) {
        return true;
      }
    }
    try {
      return this.dateFilter()(day);
    } catch {
      return false;
    }
  }

  isToday(d: Date): boolean {
    return isSameDay(d, new Date());
  }

  isSelectedSingle(d: Date): boolean {
    const v = this.inner();
    if (!(v instanceof Date)) {
      return false;
    }
    return isSameDay(v, d);
  }

  rangeState(
    d: Date,
  ): 'none' | 'start' | 'end' | 'between' | 'single-bridge' {
    const t = this.type();
    const day = stripTime(d);
    const active =
      t === 'inline' || (this.open() && t === 'range') || this.panelOpen()
        ? this.rangeDraft()
        : this.asRange(this.inner());
    const { start, end } = active;
    if (!start) {
      return 'none';
    }
    if (!end) {
      return isSameDay(day, start) ? 'start' : 'none';
    }
    if (isSameDay(day, start) && isSameDay(day, end)) {
      return 'start';
    }
    if (isSameDay(day, start)) {
      return 'start';
    }
    if (isSameDay(day, end)) {
      return 'end';
    }
    if (compareDay(day, start) > 0 && compareDay(day, end) < 0) {
      return 'between';
    }
    return 'none';
  }

  isSelectedMonth(monthIndex: number): boolean {
    const v = this.inner();
    if (!(v instanceof Date)) {
      return false;
    }
    return v.getFullYear() === this.monthPickerYear() && v.getMonth() === monthIndex;
  }

  triggerAriaLabelledBy(): string | null {
    if (!this.showLabel()) {
      return null;
    }
    if (this.labelPosition() === 'inset') {
      return this.insetLabelId();
    }
    return this.externalLabelId();
  }

  private focusDateFromValue(): Date | null {
    const t = this.type();
    const v = this.inner();
    if (t === 'range') {
      const r = this.asRange(v);
      return r.start ?? r.end;
    }
    if (v instanceof Date) {
      return v;
    }
    return null;
  }

  private asRange(v: Date | BrightrailDateRange | null): BrightrailDateRange {
    if (v && typeof v === 'object' && !(v instanceof Date) && 'start' in v && 'end' in v) {
      const o = v as BrightrailDateRange;
      return {
        start: o.start ? stripTime(o.start) : null,
        end: o.end ? stripTime(o.end) : null,
      };
    }
    return { start: null, end: null };
  }

  private normalizeInbound(
    val: Date | BrightrailDateRange | null,
  ): Date | BrightrailDateRange | null {
    const mode = this.type();
    if (mode === 'range') {
      if (val == null) {
        return { start: null, end: null };
      }
      if (typeof val === 'object' && val !== null && !(val instanceof Date)) {
        const r = this.asRange(val);
        return { start: r.start, end: r.end };
      }
      return { start: null, end: null };
    }
    if (val == null || !(val instanceof Date)) {
      return null;
    }
    return mode === 'month' ? firstDayOfMonthFrom(stripTime(val)) : stripTime(val);
  }

  onDayCellKeydown(ev: KeyboardEvent, cellIndex: number, gridId: string): void {
    if (!isDateGridNavigationKey(ev.key)) {
      return;
    }
    ev.preventDefault();
    const grid = this.host.nativeElement.querySelector(`#${CSS.escape(gridId)}`) as HTMLElement | null;
    if (!grid) {
      return;
    }
    const buttons = Array.from(
      grid.querySelectorAll('.br-dp__cell'),
    ) as HTMLButtonElement[];
    const nextIndex = stepDateGridIndex(cellIndex, ev.key, 7, buttons.length);
    if (nextIndex == null) {
      return;
    }
    buttons[nextIndex]?.focus();
  }
}
