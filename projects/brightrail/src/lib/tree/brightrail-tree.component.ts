import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  computed,
  effect,
  inject,
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
import { resolveTreeKeyAction, stepTreeIndex } from '../platform/brightrail-tree-keyboard.utils';

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
    tabindex: '0',
  },
})
export class BrightrailTreeComponent {
  private readonly host = inject(ElementRef<HTMLElement>);

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
  protected readonly focusedNodeIndex = signal(0);
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

  isFocused(index: number): boolean {
    return this.focusedNodeIndex() === index;
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

  @HostListener('keydown', ['$event'])
  onTreeKeydown(event: KeyboardEvent): void {
    const nodes = this.visibleNodes();
    if (!nodes.length) {
      return;
    }

    const action = resolveTreeKeyAction(event.key);
    if (action === 'none') {
      return;
    }

    event.preventDefault();
    const index = this.focusedNodeIndex();
    const node = nodes[index];
    if (!node) {
      return;
    }

    switch (action) {
      case 'next':
        this.focusedNodeIndex.set(stepTreeIndex(index, 1, nodes.length));
        break;
      case 'prev':
        this.focusedNodeIndex.set(stepTreeIndex(index, -1, nodes.length));
        break;
      case 'first':
        this.focusedNodeIndex.set(0);
        break;
      case 'last':
        this.focusedNodeIndex.set(nodes.length - 1);
        break;
      case 'expand':
        if (node.hasChildren && !this.isExpanded(node.id)) {
          this.onToggle(event, node);
        } else if (node.hasChildren) {
          this.focusedNodeIndex.set(Math.min(index + 1, nodes.length - 1));
        }
        break;
      case 'collapse':
        if (node.hasChildren && this.isExpanded(node.id)) {
          this.onToggle(event, node);
        } else if (node.depth > 0) {
          const parentIndex = nodes.findIndex(
            (candidate, candidateIndex) =>
              candidateIndex < index &&
              candidate.depth === node.depth - 1 &&
              nodes.slice(candidateIndex + 1, index + 1).every((n) => n.depth > candidate.depth),
          );
          if (parentIndex >= 0) {
            this.focusedNodeIndex.set(parentIndex);
          }
        }
        break;
      case 'activate':
        if (node.hasChildren) {
          this.onToggle(event, node);
        } else {
          this.onSelect(event, node);
        }
        break;
      default:
        break;
    }

    queueMicrotask(() => this.focusActiveNodeButton());
  }

  private focusActiveNodeButton(): void {
    const index = this.focusedNodeIndex();
    const button = this.host.nativeElement.querySelector(
      `[data-tree-focus-index="${index}"]`,
    ) as HTMLButtonElement | null;
    button?.focus();
  }
}
