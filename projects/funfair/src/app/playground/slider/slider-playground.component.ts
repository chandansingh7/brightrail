import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  BrightrailSliderComponent,
  BrightrailSliderSize,
  BrightrailSliderTone,
} from 'brightrail';

import { PlaygroundThemeId, PlaygroundThemeService } from '../playground-theme.service';

type CodeTabId = 'html' | 'ts' | 'scss';
type SliderRecipe =
  | 'basic'
  | 'with-value'
  | 'volume'
  | 'percentage'
  | 'temperature'
  | 'fine-step'
  | 'disabled'
  | 'success-tone'
  | 'danger-tone'
  | 'price-range'
  | 'form-binding'
  | 'labeled-row';

@Component({
  selector: 'app-slider-playground',
  standalone: true,
  imports: [FormsModule, BrightrailSliderComponent],
  templateUrl: './slider-playground.component.html',
  styleUrl: './slider-playground.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SliderPlaygroundComponent {
  readonly themeService = inject(PlaygroundThemeService);
  readonly ngModelStandalone = { standalone: true };

  readonly recipeGroups = ['Core', 'Ranges', 'Tones', 'Advanced'] as const;
  readonly recipeOptions: { value: SliderRecipe; label: string; group: string }[] = [
    { value: 'basic', label: 'Basic slider', group: 'Core' },
    { value: 'with-value', label: 'With value label', group: 'Core' },
    { value: 'disabled', label: 'Disabled', group: 'Core' },
    { value: 'volume', label: 'Volume (0–100)', group: 'Ranges' },
    { value: 'percentage', label: 'Completion %', group: 'Ranges' },
    { value: 'temperature', label: 'Temperature (16–30)', group: 'Ranges' },
    { value: 'fine-step', label: 'Fine step (0–1)', group: 'Ranges' },
    { value: 'price-range', label: 'Price filter', group: 'Ranges' },
    { value: 'success-tone', label: 'Success tone', group: 'Tones' },
    { value: 'danger-tone', label: 'Danger tone', group: 'Tones' },
    { value: 'form-binding', label: 'Form binding (ngModel)', group: 'Advanced' },
    { value: 'labeled-row', label: 'Labeled row layout', group: 'Advanced' },
  ];

  readonly toneOptions: BrightrailSliderTone[] = ['primary', 'success', 'warning', 'danger', 'neutral'];
  readonly sizeOptions: BrightrailSliderSize[] = ['sm', 'md', 'lg'];
  readonly yesNo = [
    { value: 'no', label: 'No' },
    { value: 'yes', label: 'Yes' },
  ] as const;
  readonly themeRowOptions: { id: PlaygroundThemeId; label: string }[] = [
    { id: 'light', label: 'Material light' },
    { id: 'dark', label: 'Material dark' },
  ];

  readonly selectedRecipeGroup = signal<string>('Core');
  readonly recipe = signal<SliderRecipe>('basic');
  readonly min = signal(0);
  readonly max = signal(100);
  readonly step = signal(1);
  readonly showValue = signal(false);
  readonly disabled = signal(false);
  readonly tone = signal<BrightrailSliderTone>('primary');
  readonly size = signal<BrightrailSliderSize>('md');
  readonly ariaLabel = signal('Slider');
  readonly sliderValue = signal(50);
  readonly useNgModel = signal(false);
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

  recipesInGroup(group: string): { value: SliderRecipe; label: string }[] {
    return this.recipeOptions.filter((r) => r.group === group).map((r) => ({ value: r.value, label: r.label }));
  }

  onRecipeGroupNgModelChange(v: string): void {
    this.selectedRecipeGroup.set(v);
    const next = this.recipesInGroup(v)[0]?.value;
    if (next) this.onRecipeNgModelChange(next);
  }

  onRecipeNgModelChange(v: string): void {
    const recipe = v as SliderRecipe;
    this.recipe.set(recipe);
    this.applyRecipe(recipe);
  }

  applyRecipe(recipe: SliderRecipe): void {
    this.min.set(0);
    this.max.set(100);
    this.step.set(1);
    this.showValue.set(false);
    this.disabled.set(false);
    this.tone.set('primary');
    this.size.set('md');
    this.ariaLabel.set('Slider');
    this.sliderValue.set(50);
    this.useNgModel.set(false);

    switch (recipe) {
      case 'with-value':
        this.showValue.set(true);
        this.ariaLabel.set('Volume');
        break;
      case 'volume':
        this.showValue.set(true);
        this.ariaLabel.set('Volume');
        this.sliderValue.set(75);
        break;
      case 'percentage':
        this.step.set(5);
        this.showValue.set(true);
        this.ariaLabel.set('Completion');
        this.sliderValue.set(60);
        break;
      case 'temperature':
        this.min.set(16);
        this.max.set(30);
        this.showValue.set(true);
        this.tone.set('warning');
        this.ariaLabel.set('Temperature');
        this.sliderValue.set(22);
        break;
      case 'fine-step':
        this.max.set(1);
        this.step.set(0.1);
        this.showValue.set(true);
        this.ariaLabel.set('Opacity');
        this.sliderValue.set(0.5);
        break;
      case 'disabled':
        this.showValue.set(true);
        this.disabled.set(true);
        break;
      case 'success-tone':
        this.showValue.set(true);
        this.tone.set('success');
        this.ariaLabel.set('Progress');
        break;
      case 'danger-tone':
        this.showValue.set(true);
        this.tone.set('danger');
        this.ariaLabel.set('Risk level');
        break;
      case 'price-range':
        this.max.set(1000);
        this.step.set(50);
        this.showValue.set(true);
        this.tone.set('neutral');
        this.ariaLabel.set('Max price');
        this.sliderValue.set(500);
        break;
      case 'form-binding':
        this.showValue.set(true);
        this.ariaLabel.set('Volume');
        this.useNgModel.set(true);
        break;
      case 'labeled-row':
        this.showValue.set(true);
        this.ariaLabel.set('Volume');
        break;
    }
  }

  resetToDefaults(): void {
    this.selectedRecipeGroup.set('Core');
    this.onRecipeNgModelChange('basic');
    this.themeService.setTheme('light');
    this.activeTab.set('html');
  }

  onValueChange(v: number): void {
    this.sliderValue.set(v);
  }

  selectTab(tab: CodeTabId): void {
    this.activeTab.set(tab);
  }

  copySnippet(): void {
    void navigator.clipboard?.writeText(this.activeSnippet());
  }

  buildHtml(): string {
    const lines = [
      '<brightrail-slider',
      `  [min]="${this.min()}"`,
      `  [max]="${this.max()}"`,
      `  [step]="${this.step()}"`,
      `  tone="${this.tone()}"`,
      `  size="${this.size()}"`,
      `  ariaLabel="${escapeAttr(this.ariaLabel())}"`,
    ];
    if (this.showValue()) lines.push('  [showValue]="true"');
    if (this.disabled()) lines.push('  [disabled]="true"');
    if (this.useNgModel()) {
      lines.push('  [(ngModel)]="sliderValue"');
    } else {
      lines.push('  (valueChange)="onValueChange($event)"');
    }
    lines.push('/>');
    return lines.join('\n');
  }

  buildTs(): string {
    return [
      "import { BrightrailSliderComponent } from 'brightrail';",
      '',
      '// imports: [BrightrailSliderComponent, FormsModule]',
      'sliderValue = 50;',
      '',
      'onValueChange(value: number): void {',
      '  this.sliderValue = value;',
      '}',
    ].join('\n');
  }

  buildScss(): string {
    return [
      '.slider-row {',
      '  display: grid;',
      '  grid-template-columns: 6rem 1fr;',
      '  align-items: center;',
      '  gap: 0.75rem;',
      '}',
    ].join('\n');
  }
}

function escapeAttr(value: string): string {
  return value.replace(/"/g, '&quot;');
}
