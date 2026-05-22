import { Type } from '@angular/core';

/** Lazy loaders for playground components used on the isolated a11y preview route. */
export const PLAYGROUND_A11Y_PREVIEW_LOADERS: Record<string, () => Promise<Type<unknown>>> = {
  accordion: () => import('../accordion/accordion-playground.component').then((m) => m.AccordionPlaygroundComponent),
  alerts: () => import('../alerts/alert-playground.component').then((m) => m.AlertPlaygroundComponent),
  'app-shell': () => import('../app-shell/app-shell-playground.component').then((m) => m.AppShellPlaygroundComponent),
  avatar: () => import('../avatar/avatar-playground.component').then((m) => m.AvatarPlaygroundComponent),
  badge: () => import('../badge/badge-playground.component').then((m) => m.BadgePlaygroundComponent),
  breadcrumb: () => import('../breadcrumb/breadcrumb-playground.component').then((m) => m.BreadcrumbPlaygroundComponent),
  button: () => import('../button/button-playground.component').then((m) => m.ButtonPlaygroundComponent),
  card: () => import('../card/card-playground.component').then((m) => m.CardPlaygroundComponent),
  checkbox: () => import('../checkbox/checkbox-playground.component').then((m) => m.CheckboxPlaygroundComponent),
  chip: () => import('../chip/chip-playground.component').then((m) => m.ChipPlaygroundComponent),
  combobox: () => import('../combobox/combobox-playground.component').then((m) => m.ComboboxPlaygroundComponent),
  'command-palette': () =>
    import('../command-palette/command-palette-playground.component').then((m) => m.CommandPalettePlaygroundComponent),
  'date-picker': () => import('../date-picker/date-picker-playground.component').then((m) => m.DatePickerPlaygroundComponent),
  drawer: () => import('../drawer/drawer-playground.component').then((m) => m.DrawerPlaygroundComponent),
  'empty-state': () => import('../empty-state/empty-state-playground.component').then((m) => m.EmptyStatePlaygroundComponent),
  'file-upload': () => import('../file-upload/file-upload-playground.component').then((m) => m.FileUploadPlaygroundComponent),
  'form-field': () => import('../form-field/form-field-playground.component').then((m) => m.FormFieldPlaygroundComponent),
  graph: () => import('../graph/graph-playground.component').then((m) => m.GraphPlaygroundComponent),
  'holographic-panel': () =>
    import('../holographic-panel/holographic-panel-playground.component').then(
      (m) => m.HolographicPanelPlaygroundComponent,
    ),
  'neural-graph': () =>
    import('../neural-graph/neural-graph-playground.component').then((m) => m.NeuralGraphPlaygroundComponent),
  'cyber-badge': () =>
    import('../cyber-badge/cyber-badge-playground.component').then((m) => m.CyberBadgePlaygroundComponent),
  'quantum-stepper': () =>
    import('../quantum-stepper/quantum-stepper-playground.component').then((m) => m.QuantumStepperPlaygroundComponent),
  menu: () => import('../menu/menu-playground.component').then((m) => m.MenuPlaygroundComponent),
  modal: () => import('../modal/modal-playground.component').then((m) => m.ModalPlaygroundComponent),
  pagination: () => import('../pagination/pagination-playground.component').then((m) => m.PaginationPlaygroundComponent),
  progress: () => import('../progress/progress-playground.component').then((m) => m.ProgressPlaygroundComponent),
  popover: () => import('../popover/popover-playground.component').then((m) => m.PopoverPlaygroundComponent),
  rating: () => import('../rating/rating-playground.component').then((m) => m.RatingPlaygroundComponent),
  'rich-text-editor': () =>
    import('../rich-text-editor/rich-text-editor-playground.component').then(
      (m) => m.RichTextEditorPlaygroundComponent,
    ),
  radio: () => import('../radio/radio-playground.component').then((m) => m.RadioPlaygroundComponent),
  select: () => import('../select/select-playground.component').then((m) => m.SelectPlaygroundComponent),
  skeleton: () => import('../skeleton/skeleton-playground.component').then((m) => m.SkeletonPlaygroundComponent),
  slider: () => import('../slider/slider-playground.component').then((m) => m.SliderPlaygroundComponent),
  stepper: () => import('../stepper/stepper-playground.component').then((m) => m.StepperPlaygroundComponent),
  switch: () => import('../switch/switch-playground.component').then((m) => m.SwitchPlaygroundComponent),
  table: () => import('../table/table-playground.component').then((m) => m.TablePlaygroundComponent),
  tabs: () => import('../tabs/tabs-playground.component').then((m) => m.TabsPlaygroundComponent),
  'text-field': () => import('../text-field/text-field-playground.component').then((m) => m.TextFieldPlaygroundComponent),
  textarea: () => import('../textarea/textarea-playground.component').then((m) => m.TextareaPlaygroundComponent),
  timeline: () => import('../timeline/timeline-playground.component').then((m) => m.TimelinePlaygroundComponent),
  toast: () => import('../toast/toast-playground.component').then((m) => m.ToastPlaygroundComponent),
  tooltip: () => import('../tooltip/tooltip-playground.component').then((m) => m.TooltipPlaygroundComponent),
  tree: () => import('../tree/tree-playground.component').then((m) => m.TreePlaygroundComponent),
  'tree-table': () =>
    import('../tree-table/tree-table-playground.component').then((m) => m.TreeTablePlaygroundComponent),
  'validation-summary': () =>
    import('../validation-summary/validation-summary-playground.component').then(
      (m) => m.ValidationSummaryPlaygroundComponent,
    ),
};
