/** Copy-ready markup for pagination catalog tiles (consumers import from `brightrail`). */
export const PAGINATION_VARIATION_SNIPPETS = {
  coreNumbered: `<brightrail-pagination
  [length]="120"
  [pageIndex]="2"
  [pageSize]="10"
  variant="numbered"
/>`,
  coreMinimal: `<brightrail-pagination
  [length]="120"
  [pageIndex]="4"
  [pageSize]="10"
  variant="minimal"
  [maxPageButtons]="5"
/>`,
  coreCompact: `<brightrail-pagination
  [length]="120"
  [pageIndex]="1"
  [pageSize]="10"
  variant="numbered"
  [compact]="true"
/>`,
  coreSimple: `<brightrail-pagination
  [length]="120"
  [pageIndex]="0"
  [pageSize]="10"
  variant="simple"
  [showFirstLast]="false"
/>`,
  stateDefault: `<brightrail-pagination [length]="50" [pageIndex]="0" [pageSize]="10" variant="numbered" />`,
  stateActive: `<brightrail-pagination [length]="50" [pageIndex]="2" [pageSize]="10" variant="numbered" />`,
  stateDisabled: `<brightrail-pagination [length]="50" [pageIndex]="2" [pageSize]="10" variant="numbered" state="disabled" />`,
  sizeSm: `<brightrail-pagination [length]="80" [pageIndex]="1" [pageSize]="10" size="sm" />`,
  sizeMd: `<brightrail-pagination [length]="80" [pageIndex]="1" [pageSize]="10" size="md" />`,
  sizeLg: `<brightrail-pagination [length]="80" [pageIndex]="1" [pageSize]="10" size="lg" />`,
  rangeEllipsis: `<brightrail-pagination [length]="500" [pageIndex]="24" [pageSize]="10" variant="numbered" />`,
  rangeFullWindow: `<brightrail-pagination
  [length]="100"
  [pageIndex]="4"
  [pageSize]="10"
  variant="numbered"
  [maxPageButtons]="15"
/>`,
  rangeShortTotal: `<brightrail-pagination
  [length]="25"
  [pageIndex]="1"
  [pageSize]="10"
  variant="numbered"
  [maxPageButtons]="7"
/>`,
  pageSizeStart: `<brightrail-pagination
  [length]="200"
  [pageIndex]="3"
  [pageSize]="25"
  [showPageSize]="true"
  [pageSizeOptions]="[10, 25, 50]"
  pageSizePosition="start"
/>`,
  pageSizeEnd: `<brightrail-pagination
  [length]="200"
  [pageIndex]="3"
  [pageSize]="25"
  [showPageSize]="true"
  [pageSizeOptions]="[10, 25, 50]"
  pageSizePosition="end"
/>`,
  pageSizeBoth: `<brightrail-pagination
  [length]="200"
  [pageIndex]="3"
  [pageSize]="25"
  [showPageSize]="true"
  [pageSizeOptions]="[10, 25, 50]"
  pageSizePosition="both"
/>`,
  tableRangeSummary: `<brightrail-pagination [length]="128" [pageIndex]="0" [pageSize]="10" summaryMode="range" />`,
  tableCompactPageSize: `<brightrail-pagination
  [length]="128"
  [pageIndex]="0"
  [pageSize]="10"
  [showPageSize]="true"
  [pageSizeOptions]="[10, 25, 50, 100]"
  [compact]="true"
  summaryMode="range"
  pageSizePosition="end"
/>`,
  tableServerSummary: `<brightrail-pagination [length]="128" [pageIndex]="0" [pageSize]="10" summaryMode="server" />`,
  searchTotalResults: `<brightrail-pagination
  [length]="128"
  [pageIndex]="0"
  [pageSize]="10"
  summaryMode="results"
  summaryItemsLabel="results"
/>`,
  searchFiltered: `<brightrail-pagination
  [length]="26"
  [pageIndex]="0"
  [pageSize]="10"
  summaryMode="filtered"
  summaryItemsLabel="results"
/>`,
  searchEmpty: `<brightrail-pagination
  [length]="0"
  [pageIndex]="0"
  [pageSize]="10"
  variant="numbered"
  summaryMode="results"
  summaryItemsLabel="results"
/>`,
  mobileStacked: `<brightrail-pagination
  [length]="100"
  [pageIndex]="4"
  [pageSize]="10"
  variant="mobile"
  [showFirstLast]="false"
/>`,
  mobileIconOnly: `<brightrail-pagination
  [length]="100"
  [pageIndex]="4"
  [pageSize]="10"
  variant="icon-only"
  [showFirstLast]="false"
/>`,
  mobileSheet: `<brightrail-pagination
  [length]="100"
  [pageIndex]="4"
  [pageSize]="10"
  variant="mobile-sheet"
  [showFirstLast]="false"
/>`,
  advancedJumpToPage: `<brightrail-pagination
  [length]="500"
  [pageIndex]="12"
  [pageSize]="10"
  [showJumpToPage]="true"
  [totalPages]="50"
/>`,
  advancedExplicitTotals: `<brightrail-pagination
  [length]="1248"
  [pageIndex]="0"
  [pageSize]="10"
  summaryMode="range"
  summaryItemsLabel="items"
/>`,
  advancedStickyFooter: `<!-- Sticky footer shell in your layout -->
<div class="table-footer-strip">
  <brightrail-pagination [length]="200" [pageIndex]="4" [pageSize]="10" variant="numbered" />
</div>`,

  futuristicGlass: `<div class="ff-future-shell ff-future-shell--glass">
  <span class="ff-future-shell__label" aria-hidden="true">Glass</span>
  <brightrail-pagination [length]="240" [pageIndex]="4" [pageSize]="10" variant="numbered" [compact]="true" />
</div>`,
  futuristicNeon: `<div class="ff-future-shell ff-future-shell--neon">
  <span class="ff-future-shell__label" aria-hidden="true">Neon</span>
  <brightrail-pagination [length]="500" [pageIndex]="12" [pageSize]="10" variant="numbered" />
</div>`,
  futuristicCyber: `<div class="ff-future-shell ff-future-shell--cyber">
  <span class="ff-future-shell__label" aria-hidden="true">Cyber</span>
  <div class="ff-future-cyber-frame">
    <brightrail-pagination [length]="500" [pageIndex]="12" [pageSize]="10" [showJumpToPage]="true" [totalPages]="50" />
  </div>
</div>`,
  futuristicHolo: `<div class="ff-future-shell ff-future-shell--holo">
  <span class="ff-future-shell__label" aria-hidden="true">Holo</span>
  <brightrail-pagination [length]="128" [pageIndex]="2" [pageSize]="10" summaryMode="results" summaryItemsLabel="signals" />
</div>`,

} as const;

export const PAGINATION_DOC_SECTION_COUNT = 10;

export const PAGINATION_HTML_EXAMPLES = `<brightrail-pagination
  [length]="128"
  [pageIndex]="0"
  [pageSize]="10"
  [showPageSize]="true"
  [pageSizeOptions]="[10, 25, 50, 100]"
  summaryMode="range"
  pageSizePosition="end"
/>

<brightrail-pagination
  [length]="500"
  [pageIndex]="12"
  [pageSize]="10"
  variant="numbered"
  [showJumpToPage]="true"
/>`;
