import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';

export type BrightrailBreadcrumbSeparator = 'chevron' | 'slash' | 'dot' | 'arrow';
export type BrightrailBreadcrumbSize = 'sm' | 'md' | 'lg';
export type BrightrailBreadcrumbTruncation = 'none' | 'collapse-middle';
export type BrightrailBreadcrumbCurrentItemStyle = 'text' | 'pill' | 'accent';

export interface BrightrailBreadcrumbItem {
  label: string;
  href?: string;
  icon?: string;
  disabled?: boolean;
  current?: boolean;
}
type BrightrailBreadcrumbDisplayItem = BrightrailBreadcrumbItem & { __ellipsis?: boolean };

@Component({
  selector: 'brightrail-breadcrumb',
  standalone: true,
  template: `
    <nav class="br-breadcrumb" aria-label="Breadcrumb">
      <ol
        class="br-breadcrumb__list"
        [class.br-breadcrumb__list--sm]="size() === 'sm'"
        [class.br-breadcrumb__list--md]="size() === 'md'"
        [class.br-breadcrumb__list--lg]="size() === 'lg'"
      >
        @for (item of displayItems(); track $index; let i = $index) {
          <li class="br-breadcrumb__item">
            @if (item.__ellipsis) {
              <span class="br-breadcrumb__ellipsis" aria-hidden="true">…</span>
            } @else {
              @if (isInteractive(item)) {
                <a
                  class="br-breadcrumb__link"
                  [attr.href]="item.href || null"
                  (click)="onItemClick($event, item, i)"
                >
                  @if (withIcons() && item.icon) {
                    <span class="br-breadcrumb__icon" aria-hidden="true">
                      @if (item.icon === 'home') {
                        <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.9">
                          <path d="M3 10.5 12 3l9 7.5" />
                          <path d="M5.5 9.8V20h13V9.8" />
                        </svg>
                      } @else {
                        {{ item.icon }}
                      }
                    </span>
                  }
                  <span>{{ item.label }}</span>
                </a>
              } @else {
                <span
                  class="br-breadcrumb__current"
                  [class.br-breadcrumb__current--pill]="currentItemStyle() === 'pill'"
                  [class.br-breadcrumb__current--accent]="currentItemStyle() === 'accent'"
                  [attr.aria-current]="item.current ? 'page' : null"
                >
                  @if (withIcons() && item.icon) {
                    <span class="br-breadcrumb__icon" aria-hidden="true">
                      @if (item.icon === 'home') {
                        <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.9">
                          <path d="M3 10.5 12 3l9 7.5" />
                          <path d="M5.5 9.8V20h13V9.8" />
                        </svg>
                      } @else {
                        {{ item.icon }}
                      }
                    </span>
                  }
                  <span>{{ item.label }}</span>
                </span>
              }
            }
            @if (i < displayItems().length - 1) {
              <span class="br-breadcrumb__sep" aria-hidden="true">{{ separatorGlyph() }}</span>
            }
          </li>
        }
      </ol>
    </nav>
  `,
  styleUrl: './brightrail-breadcrumb.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrightrailBreadcrumbComponent {
  readonly items = input<BrightrailBreadcrumbItem[]>([]);
  readonly separator = input<BrightrailBreadcrumbSeparator>('slash');
  readonly withIcons = input(true);
  readonly maxItems = input(4);
  readonly truncation = input<BrightrailBreadcrumbTruncation>('collapse-middle');
  readonly currentItemStyle = input<BrightrailBreadcrumbCurrentItemStyle>('text');
  readonly size = input<BrightrailBreadcrumbSize>('md');

  readonly itemClick = output<BrightrailBreadcrumbItem>();

  readonly separatorGlyph = computed(() => {
    switch (this.separator()) {
      case 'chevron':
        return '›';
      case 'dot':
        return '•';
      case 'arrow':
        return '→';
      default:
        return '/';
    }
  });

  readonly displayItems = computed<BrightrailBreadcrumbDisplayItem[]>(() => {
    const src = this.items();
    if (this.truncation() !== 'collapse-middle' || src.length <= this.maxItems()) return src;
    const first = src[0];
    const last = src[src.length - 1];
    const secondLast = src[src.length - 2];
    return [first, { label: '…', __ellipsis: true }, secondLast, last];
  });

  isInteractive(item: BrightrailBreadcrumbItem): boolean {
    return !item.current && !item.disabled;
  }

  onItemClick(event: Event, item: BrightrailBreadcrumbItem, idx: number): void {
    if (!this.isInteractive(item)) {
      event.preventDefault();
      return;
    }
    const list = this.displayItems();
    if (idx === list.length - 1) {
      event.preventDefault();
      return;
    }
    this.itemClick.emit(item);
  }
}
