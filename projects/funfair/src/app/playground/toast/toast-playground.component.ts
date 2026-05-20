import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  BrightrailToastComponent,
  BrightrailToastContainerComponent,
  BrightrailToastService,
  BrightrailToastVariant,
} from 'brightrail';

import { PlaygroundThemeId, PlaygroundThemeService } from '../playground-theme.service';

type CodeTabId = 'html' | 'ts' | 'scss';

type ToastRecipe =
  | 'core-info'
  | 'core-success'
  | 'core-warning'
  | 'core-danger'
  | 'title-only'
  | 'message-only'
  | 'dismissible'
  | 'persistent'
  | 'service-demo'
  | 'stack-demo';

@Component({
  selector: 'app-toast-playground',
  standalone: true,
  imports: [FormsModule, BrightrailToastComponent, BrightrailToastContainerComponent],
  templateUrl: './toast-playground.component.html',
  styleUrl: './toast-playground.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToastPlaygroundComponent {
  readonly themeService = inject(PlaygroundThemeService);
  readonly toastService = inject(BrightrailToastService);
  readonly ngModelStandalone = { standalone: true };

  readonly recipeGroups = ['Basics', 'Content', 'Behavior', 'Service'] as const;

  readonly recipeOptions: { value: ToastRecipe; label: string; group: string }[] = [
    { value: 'core-info', label: 'Info', group: 'Basics' },
    { value: 'core-success', label: 'Success', group: 'Basics' },
    { value: 'core-warning', label: 'Warning', group: 'Basics' },
    { value: 'core-danger', label: 'Danger', group: 'Basics' },
    { value: 'title-only', label: 'Title + message', group: 'Content' },
    { value: 'message-only', label: 'Message only', group: 'Content' },
    { value: 'dismissible', label: 'Dismissible', group: 'Behavior' },
    { value: 'persistent', label: 'Persistent (no auto-dismiss)', group: 'Behavior' },
    { value: 'service-demo', label: 'Toast service', group: 'Service' },
    { value: 'stack-demo', label: 'Stack multiple', group: 'Service' },
  ];

  readonly themeRowOptions: { id: PlaygroundThemeId; label: string }[] = [
    { id: 'light', label: 'Material light' },
    { id: 'dark', label: 'Material dark' },
  ];

  readonly variantOptions: BrightrailToastVariant[] = ['info', 'success', 'warning', 'danger'];

  readonly selectedRecipeGroup = signal<string>('Basics');
  readonly recipe = signal<ToastRecipe>('core-info');

  readonly variant = signal<BrightrailToastVariant>('info');
  readonly title = signal('Heads up');
  readonly message = signal('Your draft was saved.');
  readonly dismissible = signal(true);
  readonly durationMs = signal(5000);
  readonly previewStatic = signal(true);

  readonly activeTab = signal<CodeTabId>('html');

  readonly activeSnippet = computed(() => {
    switch (this.activeTab()) {
      case 'ts':
        return this.buildTs();
      case 'scss':
        return this.buildScss();
      default:
        return this.buildHtml();
    }
  });

  recipesInGroup(group: string): { value: ToastRecipe; label: string }[] {
    return this.recipeOptions.filter((r) => r.group === group).map((r) => ({ value: r.value, label: r.label }));
  }

  onRecipeGroupNgModelChange(v: string): void {
    this.selectedRecipeGroup.set(v);
    const next = this.recipesInGroup(v)[0]?.value;
    if (next) this.onRecipeNgModelChange(next);
  }

  onRecipeNgModelChange(v: string): void {
    const recipe = v as ToastRecipe;
    this.recipe.set(recipe);
    this.applyRecipe(recipe);
  }

  applyRecipe(recipe: ToastRecipe): void {
    this.variant.set('info');
    this.title.set('Heads up');
    this.message.set('Your draft was saved.');
    this.dismissible.set(true);
    this.durationMs.set(5000);
    this.previewStatic.set(true);

    if (recipe === 'core-success') {
      this.variant.set('success');
      this.title.set('Saved');
      this.message.set('Changes published successfully.');
    } else if (recipe === 'core-warning') {
      this.variant.set('warning');
      this.title.set('Review needed');
      this.message.set('Some fields need attention.');
    } else if (recipe === 'core-danger') {
      this.variant.set('danger');
      this.title.set('Error');
      this.message.set('We could not complete the request.');
    } else if (recipe === 'title-only') {
      this.title.set('Sync complete');
      this.message.set('3 files uploaded to the workspace.');
    } else if (recipe === 'message-only') {
      this.title.set('');
      this.message.set('Link copied to clipboard.');
    } else if (recipe === 'dismissible') {
      this.variant.set('success');
      this.title.set('Profile updated');
      this.message.set('Your preferences were saved.');
      this.dismissible.set(true);
    } else if (recipe === 'persistent') {
      this.variant.set('danger');
      this.title.set('Action required');
      this.message.set('Approve the pending request.');
      this.durationMs.set(0);
      this.previewStatic.set(false);
    } else if (recipe === 'service-demo' || recipe === 'stack-demo') {
      this.previewStatic.set(false);
    }
  }

  resetToDefaults(): void {
    this.toastService.dismissAll();
    this.selectedRecipeGroup.set('Basics');
    this.onRecipeNgModelChange('core-info');
  }

  showToastFromSettings(): void {
    this.toastService.show({
      variant: this.variant(),
      title: this.title(),
      message: this.message(),
      dismissible: this.dismissible(),
      durationMs: this.durationMs(),
    });
  }

  showStackedToasts(): void {
    this.toastService.show({ variant: 'info', message: 'First notification' });
    this.toastService.show({ variant: 'success', title: 'Saved', message: 'Second notification' });
    this.toastService.show({ variant: 'warning', message: 'Third notification' });
  }

  dismissAllToasts(): void {
    this.toastService.dismissAll();
  }

  buildHtml(): string {
    if (this.recipe() === 'service-demo' || this.recipe() === 'stack-demo') {
      return `<!-- Mount once in app shell -->
<brightrail-toast-container />

<button type="button" (click)="showToast()">Show toast</button>`;
    }

    const titleAttr = this.title().trim().length ? `\n  title="${this.title()}"` : '';
    return `<!-- Recipe: ${this.recipe()} -->
<brightrail-toast
  variant="${this.variant()}"${titleAttr}
  message="${this.message()}"
  [dismissible]="${this.dismissible()}" />`;
  }

  buildTs(): string {
    return `// Recipe: ${this.recipe()}
import { Component, inject } from '@angular/core';
import { BrightrailToastContainerComponent, BrightrailToastService } from 'brightrail';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [BrightrailToastContainerComponent],
  template: \`
    <button type="button" (click)="showToast()">Show toast</button>
    <brightrail-toast-container />
  \`,
})
export class ExampleComponent {
  private readonly toast = inject(BrightrailToastService);

  showToast(): void {
    this.toast.show({
      variant: '${this.variant()}',
      title: '${this.title()}',
      message: '${this.message()}',
      dismissible: ${this.dismissible()},
      durationMs: ${this.durationMs()},
    });
  }
}`;
  }

  buildScss(): string {
    return `/* Toast container is fixed; ensure app root does not clip overflow */
:host {
  display: block;
}`;
  }

  selectTab(tab: CodeTabId): void {
    this.activeTab.set(tab);
  }

  copySnippet(): void {
    void navigator.clipboard?.writeText(this.activeSnippet());
  }
}
