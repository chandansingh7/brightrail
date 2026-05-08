import { TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  BrightrailDateFormatId,
  BrightrailDatePickerAppearance,
  BrightrailDatePickerComponent,
  BrightrailDatePickerRangeCommitMode,
  BrightrailDatePickerRangeEndStyle,
  BrightrailDatePickerTextAlign,
  BrightrailDatePickerTone,
  BrightrailDatePickerType,
  BrightrailDateRange,
  BrightrailTextFieldShape,
  BrightrailTextFieldLabelPosition,
  BrightrailTextFieldStatus,
  BrightrailWeekStart,
} from 'brightrail';

import { PlaygroundThemeId, PlaygroundThemeService } from '../playground-theme.service';

type CodeTabId = 'html' | 'ts' | 'scss';

type DatePickerScenario =
  | 'single-popup'
  | 'range'
  | 'month'
  | 'inline'
  | 'validation'
  | 'enterprise-booking'
  | 'futuristic';

@Component({
  selector: 'app-date-picker-playground',
  standalone: true,
  imports: [FormsModule, TitleCasePipe, BrightrailDatePickerComponent],
  templateUrl: './date-picker-playground.component.html',
  styleUrl: './date-picker-playground.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatePickerPlaygroundComponent {
  readonly themeService = inject(PlaygroundThemeService);
  readonly ngModelStandalone = { standalone: true };

  readonly recipeGroups = ['Basics', 'Validation', 'Enterprise', 'Futuristic'] as const;
  readonly recipeOptions: { value: DatePickerScenario; label: string; group: string }[] = [
    { value: 'single-popup', label: 'Single (popup)', group: 'Basics' },
    { value: 'range', label: 'Range picker', group: 'Basics' },
    { value: 'month', label: 'Month picker', group: 'Basics' },
    { value: 'inline', label: 'Inline calendar', group: 'Basics' },
    { value: 'validation', label: 'Error + weekends', group: 'Validation' },
    { value: 'enterprise-booking', label: 'Booking form', group: 'Enterprise' },
    { value: 'futuristic', label: 'Futuristic accent', group: 'Futuristic' },
  ];

  readonly appearanceOptions: BrightrailDatePickerAppearance[] = [
    'outlined',
    'filled',
    'soft',
    'tonal',
    'pill',
    'underline',
    'readonly',
  ];
  readonly shapeOptions: BrightrailTextFieldShape[] = ['default', 'square', 'pill'];
  readonly sizeOptions = ['sm', 'md', 'lg'] as const;
  readonly labelPosOptions: BrightrailTextFieldLabelPosition[] = ['none', 'top', 'inset', 'left', 'right'];
  readonly formatOptions: BrightrailDateFormatId[] = ['MM/dd/yyyy', 'dd/MM/yyyy', 'long'];
  readonly weekOptions: BrightrailWeekStart[] = ['sunday', 'monday'];
  readonly textAlignOptions: BrightrailDatePickerTextAlign[] = ['left', 'center', 'right'];
  readonly toneOptions: BrightrailDatePickerTone[] = ['default', 'teal', 'violet', 'rose', 'amber'];
  readonly colorOptions: { value: string; label: string }[] = [
    { value: '', label: 'Auto' },
    { value: '#0062ff', label: 'Blue' },
    { value: '#0f766e', label: 'Teal' },
    { value: '#6d28d9', label: 'Violet' },
    { value: '#be185d', label: 'Rose' },
    { value: '#b45309', label: 'Amber' },
    { value: '#111827', label: 'Slate' },
  ];
  readonly rangeColorOptions: { value: string; label: string }[] = [
    { value: '', label: 'Auto' },
    { value: 'rgb(0 98 255 / 12%)', label: 'Blue soft' },
    { value: 'rgb(15 118 110 / 16%)', label: 'Teal soft' },
    { value: 'rgb(109 40 217 / 16%)', label: 'Violet soft' },
    { value: 'rgb(190 24 93 / 16%)', label: 'Rose soft' },
    { value: 'rgb(180 83 9 / 16%)', label: 'Amber soft' },
    { value: 'rgb(17 24 39 / 14%)', label: 'Slate soft' },
  ];
  readonly themeRowOptions: { id: PlaygroundThemeId; label: string }[] = [
    { id: 'light', label: 'Material light' },
    { id: 'dark', label: 'Material dark' },
  ];

  readonly selectedRecipeGroup = signal<string>('Basics');
  readonly scenario = signal<DatePickerScenario>('single-popup');

  readonly appearance = signal<BrightrailDatePickerAppearance>('outlined');
  readonly status = signal<BrightrailTextFieldStatus>('none');
  readonly size = signal<'sm' | 'md' | 'lg'>('md');
  readonly shape = signal<BrightrailTextFieldShape>('default');
  readonly disabledToggle = signal(false);
  readonly labelPosition = signal<BrightrailTextFieldLabelPosition>('top');
  readonly helperToggle = signal(true);
  readonly showIconToggle = signal(true);
  readonly openPanel = signal(false);
  readonly rangeCommitMode = signal<BrightrailDatePickerRangeCommitMode>('apply');
  readonly rangeEndStyle = signal<BrightrailDatePickerRangeEndStyle>('outline');
  readonly rangeEnabled = signal(true);
  readonly tone = signal<BrightrailDatePickerTone>('default');
  readonly selectedDateColor = signal('');
  readonly selectedDateTextColor = signal('');
  readonly rangeColor = signal('');
  readonly rangeTextColor = signal('');
  readonly textAlign = signal<BrightrailDatePickerTextAlign>('left');
  readonly fieldWidth = signal('22rem');
  readonly format = signal<BrightrailDateFormatId>('MM/dd/yyyy');
  readonly weekStartModel = signal<BrightrailWeekStart>('sunday');

  singleValue: Date | null = new Date(2026, 4, 20);
  rangeValue: BrightrailDateRange = {
    start: new Date(2026, 4, 18),
    end: new Date(2026, 4, 25),
  };
  monthValue: Date | null = new Date(2026, 4, 1);

  readonly activeTab = signal<CodeTabId>('html');

  readonly effectiveType = computed((): BrightrailDatePickerType => {
    switch (this.scenario()) {
      case 'single-popup':
      case 'validation':
      case 'futuristic':
        return 'single';
      case 'range':
      case 'enterprise-booking':
        return 'range';
      case 'month':
        return 'month';
      case 'inline':
        return 'inline';
      default:
        return 'single';
    }
  });

  readonly effectiveLabel = computed(() => {
    switch (this.scenario()) {
      case 'single-popup':
        return 'Select date';
      case 'range':
        return 'Travel dates';
      case 'month':
        return 'Billing period';
      case 'inline':
        return 'Visible calendar';
      case 'validation':
        return 'Check-out';
      case 'enterprise-booking':
        return 'Travel dates';
      case 'futuristic':
        return 'Choose date';
      default:
        return 'Date';
    }
  });

  readonly effectivePlaceholder = computed(() =>
    this.scenario() === 'range' ? 'Start – End' : 'Choose a date',
  );

  readonly effectiveHelper = computed(() => {
    if (!this.helperToggle()) {
      return undefined;
    }
    switch (this.scenario()) {
      case 'range':
        return 'Select your departure and return dates.';
      case 'validation':
        return 'Select a check-out date.';
      case 'month':
        return 'Whole-month selection.';
      case 'enterprise-booking':
        return 'Select your departure and return dates.';
      case 'futuristic':
        return 'Experimental style preview.';
      default:
        return 'Tip: use footer actions or type-based shortcuts in your host app.';
    }
  });

  readonly disableWeekends = computed(() => this.scenario() === 'validation');

  readonly activeSnippet = computed(() => {
    switch (this.activeTab()) {
      case 'ts':
        return this.buildTs();
      case 'scss':
        return this.buildScss();
      default:
        return this.buildHtml();
    }
  });

  constructor() {
    this.applyScenario('single-popup');
  }

  recipesInGroup(group: string) {
    return this.recipeOptions.filter((x) => x.group === group).map((x) => ({ value: x.value, label: x.label }));
  }

  onRecipeGroupNgModelChange(v: string): void {
    this.selectedRecipeGroup.set(v);
    const next = this.recipesInGroup(v)[0]?.value;
    if (next) {
      this.onScenarioNgModelChange(next);
    }
  }

  onScenarioNgModelChange(v: string): void {
    const s = v as DatePickerScenario;
    this.scenario.set(s);
    this.applyScenario(s);
  }

  applyScenario(s: DatePickerScenario): void {
    this.appearance.set('outlined');
    this.status.set('none');
    this.size.set('md');
    this.shape.set('default');
    this.disabledToggle.set(false);
    this.helperToggle.set(true);
    this.showIconToggle.set(s !== 'inline');
    this.openPanel.set(false);
    this.rangeCommitMode.set('apply');
    this.rangeEndStyle.set('outline');
    this.rangeEnabled.set(true);
    this.tone.set('default');
    this.selectedDateColor.set('');
    this.selectedDateTextColor.set('');
    this.rangeColor.set('');
    this.rangeTextColor.set('');
    this.textAlign.set('left');
    this.fieldWidth.set('22rem');
    this.format.set('MM/dd/yyyy');
    this.weekStartModel.set('sunday');

    switch (s) {
      case 'range':
        this.rangeValue = { start: new Date(2026, 4, 18), end: new Date(2026, 4, 25) };
        break;
      case 'month':
        this.monthValue = new Date(2026, 4, 1);
        break;
      case 'inline':
        this.labelPosition.set('top');
        break;
      case 'validation':
        this.status.set('error');
        this.helperToggle.set(true);
        this.singleValue = new Date(2026, 4, 10);
        break;
      case 'enterprise-booking':
        this.rangeValue = { start: new Date(2026, 4, 18), end: new Date(2026, 4, 25) };
        this.openPanel.set(true);
        this.rangeCommitMode.set('instant');
        this.rangeEndStyle.set('pill');
        this.tone.set('teal');
        this.fieldWidth.set('100%');
        break;
      case 'futuristic':
        this.appearance.set('tonal');
        this.shape.set('pill');
        this.tone.set('violet');
        this.singleValue = new Date(2026, 4, 20);
        this.openPanel.set(true);
        break;
      default:
        this.singleValue = new Date(2026, 4, 20);
    }

    if (s !== 'inline') {
      this.labelPosition.set('top');
    }
  }

  resetToDefaults(): void {
    this.selectedRecipeGroup.set('Basics');
    this.onScenarioNgModelChange('single-popup');
    this.themeService.setTheme('light');
    this.activeTab.set('html');
  }

  selectTab(tab: CodeTabId): void {
    this.activeTab.set(tab);
  }

  copySnippet(): void {
    void navigator.clipboard?.writeText(this.activeSnippet()).catch(() => undefined);
  }

  private buildHtml(): string {
    const lines = [`<brightrail-date-picker`, `  type="${this.effectiveType()}"`];

    lines.push(`  label="${this.escapeQuote(this.effectiveLabel())}"`);
    lines.push(`  placeholder="${this.escapeQuote(this.effectivePlaceholder())}"`);

    lines.push(`  appearance="${this.appearance()}"`);
    lines.push(`  size="${this.size()}"`);
    lines.push(`  shape="${this.shape()}"`);
    lines.push(`  [disabled]="${this.disabledToggle()}"`);
    lines.push(`  labelPosition="${this.labelPosition()}"`);
    lines.push(`  status="${this.status()}"`);

    const h = this.effectiveHelper();
    if (h) {
      lines.push(`  helperText="${this.escapeQuote(h)}"`);
    }
    lines.push(`  [showIcon]="${this.showIconToggle()}"`);
    lines.push(`  [open]="${this.openPanel()}"`);
    lines.push(`  rangeCommitMode="${this.rangeCommitMode()}"`);
    lines.push(`  rangeEndStyle="${this.rangeEndStyle()}"`);
    lines.push(`  [rangeEnabled]="${this.rangeEnabled()}"`);
    lines.push(`  tone="${this.tone()}"`);
    if (this.selectedDateColor().trim()) {
      lines.push(`  selectedDateColor="${this.selectedDateColor()}"`);
    }
    if (this.selectedDateTextColor().trim()) {
      lines.push(`  selectedDateTextColor="${this.selectedDateTextColor()}"`);
    }
    if (this.rangeColor().trim()) {
      lines.push(`  rangeColor="${this.rangeColor()}"`);
    }
    if (this.rangeTextColor().trim()) {
      lines.push(`  rangeTextColor="${this.rangeTextColor()}"`);
    }
    lines.push(`  textAlign="${this.textAlign()}"`);
    lines.push(`  fieldWidth="${this.fieldWidth()}"`);
    lines.push(`  format="${this.format()}"`);
    lines.push(`  weekStart="${this.weekStartModel()}"`);
    if (this.disableWeekends()) {
      lines.push(`  [disableWeekends]="true"`);
    }
    if (this.effectiveType() === 'range') {
      lines.push(`  [(ngModel)]="travelDates"`);
    } else if (this.effectiveType() === 'month') {
      lines.push(`  [(ngModel)]="billingMonth"`);
    } else {
      lines.push(`  [(ngModel)]="selectedDate"`);
    }

    lines.push(`/>`);
    return lines.join('\n');
  }

  private buildTs(): string {
    if (this.effectiveType() === 'range') {
      return [
        `import { BrightrailDateRange } from 'brightrail';`,
        ``,
        `travelDates: BrightrailDateRange = {`,
        `  start: new Date(${this.fmtIsoArg(this.rangeValue.start)}),`,
        `  end: new Date(${this.fmtIsoArg(this.rangeValue.end)}),`,
        `};`,
      ].join('\n');
    }

    if (this.effectiveType() === 'month') {
      return [`billingMonth = new Date(${this.fmtIsoArg(this.monthValue)});`, ``].join('\n');
    }
    return [`selectedDate = new Date(${this.fmtIsoArg(this.singleValue)});`, ``].join('\n');
  }

  private buildScss(): string {
    return [`brightrail-date-picker {`, `  display: block;`, `  max-width: 22rem;`, `}`].join('\n');
  }

  private escapeQuote(text: string): string {
    return text.replace(/&/g, '&amp;').replace(/"/g, '&quot;');
  }

  private fmtIsoArg(d: Date | null): string {
    if (!d) {
      return '';
    }
    return `${d.getFullYear()}, ${d.getMonth()}, ${d.getDate()}`;
  }
}
