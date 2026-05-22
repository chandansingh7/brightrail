import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { BRIGHTRAIL_FX_SHELL_HOST } from '../futuristic/brightrail-futuristic-host';

export type BrightrailValidationSummaryError = string | { message: string; field?: string };

@Component({
  selector: 'brightrail-validation-summary',
  hostDirectives: [BRIGHTRAIL_FX_SHELL_HOST],
  standalone: true,
  template: `
    @if (hasErrors()) {
      <div class="br-val-sum" role="alert" aria-live="assertive" [attr.aria-label]="ariaLabel()">
        @if (title().trim().length > 0) {
          <p class="br-val-sum__title">{{ title() }}</p>
        }
        <ul class="br-val-sum__list">
          @for (item of normalizedErrors(); track $index) {
            <li class="br-val-sum__item">
              @if (item.field) {
                <span class="br-val-sum__field">{{ item.field }}:</span>
              }
              <span class="br-val-sum__message">{{ item.message }}</span>
            </li>
          }
        </ul>
      </div>
    }
  `,
  styleUrl: './brightrail-validation-summary.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrightrailValidationSummaryComponent {
  readonly errors = input<BrightrailValidationSummaryError[]>([]);
  readonly title = input('Please fix the following errors:');
  readonly ariaLabel = input('Validation errors');

  readonly normalizedErrors = computed(() =>
    this.errors()
      .map((err) => {
        if (typeof err === 'string') {
          return { message: err.trim(), field: undefined as string | undefined };
        }
        return {
          message: err.message?.trim() ?? '',
          field: err.field?.trim() || undefined,
        };
      })
      .filter((e) => e.message.length > 0),
  );

  readonly hasErrors = computed(() => this.normalizedErrors().length > 0);
}
