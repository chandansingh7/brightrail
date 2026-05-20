import{a as V}from"./chunk-ZPUNR46Q.js";import{a as x,b as E,c as O}from"./chunk-TXX5ROAC.js";import{e as S}from"./chunk-B3LO3J2X.js";import"./chunk-GGN7H5D7.js";import{Ca as m,Ha as p,Sa as d,Ta as h,Ua as r,Va as e,Wa as t,X as u,Xa as _,Y as v,ab as C,cb as y,eb as g,ha as f,rb as i,sb as s,ta as l,tb as T}from"./chunk-GSG23AZM.js";var w={appearanceUnderline:`<brightrail-tabs appearance="underline" size="md">
  <brightrail-tab label="Overview" [active]="true">
    <ng-template brightrailTabContent>
      <p>Track profile details and recent updates.</p>
    </ng-template>
  </brightrail-tab>
  <brightrail-tab label="Details">
    <ng-template brightrailTabContent><p>Owners and metadata.</p></ng-template>
  </brightrail-tab>
  <brightrail-tab label="Activity">
    <ng-template brightrailTabContent><p>Audit events.</p></ng-template>
  </brightrail-tab>
</brightrail-tabs>`,appearanceContained:`<brightrail-tabs appearance="contained" size="md">
  <brightrail-tab label="Overview" [active]="true">
    <ng-template brightrailTabContent><p>Contained (default) tabs.</p></ng-template>
  </brightrail-tab>
  <brightrail-tab label="Details">
    <ng-template brightrailTabContent><p>Secondary panel.</p></ng-template>
  </brightrail-tab>
</brightrail-tabs>`,appearancePill:`<brightrail-tabs appearance="pill" size="md">
  <brightrail-tab label="All" [active]="true">
    <ng-template brightrailTabContent><p>Filter: all items.</p></ng-template>
  </brightrail-tab>
  <brightrail-tab label="Active">
    <ng-template brightrailTabContent><p>Filter: active.</p></ng-template>
  </brightrail-tab>
  <brightrail-tab label="Archived">
    <ng-template brightrailTabContent><p>Filter: archived.</p></ng-template>
  </brightrail-tab>
</brightrail-tabs>`,orientationHorizontal:`<brightrail-tabs appearance="underline" orientation="horizontal" size="md">
  <brightrail-tab label="Overview" [active]="true">
    <ng-template brightrailTabContent><p>Horizontal tab strip.</p></ng-template>
  </brightrail-tab>
  <brightrail-tab label="Settings">
    <ng-template brightrailTabContent><p>Settings panel.</p></ng-template>
  </brightrail-tab>
</brightrail-tabs>`,orientationVertical:`<brightrail-tabs appearance="underline" orientation="vertical" size="md">
  <brightrail-tab label="Overview" [active]="true">
    <ng-template brightrailTabContent><p>Vertical navigation layout.</p></ng-template>
  </brightrail-tab>
  <brightrail-tab label="Members">
    <ng-template brightrailTabContent><p>Seat usage and roles.</p></ng-template>
  </brightrail-tab>
  <brightrail-tab label="Billing">
    <ng-template brightrailTabContent><p>Invoices and payment method.</p></ng-template>
  </brightrail-tab>
</brightrail-tabs>`,sizeSm:`<brightrail-tabs appearance="underline" size="sm">
  <brightrail-tab label="All" [active]="true">
    <ng-template brightrailTabContent><p>Compact density.</p></ng-template>
  </brightrail-tab>
  <brightrail-tab label="Open">
    <ng-template brightrailTabContent><p>Open items.</p></ng-template>
  </brightrail-tab>
</brightrail-tabs>`,sizeMd:`<brightrail-tabs appearance="underline" size="md">
  <brightrail-tab label="Overview" [active]="true">
    <ng-template brightrailTabContent><p>Medium (default) size.</p></ng-template>
  </brightrail-tab>
  <brightrail-tab label="Details">
    <ng-template brightrailTabContent><p>Details panel.</p></ng-template>
  </brightrail-tab>
</brightrail-tabs>`,sizeLg:`<brightrail-tabs appearance="underline" size="lg">
  <brightrail-tab label="Overview" [active]="true">
    <ng-template brightrailTabContent><p>Large triggers for touch targets.</p></ng-template>
  </brightrail-tab>
  <brightrail-tab label="Reports">
    <ng-template brightrailTabContent><p>Reports panel.</p></ng-template>
  </brightrail-tab>
</brightrail-tabs>`,iconOnlyCalendar:`<brightrail-tabs appearance="underline" size="md">
  <brightrail-tab label="Overview" icon="calendar" [iconOnly]="true" [active]="true">
    <ng-template brightrailTabContent><p>Calendar view.</p></ng-template>
  </brightrail-tab>
  <brightrail-tab label="Search" icon="search" [iconOnly]="true">
    <ng-template brightrailTabContent><p>Search view.</p></ng-template>
  </brightrail-tab>
  <brightrail-tab label="People" icon="user" [iconOnly]="true">
    <ng-template brightrailTabContent><p>People view.</p></ng-template>
  </brightrail-tab>
</brightrail-tabs>`,iconLabel:`<brightrail-tabs appearance="contained" size="md">
  <brightrail-tab label="Overview" icon="calendar" [active]="true">
    <ng-template brightrailTabContent><p>Icon + label tab.</p></ng-template>
  </brightrail-tab>
  <brightrail-tab label="Library" icon="copy">
    <ng-template brightrailTabContent><p>Library panel.</p></ng-template>
  </brightrail-tab>
</brightrail-tabs>`,badgeAlerts:`<brightrail-tabs appearance="pill" size="md">
  <brightrail-tab label="Inbox" [active]="true">
    <ng-template brightrailTabContent><p>Unread threads.</p></ng-template>
  </brightrail-tab>
  <brightrail-tab label="Alerts" [badge]="3">
    <ng-template brightrailTabContent><p>Three open alerts.</p></ng-template>
  </brightrail-tab>
  <brightrail-tab label="Messages" [badge]="12">
    <ng-template brightrailTabContent><p>Direct messages backlog.</p></ng-template>
  </brightrail-tab>
</brightrail-tabs>`,closable:`<brightrail-tabs appearance="underline" size="md">
  <brightrail-tab label="Overview" [active]="true" [closable]="true" (close)="onClose('Overview')">
    <ng-template brightrailTabContent><p>Closable document tab.</p></ng-template>
  </brightrail-tab>
  <brightrail-tab label="Details" [closable]="true" (close)="onClose('Details')">
    <ng-template brightrailTabContent><p>Remove with the \xD7 affordance.</p></ng-template>
  </brightrail-tab>
</brightrail-tabs>`,scrollableStrip:`<brightrail-tabs appearance="underline" size="sm" [scrollable]="true">
  <!-- Repeat tabs for each segment in your data model -->
  <brightrail-tab label="Segment 1" [active]="true">
    <ng-template brightrailTabContent><p>Segment 1 content.</p></ng-template>
  </brightrail-tab>
  <brightrail-tab label="Segment 2">
    <ng-template brightrailTabContent><p>Segment 2 content.</p></ng-template>
  </brightrail-tab>
</brightrail-tabs>`,verticalNav:`<brightrail-tabs appearance="underline" orientation="vertical" size="md">
  <brightrail-tab label="Overview" [active]="true">
    <ng-template brightrailTabContent><p>Primary workspace snapshot.</p></ng-template>
  </brightrail-tab>
  <brightrail-tab label="Security">
    <ng-template brightrailTabContent><p>SSO and session policy.</p></ng-template>
  </brightrail-tab>
</brightrail-tabs>`,futuristicGlass:`<div class="ff-future-shell ff-future-shell--glass">
  <brightrail-tabs appearance="pill" size="md">
    <brightrail-tab label="Ops" [active]="true">
      <ng-template brightrailTabContent><p>Operational metrics.</p></ng-template>
    </brightrail-tab>
    <brightrail-tab label="Systems">
      <ng-template brightrailTabContent><p>Subsystem health.</p></ng-template>
    </brightrail-tab>
  </brightrail-tabs>
</div>`,futuristicNeon:`<div class="ff-future-shell ff-future-shell--neon">
  <brightrail-tabs appearance="underline" size="sm">
    <brightrail-tab label="Live" [active]="true">
      <ng-template brightrailTabContent><p>Real-time feed.</p></ng-template>
    </brightrail-tab>
    <brightrail-tab label="Alerts" [badge]="2">
      <ng-template brightrailTabContent><p>Open incidents.</p></ng-template>
    </brightrail-tab>
  </brightrail-tabs>
</div>`,futuristicCyber:`<div class="ff-future-shell ff-future-shell--cyber">
  <brightrail-tabs appearance="contained" size="md">
    <brightrail-tab label="Nodes" icon="filter" [active]="true">
      <ng-template brightrailTabContent><p>Cluster nodes.</p></ng-template>
    </brightrail-tab>
    <brightrail-tab label="Logs" icon="copy">
      <ng-template brightrailTabContent><p>Event stream.</p></ng-template>
    </brightrail-tab>
  </brightrail-tabs>
</div>`,futuristicHolo:`<div class="ff-future-shell ff-future-shell--holo">
  <brightrail-tabs appearance="pill" size="lg">
    <brightrail-tab label="Alpha" [active]="true">
      <ng-template brightrailTabContent><p>Primary lane.</p></ng-template>
    </brightrail-tab>
    <brightrail-tab label="Beta">
      <ng-template brightrailTabContent><p>Secondary lane.</p></ng-template>
    </brightrail-tab>
  </brightrail-tabs>
</div>`};var z=`<brightrail-tabs appearance="underline" orientation="horizontal" size="md">
  <brightrail-tab label="Overview" [active]="true">
    <ng-template brightrailTabContent>
      <h3>Account overview</h3>
      <p>Track profile details, usage, and recent updates in one place.</p>
    </ng-template>
  </brightrail-tab>
  <brightrail-tab label="Details">
    <ng-template brightrailTabContent><p>Owners, tags, and membership.</p></ng-template>
  </brightrail-tab>
  <brightrail-tab label="Activity">
    <ng-template brightrailTabContent><p>Imports, exports, and audit events.</p></ng-template>
  </brightrail-tab>
</brightrail-tabs>

<brightrail-tabs appearance="pill" size="md" [scrollable]="true">
  <brightrail-tab label="Inbox" [badge]="3" [active]="true">
    <ng-template brightrailTabContent><p>Unread threads.</p></ng-template>
  </brightrail-tab>
  <brightrail-tab label="Alerts" [closable]="true" (close)="removeTab('Alerts')">
    <ng-template brightrailTabContent><p>Closable alert tab.</p></ng-template>
  </brightrail-tab>
</brightrail-tabs>`;var M=(a,n)=>n.label;function L(a,n){a&1&&(e(0,"p"),i(1,"Track profile details and recent updates."),t())}function N(a,n){a&1&&(e(0,"p"),i(1,"Owners and metadata."),t())}function B(a,n){a&1&&(e(0,"p"),i(1,"Audit events."),t())}function F(a,n){a&1&&(e(0,"p"),i(1,"Contained tabs with filled active trigger."),t())}function H(a,n){a&1&&(e(0,"p"),i(1,"Secondary panel."),t())}function R(a,n){a&1&&(e(0,"p"),i(1,"Filter: all items."),t())}function $(a,n){a&1&&(e(0,"p"),i(1,"Filter: active."),t())}function U(a,n){a&1&&(e(0,"p"),i(1,"Filter: archived."),t())}function G(a,n){a&1&&(e(0,"p"),i(1,"Horizontal tab strip."),t())}function j(a,n){a&1&&(e(0,"p"),i(1,"Settings panel."),t())}function X(a,n){a&1&&(e(0,"p"),i(1,"Vertical navigation layout."),t())}function q(a,n){a&1&&(e(0,"p"),i(1,"Seat usage and roles."),t())}function J(a,n){a&1&&(e(0,"p"),i(1,"Invoices and payment method."),t())}function K(a,n){a&1&&(e(0,"p"),i(1,"Compact density."),t())}function Q(a,n){a&1&&(e(0,"p"),i(1,"Open items."),t())}function W(a,n){a&1&&(e(0,"p"),i(1,"Medium (default) size."),t())}function Y(a,n){a&1&&(e(0,"p"),i(1,"Details panel."),t())}function Z(a,n){a&1&&(e(0,"p"),i(1,"Large triggers for touch targets."),t())}function ee(a,n){a&1&&(e(0,"p"),i(1,"Reports panel."),t())}function te(a,n){a&1&&(e(0,"p"),i(1,"Calendar view."),t())}function ae(a,n){a&1&&(e(0,"p"),i(1,"Search view."),t())}function ie(a,n){a&1&&(e(0,"p"),i(1,"People view."),t())}function ne(a,n){a&1&&(e(0,"p"),i(1,"Filter view."),t())}function le(a,n){a&1&&(e(0,"p"),i(1,"Icon + label tab."),t())}function re(a,n){a&1&&(e(0,"p"),i(1,"Library panel."),t())}function pe(a,n){a&1&&(e(0,"p"),i(1,"Alerts panel."),t())}function oe(a,n){a&1&&(e(0,"p"),i(1,"Unread threads."),t())}function be(a,n){a&1&&(e(0,"p"),i(1,"Three open alerts."),t())}function me(a,n){a&1&&(e(0,"p"),i(1,"Direct messages backlog."),t())}function ge(a,n){if(a&1&&(e(0,"p"),i(1),t()),a&2){let o=g().$implicit;l(),T("Closable document tab \u2014 ",o.label,".")}}function se(a,n){if(a&1){let o=C();e(0,"brightrail-tab",70),y("close",function(){let A=u(o).$implicit,k=g();return v(k.onClosableClose(A.label))}),p(1,ge,2,1,"ng-template",6),t()}if(a&2){let o=n.$implicit;r("label",o.label)("active",o.active??!1)("closable",!0)}}function ce(a,n){if(a&1&&(e(0,"p"),i(1),t()),a&2){let o=g().$implicit;l(),s(o.body)}}function de(a,n){if(a&1&&(e(0,"brightrail-tab",49),p(1,ce,2,1,"ng-template",6),t()),a&2){let o=n.$implicit;r("label",o.label)("active",o.active)}}function he(a,n){a&1&&(e(0,"p"),i(1,"Primary workspace snapshot."),t())}function ue(a,n){a&1&&(e(0,"p"),i(1,"Seat usage and roles."),t())}function ve(a,n){a&1&&(e(0,"p"),i(1,"SSO and session policy."),t())}function fe(a,n){a&1&&(e(0,"p"),i(1,"Operational metrics."),t())}function _e(a,n){a&1&&(e(0,"p"),i(1,"Subsystem health."),t())}function Ce(a,n){a&1&&(e(0,"p"),i(1,"Real-time feed."),t())}function ye(a,n){a&1&&(e(0,"p"),i(1,"Open incidents."),t())}function Te(a,n){a&1&&(e(0,"p"),i(1,"Cluster nodes."),t())}function Se(a,n){a&1&&(e(0,"p"),i(1,"Event stream."),t())}function xe(a,n){a&1&&(e(0,"p"),i(1,"Primary lane."),t())}function Ee(a,n){a&1&&(e(0,"p"),i(1,"Secondary lane."),t())}var c=class a{s=w;scrollableSegments=Array.from({length:8},(n,o)=>({label:`Segment ${o+1}`,body:`Content for segment ${o+1}.`,active:o===0}));closableTabs=f([{label:"Overview",active:!0},{label:"Details"},{label:"Activity"}]);onClosableClose(n){this.closableTabs.update(o=>o.filter(b=>b.label!==n))}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=m({type:a,selectors:[["app-tabs-variation-catalog"]],decls:161,vars:42,consts:[[1,"tbvc-block"],[1,"tbvc-block__h"],[1,"tbvc-stack"],["label","Underline",3,"snippet"],["appearance","underline","size","md"],["label","Overview",3,"active"],["brightrailTabContent",""],["label","Details"],["label","Activity"],["label","Contained (default)",3,"snippet"],["appearance","contained","size","md"],["label","Pill",3,"snippet"],["appearance","pill","size","md"],["label","All",3,"active"],["label","Active"],["label","Archived"],["label","Horizontal",3,"snippet"],["appearance","underline","orientation","horizontal","size","md"],["label","Settings"],["label","Vertical",3,"snippet"],["appearance","underline","orientation","vertical","size","md",1,"tbvc-vertical-demo"],["label","Members"],["label","Billing"],[1,"tbvc-grid"],["label","Small",3,"snippet"],["appearance","underline","size","sm"],["label","Open"],["label","Medium",3,"snippet"],["label","Large",3,"snippet"],["appearance","underline","size","lg"],["label","Reports"],["label","Icon-only",3,"snippet"],["label","Overview","icon","calendar",3,"iconOnly","active"],["label","Search","icon","search",3,"iconOnly"],["label","People","icon","user",3,"iconOnly"],["label","Filter","icon","filter",3,"iconOnly"],["label","Icon + label",3,"snippet"],["label","Overview","icon","calendar",3,"active"],["label","Library","icon","copy"],["label","Alerts","icon","warning"],["label","Badges",3,"snippet"],["label","Inbox",3,"active"],["label","Alerts",3,"badge"],["label","Messages",3,"badge"],["label","Closable",3,"snippet"],[3,"label","active","closable"],["label","Scrollable strip",3,"snippet"],[1,"tbvc-scroll-wrap"],["appearance","underline","size","sm",3,"scrollable"],[3,"label","active"],["label","Vertical navigation",3,"snippet"],["label","Security"],[1,"ff-future-grid"],["label","Glass shell",3,"snippet"],[1,"ff-future-shell","ff-future-shell--glass"],["aria-hidden","true",1,"ff-future-shell__label"],["label","Ops",3,"active"],["label","Systems"],["label","Neon strip",3,"snippet"],[1,"ff-future-shell","ff-future-shell--neon"],["label","Live",3,"active"],["label","Cyber grid",3,"snippet"],[1,"ff-future-shell","ff-future-shell--cyber"],["label","Nodes","icon","filter",3,"active"],["label","Logs","icon","copy"],["label","Holo lanes",3,"snippet"],[1,"ff-future-shell","ff-future-shell--holo"],["appearance","pill","size","lg"],["label","Alpha",3,"active"],["label","Beta"],[3,"close","label","active","closable"]],template:function(o,b){o&1&&(e(0,"section",0)(1,"h2",1),i(2,"1. Appearances"),t(),e(3,"div",2)(4,"app-catalog-variation-tile",3)(5,"brightrail-tabs",4)(6,"brightrail-tab",5),p(7,L,2,0,"ng-template",6),t(),e(8,"brightrail-tab",7),p(9,N,2,0,"ng-template",6),t(),e(10,"brightrail-tab",8),p(11,B,2,0,"ng-template",6),t()()(),e(12,"app-catalog-variation-tile",9)(13,"brightrail-tabs",10)(14,"brightrail-tab",5),p(15,F,2,0,"ng-template",6),t(),e(16,"brightrail-tab",7),p(17,H,2,0,"ng-template",6),t()()(),e(18,"app-catalog-variation-tile",11)(19,"brightrail-tabs",12)(20,"brightrail-tab",13),p(21,R,2,0,"ng-template",6),t(),e(22,"brightrail-tab",14),p(23,$,2,0,"ng-template",6),t(),e(24,"brightrail-tab",15),p(25,U,2,0,"ng-template",6),t()()()()(),e(26,"section",0)(27,"h2",1),i(28,"2. Orientations"),t(),e(29,"div",2)(30,"app-catalog-variation-tile",16)(31,"brightrail-tabs",17)(32,"brightrail-tab",5),p(33,G,2,0,"ng-template",6),t(),e(34,"brightrail-tab",18),p(35,j,2,0,"ng-template",6),t()()(),e(36,"app-catalog-variation-tile",19)(37,"brightrail-tabs",20)(38,"brightrail-tab",5),p(39,X,2,0,"ng-template",6),t(),e(40,"brightrail-tab",21),p(41,q,2,0,"ng-template",6),t(),e(42,"brightrail-tab",22),p(43,J,2,0,"ng-template",6),t()()()()(),e(44,"section",0)(45,"h2",1),i(46,"3. Sizes"),t(),e(47,"div",23)(48,"app-catalog-variation-tile",24)(49,"brightrail-tabs",25)(50,"brightrail-tab",13),p(51,K,2,0,"ng-template",6),t(),e(52,"brightrail-tab",26),p(53,Q,2,0,"ng-template",6),t()()(),e(54,"app-catalog-variation-tile",27)(55,"brightrail-tabs",4)(56,"brightrail-tab",5),p(57,W,2,0,"ng-template",6),t(),e(58,"brightrail-tab",7),p(59,Y,2,0,"ng-template",6),t()()(),e(60,"app-catalog-variation-tile",28)(61,"brightrail-tabs",29)(62,"brightrail-tab",5),p(63,Z,2,0,"ng-template",6),t(),e(64,"brightrail-tab",30),p(65,ee,2,0,"ng-template",6),t()()()()(),e(66,"section",0)(67,"h2",1),i(68,"4. Icon-only & icon + label"),t(),e(69,"div",2)(70,"app-catalog-variation-tile",31)(71,"brightrail-tabs",4)(72,"brightrail-tab",32),p(73,te,2,0,"ng-template",6),t(),e(74,"brightrail-tab",33),p(75,ae,2,0,"ng-template",6),t(),e(76,"brightrail-tab",34),p(77,ie,2,0,"ng-template",6),t(),e(78,"brightrail-tab",35),p(79,ne,2,0,"ng-template",6),t()()(),e(80,"app-catalog-variation-tile",36)(81,"brightrail-tabs",10)(82,"brightrail-tab",37),p(83,le,2,0,"ng-template",6),t(),e(84,"brightrail-tab",38),p(85,re,2,0,"ng-template",6),t(),e(86,"brightrail-tab",39),p(87,pe,2,0,"ng-template",6),t()()()()(),e(88,"section",0)(89,"h2",1),i(90,"5. Badges & closable"),t(),e(91,"div",2)(92,"app-catalog-variation-tile",40)(93,"brightrail-tabs",12)(94,"brightrail-tab",41),p(95,oe,2,0,"ng-template",6),t(),e(96,"brightrail-tab",42),p(97,be,2,0,"ng-template",6),t(),e(98,"brightrail-tab",43),p(99,me,2,0,"ng-template",6),t()()(),e(100,"app-catalog-variation-tile",44)(101,"brightrail-tabs",4),d(102,se,2,3,"brightrail-tab",45,M),t()()()(),e(104,"section",0)(105,"h2",1),i(106,"6. Scrollable & vertical"),t(),e(107,"div",2)(108,"app-catalog-variation-tile",46)(109,"div",47)(110,"brightrail-tabs",48),d(111,de,2,2,"brightrail-tab",49,M),t()()(),e(113,"app-catalog-variation-tile",50)(114,"brightrail-tabs",20)(115,"brightrail-tab",5),p(116,he,2,0,"ng-template",6),t(),e(117,"brightrail-tab",21),p(118,ue,2,0,"ng-template",6),t(),e(119,"brightrail-tab",51),p(120,ve,2,0,"ng-template",6),t()()()()(),e(121,"section",0)(122,"h2",1),i(123,"7. Futuristic tabs designs"),t(),e(124,"div",52)(125,"app-catalog-variation-tile",53)(126,"div",54)(127,"span",55),i(128,"Glass"),t(),e(129,"brightrail-tabs",12)(130,"brightrail-tab",56),p(131,fe,2,0,"ng-template",6),t(),e(132,"brightrail-tab",57),p(133,_e,2,0,"ng-template",6),t()()()(),e(134,"app-catalog-variation-tile",58)(135,"div",59)(136,"span",55),i(137,"Neon"),t(),e(138,"brightrail-tabs",25)(139,"brightrail-tab",60),p(140,Ce,2,0,"ng-template",6),t(),e(141,"brightrail-tab",42),p(142,ye,2,0,"ng-template",6),t()()()(),e(143,"app-catalog-variation-tile",61)(144,"div",62)(145,"span",55),i(146,"Cyber"),t(),e(147,"brightrail-tabs",10)(148,"brightrail-tab",63),p(149,Te,2,0,"ng-template",6),t(),e(150,"brightrail-tab",64),p(151,Se,2,0,"ng-template",6),t()()()(),e(152,"app-catalog-variation-tile",65)(153,"div",66)(154,"span",55),i(155,"Holo"),t(),e(156,"brightrail-tabs",67)(157,"brightrail-tab",68),p(158,xe,2,0,"ng-template",6),t(),e(159,"brightrail-tab",69),p(160,Ee,2,0,"ng-template",6),t()()()()()()),o&2&&(l(4),r("snippet",b.s.appearanceUnderline),l(2),r("active",!0),l(6),r("snippet",b.s.appearanceContained),l(2),r("active",!0),l(4),r("snippet",b.s.appearancePill),l(2),r("active",!0),l(10),r("snippet",b.s.orientationHorizontal),l(2),r("active",!0),l(4),r("snippet",b.s.orientationVertical),l(2),r("active",!0),l(10),r("snippet",b.s.sizeSm),l(2),r("active",!0),l(4),r("snippet",b.s.sizeMd),l(2),r("active",!0),l(4),r("snippet",b.s.sizeLg),l(2),r("active",!0),l(8),r("snippet",b.s.iconOnlyCalendar),l(2),r("iconOnly",!0)("active",!0),l(2),r("iconOnly",!0),l(2),r("iconOnly",!0),l(2),r("iconOnly",!0),l(2),r("snippet",b.s.iconLabel),l(2),r("active",!0),l(10),r("snippet",b.s.badgeAlerts),l(2),r("active",!0),l(2),r("badge",3),l(2),r("badge",12),l(2),r("snippet",b.s.closable),l(2),h(b.closableTabs()),l(6),r("snippet",b.s.scrollableStrip),l(2),r("scrollable",!0),l(),h(b.scrollableSegments),l(2),r("snippet",b.s.verticalNav),l(2),r("active",!0),l(10),r("snippet",b.s.futuristicGlass),l(5),r("active",!0),l(4),r("snippet",b.s.futuristicNeon),l(5),r("active",!0),l(2),r("badge",2),l(2),r("snippet",b.s.futuristicCyber),l(5),r("active",!0),l(4),r("snippet",b.s.futuristicHolo),l(5),r("active",!0))},dependencies:[O,E,x,V],styles:["[_nghost-%COMP%]{display:block}.tbvc-block[_ngcontent-%COMP%]{margin-bottom:1.35rem}.tbvc-block__h[_ngcontent-%COMP%]{margin:0 0 .5rem;font-size:.95rem;font-weight:700}.tbvc-grid[_ngcontent-%COMP%]{display:grid;gap:.65rem;grid-template-columns:repeat(auto-fill,minmax(14rem,1fr))}.tbvc-stack[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.75rem}.tbvc-scroll-wrap[_ngcontent-%COMP%]{max-width:22rem}[_nghost-%COMP%]     .tbvc-vertical-demo.br-tabs--vertical{min-height:10rem}[_nghost-%COMP%]     .tbvc-vertical-demo .br-tabs__shell{min-height:9rem}"],changeDetection:0})};var P=class a{htmlExamples=z;static \u0275fac=function(o){return new(o||a)};static \u0275cmp=m({type:a,selectors:[["app-tabs-catalog-overview"]],decls:34,vars:1,consts:[[1,"tbco"],[1,"tbco-hero"],[1,"tbco-hero__eyebrow"],[1,"tbco-hero__links"],["routerLink","..",1,"tbco-link"],["routerLink","/variations",1,"tbco-link"],["aria-labelledby","tbco-html-examples",1,"tbco-code-block"],["id","tbco-html-examples"],[1,"tbco-code-block__hint"],[1,"tbco-pre"]],template:function(o,b){o&1&&(e(0,"div",0)(1,"header",1)(2,"p",2),i(3,"Brightrail \xB7 Tabs \xB7 Variation catalog"),t(),e(4,"h1"),i(5,"Tabs types & variations"),t(),e(6,"p"),i(7," Mirrors "),e(8,"code"),i(9,"doc/tabs/"),t(),i(10," reference layouts. Click any tile for "),e(11,"strong"),i(12,"View code"),t(),i(13,", then "),e(14,"strong"),i(15,"Copy code"),t(),i(16," to paste into your app (import from "),e(17,"code"),i(18,"brightrail"),t(),i(19,"). "),t(),e(20,"p",3)(21,"a",4),i(22,"\u2190 Tabs playground (live settings)"),t(),e(23,"a",5),i(24,"All variation catalogs"),t()()(),_(25,"app-tabs-variation-catalog"),e(26,"section",6)(27,"h2",7),i(28,"Tab usage"),t(),e(29,"p",8),i(30,"Typical markup for standard tabs and pill badges with closable affordances."),t(),e(31,"pre",9)(32,"code"),i(33),t()()()()),o&2&&(l(33),s(b.htmlExamples))},dependencies:[S,c],styles:["[_nghost-%COMP%]{flex:1 1 auto;min-height:0;overflow:auto}.tbco[_ngcontent-%COMP%]{padding:1rem 1.25rem 1.5rem}.tbco-hero__eyebrow[_ngcontent-%COMP%]{margin:0 0 .25rem;font-size:.75rem;font-weight:600;letter-spacing:.04em;text-transform:uppercase;color:var(--ff-muted, #64748b)}.tbco-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0;font-size:1.5rem}.tbco-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:.35rem 0 .5rem;color:var(--ff-muted, #64748b)}.tbco-hero__links[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:.75rem 1.25rem}.tbco-link[_ngcontent-%COMP%]{color:var(--ff-accent, #2563eb);text-decoration:none;font-weight:600}.tbco-code-block[_ngcontent-%COMP%]{margin:1.5rem 0 0;padding-top:1rem;border-top:1px solid var(--ff-border, #e2e8f0)}.tbco-code-block[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.1rem;margin:0 0 .35rem}.tbco-code-block__hint[_ngcontent-%COMP%]{margin:0 0 .65rem;font-size:.8125rem;color:var(--ff-muted, #64748b)}.tbco-pre[_ngcontent-%COMP%]{margin:0;padding:.85rem;border-radius:.5rem;background:var(--ff-surface-muted, #f1f3f4);border:1px solid var(--ff-border, #e2e8f0);overflow:auto;font-size:.8rem}"],changeDetection:0})};export{P as TabsCatalogOverviewComponent};
