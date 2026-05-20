/** Copy-ready markup for slider catalog tiles (consumers import from `brightrail`). */
export const SLIDER_VARIATION_SNIPPETS = {
  coreDefault: `<brightrail-slider [min]="0" [max]="100" [step]="1" />`,
  coreWithValue: `<brightrail-slider
  [min]="0"
  [max]="100"
  [step]="1"
  [showValue]="true"
  ariaLabel="Volume"
/>`,
  coreCustomRange: `<brightrail-slider
  [min]="10"
  [max]="90"
  [step]="5"
  [showValue]="true"
  ariaLabel="Brightness"
/>`,
  coreFineStep: `<brightrail-slider
  [min]="0"
  [max]="1"
  [step]="0.1"
  [showValue]="true"
  ariaLabel="Opacity"
/>`,

  tonePrimary: `<brightrail-slider tone="primary" [showValue]="true" ariaLabel="Primary" />`,
  toneSuccess: `<brightrail-slider tone="success" [showValue]="true" ariaLabel="Success" />`,
  toneWarning: `<brightrail-slider tone="warning" [showValue]="true" ariaLabel="Warning" />`,
  toneDanger: `<brightrail-slider tone="danger" [showValue]="true" ariaLabel="Danger" />`,
  toneNeutral: `<brightrail-slider tone="neutral" [showValue]="true" ariaLabel="Neutral" />`,

  sizeSm: `<brightrail-slider size="sm" [showValue]="true" ariaLabel="Small" />`,
  sizeMd: `<brightrail-slider size="md" [showValue]="true" ariaLabel="Medium" />`,
  sizeLg: `<brightrail-slider size="lg" [showValue]="true" ariaLabel="Large" />`,

  stateDefault: `<brightrail-slider [showValue]="true" ariaLabel="Default" />`,
  stateDisabled: `<brightrail-slider [disabled]="true" [showValue]="true" ariaLabel="Disabled" />`,

  rangeVolume: `<brightrail-slider
  [min]="0"
  [max]="100"
  [step]="1"
  [showValue]="true"
  ariaLabel="Volume"
  [(ngModel)]="volume"
/>`,
  rangePercentage: `<brightrail-slider
  [min]="0"
  [max]="100"
  [step]="5"
  [showValue]="true"
  tone="primary"
  ariaLabel="Completion"
  [(ngModel)]="completion"
/>`,
  rangeTemperature: `<brightrail-slider
  [min]="16"
  [max]="30"
  [step]="1"
  [showValue]="true"
  tone="warning"
  ariaLabel="Temperature"
  [(ngModel)]="temperature"
/>`,
  rangePrice: `<brightrail-slider
  [min]="0"
  [max]="1000"
  [step]="50"
  [showValue]="true"
  tone="neutral"
  ariaLabel="Max price"
  [(ngModel)]="maxPrice"
/>`,

  formNgModel: `<brightrail-slider
  [min]="0"
  [max]="100"
  [step]="1"
  [showValue]="true"
  ariaLabel="Volume"
  [(ngModel)]="volume"
/>`,
  formReactive: `<brightrail-slider
  [min]="0"
  [max]="100"
  [step]="1"
  [showValue]="true"
  ariaLabel="Brightness"
  [formControl]="brightnessControl"
/>`,
  formLabeledRow: `<div class="slider-row">
  <label for="volume-slider">Volume</label>
  <brightrail-slider
    [min]="0"
    [max]="100"
    [step]="1"
    [showValue]="true"
    ariaLabel="Volume"
    [(ngModel)]="volume"
  />
</div>`,

  futuristicGlass: `<div class="ff-future-shell ff-future-shell--glass">
  <brightrail-slider [min]="0" [max]="100" [step]="1" [showValue]="true" tone="primary" ariaLabel="Glass output" />
</div>`,
  futuristicNeon: `<div class="ff-future-shell ff-future-shell--neon">
  <brightrail-slider [min]="0" [max]="100" [step]="1" [showValue]="true" tone="primary" ariaLabel="Neon gain" />
</div>`,
  futuristicCyber: `<div class="ff-future-shell ff-future-shell--cyber">
  <div class="ff-future-cyber-frame">
    <brightrail-slider [min]="0" [max]="100" [step]="5" [showValue]="true" tone="danger" ariaLabel="Cyber throttle" />
  </div>
</div>`,
  futuristicHolo: `<div class="ff-future-shell ff-future-shell--holo">
  <brightrail-slider [min]="0" [max]="100" [step]="1" [showValue]="true" tone="success" ariaLabel="Holo blend" />
</div>`,

} as const;

export const SLIDER_DOC_SECTION_COUNT = 7;

export const SLIDER_HTML_EXAMPLES = `<brightrail-slider
  [min]="0"
  [max]="100"
  [step]="1"
  [showValue]="true"
  tone="primary"
  size="md"
  ariaLabel="Volume"
  [(ngModel)]="volume"
/>

<brightrail-slider
  [min]="16"
  [max]="30"
  [step]="1"
  [showValue]="true"
  tone="warning"
  ariaLabel="Temperature"
  (valueChange)="onTemperatureChange($event)"
/>

<brightrail-slider
  [min]="0"
  [max]="100"
  [disabled]="true"
  [showValue]="true"
  ariaLabel="Disabled slider"
/>`;
