/** Copy-ready markup for tooltip catalog tiles (import from `brightrail`). */
export const TOOLTIP_VARIATION_SNIPPETS = {
  defaultInfo: `<brightrail-button
  variant="outline"
  size="sm"
  iconLeft="info"
  brightrailTooltip="Helpful information about this item."
  brightrailTooltipPlacement="top"
>
  Default info
</brightrail-button>`,
  helper: `<brightrail-button
  variant="ghost"
  size="sm"
  iconLeft="help"
  brightrailTooltip="This helps you complete the task."
  brightrailTooltipPlacement="top"
>
  Helper
</brightrail-button>`,
  richContent: `<brightrail-button
  variant="outline"
  size="sm"
  [brightrailTooltip]="richTooltipTemplate"
  brightrailTooltipPlacement="top"
  [brightrailTooltipMaxWidth]="280"
>
  Rich content
</brightrail-button>

<ng-template #richTooltipTemplate>
  <div class="tooltip-rich">
    <div class="tooltip-rich__title">System update</div>
    <p class="tooltip-rich__body">Version 2.4.0 is now available with collaboration fixes.</p>
    <span class="tooltip-rich__link">Learn more →</span>
  </div>
</ng-template>`,
  iconTooltip: `<brightrail-icon-button
  ariaLabel="Add to favorites"
  brightrailTooltip="Add to favorites"
  brightrailTooltipPlacement="top"
>
  ♥
</brightrail-icon-button>`,
  placementTop: `<brightrail-button variant="outline" size="sm" brightrailTooltip="Top" brightrailTooltipPlacement="top">Top</brightrail-button>`,
  placementBottom: `<brightrail-button variant="outline" size="sm" brightrailTooltip="Bottom" brightrailTooltipPlacement="bottom">Bottom</brightrail-button>`,
  placementLeft: `<brightrail-button variant="outline" size="sm" brightrailTooltip="Left" brightrailTooltipPlacement="left">Left</brightrail-button>`,
  placementRight: `<brightrail-button variant="outline" size="sm" brightrailTooltip="Right" brightrailTooltipPlacement="right">Right</brightrail-button>`,
  triggerHover: `<brightrail-button variant="outline" size="sm" brightrailTooltip="Hover to open" brightrailTooltipTrigger="hover">Hover</brightrail-button>`,
  triggerFocus: `<brightrail-button variant="outline" size="sm" brightrailTooltip="Focused state" brightrailTooltipTrigger="focus">Focus</brightrail-button>`,
  triggerClick: `<brightrail-button variant="outline" size="sm" brightrailTooltip="Click outside to dismiss" brightrailTooltipTrigger="click">Click</brightrail-button>`,
  triggerDelayed: `<brightrail-button
  variant="outline"
  size="sm"
  brightrailTooltip="Opens after 600ms"
  brightrailTooltipTrigger="hover"
  [brightrailTooltipShowDelay]="600"
>
  Delayed
</brightrail-button>`,
  sizeSm: `<brightrail-button variant="outline" size="sm" iconLeft="info" brightrailTooltip="Small tooltip copy." brightrailTooltipSize="sm">Small</brightrail-button>`,
  sizeMd: `<brightrail-button
  variant="outline"
  size="md"
  iconLeft="info"
  brightrailTooltip="Medium is the default density for most enterprise surfaces."
  brightrailTooltipSize="md"
>
  Medium
</brightrail-button>`,
  sizeLg: `<brightrail-button
  variant="outline"
  size="lg"
  iconLeft="info"
  brightrailTooltip="Large tooltips give you room for multi-line guidance."
  brightrailTooltipSize="lg"
  [brightrailTooltipMaxWidth]="320"
>
  Large
</brightrail-button>`,
  semanticSuccess: `<span
  tabindex="0"
  brightrailTooltip="Everything looks good!"
  brightrailTooltipContentVariant="success"
  brightrailTooltipTrigger="focus"
>
  Success
</span>`,
  semanticWarning: `<span
  tabindex="0"
  brightrailTooltip="Be careful with this action."
  brightrailTooltipContentVariant="warning"
  brightrailTooltipTrigger="focus"
>
  Warning
</span>`,
  semanticError: `<span
  tabindex="0"
  brightrailTooltip="Action failed. Please retry."
  brightrailTooltipContentVariant="error"
  brightrailTooltipTrigger="focus"
>
  Error
</span>`,
  semanticInfo: `<span
  tabindex="0"
  brightrailTooltip="Here's some information."
  brightrailTooltipContentVariant="info"
  brightrailTooltipTrigger="focus"
>
  Info
</span>`,
  avatarRoster: `<brightrail-avatar
  kind="image"
  shape="circle"
  size="md"
  imageSrc="/images/avatar/avatar-02.png"
  imageAlt="Olivia"
  tooltip="Olivia Rhye · Product designer · London"
  tooltipPlacement="top"
  [tooltipMaxWidth]="260"
/>`,
  avatarInitials: `<brightrail-avatar
  kind="initials"
  name="Noah Williams"
  shape="circle"
  size="sm"
  tone="primary"
  tooltip="Noah Williams — click profile to edit"
  tooltipTrigger="hover"
/>`,
  metricDensity: `<span
  tabindex="0"
  brightrailTooltip="CPU utilization across the fleet"
  brightrailTooltipPlacement="top"
>
  CPU: 68%
</span>`,
  variantNeon: `<brightrail-button
  variant="ghost"
  size="sm"
  brightrailTooltip="Neon glow tooltip"
  brightrailTooltipVariant="neon"
  brightrailTooltipPlacement="top"
>
  Neon glow
</brightrail-button>`,
  variantHolographic: `<brightrail-button
  variant="ghost"
  size="sm"
  brightrailTooltip="Holographic readout"
  brightrailTooltipVariant="holographic"
  brightrailTooltipPlacement="top"
>
  Holographic
</brightrail-button>`,
  variantGlass: `<brightrail-button
  variant="ghost"
  size="sm"
  brightrailTooltip="Glassmorphism layer"
  brightrailTooltipVariant="glassmorphism"
  brightrailTooltipPlacement="top"
>
  Glassmorphism
</brightrail-button>`,
  variantCyber: `<brightrail-button
  variant="ghost"
  size="sm"
  brightrailTooltip="Cyber pulse frame"
  brightrailTooltipVariant="cyber-pulse"
  brightrailTooltipPlacement="top"
>
  Cyber pulse
</brightrail-button>`,
} as const;

export const TOOLTIP_DOC_SECTION_COUNT = 7;

export const TOOLTIP_HTML_EXAMPLES = `<brightrail-avatar
  kind="image"
  shape="circle"
  size="md"
  imageSrc="/images/avatar/avatar-02.png"
  imageAlt="Olivia"
  tooltip="Olivia Rhye · Product designer"
  tooltipPlacement="top"
  tooltipMaxWidth="260"
/>

<brightrail-button
  variant="outline"
  size="md"
  iconLeft="info"
  brightrailTooltip="Helpful information about this item."
  brightrailTooltipPlacement="top"
>
  Account details
</brightrail-button>`;
