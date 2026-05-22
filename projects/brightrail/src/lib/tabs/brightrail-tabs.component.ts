import { NgTemplateOutlet } from '@angular/common';
import { BRIGHTRAIL_FX_SHELL_HOST } from '../futuristic/brightrail-futuristic-host';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  contentChildren,
  effect,
  input,
  output,
  signal,
  untracked,
} from '@angular/core';

import { BrightrailButtonIconComponent } from '../buttons/brightrail-button-icon.component';
import { BrightrailTabComponent } from './brightrail-tab.component';

export type BrightrailTabsAppearance = 'underline' | 'contained' | 'pill' | 'segmented';
export type BrightrailTabsOrientation = 'horizontal' | 'vertical';
export type BrightrailTabsSize = 'sm' | 'md' | 'lg';
export type BrightrailTabsCorners = 'rounded' | 'square';
export type BrightrailTabsState = 'default' | 'disabled';
export type BrightrailTabsStatus = 'none' | 'success' | 'warning' | 'error' | 'info';
/** Icon above label (analytics-style). */
export type BrightrailTabsTriggerLayout = 'inline' | 'stacked';

@Component({
  selector: 'brightrail-tabs',
  standalone: true,
  hostDirectives: [BRIGHTRAIL_FX_SHELL_HOST],
  imports: [NgTemplateOutlet, BrightrailButtonIconComponent],
  template: `
    <div [class]="hostClass()" [attr.data-status]="status() !== 'none' ? status() : null">
      <div class="br-tabs__shell">
        <div class="br-tabs__list-wrap" [class.br-tabs__list-wrap--scroll]="scrollable()">
          <div
            class="br-tabs__list"
            role="tablist"
            [attr.aria-orientation]="orientation()"
          >
            @for (tab of tabs(); track tab.tabId; let i = $index) {
              <button
                type="button"
                class="br-tab"
                [class.br-tab--stacked]="triggerLayout() === 'stacked'"
                [class.br-tab--icon-only]="tab.iconOnly()"
                role="tab"
                [id]="triggerId(tab)"
                [attr.aria-label]="tab.iconOnly() ? tab.label() : null"
                [attr.tabIndex]="selectedIndex() === i ? 0 : -1"
                [attr.aria-selected]="selectedIndex() === i"
                [attr.aria-controls]="panelId(tab)"
                [disabled]="barDisabled() || tab.disabled()"
                (click)="onSelect(i, tab)"
                (keydown)="onTriggerKeydown($event, i)"
              >
                @if (tab.icon(); as ic) {
                  <span class="br-tab__ico" aria-hidden="true">
                    <brightrail-button-icon [name]="ic" />
                  </span>
                }
                @if (!tab.iconOnly()) {
                  <span class="br-tab__label">{{ tab.label() }}</span>
                }
                @if (tab.badge() !== undefined) {
                  <span class="br-tab__badge">{{ tab.badge() }}</span>
                }
                @if (tab.closable()) {
                  <span
                    class="br-tab__close"
                    role="presentation"
                    (click)="onCloseClick($event, tab)"
                  >
                    <brightrail-button-icon name="close" />
                  </span>
                }
              </button>
            }
          </div>
        </div>
        <div
          class="br-tabs__panel"
          role="tabpanel"
          [attr.id]="activeTab() ? panelId(activeTab()!) : 'br-tabs-empty-panel'"
          [attr.aria-labelledby]="activeTab() ? triggerId(activeTab()!) : null"
          [hidden]="!activeTemplate()"
        >
          @if (activeTemplate(); as tpl) {
            <ng-container *ngTemplateOutlet="tpl" />
          }
        </div>
      </div>
    </div>
  `,
  styleUrl: './brightrail-tabs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrightrailTabsComponent {
  readonly appearance = input<BrightrailTabsAppearance>('underline');
  readonly orientation = input<BrightrailTabsOrientation>('horizontal');
  readonly size = input<BrightrailTabsSize>('md');
  readonly corners = input<BrightrailTabsCorners>('rounded');
  readonly state = input<BrightrailTabsState>('default');
  readonly status = input<BrightrailTabsStatus>('none');
  readonly scrollable = input(false);
  readonly triggerLayout = input<BrightrailTabsTriggerLayout>('inline');

  readonly selectedIndexChange = output<number>();

  readonly tabs = contentChildren(BrightrailTabComponent);

  readonly selectedIndex = signal(0);

  private readonly selectionInitialized = signal(false);

  readonly hostClass = computed(() => {
    const parts = [
      'br-tabs',
      `br-tabs--${this.appearance()}`,
      `br-tabs--${this.orientation()}`,
      `br-tabs--size-${this.size()}`,
      `br-tabs--corners-${this.corners()}`,
    ];
    if (this.barDisabled()) {
      parts.push('br-tabs--disabled');
    }
    return parts.join(' ');
  });

  readonly barDisabled = computed(() => this.state() === 'disabled');

  readonly activeTab = computed(() => {
    const list = this.tabs();
    const i = Math.min(this.selectedIndex(), Math.max(0, list.length - 1));
    return list[i] ?? null;
  });

  readonly activeTemplate = computed(() => this.activeTab()?.panelTemplate() ?? null);

  constructor() {
    effect(() => {
      const list = this.tabs();
      const len = list.length;
      if (!len) {
        return;
      }

      untracked(() => {
        if (!this.selectionInitialized()) {
          const preferred = list.findIndex((t) => t.active());
          const idx = preferred >= 0 ? preferred : 0;
          this.selectedIndex.set(idx);
          this.selectionInitialized.set(true);
          return;
        }

        if (this.selectedIndex() >= len) {
          this.selectedIndex.set(len - 1);
        }
      });
    });
  }

  triggerId(tab: BrightrailTabComponent): string {
    return `${tab.tabId}-trigger`;
  }

  panelId(tab: BrightrailTabComponent | null): string {
    return tab ? `${tab.tabId}-panel` : 'br-tabs-panel-none';
  }

  onSelect(index: number, tab: BrightrailTabComponent): void {
    if (this.barDisabled() || tab.disabled()) {
      return;
    }
    this.selectedIndex.set(index);
    this.selectedIndexChange.emit(index);
  }

  onCloseClick(ev: MouseEvent, tab: BrightrailTabComponent): void {
    ev.preventDefault();
    ev.stopPropagation();
    tab.close.emit();
  }

  onTriggerKeydown(ev: KeyboardEvent, index: number): void {
    const list = this.tabs();
    if (!list.length || this.barDisabled()) {
      return;
    }

    const horizontal = this.orientation() === 'horizontal';
    const nextKey = horizontal ? 'ArrowRight' : 'ArrowDown';
    const prevKey = horizontal ? 'ArrowLeft' : 'ArrowUp';

    let nextIdx: number;

    if (ev.key === nextKey) {
      ev.preventDefault();
      nextIdx = this.stepEnabled(index, 1);
    } else if (ev.key === prevKey) {
      ev.preventDefault();
      nextIdx = this.stepEnabled(index, -1);
    } else if (ev.key === 'Home') {
      ev.preventDefault();
      nextIdx = this.firstEnabledIndex();
    } else if (ev.key === 'End') {
      ev.preventDefault();
      nextIdx = this.lastEnabledIndex();
    } else {
      return;
    }

    this.onSelect(nextIdx, list[nextIdx]!);
    queueMicrotask(() =>
      document.getElementById(this.triggerId(list[nextIdx]!))?.focus(),
    );
  }

  private stepEnabled(from: number, delta: 1 | -1): number {
    const list = this.tabs();
    const len = list.length;
    if (!len) {
      return 0;
    }
    let i = from;
    for (let _ = 0; _ < len; _++) {
      i = (i + delta + len) % len;
      if (!list[i]?.disabled()) {
        return i;
      }
    }
    return from;
  }

  private firstEnabledIndex(): number {
    const list = this.tabs();
    const ix = list.findIndex((t) => !t.disabled());
    return ix >= 0 ? ix : 0;
  }

  private lastEnabledIndex(): number {
    const list = this.tabs();
    for (let i = list.length - 1; i >= 0; i--) {
      if (!list[i]!.disabled()) {
        return i;
      }
    }
    return 0;
  }
}
