import { Component } from '@angular/core';

@Component({
  selector: 'brightrail-welcome',
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
