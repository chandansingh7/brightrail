import { Component } from '@angular/core';
import { BRIGHTRAIL_FX_SHELL_HOST } from '../futuristic/brightrail-futuristic-host';

@Component({
  selector: 'brightrail-welcome',
  hostDirectives: [BRIGHTRAIL_FX_SHELL_HOST],
  standalone: true,
  template: `<p class="brightrail-welcome" role="status">{{ label }}</p>`,
  styles: `
    :host {
      display: block;
      font-family: system-ui, sans-serif;
    }
  `,
})
export class BrightrailWelcomeComponent {
  readonly label = 'Fun Angular Component Library';
}
