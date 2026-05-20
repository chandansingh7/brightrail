/** Copy-ready markup for avatar catalog tiles (consumers import from `brightrail`). */
export const AVATAR_VARIATION_SNIPPETS = {
  imageCore: `<brightrail-avatar
  kind="image"
  shape="circle"
  size="lg"
  [imageSrc]="photoUrl"
  imageAlt="Photo"
/>`,
  initialsCore: `<brightrail-avatar
  kind="initials"
  name="Jamie Doe"
  shape="circle"
  size="lg"
  tone="primary"
/>`,
  iconCore: `<brightrail-avatar
  kind="icon"
  icon="user"
  shape="circle"
  size="lg"
  tone="neutral"
  borderStyle="subtle"
/>`,
  shapeCircle: `<brightrail-avatar kind="image" shape="circle" size="md" [imageSrc]="photoUrl" imageAlt="Circle" borderStyle="subtle" />`,
  shapeRounded: `<brightrail-avatar kind="image" shape="rounded-square" size="md" [imageSrc]="photoUrl" imageAlt="Rounded" borderStyle="subtle" />`,
  shapeSquare: `<brightrail-avatar kind="image" shape="square" size="md" [imageSrc]="photoUrl" imageAlt="Square" borderStyle="subtle" />`,
  sizeXs: `<brightrail-avatar kind="image" shape="circle" size="xs" [imageSrc]="photoUrl" imageAlt="XS" borderStyle="subtle" />`,
  sizeSm: `<brightrail-avatar kind="image" shape="circle" size="sm" [imageSrc]="photoUrl" imageAlt="SM" borderStyle="subtle" />`,
  sizeMd: `<brightrail-avatar kind="image" shape="circle" size="md" [imageSrc]="photoUrl" imageAlt="MD" borderStyle="subtle" />`,
  sizeLg: `<brightrail-avatar kind="image" shape="circle" size="lg" [imageSrc]="photoUrl" imageAlt="LG" borderStyle="subtle" />`,
  sizeXl: `<brightrail-avatar kind="image" shape="circle" size="xl" [imageSrc]="photoUrl" imageAlt="XL" borderStyle="subtle" />`,
  stateDefault: `<brightrail-avatar kind="image" shape="circle" size="md" [imageSrc]="photoUrl" state="default" borderStyle="subtle" />`,
  stateHover: `<brightrail-avatar kind="image" shape="circle" size="md" [imageSrc]="photoUrl" state="hover" borderStyle="subtle" />`,
  stateActive: `<brightrail-avatar kind="image" shape="circle" size="md" [imageSrc]="photoUrl" state="active" borderStyle="subtle" />`,
  stateDisabled: `<brightrail-avatar kind="image" shape="circle" size="md" [imageSrc]="photoUrl" state="disabled" borderStyle="subtle" />`,
  statusOnline: `<brightrail-avatar kind="image" shape="circle" size="md" [imageSrc]="photoUrl" status="online" />`,
  statusAway: `<brightrail-avatar kind="image" shape="circle" size="md" [imageSrc]="photoUrl" status="away" />`,
  statusBusy: `<brightrail-avatar kind="image" shape="circle" size="md" [imageSrc]="photoUrl" status="busy" />`,
  statusOffline: `<brightrail-avatar kind="image" shape="circle" size="md" [imageSrc]="photoUrl" status="offline" />`,
  groupPhotosOverflow2: `<brightrail-avatar-group [maxVisible]="3" ariaLabel="Team members">
  <brightrail-avatar kind="image" shape="circle" size="md" [imageSrc]="a" imageAlt="Member" borderStyle="subtle" />
  <brightrail-avatar kind="image" shape="circle" size="md" [imageSrc]="b" imageAlt="Member" borderStyle="subtle" />
  <brightrail-avatar kind="image" shape="circle" size="md" [imageSrc]="c" imageAlt="Member" borderStyle="subtle" />
  <brightrail-avatar kind="image" shape="circle" size="md" [imageSrc]="d" imageAlt="Member" borderStyle="subtle" />
  <brightrail-avatar kind="image" shape="circle" size="md" [imageSrc]="e" imageAlt="Member" borderStyle="subtle" />
  <!-- renders +2 overflow chip -->
</brightrail-avatar-group>`,
  groupInitialsOverflow5: `<brightrail-avatar-group [maxVisible]="3" ariaLabel="Initials roster">
  <brightrail-avatar kind="initials" name="Jamie Doe" shape="circle" size="md" tone="primary" borderStyle="subtle" />
  <brightrail-avatar kind="initials" name="Sam Kim" shape="circle" size="md" tone="success" borderStyle="subtle" />
  <brightrail-avatar kind="initials" name="Alex Lee" shape="circle" size="md" tone="warning" borderStyle="subtle" />
  <!-- more members → +5 overflow chip -->
</brightrail-avatar-group>`,
  groupPhotosOverflow3: `<brightrail-avatar-group [maxVisible]="4" ariaLabel="Project team">
  <!-- four visible avatars + hidden members → +3 -->
</brightrail-avatar-group>`,
  profileCardHorizontal: `<!-- Compose avatar + meta + actions in your card shell -->
<div class="profile-card profile-card--horizontal">
  <brightrail-avatar
    kind="image"
    shape="circle"
    size="lg"
    [imageSrc]="photoUrl"
    name="Olivia Rhye"
    imageAlt="Olivia Rhye"
    status="online"
    borderStyle="subtle"
  />
  <div class="profile-card__body">
    <div class="profile-card__name">Olivia Rhye</div>
    <div class="profile-card__role">Product Designer</div>
    <div class="profile-card__presence">Online</div>
    <div class="profile-card__actions">
      <button type="button" aria-label="Message Olivia"><brightrail-button-icon name="headset" /></button>
      <button type="button" aria-label="Schedule with Olivia"><brightrail-button-icon name="calendar" /></button>
      <button type="button" aria-label="More actions"><brightrail-button-icon name="more" /></button>
    </div>
  </div>
</div>`,
  profileCardCentered: `<brightrail-avatar
  kind="image"
  shape="circle"
  size="lg"
  [imageSrc]="photoUrl"
  name="Olivia Rhye"
  label="Olivia Rhye"
  subtitle="Product Designer"
  status="online"
  [showProfileMeta]="true"
  borderStyle="subtle"
/>`,
  enterpriseAssignee: `<brightrail-avatar kind="image" shape="circle" size="md" [imageSrc]="photoUrl" enterpriseRole="assignee" borderStyle="subtle" />`,
  enterpriseTeam: `<brightrail-avatar kind="image" shape="circle" size="md" [imageSrc]="photoUrl" enterpriseRole="team-member" borderStyle="subtle" />`,
  enterpriseReviewer: `<brightrail-avatar kind="image" shape="circle" size="md" [imageSrc]="photoUrl" enterpriseRole="reviewer" borderStyle="subtle" />`,
  enterpriseComment: `<brightrail-avatar kind="image" shape="circle" size="md" [imageSrc]="photoUrl" enterpriseRole="comment" borderStyle="subtle" />`,
  variantNeon: `<brightrail-avatar
  kind="image"
  shape="circle"
  size="md"
  [imageSrc]="photoUrl"
  variant="neon"
  status="online"
  glowColor="#22d3ee"
/>`,
  variantAi: `<brightrail-avatar kind="icon" icon="user" shape="circle" size="md" variant="ai-assistant" tone="neutral" />`,
  variantGlass: `<brightrail-avatar kind="image" shape="rounded-square" size="md" [imageSrc]="photoUrl" variant="glassmorphism" status="online" />`,
  variantCyber: `<brightrail-avatar kind="image" shape="square" size="md" [imageSrc]="photoUrl" variant="cyber" status="online" />`,
  variantSciFi: `<brightrail-avatar kind="image" shape="circle" size="md" [imageSrc]="photoUrl" variant="sci-fi-badge" enterpriseRole="reviewer" />`,
  variantPresenceRing: `<brightrail-avatar kind="image" shape="circle" size="md" [imageSrc]="photoUrl" variant="presence-ring" status="online" />`,
  // Extended library API (beyond the reference mock)
  borderNone: `<brightrail-avatar kind="image" shape="circle" size="md" [imageSrc]="photoUrl" borderStyle="none" />`,
  borderSubtle: `<brightrail-avatar kind="image" shape="circle" size="md" [imageSrc]="photoUrl" borderStyle="subtle" />`,
  borderSoftGlow: `<brightrail-avatar kind="image" shape="circle" size="md" [imageSrc]="photoUrl" borderStyle="soft-glow" />`,
  borderRing: `<brightrail-avatar kind="image" shape="circle" size="md" [imageSrc]="photoUrl" borderStyle="ring" />`,
  borderHard: `<brightrail-avatar kind="image" shape="circle" size="md" [imageSrc]="photoUrl" borderStyle="hard-edge" />`,
  statusPosBr: `<brightrail-avatar kind="image" shape="circle" size="md" [imageSrc]="photoUrl" status="online" statusPosition="bottom-right" />`,
  statusPosBl: `<brightrail-avatar kind="image" shape="circle" size="md" [imageSrc]="photoUrl" status="online" statusPosition="bottom-left" />`,
  statusPosTr: `<brightrail-avatar kind="image" shape="circle" size="md" [imageSrc]="photoUrl" status="online" statusPosition="top-right" />`,
  statusPosTl: `<brightrail-avatar kind="image" shape="circle" size="md" [imageSrc]="photoUrl" status="online" statusPosition="top-left" />`,
  tooltipRoster: `<brightrail-avatar
  kind="image"
  shape="circle"
  size="lg"
  [imageSrc]="photoUrl"
  tooltip="Jamie Doe · Engineering"
  tooltipPlacement="top"
/>`,
} as const;

/** Reference mock section titles (doc/Avatar/variation-image.png). */
export const AVATAR_DOC_SECTION_COUNT = 9;

export const AVATAR_HTML_EXAMPLES = `<brightrail-avatar
  kind="image"
  shape="circle"
  size="large"
  variant="presence-ring"
  borderStyle="soft-glow"
  status="online"
  imageSrc="/images/avatar/avatar-01.png"
  imageAlt="Sophia Carter"
  label="Sophia Carter"
  subtitle="Product designer"
  theme="material-light"
/>

<brightrail-avatar-group maxVisible="3" ariaLabel="Team members">
  <brightrail-avatar kind="image" shape="circle" size="md" imageSrc="/images/avatar/avatar-01.png" />
  <brightrail-avatar kind="initials" name="Jamie Doe" shape="circle" size="md" tone="primary" />
  <brightrail-avatar kind="initials" name="Sam Kim" shape="circle" size="md" tone="success" />
</brightrail-avatar-group>`;
