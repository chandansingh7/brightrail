import { CARD_PLAYGROUND_DEMO_IMAGES } from './card-playground.component';

/** Copy-ready markup for card catalog tiles (consumers import from `brightrail`). */
export const CARD_VARIATION_SNIPPETS = {
  coreBasic: `<brightrail-card appearance="basic" size="md">
  <brightrail-card-header>
    <h3>Card title</h3>
  </brightrail-card-header>
  <brightrail-card-content>
    <p>Flat surface with minimal chrome.</p>
  </brightrail-card-content>
</brightrail-card>`,

  coreElevated: `<brightrail-card appearance="elevated" size="md">
  <brightrail-card-header>
    <h3>Team performance</h3>
  </brightrail-card-header>
  <brightrail-card-content>
    <p>Monitor weekly delivery metrics and team updates.</p>
  </brightrail-card-content>
  <brightrail-card-actions align="between">
    <brightrail-button variant="primary">View details</brightrail-button>
    <span class="brightrail-text-secondary">Updated 10 min ago</span>
  </brightrail-card-actions>
</brightrail-card>`,

  coreOutlined: `<brightrail-card appearance="outlined" size="md">
  <brightrail-card-header>
    <h3>Review changes</h3>
  </brightrail-card-header>
  <brightrail-card-content>
    <p>Bordered surface for forms and confirmations.</p>
  </brightrail-card-content>
  <brightrail-card-footer>
    <brightrail-button variant="outline">Cancel</brightrail-button>
    <brightrail-button variant="primary">Save</brightrail-button>
  </brightrail-card-footer>
</brightrail-card>`,

  coreFilled: `<brightrail-card appearance="filled" size="md">
  <brightrail-card-header>
    <h3>Summary</h3>
  </brightrail-card-header>
  <brightrail-card-content>
    <p>Tinted background for grouped content blocks.</p>
  </brightrail-card-content>
</brightrail-card>`,

  layoutHorizontal: `<brightrail-card appearance="horizontal" size="md">
  <brightrail-card-media>
    <img class="card-demo-media-img" src="${CARD_PLAYGROUND_DEMO_IMAGES.horizontalThumb}" alt="" />
  </brightrail-card-media>
  <brightrail-card-header>
    <h3>Briefing pack</h3>
  </brightrail-card-header>
  <brightrail-card-content>
    <p>Media and copy in a horizontal row.</p>
  </brightrail-card-content>
  <brightrail-card-actions align="end">
    <brightrail-button variant="link" iconRight="chevron">Open</brightrail-button>
  </brightrail-card-actions>
</brightrail-card>`,

  layoutImage: `<brightrail-card appearance="image" size="md">
  <brightrail-card-media>
    <img class="card-demo-image" src="${CARD_PLAYGROUND_DEMO_IMAGES.imageLeadHero}" alt="Decorative artwork" />
  </brightrail-card-media>
  <brightrail-card-header>
    <h3>Featured launch</h3>
  </brightrail-card-header>
  <brightrail-card-content>
    <p>Hero image leads the card stack.</p>
  </brightrail-card-content>
  <brightrail-card-actions align="start">
    <brightrail-button variant="primary">View details</brightrail-button>
  </brightrail-card-actions>
</brightrail-card>`,

  layoutStats: `<brightrail-card appearance="stats" size="md">
  <brightrail-card-header>
    <p class="br-card-stat-label">Total revenue</p>
  </brightrail-card-header>
  <brightrail-card-content>
    <p class="br-card-stat-value">$24.8M</p>
    <p class="br-card-stat-trend">▲ 12.5% vs last month</p>
    <p>Compared to the prior rolling quarter.</p>
  </brightrail-card-content>
</brightrail-card>`,

  sizeSm: `<brightrail-card appearance="elevated" size="sm">
  <brightrail-card-header><h3>Small</h3></brightrail-card-header>
  <brightrail-card-content><p>Compact padding and type scale.</p></brightrail-card-content>
</brightrail-card>`,

  sizeMd: `<brightrail-card appearance="elevated" size="md">
  <brightrail-card-header><h3>Medium</h3></brightrail-card-header>
  <brightrail-card-content><p>Default card density.</p></brightrail-card-content>
</brightrail-card>`,

  sizeLg: `<brightrail-card appearance="elevated" size="lg">
  <brightrail-card-header><h3>Large</h3></brightrail-card-header>
  <brightrail-card-content><p>Roomier spacing for dashboards.</p></brightrail-card-content>
</brightrail-card>`,

  stateInteractive: `<brightrail-card appearance="elevated" size="md" [interactive]="true" (activated)="onCardActivate()">
  <brightrail-card-header><h3>Selectable row</h3></brightrail-card-header>
  <brightrail-card-content><p>Whole card is keyboard activatable.</p></brightrail-card-content>
</brightrail-card>`,

  stateDismissible: `<brightrail-card appearance="basic" size="sm" [dismissible]="true" (dismiss)="onDismiss()">
  <brightrail-card-header><h3>Heads up</h3></brightrail-card-header>
  <brightrail-card-content>
    <p>You can dismiss this card from the corner control.</p>
  </brightrail-card-content>
  <brightrail-card-actions align="end">
    <brightrail-button variant="link">View activity</brightrail-button>
  </brightrail-card-actions>
</brightrail-card>`,

  stateDisabled: `<brightrail-card appearance="elevated" size="md" state="disabled">
  <brightrail-card-header><h3>Disabled</h3></brightrail-card-header>
  <brightrail-card-content><p>Non-interactive muted surface.</p></brightrail-card-content>
</brightrail-card>`,

  stateFullWidth: `<brightrail-card appearance="outlined" size="md" [fullWidth]="true">
  <brightrail-card-header><h3>Full width</h3></brightrail-card-header>
  <brightrail-card-content><p>Stretches to the parent container.</p></brightrail-card-content>
</brightrail-card>`,

  patternTitledHeader: `<brightrail-card appearance="elevated" size="md">
  <brightrail-card-header [withTitle]="true" [showLeading]="true">
    <span class="br-card-header-chart-badge" brightrailCardHeaderLeading>
      <brightrail-icon name="show_chart" />
    </span>
    <span class="br-card-header-heading" brightrailCardHeaderTitle>Team performance</span>
  </brightrail-card-header>
  <brightrail-card-content>
    <p>Structured header row with leading slot.</p>
  </brightrail-card-content>
</brightrail-card>`,

  patternHeaderActions: `<brightrail-card appearance="elevated" size="md">
  <brightrail-card-header [withTitle]="true" [showLeading]="true">
    <span class="br-card-header-chart-badge" brightrailCardHeaderLeading>
      <brightrail-icon name="show_chart" />
    </span>
    <span class="br-card-header-heading" brightrailCardHeaderTitle>Team performance</span>
    <brightrail-icon-button ariaLabel="More options" brightrailCardHeaderActions>
      <brightrail-icon name="more_vert" />
    </brightrail-icon-button>
  </brightrail-card-header>
  <brightrail-card-content>
    <p>Overflow menu projected into header actions.</p>
  </brightrail-card-content>
</brightrail-card>`,

  patternActionsRow: `<brightrail-card appearance="elevated" size="md">
  <brightrail-card-header><h3>Delivery status</h3></brightrail-card-header>
  <brightrail-card-content><p>Primary action with supporting meta.</p></brightrail-card-content>
  <brightrail-card-actions align="between">
    <brightrail-button variant="primary">View details</brightrail-button>
    <span class="brightrail-text-secondary">Updated 10 min ago</span>
  </brightrail-card-actions>
</brightrail-card>`,

  patternFooterActions: `<brightrail-card appearance="outlined" size="md">
  <brightrail-card-header><h3>Confirm changes</h3></brightrail-card-header>
  <brightrail-card-content><p>Footer slot for paired actions.</p></brightrail-card-content>
  <brightrail-card-footer>
    <brightrail-button variant="outline">Cancel</brightrail-button>
    <brightrail-button variant="primary">Save</brightrail-button>
  </brightrail-card-footer>
</brightrail-card>`,

  enterpriseTeamDashboard: `<brightrail-card appearance="elevated" size="md">
  <brightrail-card-header [withTitle]="true" [showLeading]="true">
    <span class="br-card-header-chart-badge" brightrailCardHeaderLeading>
      <brightrail-icon name="show_chart" />
    </span>
    <span class="br-card-header-heading" brightrailCardHeaderTitle>Team performance</span>
    <brightrail-icon-button ariaLabel="More options" brightrailCardHeaderActions>
      <brightrail-icon name="more_vert" />
    </brightrail-icon-button>
  </brightrail-card-header>
  <brightrail-card-content>
    <p>Monitor weekly delivery metrics and team updates.</p>
  </brightrail-card-content>
  <brightrail-card-actions align="between">
    <brightrail-button variant="primary">View details</brightrail-button>
    <span class="brightrail-text-secondary">Updated 10 min ago</span>
  </brightrail-card-actions>
</brightrail-card>`,

  enterpriseStatsKpi: `<brightrail-card appearance="stats" size="md">
  <brightrail-card-header>
    <p class="br-card-stat-label">North star metric</p>
  </brightrail-card-header>
  <brightrail-card-content>
    <p class="br-card-stat-value">$24.8M</p>
    <p class="br-card-stat-trend">▲ 12.5% vs last month</p>
    <p>Compared to the prior rolling quarter.</p>
  </brightrail-card-content>
</brightrail-card>`,

  enterpriseHorizontalBrief: `<brightrail-card appearance="horizontal" size="md">
  <brightrail-card-media>
    <img class="card-demo-media-img" src="${CARD_PLAYGROUND_DEMO_IMAGES.horizontalThumb}" alt="" />
  </brightrail-card-media>
  <brightrail-card-header><h3>Briefing pack</h3></brightrail-card-header>
  <brightrail-card-content><p>Supporting copy for this card scenario.</p></brightrail-card-content>
  <brightrail-card-actions align="end">
    <brightrail-button variant="link" iconRight="chevron">Open</brightrail-button>
  </brightrail-card-actions>
</brightrail-card>`,

  enterpriseImageFeatured: `<brightrail-card appearance="image" size="md">
  <brightrail-card-media>
    <img class="card-demo-image" src="${CARD_PLAYGROUND_DEMO_IMAGES.imageLeadHero}" alt="Decorative artwork" />
  </brightrail-card-media>
  <brightrail-card-header><h3>Featured launch</h3></brightrail-card-header>
  <brightrail-card-content><p>Supporting copy for this card scenario.</p></brightrail-card-content>
  <brightrail-card-actions align="start">
    <brightrail-button variant="primary">View details</brightrail-button>
  </brightrail-card-actions>
</brightrail-card>`,
} as const;

