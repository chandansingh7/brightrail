import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BrightrailBadgeComponent } from 'brightrail';

@Component({
  selector: 'app-badge-catalog-overview',
  standalone: true,
  imports: [RouterLink, BrightrailBadgeComponent],
  templateUrl: './badge-catalog-overview.component.html',
  styleUrl: './badge-catalog-overview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BadgeCatalogOverviewComponent {}
