/** Copy-ready markup for chip catalog tiles (consumers import from `brightrail`). */
export const CHIP_VARIATION_SNIPPETS = {
  coreFilledProduct: `<brightrail-chip variant="filled" color="primary" label="Product" />`,
  coreOutlinedProduct: `<brightrail-chip variant="outlined" color="primary" label="Product" />`,
  coreSoftActive: `<brightrail-chip variant="soft" color="success" label="Active" />`,
  coreCompactProd: `<brightrail-chip variant="filled" color="info" size="compact" label="Prod" />`,

  appearanceFilled: `<brightrail-chip variant="filled" color="primary" label="Primary" />`,
  appearanceOutlined: `<brightrail-chip variant="outlined" color="primary" label="Primary" />`,
  appearanceSoft: `<brightrail-chip variant="soft" color="primary" label="Primary" />`,
  appearanceText: `<brightrail-chip variant="text" color="primary" label="Primary" />`,

  sizeSmall: `<brightrail-chip variant="filled" color="primary" size="small" label="Small" />`,
  sizeMedium: `<brightrail-chip variant="filled" color="primary" size="medium" label="Medium" />`,
  sizeLarge: `<brightrail-chip variant="filled" color="primary" size="large" label="Large" />`,

  stateDefault: `<brightrail-chip variant="filled" color="neutral" state="default" label="Default" />`,
  stateHover: `<brightrail-chip variant="filled" color="neutral" state="hover" label="Hover" />`,
  stateFocused: `<brightrail-chip variant="filled" color="neutral" state="focused" label="Focused" />`,
  stateDisabled: `<brightrail-chip variant="filled" color="neutral" state="disabled" label="Disabled" />`,

  interactiveEmail: `<brightrail-chip variant="outlined" color="neutral" icon="info" label="Email" />`,
  interactiveShare: `<brightrail-chip variant="outlined" color="neutral" icon="info" label="Share" />`,
  interactiveLearnMore: `<brightrail-chip variant="text" color="primary" label="Learn more" />`,
  interactiveViewDocs: `<brightrail-chip variant="text" color="primary" label="View docs" />`,

  filterAll: `<brightrail-chip variant="filled" color="neutral" size="small" label="All" />`,
  filterActive: `<brightrail-chip variant="filled" color="neutral" size="small" label="Active" />`,
  filterInactive: `<brightrail-chip variant="filled" color="neutral" size="small" label="Inactive" />`,
  filterSelected: `<brightrail-chip variant="filled" color="primary" size="small" [selectable]="true" [selected]="true" label="Selected" />`,

  removableMarketing: `<brightrail-chip variant="outlined" color="neutral" [removable]="true" label="Marketing" />`,
  removableDesign: `<brightrail-chip variant="outlined" color="neutral" [removable]="true" label="Design" />`,
  removableProduct: `<brightrail-chip variant="outlined" color="neutral" [removable]="true" label="Product" />`,

  iconDocs: `<brightrail-chip variant="outlined" color="neutral" icon="info" label="Docs" />`,
  iconUsers: `<brightrail-chip variant="outlined" color="neutral" icon="info" label="Users" />`,
  avatarJames: `<brightrail-chip variant="soft" color="neutral" avatarText="JN" label="James" />`,
  avatarSophia: `<brightrail-chip variant="soft" color="neutral" avatarText="SP" label="Sophia" />`,

  enterpriseFinance: `<brightrail-chip variant="soft" color="primary" size="small" label="Finance" />`,
  enterpriseHr: `<brightrail-chip variant="soft" color="success" size="small" label="HR" />`,
  enterpriseActive: `<brightrail-chip variant="soft" color="success" size="small" label="Active" />`,
  enterprisePending: `<brightrail-chip variant="soft" color="warning" size="small" label="Pending" />`,
  enterpriseEnterprise: `<brightrail-chip variant="soft" color="neutral" size="small" label="Enterprise" />`,

  advancedQuarterGroup: `<span class="cco-group">
  <brightrail-chip variant="outlined" color="neutral" size="small" label="Q1" />
  <brightrail-chip variant="outlined" color="primary" size="small" label="Q2" />
  <brightrail-chip variant="outlined" color="neutral" size="small" label="Q3" />
</span>`,
  advancedOverflow: `<brightrail-chip variant="outlined" color="neutral" size="small" label="+3" />`,
  advancedRemovableGroup: `<span class="cco-group">
  <brightrail-chip variant="outlined" color="neutral" size="small" [removable]="true" label="Important" />
  <brightrail-chip variant="outlined" color="warning" size="small" [removable]="true" label="Review" />
</span>`,
} as const;

export const CHIP_DOC_SECTION_COUNT = 10;

export const CHIP_HTML_EXAMPLES = `<brightrail-chip variant="filled" color="primary" label="Product" />

<brightrail-chip variant="outlined" color="neutral" [removable]="true" label="Marketing" />

<brightrail-chip variant="filled" color="primary" size="small" [selectable]="true" [selected]="true" label="Selected" />`;
