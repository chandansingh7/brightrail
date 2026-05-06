import {
  ChangeDetectionStrategy,
  Component,
  computed,
  contentChild,
  input,
  output,
} from '@angular/core';

import type { BrightrailButtonIcon } from '../buttons/brightrail-button-icon.component';

import { BrightrailTabContentDirective } from './brightrail-tab-content.directive';

export type BrightrailTabIconName = Exclude<BrightrailButtonIcon, 'none'>;

let brightrailTabUid = 0;

@Component({
  selector: 'brightrail-tab',
  standalone: true,
  template: '<ng-content />',
  host: {
    style: 'display: none;',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrightrailTabComponent {
  readonly tabId = `br-tab-${++brightrailTabUid}`;

  readonly label = input.required<string>();
  readonly icon = input<BrightrailTabIconName | undefined>(undefined);
  /** When true, only the icon shows; `label` is still used for accessibility. */
  readonly iconOnly = input(false);
  readonly disabled = input(false);
  readonly badge = input<number | undefined>(undefined);
  readonly closable = input(false);
  /** If multiple tabs set `active`, the first wins on first render. */
  readonly active = input(false);

  readonly close = output<void>();

  private readonly body = contentChild(BrightrailTabContentDirective);

  readonly panelTemplate = computed(() => this.body()?.templateRef ?? null);
}
