import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

/** Router shell so `/text-field` can host the playground and focused guides (e.g. inset label). */
@Component({
  selector: 'app-text-field-section',
  standalone: true,
  imports: [RouterOutlet],
  template: '<router-outlet />',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextFieldSectionComponent {}