export const CARD_DOC_SECTION_COUNT = 6;

export const CARD_HTML_EXAMPLES = `<brightrail-card appearance="elevated" size="md">
  <brightrail-card-header [withTitle]="true" [showLeading]="true">
    <span class="br-card-header-chart-badge" brightrailCardHeaderLeading>
      <brightrail-icon name="show_chart" />
    </span>
    <span class="br-card-header-heading" brightrailCardHeaderTitle>Team performance</span>
    <brightrail-icon-button ariaLabel="More options" brightrailCardHeaderActions>
      <brightrail-icon name="more_vert" />
    </brightrail-icon-button>
  </brightrail-card-header>
  <brightrail-card-content>
    <p>Monitor weekly delivery metrics and team updates.</p>
  </brightrail-card-content>
  <brightrail-card-actions align="between">
    <brightrail-button variant="primary">View details</brightrail-button>
    <span class="brightrail-text-secondary">Updated 10 min ago</span>
  </brightrail-card-actions>
</brightrail-card>

<brightrail-card appearance="horizontal" size="md">
  <brightrail-card-media>
    <img class="card-demo-media-img" src="${CARD_PLAYGROUND_DEMO_IMAGES.horizontalThumb}" alt="" />
  </brightrail-card-media>
  <brightrail-card-header><h3>Briefing pack</h3></brightrail-card-header>
  <brightrail-card-content><p>Media and copy in a horizontal row.</p></brightrail-card-content>
</brightrail-card>`;
