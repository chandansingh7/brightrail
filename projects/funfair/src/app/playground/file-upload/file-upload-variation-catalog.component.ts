import { ChangeDetectionStrategy, Component } from '@angular/core';

import { BrightrailFileUploadComponent, BrightrailFileUploadItem } from 'brightrail';

import { CatalogVariationTileComponent } from '../shared/catalog-variation-tile.component';
import { FILE_UPLOAD_VARIATION_SNIPPETS } from './file-upload-variation-snippets';

@Component({
  selector: 'app-file-upload-variation-catalog',
  standalone: true,
  imports: [BrightrailFileUploadComponent, CatalogVariationTileComponent],
  templateUrl: './file-upload-variation-catalog.component.html',
  styleUrl: './file-upload-variation-catalog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FileUploadVariationCatalogComponent {
  readonly s = FILE_UPLOAD_VARIATION_SNIPPETS;

  readonly singleFileItems: BrightrailFileUploadItem[] = [
    { id: 'p', name: 'Project-brief.pdf', sizeLabel: '2.4 MB', progress: 100, status: 'success' },
    { id: 's', name: 'Screenshot.png', sizeLabel: '1.2 MB', progress: 100, status: 'error', actionLabel: 'Retry' },
  ];

  readonly multiFileItems: BrightrailFileUploadItem[] = [
    { id: 'r', name: 'requirements.docx', sizeLabel: '1.1 MB', progress: 100, status: 'success' },
    { id: 'd', name: 'design-system.sketch', sizeLabel: '4.3 MB', progress: 42, status: 'uploading' },
    { id: 'e', name: 'archive.zip', sizeLabel: '10.4 MB', progress: 100, status: 'error', actionLabel: 'Retry' },
  ];

  readonly descriptionFileItems: BrightrailFileUploadItem[] = [
    { id: 'spec', name: 'Technical specification.pdf', sizeLabel: '3.7 MB', progress: 100, status: 'success' },
  ];
}
