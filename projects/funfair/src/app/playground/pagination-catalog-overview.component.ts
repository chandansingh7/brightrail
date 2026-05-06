import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BrightrailPaginationComponent } from 'brightrail';

@Component({
  selector: 'app-pagination-catalog-overview',
  standalone: true,
  imports: [RouterLink, BrightrailPaginationComponent],
  templateUrl: './pagination-catalog-overview.component.html',
  styleUrl: './pagination-catalog-overview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationCatalogOverviewComponent {}
