import{a as S}from"./chunk-ZPUNR46Q.js";import{a as b}from"./chunk-Z354ZIIT.js";import{e as u}from"./chunk-B3LO3J2X.js";import"./chunk-3JJTVFT5.js";import"./chunk-GGN7H5D7.js";import{Ab as g,Ca as s,Ua as a,Va as i,Wa as t,Xa as r,rb as n,sb as h,ta as e}from"./chunk-GSG23AZM.js";var f={coreNumbered:`<brightrail-pagination
  [length]="120"
  [pageIndex]="2"
  [pageSize]="10"
  variant="numbered"
/>`,coreMinimal:`<brightrail-pagination
  [length]="120"
  [pageIndex]="4"
  [pageSize]="10"
  variant="minimal"
  [maxPageButtons]="5"
/>`,coreCompact:`<brightrail-pagination
  [length]="120"
  [pageIndex]="1"
  [pageSize]="10"
  variant="numbered"
  [compact]="true"
/>`,coreSimple:`<brightrail-pagination
  [length]="120"
  [pageIndex]="0"
  [pageSize]="10"
  variant="simple"
  [showFirstLast]="false"
/>`,stateDefault:'<brightrail-pagination [length]="50" [pageIndex]="0" [pageSize]="10" variant="numbered" />',stateActive:'<brightrail-pagination [length]="50" [pageIndex]="2" [pageSize]="10" variant="numbered" />',stateDisabled:'<brightrail-pagination [length]="50" [pageIndex]="2" [pageSize]="10" variant="numbered" state="disabled" />',sizeSm:'<brightrail-pagination [length]="80" [pageIndex]="1" [pageSize]="10" size="sm" />',sizeMd:'<brightrail-pagination [length]="80" [pageIndex]="1" [pageSize]="10" size="md" />',sizeLg:'<brightrail-pagination [length]="80" [pageIndex]="1" [pageSize]="10" size="lg" />',rangeEllipsis:'<brightrail-pagination [length]="500" [pageIndex]="24" [pageSize]="10" variant="numbered" />',rangeFullWindow:`<brightrail-pagination
  [length]="100"
  [pageIndex]="4"
  [pageSize]="10"
  variant="numbered"
  [maxPageButtons]="15"
/>`,rangeShortTotal:`<brightrail-pagination
  [length]="25"
  [pageIndex]="1"
  [pageSize]="10"
  variant="numbered"
  [maxPageButtons]="7"
/>`,pageSizeStart:`<brightrail-pagination
  [length]="200"
  [pageIndex]="3"
  [pageSize]="25"
  [showPageSize]="true"
  [pageSizeOptions]="[10, 25, 50]"
  pageSizePosition="start"
/>`,pageSizeEnd:`<brightrail-pagination
  [length]="200"
  [pageIndex]="3"
  [pageSize]="25"
  [showPageSize]="true"
  [pageSizeOptions]="[10, 25, 50]"
  pageSizePosition="end"
/>`,pageSizeBoth:`<brightrail-pagination
  [length]="200"
  [pageIndex]="3"
  [pageSize]="25"
  [showPageSize]="true"
  [pageSizeOptions]="[10, 25, 50]"
  pageSizePosition="both"
/>`,tableRangeSummary:'<brightrail-pagination [length]="128" [pageIndex]="0" [pageSize]="10" summaryMode="range" />',tableCompactPageSize:`<brightrail-pagination
  [length]="128"
  [pageIndex]="0"
  [pageSize]="10"
  [showPageSize]="true"
  [pageSizeOptions]="[10, 25, 50, 100]"
  [compact]="true"
  summaryMode="range"
  pageSizePosition="end"
/>`,tableServerSummary:'<brightrail-pagination [length]="128" [pageIndex]="0" [pageSize]="10" summaryMode="server" />',searchTotalResults:`<brightrail-pagination
  [length]="128"
  [pageIndex]="0"
  [pageSize]="10"
  summaryMode="results"
  summaryItemsLabel="results"
/>`,searchFiltered:`<brightrail-pagination
  [length]="26"
  [pageIndex]="0"
  [pageSize]="10"
  summaryMode="filtered"
  summaryItemsLabel="results"
/>`,searchEmpty:`<brightrail-pagination
  [length]="0"
  [pageIndex]="0"
  [pageSize]="10"
  variant="numbered"
  summaryMode="results"
  summaryItemsLabel="results"
/>`,mobileStacked:`<brightrail-pagination
  [length]="100"
  [pageIndex]="4"
  [pageSize]="10"
  variant="mobile"
  [showFirstLast]="false"
/>`,mobileIconOnly:`<brightrail-pagination
  [length]="100"
  [pageIndex]="4"
  [pageSize]="10"
  variant="icon-only"
  [showFirstLast]="false"
/>`,mobileSheet:`<brightrail-pagination
  [length]="100"
  [pageIndex]="4"
  [pageSize]="10"
  variant="mobile-sheet"
  [showFirstLast]="false"
/>`,advancedJumpToPage:`<brightrail-pagination
  [length]="500"
  [pageIndex]="12"
  [pageSize]="10"
  [showJumpToPage]="true"
  [totalPages]="50"
/>`,advancedExplicitTotals:`<brightrail-pagination
  [length]="1248"
  [pageIndex]="0"
  [pageSize]="10"
  summaryMode="range"
  summaryItemsLabel="items"
/>`,advancedStickyFooter:`<!-- Sticky footer shell in your layout -->
<div class="table-footer-strip">
  <brightrail-pagination [length]="200" [pageIndex]="4" [pageSize]="10" variant="numbered" />
</div>`,futuristicGlass:`<div class="ff-future-shell ff-future-shell--glass">
  <span class="ff-future-shell__label" aria-hidden="true">Glass</span>
  <brightrail-pagination [length]="240" [pageIndex]="4" [pageSize]="10" variant="numbered" [compact]="true" />
</div>`,futuristicNeon:`<div class="ff-future-shell ff-future-shell--neon">
  <span class="ff-future-shell__label" aria-hidden="true">Neon</span>
  <brightrail-pagination [length]="500" [pageIndex]="12" [pageSize]="10" variant="numbered" />
</div>`,futuristicCyber:`<div class="ff-future-shell ff-future-shell--cyber">
  <span class="ff-future-shell__label" aria-hidden="true">Cyber</span>
  <div class="ff-future-cyber-frame">
    <brightrail-pagination [length]="500" [pageIndex]="12" [pageSize]="10" [showJumpToPage]="true" [totalPages]="50" />
  </div>
</div>`,futuristicHolo:`<div class="ff-future-shell ff-future-shell--holo">
  <span class="ff-future-shell__label" aria-hidden="true">Holo</span>
  <brightrail-pagination [length]="128" [pageIndex]="2" [pageSize]="10" summaryMode="results" summaryItemsLabel="signals" />
</div>`};var v=`<brightrail-pagination
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
/>`;var c=()=>[10,25,50],I=()=>[10,25,50,100],m=class o{s=f;static \u0275fac=function(l){return new(l||o)};static \u0275cmp=s({type:o,selectors:[["app-pagination-variation-catalog"]],decls:138,vars:154,consts:[[1,"pgvc-block"],[1,"pgvc-block__h"],[1,"pgvc-block__hint"],[1,"pgvc-grid"],["label","Numbered (default)",3,"snippet"],["variant","numbered",3,"length","pageIndex","pageSize"],["label","Minimal window",3,"snippet"],["variant","minimal",3,"length","pageIndex","pageSize","maxPageButtons"],["label","Compact spacing",3,"snippet"],["variant","numbered",3,"length","pageIndex","pageSize","compact"],["label","Text prev/next",3,"snippet"],["variant","simple",3,"length","pageIndex","pageSize","showFirstLast"],["label","Default",3,"snippet"],["label","Active (page 3)",3,"snippet"],["label","Disabled",3,"snippet"],["variant","numbered","state","disabled",3,"length","pageIndex","pageSize"],["label","Small",3,"snippet"],["size","sm",3,"length","pageIndex","pageSize"],["label","Medium",3,"snippet"],["size","md",3,"length","pageIndex","pageSize"],["label","Large",3,"snippet"],["size","lg",3,"length","pageIndex","pageSize"],["label","Ellipsis (long set)",3,"snippet"],["label","Full window",3,"snippet"],["variant","numbered",3,"length","pageIndex","pageSize","maxPageButtons"],["label","Short total",3,"snippet"],["label","Start",3,"snippet"],["pageSizePosition","start",3,"length","pageIndex","pageSize","showPageSize","pageSizeOptions"],["label","End",3,"snippet"],["pageSizePosition","end",3,"length","pageIndex","pageSize","showPageSize","pageSizeOptions"],["label","Both sides",3,"snippet"],["pageSizePosition","both",3,"length","pageIndex","pageSize","showPageSize","pageSizeOptions"],["label","Range summary",3,"snippet"],["summaryMode","range",3,"length","pageIndex","pageSize"],["label","Compact + page size",3,"snippet"],["summaryMode","range","pageSizePosition","end",3,"length","pageIndex","pageSize","showPageSize","pageSizeOptions","compact"],["label","Server-driven label",3,"snippet"],["summaryMode","server",3,"length","pageIndex","pageSize"],["label","Total results",3,"snippet"],["summaryMode","results","summaryItemsLabel","results",3,"length","pageIndex","pageSize"],["label","Filtered results",3,"snippet"],["summaryMode","filtered","summaryItemsLabel","results",3,"length","pageIndex","pageSize"],["label","Empty data",3,"snippet"],["variant","numbered","summaryMode","results","summaryItemsLabel","results",3,"length","pageIndex","pageSize"],["label","Stacked (mobile)",3,"snippet"],["variant","mobile",3,"length","pageIndex","pageSize","showFirstLast"],["label","Icon-only arrows",3,"snippet"],["variant","icon-only",3,"length","pageIndex","pageSize","showFirstLast"],["label","Bottom sheet",3,"snippet"],["variant","mobile-sheet",3,"length","pageIndex","pageSize","showFirstLast"],["label","Jump to page",3,"snippet"],[3,"length","pageIndex","pageSize","showJumpToPage","totalPages"],["label","Explicit totals",3,"snippet"],["summaryMode","range","summaryItemsLabel","items",3,"length","pageIndex","pageSize"],["label","Sticky footer strip",3,"snippet"],[1,"pgvc-sticky-strip"],[1,"ff-future-grid"],["label","Glass data grid",3,"snippet"],[1,"ff-future-shell","ff-future-shell--glass"],["aria-hidden","true",1,"ff-future-shell__label"],["label","Neon fleet pager",3,"snippet"],[1,"ff-future-shell","ff-future-shell--neon"],["label","Cyber jump control",3,"snippet"],[1,"ff-future-shell","ff-future-shell--cyber"],[1,"ff-future-cyber-frame"],["aria-hidden","true",1,"ff-future-cyber-corner","ff-future-cyber-corner--tl"],["aria-hidden","true",1,"ff-future-cyber-corner","ff-future-cyber-corner--tr"],["aria-hidden","true",1,"ff-future-cyber-corner","ff-future-cyber-corner--bl"],["aria-hidden","true",1,"ff-future-cyber-corner","ff-future-cyber-corner--br"],["label","Holo results strip",3,"snippet"],[1,"ff-future-shell","ff-future-shell--holo"],["summaryMode","results","summaryItemsLabel","signals",3,"length","pageIndex","pageSize"]],template:function(l,p){l&1&&(i(0,"section",0)(1,"h2",1),n(2,"1. Core types"),t(),i(3,"p",2),n(4,"Numbered (default), minimal window, compact spacing, and text prev/next."),t(),i(5,"div",3)(6,"app-catalog-variation-tile",4),r(7,"brightrail-pagination",5),t(),i(8,"app-catalog-variation-tile",6),r(9,"brightrail-pagination",7),t(),i(10,"app-catalog-variation-tile",8),r(11,"brightrail-pagination",9),t(),i(12,"app-catalog-variation-tile",10),r(13,"brightrail-pagination",11),t()()(),i(14,"section",0)(15,"h2",1),n(16,"2. Interaction states"),t(),i(17,"p",2),n(18,"Hover uses the primary tint on buttons; active is the selected page; disabled greys out controls."),t(),i(19,"div",3)(20,"app-catalog-variation-tile",12),r(21,"brightrail-pagination",5),t(),i(22,"app-catalog-variation-tile",13),r(23,"brightrail-pagination",5),t(),i(24,"app-catalog-variation-tile",14),r(25,"brightrail-pagination",15),t()()(),i(26,"section",0)(27,"h2",1),n(28,"3. Sizes"),t(),i(29,"div",3)(30,"app-catalog-variation-tile",16),r(31,"brightrail-pagination",17),t(),i(32,"app-catalog-variation-tile",18),r(33,"brightrail-pagination",19),t(),i(34,"app-catalog-variation-tile",20),r(35,"brightrail-pagination",21),t()()(),i(36,"section",0)(37,"h2",1),n(38,"4. Range patterns"),t(),i(39,"p",2),n(40,"Ellipsis for long sets; full sequence when the window fits; short totals."),t(),i(41,"div",3)(42,"app-catalog-variation-tile",22),r(43,"brightrail-pagination",5),t(),i(44,"app-catalog-variation-tile",23),r(45,"brightrail-pagination",24),t(),i(46,"app-catalog-variation-tile",25),r(47,"brightrail-pagination",24),t()()(),i(48,"section",0)(49,"h2",1),n(50,"5. Page size placement"),t(),i(51,"p",2),n(52,"Selector on the start, end, or both sides of the pager."),t(),i(53,"div",3)(54,"app-catalog-variation-tile",26),r(55,"brightrail-pagination",27),t(),i(56,"app-catalog-variation-tile",28),r(57,"brightrail-pagination",29),t(),i(58,"app-catalog-variation-tile",30),r(59,"brightrail-pagination",31),t()()(),i(60,"section",0)(61,"h2",1),n(62,"6. Table & dense toolbars"),t(),i(63,"p",2),n(64,"Row summary on the left, controls on the right; compact + page size; server-driven label."),t(),i(65,"div",3)(66,"app-catalog-variation-tile",32),r(67,"brightrail-pagination",33),t(),i(68,"app-catalog-variation-tile",34),r(69,"brightrail-pagination",35),t(),i(70,"app-catalog-variation-tile",36),r(71,"brightrail-pagination",37),t()()(),i(72,"section",0)(73,"h2",1),n(74,"7. Search & results"),t(),i(75,"p",2),n(76,"Total results, filtered results, and empty data (controls disabled automatically)."),t(),i(77,"div",3)(78,"app-catalog-variation-tile",38),r(79,"brightrail-pagination",39),t(),i(80,"app-catalog-variation-tile",40),r(81,"brightrail-pagination",41),t(),i(82,"app-catalog-variation-tile",42),r(83,"brightrail-pagination",43),t()()(),i(84,"section",0)(85,"h2",1),n(86,"8. Mobile-friendly"),t(),i(87,"p",2),n(88,"Stacked label, icon-only arrows, and bottom-sheet affordance."),t(),i(89,"div",3)(90,"app-catalog-variation-tile",44),r(91,"brightrail-pagination",45),t(),i(92,"app-catalog-variation-tile",46),r(93,"brightrail-pagination",47),t(),i(94,"app-catalog-variation-tile",48),r(95,"brightrail-pagination",49),t()()(),i(96,"section",0)(97,"h2",1),n(98,"9. Advanced"),t(),i(99,"p",2),n(100,"Jump to page, explicit totals, and a sticky-style footer strip."),t(),i(101,"div",3)(102,"app-catalog-variation-tile",50),r(103,"brightrail-pagination",51),t(),i(104,"app-catalog-variation-tile",52),r(105,"brightrail-pagination",53),t(),i(106,"app-catalog-variation-tile",54)(107,"div",55),r(108,"brightrail-pagination",5),t()()()(),i(109,"section",0)(110,"h2",1),n(111,"10. Futuristic pagination designs"),t(),i(112,"div",56)(113,"app-catalog-variation-tile",57)(114,"div",58)(115,"span",59),n(116,"Glass"),t(),r(117,"brightrail-pagination",9),t()(),i(118,"app-catalog-variation-tile",60)(119,"div",61)(120,"span",59),n(121,"Neon"),t(),r(122,"brightrail-pagination",5),t()(),i(123,"app-catalog-variation-tile",62)(124,"div",63)(125,"span",59),n(126,"Cyber"),t(),i(127,"div",64),r(128,"span",65)(129,"span",66)(130,"span",67)(131,"span",68)(132,"brightrail-pagination",51),t()()(),i(133,"app-catalog-variation-tile",69)(134,"div",70)(135,"span",59),n(136,"Holo"),t(),r(137,"brightrail-pagination",71),t()()()()),l&2&&(e(6),a("snippet",p.s.coreNumbered),e(),a("length",120)("pageIndex",2)("pageSize",10),e(),a("snippet",p.s.coreMinimal),e(),a("length",120)("pageIndex",4)("pageSize",10)("maxPageButtons",5),e(),a("snippet",p.s.coreCompact),e(),a("length",120)("pageIndex",1)("pageSize",10)("compact",!0),e(),a("snippet",p.s.coreSimple),e(),a("length",120)("pageIndex",0)("pageSize",10)("showFirstLast",!1),e(7),a("snippet",p.s.stateDefault),e(),a("length",50)("pageIndex",0)("pageSize",10),e(),a("snippet",p.s.stateActive),e(),a("length",50)("pageIndex",2)("pageSize",10),e(),a("snippet",p.s.stateDisabled),e(),a("length",50)("pageIndex",2)("pageSize",10),e(5),a("snippet",p.s.sizeSm),e(),a("length",80)("pageIndex",1)("pageSize",10),e(),a("snippet",p.s.sizeMd),e(),a("length",80)("pageIndex",1)("pageSize",10),e(),a("snippet",p.s.sizeLg),e(),a("length",80)("pageIndex",1)("pageSize",10),e(7),a("snippet",p.s.rangeEllipsis),e(),a("length",500)("pageIndex",24)("pageSize",10),e(),a("snippet",p.s.rangeFullWindow),e(),a("length",100)("pageIndex",4)("pageSize",10)("maxPageButtons",15),e(),a("snippet",p.s.rangeShortTotal),e(),a("length",25)("pageIndex",1)("pageSize",10)("maxPageButtons",7),e(7),a("snippet",p.s.pageSizeStart),e(),a("length",200)("pageIndex",3)("pageSize",25)("showPageSize",!0)("pageSizeOptions",g(150,c)),e(),a("snippet",p.s.pageSizeEnd),e(),a("length",200)("pageIndex",3)("pageSize",25)("showPageSize",!0)("pageSizeOptions",g(151,c)),e(),a("snippet",p.s.pageSizeBoth),e(),a("length",200)("pageIndex",3)("pageSize",25)("showPageSize",!0)("pageSizeOptions",g(152,c)),e(7),a("snippet",p.s.tableRangeSummary),e(),a("length",128)("pageIndex",0)("pageSize",10),e(),a("snippet",p.s.tableCompactPageSize),e(),a("length",128)("pageIndex",0)("pageSize",10)("showPageSize",!0)("pageSizeOptions",g(153,I))("compact",!0),e(),a("snippet",p.s.tableServerSummary),e(),a("length",128)("pageIndex",0)("pageSize",10),e(7),a("snippet",p.s.searchTotalResults),e(),a("length",128)("pageIndex",0)("pageSize",10),e(),a("snippet",p.s.searchFiltered),e(),a("length",26)("pageIndex",0)("pageSize",10),e(),a("snippet",p.s.searchEmpty),e(),a("length",0)("pageIndex",0)("pageSize",10),e(7),a("snippet",p.s.mobileStacked),e(),a("length",100)("pageIndex",4)("pageSize",10)("showFirstLast",!1),e(),a("snippet",p.s.mobileIconOnly),e(),a("length",100)("pageIndex",4)("pageSize",10)("showFirstLast",!1),e(),a("snippet",p.s.mobileSheet),e(),a("length",100)("pageIndex",4)("pageSize",10)("showFirstLast",!1),e(7),a("snippet",p.s.advancedJumpToPage),e(),a("length",500)("pageIndex",12)("pageSize",10)("showJumpToPage",!0)("totalPages",50),e(),a("snippet",p.s.advancedExplicitTotals),e(),a("length",1248)("pageIndex",0)("pageSize",10),e(),a("snippet",p.s.advancedStickyFooter),e(2),a("length",200)("pageIndex",4)("pageSize",10),e(5),a("snippet",p.s.futuristicGlass),e(4),a("length",240)("pageIndex",4)("pageSize",10)("compact",!0),e(),a("snippet",p.s.futuristicNeon),e(4),a("length",500)("pageIndex",12)("pageSize",10),e(),a("snippet",p.s.futuristicCyber),e(9),a("length",500)("pageIndex",12)("pageSize",10)("showJumpToPage",!0)("totalPages",50),e(),a("snippet",p.s.futuristicHolo),e(4),a("length",128)("pageIndex",2)("pageSize",10))},dependencies:[b,S],styles:["[_nghost-%COMP%]{display:block}.pgvc-block[_ngcontent-%COMP%]{margin-bottom:1.35rem}.pgvc-block__h[_ngcontent-%COMP%]{margin:0 0 .5rem;font-size:.95rem;font-weight:700}.pgvc-block__hint[_ngcontent-%COMP%]{margin:-.15rem 0 .65rem;font-size:.78rem;color:var(--ff-muted, #64748b)}.pgvc-grid[_ngcontent-%COMP%]{display:grid;gap:.65rem;grid-template-columns:repeat(auto-fill,minmax(16rem,1fr));align-items:start}.pgvc-sticky-strip[_ngcontent-%COMP%]{padding:.65rem .75rem;border:1px solid var(--ff-border, #e2e8f0);border-radius:.5rem;background:color-mix(in srgb,var(--ff-surface, #fff) 92%,var(--ff-muted, #64748b) 8%);box-shadow:0 1px #0000000f}.pgvc-sticky-strip[_ngcontent-%COMP%]   brightrail-pagination[_ngcontent-%COMP%]{display:block;max-width:28rem;margin-inline:auto}"],changeDetection:0})};var y=class o{htmlExamples=v;static \u0275fac=function(l){return new(l||o)};static \u0275cmp=s({type:o,selectors:[["app-pagination-catalog-overview"]],decls:31,vars:1,consts:[[1,"pco"],[1,"pco-hero"],[1,"pco-hero__eyebrow"],[1,"pco-hero__links"],["routerLink","..",1,"pco-link"],["routerLink","/variations",1,"pco-link"],["aria-labelledby","pco-html-examples",1,"pco-code-block"],["id","pco-html-examples"],[1,"pco-code-block__hint"],[1,"pco-pre"]],template:function(l,p){l&1&&(i(0,"div",0)(1,"header",1)(2,"p",2),n(3,"Brightrail \xB7 Pagination \xB7 Variation catalog"),t(),i(4,"h1"),n(5,"Pagination types & variations"),t(),i(6,"p"),n(7," Enterprise pagination patterns for lists, tables, and search results. Click any tile for "),i(8,"strong"),n(9,"View code"),t(),n(10,", then "),i(11,"strong"),n(12,"Copy code"),t(),n(13," to paste into your app (import from "),i(14,"code"),n(15,"brightrail"),t(),n(16,"). "),t(),i(17,"p",3)(18,"a",4),n(19,"\u2190 Pagination playground (live settings)"),t(),i(20,"a",5),n(21,"All variation catalogs"),t()()(),r(22,"app-pagination-variation-catalog"),i(23,"section",6)(24,"h2",7),n(25,"Pagination HTML examples"),t(),i(26,"p",8),n(27,"Typical table footer and jump-to-page markup."),t(),i(28,"pre",9)(29,"code"),n(30),t()()()()),l&2&&(e(30),h(p.htmlExamples))},dependencies:[u,m],styles:["[_nghost-%COMP%]{flex:1 1 auto;min-height:0;overflow:auto}.pco[_ngcontent-%COMP%]{padding:1rem 1.25rem 1.5rem;max-width:80rem;margin-inline:auto;box-sizing:border-box}.pco-hero__eyebrow[_ngcontent-%COMP%]{margin:0 0 .25rem;font-size:.75rem;font-weight:600;letter-spacing:.04em;text-transform:uppercase;color:var(--ff-muted, #64748b)}.pco-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0;font-size:1.5rem}.pco-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:.35rem 0 .5rem;color:var(--ff-muted, #64748b)}.pco-hero__links[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:.75rem 1.25rem}.pco-link[_ngcontent-%COMP%]{color:var(--ff-accent, #2563eb);text-decoration:none;font-weight:600}.pco-code-block[_ngcontent-%COMP%]{margin:1.5rem 0 0;padding-top:1rem;border-top:1px solid var(--ff-border, #e2e8f0)}.pco-code-block[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.1rem;margin:0 0 .35rem}.pco-code-block__hint[_ngcontent-%COMP%]{margin:0 0 .65rem;font-size:.8125rem;color:var(--ff-muted, #64748b)}.pco-pre[_ngcontent-%COMP%]{margin:0;padding:.85rem;border-radius:.5rem;background:var(--ff-surface-muted, #f1f3f4);border:1px solid var(--ff-border, #e2e8f0);overflow:auto;font-size:.8rem}"],changeDetection:0})};export{y as PaginationCatalogOverviewComponent};
