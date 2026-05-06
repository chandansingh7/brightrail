import { ChangeDetectionStrategy, Component, HostListener, input, output } from '@angular/core';

export type BrightrailModalSize = 'sm' | 'md' | 'lg' | 'xl';
export type BrightrailModalAppearance = 'default' | 'danger';

@Component({
  selector: 'brightrail-modal',
  standalone: true,
  template: `
    @if (isOpen()) {
      <div class="br-modal-root" [class.br-modal-root--contain]="contain()">
        <button
          type="button"
          class="br-modal__backdrop"
          [disabled]="backdropDismissDisabled()"
          [attr.aria-label]="backdropDismissDisabled() ? null : 'Dismiss dialog'"
          (click)="onBackdropClick()"
          tabindex="-1"
        ></button>
        <div class="br-modal__align">
          <div
            class="br-modal__panel"
            [class.br-modal__panel--sm]="size() === 'sm'"
            [class.br-modal__panel--md]="size() === 'md'"
            [class.br-modal__panel--lg]="size() === 'lg'"
            [class.br-modal__panel--xl]="size() === 'xl'"
            [class.br-modal__panel--danger]="appearance() === 'danger'"
            [class.br-modal__panel--scroll-body]="scrollBody()"
            role="dialog"
            aria-modal="true"
            [attr.aria-labelledby]="labelledBy() || null"
            tabindex="-1"
          >
            <ng-content />
          </div>
        </div>
      </div>
    }
  `,
  styleUrl: './brightrail-modal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrightrailModalComponent {
  readonly isOpen = input(false);

  readonly size = input<BrightrailModalSize>('md');

  readonly appearance = input<BrightrailModalAppearance>('default');

  readonly backdropDismissDisabled = input(false);

  readonly closeOnEscape = input(true);

  readonly contain = input(false);

  /** Scroll only the modal body; header and footer stay visible (long forms). */
  readonly scrollBody = input(false);

  readonly labelledBy = input<string | undefined>(undefined);

  readonly backdropDismiss = output<void>();

  readonly closed = output<void>();

  @HostListener('document:keydown.escape', ['$event'])
  onEscape(ev: Event): void {
    if (!this.isOpen() || !this.closeOnEscape()) return;
    if (this.backdropDismissDisabled()) return;
    ev.preventDefault();
    ev.stopPropagation();
    this.closed.emit();
  }

  onBackdropClick(): void {
    if (this.backdropDismissDisabled()) return;
    this.backdropDismiss.emit();
  }
}
