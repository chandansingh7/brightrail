import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  BrightrailFileUploadAppearance,
  BrightrailFileUploadComponent,
  BrightrailFileUploadItem,
  BrightrailFileUploadSurface,
  BrightrailFileUploadState,
  BrightrailFileUploadStatus,
  BrightrailFileUploadVariant,
  BrightrailTextFieldSize,
} from 'brightrail';

import { PlaygroundThemeId, PlaygroundThemeService } from '../playground-theme.service';

type CodeTabId = 'html' | 'ts' | 'scss';
type FileUploadScenarioGroup =
  | 'core-upload-types'
  | 'appearances'
  | 'sizes'
  | 'states'
  | 'single-file-upload'
  | 'multi-file-upload'
  | 'drag-drop'
  | 'image-upload'
  | 'enterprise-patterns'
  | 'futuristic-upload-designs';
type FileUploadScenario =
  | 'core-compact-file-picker'
  | 'core-outlined-file-picker'
  | 'core-icon-button-upload'
  | 'appearance-filled'
  | 'appearance-outlined'
  | 'appearance-soft'
  | 'size-compact'
  | 'size-medium'
  | 'size-large'
  | 'size-extra-large'
  | 'state-default'
  | 'state-hover'
  | 'state-focus'
  | 'state-disabled'
  | 'single-file-upload-status'
  | 'multi-file-upload-progress'
  | 'drag-drop-upload'
  | 'image-upload-preview'
  | 'enterprise-document-submission'
  | 'enterprise-file-type-restrictions'
  | 'enterprise-upload-with-description'
  | 'enterprise-replace-file'
  | 'futuristic-glass-subtle';
type FileListPreset = 'none' | 'single-success' | 'multi-mixed' | 'enterprise';

