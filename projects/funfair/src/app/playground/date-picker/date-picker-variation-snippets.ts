/** Copy-ready markup for date-picker catalog tiles (consumers import from `brightrail`). */
export const DATE_PICKER_VARIATION_SNIPPETS = {
  typeInline: `<brightrail-date-picker
  type="inline"
  [labelPosition]="'none'"
  [fullWidth]="true"
  [(ngModel)]="singleDate"
/>`,
  typePopup: `<brightrail-date-picker
  [labelPosition]="'none'"
  [fullWidth]="true"
  [(ngModel)]="singleDate"
/>`,
  typeRange: `<brightrail-date-picker
  type="range"
  [labelPosition]="'none'"
  [fullWidth]="true"
  [(ngModel)]="rangeDate"
/>`,
  typeMonth: `<brightrail-date-picker
  type="month"
  [labelPosition]="'none'"
  [fullWidth]="true"
  [(ngModel)]="monthDate"
/>`,
  appearanceFilled: `<brightrail-date-picker appearance="filled" [labelPosition]="'none'" [fullWidth]="true" [(ngModel)]="singleDate" />`,
  appearanceSoft: `<brightrail-date-picker appearance="soft" [labelPosition]="'none'" [fullWidth]="true" [(ngModel)]="singleDate" />`,
  appearanceOutlined: `<brightrail-date-picker appearance="outlined" [labelPosition]="'none'" [fullWidth]="true" [(ngModel)]="singleDate" />`,
  appearanceTonal: `<brightrail-date-picker appearance="tonal" [labelPosition]="'none'" [fullWidth]="true" [(ngModel)]="singleDate" />`,
  sizeSm: `<brightrail-date-picker size="sm" [labelPosition]="'none'" [fullWidth]="true" [(ngModel)]="singleDate" />`,
  sizeMd: `<brightrail-date-picker size="md" [labelPosition]="'none'" [fullWidth]="true" [(ngModel)]="singleDate" />`,
  sizeLg: `<brightrail-date-picker size="lg" [labelPosition]="'none'" [fullWidth]="true" [(ngModel)]="singleDate" />`,
  stateDefault: `<brightrail-date-picker [labelPosition]="'none'" [fullWidth]="true" [(ngModel)]="singleDate" />`,
  stateHover: `<brightrail-date-picker class="dp-hover" [labelPosition]="'none'" [fullWidth]="true" [(ngModel)]="singleDate" />`,
  stateFocused: `<brightrail-date-picker class="dp-focus" [labelPosition]="'none'" [fullWidth]="true" [(ngModel)]="singleDate" />`,
  stateDisabled: `<brightrail-date-picker [disabled]="true" [labelPosition]="'none'" [fullWidth]="true" [(ngModel)]="singleDate" />`,
  singleOpen: `<brightrail-date-picker
  [labelPosition]="'none'"
  [open]="true"
  [fullWidth]="true"
  [(ngModel)]="singleDate"
/>`,
  rangeOpen: `<brightrail-date-picker
  type="range"
  [labelPosition]="'none'"
  [open]="true"
  [fullWidth]="true"
  [(ngModel)]="rangeDate"
/>`,
  timePickerMock: `<!-- Time picker companion field -->
<div class="time-field">
  <label>Time</label>
  <input type="time" value="10:30" />
</div>`,
  dateTimeMock: `<!-- Date & time composite -->
<div class="datetime-field">
  <brightrail-date-picker [labelPosition]="'none'" [(ngModel)]="singleDate" />
  <input type="time" value="10:30" />
</div>`,
  time24HourMock: `<div class="time-field time-field--24h">
  <label>24-hour time</label>
  <input type="time" value="22:30" />
</div>`,
  validationError: `<brightrail-date-picker
  status="error"
  helperText="Please enter a valid date."
  [labelPosition]="'none'"
  [fullWidth]="true"
  [(ngModel)]="singleDate"
/>`,
  validationHelper: `<brightrail-date-picker
  helperText="Select a check-out date."
  [labelPosition]="'none'"
  [fullWidth]="true"
  [(ngModel)]="singleDate"
/>`,
  validationDisabledDates: `<brightrail-date-picker
  [disableWeekends]="true"
  [open]="true"
  [labelPosition]="'none'"
  [fullWidth]="true"
  [(ngModel)]="singleDate"
/>`,
  enterpriseBooking: `<brightrail-date-picker
  type="range"
  label="Check-in / Check-out"
  helperText="7 nights selected"
  [fullWidth]="true"
  [(ngModel)]="bookingRange"
/>`,
  enterpriseReportFilters: `<brightrail-date-picker
  type="range"
  label="From / To"
  [fullWidth]="true"
  [(ngModel)]="rangeDate"
/>`,
  enterpriseRenewal: `<brightrail-date-picker
  type="month"
  label="Next renewal"
  helperText="You will be billed on this date."
  [fullWidth]="true"
  [(ngModel)]="monthDate"
/>`,
  futuristicGlass: `<div class="dp-glass-shell">
  <brightrail-date-picker [labelPosition]="'none'" [fullWidth]="true" [(ngModel)]="singleDate" />
</div>`,
  futuristicGradient: `<div class="dp-gradient-shell">
  <brightrail-date-picker [labelPosition]="'none'" [fullWidth]="true" [(ngModel)]="singleDate" />
</div>`,
} as const;

export const DATE_PICKER_DOC_SECTION_COUNT = 10;

export const DATE_PICKER_HTML_EXAMPLES = `<brightrail-date-picker
  type="range"
  appearance="outlined"
  label="Check-in / Check-out"
  helperText="7 nights selected"
  [open]="true"
  [fullWidth]="true"
  [(ngModel)]="bookingRange"
/>`;
