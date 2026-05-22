import { FormsModule } from '@angular/forms';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';

import { PlaygroundPreviewHeaderComponent } from '../shared/playground-preview-header.component';
import {
  injectPlaygroundA11yPreviewMode,
  initPlaygroundA11yPreview,
} from '../shared/playground-a11y-preview.utils';
import {
  BrightrailAvatarBorderStyle,
  BrightrailAvatarComponent,
  BrightrailAvatarEnterpriseRole,
  BrightrailAvatarGroupComponent,
  BrightrailAvatarKind,
  BrightrailAvatarShape,
  BrightrailAvatarSize,
  BrightrailAvatarState,
  BrightrailAvatarStatus,
  BrightrailAvatarStatusPosition,
  BrightrailAvatarTone,
  BrightrailAvatarVariant,
  BrightrailButtonIcon,
  BrightrailTooltipContentVariant,
  BrightrailTooltipPlacement,
  BrightrailTooltipSize,
  BrightrailTooltipTrigger,
  BrightrailTooltipVariant,
  BrightrailTooltipWidthMode,
} from 'brightrail';

import { PlaygroundThemeId, PlaygroundThemeService } from '../playground-theme.service';
import {
  FF_AVATAR_DEFAULT_SRC,
  FF_AVATAR_PROFILE_ALT_SRC,
  FF_AVATAR_PUBLIC,
  FF_AVATAR_STACK_SRC,
} from '../avatar/avatar-demo-assets';

type CodeTabId = 'html' | 'ts' | 'scss';
type AvatarRecipe =
  | 'user-avatar'
  | 'user-initials'
  | 'user-icon'
  | 'profile-card'
  | 'stacked-group'
  | 'enterprise-assignee'
  | 'enterprise-team'
  | 'enterprise-reviewer'
  | 'enterprise-comment'
  | 'futuristic-neon'
  | 'futuristic-ai'
  | 'futuristic-glass'
  | 'futuristic-cyber'
  | 'futuristic-sci-fi'
  | 'ref-shapes'
  | 'ref-sizes'
  | 'ref-states'
  | 'ref-presence';

type PreviewLayout = 'single' | 'group';

type AvatarA11yPreviewState = {
  previewRecipe: AvatarRecipe;
  previewLayout: PreviewLayout;
  kind: BrightrailAvatarKind;
  shape: BrightrailAvatarShape;
  size: BrightrailAvatarSize;
  variant: BrightrailAvatarVariant;
  borderStyle: BrightrailAvatarBorderStyle;
  status: BrightrailAvatarStatus;
  statusPosition: BrightrailAvatarStatusPosition;
  enterpriseRole: BrightrailAvatarEnterpriseRole;
  state: BrightrailAvatarState;
  tone: BrightrailAvatarTone;
  icon: BrightrailButtonIcon;
  imageSrc: string;
  imageAlt: string;
  displayName: string;
  initials: string;
  label: string;
  subtitle: string;
  showProfileMeta: boolean;
  diameter: string;
  ringColor: string;
  glowColor: string;
  badgeScale: number;
};

