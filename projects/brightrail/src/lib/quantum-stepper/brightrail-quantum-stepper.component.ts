import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

import {
  BrightrailQuantumStep,
  BrightrailQuantumStepperAppearance,
} from './brightrail-quantum-stepper.types';

@Component({
  selector: 'brightrail-quantum-stepper',
  standalone: true,
  template: `
    <nav class="br-quantum-stepper" [class]="hostClass()" [attr.aria-label]="ariaLabel() || 'Workflow steps'">
      <ol class="br-quantum-stepper__list">
        @for (step of steps(); track step.label; let i = $index) {
          <li
            class="br-quantum-stepper__item"
            [class.br-quantum-stepper__item--completed]="i < currentStep()"
            [class.br-quantum-stepper__item--current]="i === currentStep()"
          >
            <span class="br-quantum-stepper__node" aria-hidden="true">{{ i + 1 }}</span>
            <span class="br-quantum-stepper__text">
              <span class="br-quantum-stepper__label">{{ step.label }}</span>
              @if (step.description) {
                <span class="br-quantum-stepper__desc">{{ step.description }}</span>
              }
            </span>
            @if (i < steps().length - 1) {
              <span class="br-quantum-stepper__connector" aria-hidden="true"></span>
            }
          </li>
        }
      </ol>
    </nav>
  `,
  styleUrl: './brightrail-quantum-stepper.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrightrailQuantumStepperComponent {
  readonly ariaLabel = input('');
  readonly appearance = input<BrightrailQuantumStepperAppearance>('glow');
  readonly currentStep = input(0);
  readonly steps = input<readonly BrightrailQuantumStep[]>([]);

  readonly hostClass = computed(() => `br-quantum-stepper--${this.appearance()}`);
}