@Component({
  selector: 'app-file-upload-playground',
  standalone: true,
  imports: [FormsModule, BrightrailFileUploadComponent],
  templateUrl: './file-upload-playground.component.html',
  styleUrl: './file-upload-playground.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FileUploadPlaygroundComponent {
  readonly themeService = inject(PlaygroundThemeService);
  readonly ngModelStandalone = { standalone: true };

  readonly scenarioGroupOptions: { value: FileUploadScenarioGroup; label: string }[] = [
    { value: 'core-upload-types', label: '1. Core Upload Types' },
    { value: 'appearances', label: '2. Appearances' },
    { value: 'sizes', label: '3. Sizes' },
    { value: 'states', label: '4. States' },
    { value: 'single-file-upload', label: '5. Single File Upload' },
    { value: 'multi-file-upload', label: '6. Multi-File Upload' },
    { value: 'drag-drop', label: '7. Drag and Drop' },
    { value: 'image-upload', label: '8. Image Upload / Preview' },
    { value: 'enterprise-patterns', label: '9. Enterprise Patterns' },
    { value: 'futuristic-upload-designs', label: '10. Futuristic Upload Designs' },
  ];
  readonly scenarioOptions: { value: FileUploadScenario; label: string; group: FileUploadScenarioGroup }[] = [
    { value: 'core-compact-file-picker', label: 'Compact file picker', group: 'core-upload-types' },
    { value: 'core-outlined-file-picker', label: 'Outlined file picker', group: 'core-upload-types' },
    { value: 'core-icon-button-upload', label: 'Icon button upload', group: 'core-upload-types' },
    { value: 'appearance-filled', label: 'Filled', group: 'appearances' },
    { value: 'appearance-outlined', label: 'Outlined', group: 'appearances' },
    { value: 'appearance-soft', label: 'Soft', group: 'appearances' },
    { value: 'size-compact', label: 'Compact', group: 'sizes' },
    { value: 'size-medium', label: 'Medium (default)', group: 'sizes' },
    { value: 'size-large', label: 'Large', group: 'sizes' },
    { value: 'size-extra-large', label: 'Extra large', group: 'sizes' },
    { value: 'state-default', label: 'Default', group: 'states' },
    { value: 'state-hover', label: 'Hover', group: 'states' },
    { value: 'state-focus', label: 'Focus', group: 'states' },
    { value: 'state-disabled', label: 'Disabled', group: 'states' },
    { value: 'single-file-upload-status', label: 'Single file with status rows', group: 'single-file-upload' },
    { value: 'multi-file-upload-progress', label: 'Multi file with progress', group: 'multi-file-upload' },
    { value: 'drag-drop-upload', label: 'Drop file here', group: 'drag-drop' },
    { value: 'image-upload-preview', label: 'Avatar upload / preview', group: 'image-upload' },
    { value: 'enterprise-document-submission', label: 'Document submission', group: 'enterprise-patterns' },
    { value: 'enterprise-file-type-restrictions', label: 'File type restrictions', group: 'enterprise-patterns' },
    { value: 'enterprise-upload-with-description', label: 'Upload with description', group: 'enterprise-patterns' },
    { value: 'enterprise-replace-file', label: 'Replace file', group: 'enterprise-patterns' },
    { value: 'futuristic-glass-subtle', label: 'Glass / subtle', group: 'futuristic-upload-designs' },
  ];
  readonly appearanceOptions: BrightrailFileUploadAppearance[] = ['outlined', 'filled', 'soft'];
  readonly variantOptions: BrightrailFileUploadVariant[] = ['dropzone', 'compact', 'button'];
  readonly stateOptions: BrightrailFileUploadState[] = ['default', 'hover', 'focused', 'disabled'];
  readonly statusOptions: BrightrailFileUploadStatus[] = ['default', 'success', 'warning', 'error', 'info'];
  readonly sizeOptions: BrightrailTextFieldSize[] = ['sm', 'md', 'lg', 'xl'];
  readonly acceptedTypeOptions = ['PDF, PNG, JPG', 'PDF, DOCX', 'PNG, JPG', 'Any'] as const;
  readonly maxSizeOptions = [2, 5, 10, 25] as const;
  readonly maxFilesOptions = [1, 2, 3, 5, 8] as const;
  readonly fileListPresetOptions: { value: FileListPreset; label: string }[] = [
    { value: 'none', label: 'None' },
    { value: 'single-success', label: 'Single success row' },
    { value: 'multi-mixed', label: 'Multi mixed rows' },
    { value: 'enterprise', label: 'Enterprise docs rows' },
  ];
  readonly enterprisePatternOptions: {
    value: 'none' | 'document-submission' | 'type-restrictions' | 'with-description' | 'replace-file';
    label: string;
  }[] = [
    { value: 'none', label: 'None' },
    { value: 'document-submission', label: 'Document submission' },
    { value: 'type-restrictions', label: 'File type restrictions' },
    { value: 'with-description', label: 'Upload with description' },
    { value: 'replace-file', label: 'Replace file' },
  ];
  readonly yesNo = [
    { value: 'no', label: 'No' },
    { value: 'yes', label: 'Yes' },
  ] as const;
  readonly themeRowOptions: { id: PlaygroundThemeId; label: string }[] = [
    { id: 'light', label: 'Material light' },
    { id: 'dark', label: 'Material dark' },
  ];

  readonly scenarioGroup = signal<FileUploadScenarioGroup>('core-upload-types');
  readonly scenario = signal<FileUploadScenario>('core-compact-file-picker');
  readonly label = signal('Attachments');
  readonly helperText = signal('Upload PDF, PNG, or JPG files up to 10 MB.');
  readonly placeholder = signal('Drop files here or browse');
  readonly buttonText = signal('Choose files');
  readonly appearance = signal<BrightrailFileUploadAppearance>('outlined');
  readonly variant = signal<BrightrailFileUploadVariant>('dropzone');
  readonly surface = signal<BrightrailFileUploadSurface>('default');
  readonly state = signal<BrightrailFileUploadState>('default');
  readonly status = signal<BrightrailFileUploadStatus>('default');
  readonly size = signal<BrightrailTextFieldSize>('md');
  readonly required = signal(false);
  readonly disabled = signal(false);
  readonly multiple = signal(true);
  readonly accept = signal('.pdf,.png,.jpg');
  readonly maxFiles = signal(5);
  readonly maxFileSizeMb = signal(10);
  readonly showFileList = signal(true);
  readonly showCloudIcon = signal(true);
  readonly showUploadProgress = signal(true);
  readonly fileListPreset = signal<FileListPreset>('none');
  readonly previewItems = signal<BrightrailFileUploadItem[] | null>(null);
  readonly enableDragDrop = signal(true);
  readonly showFooterActions = signal(false);
  readonly previewImageUrl = signal('');
  readonly enterprisePattern = signal<
    'none' | 'document-submission' | 'type-restrictions' | 'with-description' | 'replace-file'
  >('none');
  readonly enterpriseSecondaryText = signal('');
  readonly activeTab = signal<CodeTabId>('html');

  readonly activeSnippet = computed(() => {
    switch (this.activeTab()) {
      case 'ts':
        return this.buildTs();
      case 'scss':
        return this.buildScss();
      default:
        return this.buildHtml();
    }
  });

  constructor() {
    this.applyScenario('core-compact-file-picker');
  }

  scenariosInGroup(group: FileUploadScenarioGroup): { value: FileUploadScenario; label: string }[] {
    return this.scenarioOptions.filter((o) => o.group === group).map((o) => ({ value: o.value, label: o.label }));
  }

  onScenarioGroupNgModelChange(v: string): void {
    const nextGroup = v as FileUploadScenarioGroup;
    this.scenarioGroup.set(nextGroup);
    const firstScenario = this.scenariosInGroup(nextGroup)[0]?.value;
    if (firstScenario) {
      this.onScenarioNgModelChange(firstScenario);
    }
  }

  onScenarioNgModelChange(v: string): void {
    const nextScenario = v as FileUploadScenario;
    this.scenario.set(nextScenario);
    this.applyScenario(nextScenario);
  }

  onAcceptedTypesNgModelChange(v: string): void {
    if (v === 'PDF, DOCX') {
      this.accept.set('.pdf,.docx');
    } else if (v === 'PNG, JPG') {
      this.accept.set('.png,.jpg,.jpeg');
    } else if (v === 'Any') {
      this.accept.set('');
    } else {
      this.accept.set('.pdf,.png,.jpg');
    }
  }

  onFileListPresetNgModelChange(v: string): void {
    const preset = v as FileListPreset;
    this.fileListPreset.set(preset);
    this.previewItems.set(this.itemsForPreset(preset));
    this.showFileList.set(preset !== 'none');
  }

  acceptedTypesModel(): string {
    const normalized = this.accept().toLowerCase();
    if (!normalized) return 'Any';
    if (normalized.includes('docx')) return 'PDF, DOCX';
    if (normalized.includes('.png') && normalized.includes('.jpg') && !normalized.includes('.pdf'))
      return 'PNG, JPG';
    return 'PDF, PNG, JPG';
  }

  applyScenario(scenario: FileUploadScenario): void {
    this.label.set('Attachments');
    this.helperText.set('Upload PDF, PNG, or JPG files up to 10 MB.');
    this.placeholder.set('Drop files here or browse');
    this.buttonText.set('Choose files');
    this.appearance.set('outlined');
    this.variant.set('dropzone');
    this.surface.set('default');
    this.state.set('default');
    this.status.set('default');
    this.size.set('md');
    this.required.set(false);
    this.disabled.set(false);
    this.multiple.set(true);
    this.accept.set('.pdf,.png,.jpg');
    this.maxFiles.set(5);
    this.maxFileSizeMb.set(10);
    this.showFileList.set(true);
    this.showCloudIcon.set(true);
    this.showUploadProgress.set(true);
    this.fileListPreset.set('none');
    this.previewItems.set(null);
    this.enableDragDrop.set(true);
    this.showFooterActions.set(false);
    this.previewImageUrl.set('');
    this.enterprisePattern.set('none');
    this.enterpriseSecondaryText.set('');

    if (scenario === 'core-compact-file-picker') {
      this.label.set('Contract file');
      this.placeholder.set('Select a single file');
      this.multiple.set(false);
      this.maxFiles.set(1);
      this.size.set('sm');
      this.showFileList.set(false);
      this.variant.set('compact');
      this.showCloudIcon.set(false);
    } else if (scenario === 'core-outlined-file-picker') {
      this.showFileList.set(false);
      this.multiple.set(false);
      this.appearance.set('outlined');
    } else if (scenario === 'core-icon-button-upload') {
      this.buttonText.set('Upload');
      this.variant.set('button');
      this.showCloudIcon.set(true);
      this.showFileList.set(false);
      this.multiple.set(false);
    } else if (scenario === 'appearance-filled') {
      this.appearance.set('filled');
      this.showFileList.set(false);
      this.multiple.set(false);
    } else if (scenario === 'appearance-outlined') {
      this.appearance.set('outlined');
      this.showFileList.set(false);
      this.multiple.set(false);
    } else if (scenario === 'appearance-soft') {
      this.appearance.set('soft');
      this.showFileList.set(false);
      this.multiple.set(false);
    } else if (scenario === 'size-compact') {
      this.size.set('sm');
      this.showFileList.set(false);
      this.multiple.set(false);
    } else if (scenario === 'size-medium') {
      this.size.set('md');
      this.showFileList.set(false);
      this.multiple.set(false);
    } else if (scenario === 'size-large') {
      this.size.set('lg');
      this.showFileList.set(false);
      this.multiple.set(false);
    } else if (scenario === 'size-extra-large') {
      this.size.set('xl');
      this.showFileList.set(false);
      this.multiple.set(false);
    } else if (scenario === 'state-default') {
      this.state.set('default');
      this.showFileList.set(false);
      this.multiple.set(false);
    } else if (scenario === 'state-hover') {
      this.state.set('hover');
      this.showFileList.set(false);
      this.multiple.set(false);
    } else if (scenario === 'state-focus') {
      this.state.set('focused');
      this.showFileList.set(false);
      this.multiple.set(false);
    } else if (scenario === 'state-disabled') {
      this.state.set('disabled');
      this.showFileList.set(false);
      this.multiple.set(false);
    } else if (scenario === 'single-file-upload-status') {
      this.multiple.set(false);
      this.maxFiles.set(1);
      this.helperText.set('Uploads a single file with progress and status.');
      this.onFileListPresetNgModelChange('single-success');
    } else if (scenario === 'multi-file-upload-progress') {
      this.status.set('success');
      this.helperText.set('Files uploaded successfully.');
      this.showUploadProgress.set(true);
      this.showFooterActions.set(true);
      this.onFileListPresetNgModelChange('multi-mixed');
    } else if (scenario === 'drag-drop-upload') {
      this.label.set('Drag file here');
      this.placeholder.set('Drag file here or click to browse.');
      this.buttonText.set('Browse files');
      this.accept.set('.pdf,.docx,.png,.jpg,.zip');
      this.maxFileSizeMb.set(5);
      this.showFileList.set(false);
    } else if (scenario === 'image-upload-preview') {
      this.label.set('Avatar upload');
      this.helperText.set('JPG, PNG up to 5MB');
      this.buttonText.set('Apply');
      this.accept.set('.jpg,.png');
      this.maxFileSizeMb.set(5);
      this.multiple.set(false);
      this.variant.set('dropzone');
      this.surface.set('image-preview');
      this.showCloudIcon.set(true);
      this.showUploadProgress.set(false);
      this.previewImageUrl.set(
        'https://images.unsplash.com/photo-1517336714739-489689fd1ca8?w=900&q=80&auto=format&fit=crop',
      );
      this.onFileListPresetNgModelChange('single-success');
    } else if (scenario === 'enterprise-document-submission') {
      this.label.set('Vendor docs');
      this.helperText.set('Document submission');
      this.accept.set('.pdf,.docx,.xlsx,.pptx');
      this.maxFileSizeMb.set(25);
      this.maxFiles.set(3);
      this.surface.set('enterprise');
      this.showFooterActions.set(true);
      this.enterprisePattern.set('document-submission');
      this.enterpriseSecondaryText.set('NDA_Agreement.pdf');
      this.onFileListPresetNgModelChange('enterprise');
    } else if (scenario === 'enterprise-file-type-restrictions') {
      this.label.set('Vendor docs');
      this.helperText.set('File type restrictions');
      this.accept.set('.pdf,.docx,.xlsx,.pptx');
      this.maxFileSizeMb.set(25);
      this.surface.set('enterprise');
      this.enterprisePattern.set('type-restrictions');
      this.enterpriseSecondaryText.set('Allowed file types: PDF, DOCX, XLSX, PPTX');
      this.onFileListPresetNgModelChange('none');
      this.showFileList.set(false);
    } else if (scenario === 'enterprise-upload-with-description') {
      this.label.set('Technical document');
      this.helperText.set('Upload with description');
      this.surface.set('enterprise');
      this.enterprisePattern.set('with-description');
      this.enterpriseSecondaryText.set('Add a description (optional)...');
      this.onFileListPresetNgModelChange('single-success');
    } else if (scenario === 'enterprise-replace-file') {
      this.label.set('Replace file');
      this.helperText.set('Replace existing document');
      this.surface.set('enterprise');
      this.enterprisePattern.set('replace-file');
      this.enterpriseSecondaryText.set('Current: old-report.pdf');
      this.buttonText.set('Replace file');
      this.showFileList.set(false);
    } else if (scenario === 'futuristic-glass-subtle') {
      this.label.set('Neural upload');
      this.placeholder.set('Choose file or drop here');
      this.buttonText.set('Choose file');
      this.surface.set('futuristic');
      this.appearance.set('soft');
      this.showCloudIcon.set(false);
      this.showUploadProgress.set(false);
      this.showFileList.set(false);
      this.variant.set('dropzone');
      this.surface.set('futuristic');
      this.enableDragDrop.set(false);
    }
  }

  resetToDefaults(): void {
    this.scenarioGroup.set('core-upload-types');
    this.scenario.set('core-compact-file-picker');
    this.applyScenario('core-compact-file-picker');
    this.themeService.setTheme('light');
    this.activeTab.set('html');
  }

  selectTab(tab: CodeTabId): void {
    this.activeTab.set(tab);
  }

  copySnippet(): void {
    void navigator.clipboard?.writeText(this.activeSnippet()).catch(() => undefined);
  }

  private buildHtml(): string {
    const lines = [`<brightrail-file-upload`, `  label="${this.escapeQuote(this.label())}"`];
    lines.push(`  appearance="${this.appearance()}"`);
    lines.push(`  variant="${this.variant()}"`);
    lines.push(`  surface="${this.surface()}"`);
    lines.push(`  state="${this.state()}"`);
    lines.push(`  status="${this.status()}"`);
    lines.push(`  size="${this.size()}"`);
    lines.push(`  placeholder="${this.escapeQuote(this.placeholder())}"`);
    lines.push(`  buttonText="${this.escapeQuote(this.buttonText())}"`);
    lines.push(`  helperText="${this.escapeQuote(this.helperText())}"`);
    lines.push(`  [required]="${this.required()}"`);
    lines.push(`  [disabled]="${this.disabled()}"`);
    lines.push(`  [multiple]="${this.multiple()}"`);
    lines.push(`  [showFileList]="${this.showFileList()}"`);
    lines.push(`  [showCloudIcon]="${this.showCloudIcon()}"`);
    lines.push(`  [showUploadProgress]="${this.showUploadProgress()}"`);
    lines.push(`  [enableDragDrop]="${this.enableDragDrop()}"`);
    lines.push(`  [showFooterActions]="${this.showFooterActions()}"`);
    lines.push(`  enterprisePattern="${this.enterprisePattern()}"`);
    if (this.enterpriseSecondaryText().trim()) {
      lines.push(`  enterpriseSecondaryText="${this.escapeQuote(this.enterpriseSecondaryText())}"`);
    }
    lines.push(`  [maxFiles]="${this.maxFiles()}"`);
    lines.push(`  [maxFileSizeMb]="${this.maxFileSizeMb()}"`);
    if (this.fileListPreset() !== 'none') {
      lines.push(`  [fileItems]="fileItems"`);
    }
    if (this.previewImageUrl().trim()) {
      lines.push(`  previewImageUrl="${this.escapeQuote(this.previewImageUrl())}"`);
    }
    if (this.accept().trim()) {
      lines.push(`  accept="${this.escapeQuote(this.accept())}"`);
    }
    lines.push(`/>`);
    return lines.join('\n');
  }

  private buildTs(): string {
    const q = (v: unknown): string => JSON.stringify(v);
    const preset = this.fileListPreset();
    const fileItemsValue = preset !== 'none' ? this.itemsForPreset(preset) : null;

    return [
      `// Scenario-driven props for <brightrail-file-upload />`,
      `const fileUploadProps = {`,
      `  label: ${q(this.label())},`,
      `  appearance: ${q(this.appearance())},`,
      `  variant: ${q(this.variant())},`,
      `  surface: ${q(this.surface())},`,
      `  state: ${q(this.state())},`,
      `  status: ${q(this.status())},`,
      `  size: ${q(this.size())},`,
      `  placeholder: ${q(this.placeholder())},`,
      `  buttonText: ${q(this.buttonText())},`,
      `  helperText: ${q(this.helperText())},`,
      `  required: ${q(this.required())},`,
      `  disabled: ${q(this.disabled())},`,
      `  multiple: ${q(this.multiple())},`,
      `  accept: ${q(this.accept())},`,
      `  maxFiles: ${q(this.maxFiles())},`,
      `  maxFileSizeMb: ${q(this.maxFileSizeMb())},`,
      `  showFileList: ${q(this.showFileList())},`,
      `  showCloudIcon: ${q(this.showCloudIcon())},`,
      `  showUploadProgress: ${q(this.showUploadProgress())},`,
      `  enableDragDrop: ${q(this.enableDragDrop())},`,
      `  showFooterActions: ${q(this.showFooterActions())},`,
      `  previewImageUrl: ${q(this.previewImageUrl())},`,
      `  enterprisePattern: ${q(this.enterprisePattern())},`,
      `  enterpriseSecondaryText: ${q(this.enterpriseSecondaryText())},`,
      `  fileItems: ${q(fileItemsValue)},`,
      `};`,
    ].join('\n');
  }

  private buildScss(): string {
    return [
      `brightrail-file-upload {`,
      `  display: block;`,
      `  max-width: 34rem;`,
      `}`,
      `/* ${this.scenarioGroup()} / ${this.scenario()} */`,
    ].join('\n');
  }

  private escapeQuote(text: string): string {
    return text.replace(/&/g, '&amp;').replace(/"/g, '&quot;');
  }

  private itemsForPreset(preset: FileListPreset): BrightrailFileUploadItem[] | null {
    if (preset === 'single-success') {
      return [{ id: 'a', name: 'avatar.png', sizeLabel: '1.7 MB', progress: 100, status: 'success' }];
    }
    if (preset === 'multi-mixed') {
      return [
        { id: 'r', name: 'requirements.docx', sizeLabel: '1.1 MB', progress: 100, status: 'success' },
        { id: 'd', name: 'design-system.sketch', sizeLabel: '4.3 MB', progress: 42, status: 'uploading' },
        { id: 'x', name: 'data-export.csv', sizeLabel: '780 KB', progress: 100, status: 'success' },
        { id: 'e', name: 'archive.zip', sizeLabel: '10.4 MB', progress: 100, status: 'error', actionLabel: 'Retry' },
      ];
    }
    if (preset === 'enterprise') {
      return [
        { id: 'nda', name: 'NDA_Agreement.pdf', sizeLabel: '2.1 MB', progress: 100, status: 'success' },
        { id: 'spec', name: 'Technical-specification.pdf', sizeLabel: '3.7 MB', progress: 100, status: 'success' },
      ];
    }
    return null;
  }
}
