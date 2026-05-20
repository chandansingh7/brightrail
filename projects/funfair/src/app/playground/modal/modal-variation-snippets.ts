/** Copy-ready markup for modal catalog tiles (consumers import from `brightrail`). */
export const MODAL_VARIATION_SNIPPETS = {
  sizeSm: `<brightrail-modal [isOpen]="true" [contain]="true" size="sm" appearance="default">
  <brightrail-modal-header>
    <div brightrailModalTitle>Small dialog</div>
  </brightrail-modal-header>
  <brightrail-modal-body><p>Compact confirmation or notice.</p></brightrail-modal-body>
</brightrail-modal>`,
  sizeMd: `<brightrail-modal [isOpen]="true" [contain]="true" size="md" appearance="default">
  <brightrail-modal-header>
    <div brightrailModalTitle>Medium dialog</div>
  </brightrail-modal-header>
  <brightrail-modal-body><p>Default modal width for most flows.</p></brightrail-modal-body>
</brightrail-modal>`,
  sizeLg: `<brightrail-modal [isOpen]="true" [contain]="true" size="lg" appearance="default">
  <brightrail-modal-header>
    <div brightrailModalTitle>Large dialog</div>
  </brightrail-modal-header>
  <brightrail-modal-body><p>Forms, wizards, and rich content.</p></brightrail-modal-body>
</brightrail-modal>`,
  sizeXl: `<brightrail-modal [isOpen]="true" [contain]="true" size="xl" appearance="default">
  <brightrail-modal-header>
    <div brightrailModalTitle>Extra large</div>
  </brightrail-modal-header>
  <brightrail-modal-body><p>Wide layouts and multi-column content.</p></brightrail-modal-body>
</brightrail-modal>`,

  appearanceDefault: `<brightrail-modal [isOpen]="true" [contain]="true" size="md" appearance="default">
  <brightrail-modal-header>
    <div brightrailModalTitle>Workspace saved</div>
  </brightrail-modal-header>
  <brightrail-modal-body><p>Neutral chrome for informational dialogs.</p></brightrail-modal-body>
  <brightrail-modal-footer>
    <brightrail-button variant="primary" size="sm">Got it</brightrail-button>
  </brightrail-modal-footer>
</brightrail-modal>`,
  appearanceDanger: `<brightrail-modal [isOpen]="true" [contain]="true" size="md" appearance="danger">
  <brightrail-modal-header>
    <div brightrailModalTitle>Delete project?</div>
  </brightrail-modal-header>
  <brightrail-modal-body><p>This action cannot be undone.</p></brightrail-modal-body>
  <brightrail-modal-footer>
    <brightrail-button variant="outline" size="sm">Cancel</brightrail-button>
    <brightrail-button variant="danger" size="sm">Delete</brightrail-button>
  </brightrail-modal-footer>
</brightrail-modal>`,

  confirmDestructive: `<brightrail-modal [isOpen]="true" [contain]="true" size="md" appearance="danger">
  <brightrail-modal-header>
    <div brightrailModalTitle>Delete project?</div>
  </brightrail-modal-header>
  <brightrail-modal-body>
    <p>Permanently removes the project and linked files.</p>
  </brightrail-modal-body>
  <brightrail-modal-footer>
    <brightrail-button variant="outline" size="sm">Cancel</brightrail-button>
    <brightrail-button variant="danger" size="sm">Delete</brightrail-button>
  </brightrail-modal-footer>
</brightrail-modal>`,
  confirmAcknowledge: `<brightrail-modal [isOpen]="true" [contain]="true" size="sm" appearance="default">
  <brightrail-modal-header>
    <div brightrailModalTitle>Invitation sent</div>
  </brightrail-modal-header>
  <brightrail-modal-body><p>Teammates receive email invites with join instructions.</p></brightrail-modal-body>
  <brightrail-modal-footer>
    <brightrail-button variant="primary" size="sm">Got it</brightrail-button>
  </brightrail-modal-footer>
</brightrail-modal>`,

  formRename: `<brightrail-modal [isOpen]="true" [contain]="true" size="md" appearance="default">
  <brightrail-modal-header>
    <div brightrailModalTitle>Rename project</div>
  </brightrail-modal-header>
  <brightrail-modal-body>
    <p>Pick a concise name for navigation and billing.</p>
    <label for="project-name">Project name</label>
    <input id="project-name" type="text" name="projectName" />
  </brightrail-modal-body>
  <brightrail-modal-footer>
    <brightrail-button variant="outline" size="sm">Cancel</brightrail-button>
    <brightrail-button variant="primary" size="sm">Continue</brightrail-button>
  </brightrail-modal-footer>
</brightrail-modal>`,
  formSubmit: `<form (submit)="onSubmit($event)">
  <brightrail-modal [isOpen]="true" [contain]="true" size="md" appearance="default">
    <brightrail-modal-header>
      <div brightrailModalTitle>Create workspace</div>
    </brightrail-modal-header>
    <brightrail-modal-body>
      <label for="workspace-name">Workspace name</label>
      <input id="workspace-name" type="text" name="workspaceName" />
    </brightrail-modal-body>
    <brightrail-modal-footer>
      <brightrail-button variant="outline" size="sm" type="button">Cancel</brightrail-button>
      <brightrail-button variant="primary" size="sm" type="submit">Submit</brightrail-button>
    </brightrail-modal-footer>
  </brightrail-modal>
</form>`,

  patternLoading: `<brightrail-modal [isOpen]="true" [contain]="true" size="md" appearance="default">
  <brightrail-modal-header>
    <div brightrailModalTitle>Publishing changes</div>
  </brightrail-modal-header>
  <brightrail-modal-body>
  <!-- spinner + status copy -->
  </brightrail-modal-body>
  <brightrail-modal-footer>
    <brightrail-button variant="primary" size="sm" [disabled]="true">Please wait</brightrail-button>
  </brightrail-modal-footer>
</brightrail-modal>`,
  patternSuccess: `<brightrail-modal [isOpen]="true" [contain]="true" size="sm" appearance="default">
  <brightrail-modal-header>
    <div brightrailModalTitle>Invitation sent</div>
  </brightrail-modal-header>
  <brightrail-modal-body><p>Teammates receive email invites.</p></brightrail-modal-body>
  <brightrail-modal-footer>
    <brightrail-button variant="primary" size="sm">Done</brightrail-button>
  </brightrail-modal-footer>
</brightrail-modal>`,
  patternErrorRetry: `<brightrail-modal [isOpen]="true" [contain]="true" size="md" appearance="default">
  <brightrail-modal-header>
    <div brightrailModalTitle>Sync failed</div>
  </brightrail-modal-header>
  <brightrail-modal-body><p>We could not reach the sync service.</p></brightrail-modal-body>
  <brightrail-modal-footer>
    <brightrail-button variant="outline" size="sm">Cancel</brightrail-button>
    <brightrail-button variant="primary" size="sm">Retry</brightrail-button>
  </brightrail-modal-footer>
</brightrail-modal>`,

  exampleMarkup: `<brightrail-modal
  [isOpen]="modalOpen()"
  [contain]="true"
  size="md"
  appearance="danger"
  [labelledBy]="'modal-title'"
  (backdropDismiss)="modalOpen.set(false)"
  (closed)="modalOpen.set(false)"
>
  <brightrail-modal-header>
    <div brightrailModalTitle id="modal-title">Delete project?</div>
  </brightrail-modal-header>
  <brightrail-modal-body>
    <p>This permanently removes the project and linked integrations.</p>
  </brightrail-modal-body>
  <brightrail-modal-footer>
    <brightrail-button variant="outline" size="sm" (click)="modalOpen.set(false)">Cancel</brightrail-button>
    <brightrail-button variant="danger" size="sm" (click)="modalOpen.set(false)">Delete</brightrail-button>
  </brightrail-modal-footer>
</brightrail-modal>`,
} as const;

export const MODAL_DOC_SECTION_COUNT = 6;

export const MODAL_HTML_EXAMPLES = `<brightrail-modal
  [isOpen]="modalOpen()"
  [contain]="true"
  size="md"
  appearance="danger"
  [labelledBy]="'delete-project-title'"
  (backdropDismiss)="modalOpen.set(false)"
  (closed)="modalOpen.set(false)"
>
  <brightrail-modal-header>
    <div brightrailModalTitle id="delete-project-title">Delete project?</div>
  </brightrail-modal-header>
  <brightrail-modal-body>
    <p>This action will permanently remove the selected project and its files.</p>
  </brightrail-modal-body>
  <brightrail-modal-footer>
    <brightrail-button variant="outline" size="sm" (click)="modalOpen.set(false)">Cancel</brightrail-button>
    <brightrail-button variant="danger" size="sm" (click)="modalOpen.set(false)">Delete</brightrail-button>
  </brightrail-modal-footer>
</brightrail-modal>`;
