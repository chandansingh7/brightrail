import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';
import { BrightrailButtonIcon } from '../../buttons/brightrail-button-icon.component';

import {
  BrightrailCheckboxComponent,
  BrightrailCheckboxLabelPosition,
  BrightrailCheckboxSize,
  BrightrailCheckboxState,
  BrightrailCheckboxStatus,
  BrightrailCheckboxTone,
  BrightrailCheckboxVariant,
} from './brightrail-checkbox.component';

export type BrightrailCheckboxGroupLayout = 'vertical' | 'horizontal';

export interface BrightrailCheckboxGroupOption {
  id: string;
  label: string;
  helperText?: string;
  disabled?: boolean;
  level?: number;
}

@Component({
  selector: 'brightrail-checkbox-group',
  standalone: true,
  imports: [BrightrailCheckboxComponent],
  template: `
    <div class="br-cbg" [class]="'br-cbg--' + layout()">
      @if (showSelectAll()) {
        <div class="br-cbg__select-all">
          <brightrail-checkbox
            [label]="selectAllLabel()"
            [helperText]="selectAllHelperText()"
            [size]="size()"
            [tone]="tone()"
            [variant]="variant()"
            [status]="status()"
            [labelPosition]="labelPosition()"
            [state]="state()"
            [checked]="allChecked()"
            [indeterminate]="partiallyChecked()"
            [disabled]="disabled()"
            [checkedIcon]="checkedIcon()"
            (checkedChange)="toggleSelectAll($event)"
          />
        </div>
      }

      <div class="br-cbg__list">
        @for (opt of options(); track opt.id; let idx = $index) {
          <div
            class="br-cbg__item"
            [class.br-cbg__item--nested]="(opt.level ?? 0) > 0"
            [class.br-cbg__item--parent]="isParentOption(opt.id)"
            [class.br-cbg__item--first-child]="optionIsFirstChild(idx)"
            [class.br-cbg__item--last-child]="optionIsLastChild(idx)"
            [style.--br-cbg-level]="opt.level ?? 0"
          >
            <brightrail-checkbox
              [label]="opt.label"
              [helperText]="opt.helperText ?? ''"
              [size]="size()"
              [tone]="tone()"
              [variant]="variant()"
              [status]="status()"
              [labelPosition]="labelPosition()"
              [state]="state()"
              [disabled]="disabled() || !!opt.disabled"
              [checked]="optionChecked(opt.id)"
              [indeterminate]="optionIndeterminate(opt.id)"
              [checkedIcon]="checkedIcon()"
              (checkedChange)="toggleOption(opt.id, $event)"
            />
          </div>
        }
      </div>
    </div>
  `,
  styleUrl: './brightrail-checkbox-group.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrightrailCheckboxGroupComponent {
  readonly options = input<BrightrailCheckboxGroupOption[]>([]);
  readonly selectedIds = input<string[]>([]);
  readonly layout = input<BrightrailCheckboxGroupLayout>('vertical');
  readonly showSelectAll = input(false);
  readonly selectAllLabel = input('Select all');
  readonly selectAllHelperText = input('');
  readonly parentOptionId = input('');
  readonly disabled = input(false);

  readonly tone = input<BrightrailCheckboxTone>('primary');
  readonly variant = input<BrightrailCheckboxVariant>('default');
  readonly status = input<BrightrailCheckboxStatus>('none');
  readonly labelPosition = input<BrightrailCheckboxLabelPosition>('right');
  readonly size = input<BrightrailCheckboxSize>('md');
  readonly state = input<BrightrailCheckboxState>('default');
  readonly checkedIcon = input<BrightrailButtonIcon>('check');

  readonly selectedIdsChange = output<string[]>();

  readonly enabledIds = computed(() =>
    this.options()
      .filter((o) => !o.disabled && o.id !== this.parentOptionId())
      .map((o) => o.id),
  );
  readonly childIds = computed(() =>
    this.options()
      .filter((o) => (o.level ?? 0) > 0 && !o.disabled)
      .map((o) => o.id),
  );
  readonly selectedSet = computed(() => new Set(this.selectedIds()));
  readonly allChecked = computed(() => {
    const enabled = this.enabledIds();
    if (enabled.length === 0) return false;
    const selected = this.selectedSet();
    return enabled.every((id) => selected.has(id));
  });
  readonly partiallyChecked = computed(() => {
    const enabled = this.enabledIds();
    if (enabled.length === 0) return false;
    const selected = this.selectedSet();
    const checkedCount = enabled.filter((id) => selected.has(id)).length;
    return checkedCount > 0 && checkedCount < enabled.length;
  });

  readonly parentChecked = computed(() => {
    const children = this.childIds();
    if (children.length === 0) return false;
    const selected = this.selectedSet();
    return children.every((id) => selected.has(id));
  });

  readonly parentIndeterminate = computed(() => {
    const children = this.childIds();
    if (children.length === 0) return false;
    const selected = this.selectedSet();
    const checkedCount = children.filter((id) => selected.has(id)).length;
    return checkedCount > 0 && checkedCount < children.length;
  });

  isParentOption(id: string): boolean {
    return !!this.parentOptionId() && id === this.parentOptionId();
  }

  optionChecked(id: string): boolean {
    if (this.isParentOption(id)) return this.parentChecked();
    return this.selectedSet().has(id);
  }

  optionIndeterminate(id: string): boolean {
    return this.isParentOption(id) && this.parentIndeterminate();
  }

  optionIsFirstChild(index: number): boolean {
    const opts = this.options();
    const cur = opts[index];
    if (!cur || (cur.level ?? 0) <= 0) return false;
    return (opts[index - 1]?.level ?? 0) === 0;
  }

  optionIsLastChild(index: number): boolean {
    const opts = this.options();
    const cur = opts[index];
    if (!cur || (cur.level ?? 0) <= 0) return false;
    return (opts[index + 1]?.level ?? 0) === 0;
  }

  toggleOption(id: string, checked: boolean): void {
    if (this.isParentOption(id)) {
      this.toggleParentChildren(checked);
      return;
    }
    const set = new Set(this.selectedIds());
    if (checked) {
      set.add(id);
    } else {
      set.delete(id);
    }
    this.selectedIdsChange.emit(Array.from(set));
  }

  toggleParentChildren(checked: boolean): void {
    const set = new Set(this.selectedIds());
    this.childIds().forEach((id) => {
      if (checked) set.add(id);
      else set.delete(id);
    });
    this.selectedIdsChange.emit(Array.from(set));
  }

  toggleSelectAll(checked: boolean): void {
    if (!checked) {
      this.selectedIdsChange.emit([]);
      return;
    }
    this.selectedIdsChange.emit(this.enabledIds());
  }
}

