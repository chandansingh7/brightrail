import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  inject,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { DOCUMENT } from '@angular/common';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'brightrail-popover',
  standalone: true,
  template: `
    <div
      class="br-popover"
      [class.br-popover--open]="isOpen()"
      [hidden]="!isOpen()"
      role="dialog"
      [attr.id]="panelId"
      [attr.aria-modal]="'false'"
      [style.top.px]="panelTop()"
      [style.left.px]="panelLeft()"
    >
      <ng-content />
    </div>
  `,
  styleUrl: './brightrail-popover.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'br-popover-host' },
})
export class BrightrailPopoverComponent {
  private static nextId = 0;

  private readonly host = inject(ElementRef<HTMLElement>);
  private readonly document = inject(DOCUMENT);
  private readonly destroyRef = inject(DestroyRef);

  readonly panelId = `br-popover-${BrightrailPopoverComponent.nextId++}`;
  readonly isOpen = signal(false);
  readonly panelTop = signal(0);
  readonly panelLeft = signal(0);

  private triggerEl: HTMLElement | null = null;

  constructor() {
    fromEvent(this.document, 'click', { capture: true })
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((ev) => {
        if (!this.isOpen()) {
          return;
        }
        const target = ev.target;
        if (!(target instanceof Node)) {
          return;
        }
        const insidePanel = this.host.nativeElement.contains(target);
        const insideTrigger = this.triggerEl?.contains(target) ?? false;
        if (!insidePanel && !insideTrigger) {
          this.close();
        }
      });
  }

  attachTrigger(el: HTMLElement): void {
    this.triggerEl = el;
  }

  open(): void {
    if (!this.triggerEl) {
      return;
    }
    const rect = this.triggerEl.getBoundingClientRect();
    this.panelTop.set(rect.bottom + 6);
    this.panelLeft.set(rect.left);
    this.isOpen.set(true);
  }

  close(): void {
    this.isOpen.set(false);
  }

  toggle(): void {
    if (this.isOpen()) {
      this.close();
    } else {
      this.open();
    }
  }
}
