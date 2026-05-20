/** Copy-ready markup for tooltip catalog tiles (import `BrightrailTooltipDirective` from `brightrail`). */
export const TOOLTIP_VARIATION_SNIPPETS = {
  defaultInfo: `<button
  type="button"
  brightrailTooltip="Helpful information about this item."
  brightrailTooltipPlacement="top"
>
  <brightrail-button-icon name="info" />
  Default info
</button>`,
  helper: `<button
  type="button"
  brightrailTooltip="This helps you complete the task."
  brightrailTooltipPlacement="top"
>
  Helper
</button>`,
  richContent: `<button
  type="button"
  [brightrailTooltip]="richTooltipTemplate"
  brightrailTooltipPlacement="top"
  [brightrailTooltipMaxWidth]="280"
>
  Rich content
</button>

<ng-template #richTooltipTemplate>
  <div class="tooltip-rich">
    <div class="tooltip-rich__title">System update</div>
    <p class="tooltip-rich__body">Version 2.4.0 is now available with collaboration fixes.</p>
    <span class="tooltip-rich__link">Learn more →</span>
  </div>
</ng-template>`,
  iconTooltip: `<button
  type="button"
  brightrailTooltip="Add to favorites"
  brightrailTooltipPlacement="top"
>
  Icon tooltip
</button>`,
  placementTop: `<button type="button" brightrailTooltip="Top" brightrailTooltipPlacement="top">Top</button>`,
  placementBottom: `<button type="button" brightrailTooltip="Bottom" brightrailTooltipPlacement="bottom">Bottom</button>`,
  placementLeft: `<button type="button" brightrailTooltip="Left" brightrailTooltipPlacement="left">Left</button>`,
  placementRight: `<button type="button" brightrailTooltip="Right" brightrailTooltipPlacement="right">Right</button>`,
  triggerHover: `<button type="button" brightrailTooltip="Hover to open" brightrailTooltipTrigger="hover">Hover</button>`,
  triggerFocus: `<button type="button" brightrailTooltip="Focused state" brightrailTooltipTrigger="focus">Focus</button>`,
  triggerClick: `<button type="button" brightrailTooltip="Click outside to dismiss" brightrailTooltipTrigger="click">Click</button>`,
  triggerDelayed: `<button
  type="button"
  brightrailTooltip="Opens after 600ms"
  brightrailTooltipTrigger="hover"
  [brightrailTooltipShowDelay]="600"
>
  Delayed
</button>`,
  sizeSm: `<button type="button" brightrailTooltip="Small tooltip copy." brightrailTooltipSize="sm">Small</button>`,
  sizeMd: `<button
  type="button"
  brightrailTooltip="Medium is the default density for most enterprise surfaces."
  brightrailTooltipSize="md"
>
  Medium
</button>`,
  sizeLg: `<button
  type="button"
  brightrailTooltip="Large tooltips give you room for multi-line guidance."
  brightrailTooltipSize="lg"
  [brightrailTooltipMaxWidth]="320"
>
  Large
</button>`,
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
  variantNeon: `<button
  type="button"
  brightrailTooltip="Neon glow tooltip"
  brightrailTooltipVariant="neon"
  brightrailTooltipPlacement="top"
>
  Neon glow
</button>`,
  variantHolographic: `<button
  type="button"
  brightrailTooltip="Holographic readout"
  brightrailTooltipVariant="holographic"
  brightrailTooltipPlacement="top"
>
  Holographic
</button>`,
  variantGlass: `<button
  type="button"
  brightrailTooltip="Glassmorphism layer"
  brightrailTooltipVariant="glassmorphism"
  brightrailTooltipPlacement="top"
>
  Glassmorphism
</button>`,
  variantCyber: `<button
  type="button"
  brightrailTooltip="Cyber pulse frame"
  brightrailTooltipVariant="cyber-pulse"
  brightrailTooltipPlacement="top"
>
  Cyber pulse
</button>`,
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

<button
  type="button"
  brightrailTooltip="Helpful information about this item."
  brightrailTooltipPlacement="top"
>
  Hover me
</button>`;
