import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  output,
  signal,
} from '@angular/core';

import { flattenTreeTableRows } from './brightrail-tree-table.utils';
import type { BrightrailTreeTableColumn, BrightrailTreeTableNode } from './brightrail-tree-table.types';

@Component({
  selector: 'brightrail-tree-table',
  standalone: true,
  template: `
    <table class="br-tt" role="treegrid" [attr.aria-label]="ariaLabel()">
      <thead>
        <tr>
          @for (col of columns(); track col.id) {
            <th scope="col">{{ col.header }}</th>
          }
        </tr>
      </thead>
      <tbody>
        @for (row of flatRows(); track row.id) {
          <tr
            role="row"
            [class.br-tt__row--selected]="selectedId() === row.id"
            (click)="selectRow(row.id)"
          >
            @for (col of columns(); track col.id) {
              <td role="gridcell">
                @if (col.field === 'label') {
                  <span class="br-tt__label" [style.paddingInlineStart.rem]="row.depth * 1.25">
                    @if (row.hasChildren) {
                      <button
                        type="button"
                        class="br-tt__toggle"
                        [attr.aria-expanded]="row.expanded"
                        [attr.aria-label]="row.expanded ? 'Collapse' : 'Expand'"
                        (click)="toggleExpand(row.id, $event)"
                      >
                        {{ row.expanded ? '▾' : '▸' }}
                      </button>
                    } @else {
                      <span class="br-tt__toggle br-tt__toggle--spacer" aria-hidden="true"></span>
                    }
                    {{ row.label }}
                  </span>
                } @else {
                  {{ row.meta ?? '—' }}
                }
              </td>
            }
          </tr>
        }
      </tbody>
    </table>
  `,
  styleUrl: './brightrail-tree-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrightrailTreeTableComponent {
  readonly nodes = input<readonly BrightrailTreeTableNode[]>([]);
  readonly columns = input<readonly BrightrailTreeTableColumn[]>([
    { id: 'name', header: 'Name', field: 'label' },
    { id: 'meta', header: 'Details', field: 'meta' },
  ]);
  readonly ariaLabel = input('Tree table');
  readonly selectedId = input<string | null>(null);
  readonly selectedIdChange = output<string>();

  private readonly expanded = signal<Set<string>>(new Set());

  readonly flatRows = computed(() =>
    flattenTreeTableRows(this.nodes(), this.expanded()),
  );

  toggleExpand(id: string, event: Event): void {
    event.stopPropagation();
    this.expanded.update((set) => {
      const next = new Set(set);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }

  selectRow(id: string): void {
    this.selectedIdChange.emit(id);
  }
}
