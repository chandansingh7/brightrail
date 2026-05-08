import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-select-resources-guide',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './select-resources-guide.component.html',
  styleUrl: './select-resources-guide.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectResourcesGuideComponent {
  readonly exampleNgModel = `[ngModelOptions]="{ standalone: true }"

<!-- or in the component class: -->
readonly ngModelStandalone = { standalone: true };`;

  readonly exampleProjection = `<brightrail-select ...>
  <span class="br-select-prefix"><!-- leading content --></span>
  <span class="br-select-suffix"><!-- trailing content (before chevron) --></span>
  <span class="br-select-value-slot"><!-- custom value / tag row --></span>
  <div class="br-select-panel"><!-- menu: buttons, custom list --></div>
</brightrail-select>`;
}
