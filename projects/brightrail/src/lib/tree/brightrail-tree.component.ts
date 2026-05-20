import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  input,
  output,
  signal,
  untracked,
} from '@angular/core';

import type { BrightrailTreeNode, BrightrailTreeSelectionMode } from './brightrail-tree.types';
import {
  collectInitiallyExpandedIds,
  flattenVisibleTreeNodes,
  type BrightrailTreeFlatNode,
} from './brightrail-tree.utils';

export type { BrightrailTreeSelectionMode };

@Component({
  selector: 'brightrail-tree',
  standalone: true,
  templateUrl: './brightrail-tree.component.html',
  styleUrl: './brightrail-tree.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'br-tree',
    role: 'tree',
  },
})
export class BrightrailTreeComponent {
  readonly nodes = input<BrightrailTreeNode[]>([]);
  readonly selectionMode = input<BrightrailTreeSelectionMode>('single');
  readonly selectedId = input<string | null>(null);
  readonly ariaLabel = input<string | undefined>(undefined);
  readonly levelIndent = input('1.25rem');

  readonly selectedIdChange = output<string>();
  readonly nodeSelect = output<BrightrailTreeNode>();
  readonly expandedIdsChange = output<Set<string>>();

  private readonly expandedIdSet = signal<Set<string>>(new Set());
  private readonly activeSelectedId = signal<string | null>(null);
  private expandedPrimed = false;

  readonly visibleNodes = computed(() =>
    flattenVisibleTreeNodes(this.nodes(), this.expandedIdSet()),
  );

  constructor() {
    effect(() => {
      const nodes = this.nodes();
      const external = this.selectedId();
      untracked(() => this.activeSelectedId.set(external));

      if (!this.expandedPrimed && nodes.length > 0) {
        untracked(() => {
          this.expandedIdSet.set(collectInitiallyExpandedIds(nodes));
          this.expandedPrimed = true;
        });
      }
    });
  }

  selectionEnabled(): boolean {
    return this.selectionMode() === 'single';
  }

  isExpanded(id: string): boolean {
    return this.expandedIdSet().has(id);
  }

  isSelected(id: string): boolean {
    return this.activeSelectedId() === id;
  }

  getSelectedId(): string | null {
    return this.activeSelectedId();
  }

  indent(depth: number): string {
    if (depth <= 0) {
      return '0';
    }
    return `calc(${depth} * ${this.levelIndent()})`;
  }

  onToggle(event: Event, node: BrightrailTreeFlatNode): void {
    event.stopPropagation();
    if (node.disabled || !node.hasChildren) {
      return;
    }
    const next = new Set(this.expandedIdSet());
    if (next.has(node.id)) {
      next.delete(node.id);
    } else {
      next.add(node.id);
    }
    this.expandedIdSet.set(next);
    this.expandedIdsChange.emit(new Set(next));
  }

  onSelect(event: Event, node: BrightrailTreeFlatNode): void {
    event.stopPropagation();
    if (node.disabled || !this.selectionEnabled()) {
      return;
    }
    this.activeSelectedId.set(node.id);
    this.selectedIdChange.emit(node.id);
    this.nodeSelect.emit(node);
  }
}
