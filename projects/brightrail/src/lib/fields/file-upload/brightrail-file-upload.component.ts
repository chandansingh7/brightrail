import {
  ChangeDetectionStrategy,
  Component,
  computed,
  forwardRef,
  input,
  output,
  signal,
} from '@angular/core';
import { BRIGHTRAIL_FX_SHELL_HOST } from '../../futuristic/brightrail-futuristic-host';
import { NgStyle } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import {
  BrightrailTextFieldLabelPosition,
  BrightrailTextFieldSize,
} from '../text-field/brightrail-text-field.component';

export type BrightrailFileUploadAppearance = 'outlined' | 'filled' | 'soft';
export type BrightrailFileUploadStatus = 'default' | 'none' | 'success' | 'warning' | 'error' | 'info';
export type BrightrailFileUploadVariant = 'dropzone' | 'compact' | 'button';
export type BrightrailFileUploadState = 'default' | 'hover' | 'focused' | 'disabled';
export type BrightrailFileUploadItemStatus = 'uploading' | 'success' | 'error' | 'idle';
export type BrightrailFileUploadSurface = 'default' | 'image-preview' | 'enterprise' | 'futuristic';
export type BrightrailFileUploadEnterprisePattern =
  | 'none'
  | 'document-submission'
  | 'type-restrictions'
  | 'with-description'
  | 'replace-file';

export interface BrightrailFileUploadItem {
  id?: string;
  name: string;
  sizeLabel?: string;
  progress?: number;
  status?: BrightrailFileUploadItemStatus;
  actionLabel?: string;
}

const STATUS_HINTS: Record<Exclude<BrightrailFileUploadStatus, 'default' | 'none'>, string> = {
  success: 'Looks good!',
  warning: 'Please verify this information.',
  error: 'This field is required.',
  info: 'Upload files to continue.',
};

