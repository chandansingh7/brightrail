import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  output,
} from '@angular/core';

@Component({
  selector: 'brightrail-menu-item',
  standalone: true,
  template: `
    <button
      type="button"
      class="br-menu-item"
      [class.br-menu-item--selected]="selected()"
      [class.br-menu-item--disabled]="disabled()"
      role="menuitem"
      [disabled]="disabled()"
      [attr.aria-disabled]="disabled() ? 'true' : null"
      [attr.aria-selected]="selected() ? 'true' : null"
      (click)="onActivate($event)"
    >
      {{ label() }}
    </button>
  `,
  styleUrl: './brightrail-menu-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.br-menu-item-host--active]': 'active',
  },
})
export class BrightrailMenuItemComponent {
  readonly label = input('Menu item');
  readonly disabled = input(false);
  readonly selected = input(false);

  readonly activate = output<void>();

  /** @internal Highlight for keyboard focus within the menu. */
  active = false;

  readonly hostClass = computed(() =>
    [
      'br-menu-item-host',
      this.selected() ? 'br-menu-item-host--selected' : '',
      this.disabled() ? 'br-menu-item-host--disabled' : '',
    ]
      .filter(Boolean)
      .join(' '),
  );

  onActivate(ev: Event): void {
    ev.preventDefault();
    ev.stopPropagation();
    if (this.disabled()) {
      return;
    }
    this.activate.emit();
  }
}
