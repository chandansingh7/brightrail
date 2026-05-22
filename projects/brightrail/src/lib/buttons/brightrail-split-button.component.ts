import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { BRIGHTRAIL_FX_SHELL_HOST } from '../futuristic/brightrail-futuristic-host';

import type { BrightrailButtonIcon } from './brightrail-button-icon.component';
import {
  BrightrailButtonComponent,
  BrightrailButtonShape,
  BrightrailButtonSize,
  BrightrailButtonVariant,
} from './brightrail-button.component';

@Component({
  selector: 'brightrail-split-button',
  hostDirectives: [BRIGHTRAIL_FX_SHELL_HOST],
  standalone: true,
  imports: [BrightrailButtonComponent],
  host: {
    '[class.br-split-host--full]': 'fullWidth()',
  },
  template: `
    <div class="br-split" [class.br-split--full]="fullWidth()" role="group">
      <brightrail-button
        class="br-split__main"
        [fullWidth]="fullWidth()"
        [variant]="variant()"
        [size]="size()"
        [shape]="shape()"
        [disabled]="disabled()"
        [loading]="loading()"
        [iconLeft]="iconLeft()"
        [iconRight]="iconRight()"
        [dropdownIndicator]="false"
        [visualState]="visualState()"
        [ariaLabel]="undefined"
        (click)="primaryClick.emit($event)"
      >
        <ng-content />
      </brightrail-button>
      <brightrail-button
        class="br-split__caret"
        [variant]="variant()"
        [size]="size()"
        [shape]="shape()"
        [disabled]="disabled()"
        [loading]="false"
        [iconLeft]="'chevron-down'"
        [iconRight]="'none'"
        [dropdownIndicator]="false"
        [visualState]="'default'"
        [ariaLabel]="menuButtonAriaLabel()"
        (click)="menuClick.emit($event)"
      ></brightrail-button>
    </div>
  `,
  styleUrl: './brightrail-split-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrightrailSplitButtonComponent {
  readonly variant = input<BrightrailButtonVariant>('primary');
  readonly size = input<BrightrailButtonSize>('md');
  readonly shape = input<BrightrailButtonShape>('default');
  readonly disabled = input(false);
  readonly loading = input(false);
  readonly fullWidth = input(false);
  readonly iconLeft = input<BrightrailButtonIcon>('none');
  readonly iconRight = input<BrightrailButtonIcon>('none');
  readonly visualState = input<'default' | 'active'>('default');
  readonly menuButtonAriaLabel = input('Open menu');

  readonly primaryClick = output<MouseEvent>();
  readonly menuClick = output<MouseEvent>();
}
