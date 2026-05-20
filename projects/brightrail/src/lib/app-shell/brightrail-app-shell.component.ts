import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

export type BrightrailAppShellSidebarPosition = 'left' | 'right';

@Component({
  selector: 'brightrail-app-shell',
  standalone: true,
  template: `
    <div class="br-app-shell" [class]="hostClass()">
      @if (showTopBar()) {
        <header class="br-app-shell__top">
          <ng-content select="brightrail-top-bar" />
        </header>
      }

      <div class="br-app-shell__body">
        @if (showSidebar()) {
          <aside class="br-app-shell__sidebar" [attr.aria-label]="sidebarAriaLabel() || null">
            <ng-content select="brightrail-sidebar" />
          </aside>
        }

        <main class="br-app-shell__main">
          <ng-content select="brightrail-page-header" />
          <div class="br-app-shell__content">
            <ng-content />
          </div>
        </main>
      </div>
    </div>
  `,
  styleUrl: './brightrail-app-shell.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'br-app-shell-host',
    '[style.--br-app-shell-sidebar-width]': 'sidebarWidth()',
  },
})
export class BrightrailAppShellComponent {
  readonly sidebarPosition = input<BrightrailAppShellSidebarPosition>('left');
  readonly showSidebar = input(true);
  readonly showTopBar = input(true);
  readonly sidebarWidth = input('16rem');
  readonly sidebarAriaLabel = input('Application navigation');

  readonly hostClass = computed(() => {
    const parts = ['br-app-shell'];
    if (!this.showSidebar()) {
      parts.push('br-app-shell--no-sidebar');
    }
    if (!this.showTopBar()) {
      parts.push('br-app-shell--no-topbar');
    }
    parts.push(`br-app-shell--sidebar-${this.sidebarPosition()}`);
    return parts.join(' ');
  });
}
