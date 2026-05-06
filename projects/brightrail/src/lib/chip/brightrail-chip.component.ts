import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
  computed,
  input,
} from '@angular/core';

import {
  BrightrailButtonIcon,
  BrightrailButtonIconComponent,
} from '../buttons/brightrail-button-icon.component';

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
  imports: [BrightrailButtonIconComponent],
  template: `
    <span class="br-chip" [class]="chipClass()">
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
          [disabled]="state() === 'disabled'"
          (click)="onRemove($event)"
          [attr.aria-label]="'Remove ' + label()"
        >
          <brightrail-button-icon name="close" />
        </button>
      }
    </span>
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

  onRemove(event: Event): void {
    event.stopPropagation();
    this.remove.emit();
  }
}
