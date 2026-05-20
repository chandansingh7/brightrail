/** Copy-ready markup for badge catalog tiles (consumers import from `brightrail`). */
export const BADGE_VARIATION_SNIPPETS = {
  coreSoftNew: `<brightrail-badge variant="soft" color="primary" label="New" />`,
  coreTonalCount: `<brightrail-badge variant="tonal" color="neutral" label="47" />`,
  coreOutlinedProduct: `<brightrail-badge variant="outlined" color="primary" label="Product" />`,
  coreFilledPrimary: `<brightrail-badge variant="filled" color="primary" label="Primary" />`,

  appearanceFilled: `<brightrail-badge variant="filled" color="primary" label="Filled" />`,
  appearanceOutlined: `<brightrail-badge variant="outlined" color="primary" label="Outlined" />`,
  appearanceTonal: `<brightrail-badge variant="tonal" color="primary" label="Tonal" />`,
  appearanceSoft: `<brightrail-badge variant="soft" color="primary" label="Soft" />`,

  sizeSmall: `<brightrail-badge variant="filled" color="primary" size="small" label="Small" />`,
  sizeMedium: `<brightrail-badge variant="filled" color="primary" size="medium" label="Medium" />`,
  sizeLarge: `<brightrail-badge variant="filled" color="primary" size="large" label="Large" />`,

  stateDefault: `<brightrail-badge variant="filled" color="primary" state="default" label="Default" />`,
  stateHover: `<brightrail-badge variant="filled" color="primary" state="hover" label="Hover" />`,
  stateActive: `<brightrail-badge variant="filled" color="primary" state="active" label="Active" />`,
  stateDisabled: `<brightrail-badge variant="filled" color="primary" state="disabled" label="Disabled" />`,

  notifBell: `<span class="bco-pill bco-pill--icon">
  <span class="bco-ico bco-ico--bell" aria-hidden="true"></span>
  <brightrail-badge variant="filled" color="primary" label="12" />
</span>`,
  notifAlert: `<span class="bco-pill bco-pill--icon">
  <span class="bco-ico bco-ico--alert" aria-hidden="true"></span>
  <brightrail-badge variant="filled" color="warning" label="3" />
</span>`,
  notifMail: `<span class="bco-pill bco-pill--icon">
  <span class="bco-ico bco-ico--mail" aria-hidden="true"></span>
  <brightrail-badge variant="filled" color="primary" label="99+" />
</span>`,
  notifTask: `<span class="bco-pill bco-pill--icon">
  <span class="bco-ico bco-ico--task" aria-hidden="true"></span>
  <brightrail-badge variant="filled" color="info" label="7" />
</span>`,

  statusActive: `<brightrail-badge variant="tonal" color="success" label="Active" icon="check" />`,
  statusPending: `<brightrail-badge variant="tonal" color="warning" label="Pending" />`,
  statusInProgress: `<brightrail-badge variant="tonal" color="info" label="In progress" />`,
  statusInactive: `<brightrail-badge variant="tonal" color="neutral" label="Inactive" />`,
  statusDisabled: `<brightrail-badge variant="tonal" color="neutral" state="disabled" label="Disabled" />`,

  dotOnline: `<brightrail-badge variant="filled" color="success" [dot]="true" label="Online" />`,
  dotAway: `<brightrail-badge variant="filled" color="warning" [dot]="true" label="Away" />`,
  dotDnd: `<brightrail-badge variant="filled" color="danger" [dot]="true" label="Do not disturb" />`,
  dotOffline: `<brightrail-badge variant="filled" color="neutral" [dot]="true" label="Offline" />`,
  dotCustom: `<brightrail-badge variant="filled" color="primary" [dot]="true" label="Custom" />`,

  enterpriseDashboard: `<span class="bco-pill">Dashboard <brightrail-badge variant="filled" color="primary" size="small" label="5" /></span>`,
  enterpriseAlerts: `<span class="bco-pill">Alerts <brightrail-badge variant="filled" color="danger" size="small" label="3" /></span>`,
  enterpriseMessages: `<span class="bco-pill">Messages <brightrail-badge variant="filled" color="primary" size="small" label="12" /></span>`,
  enterpriseAvatarsOverflow: `<span class="bco-pill bco-pill--avatars">
  <span class="bco-avatars" aria-hidden="true">
    <span class="bco-avatar">A</span><span class="bco-avatar">R</span><span class="bco-avatar">M</span><span class="bco-avatar">J</span>
  </span>
  <brightrail-badge variant="soft" color="neutral" size="small" label="+5" />
</span>`,
  enterprisePriorityHigh: `<span class="bco-pill"><brightrail-badge variant="tonal" color="warning" size="small" label="High" /></span>`,
  enterprisePriorityMedium: `<span class="bco-pill"><brightrail-badge variant="tonal" color="warning" size="small" label="Medium" /></span>`,
  enterprisePriorityLow: `<span class="bco-pill"><brightrail-badge variant="tonal" color="success" size="small" label="Low" /></span>`,
  enterpriseApproved: `<span class="bco-pill"><brightrail-badge variant="tonal" color="success" size="small" label="Approved" /></span>`,
  enterprisePending: `<span class="bco-pill"><brightrail-badge variant="tonal" color="warning" size="small" label="Pending" /></span>`,
  enterpriseRejected: `<span class="bco-pill"><brightrail-badge appearance="tonal" color="critical" size="small" label="Rejected" /></span>`,
  enterpriseDraft: `<span class="bco-pill"><brightrail-badge variant="soft" color="neutral" size="small" label="Draft" /></span>`,

  advancedProduction: `<span class="bco-pill"><brightrail-badge variant="tonal" color="success" size="small" label="Production" /></span>`,
  advancedStaging: `<span class="bco-pill"><brightrail-badge variant="tonal" color="info" size="small" label="Staging" /></span>`,
  advancedDevelopment: `<span class="bco-pill"><brightrail-badge variant="tonal" color="priority" size="small" label="Development" /></span>`,
  advancedSandbox: `<span class="bco-pill"><brightrail-badge variant="soft" color="neutral" size="small" label="Sandbox" /></span>`,
  advancedFinance: `<span class="bco-pill"><brightrail-badge variant="soft" color="primary" size="small" label="Finance" /></span>`,
  advancedHr: `<span class="bco-pill"><brightrail-badge variant="soft" color="success" size="small" label="HR" /></span>`,
  advancedIt: `<span class="bco-pill"><brightrail-badge variant="soft" color="priority" size="small" label="IT" /></span>`,
  advancedOps: `<span class="bco-pill"><brightrail-badge variant="soft" color="neutral" size="small" label="Ops" /></span>`,
  advancedGroupedCounts: `<span class="bco-pill bco-pill--grouped">
  <brightrail-badge variant="soft" color="success" size="small" label="3" />
  <brightrail-badge variant="soft" color="warning" size="small" label="1" />
  <brightrail-badge variant="soft" color="danger" size="small" label="2" />
  <brightrail-badge variant="soft" color="neutral" size="small" label="+4" />
</span>`,
  advancedOrderStatus: `<span class="bco-pill">Order #12345 <brightrail-badge variant="tonal" color="primary" size="small" label="In progress" /></span>`,
  advancedCriticalHigh: `<span class="bco-pill"><brightrail-badge appearance="tonal" color="critical" size="small" label="High" /></span>`,
} as const;

export const BADGE_DOC_SECTION_COUNT = 9;

export const BADGE_HTML_EXAMPLES = `<brightrail-badge variant="filled" color="primary" label="Primary" />

<span class="nav-item">
  Notifications
  <brightrail-badge variant="filled" color="primary" size="small" label="12" />
</span>

<brightrail-badge variant="tonal" color="success" label="Active" icon="check" />`;
