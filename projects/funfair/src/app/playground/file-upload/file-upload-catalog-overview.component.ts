import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { BrightrailFileUploadComponent } from 'brightrail';

@Component({
  selector: 'app-file-upload-catalog-overview',
  standalone: true,
  imports: [RouterLink, FormsModule, BrightrailFileUploadComponent],
  templateUrl: './file-upload-catalog-overview.component.html',
  styleUrl: './file-upload-catalog-overview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FileUploadCatalogOverviewComponent {}
