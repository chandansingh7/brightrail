import {
  ChangeDetectionStrategy,
  Component,
  computed,
  contentChildren,
  input,
} from '@angular/core';

import { BrightrailStepComponent } from './brightrail-step.component';

export type BrightrailStepperPreset = 'milestone' | 'workflow';

@Component({
  selector: 'brightrail-stepper',
  standalone: true,
  imports: [],
  templateUrl: './brightrail-stepper.component.html',
  styleUrl: './brightrail-stepper.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'br-stepper-host',
  },
})
export class BrightrailStepperComponent {
  /** 0-based active index. */
  readonly activeStep = input(0);
  readonly preset = input<BrightrailStepperPreset>('milestone');
  readonly ariaLabel = input('Progress steps');

  private readonly stepQuery = contentChildren(BrightrailStepComponent);
  readonly steps = computed(() => this.stepQuery());

  readonly hostClass = computed(() => {
    const p = this.preset();
    return ['br-stepper', `br-stepper--${p}`].join(' ');
  });
}
