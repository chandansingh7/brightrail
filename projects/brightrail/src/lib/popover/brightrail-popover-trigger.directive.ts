import { Directive, ElementRef, HostBinding, HostListener, OnInit, inject, input } from '@angular/core';

import { BrightrailPopoverComponent } from './brightrail-popover.component';
import { BRIGHTRAIL_FX_SHELL_HOST } from '../futuristic/brightrail-futuristic-host';

@Directive({
  selector: '[brightrailPopoverTrigger]',
  hostDirectives: [BRIGHTRAIL_FX_SHELL_HOST],
  standalone: true,
  host: { '[attr.aria-haspopup]': "'dialog'" },
})
export class BrightrailPopoverTriggerDirective implements OnInit {
  private readonly host = inject(ElementRef<HTMLElement>);

  readonly popover = input.required<BrightrailPopoverComponent>({ alias: 'brightrailPopoverTrigger' });

  ngOnInit(): void {
    this.popover().attachTrigger(this.host.nativeElement);
  }

  @HostBinding('attr.aria-expanded')
  get ariaExpanded(): boolean {
    return this.popover().isOpen();
  }

  @HostBinding('attr.aria-controls')
  get ariaControls(): string | null {
    return this.popover().isOpen() ? this.popover().panelId : null;
  }

  @HostListener('click', ['$event'])
  onClick(ev: Event): void {
    ev.preventDefault();
    ev.stopPropagation();
    this.popover().toggle();
  }

  @HostListener('keydown', ['$event'])
  onKeydown(ev: KeyboardEvent): void {
    if (ev.key === 'Enter' || ev.key === ' ') {
      ev.preventDefault();
      this.popover().toggle();
    }
    if (ev.key === 'Escape') {
      this.popover().close();
    }
  }
}
