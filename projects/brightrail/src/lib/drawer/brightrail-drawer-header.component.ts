import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: 'brightrail-drawer-header',
  standalone: true,
  template: `
    <header class="br-drawer__header">
      <div class="br-drawer__header-main">
        <ng-content select="[brightrailDrawerTitle]" />
        <ng-content select="[brightrailDrawerSubtitle]" />
      </div>
      <div class="br-drawer__header-actions">
        <ng-content select="[brightrailDrawerHeaderActions]" />
        @if (showCloseButton()) {
          <button
            type="button"
            class="br-drawer__close"
            [attr.aria-label]="closeButtonAriaLabel()"
            (click)="closeClick.emit()"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        }
      </div>
    </header>
  `,
  styles: [
    `
      .br-drawer__close {
        inline-size: 2rem;
        block-size: 2rem;
        border: none;
        border-radius: 0.45rem;
        background: transparent;
        color: inherit;
        cursor: pointer;
        font-size: 1.25rem;
        line-height: 1;
      }

      .br-drawer__close:hover {
        background: rgb(60 64 67 / 8%);
      }
    `,
  ],
  styleUrl: './brightrail-drawer-shell.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrightrailDrawerHeaderComponent {
  readonly showCloseButton = input(true);
  readonly closeButtonAriaLabel = input('Close drawer');
  readonly closeClick = output<void>();
}
