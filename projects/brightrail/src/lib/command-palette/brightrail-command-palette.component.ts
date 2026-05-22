import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  computed,
  effect,
  inject,
  input,
  output,
  signal,
  untracked,
  viewChild,
} from '@angular/core';

import { BrightrailFocusTrapDirective } from '../platform/brightrail-focus-trap.directive';
import { BrightrailLiveAnnouncerService } from '../platform/brightrail-live-announcer.service';
import type { BrightrailCommandPaletteItem } from './brightrail-command-palette.types';
import { filterCommandPaletteItems, groupCommandPaletteItems } from './brightrail-command-palette.utils';
import { BRIGHTRAIL_FX_SHELL_HOST } from '../futuristic/brightrail-futuristic-host';

@Component({
  selector: 'brightrail-command-palette',
  hostDirectives: [BRIGHTRAIL_FX_SHELL_HOST],
  standalone: true,
  imports: [BrightrailFocusTrapDirective],
  templateUrl: './brightrail-command-palette.component.html',
  styleUrl: './brightrail-command-palette.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrightrailCommandPaletteComponent {
  private readonly announcer = inject(BrightrailLiveAnnouncerService);

  readonly isOpen = input(false);
  readonly commands = input<BrightrailCommandPaletteItem[]>([]);
  readonly placeholder = input('Search commands…');
  readonly emptyLabel = input('No matching commands');
  readonly ariaLabel = input('Command palette');
  readonly closeOnEscape = input(true);
  readonly closeOnBackdrop = input(true);

  readonly commandSelect = output<BrightrailCommandPaletteItem>();
  readonly closed = output<void>();

  private readonly queryInput = viewChild<ElementRef<HTMLInputElement>>('queryInput');

  readonly query = signal('');
  readonly activeId = signal<string | null>(null);

  readonly filteredItems = computed(() => filterCommandPaletteItems(this.commands(), this.query()));

  readonly groupedItems = computed(() => groupCommandPaletteItems(this.filteredItems()));

  readonly flatFilteredIds = computed(() => this.filteredItems().map((item) => item.id));

  readonly activeDescendantId = computed(() => {
    const id = this.activeId();
    return id ? this.optionId(id) : null;
  });

  constructor() {
    effect(() => {
      const open = this.isOpen();
      const ids = this.flatFilteredIds();
      untracked(() => {
        if (!open) {
          this.query.set('');
          this.activeId.set(null);
          return;
        }
        if (!ids.length) {
          this.activeId.set(null);
          return;
        }
        const current = this.activeId();
        if (!current || !ids.includes(current)) {
          this.activeId.set(ids[0]);
        }
        queueMicrotask(() => this.queryInput()?.nativeElement.focus());
      });
    });

    effect(() => {
      if (!this.isOpen()) {
        return;
      }
      const query = this.query().trim();
      const count = this.filteredItems().length;
      untracked(() => {
        if (!query) {
          return;
        }
        const message =
          count === 0
            ? this.emptyLabel()
            : `${count} ${count === 1 ? 'result' : 'results'}`;
        void this.announcer.announce(message, 'polite');
      });
    });
  }

  optionId(id: string): string {
    return `br-cmd-${id}`;
  }

  isActive(id: string): boolean {
    return this.activeId() === id;
  }

  setActiveId(id: string): void {
    this.activeId.set(id);
  }

  onQueryInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.query.set(value);
    const ids = this.flatFilteredIds();
    this.activeId.set(ids[0] ?? null);
  }

  onBackdropClick(): void {
    if (!this.closeOnBackdrop()) {
      return;
    }
    this.closed.emit();
  }

  onDialogKeydown(event: KeyboardEvent): void {
    const ids = this.flatFilteredIds();
    const current = this.activeId();
    const index = current ? ids.indexOf(current) : -1;

    switch (event.key) {
      case 'ArrowDown': {
        event.preventDefault();
        if (!ids.length) return;
        const next = index < ids.length - 1 ? index + 1 : 0;
        this.activeId.set(ids[next]);
        break;
      }
      case 'ArrowUp': {
        event.preventDefault();
        if (!ids.length) return;
        const prev = index > 0 ? index - 1 : ids.length - 1;
        this.activeId.set(ids[prev]);
        break;
      }
      case 'Enter': {
        event.preventDefault();
        const item = this.filteredItems().find((c) => c.id === current);
        if (item) {
          this.selectItem(item);
        }
        break;
      }
      case 'Escape': {
        if (!this.closeOnEscape()) return;
        event.preventDefault();
        event.stopPropagation();
        this.closed.emit();
        break;
      }
      default:
        break;
    }
  }

  @HostListener('document:keydown.escape', ['$event'])
  onDocumentEscape(event: Event): void {
    if (!this.isOpen() || !this.closeOnEscape()) {
      return;
    }
    event.preventDefault();
    event.stopPropagation();
    this.closed.emit();
  }

  selectItem(item: BrightrailCommandPaletteItem): void {
    if (item.disabled) {
      return;
    }
    this.commandSelect.emit(item);
  }
}
