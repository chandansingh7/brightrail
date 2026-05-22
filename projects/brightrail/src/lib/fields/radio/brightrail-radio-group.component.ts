import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { BRIGHTRAIL_FX_SHELL_HOST } from '../../futuristic/brightrail-futuristic-host';

import {
  BrightrailRadioComponent,
  BrightrailRadioLabelPosition,
  BrightrailRadioSize,
  BrightrailRadioState,
  BrightrailRadioStatus,
  BrightrailRadioTone,
  BrightrailRadioVariant,
} from './brightrail-radio.component';

export type BrightrailRadioGroupLayout = 'vertical' | 'horizontal' | 'segmented';

export interface BrightrailRadioGroupOption {
  id: string;
  label: string;
  helperText?: string;
  icon?: 'none' | 'plus' | 'check' | 'info' | 'warning' | 'user' | 'calendar' | 'close';
  disabled?: boolean;
}

@Component({
  selector: 'brightrail-radio-group',
  hostDirectives: [BRIGHTRAIL_FX_SHELL_HOST],
  standalone: true,
  imports: [BrightrailRadioComponent],
  template: `
    <fieldset class="br-rg" [class]="'br-rg--' + layout()">
      @if (groupLabel().trim().length > 0) {
        <legend class="br-rg__legend">{{ groupLabel() }}</legend>
      }

      <div class="br-rg__list">
        @for (opt of options(); track opt.id) {
          <div class="br-rg__item">
            <brightrail-radio
              [name]="name()"
              [value]="opt.id"
              [label]="opt.label"
              [helperText]="opt.helperText ?? ''"
              [icon]="opt.icon ?? 'none'"
              [size]="size()"
              [tone]="tone()"
              [variant]="effectiveVariant()"
              [status]="status()"
              [labelPosition]="labelPosition()"
              [state]="state()"
              [required]="required()"
              [invalid]="invalid()"
              [errorText]="errorText()"
              [checked]="selectedId() === opt.id"
              [disabled]="disabled() || !!opt.disabled"
              (checkedChange)="select(opt.id, $event)"
            />
          </div>
        }
      </div>
    </fieldset>
  `,
  styleUrl: './brightrail-radio-group.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrightrailRadioGroupComponent {
  readonly name = input('br-radio-group');
  readonly groupLabel = input('');
  readonly selectedId = input('');
  readonly options = input<BrightrailRadioGroupOption[]>([]);

  readonly layout = input<BrightrailRadioGroupLayout>('vertical');
  readonly tone = input<BrightrailRadioTone>('primary');
  readonly variant = input<BrightrailRadioVariant>('default');
  readonly status = input<BrightrailRadioStatus>('none');
  readonly labelPosition = input<BrightrailRadioLabelPosition>('right');
  readonly size = input<BrightrailRadioSize>('md');
  readonly state = input<BrightrailRadioState>('default');

  readonly required = input(false);
  readonly invalid = input(false);
  readonly errorText = input('Please select an option.');
  readonly disabled = input(false);
  readonly selectedIdChange = output<string>();

  effectiveVariant(): BrightrailRadioVariant {
    return this.layout() === 'segmented' ? 'card' : this.variant();
  }

  select(id: string, checked: boolean): void {
    if (!checked) return;
    this.selectedIdChange.emit(id);
  }
}

