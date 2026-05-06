import {
  ChangeDetectionStrategy,
  Component,
  computed,
  contentChildren,
  input,
} from '@angular/core';

import { BrightrailStepComponent } from './brightrail-step.component';

export type BrightrailStepperPreset = 'milestone' | 'workflow';
export type BrightrailStepperOrientation = 'horizontal' | 'vertical';
export type BrightrailStepperStepStyle = 'numbered' | 'progress';
export type BrightrailStepperLabelPlacement = 'below' | 'top';

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
  /** 0-based active index (legacy alias maintained). */
  readonly activeStep = input(0);
  readonly currentStep = input(0);
  readonly preset = input<BrightrailStepperPreset>('milestone');
  readonly orientation = input<BrightrailStepperOrientation>('horizontal');
  readonly stepStyle = input<BrightrailStepperStepStyle>('numbered');
  readonly labelPlacement = input<BrightrailStepperLabelPlacement>('below');
  readonly withDescriptions = input(true);
  /** CSS length between node edge and connector (e.g. `0`, `2px`, `0.25rem`). */
  readonly connectorGap = input('0px');
  /** CSS color for the current/active step. */
  readonly currentColor = input('');
  /** CSS color for completed steps and completed connectors. */
  readonly completedColor = input('');
  readonly ariaLabel = input('Progress steps');

  private readonly stepQuery = contentChildren(BrightrailStepComponent);
  readonly steps = computed(() => this.stepQuery());

  readonly hostClass = computed(() => {
    const p = this.preset();
    return [
      'br-stepper',
      `br-stepper--${p}`,
      `br-stepper--${this.orientation()}`,
      `br-stepper--${this.stepStyle()}`,
      `br-stepper--label-${this.labelPlacement()}`,
    ].join(' ');
  });

  readonly resolvedCurrentStep = computed(() => {
    const legacy = this.activeStep();
    const modern = this.currentStep();
    return modern !== 0 || legacy === 0 ? modern : legacy;
  });

  readonly normalizedConnectorGap = computed(() => {
    const raw = `${this.connectorGap() ?? ''}`.trim();
    if (!raw) return '0px';
    if (/^-?\d+(\.\d+)?$/.test(raw)) return `${raw}px`;
    return raw;
  });

  stepState(step: BrightrailStepComponent, index: number): 'completed' | 'current' | 'pending' | 'error' | 'disabled' {
    const explicit = step.status();
    if (explicit === 'error' || explicit === 'disabled') return explicit;
    if (explicit === 'completed' || explicit === 'current') return explicit;
    const active = this.resolvedCurrentStep();
    if (index < active) return 'completed';
    if (index === active) return 'current';
    return 'pending';
  }
}
