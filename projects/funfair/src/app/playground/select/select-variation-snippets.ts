/** Copy-ready markup for select catalog tiles (consumers import from `brightrail`). */
export const SELECT_VARIATION_SNIPPETS = {
  appearanceFilled: `<brightrail-select
  appearance="filled"
  size="md"
  label="Country"
  labelPosition="top"
  placeholder="Select country"
  displayText="United States"
  [(ngModel)]="countryCode"
>
  <div class="br-select-panel"><!-- options --></div>
</brightrail-select>`,
  appearanceOutlined: `<brightrail-select
  appearance="outlined"
  size="md"
  label="Country"
  labelPosition="top"
  placeholder="Select country"
  displayText="United States"
  [(ngModel)]="countryCode"
>
  <div class="br-select-panel"><!-- options --></div>
</brightrail-select>`,
  appearanceReadonly: `<brightrail-select
  appearance="readonly"
  size="md"
  label="Country"
  labelPosition="top"
  displayText="United States (locked)"
  [(ngModel)]="countryCode"
>
  <div class="br-select-panel"><!-- options --></div>
</brightrail-select>`,

  sizeXs: `<brightrail-select appearance="outlined" size="xs" labelPosition="none" ariaLabel="Status" displayText="Open" [(ngModel)]="statusCode" />`,
  sizeSm: `<brightrail-select appearance="outlined" size="sm" labelPosition="none" ariaLabel="Status" displayText="Open" [(ngModel)]="statusCode" />`,
  sizeMd: `<brightrail-select appearance="outlined" size="md" label="Country" displayText="United States" [(ngModel)]="countryCode" />`,
  sizeLg: `<brightrail-select appearance="outlined" size="lg" label="Country" displayText="United States" [(ngModel)]="countryCode" />`,
  sizeXl: `<brightrail-select appearance="outlined" size="xl" label="Country" displayText="United States" [(ngModel)]="countryCode" />`,

  statusNone: `<brightrail-select appearance="outlined" status="none" label="Country" displayText="United States" [(ngModel)]="countryCode" />`,
  statusSuccess: `<brightrail-select appearance="outlined" status="success" label="Country" displayText="United States" [(ngModel)]="countryCode" />`,
  statusWarning: `<brightrail-select appearance="outlined" status="warning" label="Country" displayText="United States" [(ngModel)]="countryCode" />`,
  statusError: `<brightrail-select appearance="outlined" status="error" label="Country" displayText="United States" [(ngModel)]="countryCode" />`,
  statusInfo: `<brightrail-select appearance="outlined" status="info" label="Country" displayText="United States" [(ngModel)]="countryCode" />`,

  iconFilter: `<brightrail-select appearance="outlined" label="Filter" displayText="All items" [(ngModel)]="filterCode">
  <span class="br-select-prefix"><brightrail-button-icon name="filter" /></span>
  <div class="br-select-panel"><!-- options --></div>
</brightrail-select>`,
  iconSearch: `<brightrail-select appearance="outlined" label="Search" placeholder="Search options…" displayText="" [(ngModel)]="queryCode">
  <span class="br-select-prefix"><brightrail-button-icon name="search" /></span>
  <div class="br-select-panel"><!-- options --></div>
</brightrail-select>`,
  iconCalendar: `<brightrail-select appearance="outlined" label="Date" displayText="May 19, 2026" [(ngModel)]="dateCode">
  <span class="br-select-suffix"><brightrail-button-icon name="calendar" /></span>
  <div class="br-select-panel"><!-- options --></div>
</brightrail-select>`,

  textTruncate: `<brightrail-select
  appearance="outlined"
  textOverflow="truncate"
  label="Country"
  displayText="United States of America (North Region)"
  [(ngModel)]="countryCode"
/>`,
  textWrap: `<brightrail-select
  appearance="outlined"
  textOverflow="wrap"
  label="Country"
  displayText="United States of America (North Region)"
  [(ngModel)]="countryCode"
/>`,
  multiLineValue: `<brightrail-select
  appearance="outlined"
  textOverflow="wrap"
  label="Region"
  displayText="São Paulo Metropolitan Cluster — Brazil"
  [(ngModel)]="regionCode"
/>`,

  stateLoading: `<brightrail-select appearance="outlined" label="Country" displayText="United States" [loading]="true" [(ngModel)]="countryCode" />`,
  stateDisabled: `<brightrail-select appearance="outlined" label="Country" displayText="United States" [disabled]="true" [(ngModel)]="countryCode" />`,
  stateClearable: `<brightrail-select appearance="outlined" label="Country" displayText="United States" [clearable]="true" [(ngModel)]="countryCode" />`,

  exampleMarkup: `<brightrail-select
  appearance="outlined"
  size="md"
  label="Country"
  labelPosition="top"
  placeholder="Select country"
  displayText="United States of America (North Region)"
  textOverflow="truncate"
  [fullWidth]="true"
  [(ngModel)]="countryCode"
>
  <span class="br-select-prefix"><brightrail-button-icon name="filter" /></span>
  <div class="br-select-panel">
    <button type="button" class="br-select-option" (click)="pick('us')">United States</button>
    <button type="button" class="br-select-option" (click)="pick('ca')">Canada</button>
  </div>
</brightrail-select>`,

  futuristicGlass: `<div class="ff-future-shell ff-future-shell--glass">
  <brightrail-select appearance="outlined" size="md" label="Sector" displayText="Alpha quadrant" [(ngModel)]="countryCode" />
</div>`,
  futuristicNeon: `<div class="ff-future-shell ff-future-shell--neon">
  <brightrail-select appearance="outlined" size="md" label="Sector" displayText="Neon relay" [(ngModel)]="countryCode" />
</div>`,
  futuristicCyber: `<div class="ff-future-shell ff-future-shell--cyber">
  <div class="ff-future-cyber-frame">
    <brightrail-select appearance="outlined" size="md" label="Sector" displayText="Ops channel" [(ngModel)]="countryCode" />
  </div>
</div>`,
  futuristicHolo: `<div class="ff-future-shell ff-future-shell--holo">
  <brightrail-select appearance="outlined" size="md" label="Sector" displayText="Orion belt" [(ngModel)]="countryCode" />
</div>`,

} as const;

export const SELECT_DOC_SECTION_COUNT = 7;

export const SELECT_HTML_EXAMPLES = `<brightrail-select
  appearance="outlined"
  size="md"
  label="Country"
  labelPosition="top"
  placeholder="Select country"
  displayText="United States of America (North Region)"
  textOverflow="truncate"
  [fullWidth]="true"
  [(ngModel)]="countryCode"
>
  <span class="br-select-prefix"><brightrail-button-icon name="filter" /></span>
  <div class="br-select-panel">
    <button type="button" class="br-select-option" (click)="pick('us')">United States</button>
    <button type="button" class="br-select-option" (click)="pick('ca')">Canada</button>
  </div>
</brightrail-select>`;
