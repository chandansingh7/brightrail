import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  BrightrailAccordionAppearance,
  BrightrailAccordionComponent,
  BrightrailAccordionExpandMode,
  BrightrailAccordionItemComponent,
} from 'brightrail';

import { PlaygroundThemeId, PlaygroundThemeService } from './playground-theme.service';

type CodeTabId = 'html' | 'ts' | 'scss';

type AccordionRecipe =
  | 'core-standard'
  | 'core-bordered'
  | 'core-subtle'
  | 'core-compact'
  | 'size-sm'
  | 'size-md'
  | 'size-lg'
  | 'state-hover'
  | 'state-disabled'
  | 'expand-single'
  | 'expand-multi'
  | 'icon-left'
  | 'icon-leading'
  | 'icon-right'
  | 'ent-account'
  | 'ent-enterprise-grid'
  | 'adv-nested'
  | 'adv-table'
  | 'adv-badges'
  | 'adv-actions';

@Component({
  selector: 'app-accordion-playground',
  standalone: true,
  imports: [FormsModule, BrightrailAccordionComponent, BrightrailAccordionItemComponent],
  templateUrl: './accordion-playground.component.html',
  styleUrl: './accordion-playground.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionPlaygroundComponent {
  readonly themeService = inject(PlaygroundThemeService);
  readonly ngModelStandalone = { standalone: true };

  readonly recipeGroups = ['Basics', 'Sizes', 'States', 'Expand', 'Icons', 'Enterprise', 'Advanced'] as const;

  readonly recipeOptions: { value: AccordionRecipe; label: string; group: string }[] = [
    { value: 'core-standard', label: 'Standard', group: 'Basics' },
    { value: 'core-bordered', label: 'Bordered', group: 'Basics' },
    { value: 'core-subtle', label: 'Subtle', group: 'Basics' },
    { value: 'core-compact', label: 'Compact', group: 'Basics' },
    { value: 'size-sm', label: 'Small', group: 'Sizes' },
    { value: 'size-md', label: 'Medium', group: 'Sizes' },
    { value: 'size-lg', label: 'Large', group: 'Sizes' },
    { value: 'state-hover', label: 'Hover', group: 'States' },
    { value: 'state-disabled', label: 'Disabled', group: 'States' },
    { value: 'expand-single', label: 'Single expand', group: 'Expand' },
    { value: 'expand-multi', label: 'Multi expand', group: 'Expand' },
    { value: 'icon-left', label: 'Chevron column left', group: 'Icons' },
    { value: 'icon-leading', label: 'Leading list icon', group: 'Icons' },
    { value: 'icon-right', label: 'Trailing arrow chevron', group: 'Icons' },
    { value: 'ent-account', label: 'Account settings (icons)', group: 'Enterprise' },
    { value: 'ent-enterprise-grid', label: 'Enterprise grid (2×2)', group: 'Enterprise' },
    { value: 'adv-nested', label: 'Nested accordion', group: 'Advanced' },
    { value: 'adv-table', label: 'Content + table', group: 'Advanced' },
    { value: 'adv-badges', label: 'Summary badges', group: 'Advanced' },
    { value: 'adv-actions', label: 'Header actions', group: 'Advanced' },
  ];

  readonly themeRowOptions: { id: PlaygroundThemeId; label: string }[] = [
    { id: 'light', label: 'Material light' },
    { id: 'dark', label: 'Material dark' },
  ];

  readonly appearanceOptions: BrightrailAccordionAppearance[] = ['standard', 'bordered', 'subtle', 'compact'];
  readonly sizeOptions = ['sm', 'md', 'lg'] as const;
  readonly expandModeOptions: BrightrailAccordionExpandMode[] = ['single', 'multi'];
  readonly iconPosOptions = ['left', 'right'] as const;

  readonly selectedRecipeGroup = signal<string>('Basics');
  readonly recipe = signal<AccordionRecipe>('core-standard');

  readonly appearance = signal<BrightrailAccordionAppearance>('standard');
  readonly size = signal<'sm' | 'md' | 'lg'>('md');
  readonly expandMode = signal<BrightrailAccordionExpandMode>('single');
  readonly iconPosition = signal<'left' | 'right'>('right');
  readonly showDivider = signal(true);
  readonly defaultExpandedIndex = signal<number | null>(0);
  readonly disabledAccordion = signal(false);
  readonly disabledItemIndex = signal<number | null>(null);
  readonly showHoverState = signal(false);

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

  readonly isWidePreview = computed(() =>
    ['adv-nested', 'adv-table', 'adv-badges', 'adv-actions', 'ent-enterprise-grid'].includes(this.recipe()),
  );

  recipesInGroup(group: string): { value: AccordionRecipe; label: string }[] {
    return this.recipeOptions.filter((r) => r.group === group).map((r) => ({ value: r.value, label: r.label }));
  }

  onRecipeGroupNgModelChange(v: string): void {
    this.selectedRecipeGroup.set(v);
    const next = this.recipesInGroup(v)[0]?.value;
    if (next) this.onRecipeNgModelChange(next);
  }

  onRecipeNgModelChange(v: string): void {
    const recipe = v as AccordionRecipe;
    this.recipe.set(recipe);
    this.applyRecipe(recipe);
  }

  applyRecipe(recipe: AccordionRecipe): void {
    this.appearance.set('standard');
    this.size.set('md');
    this.expandMode.set('single');
    this.iconPosition.set('right');
    this.showDivider.set(true);
    this.defaultExpandedIndex.set(0);
    this.disabledAccordion.set(false);
    this.disabledItemIndex.set(null);
    this.showHoverState.set(false);

    if (recipe === 'core-bordered') this.appearance.set('bordered');
    else if (recipe === 'core-subtle') this.appearance.set('subtle');
    else if (recipe === 'core-compact') this.appearance.set('compact');
    else if (recipe === 'size-sm') this.size.set('sm');
    else if (recipe === 'size-md') this.size.set('md');
    else if (recipe === 'size-lg') this.size.set('lg');
    else if (recipe === 'state-hover') this.showHoverState.set(true);
    else if (recipe === 'state-disabled') this.disabledAccordion.set(true);
    else if (recipe === 'expand-single') {
      this.expandMode.set('single');
      this.defaultExpandedIndex.set(0);
    } else if (recipe === 'expand-multi') {
      this.expandMode.set('multi');
      this.defaultExpandedIndex.set(null);
    } else if (recipe === 'icon-left') this.iconPosition.set('left');
    else if (recipe === 'icon-leading') this.iconPosition.set('right');
    else if (recipe === 'icon-right') {
      this.iconPosition.set('right');
    } else if (recipe === 'ent-enterprise-grid') {
      this.showDivider.set(false);
      this.appearance.set('standard');
    } else if (recipe === 'adv-nested' || recipe === 'adv-table') this.defaultExpandedIndex.set(0);
    else if (recipe === 'adv-badges') this.defaultExpandedIndex.set(0);
    else if (recipe === 'adv-actions') this.defaultExpandedIndex.set(0);
  }

  resetToDefaults(): void {
    this.selectedRecipeGroup.set('Basics');
    this.onRecipeNgModelChange('core-standard');
  }

  defaultExpandedSelectValue(): string {
    const v = this.defaultExpandedIndex();
    if (v === null) return 'none';
    return String(v);
  }

  disabledItemSelectValue(): string {
    const i = this.disabledItemIndex();
    return i === null ? 'none' : String(i);
  }

  onDefaultExpandedNgModelChange(v: string): void {
    if (v === 'none') this.defaultExpandedIndex.set(null);
    else this.defaultExpandedIndex.set(+v);
  }

  onDisabledItemNgModelChange(v: string): void {
    if (v === 'none') this.disabledItemIndex.set(null);
    else this.disabledItemIndex.set(+v);
  }

  buildHtml(): string {
    const r = this.recipe();
    const appearance = this.appearance();
    const size = this.size();
    const expand = this.expandMode();
    const icon = this.iconPosition();
    const div = this.showDivider();
    const def = this.defaultExpandedIndex();
    const dis = this.disabledAccordion();
    const hover = this.showHoverState();
    const defAttr = def === null ? `null` : `${def}`;

    let body = '';
    if (r === 'expand-single') {
      body = `
  <brightrail-accordion-item title="Section one">
    <p>Only one section can be expanded at a time.</p>
  </brightrail-accordion-item>
  <brightrail-accordion-item title="Section two">
    <p>Opening this section closes the other.</p>
  </brightrail-accordion-item>`;
    } else if (r === 'expand-multi') {
      body = `
  <brightrail-accordion-item title="Section one">
    <p>Multiple panels can stay expanded together.</p>
  </brightrail-accordion-item>
  <brightrail-accordion-item title="Section two">
    <p>Use expand mode multi with optional defaultExpandedIndices.</p>
  </brightrail-accordion-item>`;
    } else if (r === 'icon-leading') {
      body = `
  <brightrail-accordion-item title="Left icon position" icon="list">
    <p>List-style icon on the left; chevron uses headerChevron down (default).</p>
  </brightrail-accordion-item>`;
    } else if (r === 'icon-right') {
      body = `
  <brightrail-accordion-item title="Right icon position">
    <p>Trailing chevron uses headerChevron=&quot;right&quot; for a collapsed &gt; glyph.</p>
  </brightrail-accordion-item>`;
    } else if (r === 'adv-nested') {
      body = `
  <brightrail-accordion-item title="Getting started" icon="list">
    <p>Outer summary content.</p>
    <brightrail-accordion expandMode="single" appearance="subtle" size="sm" [defaultExpandedIndex]="null">
      <brightrail-accordion-item title="Installation"><p>Install steps.</p></brightrail-accordion-item>
      <brightrail-accordion-item title="Configuration"><p>Configuration options.</p></brightrail-accordion-item>
    </brightrail-accordion>
  </brightrail-accordion-item>`;
    } else if (r === 'adv-table') {
      body = `
  <brightrail-accordion-item title="Orders summary">
    <table class="acc-demo-table acc-demo-table--borderless">
      <thead><tr><th>Order ID</th><th>Customer</th><th>Status</th><th>Total</th></tr></thead>
      <tbody>
        <tr><td>#1042</td><td>Acme Co.</td><td>Shipped</td><td>$128.00</td></tr>
        <tr><td>#1043</td><td>Northwind</td><td>Processing</td><td>$42.50</td></tr>
      </tbody>
    </table>
  </brightrail-accordion-item>`;
    } else if (r === 'adv-badges') {
      body = `
  <brightrail-accordion-item title="Open issues" icon="list" [badgeText]="12" badgeColor="danger">
    <p>Queued bugs and regressions.</p>
  </brightrail-accordion-item>
  <brightrail-accordion-item title="In progress" icon="list" [badgeText]="5" badgeColor="warning">
    <p>Active engineering work.</p>
  </brightrail-accordion-item>
  <brightrail-accordion-item title="Resolved" icon="list" [badgeText]="128" badgeColor="success">
    <p>Recently closed items.</p>
  </brightrail-accordion-item>`;
    } else if (r === 'adv-actions') {
      body = `
  <brightrail-accordion-item title="User management">
    <p>Invite teammates and manage roles from your organization directory.</p>
    <div class="br-acc-panel-footer">
      <a href="#" class="acc-demo-footer-link">View users</a>
      <button type="button" class="acc-demo-footer-primary">Add user</button>
    </div>
  </brightrail-accordion-item>`;
    } else if (r === 'ent-enterprise-grid') {
      body = `
  <brightrail-accordion-item title="FAQ accordion" subtitle="Common questions &amp; answers" icon="help">
    <p>Browse answers to common questions.</p>
  </brightrail-accordion-item>
  <brightrail-accordion-item title="Settings accordion" subtitle="Account &amp; application settings" icon="gear">
    <p>Adjust workspace and profile preferences.</p>
  </brightrail-accordion-item>
  <brightrail-accordion-item title="Notification preferences" subtitle="Manage alerts &amp; channels" icon="bell">
    <p>Choose email, SMS, and in-app alerts.</p>
  </brightrail-accordion-item>
  <brightrail-accordion-item title="Support topics" subtitle="Help articles &amp; resources" icon="headset">
    <p>Find guides and contact options.</p>
  </brightrail-accordion-item>`;
    } else if (r === 'ent-account') {
      body = `
  <brightrail-accordion-item title="Account settings" icon="user">
    <p>Manage your account details, profile information, and preferences.</p>
    <div class="acc-demo-links"><a href="#">Edit profile</a><a href="#">Change email</a></div>
  </brightrail-accordion-item>
  <brightrail-accordion-item title="Security" icon="warning">
    <p>Password and devices.</p>
  </brightrail-accordion-item>
  <brightrail-accordion-item title="Notifications" icon="info">
    <p>Alerts and digests.</p>
  </brightrail-accordion-item>`;
    } else {
      body = `
  <brightrail-accordion-item title="Account settings">
    <p>Manage your account details, profile information, and preferences.</p>
  </brightrail-accordion-item>
  <brightrail-accordion-item title="Security">
    <p>Update your password and review activity.</p>
  </brightrail-accordion-item>
  <brightrail-accordion-item title="Notifications">
    <p>Configure how you want to be notified.</p>
  </brightrail-accordion-item>`;
    }

    const layoutLine = r === 'ent-enterprise-grid' ? `\n  layout="enterprise-grid"` : '';
    const chevronLine = r === 'icon-right' ? `\n  headerChevron="right"` : '';
    const expandLine =
      r === 'expand-multi'
        ? `\n  [expandMode]="'multi'"\n  [defaultExpandedIndices]="[0, 1]"`
        : `\n  [expandMode]="'${expand}'"\n  [defaultExpandedIndex]="${defAttr}"`;

    return `<!-- Recipe: ${r} -->
<brightrail-accordion
  appearance="${appearance}"
  size="${size}"${layoutLine}${chevronLine}${expandLine}
  [iconPosition]="'${icon}'"
  [showDivider]="${div}"
  [disabled]="${dis}"
  [showHoverState]="${hover}"
  ariaLabel="Settings sections">
${body}
</brightrail-accordion>`;
  }

  buildTs(): string {
    return `// Recipe: ${this.recipe()}
import { Component } from '@angular/core';
import { BrightrailAccordionComponent, BrightrailAccordionItemComponent } from 'brightrail';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [BrightrailAccordionComponent, BrightrailAccordionItemComponent],
  templateUrl: './example.component.html',
})
export class ExampleComponent {}`;
  }

  buildScss(): string {
    return `/* Optional: layout helpers next to your accordion */
.acc-demo-links {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 0.5rem;
}

.acc-demo-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.875rem;
}

.acc-demo-table th,
.acc-demo-table td {
  border: 1px solid var(--br-color-border-strong, #dadce0);
  padding: 0.35rem 0.5rem;
}`;
  }

  selectTab(tab: CodeTabId): void {
    this.activeTab.set(tab);
  }

  copySnippet(): void {
    void navigator.clipboard?.writeText(this.activeSnippet());
  }
}
