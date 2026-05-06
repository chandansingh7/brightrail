import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BrightrailChipComponent } from 'brightrail';

@Component({
  selector: 'app-chip-catalog-overview',
  standalone: true,
  imports: [RouterLink, BrightrailChipComponent],
  templateUrl: './chip-catalog-overview.component.html',
  styleUrl: './chip-catalog-overview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChipCatalogOverviewComponent {}
