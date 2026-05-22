import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  linkedSignal,
  output,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BrightrailButtonIconComponent } from '../buttons/brightrail-button-icon.component';
import { BRIGHTRAIL_FX_SHELL_HOST } from '../futuristic/brightrail-futuristic-host';

export type BrightrailPaginationVariant =
  | 'numbered'
  | 'minimal'
  | 'simple'
  | 'icon-only'
  | 'mobile'
  | 'mobile-sheet';

export type BrightrailPaginationSize = 'sm' | 'md' | 'lg';
export type BrightrailPaginationState = 'default' | 'disabled';
export type BrightrailPaginationPageSizePosition = 'start' | 'end' | 'both';

export type BrightrailPaginationSummaryMode =
  | 'none'
  | 'range'
  | 'results'
  | 'filtered'
  | 'server';

function totalPagesFrom(length: number, pageSize: number, override: number | undefined): number {
  if (override !== undefined && override >= 0) {
    return Math.max(0, Math.floor(override));
  }
  if (pageSize <= 0) {
    return 0;
  }
  return Math.max(1, Math.ceil(Math.max(0, length) / pageSize));
}

function clampPage(page: number, total: number): number {
  if (total <= 0) {
    return 0;
  }
  return Math.min(Math.max(0, page), total - 1);
}

/** Build 0-based page indices with ellipsis markers for numbered variants. */
function buildPageList(
  current: number,
  total: number,
  maxSlots: number,
): (number | 'ellipsis')[] {
  if (total <= 0) {
    return [0];
  }
  if (total <= maxSlots) {
    return Array.from({ length: total }, (_, i) => i);
  }
  const pages = new Set<number>([0, total - 1, current, current - 1, current + 1]);
  const sorted = [...pages].filter((p) => p >= 0 && p < total).sort((a, b) => a - b);
  const out: (number | 'ellipsis')[] = [];
  for (let i = 0; i < sorted.length; i++) {
    const p = sorted[i]!;
    if (i > 0) {
      const prev = sorted[i - 1]!;
      const gap = p - prev;
      if (gap > 1) {
        out.push('ellipsis');
      }
    }
    out.push(p);
  }
  return out;
}

