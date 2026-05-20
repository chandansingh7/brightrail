import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  output,
} from '@angular/core';

import type { BrightrailBadgeVariant } from '../badge/brightrail-badge.component';
import { BrightrailBadgeComponent } from '../badge/brightrail-badge.component';
import { BrightrailButtonIconComponent, type BrightrailButtonIcon } from '../buttons/brightrail-button-icon.component';

import { BRIGHTRAIL_ACCORDION } from './brightrail-accordion-api';

export type BrightrailAccordionItemIcon = BrightrailButtonIcon;
export type BrightrailAccordionItemPresentation = 'default' | 'enterprise-card';

let accordionItemUid = 0;

@Component({
  selector: 'brightrail-accordion-item',
  standalone: true,
  imports: [BrightrailButtonIconComponent, BrightrailBadgeComponent],
  template: `
    <div [class]="itemClass()" [attr.data-expanded]="expanded() ? '' : null">
      <div class="br-acc-item__header-row">
        <h3 class="br-acc-item__heading">
          <button
            type="button"
            class="br-acc-item__trigger"
            [id]="triggerId"
            [disabled]="disabled() || accordionHost.disabled()"
            [attr.tabindex]="accordionHost.tabIndexForItem(itemIndex())"
            [attr.aria-expanded]="expanded()"
            [attr.aria-controls]="panelId"
            (focus)="accordionHost.onTriggerFocus(itemIndex())"
            (click)="onToggle()"
            (keydown)="accordionHost.onTriggerKeydown($event, itemIndex())"
          >
            @if (accordionHost.iconPosition() === 'left') {
              <span
                class="br-acc-item__chev br-acc-item__chev--start"
                [class.br-acc-item__chev--glyph-down]="accordionHost.headerChevronStyle() === 'down'"
                [class.br-acc-item__chev--glyph-arrow]="accordionHost.headerChevronStyle() === 'right'"
                aria-hidden="true"
              >
                <brightrail-button-icon [name]="chevronIconName()" />
              </span>
            }
            @if (icon(); as ic) {
              @if (ic !== 'none') {
                @if (useEnterpriseChrome()) {
                  <span class="br-acc-item__ico-shell" aria-hidden="true">
                    <span class="br-acc-item__ico">
                      <brightrail-button-icon [name]="ic" />
                    </span>
                  </span>
                } @else {
                  <span class="br-acc-item__ico" aria-hidden="true">
                    <brightrail-button-icon [name]="ic" />
                  </span>
                }
              }
            }
            <span class="br-acc-item__text">
              <span class="br-acc-item__title">{{ title() }}</span>
              @if (subtitle()) {
                <span class="br-acc-item__subtitle">{{ subtitle() }}</span>
              }
            </span>
            @if (badgeText() !== undefined && badgeText() !== '') {
              <span class="br-acc-item__badge">
                <brightrail-badge
                  [label]="'' + badgeText()!"
                  [color]="badgeColor()"
                  [variant]="badgeVariant()"
                />
              </span>
            }
            @if (accordionHost.iconPosition() === 'right') {
              <span
                class="br-acc-item__chev br-acc-item__chev--end"
                [class.br-acc-item__chev--glyph-down]="accordionHost.headerChevronStyle() === 'down'"
                [class.br-acc-item__chev--glyph-arrow]="accordionHost.headerChevronStyle() === 'right'"
                aria-hidden="true"
              >
                <brightrail-button-icon [name]="chevronIconName()" />
              </span>
            }
          </button>
        </h3>
        <div class="br-acc-item__actions" (click)="$event.stopPropagation()">
          <ng-content select=".br-acc-header-actions" />
        </div>
      </div>
      <div
        class="br-acc-item__region"
        role="region"
        [attr.id]="panelId"
        [attr.aria-labelledby]="triggerId"
        [hidden]="!expanded()"
      >
        <div class="br-acc-item__panel">
          <ng-content />
        </div>
      </div>
    </div>
  `,
  styleUrl: './brightrail-accordion-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrightrailAccordionItemComponent {
  /** Exposed for template bindings (host accordion API). */
  protected readonly accordionHost = inject(BRIGHTRAIL_ACCORDION);

  readonly title = input.required<string>();
  /** Secondary line under the title (enterprise cards, dense summaries). */
  readonly subtitle = input<string | undefined>(undefined);
  /** Use rounded icon shell + stacked title (also implied when the parent accordion uses `layout="enterprise-grid"`). */
  readonly presentation = input<BrightrailAccordionItemPresentation>('default');
  readonly disabled = input(false);
  /** Leading header icon (before title). */
  readonly icon = input<BrightrailAccordionItemIcon | 'none'>('none');
  /** Optional badge label in the header row. */
  readonly badgeText = input<string | number | undefined>(undefined);
  readonly badgeColor = input<
    'primary' | 'success' | 'warning' | 'danger' | 'neutral' | 'critical' | 'info' | 'priority'
  >('neutral');
  readonly badgeVariant = input<BrightrailBadgeVariant>('soft');

  /** Emits whenever this item expands or collapses. */
  readonly expandedChange = output<boolean>();

  readonly triggerId = `br-acc-tr-${++accordionItemUid}`;
  readonly panelId = `br-acc-pn-${accordionItemUid}`;

  readonly expanded = computed(() => {
    const idx = this.accordionHost.indexOfItem(this);
    if (idx < 0) {
      return false;
    }
    return this.accordionHost.expandedIndices().has(idx);
  });

  readonly itemIndex = computed(() => this.accordionHost.indexOfItem(this));

  focusTrigger(): void {
    document.getElementById(this.triggerId)?.focus();
  }

  readonly useEnterpriseChrome = computed(() => {
    if (this.presentation() === 'enterprise-card') {
      return true;
    }
    return this.accordionHost.accordionLayout() === 'enterprise-grid';
  });

  readonly chevronIconName = computed((): BrightrailButtonIcon =>
    this.accordionHost.headerChevronStyle() === 'right' ? 'chevron-right' : 'chevron-down',
  );

  readonly itemClass = computed(() => {
    const parts = ['br-acc-item', `br-acc-item--size-${this.accordionHost.size()}`];
    if (this.useEnterpriseChrome()) {
      parts.push('br-acc-item--enterprise');
    }
    if (this.expanded()) {
      parts.push('br-acc-item--expanded');
    }
    if (this.disabled() || this.accordionHost.disabled()) {
      parts.push('br-acc-item--disabled');
    }
    if (this.accordionHost.showHoverState() && !this.disabled() && !this.accordionHost.disabled()) {
      parts.push('br-acc-item--demo-hover');
    }
    return parts.join(' ');
  });

  onToggle(): void {
    if (this.disabled() || this.accordionHost.disabled()) {
      return;
    }
    const idx = this.accordionHost.indexOfItem(this);
    if (idx < 0) {
      return;
    }
    const wasOpen = this.expanded();
    this.accordionHost.toggleIndex(idx);
    this.expandedChange.emit(!wasOpen);
  }
}
