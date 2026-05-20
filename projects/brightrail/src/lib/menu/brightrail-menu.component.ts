import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  DestroyRef,
  ElementRef,
  QueryList,
  inject,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { DOCUMENT } from '@angular/common';
import { fromEvent } from 'rxjs';

import { BrightrailMenuItemComponent } from './brightrail-menu-item.component';

@Component({
  selector: 'brightrail-menu',
  standalone: true,
  template: `
    <div
      class="br-menu"
      [class.br-menu--open]="isOpen()"
      [hidden]="!isOpen()"
      role="menu"
      [attr.id]="panelId"
      (keydown)="onPanelKeydown($event)"
    >
      <ng-content select="brightrail-menu-item" />
    </div>
  `,
  styleUrl: './brightrail-menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'br-menu-host',
  },
})
export class BrightrailMenuComponent implements AfterContentInit {
  private static nextId = 0;

  private readonly host = inject(ElementRef<HTMLElement>);
  private readonly document = inject(DOCUMENT);
  private readonly destroyRef = inject(DestroyRef);

  @ContentChildren(BrightrailMenuItemComponent)
  private readonly items!: QueryList<BrightrailMenuItemComponent>;

  readonly panelId = `br-menu-${BrightrailMenuComponent.nextId++}`;
  readonly isOpen = signal(false);
  private activeIndex = -1;

  ngAfterContentInit(): void {
    this.items.changes.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      this.syncItemHandlers();
    });
    this.syncItemHandlers();

    fromEvent(this.document, 'click', { capture: true })
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((ev) => {
        if (!this.isOpen()) {
          return;
        }
        const target = ev.target;
        if (!(target instanceof Node) || !this.host.nativeElement.contains(target)) {
          this.close();
        }
      });
  }

  open(): void {
    this.isOpen.set(true);
    const enabled = this.enabledItems();
    const selectedIdx = enabled.findIndex((item) => item.selected());
    this.setActiveIndex(selectedIdx >= 0 ? selectedIdx : 0);
  }

  close(): void {
    this.isOpen.set(false);
    this.clearActive();
  }

  toggle(): void {
    if (this.isOpen()) {
      this.close();
    } else {
      this.open();
    }
  }

  onPanelKeydown(ev: KeyboardEvent): void {
    const enabled = this.enabledItems();
    if (enabled.length === 0) {
      return;
    }

    switch (ev.key) {
      case 'ArrowDown':
        ev.preventDefault();
        this.moveActive(1, enabled.length);
        break;
      case 'ArrowUp':
        ev.preventDefault();
        this.moveActive(-1, enabled.length);
        break;
      case 'Home':
        ev.preventDefault();
        this.setActiveIndex(0);
        break;
      case 'End':
        ev.preventDefault();
        this.setActiveIndex(enabled.length - 1);
        break;
      case 'Enter':
      case ' ':
        ev.preventDefault();
        enabled[this.activeIndex]?.onActivate(ev);
        this.close();
        break;
      case 'Escape':
        ev.preventDefault();
        ev.stopPropagation();
        this.close();
        break;
      default:
        break;
    }
  }

  private syncItemHandlers(): void {
    this.items.forEach((item) => {
      item.activate.subscribe(() => this.close());
    });
  }

  private enabledItems(): BrightrailMenuItemComponent[] {
    return this.items?.toArray().filter((item) => !item.disabled()) ?? [];
  }

  private moveActive(delta: number, count: number): void {
    if (count === 0) {
      return;
    }
    const next = (this.activeIndex + delta + count) % count;
    this.setActiveIndex(next);
  }

  private setActiveIndex(index: number): void {
    const enabled = this.enabledItems();
    if (enabled.length === 0) {
      this.activeIndex = -1;
      return;
    }
    const clamped = Math.max(0, Math.min(index, enabled.length - 1));
    this.activeIndex = clamped;
    enabled.forEach((item, i) => {
      item.active = i === clamped;
    });
  }

  private clearActive(): void {
    this.activeIndex = -1;
    this.items?.forEach((item) => {
      item.active = false;
    });
  }
}
