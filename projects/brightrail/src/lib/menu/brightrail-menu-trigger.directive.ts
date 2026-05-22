import {
  Directive,
  HostBinding,
  HostListener,
  input,
} from '@angular/core';

import { BrightrailMenuComponent } from './brightrail-menu.component';

@Directive({
  selector: '[brightrailMenuTrigger]',
  standalone: true,
  host: {
    '[attr.aria-haspopup]': "'menu'",
  },
})
export class BrightrailMenuTriggerDirective {
  readonly menu = input.required<BrightrailMenuComponent>({ alias: 'brightrailMenuTrigger' });

  @HostBinding('attr.aria-expanded')
  get ariaExpanded(): boolean {
    return this.menu().isOpen();
  }

  @HostBinding('attr.aria-controls')
  get ariaControls(): string | null {
    return this.menu().panelId;
  }

  @HostListener('click', ['$event'])
  onClick(ev: Event): void {
    ev.preventDefault();
    ev.stopPropagation();
    this.menu().toggle();
  }

  @HostListener('keydown', ['$event'])
  onKeydown(ev: KeyboardEvent): void {
    if (ev.key === 'ArrowDown' || ev.key === 'Enter' || ev.key === ' ') {
      ev.preventDefault();
      this.menu().open();
    }
    if (ev.key === 'Escape') {
      this.menu().close();
    }
  }
}
