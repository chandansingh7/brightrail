import { ChangeDetectionStrategy, Component, HostListener, computed, input, output } from '@angular/core';

import { BrightrailFocusTrapDirective } from '../platform/brightrail-focus-trap.directive';

export type BrightrailDrawerPlacement = 'left' | 'right' | 'top' | 'bottom';
export type BrightrailDrawerSize = 'narrow' | 'medium' | 'wide' | 'xwide' | 'full';
export type BrightrailDrawerMode = 'modal' | 'dismissible' | 'persistent';
export type BrightrailDrawerBackdropStyle = 'dim' | 'dim-strong' | 'blur' | 'glass' | 'none';

@Component({
  selector: 'brightrail-drawer',
  standalone: true,
  imports: [BrightrailFocusTrapDirective],
  template: `
    @if (isOpen()) {
      <div
        class="br-drawer-root"
        [class.br-drawer-root--contain]="contain()"
        [class.br-drawer-root--has-backdrop]="showBackdropResolved()"
        [class.br-drawer-root--interactive-backdrop]="isBackdropInteractive()"
        [class.br-drawer-root--mode-persistent]="mode() === 'persistent'"
        [style.--br-drawer-z]="zIndex()"
      >
        @if (showBackdropResolved()) {
          <button
            type="button"
            class="br-drawer__backdrop"
            [class.br-drawer__backdrop--dim]="backdropStyle() === 'dim'"
            [class.br-drawer__backdrop--dim-strong]="backdropStyle() === 'dim-strong'"
            [class.br-drawer__backdrop--blur]="backdropStyle() === 'blur'"
            [class.br-drawer__backdrop--glass]="backdropStyle() === 'glass'"
            [class.br-drawer__backdrop--none]="backdropStyle() === 'none'"
            [disabled]="!isBackdropInteractive()"
            [attr.aria-label]="isBackdropInteractive() ? backdropAriaLabel() : null"
            (click)="onBackdropClick()"
            tabindex="-1"
          ></button>
        }

        <aside
          class="br-drawer__panel"
          brightrailFocusTrap
          brightrailFocusTrapAutoCapture
          [class.br-drawer__panel--left]="placement() === 'left'"
          [class.br-drawer__panel--right]="placement() === 'right'"
          [class.br-drawer__panel--top]="placement() === 'top'"
          [class.br-drawer__panel--bottom]="placement() === 'bottom'"
          [class.br-drawer__panel--size-narrow]="size() === 'narrow'"
          [class.br-drawer__panel--size-medium]="size() === 'medium'"
          [class.br-drawer__panel--size-wide]="size() === 'wide'"
          [class.br-drawer__panel--size-xwide]="size() === 'xwide'"
          [class.br-drawer__panel--size-full]="size() === 'full'"
          [class.br-drawer__panel--sticky-header]="stickyHeader()"
          [class.br-drawer__panel--sticky-footer]="stickyFooter()"
          [class.br-drawer__panel--with-close]="showCloseButton()"
          [class.br-drawer__panel--glass]="surface() === 'glass'"
          [class.br-drawer__panel--flat]="surface() === 'flat'"
          [class.br-drawer__panel--gradient]="surface() === 'gradient'"
          [class.br-drawer__panel--ai]="surface() === 'ai'"
          [style.--br-drawer-width]="width() || null"
          [style.--br-drawer-height]="height() || null"
          [style.--br-drawer-max-width]="maxWidth() || null"
          role="dialog"
          aria-modal="true"
          [attr.aria-labelledby]="labelledBy() || null"
          [attr.aria-label]="ariaLabel() || null"
          tabindex="-1"
        >
          <ng-content />
        </aside>
      </div>
    }
  `,
  styleUrl: './brightrail-drawer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrightrailDrawerComponent {
  readonly isOpen = input(false);
  readonly placement = input<BrightrailDrawerPlacement>('right');
  readonly size = input<BrightrailDrawerSize>('medium');
  readonly mode = input<BrightrailDrawerMode>('modal');
  readonly contain = input(false);
  readonly showBackdrop = input<boolean | undefined>(undefined);
  readonly backdropStyle = input<BrightrailDrawerBackdropStyle>('dim');
  readonly backdropDismissDisabled = input(false);
  readonly closeOnEscape = input(true);
  readonly showCloseButton = input(true);
  readonly stickyHeader = input(true);
  readonly stickyFooter = input(true);
  readonly labelledBy = input<string | undefined>(undefined);
  readonly ariaLabel = input<string | undefined>(undefined);
  readonly width = input<string | undefined>(undefined);
  readonly maxWidth = input<string | undefined>(undefined);
  readonly height = input<string | undefined>(undefined);
  readonly zIndex = input(1080);
  readonly backdropAriaLabel = input('Dismiss side panel');
  readonly surface = input<'default' | 'glass' | 'flat' | 'gradient' | 'ai'>('default');

  readonly showBackdropResolved = computed(() => this.showBackdrop() ?? this.mode() === 'modal');
  readonly isBackdropInteractive = computed(
    () =>
      this.showBackdropResolved() &&
      this.mode() !== 'persistent' &&
      !this.backdropDismissDisabled() &&
      this.backdropStyle() !== 'none',
  );

  readonly backdropDismiss = output<void>();
  readonly closed = output<void>();
  readonly openChange = output<boolean>();

  @HostListener('document:keydown.escape', ['$event'])
  onEscape(event: Event): void {
    if (!this.isOpen() || !this.closeOnEscape()) return;
    if (this.mode() === 'persistent' || this.backdropDismissDisabled()) return;
    event.preventDefault();
    event.stopPropagation();
    this.closed.emit();
    this.openChange.emit(false);
  }

  onBackdropClick(): void {
    if (!this.isBackdropInteractive()) return;
    this.backdropDismiss.emit();
    this.openChange.emit(false);
  }
}
