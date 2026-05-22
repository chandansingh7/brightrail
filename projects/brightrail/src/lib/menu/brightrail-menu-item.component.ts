import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  computed,
  inject,
  input,
  output,
  viewChild,
} from '@angular/core';
import { BRIGHTRAIL_FX_SHELL_HOST } from '../futuristic/brightrail-futuristic-host';

@Component({
  selector: 'brightrail-menu-item',
  hostDirectives: [BRIGHTRAIL_FX_SHELL_HOST],
  standalone: true,
  template: `
    <button
      #menuButton
      type="button"
      class="br-menu-item"
      [class.br-menu-item--selected]="selected()"
      [class.br-menu-item--disabled]="disabled()"
      [class.br-menu-item--active]="active"
      role="menuitem"
      tabindex="-1"
      [disabled]="disabled()"
      [attr.aria-disabled]="disabled() ? 'true' : null"
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
  private readonly menuButton = viewChild<ElementRef<HTMLButtonElement>>('menuButton');

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

  /** @internal Focus the menuitem button for keyboard navigation. */
  focus(): void {
    this.menuButton()?.nativeElement.focus();
  }
}
