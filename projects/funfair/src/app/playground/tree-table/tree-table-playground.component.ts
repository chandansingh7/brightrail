import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrightrailTreeTableComponent, type BrightrailTreeTableNode } from 'brightrail';

import { PlaygroundThemeId, PlaygroundThemeService } from '../playground-theme.service';
import { PlaygroundPreviewHeaderComponent } from '../shared/playground-preview-header.component';
import { PlaygroundSnippetDockComponent } from '../shared/playground-snippet-dock.component';
import { injectPlaygroundA11yPreviewMode } from '../shared/playground-a11y-preview.utils';

@Component({
  selector: 'app-tree-table-playground',
  standalone: true,
  imports: [
    FormsModule,
    PlaygroundPreviewHeaderComponent,
    PlaygroundSnippetDockComponent,
    BrightrailTreeTableComponent,
  ],
  templateUrl: './tree-table-playground.component.html',
  styleUrl: './tree-table-playground.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TreeTablePlaygroundComponent {
  readonly previewOnly = injectPlaygroundA11yPreviewMode();
  readonly themeService = inject(PlaygroundThemeService);
  readonly ngModelStandalone = { standalone: true };

  readonly themeRowOptions: { id: PlaygroundThemeId; label: string }[] = [
    { id: 'light', label: 'Material light' },
    { id: 'dark', label: 'Material dark' },
  ];

  readonly selectedId = signal('eng');

  readonly nodes: readonly BrightrailTreeTableNode[] = [
    {
      id: 'org',
      label: 'Acme Corp',
      meta: 'Organization',
      children: [
        {
          id: 'eng',
          label: 'Engineering',
          meta: '42 members',
          children: [
            { id: 'fe', label: 'Frontend', meta: '12 members' },
            { id: 'be', label: 'Backend', meta: '18 members' },
          ],
        },
        { id: 'sales', label: 'Sales', meta: '8 members' },
      ],
    },
  ];

  readonly htmlSnippet = computed(
    () => `<brightrail-tree-table
  ariaLabel="Organization permissions"
  [nodes]="nodes"
  [selectedId]="'${this.selectedId()}'"
  (selectedIdChange)="onSelect($event)"
/>`,
  );

  readonly tsSnippet = `import { Component, signal } from '@angular/core';
import { BrightrailTreeTableComponent, BrightrailTreeTableNode } from 'brightrail';

@Component({
  standalone: true,
  imports: [BrightrailTreeTableComponent],
  templateUrl: './permissions-tree.component.html',
})
export class PermissionsTreeComponent {
  readonly selectedId = signal('eng');
  readonly nodes: BrightrailTreeTableNode[] = [/* hierarchical rows */];
}`;

  resetToDefaults(): void {
    this.selectedId.set('eng');
    this.themeService.setTheme('light');
  }
}
