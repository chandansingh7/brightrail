import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { BrightrailToastComponent } from './brightrail-toast.component';
import { BrightrailToastService } from './brightrail-toast.service';

@Component({
  selector: 'brightrail-toast-container',
  standalone: true,
  imports: [BrightrailToastComponent],
  template: `
    <div class="br-toast-container" aria-live="polite" aria-relevant="additions">
      @for (toast of toastService.toasts(); track toast.id) {
        <brightrail-toast
          [variant]="toast.variant"
          [title]="toast.title"
          [message]="toast.message"
          [dismissible]="toast.dismissible"
          (dismiss)="toastService.dismiss(toast.id)"
        />
      }
    </div>
  `,
  styleUrl: './brightrail-toast-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrightrailToastContainerComponent {
  protected readonly toastService = inject(BrightrailToastService);
}
