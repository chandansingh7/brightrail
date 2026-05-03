import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

/** Router shell so `/select` can host the playground and resource guides. */
@Component({
  selector: 'app-select-section',
  standalone: true,
  imports: [RouterOutlet],
  template: '<router-outlet />',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectSectionComponent {}
