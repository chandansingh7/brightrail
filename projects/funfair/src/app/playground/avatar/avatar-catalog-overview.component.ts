import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { AvatarVariationCatalogComponent } from './avatar-variation-catalog.component';
import { AVATAR_HTML_EXAMPLES } from './avatar-variation-snippets';

@Component({
  selector: 'app-avatar-catalog-overview',
  standalone: true,
  imports: [RouterLink, AvatarVariationCatalogComponent],
  templateUrl: './avatar-catalog-overview.component.html',
  styleUrl: './avatar-catalog-overview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarCatalogOverviewComponent {
  readonly htmlExamples = AVATAR_HTML_EXAMPLES;
}
