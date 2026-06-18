import{a as v}from"./chunk-FJ7PM77H.js";import"./chunk-63ZAJDYR.js";import{a as d,b as h,c as f}from"./chunk-E5NAVABE.js";import"./chunk-TEOKHIN3.js";import{e as p}from"./chunk-FBGATJ5M.js";import"./chunk-573ITFZ2.js";import"./chunk-3SQNCDXW.js";import{Ca as b,Va as r,Wa as e,Xa as t,Ya as l,ob as o,sb as i,ta as n,tb as s}from"./chunk-M22WAZLT.js";var M={coreActions:`<button type="button" [brightrailMenuTrigger]="menu">Actions</button>
<brightrail-menu #menu>
  <brightrail-menu-item label="Edit" />
  <brightrail-menu-item label="Duplicate" />
  <brightrail-menu-item label="Archive" />
</brightrail-menu>`,coreOverflow:`<button type="button" [brightrailMenuTrigger]="menu" aria-label="More options">\u22EF</button>
<brightrail-menu #menu>
  <brightrail-menu-item label="Rename" />
  <brightrail-menu-item label="Move" />
  <brightrail-menu-item label="Delete" />
</brightrail-menu>`,coreAccount:`<button type="button" [brightrailMenuTrigger]="menu">Account</button>
<brightrail-menu #menu>
  <brightrail-menu-item label="Profile" />
  <brightrail-menu-item label="Settings" />
  <brightrail-menu-item label="Sign out" />
</brightrail-menu>`,stateSelected:`<button type="button" [brightrailMenuTrigger]="menu">View</button>
<brightrail-menu #menu>
  <brightrail-menu-item label="List" [selected]="true" />
  <brightrail-menu-item label="Board" />
  <brightrail-menu-item label="Calendar" />
</brightrail-menu>`,stateDisabled:`<button type="button" [brightrailMenuTrigger]="menu">Row actions</button>
<brightrail-menu #menu>
  <brightrail-menu-item label="Edit" />
  <brightrail-menu-item label="Share" />
  <brightrail-menu-item label="Delete" [disabled]="true" />
</brightrail-menu>`,stateMixed:`<button type="button" [brightrailMenuTrigger]="menu">Sort</button>
<brightrail-menu #menu>
  <brightrail-menu-item label="Name (A\u2013Z)" [selected]="true" />
  <brightrail-menu-item label="Last updated" />
  <brightrail-menu-item label="Custom order" [disabled]="true" />
</brightrail-menu>`,contextRow:`<button type="button" [brightrailMenuTrigger]="menu" aria-label="Row menu">\u22EF</button>
<brightrail-menu #menu>
  <brightrail-menu-item label="Open" />
  <brightrail-menu-item label="Assign" />
  <brightrail-menu-item label="Remove" />
</brightrail-menu>`,contextBulk:`<button type="button" [brightrailMenuTrigger]="menu">Bulk actions</button>
<brightrail-menu #menu>
  <brightrail-menu-item label="Export CSV" />
  <brightrail-menu-item label="Add tag" />
  <brightrail-menu-item label="Delete selected" />
</brightrail-menu>`,contextDanger:`<button type="button" [brightrailMenuTrigger]="menu">Manage</button>
<brightrail-menu #menu>
  <brightrail-menu-item label="Edit details" />
  <brightrail-menu-item label="Deactivate" />
  <brightrail-menu-item label="Delete workspace" [disabled]="true" />
</brightrail-menu>`,layoutSplit:`<span class="mco-split">
  <button type="button" class="mco-split__primary">Save</button>
  <button type="button" [brightrailMenuTrigger]="menu" class="mco-split__menu" aria-label="More save options">\u25BE</button>
</span>
<brightrail-menu #menu>
  <brightrail-menu-item label="Save and continue" />
  <brightrail-menu-item label="Save as draft" />
</brightrail-menu>`,layoutToolbar:`<span class="mco-toolbar">
  <button type="button" [brightrailMenuTrigger]="filterMenu">Filter</button>
  <button type="button" [brightrailMenuTrigger]="sortMenu">Sort</button>
</span>
<brightrail-menu #filterMenu>
  <brightrail-menu-item label="Active only" [selected]="true" />
  <brightrail-menu-item label="Archived" />
</brightrail-menu>
<brightrail-menu #sortMenu>
  <brightrail-menu-item label="Newest" [selected]="true" />
  <brightrail-menu-item label="Oldest" />
</brightrail-menu>`,advancedActivate:`<button type="button" [brightrailMenuTrigger]="menu">File</button>
<brightrail-menu #menu>
  <brightrail-menu-item label="Download" (activate)="onDownload()" />
  <brightrail-menu-item label="Print" (activate)="onPrint()" />
</brightrail-menu>`,futuristicGlass:`<div class="ff-future-shell ff-future-shell--glass">
  <button type="button" [brightrailMenuTrigger]="menu">Actions</button>
  <brightrail-menu #menu>
    <brightrail-menu-item label="Edit" />
    <brightrail-menu-item label="Duplicate" />
  </brightrail-menu>
</div>`,futuristicNeon:`<div class="ff-future-shell ff-future-shell--neon">
  <button type="button" [brightrailMenuTrigger]="menu" aria-label="More options">\u22EF</button>
  <brightrail-menu #menu>
    <brightrail-menu-item label="Open" />
    <brightrail-menu-item label="Assign" />
  </brightrail-menu>
</div>`,futuristicCyber:`<div class="ff-future-shell ff-future-shell--cyber">
  <button type="button" [brightrailMenuTrigger]="menu">Command</button>
  <brightrail-menu #menu>
    <brightrail-menu-item label="Deploy" />
    <brightrail-menu-item label="Rollback" />
  </brightrail-menu>
</div>`,futuristicHolo:`<div class="ff-future-shell ff-future-shell--holo">
  <button type="button" [brightrailMenuTrigger]="menu">View</button>
  <brightrail-menu #menu>
    <brightrail-menu-item label="Grid" [selected]="true" />
    <brightrail-menu-item label="Orbit" />
  </brightrail-menu>
</div>`};var y=`<button type="button" [brightrailMenuTrigger]="menu">Actions</button>
<brightrail-menu #menu>
  <brightrail-menu-item label="Edit" (activate)="onEdit()" />
  <brightrail-menu-item label="Delete" [disabled]="isLocked" />
</brightrail-menu>

<!-- View switcher with selected state -->
<button type="button" [brightrailMenuTrigger]="viewMenu">View</button>
<brightrail-menu #viewMenu>
  <brightrail-menu-item label="List" [selected]="view === 'list'" />
  <brightrail-menu-item label="Board" [selected]="view === 'board'" />
</brightrail-menu>`;var g=class u{s=M;static \u0275fac=function(m){return new(m||u)};static \u0275cmp=b({type:u,selectors:[["app-menu-variation-catalog"]],decls:199,vars:43,consts:[["actionsMenu",""],["overflowMenu",""],["accountMenu",""],["viewMenu",""],["rowMenu",""],["sortMenu",""],["ctxRowMenu",""],["bulkMenu",""],["manageMenu",""],["splitMenu",""],["filterMenu",""],["sortToolbarMenu",""],["fileMenu",""],["a11yMenu",""],["futureGlassMenu",""],["futureNeonMenu",""],["futureCyberMenu",""],["futureHoloMenu",""],[1,"mvc-block"],[1,"mvc-block__h"],[1,"mvc-grid"],["label","Actions",3,"snippet"],["type","button",3,"brightrailMenuTrigger"],["label","Edit"],["label","Duplicate"],["label","Archive"],["label","Overflow",3,"snippet"],["type","button","aria-label","More options",3,"brightrailMenuTrigger"],["label","Rename"],["label","Move"],["label","Delete"],["label","Account",3,"snippet"],["label","Profile"],["label","Settings"],["label","Sign out"],["label","Selected item",3,"snippet"],["label","List",3,"selected"],["label","Board"],["label","Calendar"],["label","Disabled item",3,"snippet"],["label","Share"],["label","Delete",3,"disabled"],["label","Mixed states",3,"snippet"],["label","Name (A\u2013Z)",3,"selected"],["label","Last updated"],["label","Custom order",3,"disabled"],[1,"mvc-block__hint"],["label","Row menu",3,"snippet"],["type","button","aria-label","Row menu",3,"brightrailMenuTrigger"],["label","Open"],["label","Assign"],["label","Remove"],["label","Bulk actions",3,"snippet"],["label","Export CSV"],["label","Add tag"],["label","Delete selected"],["label","Guarded delete",3,"snippet"],["label","Edit details"],["label","Deactivate"],["label","Delete workspace",3,"disabled"],["label","Split save",3,"snippet"],[1,"mco-split"],["type","button",1,"mco-split__primary"],["type","button","aria-label","More save options",1,"mco-split__menu",3,"brightrailMenuTrigger"],["label","Save and continue"],["label","Save as draft"],["label","Toolbar pair",3,"snippet"],[1,"mco-toolbar"],["label","Active only",3,"selected"],["label","Archived"],["label","Newest",3,"selected"],["label","Oldest"],["label","File menu",3,"snippet"],["label","Download"],["label","Print"],["label","Icon-only trigger",3,"snippet"],["label","Details"],["label","Copy link"],[1,"ff-future-grid"],["label","Glass actions",3,"snippet"],[1,"ff-future-shell","ff-future-shell--glass"],["aria-hidden","true",1,"ff-future-shell__label"],["label","Neon overflow",3,"snippet"],[1,"ff-future-shell","ff-future-shell--neon"],["label","Cyber command",3,"snippet"],[1,"ff-future-shell","ff-future-shell--cyber"],["label","Deploy"],["label","Rollback"],["label","Holo view",3,"snippet"],[1,"ff-future-shell","ff-future-shell--holo"],["label","Grid",3,"selected"],["label","Orbit"]],template:function(m,a){if(m&1&&(e(0,"section",18)(1,"h2",19),i(2,"1. Core action menus"),t(),e(3,"div",20)(4,"app-catalog-variation-tile",21)(5,"button",22),i(6,"Actions"),t(),e(7,"brightrail-menu",null,0),l(9,"brightrail-menu-item",23)(10,"brightrail-menu-item",24)(11,"brightrail-menu-item",25),t()(),e(12,"app-catalog-variation-tile",26)(13,"button",27),i(14,"\u22EF"),t(),e(15,"brightrail-menu",null,1),l(17,"brightrail-menu-item",28)(18,"brightrail-menu-item",29)(19,"brightrail-menu-item",30),t()(),e(20,"app-catalog-variation-tile",31)(21,"button",22),i(22,"Account"),t(),e(23,"brightrail-menu",null,2),l(25,"brightrail-menu-item",32)(26,"brightrail-menu-item",33)(27,"brightrail-menu-item",34),t()()()(),e(28,"section",18)(29,"h2",19),i(30,"2. Selected & disabled items"),t(),e(31,"div",20)(32,"app-catalog-variation-tile",35)(33,"button",22),i(34,"View"),t(),e(35,"brightrail-menu",null,3),l(37,"brightrail-menu-item",36)(38,"brightrail-menu-item",37)(39,"brightrail-menu-item",38),t()(),e(40,"app-catalog-variation-tile",39)(41,"button",22),i(42,"Row actions"),t(),e(43,"brightrail-menu",null,4),l(45,"brightrail-menu-item",23)(46,"brightrail-menu-item",40)(47,"brightrail-menu-item",41),t()(),e(48,"app-catalog-variation-tile",42)(49,"button",22),i(50,"Sort"),t(),e(51,"brightrail-menu",null,5),l(53,"brightrail-menu-item",43)(54,"brightrail-menu-item",44)(55,"brightrail-menu-item",45),t()()()(),e(56,"section",18)(57,"h2",19),i(58,"3. Context menus"),t(),e(59,"p",46),i(60,"Row overflow, bulk actions, and guarded destructive items."),t(),e(61,"div",20)(62,"app-catalog-variation-tile",47)(63,"button",48),i(64,"\u22EF"),t(),e(65,"brightrail-menu",null,6),l(67,"brightrail-menu-item",49)(68,"brightrail-menu-item",50)(69,"brightrail-menu-item",51),t()(),e(70,"app-catalog-variation-tile",52)(71,"button",22),i(72,"Bulk actions"),t(),e(73,"brightrail-menu",null,7),l(75,"brightrail-menu-item",53)(76,"brightrail-menu-item",54)(77,"brightrail-menu-item",55),t()(),e(78,"app-catalog-variation-tile",56)(79,"button",22),i(80,"Manage"),t(),e(81,"brightrail-menu",null,8),l(83,"brightrail-menu-item",57)(84,"brightrail-menu-item",58)(85,"brightrail-menu-item",59),t()()()(),e(86,"section",18)(87,"h2",19),i(88,"4. Layout patterns"),t(),e(89,"div",20)(90,"app-catalog-variation-tile",60)(91,"span",61)(92,"button",62),i(93,"Save"),t(),e(94,"button",63),i(95,"\u25BE"),t()(),e(96,"brightrail-menu",null,9),l(98,"brightrail-menu-item",64)(99,"brightrail-menu-item",65),t()(),e(100,"app-catalog-variation-tile",66)(101,"span",67)(102,"button",22),i(103,"Filter"),t(),e(104,"button",22),i(105,"Sort"),t()(),e(106,"brightrail-menu",null,10),l(108,"brightrail-menu-item",68)(109,"brightrail-menu-item",69),t(),e(110,"brightrail-menu",null,11),l(112,"brightrail-menu-item",70)(113,"brightrail-menu-item",71),t()()()(),e(114,"section",18)(115,"h2",19),i(116,"5. Activate handlers"),t(),e(117,"p",46),i(118,"Listen to "),e(119,"code"),i(120,"(activate)"),t(),i(121," on items to run commands and close the panel."),t(),e(122,"div",20)(123,"app-catalog-variation-tile",72)(124,"button",22),i(125,"File"),t(),e(126,"brightrail-menu",null,12),l(128,"brightrail-menu-item",73)(129,"brightrail-menu-item",74),t()()()(),e(130,"section",18)(131,"h2",19),i(132,"6. Accessibility"),t(),e(133,"p",46),i(134,"Triggers expose "),e(135,"code"),i(136,"aria-expanded"),t(),i(137,", "),e(138,"code"),i(139,"aria-controls"),t(),i(140,", and "),e(141,"code"),i(142,"aria-haspopup"),t(),i(143," via "),e(144,"code"),i(145,"brightrailMenuTrigger"),t(),i(146,"."),t(),e(147,"div",20)(148,"app-catalog-variation-tile",75)(149,"button",27),i(150,"\u22EF"),t(),e(151,"brightrail-menu",null,13),l(153,"brightrail-menu-item",76)(154,"brightrail-menu-item",77),t()()()(),e(155,"section",18)(156,"h2",19),i(157,"7. Futuristic menu designs"),t(),e(158,"div",78)(159,"app-catalog-variation-tile",79)(160,"div",80)(161,"span",81),i(162,"Glass"),t(),e(163,"button",22),i(164,"Actions"),t(),e(165,"brightrail-menu",null,14),l(167,"brightrail-menu-item",23)(168,"brightrail-menu-item",24),t()()(),e(169,"app-catalog-variation-tile",82)(170,"div",83)(171,"span",81),i(172,"Neon"),t(),e(173,"button",27),i(174,"\u22EF"),t(),e(175,"brightrail-menu",null,15),l(177,"brightrail-menu-item",49)(178,"brightrail-menu-item",50),t()()(),e(179,"app-catalog-variation-tile",84)(180,"div",85)(181,"span",81),i(182,"Cyber"),t(),e(183,"button",22),i(184,"Command"),t(),e(185,"brightrail-menu",null,16),l(187,"brightrail-menu-item",86)(188,"brightrail-menu-item",87),t()()(),e(189,"app-catalog-variation-tile",88)(190,"div",89)(191,"span",81),i(192,"Holo"),t(),e(193,"button",22),i(194,"View"),t(),e(195,"brightrail-menu",null,17),l(197,"brightrail-menu-item",90)(198,"brightrail-menu-item",91),t()()()()()),m&2){let E=o(8),_=o(16),x=o(24),C=o(36),w=o(44),T=o(52),O=o(66),P=o(74),k=o(82),A=o(97),D=o(107),N=o(111),R=o(127),V=o(152),L=o(166),B=o(176),F=o(186),I=o(196);n(4),r("snippet",a.s.coreActions),n(),r("brightrailMenuTrigger",E),n(7),r("snippet",a.s.coreOverflow),n(),r("brightrailMenuTrigger",_),n(7),r("snippet",a.s.coreAccount),n(),r("brightrailMenuTrigger",x),n(11),r("snippet",a.s.stateSelected),n(),r("brightrailMenuTrigger",C),n(4),r("selected",!0),n(3),r("snippet",a.s.stateDisabled),n(),r("brightrailMenuTrigger",w),n(6),r("disabled",!0),n(),r("snippet",a.s.stateMixed),n(),r("brightrailMenuTrigger",T),n(4),r("selected",!0),n(2),r("disabled",!0),n(7),r("snippet",a.s.contextRow),n(),r("brightrailMenuTrigger",O),n(7),r("snippet",a.s.contextBulk),n(),r("brightrailMenuTrigger",P),n(7),r("snippet",a.s.contextDanger),n(),r("brightrailMenuTrigger",k),n(6),r("disabled",!0),n(5),r("snippet",a.s.layoutSplit),n(4),r("brightrailMenuTrigger",A),n(6),r("snippet",a.s.layoutToolbar),n(2),r("brightrailMenuTrigger",D),n(2),r("brightrailMenuTrigger",N),n(4),r("selected",!0),n(4),r("selected",!0),n(11),r("snippet",a.s.advancedActivate),n(),r("brightrailMenuTrigger",R),n(24),r("snippet",a.s.coreOverflow),n(),r("brightrailMenuTrigger",V),n(10),r("snippet",a.s.futuristicGlass),n(4),r("brightrailMenuTrigger",L),n(6),r("snippet",a.s.futuristicNeon),n(4),r("brightrailMenuTrigger",B),n(6),r("snippet",a.s.futuristicCyber),n(4),r("brightrailMenuTrigger",F),n(6),r("snippet",a.s.futuristicHolo),n(4),r("brightrailMenuTrigger",I),n(4),r("selected",!0)}},dependencies:[h,d,f,v],styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]   .ff-future-shell[_ngcontent-%COMP%]{width:100%;flex-direction:column;align-items:stretch;gap:.5rem}.mvc-grid[_ngcontent-%COMP%]{display:grid;gap:.65rem;grid-template-columns:repeat(auto-fill,minmax(11.5rem,1fr))}.mvc-block[_ngcontent-%COMP%]{margin-bottom:1.35rem}.mvc-block__h[_ngcontent-%COMP%]{margin:0 0 .5rem;font-size:.95rem;font-weight:700}.mvc-block__hint[_ngcontent-%COMP%]{margin:0 0 .5rem;font-size:.8125rem;color:var(--ff-muted, #64748b)}.mco-split[_ngcontent-%COMP%], .mco-toolbar[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:.35rem}.mco-split__primary[_ngcontent-%COMP%], .mco-split__menu[_ngcontent-%COMP%], .mco-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font:inherit;padding:.3rem .65rem;border:1px solid var(--ff-border, #e2e8f0);border-radius:.35rem;background:var(--ff-surface, #fff);cursor:pointer}"],changeDetection:0})};var S=class u{htmlExamples=y;static \u0275fac=function(m){return new(m||u)};static \u0275cmp=b({type:u,selectors:[["app-menu-catalog-overview"]],decls:31,vars:1,consts:[[1,"mco"],[1,"mco-hero"],[1,"mco-hero__eyebrow"],[1,"mco-hero__links"],["routerLink","..",1,"mco-link"],["routerLink","/variations",1,"mco-link"],["aria-labelledby","mco-html-examples",1,"mco-code-block"],["id","mco-html-examples"],[1,"mco-code-block__hint"],[1,"mco-pre"]],template:function(m,a){m&1&&(e(0,"div",0)(1,"header",1)(2,"p",2),i(3,"Brightrail \xB7 Menu \xB7 Variation catalog"),t(),e(4,"h1"),i(5,"Menu types & variations"),t(),e(6,"p"),i(7," Reference catalog for dropdown menus, selected items, disabled rows, and toolbar patterns. Click any tile for "),e(8,"strong"),i(9,"View code"),t(),i(10,", then "),e(11,"strong"),i(12,"Copy code"),t(),i(13," to paste into your app (import from "),e(14,"code"),i(15,"brightrail"),t(),i(16,"). "),t(),e(17,"p",3)(18,"a",4),i(19,"\u2190 Menu playground (live settings)"),t(),e(20,"a",5),i(21,"All variation catalogs"),t()()(),l(22,"app-menu-variation-catalog"),e(23,"section",6)(24,"h2",7),i(25,"Menu HTML examples"),t(),e(26,"p",8),i(27,"Typical trigger + panel wiring with activate handlers and selected state."),t(),e(28,"pre",9)(29,"code"),i(30),t()()()()),m&2&&(n(30),s(a.htmlExamples))},dependencies:[p,g],styles:["[_nghost-%COMP%]{flex:1 1 auto;min-height:0;overflow:auto}.mco[_ngcontent-%COMP%]{padding:1rem 1.25rem 1.5rem}.mco-hero__eyebrow[_ngcontent-%COMP%]{margin:0 0 .25rem;font-size:.75rem;font-weight:600;letter-spacing:.04em;text-transform:uppercase;color:var(--ff-muted, #64748b)}.mco-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0;font-size:1.5rem}.mco-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:.35rem 0 .5rem;color:var(--ff-muted, #64748b)}.mco-hero__links[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:.75rem 1.25rem}.mco-link[_ngcontent-%COMP%]{color:var(--ff-accent, #2563eb);text-decoration:none;font-weight:600}.mco-code-block[_ngcontent-%COMP%]{margin:1.5rem 0 0;padding-top:1rem;border-top:1px solid var(--ff-border, #e2e8f0)}.mco-code-block[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.1rem;margin:0 0 .35rem}.mco-code-block__hint[_ngcontent-%COMP%]{margin:0 0 .65rem;font-size:.8125rem;color:var(--ff-muted, #64748b)}.mco-pre[_ngcontent-%COMP%]{margin:0;padding:.85rem;border-radius:.5rem;background:var(--ff-surface-muted, #f1f3f4);border:1px solid var(--ff-border, #e2e8f0);overflow:auto;font-size:.8rem}"],changeDetection:0})};export{S as MenuCatalogOverviewComponent};
