import { TitleCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
} from '@angular/core';
import type { WritableSignal } from '@angular/core';

import { PlaygroundPreviewHeaderComponent } from '../shared/playground-preview-header.component';
import {
  injectPlaygroundA11yPreviewMode,
  initPlaygroundA11yPreview,
} from '../shared/playground-a11y-preview.utils';
import {
  restorePlaygroundState,
  snapshotPlaygroundState,
} from '../shared/playground-a11y-state.utils';
import {
  BrightrailButtonComponent,
  BrightrailButtonIcon,
  BrightrailButtonIconComponent,
  BrightrailIconButtonComponent,
  BrightrailModalAppearance,
  BrightrailModalBodyComponent,
  BrightrailModalComponent,
  BrightrailModalFooterComponent,
  BrightrailModalHeaderActionsDirective,
  BrightrailModalHeaderComponent,
  BrightrailModalSize,
  BrightrailModalTitleDirective,
} from 'brightrail';

import { PlaygroundThemeId, PlaygroundThemeService } from '../playground-theme.service';
import { createPlaygroundPreviewFx, playgroundFxHtml, playgroundFxTs } from '../shared/playground-fx.util';
import { PlaygroundFxSettingsComponent } from '../shared/playground-fx-settings.component';

export type CodeTabId = 'html' | 'ts' | 'scss';

export type ModalRecipe =
  | 'confirmDelete'
  | 'infoAck'
  | 'formContinue'
  | 'formInputSubmit'
  | 'loading'
  | 'successDone'
  | 'errorRetry'
  | 'wizardFlow'
  | 'wizardAltHeader'
  | 'destructivePhrase'
  | 'stickyLongForm'
  | 'autosaveDraft'
  | 'advancedOptions'
  | 'custom';

