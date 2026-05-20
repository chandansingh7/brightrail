/** Copy-ready markup for toast catalog tiles (consumers import from `brightrail`). */
export const TOAST_VARIATION_SNIPPETS = {
  coreInfo: `<brightrail-toast variant="info" title="Heads up" message="Your draft was saved." />`,
  coreSuccess: `<brightrail-toast variant="success" title="Saved" message="Changes published successfully." />`,
  coreWarning: `<brightrail-toast variant="warning" title="Review needed" message="Some fields need attention." />`,
  coreDanger: `<brightrail-toast variant="danger" title="Error" message="We could not complete the request." />`,

  titleWithHeadline: `<brightrail-toast
  variant="info"
  title="Sync complete"
  message="3 files uploaded to the workspace."
/>`,
  titleMessageOnly: `<brightrail-toast variant="info" message="Link copied to clipboard." />`,

  dismissibleYes: `<brightrail-toast
  variant="success"
  title="Profile updated"
  message="Your preferences were saved."
  [dismissible]="true"
/>`,
  dismissibleNo: `<brightrail-toast
  variant="warning"
  title="Maintenance"
  message="Read-only mode until 2:00 AM UTC."
  [dismissible]="false"
/>`,

  serviceShow: `// app.config.ts — provide container once at the root
import { BrightrailToastContainerComponent } from 'brightrail';

@Component({
  imports: [BrightrailToastContainerComponent],
  template: \`<router-outlet />
    <brightrail-toast-container />\`,
})
export class App {}

// feature.component.ts
import { inject } from '@angular/core';
import { BrightrailToastService } from 'brightrail';

readonly toast = inject(BrightrailToastService);

save(): void {
  this.toast.show({
    variant: 'success',
    title: 'Saved',
    message: 'Your changes are live.',
  });
}`,
  serviceDismissAll: `this.toast.dismissAll();`,

  stackMultiple: `this.toast.show({ variant: 'info', message: 'First notification' });
this.toast.show({ variant: 'success', message: 'Second notification' });`,

  advancedDuration: `this.toast.show({
  variant: 'info',
  message: 'Auto-dismiss in 3 seconds',
  durationMs: 3000,
});`,
  advancedPersistent: `this.toast.show({
  variant: 'danger',
  title: 'Action required',
  message: 'Approve the pending request.',
  dismissible: true,
  durationMs: 0,
});`,
} as const;

export const TOAST_DOC_SECTION_COUNT = 6;

export const TOAST_HTML_EXAMPLES = `<brightrail-toast-container />

<button type="button" (click)="showToast()">Show toast</button>

<!-- In component TS -->
this.toast.show({
  variant: 'success',
  title: 'Saved',
  message: 'Your profile was updated.',
  dismissible: true,
});`;
