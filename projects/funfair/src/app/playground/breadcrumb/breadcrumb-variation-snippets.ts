/** Copy-ready markup for breadcrumb catalog tiles (import from `brightrail`). */
export const BREADCRUMB_VARIATION_SNIPPETS = {
  coreAllLinks: `<brightrail-breadcrumb [items]="coreAllLinks" separator="chevron" [withIcons]="false" />`,
  coreWithCurrent: `<brightrail-breadcrumb [items]="coreWithCurrent" separator="chevron" [withIcons]="false" />`,
  coreWithCurrentAccent: `<brightrail-breadcrumb
  [items]="coreWithCurrent"
  separator="chevron"
  currentItemStyle="accent"
  [withIcons]="false"
/>`,
  separatorChevron: `<brightrail-breadcrumb [items]="short" separator="chevron" [withIcons]="false" />`,
  separatorSlash: `<brightrail-breadcrumb [items]="short" separator="slash" [withIcons]="false" />`,
  separatorDot: `<brightrail-breadcrumb [items]="short" separator="dot" [withIcons]="false" />`,
  separatorArrow: `<brightrail-breadcrumb [items]="short" separator="arrow" [withIcons]="false" />`,
  sizeLg: `<brightrail-breadcrumb [items]="coreWithCurrent" size="lg" [withIcons]="false" />`,
  sizeMd: `<brightrail-breadcrumb [items]="coreWithCurrent" size="md" [withIcons]="false" />`,
  sizeSm: `<brightrail-breadcrumb [items]="coreWithCurrent" size="sm" [withIcons]="false" />`,
  stateDefault: `<brightrail-breadcrumb [items]="coreWithCurrent" [withIcons]="false" />`,
  stateHover: `<!-- Style link hover in your shell -->
<brightrail-breadcrumb [items]="coreWithCurrent" [withIcons]="false" />`,
  stateDisabled: `<brightrail-breadcrumb [items]="statesDisabled" [withIcons]="false" />`,
  stateCurrentAccent: `<brightrail-breadcrumb [items]="coreWithCurrent" currentItemStyle="accent" [withIcons]="false" />`,
  iconStart: `<brightrail-breadcrumb [items]="iconStart" separator="chevron" [withIcons]="true" />`,
  iconBeforeItems: `<brightrail-breadcrumb [items]="iconBeforeItems" separator="chevron" [withIcons]="true" />`,
  truncationLong: `<brightrail-breadcrumb
  [items]="longPath"
  [maxItems]="4"
  truncation="collapse-middle"
/>`,
  truncationOverflowMenu: `<brightrail-breadcrumb [items]="longPath" [maxItems]="3" truncation="collapse-middle" />
<!-- Pair with an overflow menu button in your toolbar shell -->`,
  mobilePattern: `<brightrail-breadcrumb [items]="mobileBreadcrumb" separator="arrow" [withIcons]="false" />`,
  filePath: `<brightrail-breadcrumb [items]="filePathBreadcrumb" separator="chevron" [withIcons]="true" />`,
  multiLevel: `<brightrail-breadcrumb [items]="multiLevelBreadcrumb" separator="chevron" [withIcons]="true" />`,
  futuristicPill: `<brightrail-breadcrumb [items]="futuristicItems" separator="dot" currentItemStyle="pill" />`,
  futuristicProgressive: `<!-- Decorative progressive trail alongside breadcrumbs -->
<div class="progress-trail" aria-hidden="true">…</div>`,
} as const;

export const BREADCRUMB_DOC_SECTION_COUNT = 9;

export const BREADCRUMB_HTML_EXAMPLES = `<brightrail-breadcrumb
  [items]="[
    { label: 'Home', href: '/', icon: 'home' },
    { label: 'Products', href: '/products' },
    { label: 'Laptops', current: true },
  ]"
  separator="chevron"
  currentItemStyle="accent"
/>`;