@Component({
  selector: 'brightrail-file-upload',
  hostDirectives: [BRIGHTRAIL_FX_SHELL_HOST],
  standalone: true,
  imports: [NgStyle],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BrightrailFileUploadComponent),
      multi: true,
    },
  ],
  templateUrl: './brightrail-file-upload.component.html',
  styleUrl: './brightrail-file-upload.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrightrailFileUploadComponent implements ControlValueAccessor {
  private static nextId = 0;
  private readonly uid = `br-fu-${BrightrailFileUploadComponent.nextId++}`;

  readonly label = input<string | undefined>(undefined);
  readonly labelPosition = input<BrightrailTextFieldLabelPosition>('top');
  readonly helperText = input<string | undefined>(undefined);
  readonly status = input<BrightrailFileUploadStatus>('default');
  readonly appearance = input<BrightrailFileUploadAppearance>('outlined');
  readonly variant = input<BrightrailFileUploadVariant>('dropzone');
  readonly surface = input<BrightrailFileUploadSurface>('default');
  readonly enterprisePattern = input<BrightrailFileUploadEnterprisePattern>('none');
  readonly state = input<BrightrailFileUploadState>('default');
  readonly size = input<BrightrailTextFieldSize>('md');
  readonly placeholder = input('Drop files here or click to browse');
  readonly buttonText = input('Choose files');
  readonly showCloudIcon = input(true);
  readonly showUploadProgress = input(true);
  readonly enableDragDrop = input(true);
  readonly required = input(false);
  readonly disabled = input(false);
  readonly multiple = input(true);
  readonly accept = input<string | undefined>(undefined);
  readonly maxFiles = input<number | null>(null);
  readonly maxFileSizeMb = input<number | null>(null);
  readonly showFileList = input(true);
  readonly fileItems = input<BrightrailFileUploadItem[] | null>(null);
  readonly previewImageUrl = input('');
  readonly previewImageAlt = input('Preview image');
  readonly showFooterActions = input(false);
  readonly addMoreText = input('Add more files');
  readonly clearAllText = input('Clear all');
  readonly enterpriseSecondaryText = input('');
  readonly inputId = input<string | undefined>(undefined);

  readonly filesChange = output<File[]>();
  readonly fileItemsChange = output<BrightrailFileUploadItem[]>();

  protected readonly files = signal<File[]>([]);
  protected readonly dragOver = signal(false);
  protected readonly imageLoadError = signal(false);
  private readonly disabledFromCva = signal(false);

  private onChange: (value: File[]) => void = () => {};
  private onTouched: () => void = () => {};

  readonly controlId = computed(() => this.inputId() ?? this.uid);
  readonly hintId = computed(() => `${this.controlId()}-hint`);
  readonly showLabel = computed(
    () => this.labelPosition() !== 'none' && !!this.label()?.trim(),
  );
  readonly effectiveDisabled = computed(
    () => this.disabled() || this.disabledFromCva() || this.state() === 'disabled',
  );
  readonly sizeClass = computed(() => `br-fu--${this.size()}`);
  readonly appearanceClass = computed(() => `br-fu--${this.appearance()}`);
  readonly variantClass = computed(() => `br-fu--variant-${this.variant()}`);
  readonly stateClass = computed(() => `br-fu--state-${this.state()}`);
  readonly surfaceClass = computed(() => `br-fu--surface-${this.surface()}`);
  readonly rootClass = computed(
    () =>
      `${this.sizeClass()} ${this.appearanceClass()} ${this.variantClass()} ${this.surfaceClass()} ${this.stateClass()} ${this.statusClass()}`,
  );
  readonly statusClass = computed(() => {
    const status = this.resolvedStatus();
    return status === 'none' ? '' : `br-fu--status-${status}`;
  });
  readonly canAddMoreFiles = computed(() => {
    const max = this.maxFiles();
    if (max == null || max < 1) {
      return true;
    }
    return this.files().length < max;
  });
  readonly visibleItems = computed<BrightrailFileUploadItem[]>(() => {
    const external = this.fileItems();
    if (external && external.length > 0) {
      return external.map((item, idx) => ({
        id: item.id ?? `item-${idx}`,
        name: item.name,
        sizeLabel: item.sizeLabel ?? '',
        progress: this.clampProgress(item.progress ?? 100),
        status: item.status ?? 'success',
        actionLabel: item.actionLabel ?? (item.status === 'error' ? 'Retry' : ''),
      }));
    }
    return this.files().map((file, idx) => ({
      id: `${file.name}-${file.lastModified}-${idx}`,
      name: file.name,
      sizeLabel: this.formatSize(file),
      progress: 100,
      status: 'success',
      actionLabel: '',
    }));
  });
  readonly shouldShowFiles = computed(() => this.showFileList() && this.visibleItems().length > 0);
  readonly normalizedAcceptLabel = computed(() => {
    const accept = `${this.accept() ?? ''}`.trim();
    if (!accept) {
      return '';
    }
    return accept
      .split(',')
      .map((part) => part.trim())
      .filter(Boolean)
      .map((part) => part.replace(/^image\//, '').replace(/^\./, '').toUpperCase())
      .join(', ');
  });
  readonly maxSizeCaption = computed(() => {
    const sizeMb = this.maxFileSizeMb();
    if (sizeMb == null || sizeMb <= 0) {
      return '';
    }
    const accept = this.normalizedAcceptLabel();
    if (!accept) {
      return `Supports files up to ${sizeMb} MB per file.`;
    }
    return `Supports: ${accept} (Max ${sizeMb}MB)`;
  });
  readonly resolvedHintText = computed(() => {
    const custom = this.helperText()?.trim();
    if (custom) {
      return custom;
    }
    const s = this.resolvedStatus();
    if (s === 'none') {
      return undefined;
    }
    return STATUS_HINTS[s];
  });

  writeValue(value: File[] | null): void {
    this.files.set(value ?? []);
  }

  registerOnChange(fn: (value: File[]) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabledFromCva.set(isDisabled);
  }

  onFileInputChange(event: Event): void {
    if (this.effectiveDisabled()) {
      return;
    }
    const inputEl = event.target as HTMLInputElement | null;
    const selected = Array.from(inputEl?.files ?? []);
    const external = this.fileItems();
    if (external && external.length > 0) {
      const incoming = this.applyConstraints(selected);
      const next = this.mergeExternalItems(external, incoming);
      this.fileItemsChange.emit(next);
      this.onTouched();
      if (inputEl) {
        inputEl.value = '';
      }
      return;
    }
    this.commitFiles(selected);
    this.onTouched();
    if (inputEl) {
      inputEl.value = '';
    }
  }

  onDragOver(event: DragEvent): void {
    if (!this.enableDragDrop() || this.effectiveDisabled()) {
      return;
    }
    event.preventDefault();
    this.dragOver.set(true);
  }

  onDragLeave(event: DragEvent): void {
    if (!this.enableDragDrop() || this.effectiveDisabled()) {
      return;
    }
    event.preventDefault();
    this.dragOver.set(false);
  }

  onDrop(event: DragEvent): void {
    if (!this.enableDragDrop() || this.effectiveDisabled()) {
      return;
    }
    event.preventDefault();
    this.dragOver.set(false);
    const selected = Array.from(event.dataTransfer?.files ?? []);
    if (selected.length > 0) {
      const external = this.fileItems();
      if (external && external.length > 0) {
        const incoming = this.applyConstraints(selected);
        this.fileItemsChange.emit(this.mergeExternalItems(external, incoming));
        this.onTouched();
        return;
      }
      this.commitFiles(selected);
      this.onTouched();
    }
  }

  onPreviewImageError(): void {
    this.imageLoadError.set(true);
  }

  onPreviewImageLoad(): void {
    this.imageLoadError.set(false);
  }

  removeFile(index: number): void {
    if (this.effectiveDisabled()) {
      return;
    }
    const external = this.fileItems();
    if (external && external.length > 0) {
      const next = [...external];
      next.splice(index, 1);
      this.fileItemsChange.emit(next);
      this.onTouched();
      return;
    }
    const next = [...this.files()];
    next.splice(index, 1);
    this.commitFiles(next);
    this.onTouched();
  }

  clearAll(): void {
    if (this.effectiveDisabled()) {
      return;
    }
    this.commitFiles([]);
    this.onTouched();
    this.fileItemsChange.emit([]);
  }

  formatSize(file: File): string {
    const bytes = file.size;
    if (bytes < 1024) {
      return `${bytes} B`;
    }
    const kb = bytes / 1024;
    if (kb < 1024) {
      return `${kb.toFixed(1)} KB`;
    }
    return `${(kb / 1024).toFixed(1)} MB`;
  }

  resolvedStatus(): Exclude<BrightrailFileUploadStatus, 'default'> {
    const s = this.status();
    return s === 'default' ? 'none' : s;
  }

  progressStyle(item: BrightrailFileUploadItem): Record<string, string> {
    return { width: `${this.clampProgress(item.progress ?? 0)}%` };
  }

  itemStatusClass(item: BrightrailFileUploadItem): string {
    return `br-fu__file--${item.status ?? 'success'}`;
  }

  private commitFiles(incoming: File[]): void {
    const checked = this.applyConstraints(incoming);
    this.files.set(checked);
    this.onChange(checked);
    this.filesChange.emit(checked);
  }

  private applyConstraints(incoming: File[]): File[] {
    const maxSizeMb = this.maxFileSizeMb();
    const maxBytes =
      maxSizeMb != null && maxSizeMb > 0 ? maxSizeMb * 1024 * 1024 : null;
    const filtered =
      maxBytes == null
        ? incoming
        : incoming.filter((file) => file.size <= maxBytes);

    const max = this.maxFiles();
    if (max == null || max < 1) {
      return filtered;
    }
    return filtered.slice(0, max);
  }

  private clampProgress(value: number): number {
    if (!Number.isFinite(value)) {
      return 0;
    }
    return Math.max(0, Math.min(100, Math.round(value)));
  }

  private mergeExternalItems(
    base: BrightrailFileUploadItem[],
    incomingFiles: File[],
  ): BrightrailFileUploadItem[] {
    const max = this.maxFiles();
    const next = [...base];
    for (const file of incomingFiles) {
      if (max != null && max > 0 && next.length >= max) {
        break;
      }
      next.push({
        id: `${file.name}-${file.lastModified}-${next.length}`,
        name: file.name,
        sizeLabel: this.formatSize(file),
        progress: 100,
        status: 'success',
        actionLabel: '',
      });
    }
    return next;
  }
}
