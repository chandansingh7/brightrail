import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-holographic-panel-section',
  standalone: true,
  imports: [RouterOutlet],
  template: '<router-outlet />',
  styles: `:host { flex: 1 1 auto; min-height: 0; min-width: 0; display: flex; flex-direction: column; }`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HolographicPanelSectionComponent {}
