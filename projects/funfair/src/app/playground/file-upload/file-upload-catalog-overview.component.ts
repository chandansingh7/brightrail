import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { FileUploadVariationCatalogComponent } from './file-upload-variation-catalog.component';
import { FILE_UPLOAD_HTML_EXAMPLES } from './file-upload-variation-snippets';

@Component({
  selector: 'app-file-upload-catalog-overview',
  standalone: true,
  imports: [RouterLink, FileUploadVariationCatalogComponent],
  templateUrl: './file-upload-catalog-overview.component.html',
  styleUrl: './file-upload-catalog-overview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FileUploadCatalogOverviewComponent {
  readonly htmlExamples = FILE_UPLOAD_HTML_EXAMPLES;
}