@Component({
  selector: 'app-modal-playground',
  standalone: true,
  imports: [
    PlaygroundPreviewHeaderComponent,
    FormsModule,
    BrightrailModalComponent,
    BrightrailModalHeaderComponent,
    BrightrailModalBodyComponent,
    BrightrailModalFooterComponent,
    BrightrailModalTitleDirective,
    BrightrailModalHeaderActionsDirective,
    BrightrailButtonComponent,
    BrightrailButtonIconComponent,
    BrightrailIconButtonComponent,
    TitleCasePipe, PlaygroundFxSettingsComponent],
  templateUrl: './modal-playground.component.html',
  styleUrl: './modal-playground.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalPlaygroundComponent {
  readonly previewOnly = injectPlaygroundA11yPreviewMode();
  readonly a11yPreviewState = computed(() =>
    snapshotPlaygroundState({
      previewRecipe: () => this.previewRecipe(),
      size: () => this.size(),
      appearance: () => this.appearance(),
      footerPreset: () => this.footerPreset(),
      headerMode: () => this.headerMode(),
      backdropDismissAllowed: () => this.backdropDismissAllowed(),
      closeButtonShown: () => this.closeButtonShown(),
      demoFieldValue: () => this.demoFieldValue(),
      scrollBody: () => this.scrollBody(),
      wizardStep: () => this.wizardStep(),
      destructivePhraseInput: () => this.destructivePhraseInput(),
      wizardOwner: () => this.wizardOwner(),
      wizardProjectName: () => this.wizardProjectName(),
      advancedPriority: () => this.advancedPriority(),
      advancedDueDate: () => this.advancedDueDate(),
    }),
  );

  constructor() {
    initPlaygroundA11yPreview('modal', this.previewOnly, (state) =>
      this.restoreA11yPreviewState(state),
    );
  }
  private restoreA11yPreviewState(state: unknown): void {
    if (!state || typeof state !== 'object') {
      return;
    }
    const snapshot = state as Record<string, unknown>;
    if (typeof snapshot['previewRecipe'] === 'string') {
      this.applyRecipe(snapshot['previewRecipe'] as ModalRecipe);
      return;
    }
    restorePlaygroundState(state, {
      previewRecipe: this.previewRecipe as WritableSignal<unknown>,
      size: this.size as WritableSignal<unknown>,
      appearance: this.appearance as WritableSignal<unknown>,
      footerPreset: this.footerPreset as WritableSignal<unknown>,
      headerMode: this.headerMode as WritableSignal<unknown>,
      backdropDismissAllowed: this.backdropDismissAllowed as WritableSignal<unknown>,
      closeButtonShown: this.closeButtonShown as WritableSignal<unknown>,
      demoFieldValue: this.demoFieldValue as WritableSignal<unknown>,
      scrollBody: this.scrollBody as WritableSignal<unknown>,
      wizardStep: this.wizardStep as WritableSignal<unknown>,
      destructivePhraseInput: this.destructivePhraseInput as WritableSignal<unknown>,
      wizardOwner: this.wizardOwner as WritableSignal<unknown>,
      wizardProjectName: this.wizardProjectName as WritableSignal<unknown>,
      advancedPriority: this.advancedPriority as WritableSignal<unknown>,
      advancedDueDate: this.advancedDueDate as WritableSignal<unknown>,
    });
  }

  readonly themeService = inject(PlaygroundThemeService);
  private readonly _playgroundFx = createPlaygroundPreviewFx();
  readonly previewFx = this._playgroundFx.previewFx;
  readonly resolvedFxShell = this._playgroundFx.resolvedFxShell;

  readonly TITLE_ID = 'modal-demo-title';

  readonly recipeGroups = ['Basics', 'Patterns', 'Wizard', 'Advanced'] as const;

  readonly recipeOptions: { value: ModalRecipe; label: string; group: string }[] = [
    { value: 'confirmDelete', label: 'Confirmation (destructive)', group: 'Basics' },
    { value: 'infoAck', label: 'Informational', group: 'Basics' },
    { value: 'formContinue', label: 'Form-style continue', group: 'Basics' },
    { value: 'formInputSubmit', label: 'Form · input + submit', group: 'Basics' },
    { value: 'custom', label: 'Custom (manual)', group: 'Basics' },
    { value: 'loading', label: 'Loading state', group: 'Patterns' },
    { value: 'successDone', label: 'Success state', group: 'Patterns' },
    { value: 'errorRetry', label: 'Error + retry', group: 'Patterns' },
    { value: 'custom', label: 'Custom (manual)', group: 'Patterns' },
    { value: 'wizardFlow', label: '§7 Wizard · Multi-step (stepper)', group: 'Wizard' },
    { value: 'wizardAltHeader', label: '§7 Wizard · Text step header', group: 'Wizard' },
    { value: 'custom', label: 'Custom (manual)', group: 'Wizard' },
    { value: 'destructivePhrase', label: '§8 Destructive · Type DELETE', group: 'Advanced' },
    { value: 'stickyLongForm', label: '§8 Sticky footer · Long form', group: 'Advanced' },
    { value: 'autosaveDraft', label: '§8 Autosave draft status', group: 'Advanced' },
    { value: 'advancedOptions', label: '§8 Advanced options', group: 'Advanced' },
    { value: 'custom', label: 'Custom (manual)', group: 'Advanced' },
  ];

  readonly sizeOptions: BrightrailModalSize[] = ['sm', 'md', 'lg', 'xl'];

  readonly appearanceOptions: BrightrailModalAppearance[] = ['default', 'danger'];

  readonly footerPresetOptions = ['primaryOnly', 'primarySecondary', 'destructive', 'linkOnly'] as const;

  readonly footerPresetLabels: Record<(typeof this.footerPresetOptions)[number], string> = {
    primaryOnly: 'Primary only',
    primarySecondary: 'Primary + secondary',
    destructive: 'Destructive pair',
    linkOnly: 'Link-only action',
  };

  readonly headerModeOptions = ['title', 'none'] as const;

  readonly previewRecipe = signal<ModalRecipe>('confirmDelete');
  readonly selectedRecipeGroup = signal<string>('Basics');

  readonly modalOpen = signal(true);

  readonly size = signal<BrightrailModalSize>('md');
  readonly appearance = signal<BrightrailModalAppearance>('danger');
  readonly footerPreset = signal<(typeof this.footerPresetOptions)[number]>('primarySecondary');
  readonly headerMode = signal<(typeof this.headerModeOptions)[number]>('title');
  readonly backdropDismissAllowed = signal(true);
  readonly closeButtonShown = signal(true);

  readonly activeTab = signal<CodeTabId>('html');

  readonly themeRowOptions: { id: PlaygroundThemeId; label: string }[] = [
    { id: 'light', label: 'Material light' },
    { id: 'dark', label: 'Material dark' },
  ];

  /** Bound to the demo text field when Scenario is “Form · input + submit”. */
  readonly demoFieldValue = signal('');

  readonly scrollBody = signal(false);

  readonly wizardStep = signal(1);

  readonly wizardStepMarkers = [1, 2, 3] as const;

  readonly destructivePhraseInput = signal('');

  readonly wizardOwner = signal('you');

  readonly wizardProjectName = signal('Northstar rollout');

  readonly advancedPriority = signal('medium');

  readonly advancedDueDate = signal('');

  readonly longFormSections: readonly { heading: string; body: string }[] = [
    {
      heading: 'Basics',
      body: 'Collect required identifiers and descriptions. Fields below intentionally repeat so you can verify the footer stays pinned while this region scrolls.',
    },
    {
      heading: 'Scheduling',
      body: 'Pick windows that avoid maintenance periods. Confirm timezone assumptions with stakeholders before publishing.',
    },
    {
      heading: 'Compliance',
      body: 'Attach retention policies and approval chains. Legal review may add constraints shown inline once validated.',
    },
    {
      heading: 'Automation',
      body: 'Optional hooks fire webhooks after commit. Rate limits apply per workspace tier.',
    },
    {
      heading: 'Review',
      body: 'Scan the checklist once more — autosave drafts reduce risk, but submission is still explicit.',
    },
  ];

  readonly templateRecipe = computed(() => this.previewRecipe());

  recipesInGroup(group: string): { value: ModalRecipe; label: string; group: string }[] {
    return this.recipeOptions.filter((r) => r.group === group);
  }

  onRecipeGroupNgModelChange(v: string): void {
    this.selectedRecipeGroup.set(v);
    const first = this.recipesInGroup(v)[0]?.value;
    if (first != null) {
      this.previewRecipe.set(first);
      if (first !== 'custom') this.applyRecipe(first);
    }
  }

  onRecipeNgModelChange(v: string): void {
    const recipe = v as ModalRecipe;
    this.previewRecipe.set(recipe);
    if (recipe !== 'custom') this.applyRecipe(recipe);
  }

  applyRecipe(recipe: ModalRecipe): void {
    this.scrollBody.set(false);
    this.wizardStep.set(1);
    switch (recipe) {
      case 'confirmDelete':
        this.size.set('md');
        this.appearance.set('danger');
        this.footerPreset.set('primarySecondary');
        this.headerMode.set('title');
        this.backdropDismissAllowed.set(true);
        this.closeButtonShown.set(true);
        break;
      case 'infoAck':
        this.size.set('sm');
        this.appearance.set('default');
        this.footerPreset.set('primaryOnly');
        this.headerMode.set('title');
        this.backdropDismissAllowed.set(true);
        this.closeButtonShown.set(true);
        break;
      case 'formContinue':
        this.size.set('md');
        this.appearance.set('default');
        this.footerPreset.set('primarySecondary');
        this.headerMode.set('title');
        this.backdropDismissAllowed.set(false);
        this.closeButtonShown.set(true);
        break;
      case 'formInputSubmit':
        this.size.set('md');
        this.appearance.set('default');
        this.footerPreset.set('primarySecondary');
        this.headerMode.set('title');
        this.backdropDismissAllowed.set(true);
        this.closeButtonShown.set(true);
        break;
      case 'loading':
        this.size.set('md');
        this.appearance.set('default');
        this.footerPreset.set('primaryOnly');
        this.headerMode.set('title');
        this.backdropDismissAllowed.set(false);
        this.closeButtonShown.set(false);
        break;
      case 'successDone':
        this.size.set('sm');
        this.appearance.set('default');
        this.footerPreset.set('primaryOnly');
        this.headerMode.set('title');
        this.backdropDismissAllowed.set(true);
        this.closeButtonShown.set(true);
        break;
      case 'errorRetry':
        this.size.set('md');
        this.appearance.set('default');
        this.footerPreset.set('primarySecondary');
        this.headerMode.set('title');
        this.backdropDismissAllowed.set(true);
        this.closeButtonShown.set(true);
        break;
      case 'wizardFlow':
        this.wizardProjectName.set('Northstar rollout');
        this.wizardOwner.set('you');
        this.size.set('md');
        this.appearance.set('default');
        this.footerPreset.set('primarySecondary');
        this.headerMode.set('title');
        this.backdropDismissAllowed.set(false);
        this.closeButtonShown.set(true);
        break;
      case 'wizardAltHeader':
        this.size.set('md');
        this.appearance.set('default');
        this.footerPreset.set('primarySecondary');
        this.headerMode.set('title');
        this.backdropDismissAllowed.set(true);
        this.closeButtonShown.set(true);
        break;
      case 'destructivePhrase':
        this.destructivePhraseInput.set('');
        this.size.set('md');
        this.appearance.set('danger');
        this.footerPreset.set('primarySecondary');
        this.headerMode.set('title');
        this.backdropDismissAllowed.set(false);
        this.closeButtonShown.set(true);
        break;
      case 'stickyLongForm':
        this.scrollBody.set(true);
        this.size.set('lg');
        this.appearance.set('default');
        this.footerPreset.set('primarySecondary');
        this.headerMode.set('title');
        this.backdropDismissAllowed.set(false);
        this.closeButtonShown.set(true);
        break;
      case 'autosaveDraft':
        this.size.set('md');
        this.appearance.set('default');
        this.footerPreset.set('primarySecondary');
        this.headerMode.set('title');
        this.backdropDismissAllowed.set(true);
        this.closeButtonShown.set(true);
        break;
      case 'advancedOptions':
        this.size.set('sm');
        this.appearance.set('default');
        this.footerPreset.set('primarySecondary');
        this.headerMode.set('title');
        this.backdropDismissAllowed.set(true);
        this.closeButtonShown.set(true);
        break;
      case 'custom':
        break;
      default:
        break;
    }
  }

  markManualRecipe(): void {
    this.previewRecipe.set('custom');
  }

  bindModalOpen(v: string): void {
    this.modalOpen.set(v === 'open');
  }

  bindSize(v: string): void {
    this.size.set(v as BrightrailModalSize);
    this.markManualRecipe();
  }

  bindAppearance(v: string): void {
    this.appearance.set(v as BrightrailModalAppearance);
    this.markManualRecipe();
  }

  bindFooterPreset(v: string): void {
    this.footerPreset.set(v as (typeof this.footerPresetOptions)[number]);
    this.markManualRecipe();
  }

  bindHeaderMode(v: string): void {
    this.headerMode.set(v as (typeof this.headerModeOptions)[number]);
    this.markManualRecipe();
  }

  bindBackdropDismiss(v: string): void {
    this.backdropDismissAllowed.set(v === 'yes');
    this.markManualRecipe();
  }

  bindCloseButton(v: string): void {
    this.closeButtonShown.set(v === 'yes');
    this.markManualRecipe();
  }

  bindTheme(id: string): void {
    this.themeService.setTheme(id as PlaygroundThemeId);
  }

  resetToDefaults(): void {
    this.previewFx.set('inherit');
    this.selectedRecipeGroup.set('Basics');
    this.previewRecipe.set('confirmDelete');
    this.applyRecipe('confirmDelete');
    this.modalOpen.set(true);
    this.themeService.setTheme('light');
    this.activeTab.set('html');
  }

  dismissModal(): void {
    this.modalOpen.set(false);
  }

  onDemoFormSubmit(ev: Event): void {
    ev.preventDefault();
    this.dismissModal();
  }

  reopenModal(): void {
    this.modalOpen.set(true);
  }

  onBackdropDismiss(): void {
    if (!this.backdropDismissAllowed()) return;
    this.dismissModal();
  }

  onEscapeClose(): void {
    if (!this.backdropDismissAllowed()) return;
    this.dismissModal();
  }

  wizardFlowTitle(): string {
    switch (this.wizardStep()) {
      case 1:
        return 'Create project';
      case 2:
        return 'Summary';
      case 3:
        return 'Review and confirm';
      default:
        return 'Create project';
    }
  }

  wizardGoBack(): void {
    const s = this.wizardStep();
    if (s > 1) this.wizardStep.set(s - 1);
  }

  wizardGoNext(): void {
    const s = this.wizardStep();
    if (s < 3) this.wizardStep.set(s + 1);
  }

  wizardOwnerLabel(): string {
    switch (this.wizardOwner()) {
      case 'team':
        return 'Platform team';
      case 'org':
        return 'Org admin';
      default:
        return 'Your account';
    }
  }

  deleteActionDisabled(): boolean {
    return this.destructivePhraseInput().trim().toUpperCase() !== 'DELETE';
  }

  primaryDisabled(): boolean {
    if (this.templateRecipe() === 'loading') return true;
    if (this.templateRecipe() === 'destructivePhrase') return this.deleteActionDisabled();
    return false;
  }

  titleIcon(): BrightrailButtonIcon {
    switch (this.templateRecipe()) {
      case 'confirmDelete':
      case 'errorRetry':
        return 'warning';
      case 'infoAck':
      case 'formContinue':
        return 'info';
      case 'formInputSubmit':
        return 'edit';
      case 'successDone':
        return 'check';
      case 'destructivePhrase':
        return 'trash';
      case 'wizardFlow':
      case 'wizardAltHeader':
      case 'autosaveDraft':
      case 'stickyLongForm':
      case 'advancedOptions':
        return 'none';
      case 'loading':
        return 'none';
      default:
        return 'info';
    }
  }

  titleText(): string {
    switch (this.templateRecipe()) {
      case 'confirmDelete':
        return 'Delete project?';
      case 'infoAck':
        return 'Workspace saved';
      case 'formContinue':
        return 'Rename project';
      case 'formInputSubmit':
        return 'Create workspace';
      case 'loading':
        return 'Publishing changes';
      case 'successDone':
        return 'Invitation sent';
      case 'errorRetry':
        return 'Sync failed';
      case 'wizardFlow':
        return this.wizardFlowTitle();
      case 'wizardAltHeader':
        return 'Configure workspace';
      case 'destructivePhrase':
        return 'Delete project';
      case 'stickyLongForm':
        return 'New record';
      case 'autosaveDraft':
        return 'Edit report';
      case 'advancedOptions':
        return 'Advanced options';
      default:
        return 'Modal title';
    }
  }

  bodyParagraph(): string {
    switch (this.templateRecipe()) {
      case 'confirmDelete':
        return 'This action will permanently remove the selected project and its files. This action cannot be undone.';
      case 'infoAck':
        return 'Your preferences were stored on this device and apply to new sessions.';
      case 'formContinue':
        return 'Pick a concise name — it appears in navigation and billing emails.';
      case 'formInputSubmit':
        return 'Choose a short workspace name. You can change it later in settings.';
      case 'loading':
        return 'Hang tight while we apply updates to your workspace.';
      case 'successDone':
        return 'Teammates receive email invites with instructions to join.';
      case 'errorRetry':
        return 'We could not reach the sync service. Check your connection and try again.';
      case 'wizardAltHeader':
        return 'Fine-tune routing rules and fallback channels for this workspace. Changes stay staged until you save.';
      case 'destructivePhrase':
        return 'This permanently deletes the project, archives, and linked integrations. Billing stops at period end.';
      case 'autosaveDraft':
        return 'Adjust narrative blocks and citations. Drafts autosave while you edit — publishing still requires confirmation.';
      case 'advancedOptions':
        return 'Optional scheduling hints influence prioritization in queues.';
      default:
        return 'Configure controls on the left to reshape this modal.';
    }
  }

  primaryLabel(): string {
    switch (this.templateRecipe()) {
      case 'confirmDelete':
        return 'Delete';
      case 'infoAck':
      case 'successDone':
        return 'Got it';
      case 'formContinue':
        return 'Continue';
      case 'formInputSubmit':
        return 'Submit';
      case 'loading':
        return 'Please wait';
      case 'errorRetry':
        return 'Retry';
      case 'wizardAltHeader':
        return 'Save changes';
      case 'stickyLongForm':
        return 'Submit';
      case 'autosaveDraft':
        return 'Save';
      case 'advancedOptions':
        return 'Apply';
      default:
        return 'Continue';
    }
  }

  secondaryLabel(): string {
    switch (this.templateRecipe()) {
      case 'confirmDelete':
      case 'formContinue':
      case 'formInputSubmit':
      case 'errorRetry':
      case 'wizardAltHeader':
      case 'advancedOptions':
        return 'Cancel';
      case 'stickyLongForm':
        return 'Save draft';
      case 'autosaveDraft':
        return 'Discard';
      default:
        return 'Cancel';
    }
  }

  readonly activeSnippet = computed(() => {
    switch (this.activeTab()) {
      case 'html':
        return this.buildHtml();
      case 'ts':
        return this.buildTs();
      case 'scss':
        return this.buildScss();
    }
  });

  selectTab(tab: CodeTabId): void {
    this.activeTab.set(tab);
  }

  copySnippet(): void {
    void navigator.clipboard?.writeText(this.activeSnippet());
  }

  private buildHtml(): string {
    const lines: string[] = [];
    const recipe = this.previewRecipe();
    lines.push(`<brightrail-modal`);
    lines.push(`  [isOpen]="modalOpen()"`);
    lines.push(`  size="${this.size()}"`);
    lines.push(`  appearance="${this.appearance()}"`);
    lines.push(`  [contain]="true"`);
    if (this.scrollBody()) {
      lines.push(`  [scrollBody]="true"`);
    }
    lines.push(`  [backdropDismissDisabled]="${!this.backdropDismissAllowed()}"`);
    lines.push(`  [labelledBy]="'${this.TITLE_ID}'"`);
    lines.push(`  (backdropDismiss)="onBackdropDismiss()"`);
    lines.push(`  (closed)="onEscapeClose()">`);
    if (this.headerMode() === 'title') {
      lines.push(`  <brightrail-modal-header>`);
      if (recipe === 'autosaveDraft') {
        lines.push(`    <div brightrailModalTitle id="${this.TITLE_ID}" class="mp-title-stack">`);
        lines.push(`      <div class="mp-draft-status">Draft saved 2 min ago</div>`);
        lines.push(`      <div class="mp-title-row">${escapePcdata(this.titleText())}</div>`);
        lines.push(`    </div>`);
      } else if (recipe === 'wizardAltHeader') {
        lines.push(`    <div brightrailModalTitle id="${this.TITLE_ID}" class="mp-title-stack">`);
        lines.push(`      <div class="mp-title-row">${escapePcdata(this.titleText())}</div>`);
        lines.push(`      <p class="mp-step-caption">Step 3 of 4: Configure settings</p>`);
        lines.push(`    </div>`);
      } else {
        lines.push(`    <div brightrailModalTitle id="${this.TITLE_ID}" class="mp-title-row">`);
        lines.push(`      ${escapePcdata(this.titleText())}`);
        lines.push(`    </div>`);
      }
      if (this.closeButtonShown()) {
        lines.push(`    <div brightrailModalHeaderActions>`);
        lines.push(`      <brightrail-icon-button aria-label="Close" (click)="dismissModal()">`);
        lines.push(`        <brightrail-button-icon name="close" />`);
        lines.push(`      </brightrail-icon-button>`);
        lines.push(`    </div>`);
      }
      lines.push(`  </brightrail-modal-header>`);
    }
    if (recipe === 'formInputSubmit') {
      lines.push(`  <form class="mp-modal-form" (submit)="onDemoFormSubmit($event)">`);
      lines.push(`    <brightrail-modal-body>`);
      lines.push(`      <p class="mp-form-lead">${escapePcdata(this.bodyParagraph())}</p>`);
      lines.push(
        `      <label class="mp-field-label" for="modal-demo-field">Workspace name</label>`,
      );
      lines.push(
        `      <input id="modal-demo-field" type="text" name="workspaceName" class="mp-field-input" [ngModel]="demoFieldValue()" (ngModelChange)="demoFieldValue.set($event)" [ngModelOptions]="{ standalone: true }" />`,
      );
      lines.push(`    </brightrail-modal-body>`);
      lines.push(`    <brightrail-modal-footer>`);
      lines.push(
        `      <button type="button" class="mp-foot-btn mp-foot-btn--outline" (click)="dismissModal()">${escapePcdata(this.secondaryLabel())}</button>`,
      );
      lines.push(
        `      <button type="submit" class="mp-foot-btn mp-foot-btn--primary">${escapePcdata(this.primaryLabel())}</button>`,
      );
      lines.push(`    </brightrail-modal-footer>`);
      lines.push(`  </form>`);
    } else if (recipe === 'wizardFlow') {
      lines.push(`  <brightrail-modal-body>`);
      lines.push(`    <nav class="mp-wizard-steps" aria-label="Wizard progress">`);
      lines.push(`      <!-- Three nodes + connectors -->`);
      lines.push(`    </nav>`);
      lines.push(`    <!-- Switch body on wizardStep(): fields → summary → confirmation -->`);
      lines.push(`  </brightrail-modal-body>`);
      lines.push(`  <brightrail-modal-footer>`);
      lines.push(
        `    <brightrail-button variant="outline" size="sm" (click)="wizardGoBack()">Back</brightrail-button>`,
      );
      lines.push(
        `    <brightrail-button variant="primary" size="sm" (click)="wizardGoNext()">Next</brightrail-button>`,
      );
      lines.push(`  </brightrail-modal-footer>`);
    } else if (recipe === 'destructivePhrase') {
      lines.push(`  <brightrail-modal-body>`);
      lines.push(`    <p>${escapePcdata(this.bodyParagraph())}</p>`);
      lines.push(`    <label class="mp-field-label" for="destructive-confirm">Type DELETE to confirm</label>`);
      lines.push(
        `    <input id="destructive-confirm" type="text" autocomplete="off" class="mp-field-input" [ngModel]="destructivePhraseInput()" (ngModelChange)="destructivePhraseInput.set($event)" [ngModelOptions]="{ standalone: true }" />`,
      );
      lines.push(`  </brightrail-modal-body>`);
      this.pushFooterSnippet(lines);
    } else if (recipe === 'stickyLongForm') {
      lines.push(`  <brightrail-modal-body>`);
      for (const section of this.longFormSections.slice(0, 2)) {
        lines.push(`    <h3 class="mp-long-form__h">${escapePcdata(section.heading)}</h3>`);
        lines.push(`    <p>${escapePcdata(section.body)}</p>`);
      }
      lines.push(`    <!-- …more sections -->`);
      lines.push(`  </brightrail-modal-body>`);
      this.pushFooterSnippet(lines);
    } else if (recipe === 'wizardAltHeader' || recipe === 'autosaveDraft') {
      lines.push(`  <brightrail-modal-body>`);
      lines.push(`    <p>${escapePcdata(this.bodyParagraph())}</p>`);
      lines.push(`  </brightrail-modal-body>`);
      this.pushFooterSnippet(lines);
    } else if (recipe === 'advancedOptions') {
      lines.push(`  <brightrail-modal-body>`);
      lines.push(`    <label class="mp-field-label" for="prio">Priority</label>`);
      lines.push(
        `    <select id="prio" class="mp-field-input" [ngModel]="advancedPriority()" (ngModelChange)="advancedPriority.set($event)" [ngModelOptions]="{ standalone: true }">`,
      );
      lines.push(`      <option value="high">High</option>`);
      lines.push(`      <option value="medium">Medium</option>`);
      lines.push(`      <option value="low">Low</option>`);
      lines.push(`    </select>`);
      lines.push(`    <label class="mp-field-label" for="due">Due date</label>`);
      lines.push(
        `    <input id="due" type="date" class="mp-field-input" [ngModel]="advancedDueDate()" (ngModelChange)="advancedDueDate.set($event)" [ngModelOptions]="{ standalone: true }" />`,
      );
      lines.push(`  </brightrail-modal-body>`);
      this.pushFooterSnippet(lines);
    } else {
      lines.push(`  <brightrail-modal-body>`);
      lines.push(`    <p>${escapePcdata(this.bodyParagraph())}</p>`);
      lines.push(`  </brightrail-modal-body>`);
      this.pushFooterSnippet(lines);
    }
    lines.push(`</brightrail-modal>`);
    return lines.join('\n');
  }

  /** Mirrors {@link ModalPlaygroundComponent} template — footer is plain content projection; buttons are host-authored. */
  private pushFooterSnippet(lines: string[]): void {
    lines.push(`  <brightrail-modal-footer>`);
    if (this.previewRecipe() === 'destructivePhrase') {
      lines.push(`    <brightrail-button variant="outline" size="sm" (click)="dismissModal()">Cancel</brightrail-button>`);
      lines.push(
        `    <brightrail-button variant="danger" size="sm" [disabled]="deleteActionDisabled()" (click)="dismissModal()">Delete</brightrail-button>`,
      );
      lines.push(`  </brightrail-modal-footer>`);
      return;
    }
    switch (this.footerPreset()) {
      case 'primaryOnly':
        lines.push(
          `    <brightrail-button variant="primary" size="sm" [disabled]="primaryDisabled()" (click)="dismissModal()">${escapePcdata(this.primaryLabel())}</brightrail-button>`,
        );
        break;
      case 'primarySecondary':
        lines.push(
          `    <brightrail-button variant="outline" size="sm" (click)="dismissModal()">${escapePcdata(this.secondaryLabel())}</brightrail-button>`,
        );
        if (this.previewRecipe() === 'confirmDelete') {
          lines.push(
            `    <brightrail-button variant="danger" size="sm" (click)="dismissModal()">${escapePcdata(this.primaryLabel())}</brightrail-button>`,
          );
        } else {
          lines.push(
            `    <brightrail-button variant="primary" size="sm" (click)="dismissModal()">${escapePcdata(this.primaryLabel())}</brightrail-button>`,
          );
        }
        break;
      case 'destructive':
        lines.push(
          `    <brightrail-button variant="outline" size="sm" (click)="dismissModal()">Cancel</brightrail-button>`,
        );
        lines.push(
          `    <brightrail-button variant="danger" size="sm" (click)="dismissModal()">Delete</brightrail-button>`,
        );
        break;
      case 'linkOnly':
        lines.push(
          `    <brightrail-button variant="link" size="sm" (click)="dismissModal()">Learn more →</brightrail-button>`,
        );
        break;
    }
    lines.push(`  </brightrail-modal-footer>`);
  }

  private buildTs(): string {
    return playgroundFxTs([
      `import { FormsModule } from '@angular/forms';`,
      `import { signal } from '@angular/core';`,
      `import {`,
      `  BrightrailButtonComponent,`,
      `  BrightrailModalBodyComponent,`,
      `  BrightrailModalComponent,`,
      `  BrightrailModalFooterComponent,`,
      `  BrightrailModalHeaderActionsDirective,`,
      `  BrightrailModalHeaderComponent,`,
      `  BrightrailModalTitleDirective,`,
      `  BrightrailButtonIconComponent,`,
      `  BrightrailIconButtonComponent,`,
      `} from 'brightrail';`,
      ``,
      `modalOpen = signal(true);`,
      `demoFieldValue = signal('');`,
      ``,
      `dismissModal(): void {`,
      `  this.modalOpen.set(false);`,
      `}`,
      ``,
      `onDemoFormSubmit(ev: Event): void {`,
      `  ev.preventDefault();`,
      `  this.dismissModal();`,
      `}`,
      ``,
      `onBackdropDismiss(): void {`,
      `  this.dismissModal();`,
      `}`,
      ``,
      `onEscapeClose(): void {`,
      `  this.dismissModal();`,
      `}`,
    ].join('\n'), this.previewFx(), this.themeService.fxShell());
  }

  private buildScss(): string {
    return [
      `.mp-preview-frame {`,
      `  position: relative;`,
      `  min-height: min(28rem, 52vh);`,
      `}`,
      ``,
      `.mp-title-row {`,
      `  display: flex;`,
      `  align-items: center;`,
      `  gap: 0.5rem;`,
      `}`,
      ``,
      `.mp-modal-form {`,
      `  display: flex;`,
      `  flex-direction: column;`,
      `  flex: 1 1 auto;`,
      `  min-height: 0;`,
      `}`,
      ``,
      `.mp-form-lead {`,
      `  margin: 0 0 0.85rem;`,
      `  font-size: 0.9375rem;`,
      `  line-height: 1.5;`,
      `  color: var(--ff-text-core);`,
      `}`,
      ``,
      `.mp-field-label {`,
      `  display: block;`,
      `  font-size: 0.78rem;`,
      `  font-weight: 600;`,
      `  color: var(--ff-label);`,
      `  margin-bottom: 0.35rem;`,
      `}`,
      ``,
      `.mp-field-input {`,
      `  box-sizing: border-box;`,
      `  width: 100%;`,
      `  padding: 0.45rem 0.55rem;`,
      `  border-radius: 0.45rem;`,
      `  border: 1px solid var(--ff-border-strong);`,
      `  font: inherit;`,
      `  font-size: 0.9rem;`,
      `  color: var(--ff-text-core);`,
      `  background: var(--ff-surface);`,
      `}`,
      ``,
      `.mp-field-input:focus-visible {`,
      `  outline: none;`,
      `  border-color: var(--ff-brand);`,
      `  box-shadow: 0 0 0 3px var(--ff-brand-soft);`,
      `}`,
      ``,
      `.mp-foot-btn {`,
      `  font: inherit;`,
      `  font-weight: 600;`,
      `  font-size: 0.8125rem;`,
      `  padding: 0.42rem 0.95rem;`,
      `  border-radius: 0.45rem;`,
      `  cursor: pointer;`,
      `}`,
      ``,
      `.mp-foot-btn--outline {`,
      `  border: 1px solid var(--ff-border-strong);`,
      `  background: var(--ff-surface);`,
      `  color: var(--ff-text-core);`,
      `}`,
      ``,
      `.mp-foot-btn--outline:hover {`,
      `  border-color: var(--ff-brand);`,
      `  color: var(--ff-accent);`,
      `}`,
      ``,
      `.mp-foot-btn--primary {`,
      `  border: 1px solid var(--ff-brand);`,
      `  background: var(--ff-brand);`,
      `  color: #fff;`,
      `}`,
      ``,
      `.mp-foot-btn--primary:hover {`,
      `  background: var(--ff-brand-strong);`,
      `  border-color: var(--ff-brand-strong);`,
      `}`,
    ].join('\n');
  }
}

function escapePcdata(text: string): string {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
