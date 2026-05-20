/** Copy-ready markup for skeleton catalog tiles (consumers import from `brightrail`). */
export const SKELETON_VARIATION_SNIPPETS = {
  coreText: `<brightrail-skeleton variant="text" />`,
  coreCircular: `<brightrail-skeleton variant="circular" />`,
  coreRectangular: `<brightrail-skeleton variant="rectangular" />`,
  coreRounded: `<brightrail-skeleton variant="rounded" />`,

  animPulse: `<brightrail-skeleton variant="text" animation="pulse" />`,
  animWave: `<brightrail-skeleton variant="text" animation="wave" />`,
  animNone: `<brightrail-skeleton variant="text" animation="none" />`,

  linesSingle: `<brightrail-skeleton variant="text" [lines]="1" />`,
  linesTriple: `<brightrail-skeleton variant="text" [lines]="3" />`,
  linesFive: `<brightrail-skeleton variant="text" [lines]="5" />`,

  sizeAvatar: `<brightrail-skeleton variant="circular" width="3rem" height="3rem" />`,
  sizeBanner: `<brightrail-skeleton variant="rectangular" width="100%" height="8rem" />`,
  sizeChip: `<brightrail-skeleton variant="rounded" width="5rem" height="1.75rem" />`,

  patternListRow: `<div class="skvc-row">
  <brightrail-skeleton variant="circular" width="2.5rem" height="2.5rem" />
  <div class="skvc-row__copy">
    <brightrail-skeleton variant="text" width="40%" />
    <brightrail-skeleton variant="text" width="70%" />
  </div>
</div>`,
  patternCard: `<div class="skvc-card">
  <brightrail-skeleton variant="rectangular" width="100%" height="6rem" />
  <brightrail-skeleton variant="text" [lines]="2" />
</div>`,
  patternProfile: `<div class="skvc-profile">
  <brightrail-skeleton variant="circular" width="4rem" height="4rem" />
  <brightrail-skeleton variant="text" width="55%" />
  <brightrail-skeleton variant="text" width="35%" />
</div>`,
  advancedTable: `<div class="skvc-table">
  @for (row of [0, 1, 2]; track row) {
    <div class="skvc-table__row">
      <brightrail-skeleton variant="text" width="18%" />
      <brightrail-skeleton variant="text" width="32%" />
      <brightrail-skeleton variant="text" width="24%" />
    </div>
  }
</div>`,
  advancedDashboard: `<div class="skvc-dashboard">
  <brightrail-skeleton variant="rectangular" width="100%" height="4.5rem" />
  <div class="skvc-dashboard__grid">
    <brightrail-skeleton variant="rounded" width="100%" height="5rem" />
    <brightrail-skeleton variant="rounded" width="100%" height="5rem" />
    <brightrail-skeleton variant="rounded" width="100%" height="5rem" />
  </div>
</div>`,
  advancedArticle: `<div class="skvc-article">
  <brightrail-skeleton variant="text" width="60%" height="1.25rem" />
  <brightrail-skeleton variant="text" [lines]="4" />
  <brightrail-skeleton variant="rectangular" width="100%" height="10rem" />
</div>`,

  futuristicGlass: `<div class="ff-future-shell ff-future-shell--glass">
  <brightrail-skeleton variant="text" animation="wave" [lines]="3" />
</div>`,
  futuristicNeon: `<div class="ff-future-shell ff-future-shell--neon">
  <brightrail-skeleton variant="rounded" width="100%" height="1.25rem" animation="pulse" />
</div>`,
  futuristicCyber: `<div class="ff-future-shell ff-future-shell--cyber">
  <div class="ff-future-cyber-frame">
    <brightrail-skeleton variant="rectangular" width="100%" height="4rem" animation="wave" />
  </div>
</div>`,
  futuristicHolo: `<div class="ff-future-shell ff-future-shell--holo">
  <brightrail-skeleton variant="circular" width="3rem" height="3rem" animation="pulse" />
</div>`,

} as const;

export const SKELETON_DOC_SECTION_COUNT = 6;

export const SKELETON_HTML_EXAMPLES = `<brightrail-skeleton variant="text" animation="wave" [lines]="3" />

<brightrail-skeleton variant="circular" width="3rem" height="3rem" />

<div class="loading-card">
  <brightrail-skeleton variant="rectangular" width="100%" height="6rem" />
  <brightrail-skeleton variant="text" [lines]="2" />
</div>`;
