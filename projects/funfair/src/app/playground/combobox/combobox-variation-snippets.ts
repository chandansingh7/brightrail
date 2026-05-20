/** Copy-ready markup for combobox catalog tiles (consumers import from `brightrail`). */
export const COMBOBOX_VARIATION_SNIPPETS = {
  coreDefault: `<brightrail-combobox
  [options]="countryOptions"
  placeholder="Search or select…"
  [(ngModel)]="countryCode"
/>`,

  coreWithValue: `<brightrail-combobox
  [options]="countryOptions"
  placeholder="Search or select…"
  [(ngModel)]="countryCode"
/>`,

  coreCompact: `<brightrail-combobox
  [options]="statusOptions"
  placeholder="Status"
  [fullWidth]="false"
  [(ngModel)]="statusCode"
/>`,

  filterableOn: `<brightrail-combobox
  [options]="assigneeOptions"
  [filterable]="true"
  placeholder="Search assignees…"
  [(ngModel)]="assigneeId"
/>`,

  filterableOff: `<brightrail-combobox
  [options]="priorityOptions"
  [filterable]="false"
  placeholder="Priority"
  [(ngModel)]="priorityCode"
/>`,

  widthFull: `<brightrail-combobox
  [options]="regionOptions"
  [fullWidth]="true"
  placeholder="Select region"
  [(ngModel)]="regionCode"
/>`,

  widthInline: `<brightrail-combobox
  [options]="tagOptions"
  [fullWidth]="false"
  placeholder="Tag"
  [(ngModel)]="tagCode"
/>`,

  stateDisabled: `<brightrail-combobox
  [options]="countryOptions"
  [disabled]="true"
  placeholder="Search or select…"
  [(ngModel)]="countryCode"
/>`,

  stateDisabledOption: `<brightrail-combobox
  [options]="planOptions"
  placeholder="Select plan"
  [(ngModel)]="planCode"
/>`,

  formReactive: `<brightrail-combobox
  [options]="departmentOptions"
  placeholder="Department"
  [formControl]="departmentControl"
/>`,

  formTemplate: `<form>
  <brightrail-combobox
    [options]="roleOptions"
    placeholder="Role"
    name="role"
    [(ngModel)]="roleCode"
    required
  />
</form>`,

  enterpriseMultiField: `<div class="cbco-form-row">
  <brightrail-combobox
    [options]="countryOptions"
    placeholder="Country"
    [(ngModel)]="countryCode"
  />
  <brightrail-combobox
    [options]="cityOptions"
    placeholder="City"
    [(ngModel)]="cityCode"
  />
</div>`,
} as const;

export const COMBOBOX_DOC_SECTION_COUNT = 6;

export const COMBOBOX_HTML_EXAMPLES = `<brightrail-combobox
  [options]="[
    { value: 'us', label: 'United States' },
    { value: 'ca', label: 'Canada' },
    { value: 'mx', label: 'Mexico', disabled: true }
  ]"
  placeholder="Search or select…"
  [filterable]="true"
  [fullWidth]="true"
  [(ngModel)]="countryCode"
  (valueChange)="onCountryChange($event)"
/>

<brightrail-combobox
  [options]="priorityOptions"
  [filterable]="false"
  [disabled]="isReadonly"
  placeholder="Priority"
  [(ngModel)]="priority"
/>`;
