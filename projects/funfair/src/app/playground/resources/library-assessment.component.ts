import {
  ChangeDetectionStrategy,
  Component,
  TemplateRef,
  computed,
  inject,
  viewChild,
} from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import {
  BrightrailBadgeComponent,
  BrightrailBreadcrumbComponent,
  BrightrailBreadcrumbItem,
  BrightrailButtonComponent,
  BrightrailCardComponent,
  BrightrailCardContentComponent,
  BrightrailCardHeaderComponent,
  BrightrailCardHeaderTitleDirective,
  BrightrailChipComponent,
  BrightrailPageHeaderComponent,
  BrightrailPageSubtitleDirective,
  BrightrailPageTitleDirective,
  BrightrailTableColumn,
  BrightrailTableComponent,
  BrightrailTableRow,
  BrightrailTimelineComponent,
  BrightrailTimelineItemComponent,
} from 'brightrail';

import {
  LIBRARY_ASSESSMENT_LAST_REVIEWED,
  LIBRARY_ASSESSMENT_STATS,
  LIBRARY_ASSESSMENT_VERSION,
  LIBRARY_CON,
  LIBRARY_ENTERPRISE_GAPS,
  LIBRARY_MISSING_CONCEPT,
  LIBRARY_MISSING_PRODUCTION,
  LIBRARY_PRO,
  LIBRARY_RATINGS,
  LIBRARY_ROADMAP,
  LIBRARY_SHIPPED_AREAS,
} from './library-assessment.content';
import { missingItemsToTableRows, priorityBadgeColor } from './library-assessment.utils';

@Component({
  selector: 'app-library-assessment',
  standalone: true,
  imports: [
    RouterLink,
    BrightrailBadgeComponent,
    BrightrailBreadcrumbComponent,
    BrightrailButtonComponent,
    BrightrailCardComponent,
    BrightrailCardContentComponent,
    BrightrailCardHeaderComponent,
    BrightrailCardHeaderTitleDirective,
    BrightrailChipComponent,
    BrightrailPageHeaderComponent,
    BrightrailPageSubtitleDirective,
    BrightrailPageTitleDirective,
    BrightrailTableComponent,
    BrightrailTimelineComponent,
    BrightrailTimelineItemComponent,
  ],
  templateUrl: './library-assessment.component.html',
  styleUrl: './library-assessment.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LibraryAssessmentComponent {
  private readonly router = inject(Router);

  readonly version = LIBRARY_ASSESSMENT_VERSION;
  readonly lastReviewed = LIBRARY_ASSESSMENT_LAST_REVIEWED;
  readonly stats = LIBRARY_ASSESSMENT_STATS;
  readonly ratings = LIBRARY_RATINGS;
  readonly pro = LIBRARY_PRO;
  readonly con = LIBRARY_CON;
  readonly shippedAreas = LIBRARY_SHIPPED_AREAS;
  readonly missingProduction = LIBRARY_MISSING_PRODUCTION;
  readonly missingConcept = LIBRARY_MISSING_CONCEPT;
  readonly enterpriseGaps = LIBRARY_ENTERPRISE_GAPS;
  readonly roadmap = LIBRARY_ROADMAP;

  readonly breadcrumbItems: BrightrailBreadcrumbItem[] = [
    { label: 'Playground', href: '#/' },
    { label: 'Library assessment', current: true },
  ];

  readonly productionColumns: BrightrailTableColumn[] = [
    { id: 'priority', header: 'Priority', field: 'priority', cellTemplateKey: 'priority', width: '6.5rem' },
    { id: 'name', header: 'Component', field: 'name', width: '11rem' },
    { id: 'why', header: 'Why it matters', field: 'why' },
  ];

  readonly conceptColumns: BrightrailTableColumn[] = [
    { id: 'priority', header: 'Priority', field: 'priority', cellTemplateKey: 'priority', width: '6.5rem' },
    { id: 'name', header: 'Concept', field: 'name', width: '11rem' },
    { id: 'why', header: 'Why it matters', field: 'why', cellTemplateKey: 'whyWithNote' },
    { id: 'preview', header: 'Preview', field: 'showcaseRoute', cellTemplateKey: 'preview', width: '7rem' },
  ];

  readonly productionRows = computed(() => missingItemsToTableRows(this.missingProduction));
  readonly conceptRows = computed(() => missingItemsToTableRows(this.missingConcept));

  readonly priorityCell = viewChild.required<TemplateRef<{ $implicit: BrightrailTableRow; column: BrightrailTableColumn }>>('priorityCell');
  readonly whyWithNoteCell = viewChild.required<TemplateRef<{ $implicit: BrightrailTableRow; column: BrightrailTableColumn }>>('whyWithNoteCell');
  readonly previewCell = viewChild.required<TemplateRef<{ $implicit: BrightrailTableRow; column: BrightrailTableColumn }>>('previewCell');

  readonly tableCellTemplates = computed(() => ({
    priority: this.priorityCell(),
    whyWithNote: this.whyWithNoteCell(),
    preview: this.previewCell(),
  }));

  readonly priorityBadgeColor = priorityBadgeColor;

  navigate(route: string): void {
    void this.router.navigateByUrl(route.startsWith('/') ? route : `/${route}`);
  }
}