@Component({
  selector: 'brightrail-pagination',
  hostDirectives: [BRIGHTRAIL_FX_SHELL_HOST],
  standalone: true,
  imports: [FormsModule, BrightrailButtonIconComponent],
  template: `
    <nav [class]="hostClass()" [attr.aria-label]="ariaLabel()" [attr.aria-disabled]="effectiveDisabled() ? true : null">
      <div class="br-pag__inner">
        @if (showLeadingPageSize()) {
          <div class="br-pag__page-size">
            <label class="br-pag__sr-only" [attr.for]="pageSizeId">Rows per page</label>
            <select
              class="br-pag__select"
              [id]="pageSizeId"
              [disabled]="effectiveDisabled()"
              [ngModel]="pageSize()"
              (ngModelChange)="onPageSizePick($event)"
            >
              @for (opt of pageSizeOptions(); track opt) {
                <option [ngValue]="opt">{{ opt }} / page</option>
              }
            </select>
          </div>
        }

        @if (summaryText(); as sum) {
          <div class="br-pag__summary" aria-live="polite">{{ sum }}</div>
        }

        <div class="br-pag__controls">
          @if (showFirstLast() && variant() !== 'simple' && variant() !== 'mobile' && variant() !== 'mobile-sheet') {
            <button
              type="button"
              class="br-pag__btn br-pag__btn--edge"
              [disabled]="effectiveDisabled() || pageIndex() <= 0"
              (click)="goFirst()"
              aria-label="First page"
            >
              <span class="br-pag__edge-dbl br-pag__edge-dbl--first" aria-hidden="true">
                <brightrail-button-icon name="chevron-right" />
                <brightrail-button-icon name="chevron-right" />
              </span>
            </button>
          }

          @if (showPrevNext()) {
            <button
              type="button"
              class="br-pag__btn br-pag__btn--nav"
              [disabled]="effectiveDisabled() || pageIndex() <= 0"
              (click)="goPrev()"
              [attr.aria-label]="variant() === 'simple' ? null : 'Previous page'"
            >
              @if (variant() === 'simple') {
                <span>Previous</span>
              } @else {
                <span class="br-pag__chev-left" aria-hidden="true"><brightrail-button-icon name="chevron-right" /></span>
              }
            </button>
          }

          @if (variant() === 'mobile' || variant() === 'mobile-sheet') {
            <span class="br-pag__mobile-label">Page {{ pageIndex() + 1 }} of {{ pageCount() }}</span>
          }

          @if (variant() === 'mobile-sheet') {
            <button
              type="button"
              class="br-pag__btn br-pag__btn--sheet"
              [disabled]="effectiveDisabled()"
              (click)="onMobileSheetToggle($event)"
              aria-haspopup="listbox"
              aria-label="Choose page"
            >
              <span class="br-pag__sheet-chev" aria-hidden="true">▲</span>
            </button>
          }

          @if (variant() === 'numbered' || variant() === 'minimal') {
            @for (entry of pageButtons(); track $index) {
              @if (entry === 'ellipsis') {
                <span class="br-pag__ellipsis" aria-hidden="true">…</span>
              } @else {
                <button
                  type="button"
                  class="br-pag__btn br-pag__btn--page"
                  [class.br-pag__btn--active]="entry === pageIndex()"
                  [disabled]="effectiveDisabled()"
                  (click)="goPage(entry)"
                  [attr.aria-current]="entry === pageIndex() ? 'page' : null"
                >
                  {{ entry + 1 }}
                </button>
              }
            }
          }

          @if (showPrevNext()) {
            <button
              type="button"
              class="br-pag__btn br-pag__btn--nav"
              [disabled]="effectiveDisabled() || pageIndex() >= pageCount() - 1"
              (click)="goNext()"
              [attr.aria-label]="variant() === 'simple' ? null : 'Next page'"
            >
              @if (variant() === 'simple') {
                <span>Next</span>
              } @else {
                <span class="br-pag__chev-right" aria-hidden="true"><brightrail-button-icon name="chevron-right" /></span>
              }
            </button>
          }

          @if (showFirstLast() && variant() !== 'simple' && variant() !== 'mobile' && variant() !== 'mobile-sheet') {
            <button
              type="button"
              class="br-pag__btn br-pag__btn--edge"
              [disabled]="effectiveDisabled() || pageIndex() >= pageCount() - 1"
              (click)="goLast()"
              aria-label="Last page"
            >
              <span class="br-pag__edge-dbl br-pag__edge-dbl--last" aria-hidden="true">
                <brightrail-button-icon name="chevron-right" />
                <brightrail-button-icon name="chevron-right" />
              </span>
            </button>
          }
        </div>

        @if (showTrailingPageSize()) {
          <div class="br-pag__page-size">
            <label class="br-pag__sr-only" [attr.for]="pageSizeId + '-end'">Rows per page</label>
            <select
              class="br-pag__select"
              [id]="pageSizeId + '-end'"
              [disabled]="effectiveDisabled()"
              [ngModel]="pageSize()"
              (ngModelChange)="onPageSizePick($event)"
            >
              @for (opt of pageSizeOptions(); track opt) {
                <option [ngValue]="opt">{{ opt }} / page</option>
              }
            </select>
          </div>
        }

        @if (showJumpToPage()) {
          <div class="br-pag__jump">
            <label class="br-pag__jump-label" [attr.for]="jumpId">Go to</label>
            <input
              type="number"
              class="br-pag__jump-input"
              [id]="jumpId"
              min="1"
              [max]="pageCount()"
              [disabled]="effectiveDisabled()"
              [ngModel]="jumpDraft()"
              (ngModelChange)="jumpDraft.set($event)"
            />
            <span class="br-pag__jump-of">/ {{ pageCount() }}</span>
            <button type="button" class="br-pag__btn br-pag__btn--go" [disabled]="effectiveDisabled()" (click)="commitJump()">
              Go
            </button>
          </div>
        }
      </div>
    </nav>
  `,
  styleUrl: './brightrail-pagination.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrightrailPaginationComponent {
  private static nextId = 0;

  /** Total item count (used with `pageSize` unless `totalPages` is set). */
  readonly length = input(0);
  /** Total page count; when set, overrides `length` / `pageSize` for page math. */
  readonly totalPagesOverride = input<number | undefined>(undefined, { alias: 'totalPages' });

  readonly pageIndex = input(0);
  readonly pageSize = input(10);
  readonly pageSizeOptions = input<number[]>([10, 25, 50]);

  readonly showPageSize = input(false);
  readonly showFirstLast = input(true);
  readonly showPrevNext = input(true);

  readonly variant = input<BrightrailPaginationVariant>('numbered');
  readonly size = input<BrightrailPaginationSize>('md');
  readonly state = input<BrightrailPaginationState>('default');
  readonly compact = input(false);

  readonly pageSizePosition = input<BrightrailPaginationPageSizePosition>('end');

  readonly summaryMode = input<BrightrailPaginationSummaryMode>('none');
  /** Plural resource label for summaries (e.g. "items", "results"). */
  readonly summaryItemsLabel = input('items');

  readonly showJumpToPage = input(false);

  /** Max numeric page buttons before ellipsis (numbered / minimal). */
  readonly maxPageButtons = input(7);

  readonly ariaLabel = input('Pagination navigation');

  readonly pageChange = output<number>();
  readonly pageSizeChange = output<number>();
  /** `mobile-sheet` only: fired when the sheet affordance is activated (wire to a bottom sheet / menu). */
  readonly sheetToggle = output<void>();

  readonly pageSizeId = `br-pag-ps-${++BrightrailPaginationComponent.nextId}`;
  readonly jumpId = `br-pag-jp-${BrightrailPaginationComponent.nextId}`;

  readonly jumpDraft = linkedSignal<number | string>(() => this.pageIndex() + 1);

  readonly rawPageCount = computed(() =>
    totalPagesFrom(this.length(), this.pageSize(), this.totalPagesOverride()),
  );

  /** At least 1 for stable UI when data is empty. */
  readonly pageCount = computed(() => Math.max(1, this.rawPageCount() || 1));

  readonly effectiveDisabled = computed(() => this.state() === 'disabled' || this.length() === 0);

  readonly pageButtons = computed(() => {
    const total = this.rawPageCount();
    const cur = clampPage(this.pageIndex(), total || 1);
    const max = this.variant() === 'minimal' ? 5 : this.maxPageButtons();
    return buildPageList(cur, total || 1, max);
  });

  readonly summaryText = computed(() => {
    const mode = this.summaryMode();
    if (mode === 'none') {
      return '';
    }
    const total = this.length();
    const size = this.pageSize();
    const page = clampPage(this.pageIndex(), this.rawPageCount() || 1);
    const start = total === 0 ? 0 : page * size + 1;
    const end = total === 0 ? 0 : Math.min(total, (page + 1) * size);
    const label = this.summaryItemsLabel();

    if (mode === 'range') {
      return total === 0 ? `0–0 of 0` : `${start}–${end} of ${total}`;
    }
    if (mode === 'results') {
      return `${total} ${label}`;
    }
    if (mode === 'filtered') {
      return `${total} ${label} (filtered)`;
    }
    if (mode === 'server') {
      return total === 0 ? `0–0 of 0 • Server` : `${start}–${end} of ${total} • Server`;
    }
    return '';
  });

  readonly hostClass = computed(() => {
    const parts = [
      'br-pag',
      `br-pag--${this.variant()}`,
      `br-pag--size-${this.size()}`,
      this.compact() ? 'br-pag--compact' : '',
      this.effectiveDisabled() ? 'br-pag--disabled' : '',
    ];
    return parts.filter(Boolean).join(' ');
  });

  showLeadingPageSize(): boolean {
    if (!this.showPageSize()) {
      return false;
    }
    const pos = this.pageSizePosition();
    return pos === 'start' || pos === 'both';
  }

  showTrailingPageSize(): boolean {
    if (!this.showPageSize()) {
      return false;
    }
    const pos = this.pageSizePosition();
    return pos === 'end' || pos === 'both';
  }

  goFirst(): void {
    this.emitPage(0);
  }

  goLast(): void {
    const t = this.rawPageCount();
    this.emitPage(Math.max(0, t - 1));
  }

  goPrev(): void {
    this.emitPage(this.pageIndex() - 1);
  }

  goNext(): void {
    this.emitPage(this.pageIndex() + 1);
  }

  goPage(index: number): void {
    this.emitPage(index);
  }

  private emitPage(next: number): void {
    if (this.effectiveDisabled()) {
      return;
    }
    const t = this.rawPageCount();
    const clamped = clampPage(next, t || 1);
    this.pageChange.emit(clamped);
  }

  onPageSizePick(next: number): void {
    if (this.effectiveDisabled()) {
      return;
    }
    this.pageSizeChange.emit(next);
  }

  commitJump(): void {
    const raw = this.jumpDraft();
    const n = typeof raw === 'string' ? parseInt(raw, 10) : raw;
    if (!Number.isFinite(n)) {
      return;
    }
    const page = clampPage(Math.floor(n) - 1, this.rawPageCount() || 1);
    this.emitPage(page);
    this.jumpDraft.set(page + 1);
  }

  onMobileSheetToggle(ev: Event): void {
    ev.preventDefault();
    if (this.effectiveDisabled()) {
      return;
    }
    this.sheetToggle.emit();
  }
}
