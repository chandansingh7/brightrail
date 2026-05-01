import { Component } from '@angular/core';

@Component({
  selector: 'facl-welcome',
  standalone: true,
  template: `<p class="facl-welcome" role="status">{{ label }}</p>`,
  styles: `
    :host {
      display: block;
      font-family: system-ui, sans-serif;
    }
  `,
})
export class FaclWelcomeComponent {
  readonly label = 'Fun Angular Component Library';
}