import { createPlaygroundPreviewFx } from '../shared/playground-fx.util';
import { PlaygroundFxSettingsComponent } from '../shared/playground-fx-settings.component';
@Component({
  selector: 'app-avatar-playground',
  standalone: true,
  imports: [
    PlaygroundPreviewHeaderComponent,FormsModule, BrightrailAvatarComponent, BrightrailAvatarGroupComponent, PlaygroundFxSettingsComponent],
  templateUrl: './avatar-playground.component.html',
  styleUrl: './avatar-playground.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarPlaygroundComponent {
  readonly previewOnly = injectPlaygroundA11yPreviewMode();
  readonly a11yPreviewState = computed<AvatarA11yPreviewState>(() => ({
    previewRecipe: this.previewRecipe(),
    previewLayout: this.previewLayout(),
    kind: this.kind(),
    shape: this.shape(),
    size: this.size(),
    variant: this.variant(),
    borderStyle: this.borderStyle(),
    status: this.status(),
    statusPosition: this.statusPosition(),
    enterpriseRole: this.enterpriseRole(),
    state: this.state(),
    tone: this.tone(),
    icon: this.icon(),
    imageSrc: this.imageSrc(),
    imageAlt: this.imageAlt(),
    displayName: this.displayName(),
    initials: this.initials(),
    label: this.label(),
    subtitle: this.subtitle(),
    showProfileMeta: this.showProfileMeta(),
    diameter: this.diameter(),
    ringColor: this.ringColor(),
    glowColor: this.glowColor(),
    badgeScale: this.badgeScale(),
  }));

  readonly themeService = inject(PlaygroundThemeService);
  private readonly _playgroundFx = createPlaygroundPreviewFx();
  readonly previewFx = this._playgroundFx.previewFx;
  readonly resolvedFxShell = this._playgroundFx.resolvedFxShell;

  constructor() {
    let restored = false;
    initPlaygroundA11yPreview('avatar', this.previewOnly, (state) => {
      this.restoreA11yPreviewState(state);
      restored = true;
    });
    if (!restored) {
      this.applyRecipe('user-avatar');
    }
  }

  private restoreA11yPreviewState(state: unknown): void {
    if (!state || typeof state !== 'object') {
      return;
    }
    const s = state as Partial<AvatarA11yPreviewState>;
    if (s.previewRecipe) {
      this.previewRecipe.set(s.previewRecipe);
      this.applyRecipe(s.previewRecipe);
      return;
    }
    if (s.previewLayout) this.previewLayout.set(s.previewLayout);
    if (s.kind) this.kind.set(s.kind);
    if (s.shape) this.shape.set(s.shape);
    if (s.size) this.size.set(s.size);
    if (s.variant) this.variant.set(s.variant);
    if (s.borderStyle) this.borderStyle.set(s.borderStyle);
    if (s.status) this.status.set(s.status);
    if (s.statusPosition) this.statusPosition.set(s.statusPosition);
    if (s.enterpriseRole) this.enterpriseRole.set(s.enterpriseRole);
    if (s.state) this.state.set(s.state);
    if (s.tone) this.tone.set(s.tone);
    if (s.icon) this.icon.set(s.icon);
    if (typeof s.imageSrc === 'string') this.imageSrc.set(s.imageSrc);
    if (typeof s.imageAlt === 'string') this.imageAlt.set(s.imageAlt);
    if (typeof s.displayName === 'string') this.displayName.set(s.displayName);
    if (typeof s.initials === 'string') this.initials.set(s.initials);
    if (typeof s.label === 'string') this.label.set(s.label);
    if (typeof s.subtitle === 'string') this.subtitle.set(s.subtitle);
    if (typeof s.showProfileMeta === 'boolean') this.showProfileMeta.set(s.showProfileMeta);
    if (typeof s.diameter === 'string') this.diameter.set(s.diameter);
    if (typeof s.ringColor === 'string') this.ringColor.set(s.ringColor);
    if (typeof s.glowColor === 'string') this.glowColor.set(s.glowColor);
    if (typeof s.badgeScale === 'number') this.badgeScale.set(s.badgeScale);
  }

  readonly recipeGroups = ['Profile', 'Reference', 'Enterprise', 'Futuristic'] as const;
  readonly recipeOptions: { value: AvatarRecipe; label: string; group: string }[] = [
    { value: 'user-avatar', label: 'User avatar', group: 'Profile' },
    { value: 'user-initials', label: 'Initials avatar', group: 'Profile' },
    { value: 'user-icon', label: 'Icon avatar', group: 'Profile' },
    { value: 'profile-card', label: 'Profile + subtitle', group: 'Profile' },
    { value: 'stacked-group', label: 'Stacked group', group: 'Profile' },
    { value: 'ref-shapes', label: 'Shapes (circle · rounded · square)', group: 'Reference' },
    { value: 'ref-sizes', label: 'Sizes (xs → xl)', group: 'Reference' },
    { value: 'ref-states', label: 'States (hover · active · disabled)', group: 'Reference' },
    { value: 'ref-presence', label: 'Presence (online · away · busy · offline)', group: 'Reference' },
    { value: 'enterprise-assignee', label: 'Enterprise · assignee', group: 'Enterprise' },
    { value: 'enterprise-team', label: 'Enterprise · team member', group: 'Enterprise' },
    { value: 'enterprise-reviewer', label: 'Enterprise · reviewer', group: 'Enterprise' },
    { value: 'enterprise-comment', label: 'Enterprise · comment', group: 'Enterprise' },
    { value: 'futuristic-neon', label: 'Neon presence ring', group: 'Futuristic' },
    { value: 'futuristic-ai', label: 'AI assistant shell', group: 'Futuristic' },
    { value: 'futuristic-glass', label: 'Glassmorphism', group: 'Futuristic' },
    { value: 'futuristic-cyber', label: 'Cyber frame', group: 'Futuristic' },
    { value: 'futuristic-sci-fi', label: 'Sci‑fi hex badge', group: 'Futuristic' },
  ];

  /** Settings labels match the Avatar playground reference layout. */
  readonly kindUiOptions: { value: BrightrailAvatarKind; label: string }[] = [
    { value: 'image', label: 'Image' },
    { value: 'initials', label: 'Initials' },
    { value: 'icon', label: 'Icon' },
  ];
  readonly variantUiOptions: { value: BrightrailAvatarVariant; label: string }[] = [
    { value: 'default', label: 'Default' },
    { value: 'presence-ring', label: 'Presence ring' },
    { value: 'neon', label: 'Neon' },
    { value: 'ai-assistant', label: 'AI assistant' },
    { value: 'glassmorphism', label: 'Glassmorphism' },
    { value: 'cyber', label: 'Cyber' },
    { value: 'sci-fi-badge', label: 'Sci-fi badge' },
  ];
  readonly shapeUiOptions: { value: BrightrailAvatarShape; label: string }[] = [
    { value: 'circle', label: 'Circle' },
    { value: 'rounded-square', label: 'Rounded square' },
    { value: 'square', label: 'Square' },
  ];
  readonly sizeUiOptions: { value: BrightrailAvatarSize; label: string }[] = [
    { value: 'xs', label: 'XS (16px)' },
    { value: 'sm', label: 'Small (24px)' },
    { value: 'md', label: 'Medium (32px)' },
    { value: 'lg', label: 'Large (48px)' },
    { value: 'xl', label: 'XL (64px)' },
  ];
  readonly borderUiOptions: { value: BrightrailAvatarBorderStyle; label: string }[] = [
    { value: 'none', label: 'None' },
    { value: 'subtle', label: 'Subtle' },
    { value: 'soft-glow', label: 'Soft glow' },
    { value: 'ring', label: 'Ring' },
    { value: 'hard-edge', label: 'Hard edge' },
  ];
  readonly statusUiOptions: { value: BrightrailAvatarStatus; label: string }[] = [
    { value: 'none', label: 'None' },
    { value: 'online', label: 'Online' },
    { value: 'away', label: 'Away' },
    { value: 'busy', label: 'Busy' },
    { value: 'offline', label: 'Offline' },
  ];
  readonly statusPositionUiOptions: { value: BrightrailAvatarStatusPosition; label: string }[] = [
    { value: 'bottom-right', label: 'Bottom right' },
    { value: 'bottom-left', label: 'Bottom left' },
    { value: 'top-right', label: 'Top right' },
    { value: 'top-left', label: 'Top left' },
  ];
  readonly enterpriseUiOptions: { value: BrightrailAvatarEnterpriseRole; label: string }[] = [
    { value: 'none', label: 'None' },
    { value: 'assignee', label: 'Assignee' },
    { value: 'team-member', label: 'Team member' },
    { value: 'reviewer', label: 'Reviewer' },
    { value: 'comment', label: 'Comment' },
  ];
  readonly stateUiOptions: { value: BrightrailAvatarState; label: string }[] = [
    { value: 'default', label: 'Default' },
    { value: 'hover', label: 'Hover' },
    { value: 'active', label: 'Active' },
    { value: 'disabled', label: 'Disabled' },
  ];
  readonly toneUiOptions: { value: BrightrailAvatarTone; label: string }[] = [
    { value: 'primary', label: 'Primary' },
    { value: 'success', label: 'Success' },
    { value: 'warning', label: 'Warning' },
    { value: 'danger', label: 'Danger' },
    { value: 'info', label: 'Info' },
    { value: 'neutral', label: 'Neutral' },
    { value: 'priority', label: 'Priority' },
  ];
  readonly iconOptions: BrightrailButtonIcon[] = ['user', 'info', 'gear', 'bell', 'headset'];
  readonly themeRowOptions: { id: PlaygroundThemeId; label: string }[] = [
    { id: 'light', label: 'Material light' },
    { id: 'dark', label: 'Material dark' },
  ];

  readonly selectedRecipeGroup = signal<string>('Profile');
  readonly previewRecipe = signal<AvatarRecipe>('user-avatar');
  readonly previewLayout = signal<PreviewLayout>('single');

  readonly kind = signal<BrightrailAvatarKind>('image');
  readonly shape = signal<BrightrailAvatarShape>('circle');
  readonly size = signal<BrightrailAvatarSize>('lg');
  readonly variant = signal<BrightrailAvatarVariant>('presence-ring');
  readonly borderStyle = signal<BrightrailAvatarBorderStyle>('soft-glow');
  readonly status = signal<BrightrailAvatarStatus>('online');
  readonly statusPosition = signal<BrightrailAvatarStatusPosition>('bottom-right');
  readonly enterpriseRole = signal<BrightrailAvatarEnterpriseRole>('none');
  readonly state = signal<BrightrailAvatarState>('default');
  readonly tone = signal<BrightrailAvatarTone>('primary');
  readonly icon = signal<BrightrailButtonIcon>('user');
  readonly imageSrc = signal<string>(FF_AVATAR_DEFAULT_SRC);
  readonly imageAlt = signal('Sophia Carter');
  readonly displayName = signal('Sophia Carter');
  readonly initials = signal('');
  readonly label = signal('Sophia Carter');
  readonly subtitle = signal('Product designer');
  readonly showProfileMeta = signal(true);
  readonly themeToken = signal('material-light');
  readonly diameter = signal('');
  readonly ringColor = signal('');
  readonly glowColor = signal('');
  readonly badgeScale = signal(1);

  /** Optional tooltip on the avatar host (forwarded via hostDirectives). */
  readonly avatarTooltip = signal('');
  readonly avatarTooltipPlacement = signal<BrightrailTooltipPlacement>('top');
  readonly avatarTooltipTrigger = signal<BrightrailTooltipTrigger>('hover');
  readonly avatarTooltipContentVariant = signal<BrightrailTooltipContentVariant>('default');
  readonly avatarTooltipVariant = signal<BrightrailTooltipVariant>('default');
  readonly avatarTooltipSize = signal<BrightrailTooltipSize>('md');
  readonly avatarTooltipWidthMode = signal<BrightrailTooltipWidthMode>('auto');
  readonly avatarTooltipShowArrow = signal(true);
  readonly avatarTooltipShowDelay = signal(0);
  readonly avatarTooltipMaxWidth = signal(260);

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

  recipesInGroup(group: string): { value: AvatarRecipe; label: string }[] {
    return this.recipeOptions.filter((r) => r.group === group).map((r) => ({ value: r.value, label: r.label }));
  }

  onRecipeGroupNgModelChange(v: string): void {
    this.selectedRecipeGroup.set(v);
    const first = this.recipesInGroup(v)[0]?.value;
    if (first) this.onRecipeNgModelChange(first);
  }

  onRecipeNgModelChange(v: string): void {
    const recipe = v as AvatarRecipe;
    this.previewRecipe.set(recipe);
    this.applyRecipe(recipe);
  }

  applyRecipe(recipe: AvatarRecipe): void {
    this.previewLayout.set('single');
    this.showProfileMeta.set(false);
    this.enterpriseRole.set('none');
    this.status.set('none');
    this.diameter.set('');
    this.ringColor.set('');
    this.glowColor.set('');
    this.badgeScale.set(1);
    this.avatarTooltip.set('');
    this.avatarTooltipPlacement.set('top');
    this.avatarTooltipTrigger.set('hover');
    this.avatarTooltipContentVariant.set('default');
    this.avatarTooltipVariant.set('default');
    this.avatarTooltipSize.set('md');
    this.avatarTooltipWidthMode.set('auto');
    this.avatarTooltipShowArrow.set(true);
    this.avatarTooltipShowDelay.set(0);
    this.avatarTooltipMaxWidth.set(260);

    switch (recipe) {
      case 'user-avatar':
        this.kind.set('image');
        this.shape.set('circle');
        this.size.set('lg');
        this.variant.set('presence-ring');
        this.borderStyle.set('soft-glow');
        this.status.set('online');
        this.state.set('default');
        this.tone.set('primary');
        this.imageSrc.set(FF_AVATAR_DEFAULT_SRC);
        this.label.set('Sophia Carter');
        this.subtitle.set('Product designer');
        this.displayName.set('Sophia Carter');
        this.imageAlt.set('Sophia Carter');
        this.showProfileMeta.set(true);
        this.themeToken.set('material-light');
        this.avatarTooltip.set('Sophia Carter · Product designer · View profile for details');
        this.avatarTooltipPlacement.set('top');
        break;
      case 'user-initials':
        this.kind.set('initials');
        this.shape.set('circle');
        this.size.set('md');
        this.variant.set('default');
        this.borderStyle.set('none');
        this.status.set('none');
        this.tone.set('primary');
        this.initials.set('');
        this.displayName.set('Jamie Doe');
        this.label.set('');
        this.subtitle.set('');
        break;
      case 'user-icon':
        this.kind.set('icon');
        this.shape.set('circle');
        this.size.set('md');
        this.variant.set('default');
        this.borderStyle.set('subtle');
        this.tone.set('neutral');
        this.icon.set('user');
        this.label.set('');
        this.subtitle.set('');
        break;
      case 'profile-card':
        this.kind.set('image');
        this.shape.set('circle');
        this.size.set('lg');
        this.variant.set('default');
        this.borderStyle.set('subtle');
        this.status.set('online');
        this.imageSrc.set(FF_AVATAR_PROFILE_ALT_SRC);
        this.label.set('Alex Rivera');
        this.subtitle.set('Engineering lead');
        this.displayName.set('Alex Rivera');
        this.imageAlt.set('Alex Rivera');
        this.showProfileMeta.set(true);
        break;
      case 'stacked-group':
        this.previewLayout.set('group');
        this.kind.set('initials');
        this.shape.set('circle');
        this.size.set('md');
        this.variant.set('default');
        this.borderStyle.set('ring');
        this.tone.set('primary');
        this.initials.set('A');
        this.displayName.set('Stack demo');
        this.label.set('');
        this.subtitle.set('');
        break;
      case 'ref-shapes':
        this.kind.set('image');
        this.size.set('md');
        this.variant.set('default');
        this.borderStyle.set('subtle');
        this.imageSrc.set(FF_AVATAR_DEFAULT_SRC);
        this.label.set('');
        this.subtitle.set('');
        this.showProfileMeta.set(false);
        break;
      case 'ref-sizes':
        this.kind.set('initials');
        this.variant.set('default');
        this.borderStyle.set('none');
        this.tone.set('primary');
        this.size.set('md');
        this.initials.set('');
        this.displayName.set('Jamie Doe');
        this.label.set('');
        this.subtitle.set('');
        this.showProfileMeta.set(false);
        break;
      case 'ref-states':
        this.kind.set('initials');
        this.size.set('md');
        this.variant.set('default');
        this.borderStyle.set('subtle');
        this.tone.set('neutral');
        this.state.set('default');
        this.initials.set('S');
        this.displayName.set('');
        this.label.set('');
        this.subtitle.set('');
        this.showProfileMeta.set(false);
        break;
      case 'ref-presence':
        this.kind.set('image');
        this.size.set('md');
        this.variant.set('default');
        this.borderStyle.set('subtle');
        this.imageSrc.set(FF_AVATAR_DEFAULT_SRC);
        this.status.set('online');
        this.label.set('');
        this.subtitle.set('');
        this.showProfileMeta.set(false);
        break;
      case 'enterprise-assignee':
        this.kind.set('image');
        this.shape.set('circle');
        this.size.set('md');
        this.variant.set('default');
        this.borderStyle.set('subtle');
        this.imageSrc.set(FF_AVATAR_PUBLIC.a04);
        this.enterpriseRole.set('assignee');
        this.status.set('none');
        break;
      case 'enterprise-team':
        this.kind.set('initials');
        this.initials.set('TM');
        this.tone.set('warning');
        this.enterpriseRole.set('team-member');
        this.shape.set('circle');
        this.size.set('md');
        break;
      case 'enterprise-reviewer':
        this.kind.set('icon');
        this.icon.set('info');
        this.tone.set('info');
        this.enterpriseRole.set('reviewer');
        this.shape.set('circle');
        this.size.set('md');
        break;
      case 'enterprise-comment':
        this.kind.set('initials');
        this.initials.set('C');
        this.tone.set('priority');
        this.enterpriseRole.set('comment');
        this.shape.set('circle');
        this.size.set('md');
        break;
      case 'futuristic-neon':
        this.kind.set('image');
        this.variant.set('neon');
        this.borderStyle.set('none');
        this.status.set('online');
        this.imageSrc.set(FF_AVATAR_PUBLIC.a05);
        this.glowColor.set('#22d3ee');
        break;
      case 'futuristic-ai':
        this.kind.set('icon');
        this.icon.set('gear');
        this.variant.set('ai-assistant');
        this.borderStyle.set('none');
        this.tone.set('neutral');
        break;
      case 'futuristic-glass':
        this.kind.set('image');
        this.variant.set('glassmorphism');
        this.borderStyle.set('none');
        this.shape.set('rounded-square');
        this.imageSrc.set(FF_AVATAR_PUBLIC.a06);
        break;
      case 'futuristic-cyber':
        this.kind.set('image');
        this.variant.set('cyber');
        this.borderStyle.set('none');
        this.shape.set('square');
        this.imageSrc.set(FF_AVATAR_PUBLIC.a07);
        break;
      case 'futuristic-sci-fi':
        this.kind.set('image');
        this.variant.set('sci-fi-badge');
        this.borderStyle.set('none');
        this.shape.set('circle');
        this.imageSrc.set(FF_AVATAR_PUBLIC.a08);
        break;
    }
  }

  selectTab(tab: CodeTabId): void {
    this.activeTab.set(tab);
  }

  resetToDefaults(): void {
    this.previewFx.set('inherit');
    this.selectedRecipeGroup.set('Profile');
    this.onRecipeNgModelChange('user-avatar');
    this.themeService.setTheme('light');
    this.activeTab.set('html');
  }

  copySnippet(): void {
    void navigator.clipboard?.writeText(this.activeSnippet());
  }

  readonly stackDemoImage = FF_AVATAR_STACK_SRC;

  /** Design-doc style: `lg` is emitted as `large` (supported by the component). */
  snippetSizeValue(): string {
    return this.size() === 'lg' ? 'large' : this.size();
  }

  private buildHtml(): string {
    if (this.previewLayout() === 'group') {
      return [
        '<brightrail-avatar-group maxVisible="3" ariaLabel="Team members">',
        '  <brightrail-avatar shape="circle" size="md" imageSrc="' + this.stackDemoImage + '" imageAlt="One" />',
        '  <brightrail-avatar kind="initials" initials="B" shape="circle" size="md" tone="success" />',
        '  <brightrail-avatar kind="initials" initials="C" shape="circle" size="md" tone="warning" />',
        '  <brightrail-avatar kind="initials" initials="D" shape="circle" size="md" tone="neutral" />',
        '</brightrail-avatar-group>',
      ].join('\n');
    }

    const lines: string[] = ['<brightrail-avatar'];
    if (this.kind() !== 'image') {
      lines.push(`  kind="${this.kind()}"`);
    }
    if (this.kind() === 'image') {
      lines.push(`  imageSrc="${this.imageSrc()}"`);
      lines.push(`  imageAlt="${this.imageAlt()}"`);
    }
    if (this.kind() === 'initials') {
      if (this.initials().trim()) {
        lines.push(`  initials="${this.initials()}"`);
      }
      if (this.displayName().trim()) {
        lines.push(`  name="${this.displayName()}"`);
      }
    }
    if (this.kind() === 'icon') {
      lines.push(`  icon="${this.icon()}"`);
    }
    lines.push(`  shape="${this.shape()}"`);
    lines.push(`  size="${this.snippetSizeValue()}"`);
    lines.push(`  variant="${this.variant()}"`);
    lines.push(`  borderStyle="${this.borderStyle()}"`);
    if (this.status() !== 'none' && this.enterpriseRole() === 'none') {
      lines.push(`  status="${this.status()}"`);
    }
    if (this.statusPosition() !== 'bottom-right') {
      lines.push(`  statusPosition="${this.statusPosition()}"`);
    }
    if (this.enterpriseRole() !== 'none') {
      lines.push(`  enterpriseRole="${this.enterpriseRole()}"`);
    }
    lines.push(`  state="${this.state()}"`);
    lines.push(`  tone="${this.tone()}"`);
    if (this.showProfileMeta() && (this.label().trim() || this.subtitle().trim())) {
      if (this.label().trim()) lines.push(`  label="${this.label()}"`);
      if (this.subtitle().trim()) lines.push(`  subtitle="${this.subtitle()}"`);
      lines.push('  [showProfileMeta]="true"');
    }
    if (this.themeToken().trim()) {
      lines.push(`  theme="${this.themeToken()}"`);
    }
    if (this.diameter().trim()) {
      lines.push(`  diameter="${this.diameter()}"`);
    }
    if (this.ringColor().trim()) {
      lines.push(`  ringColor="${this.ringColor()}"`);
    }
    if (this.glowColor().trim()) {
      lines.push(`  glowColor="${this.glowColor()}"`);
    }
    if (this.badgeScale() !== 1) {
      lines.push(`  [badgeScale]="${this.badgeScale()}"`);
    }
    const tip = this.avatarTooltip().trim();
    if (tip.length > 0) {
      lines.push(`  tooltip=${JSON.stringify(tip)}`);
      if (this.avatarTooltipPlacement() !== 'top') {
        lines.push(`  tooltipPlacement="${this.avatarTooltipPlacement()}"`);
      }
      if (this.avatarTooltipTrigger() !== 'hover') {
        lines.push(`  tooltipTrigger="${this.avatarTooltipTrigger()}"`);
      }
      if (this.avatarTooltipContentVariant() !== 'default') {
        lines.push(`  tooltipContentVariant="${this.avatarTooltipContentVariant()}"`);
      }
      if (this.avatarTooltipVariant() !== 'default') {
        lines.push(`  tooltipVariant="${this.avatarTooltipVariant()}"`);
      }
      if (this.avatarTooltipSize() !== 'md') {
        lines.push(`  tooltipSize="${this.avatarTooltipSize()}"`);
      }
      if (this.avatarTooltipWidthMode() !== 'auto') {
        lines.push(`  tooltipWidthMode="${this.avatarTooltipWidthMode()}"`);
      }
      if (!this.avatarTooltipShowArrow()) {
        lines.push('  [tooltipShowArrow]="false"');
      }
      if (this.avatarTooltipShowDelay() !== 0) {
        lines.push(`  [tooltipShowDelay]="${this.avatarTooltipShowDelay()}"`);
      }
      if (this.avatarTooltipMaxWidth() !== 260) {
        lines.push(`  [tooltipMaxWidth]="${this.avatarTooltipMaxWidth()}"`);
      }
    }
    lines.push('/>');
    return lines.join('\n');
  }

  private buildTs(): string {
    return [
      "import { BrightrailAvatarComponent, BrightrailAvatarGroupComponent } from 'brightrail';",
      '',
      '// imports: [BrightrailAvatarComponent, BrightrailAvatarGroupComponent]',
    ].join('\n');
  }

  private buildScss(): string {
    return [
      '/* Optional: theme hooks */',
      'brightrail-avatar[data-theme="material-light"] {',
      '  /* override tokens or radii per app theme */',
      '}',
      '',
      'brightrail-avatar-group {',
      '  --br-avatar-group-overlap: -0.55rem;',
      '}',
    ].join('\n');
  }
}
