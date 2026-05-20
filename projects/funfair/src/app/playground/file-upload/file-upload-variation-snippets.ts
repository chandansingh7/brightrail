/** Copy-ready markup for file-upload catalog tiles (consumers import from `brightrail`). */
export const FILE_UPLOAD_VARIATION_SNIPPETS = {
  coreCompact: `<brightrail-file-upload
  variant="compact"
  placeholder="Compact file picker"
  [showCloudIcon]="false"
  [showFileList]="false"
  [maxFileSizeMb]="10"
/>`,
  coreOutlined: `<brightrail-file-upload
  appearance="outlined"
  [showFileList]="false"
  [maxFileSizeMb]="10"
/>`,
  coreButton: `<brightrail-file-upload
  variant="button"
  buttonText="Upload"
  [showCloudIcon]="false"
  [showFileList]="false"
  [maxFileSizeMb]="10"
/>`,
  appearanceFilled: `<brightrail-file-upload appearance="filled" [showFileList]="false" [maxFileSizeMb]="10" />`,
  appearanceOutlined: `<brightrail-file-upload appearance="outlined" [showFileList]="false" [maxFileSizeMb]="10" />`,
  appearanceSoft: `<brightrail-file-upload appearance="soft" [showFileList]="false" [maxFileSizeMb]="10" />`,
  sizeSm: `<brightrail-file-upload size="sm" [showFileList]="false" [maxFileSizeMb]="10" />`,
  sizeMd: `<brightrail-file-upload size="md" [showFileList]="false" [maxFileSizeMb]="10" />`,
  sizeLg: `<brightrail-file-upload size="lg" [showFileList]="false" [maxFileSizeMb]="10" />`,
  sizeXl: `<brightrail-file-upload size="xl" [showFileList]="false" [maxFileSizeMb]="10" />`,
  stateDefault: `<brightrail-file-upload state="default" [showFileList]="false" [maxFileSizeMb]="10" />`,
  stateHover: `<brightrail-file-upload state="hover" [showFileList]="false" [maxFileSizeMb]="10" />`,
  stateFocused: `<brightrail-file-upload state="focused" [showFileList]="false" [maxFileSizeMb]="10" />`,
  stateDisabled: `<brightrail-file-upload state="disabled" [showFileList]="false" [maxFileSizeMb]="10" />`,
  singleFile: `<brightrail-file-upload
  label="Upload one file"
  [multiple]="false"
  [maxFiles]="1"
  [maxFileSizeMb]="5"
  helperText="Uploads a single file with progress and status."
  [fileItems]="singleFileItems"
/>`,
  multiFile: `<brightrail-file-upload
  label="Requirements"
  [multiple]="true"
  [maxFiles]="4"
  [maxFileSizeMb]="10"
  helperText="Upload multiple files with individual progress."
  [fileItems]="multiFileItems"
/>`,
  dragDrop: `<brightrail-file-upload
  label="Drag file here"
  placeholder="Drag file here or click to browse."
  buttonText="Browse Files"
  accept=".pdf,.docx,.png,.jpg,.zip"
  [maxFileSizeMb]="5"
  helperText="Supports: PDF, DOCX, PNG, JPG, ZIP"
/>`,
  imagePreview: `<div class="fu-image-preview">
  <div class="fu-image-preview__frame"></div>
  <div class="fu-image-preview__meta">
    <strong>Avatar upload</strong>
    <span>JPG, PNG up to 5MB</span>
  </div>
</div>
<brightrail-file-upload
  label="Avatar upload"
  variant="button"
  buttonText="Upload image"
  [showCloudIcon]="false"
  [showFileList]="false"
  accept=".jpg,.png"
  [maxFileSizeMb]="5"
/>`,
  enterpriseDocument: `<brightrail-file-upload
  surface="enterprise"
  enterprisePattern="document-submission"
  enterpriseSecondaryText="NDA_Agreement.pdf"
  helperText="Document submission"
  [showFileList]="false"
/>`,
  enterpriseTypeRestrictions: `<brightrail-file-upload
  surface="enterprise"
  enterprisePattern="type-restrictions"
  enterpriseSecondaryText="Max file size: 25MB"
  helperText="File type restrictions"
  accept=".pdf,.docx,.xlsx,.pptx"
  [showFileList]="false"
/>`,
  enterpriseWithDescription: `<brightrail-file-upload
  surface="enterprise"
  enterprisePattern="with-description"
  enterpriseSecondaryText="Add description (optional)..."
  helperText="Upload with description"
  [showFileList]="false"
  [fileItems]="descriptionFileItems"
/>`,
  enterpriseReplace: `<brightrail-file-upload
  surface="enterprise"
  enterprisePattern="replace-file"
  enterpriseSecondaryText="Current: old-report.pdf"
  helperText="Replace file"
  buttonText="Replace file"
  [showFileList]="false"
/>`,
  futuristicGlass: `<div class="fu-future fu-future--glass">
  <span>Choose file</span>
  <span>or drop here</span>
  <span>AI-powered upload · Secure · Fast</span>
</div>`,
} as const;

export const FILE_UPLOAD_DOC_SECTION_COUNT = 10;

export const FILE_UPLOAD_HTML_EXAMPLES = `<brightrail-file-upload
  appearance="outlined"
  status="default"
  size="md"
  [multiple]="true"
  accept=".pdf,.png,.jpg"
  [maxFileSizeMb]="10"
  [showFileList]="true"
  [fileItems]="fileItems"
  (fileItemsChange)="fileItems = $event"
/>`;
