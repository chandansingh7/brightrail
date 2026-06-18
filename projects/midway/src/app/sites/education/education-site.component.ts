import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  BrightrailButtonComponent,
  BrightrailProgressComponent,
  BrightrailRichTextEditorComponent,
  BrightrailStepComponent,
  BrightrailStepperComponent,
  BrightrailTreeComponent,
  BrightrailTreeTableComponent,
} from 'brightrail';

import { EDUCATION_TREE_NODES, EDUCATION_TREE_TABLE_NODES } from '../../shared/demo-data';
import { DemoShellComponent } from '../../shared/demo-shell.component';
import { DEMO_SITES } from '../../shared/demo-sites.registry';
import { demoBreadcrumb } from '../../shared/demo-site.util';
import { DemoThemeService } from '../../shared/demo-theme.service';
import { LibraryCoverageHostComponent } from '../../shared/library-coverage-host.component';

@Component({
  selector: 'app-education-site',
  standalone: true,
  imports: [
    FormsModule,
    DemoShellComponent,
    BrightrailTreeComponent,
    BrightrailTreeTableComponent,
    BrightrailRichTextEditorComponent,
    BrightrailStepperComponent,
    BrightrailStepComponent,
    BrightrailProgressComponent,
    BrightrailButtonComponent,
    LibraryCoverageHostComponent,
  ],
  templateUrl: './education-site.component.html',
  styleUrl: './education-site.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EducationSiteComponent implements OnInit {
  private readonly theme = inject(DemoThemeService);

  readonly site = DEMO_SITES.education;
  readonly breadcrumbs = demoBreadcrumb(this.site, 'Course builder');
  readonly courseTree = EDUCATION_TREE_NODES;
  readonly orgTree = EDUCATION_TREE_TABLE_NODES;
  readonly selectedLesson = signal('l1');
  readonly assignmentStep = signal(1);
  lessonNotes = '<p>Introduce qualitative research methods.</p>';
  readonly math = Math;

  ngOnInit(): void {
    this.theme.applySite(this.site);
  }
}
