import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

/** Router shell so `/tabs` can host the playground and variation catalog. */
@Component({
  selector: 'app-tabs-section',
  standalone: true,
  imports: [RouterOutlet],
  template: '<router-outlet />',
  styles: `
    :host {
      flex: 1 1 auto;
      min-height: 0;
      min-width: 0;
      display: flex;
      flex-direction: column;
    }
    :host > router-outlet + * {
      flex: 1 1 auto;
      min-height: 0;
      min-width: 0;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsSectionComponent {}
