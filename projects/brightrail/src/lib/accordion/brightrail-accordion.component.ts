import {
  ChangeDetectionStrategy,
  Component,
  computed,
  contentChildren,
  effect,
  forwardRef,
  input,
  output,
  signal,
  untracked,
} from '@angular/core';

import {
  BRIGHTRAIL_ACCORDION,
  type BrightrailAccordionApi,
  type BrightrailAccordionHeaderChevron,
  type BrightrailAccordionLayout,
} from './brightrail-accordion-api';
import { BrightrailAccordionItemComponent } from './brightrail-accordion-item.component';

export type BrightrailAccordionAppearance = 'standard' | 'bordered' | 'subtle' | 'compact';
export type BrightrailAccordionExpandMode = 'single' | 'multi';

export type { BrightrailAccordionLayout, BrightrailAccordionHeaderChevron };

@Component({
  selector: 'brightrail-accordion',
  standalone: true,
  providers: [{ provide: BRIGHTRAIL_ACCORDION, useExisting: forwardRef(() => BrightrailAccordionComponent) }],
  template: `
    <div [class]="hostClass()" role="presentation" [attr.aria-label]="ariaLabel() || null">
      <ng-content />
    </div>
  `,
  styleUrl: './brightrail-accordion.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrightrailAccordionComponent implements BrightrailAccordionApi {
  /** Visual treatment of items. */
  readonly appearance = input<BrightrailAccordionAppearance>('standard');
  /** Alias matching design docs. */
  readonly variant = input<BrightrailAccordionAppearance | undefined>(undefined, { alias: 'variant' });

  readonly size = input<'sm' | 'md' | 'lg'>('md');
  readonly expandMode = input<BrightrailAccordionExpandMode>('single');
  /** When set, overrides `expandMode` (true → multi). */
  readonly allowMultiExpand = input<boolean | undefined>(undefined);

  readonly iconPosition = input<'left' | 'right'>('right');
  /** Stack items vertically (default) or render a 2-column enterprise card grid. */
  readonly layout = input<BrightrailAccordionLayout>('stack');
  /**
   * When `down`, the trailing chevron rotates from down → up when expanded.
   * When `right`, a right-pointing chevron rotates to up when expanded (spec “right chevron” row).
   */
  readonly headerChevron = input<BrightrailAccordionHeaderChevron>('down');
  /** Show dividers between items. */
  readonly showDivider = input(true);
  /** Initially expanded item index (0-based). Use `null` for none. Ignored when `defaultExpandedIndices` is set. */
  readonly defaultExpandedIndex = input<number | null>(0);
  /** When set, these indices start expanded (e.g. multi-expand demos). Overrides `defaultExpandedIndex`. */
  readonly defaultExpandedIndices = input<number[] | undefined>(undefined);

  readonly disabled = input(false);
  /** For playgrounds/docs only: simulates hover styling on items. */
  readonly showHoverState = input(false);

  readonly ariaLabel = input<string | undefined>(undefined);

  readonly expandedIndicesChange = output<Set<number>>();

  readonly items = contentChildren(BrightrailAccordionItemComponent);

  readonly expandedIndices = signal<Set<number>>(new Set());

  private selectionPrimed = false;

  readonly hostClass = computed(() => {
    const appearance = this.variant() ?? this.appearance();
    const parts = [
      'br-acc',
      `br-acc--${appearance}`,
      `br-acc--size-${this.size()}`,
      `br-acc--icon-${this.iconPosition()}`,
    ];
    if (this.showDivider()) {
      parts.push('br-acc--divided');
    }
    if (this.disabled()) {
      parts.push('br-acc--disabled');
    }
    if (this.layout() === 'enterprise-grid') {
      parts.push('br-acc--layout-enterprise');
    }
    return parts.join(' ');
  });

  constructor() {
    effect(() => {
      const list = this.items();
      const len = list.length;
      if (!len || this.selectionPrimed) {
        return;
      }
      const multi = this.defaultExpandedIndices();
      const def = this.defaultExpandedIndex();
      untracked(() => {
        if (multi && multi.length > 0) {
          const next = new Set<number>();
          for (const i of multi) {
            if (i >= 0 && i < len) {
              next.add(i);
            }
          }
          if (next.size > 0) {
            this.expandedIndices.set(next);
          }
        } else if (def !== null && def !== undefined && def >= 0 && def < len) {
          this.expandedIndices.set(new Set([def]));
        }
        this.selectionPrimed = true;
      });
    });
  }

  indexOfItem(item: unknown): number {
    return this.items().indexOf(item as BrightrailAccordionItemComponent);
  }

  accordionLayout(): BrightrailAccordionLayout {
    return this.layout();
  }

  headerChevronStyle(): BrightrailAccordionHeaderChevron {
    return this.headerChevron();
  }

  toggleIndex(index: number): void {
    if (this.disabled()) {
      return;
    }
    const len = this.items().length;
    if (index < 0 || index >= len) {
      return;
    }
    const allowMulti = this.allowMultiExpand();
    const multi = allowMulti === true || (allowMulti !== false && this.expandMode() === 'multi');
    const cur = new Set(this.expandedIndices());
    const isOpen = cur.has(index);
    if (isOpen) {
      cur.delete(index);
    } else {
      if (!multi) {
        cur.clear();
      }
      cur.add(index);
    }
    this.expandedIndices.set(cur);
    this.expandedIndicesChange.emit(new Set(cur));
  }
}
