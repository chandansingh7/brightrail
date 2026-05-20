import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import {
  LIBRARY_ASSESSMENT_VERSION,
  LIBRARY_CON,
  LIBRARY_ENTERPRISE_GAPS,
  LIBRARY_MISSING,
  LIBRARY_PRO,
  LIBRARY_RATINGS,
  LIBRARY_ROADMAP,
  LIBRARY_SHIPPED_AREAS,
} from './library-assessment.content';

@Component({
  selector: 'app-library-assessment',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './library-assessment.component.html',
  styleUrl: './library-assessment.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LibraryAssessmentComponent {
  readonly version = LIBRARY_ASSESSMENT_VERSION;
  readonly ratings = LIBRARY_RATINGS;
  readonly pro = LIBRARY_PRO;
  readonly con = LIBRARY_CON;
  readonly shippedAreas = LIBRARY_SHIPPED_AREAS;
  readonly missing = LIBRARY_MISSING;
  readonly enterpriseGaps = LIBRARY_ENTERPRISE_GAPS;
  readonly roadmap = LIBRARY_ROADMAP;
}
