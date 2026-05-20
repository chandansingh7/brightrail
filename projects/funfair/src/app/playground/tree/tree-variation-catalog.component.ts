import { ChangeDetectionStrategy, Component } from '@angular/core';

import { BrightrailTreeComponent } from 'brightrail';

import { CatalogVariationTileComponent } from '../shared/catalog-variation-tile.component';
import {
  TREE_DEMO_FILES,
  TREE_DEMO_ORG,
  TREE_DEMO_WORKSPACE,
  TREE_VARIATION_SNIPPETS,
} from './tree-variation-snippets';

@Component({
  selector: 'app-tree-variation-catalog',
  standalone: true,
  imports: [BrightrailTreeComponent, CatalogVariationTileComponent],
  templateUrl: './tree-variation-catalog.component.html',
  styleUrl: './tree-variation-catalog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TreeVariationCatalogComponent {
  readonly s = TREE_VARIATION_SNIPPETS;
  readonly workspaceNodes = TREE_DEMO_WORKSPACE;
  readonly fileNodes = TREE_DEMO_FILES;
  readonly orgNodes = TREE_DEMO_ORG;
  readonly flatNodes = [
    { id: 'inbox', label: 'Inbox' },
    { id: 'sent', label: 'Sent' },
  ];
  readonly disabledNodes = [
    { id: 'ok', label: 'Available' },
    { id: 'locked', label: 'Locked', disabled: true },
  ];
  readonly expandedNodes = [
    { id: 'a', label: 'Expanded parent', expanded: true, children: [{ id: 'b', label: 'Child' }] },
  ];
  readonly collapsedNodes = [
    { id: 'a', label: 'Collapsed parent', expanded: false, children: [{ id: 'b', label: 'Child' }] },
  ];
  readonly disabledParentNodes = [
    { id: 'parent', label: 'Parent', disabled: true, children: [{ id: 'child', label: 'Child' }] },
  ];
  readonly deepNodes = [
    {
      id: 'l1',
      label: 'Level 1',
      expanded: true,
      children: [
        {
          id: 'l2',
          label: 'Level 2',
          expanded: true,
          children: [{ id: 'l3', label: 'Level 3 leaf' }],
        },
      ],
    },
  ];
  readonly leftNodes = [
    { id: 'docs', label: 'Documents', expanded: true, children: [{ id: 'drafts', label: 'Drafts' }] },
  ];
  readonly rightNodes = [
    { id: 'queue', label: 'Queue', expanded: true, children: [{ id: 'pending', label: 'Pending' }] },
  ];
}
