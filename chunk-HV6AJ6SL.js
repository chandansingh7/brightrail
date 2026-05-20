import{a as g,b as c,c as f,d as u,e as v,f as S,g as E}from"./chunk-6U4XOVJG.js";import{a as x}from"./chunk-YDULXL76.js";import{e as b}from"./chunk-TU4FQAPV.js";import{$a as d,Ga as p,Ya as r,Za as t,_a as i,ua as a,vb as e,wb as m}from"./chunk-K6TWHCOD.js";var y={coreFull:`<brightrail-app-shell>
  <brightrail-top-bar>
    <span brightrailTopBarStart>Acme</span>
    <span brightrailTopBarCenter>Dashboard</span>
    <span brightrailTopBarEnd>Help</span>
  </brightrail-top-bar>
  <brightrail-sidebar>
    <li><a href="#" aria-current="page">Overview</a></li>
    <li><a href="#">Projects</a></li>
  </brightrail-sidebar>
  <brightrail-page-header>
    <h1 brightrailPageTitle>Overview</h1>
    <p brightrailPageSubtitle>Workspace summary</p>
    <div brightrailPageHeaderActions>
      <button type="button">New project</button>
    </div>
  </brightrail-page-header>
  <p>Main content area</p>
</brightrail-app-shell>`,sidebarRight:`<brightrail-app-shell sidebarPosition="right">
  <brightrail-sidebar>
    <li><a href="#">Settings</a></li>
  </brightrail-sidebar>
  <p>Content with right sidebar</p>
</brightrail-app-shell>`,noSidebar:`<brightrail-app-shell [showSidebar]="false">
  <brightrail-top-bar>
    <span brightrailTopBarStart>Acme</span>
  </brightrail-top-bar>
  <p>Full-width content without sidebar</p>
</brightrail-app-shell>`,noTopBar:`<brightrail-app-shell [showTopBar]="false">
  <brightrail-sidebar>
    <li><a href="#">Home</a></li>
  </brightrail-sidebar>
  <p>Content without top bar</p>
</brightrail-app-shell>`,pageHeaderOnly:`<brightrail-app-shell [showSidebar]="false" [showTopBar]="false">
  <brightrail-page-header>
    <h1 brightrailPageTitle>Reports</h1>
    <p brightrailPageSubtitle>Q1 summary</p>
    <div brightrailPageHeaderActions>
      <button type="button">Export</button>
    </div>
  </brightrail-page-header>
  <p>Report table goes here</p>
</brightrail-app-shell>`,topBarSlots:`<brightrail-top-bar>
  <span brightrailTopBarStart>\u2630 Menu</span>
  <span brightrailTopBarCenter>Search workspace</span>
  <span brightrailTopBarEnd>
    <button type="button">Profile</button>
  </span>
</brightrail-top-bar>`,advancedCompact:`<brightrail-app-shell sidebarWidth="12rem" sidebarAriaLabel="Primary navigation">
  <brightrail-sidebar>
    <li><a href="#" class="br-sidebar__active">Inbox</a></li>
    <li><a href="#">Archive</a></li>
  </brightrail-sidebar>
  <brightrail-page-header [bordered]="false">
    <h1 brightrailPageTitle>Inbox</h1>
  </brightrail-page-header>
  <p>Compact shell for embedded admin panels</p>
</brightrail-app-shell>`,futuristicGlass:`<div class="ff-future-shell ff-future-shell--glass">
  <brightrail-app-shell sidebarWidth="10rem" [showTopBar]="false">
    <brightrail-sidebar>
      <li><a href="#" aria-current="page">Ops</a></li>
      <li><a href="#">Systems</a></li>
    </brightrail-sidebar>
    <p>Glass command surface</p>
  </brightrail-app-shell>
</div>`,futuristicNeon:`<div class="ff-future-shell ff-future-shell--neon">
  <brightrail-app-shell sidebarWidth="10rem" [showTopBar]="false">
    <brightrail-sidebar>
      <li><a href="#" class="br-sidebar__active">Live</a></li>
      <li><a href="#">Alerts</a></li>
    </brightrail-sidebar>
    <p>Neon operations deck</p>
  </brightrail-app-shell>
</div>`,futuristicCyber:`<div class="ff-future-shell ff-future-shell--cyber">
  <brightrail-app-shell [showSidebar]="false" [showTopBar]="false">
    <brightrail-page-header [bordered]="false">
      <h1 brightrailPageTitle>Grid</h1>
    </brightrail-page-header>
    <p>Cyber control panel</p>
  </brightrail-app-shell>
</div>`,futuristicHolo:`<div class="ff-future-shell ff-future-shell--holo">
  <brightrail-app-shell sidebarPosition="right" sidebarWidth="9rem" [showTopBar]="false">
    <brightrail-sidebar>
      <li><a href="#">Alpha</a></li>
      <li><a href="#">Beta</a></li>
    </brightrail-sidebar>
    <p>Holo workspace</p>
  </brightrail-app-shell>
</div>`};var C=`<brightrail-app-shell>
  <brightrail-top-bar>
    <span brightrailTopBarStart>Brand</span>
    <span brightrailTopBarEnd>
      <button type="button">Sign out</button>
    </span>
  </brightrail-top-bar>
  <brightrail-sidebar>
    <li><a href="/dashboard" aria-current="page">Dashboard</a></li>
  </brightrail-sidebar>
  <brightrail-page-header>
    <h1 brightrailPageTitle>Dashboard</h1>
    <p brightrailPageSubtitle>Welcome back</p>
  </brightrail-page-header>
  <router-outlet />
</brightrail-app-shell>`;var s=class o{s=y;static \u0275fac=function(n){return new(n||o)};static \u0275cmp=p({type:o,selectors:[["app-app-shell-variation-catalog"]],decls:177,vars:23,consts:[[1,"asvc-block"],[1,"asvc-block__h"],[1,"asvc-row"],["label","Full shell",3,"snippet"],[1,"asvc-shell-frame"],["brightrailTopBarStart",""],["brightrailTopBarCenter",""],["brightrailTopBarEnd",""],["href","#","aria-current","page"],["href","#"],["brightrailPageTitle",""],["brightrailPageSubtitle",""],["brightrailPageHeaderActions",""],["type","button"],[1,"asvc-content"],["label","Right sidebar",3,"snippet"],["sidebarPosition","right"],["label","No sidebar",3,"snippet"],[3,"showSidebar"],["label","No top bar",3,"snippet"],[3,"showTopBar"],["label","Header with actions",3,"snippet"],[3,"showSidebar","showTopBar"],["label","Start / center / end",3,"snippet"],["label","Active link",3,"snippet"],["sidebarWidth","12rem"],["href","#",1,"br-sidebar__active"],[3,"bordered"],["label","Narrow sidebar",3,"snippet"],[1,"asvc-shell-frame","asvc-shell-frame--compact"],["sidebarWidth","12rem","sidebarAriaLabel","Primary navigation"],[1,"ff-future-grid"],["label","Glass command",3,"snippet"],[1,"ff-future-shell","ff-future-shell--glass"],["aria-hidden","true",1,"ff-future-shell__label"],["sidebarWidth","10rem",3,"showTopBar"],["label","Neon deck",3,"snippet"],[1,"ff-future-shell","ff-future-shell--neon"],["label","Cyber grid",3,"snippet"],[1,"ff-future-shell","ff-future-shell--cyber"],["label","Holo workspace",3,"snippet"],[1,"ff-future-shell","ff-future-shell--holo"],["sidebarPosition","right","sidebarWidth","9rem",3,"showTopBar"]],template:function(n,l){n&1&&(t(0,"section",0)(1,"h2",1),e(2,"1. Core layout"),i(),t(3,"div",2)(4,"app-catalog-variation-tile",3)(5,"div",4)(6,"brightrail-app-shell")(7,"brightrail-top-bar")(8,"span",5),e(9,"Acme"),i(),t(10,"span",6),e(11,"Dashboard"),i(),t(12,"span",7),e(13,"Help"),i()(),t(14,"brightrail-sidebar")(15,"li")(16,"a",8),e(17,"Overview"),i()(),t(18,"li")(19,"a",9),e(20,"Projects"),i()()(),t(21,"brightrail-page-header")(22,"h1",10),e(23,"Overview"),i(),t(24,"p",11),e(25,"Workspace summary"),i(),t(26,"div",12)(27,"button",13),e(28,"New"),i()()(),t(29,"p",14),e(30,"Main content"),i()()()(),t(31,"app-catalog-variation-tile",15)(32,"div",4)(33,"brightrail-app-shell",16)(34,"brightrail-sidebar")(35,"li")(36,"a",9),e(37,"Settings"),i()()(),t(38,"p",14),e(39,"Content"),i()()()()()(),t(40,"section",0)(41,"h2",1),e(42,"2. Optional regions"),i(),t(43,"div",2)(44,"app-catalog-variation-tile",17)(45,"div",4)(46,"brightrail-app-shell",18)(47,"brightrail-top-bar")(48,"span",5),e(49,"Acme"),i()(),t(50,"p",14),e(51,"Full-width content"),i()()()(),t(52,"app-catalog-variation-tile",19)(53,"div",4)(54,"brightrail-app-shell",20)(55,"brightrail-sidebar")(56,"li")(57,"a",9),e(58,"Home"),i()()(),t(59,"p",14),e(60,"Sidebar only"),i()()()()()(),t(61,"section",0)(62,"h2",1),e(63,"3. Page header"),i(),t(64,"app-catalog-variation-tile",21)(65,"div",4)(66,"brightrail-app-shell",22)(67,"brightrail-page-header")(68,"h1",10),e(69,"Reports"),i(),t(70,"p",11),e(71,"Q1 summary"),i(),t(72,"div",12)(73,"button",13),e(74,"Export"),i()()(),t(75,"p",14),e(76,"Report table"),i()()()()(),t(77,"section",0)(78,"h2",1),e(79,"4. Top bar slots"),i(),t(80,"app-catalog-variation-tile",23)(81,"brightrail-top-bar")(82,"span",5),e(83,"\u2630"),i(),t(84,"span",6),e(85,"Search"),i(),t(86,"span",7)(87,"button",13),e(88,"Profile"),i()()()()(),t(89,"section",0)(90,"h2",1),e(91,"5. Sidebar navigation"),i(),t(92,"app-catalog-variation-tile",24)(93,"div",4)(94,"brightrail-app-shell",25)(95,"brightrail-sidebar")(96,"li")(97,"a",26),e(98,"Inbox"),i()(),t(99,"li")(100,"a",9),e(101,"Archive"),i()()(),t(102,"brightrail-page-header",27)(103,"h1",10),e(104,"Inbox"),i()()()()()(),t(105,"section",0)(106,"h2",1),e(107,"6. Compact shell"),i(),t(108,"app-catalog-variation-tile",28)(109,"div",29)(110,"brightrail-app-shell",30)(111,"brightrail-sidebar")(112,"li")(113,"a",9),e(114,"Dashboard"),i()()(),t(115,"p",14),e(116,"Embedded panel"),i()()()()(),t(117,"section",0)(118,"h2",1),e(119,"7. Futuristic app shell designs"),i(),t(120,"div",31)(121,"app-catalog-variation-tile",32)(122,"div",33)(123,"span",34),e(124,"Glass"),i(),t(125,"div",29)(126,"brightrail-app-shell",35)(127,"brightrail-sidebar")(128,"li")(129,"a",8),e(130,"Ops"),i()(),t(131,"li")(132,"a",9),e(133,"Systems"),i()()(),t(134,"p",14),e(135,"Glass command surface"),i()()()()(),t(136,"app-catalog-variation-tile",36)(137,"div",37)(138,"span",34),e(139,"Neon"),i(),t(140,"div",29)(141,"brightrail-app-shell",35)(142,"brightrail-sidebar")(143,"li")(144,"a",26),e(145,"Live"),i()(),t(146,"li")(147,"a",9),e(148,"Alerts"),i()()(),t(149,"p",14),e(150,"Neon operations deck"),i()()()()(),t(151,"app-catalog-variation-tile",38)(152,"div",39)(153,"span",34),e(154,"Cyber"),i(),t(155,"div",29)(156,"brightrail-app-shell",22)(157,"brightrail-page-header",27)(158,"h1",10),e(159,"Grid"),i()(),t(160,"p",14),e(161,"Cyber control panel"),i()()()()(),t(162,"app-catalog-variation-tile",40)(163,"div",41)(164,"span",34),e(165,"Holo"),i(),t(166,"div",29)(167,"brightrail-app-shell",42)(168,"brightrail-sidebar")(169,"li")(170,"a",9),e(171,"Alpha"),i()(),t(172,"li")(173,"a",9),e(174,"Beta"),i()()(),t(175,"p",14),e(176,"Holo workspace"),i()()()()()()()),n&2&&(a(4),r("snippet",l.s.coreFull),a(27),r("snippet",l.s.sidebarRight),a(13),r("snippet",l.s.noSidebar),a(2),r("showSidebar",!1),a(6),r("snippet",l.s.noTopBar),a(2),r("showTopBar",!1),a(10),r("snippet",l.s.pageHeaderOnly),a(2),r("showSidebar",!1)("showTopBar",!1),a(14),r("snippet",l.s.topBarSlots),a(12),r("snippet",l.s.advancedCompact),a(10),r("bordered",!1),a(6),r("snippet",l.s.advancedCompact),a(13),r("snippet",l.s.futuristicGlass),a(5),r("showTopBar",!1),a(10),r("snippet",l.s.futuristicNeon),a(5),r("showTopBar",!1),a(10),r("snippet",l.s.futuristicCyber),a(5),r("showSidebar",!1)("showTopBar",!1),a(),r("bordered",!1),a(5),r("snippet",l.s.futuristicHolo),a(5),r("showTopBar",!1))},dependencies:[g,v,S,E,c,f,u,x],styles:["[_nghost-%COMP%]{display:block}.asvc-block[_ngcontent-%COMP%]{margin-bottom:1.35rem}.asvc-block__h[_ngcontent-%COMP%]{margin:0 0 .5rem;font-size:.95rem;font-weight:700}.asvc-row[_ngcontent-%COMP%]{display:grid;gap:.75rem}@media(min-width:720px){.asvc-row[_ngcontent-%COMP%]{grid-template-columns:repeat(auto-fit,minmax(16rem,1fr))}}.asvc-shell-frame[_ngcontent-%COMP%]{block-size:14rem;min-block-size:12rem;border:1px solid var(--ff-border, #e2e8f0);border-radius:.5rem;overflow:hidden}.asvc-shell-frame--compact[_ngcontent-%COMP%]{block-size:11rem}.asvc-content[_ngcontent-%COMP%]{margin:0;padding:.75rem;font-size:.85rem}"],changeDetection:0})};var P=class o{htmlExamples=C;static \u0275fac=function(n){return new(n||o)};static \u0275cmp=p({type:o,selectors:[["app-app-shell-catalog-overview"]],decls:31,vars:1,consts:[[1,"asco"],[1,"asco-hero"],[1,"asco-hero__eyebrow"],[1,"asco-hero__links"],["routerLink","..",1,"asco-link"],["routerLink","/variations",1,"asco-link"],["aria-labelledby","asco-html-examples",1,"asco-code-block"],["id","asco-html-examples"],[1,"asco-code-block__hint"],[1,"asco-pre"]],template:function(n,l){n&1&&(t(0,"div",0)(1,"header",1)(2,"p",2),e(3,"Brightrail \xB7 App shell \xB7 Variation catalog"),i(),t(4,"h1"),e(5,"App shell types & variations"),i(),t(6,"p"),e(7," Reference layouts and states for app shell. Click any tile for "),t(8,"strong"),e(9,"View code"),i(),e(10,", then "),t(11,"strong"),e(12,"Copy code"),i(),e(13," to paste into your app (import from "),t(14,"code"),e(15,"brightrail"),i(),e(16,"). "),i(),t(17,"p",3)(18,"a",4),e(19,"\u2190 App shell playground (live settings)"),i(),t(20,"a",5),e(21,"All variation catalogs"),i()()(),d(22,"app-app-shell-variation-catalog"),t(23,"section",6)(24,"h2",7),e(25,"App shell HTML examples"),i(),t(26,"p",8),e(27,"Typical markup for common scenarios."),i(),t(28,"pre",9)(29,"code"),e(30),i()()()()),n&2&&(a(30),m(l.htmlExamples))},dependencies:[b,s],styles:["[_nghost-%COMP%]{flex:1 1 auto;min-height:0;overflow:auto}.asco[_ngcontent-%COMP%]{padding:1rem 1.25rem 1.5rem}.asco-hero__eyebrow[_ngcontent-%COMP%]{margin:0 0 .25rem;font-size:.75rem;font-weight:600;letter-spacing:.04em;text-transform:uppercase;color:var(--ff-muted, #64748b)}.asco-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0;font-size:1.5rem}.asco-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:.35rem 0 .5rem;color:var(--ff-muted, #64748b)}.asco-hero__links[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:.75rem 1.25rem}.asco-link[_ngcontent-%COMP%]{color:var(--ff-accent, #2563eb);text-decoration:none;font-weight:600}.asco-code-block[_ngcontent-%COMP%]{margin:1.5rem 0 0;padding-top:1rem;border-top:1px solid var(--ff-border, #e2e8f0)}.asco-code-block[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.1rem;margin:0 0 .35rem}.asco-code-block__hint[_ngcontent-%COMP%]{margin:0 0 .65rem;font-size:.8125rem;color:var(--ff-muted, #64748b)}.asco-pre[_ngcontent-%COMP%]{margin:0;padding:.85rem;border-radius:.5rem;background:var(--ff-surface-muted, #f1f3f4);border:1px solid var(--ff-border, #e2e8f0);overflow:auto;font-size:.8rem}"],changeDetection:0})};export{P as AppShellCatalogOverviewComponent};
