import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  BrightrailAvatarComponent,
  BrightrailAvatarGroupComponent,
  BrightrailButtonComponent,
  BrightrailButtonGroupComponent,
  BrightrailCommandPaletteComponent,
  BrightrailFormFieldComponent,
  BrightrailIconButtonComponent,
  BrightrailMenuComponent,
  BrightrailMenuItemComponent,
  BrightrailMenuTriggerDirective,
  BrightrailPopoverComponent,
  BrightrailPopoverTriggerDirective,
  BrightrailSplitButtonComponent,
  BrightrailTableBulkActionsComponent,
  BrightrailTableComponent,
  BrightrailTableSingleActionsComponent,
  BrightrailTableToolbarActionsComponent,
  BrightrailTableToolbarComponent,
  BrightrailTextFieldComponent,
  BrightrailTooltipDirective,
} from 'brightrail';

import { SAAS_COMMANDS, SAAS_USER_COLUMNS, SAAS_USER_ROWS, tablePagination } from '../../shared/demo-data';
import { DemoShellComponent } from '../../shared/demo-shell.component';
import { DEMO_SITES } from '../../shared/demo-sites.registry';
import { demoBreadcrumb } from '../../shared/demo-site.util';
import { DemoThemeService } from '../../shared/demo-theme.service';
import { LibraryCoverageHostComponent } from '../../shared/library-coverage-host.component';

@Component({
  selector: 'app-saas-site',
  standalone: true,
  imports: [
    FormsModule,
    DemoShellComponent,
    BrightrailTableComponent,
    BrightrailTableToolbarComponent,
    BrightrailTableToolbarActionsComponent,
    BrightrailTableBulkActionsComponent,
    BrightrailTableSingleActionsComponent,
    BrightrailCommandPaletteComponent,
    BrightrailAvatarGroupComponent,
    BrightrailAvatarComponent,
    BrightrailButtonComponent,
    BrightrailSplitButtonComponent,
    BrightrailButtonGroupComponent,
    BrightrailIconButtonComponent,
    BrightrailTextFieldComponent,
    BrightrailFormFieldComponent,
    BrightrailMenuComponent,
    BrightrailMenuItemComponent,
    BrightrailMenuTriggerDirective,
    BrightrailPopoverComponent,
    BrightrailPopoverTriggerDirective,
    BrightrailTooltipDirective,
    LibraryCoverageHostComponent,
  ],
  templateUrl: './saas-site.component.html',
  styleUrl: './saas-site.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SaasSiteComponent implements OnInit {
  private readonly theme = inject(DemoThemeService);

  readonly site = DEMO_SITES.saas;
  readonly breadcrumbs = demoBreadcrumb(this.site, 'Team directory');
  readonly users = SAAS_USER_ROWS;
  readonly columns = SAAS_USER_COLUMNS;
  readonly pagination = tablePagination();
  readonly commands = SAAS_COMMANDS;
  readonly paletteOpen = signal(false);
  searchQuery = '';
  readonly viewMode = signal<'list' | 'grid'>('list');

  ngOnInit(): void {
    this.theme.applySite(this.site);
  }

  openPalette(): void {
    this.paletteOpen.set(true);
  }

  onCommand(item: { id: string }): void {
    this.paletteOpen.set(false);
    void item.id;
  }
}
