import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'a11y-preview/:componentId',
    loadComponent: () =>
      import('./playground/shared/playground-a11y-preview-shell.component').then(
        (m) => m.PlaygroundA11yPreviewShellComponent,
      ),
  },
  {
    path: '',
    loadComponent: () =>
      import('./playground/playground-shell.component').then((m) => m.PlaygroundShellComponent),
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'button' },
      {
        path: 'variations',
        loadComponent: () =>
          import('./playground/variations/variations-hub.component').then((m) => m.VariationsHubComponent),
      },
      {
        path: 'resources/library-assessment',
        loadComponent: () =>
          import('./playground/resources/library-assessment.component').then((m) => m.LibraryAssessmentComponent),
      },
      {
        path: 'button',
        loadComponent: () =>
          import('./playground/button/button-section.component').then((m) => m.ButtonSectionComponent),
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./playground/button/button-playground.component').then((m) => m.ButtonPlaygroundComponent),
          },
          {
            path: 'catalog',
            loadComponent: () =>
              import('./playground/button/button-catalog-overview.component').then(
                (m) => m.ButtonCatalogOverviewComponent,
              ),
          },
        ],
      },
      {
        path: 'text-field',
        loadComponent: () =>
          import('./playground/text-field/text-field-section.component').then((m) => m.TextFieldSectionComponent),
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./playground/text-field/text-field-playground.component').then(
                (m) => m.TextFieldPlaygroundComponent,
              ),
          },
          {
            path: 'inset-label',
            loadComponent: () =>
              import('./playground/text-field/text-field-inset-label-guide.component').then(
                (m) => m.TextFieldInsetLabelGuideComponent,
              ),
          },
          {
            path: 'catalog',
            loadComponent: () =>
              import('./playground/text-field/text-field-catalog-overview.component').then(
                (m) => m.TextFieldCatalogOverviewComponent,
              ),
          },
        ],
      },
      {
        path: 'tabs',
        loadComponent: () =>
          import('./playground/tabs/tabs-section.component').then((m) => m.TabsSectionComponent),
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./playground/tabs/tabs-playground.component').then((m) => m.TabsPlaygroundComponent),
          },
          {
            path: 'catalog',
            loadComponent: () =>
              import('./playground/tabs/tabs-catalog-overview.component').then(
                (m) => m.TabsCatalogOverviewComponent,
              ),
          },
        ],
      },
      {
        path: 'alerts',
        loadComponent: () =>
          import('./playground/alerts/alert-section.component').then((m) => m.AlertSectionComponent),
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./playground/alerts/alert-playground.component').then((m) => m.AlertPlaygroundComponent),
          },
          {
            path: 'catalog',
            loadComponent: () =>
              import('./playground/alerts/alert-catalog-overview.component').then(
                (m) => m.AlertCatalogOverviewComponent,
              ),
          },
        ],
      },
      {
        path: 'modal',
        loadComponent: () =>
          import('./playground/modal/modal-section.component').then((m) => m.ModalSectionComponent),
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./playground/modal/modal-playground.component').then((m) => m.ModalPlaygroundComponent),
          },
          {
            path: 'catalog',
            loadComponent: () =>
              import('./playground/modal/modal-catalog-overview.component').then(
                (m) => m.ModalCatalogOverviewComponent,
              ),
          },
        ],
      },
      {
        path: 'drawer',
        loadComponent: () =>
          import('./playground/drawer/drawer-section.component').then((m) => m.DrawerSectionComponent),
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./playground/drawer/drawer-playground.component').then((m) => m.DrawerPlaygroundComponent),
          },
          {
            path: 'catalog',
            loadComponent: () =>
              import('./playground/drawer/drawer-catalog-overview.component').then(
                (m) => m.DrawerCatalogOverviewComponent,
              ),
          },
        ],
      },
      {
        path: 'breadcrumb',
        loadComponent: () =>
          import('./playground/breadcrumb/breadcrumb-section.component').then((m) => m.BreadcrumbSectionComponent),
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./playground/breadcrumb/breadcrumb-playground.component').then(
                (m) => m.BreadcrumbPlaygroundComponent,
              ),
          },
          {
            path: 'catalog',
            loadComponent: () =>
              import('./playground/breadcrumb/breadcrumb-catalog-overview.component').then(
                (m) => m.BreadcrumbCatalogOverviewComponent,
              ),
          },
        ],
      },
      {
        path: 'stepper',
        loadComponent: () =>
          import('./playground/stepper/stepper-section.component').then((m) => m.StepperSectionComponent),
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./playground/stepper/stepper-playground.component').then(
                (m) => m.StepperPlaygroundComponent,
              ),
          },
          {
            path: 'catalog',
            loadComponent: () =>
              import('./playground/stepper/stepper-catalog-overview.component').then(
                (m) => m.StepperCatalogOverviewComponent,
              ),
          },
        ],
      },
      {
        path: 'card',
        loadComponent: () =>
          import('./playground/card/card-section.component').then((m) => m.CardSectionComponent),
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./playground/card/card-playground.component').then((m) => m.CardPlaygroundComponent),
          },
          {
            path: 'catalog',
            loadComponent: () =>
              import('./playground/card/card-catalog-overview.component').then(
                (m) => m.CardCatalogOverviewComponent,
              ),
          },
        ],
      },
      {
        path: 'table',
        loadComponent: () =>
          import('./playground/table/table-section.component').then((m) => m.TableSectionComponent),
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./playground/table/table-playground.component').then((m) => m.TablePlaygroundComponent),
          },
          {
            path: 'catalog',
            loadComponent: () =>
              import('./playground/table/table-catalog-overview.component').then(
                (m) => m.TableCatalogOverviewComponent,
              ),
          },
          {
            path: 'inline-edit',
            loadComponent: () =>
              import('./playground/table/table-inline-edit-catalog.component').then(
                (m) => m.TableInlineEditCatalogComponent,
              ),
          },
        ],
      },
      {
        path: 'badge',
        loadComponent: () =>
          import('./playground/badge/badge-section.component').then((m) => m.BadgeSectionComponent),
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./playground/badge/badge-playground.component').then((m) => m.BadgePlaygroundComponent),
          },
          {
            path: 'catalog',
            loadComponent: () =>
              import('./playground/badge/badge-catalog-overview.component').then(
                (m) => m.BadgeCatalogOverviewComponent,
              ),
          },
        ],
      },
      {
        path: 'chip',
        loadComponent: () =>
          import('./playground/chip/chip-section.component').then((m) => m.ChipSectionComponent),
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./playground/chip/chip-playground.component').then((m) => m.ChipPlaygroundComponent),
          },
          {
            path: 'catalog',
            loadComponent: () =>
              import('./playground/chip/chip-catalog-overview.component').then(
                (m) => m.ChipCatalogOverviewComponent,
              ),
          },
        ],
      },
      {
        path: 'avatar',
        loadComponent: () =>
          import('./playground/avatar/avatar-section.component').then((m) => m.AvatarSectionComponent),
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./playground/avatar/avatar-playground.component').then((m) => m.AvatarPlaygroundComponent),
          },
          {
            path: 'catalog',
            loadComponent: () =>
              import('./playground/avatar/avatar-catalog-overview.component').then(
                (m) => m.AvatarCatalogOverviewComponent,
              ),
          },
        ],
      },
      {
        path: 'tooltip',
        loadComponent: () =>
          import('./playground/tooltip/tooltip-section.component').then((m) => m.TooltipSectionComponent),
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./playground/tooltip/tooltip-playground.component').then((m) => m.TooltipPlaygroundComponent),
          },
          {
            path: 'catalog',
            loadComponent: () =>
              import('./playground/tooltip/tooltip-catalog-overview.component').then(
                (m) => m.TooltipCatalogOverviewComponent,
              ),
          },
        ],
      },
      {
        path: 'select',
        loadComponent: () =>
          import('./playground/select/select-section.component').then((m) => m.SelectSectionComponent),
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./playground/select/select-playground.component').then((m) => m.SelectPlaygroundComponent),
          },
          {
            path: 'resources',
            loadComponent: () =>
              import('./playground/select/select-resources-guide.component').then(
                (m) => m.SelectResourcesGuideComponent,
              ),
          },
          {
            path: 'catalog',
            loadComponent: () =>
              import('./playground/select/select-catalog-overview.component').then(
                (m) => m.SelectCatalogOverviewComponent,
              ),
          },
        ],
      },
      {
        path: 'date-picker',
        loadComponent: () =>
          import('./playground/date-picker/date-picker-section.component').then(
            (m) => m.DatePickerSectionComponent,
          ),
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./playground/date-picker/date-picker-playground.component').then(
                (m) => m.DatePickerPlaygroundComponent,
              ),
          },
          {
            path: 'catalog',
            loadComponent: () =>
              import('./playground/date-picker/date-picker-catalog-overview.component').then(
                (m) => m.DatePickerCatalogOverviewComponent,
              ),
          },
        ],
      },
      {
        path: 'file-upload',
        loadComponent: () =>
          import('./playground/file-upload/file-upload-section.component').then(
            (m) => m.FileUploadSectionComponent,
          ),
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./playground/file-upload/file-upload-playground.component').then(
                (m) => m.FileUploadPlaygroundComponent,
              ),
          },
          {
            path: 'catalog',
            loadComponent: () =>
              import('./playground/file-upload/file-upload-catalog-overview.component').then(
                (m) => m.FileUploadCatalogOverviewComponent,
              ),
          },
        ],
      },
      {
        path: 'checkbox',
        loadComponent: () =>
          import('./playground/checkbox/checkbox-section.component').then((m) => m.CheckboxSectionComponent),
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./playground/checkbox/checkbox-playground.component').then(
                (m) => m.CheckboxPlaygroundComponent,
              ),
          },
          {
            path: 'catalog',
            loadComponent: () =>
              import('./playground/checkbox/checkbox-catalog-overview.component').then(
                (m) => m.CheckboxCatalogOverviewComponent,
              ),
          },
        ],
      },
      {
        path: 'radio',
        loadComponent: () =>
          import('./playground/radio/radio-section.component').then((m) => m.RadioSectionComponent),
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./playground/radio/radio-playground.component').then((m) => m.RadioPlaygroundComponent),
          },
          {
            path: 'catalog',
            loadComponent: () =>
              import('./playground/radio/radio-catalog-overview.component').then(
                (m) => m.RadioCatalogOverviewComponent,
              ),
          },
        ],
      },
      {
        path: 'accordion',
        loadComponent: () =>
          import('./playground/accordion/accordion-section.component').then((m) => m.AccordionSectionComponent),
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./playground/accordion/accordion-playground.component').then(
                (m) => m.AccordionPlaygroundComponent,
              ),
          },
          {
            path: 'catalog',
            loadComponent: () =>
              import('./playground/accordion/accordion-catalog-overview.component').then(
                (m) => m.AccordionCatalogOverviewComponent,
              ),
          },
        ],
      },
      {
        path: 'pagination',
        loadComponent: () =>
          import('./playground/pagination/pagination-section.component').then((m) => m.PaginationSectionComponent),
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./playground/pagination/pagination-playground.component').then(
                (m) => m.PaginationPlaygroundComponent,
              ),
          },
          {
            path: 'catalog',
            loadComponent: () =>
              import('./playground/pagination/pagination-catalog-overview.component').then(
                (m) => m.PaginationCatalogOverviewComponent,
              ),
          },
        ],
      },
      {
        path: 'progress',
        loadComponent: () =>
          import('./playground/progress/progress-section.component').then((m) => m.ProgressSectionComponent),
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./playground/progress/progress-playground.component').then((m) => m.ProgressPlaygroundComponent),
          },
          {
            path: 'catalog',
            loadComponent: () =>
              import('./playground/progress/progress-catalog-overview.component').then(
                (m) => m.ProgressCatalogOverviewComponent,
              ),
          },
        ],
      },
      {
        path: 'graph',
        loadComponent: () =>
          import('./playground/graph/graph-section.component').then((m) => m.GraphSectionComponent),
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./playground/graph/graph-playground.component').then((m) => m.GraphPlaygroundComponent),
          },
          {
            path: 'catalog',
            loadComponent: () =>
              import('./playground/graph/graph-catalog-overview.component').then(
                (m) => m.GraphCatalogOverviewComponent,
              ),
          },
        ],
      },
      {
        path: 'app-shell',
        loadComponent: () =>
          import('./playground/app-shell/app-shell-section.component').then((m) => m.AppShellSectionComponent),
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./playground/app-shell/app-shell-playground.component').then(
                (m) => m.AppShellPlaygroundComponent,
              ),
          },
          {
            path: 'catalog',
            loadComponent: () =>
              import('./playground/app-shell/app-shell-catalog-overview.component').then(
                (m) => m.AppShellCatalogOverviewComponent,
              ),
          },
        ],
      },
      {
        path: 'combobox',
        loadComponent: () =>
          import('./playground/combobox/combobox-section.component').then((m) => m.ComboboxSectionComponent),
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./playground/combobox/combobox-playground.component').then(
                (m) => m.ComboboxPlaygroundComponent,
              ),
          },
          {
            path: 'catalog',
            loadComponent: () =>
              import('./playground/combobox/combobox-catalog-overview.component').then(
                (m) => m.ComboboxCatalogOverviewComponent,
              ),
          },
        ],
      },
      {
        path: 'command-palette',
        loadComponent: () =>
          import('./playground/command-palette/command-palette-section.component').then(
            (m) => m.CommandPaletteSectionComponent,
          ),
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./playground/command-palette/command-palette-playground.component').then(
                (m) => m.CommandPalettePlaygroundComponent,
              ),
          },
          {
            path: 'catalog',
            loadComponent: () =>
              import('./playground/command-palette/command-palette-catalog-overview.component').then(
                (m) => m.CommandPaletteCatalogOverviewComponent,
              ),
          },
        ],
      },
      {
        path: 'empty-state',
        loadComponent: () =>
          import('./playground/empty-state/empty-state-section.component').then(
            (m) => m.EmptyStateSectionComponent,
          ),
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./playground/empty-state/empty-state-playground.component').then(
                (m) => m.EmptyStatePlaygroundComponent,
              ),
          },
          {
            path: 'catalog',
            loadComponent: () =>
              import('./playground/empty-state/empty-state-catalog-overview.component').then(
                (m) => m.EmptyStateCatalogOverviewComponent,
              ),
          },
        ],
      },
      {
        path: 'form-field',
        loadComponent: () =>
          import('./playground/form-field/form-field-section.component').then((m) => m.FormFieldSectionComponent),
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./playground/form-field/form-field-playground.component').then(
                (m) => m.FormFieldPlaygroundComponent,
              ),
          },
          {
            path: 'catalog',
            loadComponent: () =>
              import('./playground/form-field/form-field-catalog-overview.component').then(
                (m) => m.FormFieldCatalogOverviewComponent,
              ),
          },
        ],
      },
      {
        path: 'menu',
        loadComponent: () =>
          import('./playground/menu/menu-section.component').then((m) => m.MenuSectionComponent),
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./playground/menu/menu-playground.component').then((m) => m.MenuPlaygroundComponent),
          },
          {
            path: 'catalog',
            loadComponent: () =>
              import('./playground/menu/menu-catalog-overview.component').then(
                (m) => m.MenuCatalogOverviewComponent,
              ),
          },
        ],
      },
      {
        path: 'skeleton',
        loadComponent: () =>
          import('./playground/skeleton/skeleton-section.component').then((m) => m.SkeletonSectionComponent),
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./playground/skeleton/skeleton-playground.component').then(
                (m) => m.SkeletonPlaygroundComponent,
              ),
          },
          {
            path: 'catalog',
            loadComponent: () =>
              import('./playground/skeleton/skeleton-catalog-overview.component').then(
                (m) => m.SkeletonCatalogOverviewComponent,
              ),
          },
        ],
      },
      {
        path: 'slider',
        loadComponent: () =>
          import('./playground/slider/slider-section.component').then((m) => m.SliderSectionComponent),
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./playground/slider/slider-playground.component').then((m) => m.SliderPlaygroundComponent),
          },
          {
            path: 'catalog',
            loadComponent: () =>
              import('./playground/slider/slider-catalog-overview.component').then(
                (m) => m.SliderCatalogOverviewComponent,
              ),
          },
        ],
      },
      {
        path: 'switch',
        loadComponent: () =>
          import('./playground/switch/switch-section.component').then((m) => m.SwitchSectionComponent),
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./playground/switch/switch-playground.component').then((m) => m.SwitchPlaygroundComponent),
          },
          {
            path: 'catalog',
            loadComponent: () =>
              import('./playground/switch/switch-catalog-overview.component').then(
                (m) => m.SwitchCatalogOverviewComponent,
              ),
          },
        ],
      },
      {
        path: 'textarea',
        loadComponent: () =>
          import('./playground/textarea/textarea-section.component').then((m) => m.TextareaSectionComponent),
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./playground/textarea/textarea-playground.component').then(
                (m) => m.TextareaPlaygroundComponent,
              ),
          },
          {
            path: 'catalog',
            loadComponent: () =>
              import('./playground/textarea/textarea-catalog-overview.component').then(
                (m) => m.TextareaCatalogOverviewComponent,
              ),
          },
        ],
      },
      {
        path: 'timeline',
        loadComponent: () =>
          import('./playground/timeline/timeline-section.component').then((m) => m.TimelineSectionComponent),
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./playground/timeline/timeline-playground.component').then(
                (m) => m.TimelinePlaygroundComponent,
              ),
          },
          {
            path: 'catalog',
            loadComponent: () =>
              import('./playground/timeline/timeline-catalog-overview.component').then(
                (m) => m.TimelineCatalogOverviewComponent,
              ),
          },
        ],
      },
      {
        path: 'toast',
        loadComponent: () =>
          import('./playground/toast/toast-section.component').then((m) => m.ToastSectionComponent),
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./playground/toast/toast-playground.component').then((m) => m.ToastPlaygroundComponent),
          },
          {
            path: 'catalog',
            loadComponent: () =>
              import('./playground/toast/toast-catalog-overview.component').then(
                (m) => m.ToastCatalogOverviewComponent,
              ),
          },
        ],
      },
      {
        path: 'tree',
        loadComponent: () =>
          import('./playground/tree/tree-section.component').then((m) => m.TreeSectionComponent),
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./playground/tree/tree-playground.component').then((m) => m.TreePlaygroundComponent),
          },
          {
            path: 'catalog',
            loadComponent: () =>
              import('./playground/tree/tree-catalog-overview.component').then(
                (m) => m.TreeCatalogOverviewComponent,
              ),
          },
        ],
      },
      {
        path: 'validation-summary',
        loadComponent: () =>
          import('./playground/validation-summary/validation-summary-section.component').then(
            (m) => m.ValidationSummarySectionComponent,
          ),
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./playground/validation-summary/validation-summary-playground.component').then(
                (m) => m.ValidationSummaryPlaygroundComponent,
              ),
          },
          {
            path: 'catalog',
            loadComponent: () =>
              import('./playground/validation-summary/validation-summary-catalog-overview.component').then(
                (m) => m.ValidationSummaryCatalogOverviewComponent,
              ),
          },
        ],
      },
    ],
  },
];
