import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
  computed,
  input,
  output,
} from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';

import {
  BrightrailButtonIcon,
  BrightrailButtonIconComponent,
} from '../buttons/brightrail-button-icon.component';
import { BRIGHTRAIL_FX_SHELL_HOST } from '../futuristic/brightrail-futuristic-host';
import { BrightrailFocusVisibleDirective } from '../platform/brightrail-focus-visible.directive';

export type BrightrailChipVariant = 'filled' | 'outlined' | 'soft' | 'text';
export type BrightrailChipColor =
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
  | 'neutral'
  | 'critical';
export type BrightrailChipSize = 'small' | 'medium' | 'large' | 'compact';
export type BrightrailChipState = 'default' | 'hover' | 'focused' | 'disabled';

@Component({
  selector: 'brightrail-chip',
  standalone: true,
  hostDirectives: [BRIGHTRAIL_FX_SHELL_HOST],
  imports: [BrightrailButtonIconComponent, BrightrailFocusVisibleDirective, NgTemplateOutlet],
  template: `
    @if (selectable()) {
      <button
        type="button"
        class="br-chip"
        [class]="chipClass()"
        brightrailFocusVisible
        [disabled]="state() === 'disabled'"
        [attr.aria-pressed]="selected()"
        (click)="onSelect($event)"
      >
        <ng-container *ngTemplateOutlet="chipBody" />
      </button>
    } @else {
      <span class="br-chip" [class]="chipClass()">
        <ng-container *ngTemplateOutlet="chipBody" />
      </span>
    }

    <ng-template #chipBody>
      @if (avatarText().trim().length > 0) {
        <span class="br-chip__avatar" aria-hidden="true">{{ avatarText() }}</span>
      } @else if (avatarSrc().trim().length > 0) {
        <img class="br-chip__avatar br-chip__avatar--img" [src]="avatarSrc()" alt="" />
      } @else if (icon() !== 'none') {
        <span class="br-chip__icon" aria-hidden="true">
          <brightrail-button-icon [name]="icon()" />
        </span>
      }
      <span class="br-chip__label">{{ label() }}</span>
      @if (removable()) {
        <button
          type="button"
          class="br-chip__remove"
          brightrailFocusVisible
          [disabled]="state() === 'disabled'"
          (click)="onRemove($event)"
          [attr.aria-label]="'Remove ' + label()"
        >
          <brightrail-button-icon name="close" />
        </button>
      }
    </ng-template>
  `,
  styleUrl: './brightrail-chip.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrightrailChipComponent {
  readonly variant = input<BrightrailChipVariant>('filled');
  readonly appearance = input<BrightrailChipVariant | undefined>(undefined, { alias: 'appearance' });
  readonly color = input<BrightrailChipColor>('primary');
  readonly size = input<BrightrailChipSize>('medium');
  readonly state = input<BrightrailChipState>('default');
  readonly label = input('Chip');
  readonly icon = input<BrightrailButtonIcon>('none');
  readonly removable = input(false);
  readonly selected = input(false);
  readonly selectable = input(false);
  readonly avatarSrc = input('');
  readonly avatarText = input('');

  @Output() readonly remove = new EventEmitter<void>();
  readonly selectedChange = output<boolean>();

  readonly resolvedVariant = computed(() => this.appearance() ?? this.variant());
  readonly resolvedColor = computed(() => (this.color() === 'critical' ? 'danger' : this.color()));

  readonly chipClass = computed(() => {
    const parts = [
      'br-chip',
      `br-chip--${this.resolvedVariant()}`,
      `br-chip--${this.resolvedColor()}`,
      `br-chip--${this.size()}`,
      `br-chip--state-${this.state()}`,
    ];
    if (this.selectable()) parts.push('br-chip--selectable');
    if (this.selected()) parts.push('br-chip--selected');
    return parts.join(' ');
  });

  onSelect(event: Event): void {
    event.stopPropagation();
    if (this.state() === 'disabled') {
      return;
    }
    this.selectedChange.emit(!this.selected());
  }

  onRemove(event: Event): void {
    event.stopPropagation();
    this.remove.emit();
  }
}
