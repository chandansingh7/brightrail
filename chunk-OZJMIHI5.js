import{a as b}from"./chunk-FJ7PM77H.js";import{a as g,b as h}from"./chunk-3UYY5F4G.js";import"./chunk-63ZAJDYR.js";import{e as u}from"./chunk-FBGATJ5M.js";import"./chunk-573ITFZ2.js";import"./chunk-3SQNCDXW.js";import{Ca as s,Va as a,Wa as e,Xa as t,Ya as l,sb as i,ta as n,tb as d}from"./chunk-M22WAZLT.js";var f={coreWorkflow:`<brightrail-timeline ariaLabel="Deployment progress">
  <brightrail-timeline-item
    title="Build started"
    description="CI pipeline #4821"
    status="completed"
  />
  <brightrail-timeline-item
    title="Running tests"
    description="Unit and integration suites"
    status="current"
  />
  <brightrail-timeline-item
    title="Deploy to production"
    status="pending"
  />
</brightrail-timeline>`,statusCompleted:`<brightrail-timeline-item
  title="Payment received"
  description="Invoice #1042"
  status="completed"
/>`,statusCurrent:`<brightrail-timeline-item
  title="Under review"
  description="Compliance team"
  status="current"
/>`,statusError:`<brightrail-timeline-item
  title="Upload failed"
  description="Retry or contact support"
  status="error"
/>`,auditTrail:`<brightrail-timeline ariaLabel="Audit trail">
  <brightrail-timeline-item title="Created" description="Jan 4, 2026" status="completed" />
  <brightrail-timeline-item title="Approved" description="Jan 5, 2026" status="completed" />
  <brightrail-timeline-item title="Published" description="Pending release" status="current" />
</brightrail-timeline>`,minimalSingle:`<brightrail-timeline>
  <brightrail-timeline-item title="Account created" status="completed" />
</brightrail-timeline>`,mixedStatuses:`<brightrail-timeline>
  <brightrail-timeline-item title="Submitted" status="completed" />
  <brightrail-timeline-item title="Validation error" status="error" />
  <brightrail-timeline-item title="Resubmit" status="pending" />
</brightrail-timeline>`,futuristicGlass:`<div class="ff-future-shell ff-future-shell--glass">
  <brightrail-timeline ariaLabel="Deployment pipeline">
    <brightrail-timeline-item title="Build" description="CI #4821" status="completed" />
    <brightrail-timeline-item title="Test" description="Running suites" status="current" />
    <brightrail-timeline-item title="Deploy" status="pending" />
  </brightrail-timeline>
</div>`,futuristicNeon:`<div class="ff-future-shell ff-future-shell--neon">
  <brightrail-timeline ariaLabel="Sync status">
    <brightrail-timeline-item title="Uplink" description="Connected" status="completed" />
    <brightrail-timeline-item title="Streaming" description="1.2 GB/s" status="current" />
  </brightrail-timeline>
</div>`,futuristicCyber:`<div class="ff-future-shell ff-future-shell--cyber">
  <brightrail-timeline ariaLabel="Security scan">
    <brightrail-timeline-item title="Perimeter" status="completed" />
    <brightrail-timeline-item title="Threat detected" status="error" />
    <brightrail-timeline-item title="Quarantine" status="current" />
  </brightrail-timeline>
</div>`,futuristicHolo:`<div class="ff-future-shell ff-future-shell--holo">
  <brightrail-timeline ariaLabel="Mission phases">
    <brightrail-timeline-item title="Launch" status="completed" />
    <brightrail-timeline-item title="Orbit" status="current" />
    <brightrail-timeline-item title="Dock" status="pending" />
  </brightrail-timeline>
</div>`};var v=`<brightrail-timeline ariaLabel="Order status">
  <brightrail-timeline-item
    title="Order placed"
    description="Confirmation sent"
    status="completed"
  />
  <brightrail-timeline-item
    title="Shipped"
    status="current"
  />
  <brightrail-timeline-item
    title="Delivered"
    status="pending"
  />
</brightrail-timeline>`;var p=class m{s=f;static \u0275fac=function(o){return new(o||m)};static \u0275cmp=s({type:m,selectors:[["app-timeline-variation-catalog"]],decls:81,vars:12,consts:[[1,"tlvc-block"],[1,"tlvc-block__h"],["label","Deployment steps",3,"snippet"],["ariaLabel","Deployment progress"],["title","Build started","description","CI pipeline #4821","status","completed"],["title","Running tests","description","Unit and integration","status","current"],["title","Deploy","status","pending"],[1,"tlvc-row"],["label","Completed",3,"snippet"],["title","Payment received","description","Invoice #1042","status","completed"],["label","Current",3,"snippet"],["title","Under review","description","Compliance","status","current"],["label","Error",3,"snippet"],["title","Upload failed","description","Retry","status","error"],["label","Enterprise audit",3,"snippet"],["ariaLabel","Audit trail"],["title","Created","description","Jan 4, 2026","status","completed"],["title","Approved","description","Jan 5, 2026","status","completed"],["title","Published","description","Pending","status","current"],["label","Title + description",3,"snippet"],["title","Shipped","description","Tracking #8821","status","completed"],["label","Success + error",3,"snippet"],["title","Submitted","status","completed"],["title","Validation error","status","error"],["title","Resubmit","status","pending"],["label","Single item",3,"snippet"],["title","Account created","status","completed"],[1,"ff-future-grid"],["label","Glass pipeline",3,"snippet"],[1,"ff-future-shell","ff-future-shell--glass"],["aria-hidden","true",1,"ff-future-shell__label"],["ariaLabel","Deployment pipeline"],["title","Build","description","CI #4821","status","completed"],["title","Test","description","Running suites","status","current"],["label","Neon sync",3,"snippet"],[1,"ff-future-shell","ff-future-shell--neon"],["ariaLabel","Sync status"],["title","Uplink","description","Connected","status","completed"],["title","Streaming","description","1.2 GB/s","status","current"],["label","Cyber scan",3,"snippet"],[1,"ff-future-shell","ff-future-shell--cyber"],["ariaLabel","Security scan"],["title","Perimeter","status","completed"],["title","Threat detected","status","error"],["title","Quarantine","status","current"],["label","Holo mission",3,"snippet"],[1,"ff-future-shell","ff-future-shell--holo"],["ariaLabel","Mission phases"],["title","Launch","status","completed"],["title","Orbit","status","current"],["title","Dock","status","pending"]],template:function(o,r){o&1&&(e(0,"section",0)(1,"h2",1),i(2,"1. Core workflow"),t(),e(3,"app-catalog-variation-tile",2)(4,"brightrail-timeline",3),l(5,"brightrail-timeline-item",4)(6,"brightrail-timeline-item",5)(7,"brightrail-timeline-item",6),t()()(),e(8,"section",0)(9,"h2",1),i(10,"2. Status variants"),t(),e(11,"div",7)(12,"app-catalog-variation-tile",8),l(13,"brightrail-timeline-item",9),t(),e(14,"app-catalog-variation-tile",10),l(15,"brightrail-timeline-item",11),t(),e(16,"app-catalog-variation-tile",12),l(17,"brightrail-timeline-item",13),t()()(),e(18,"section",0)(19,"h2",1),i(20,"3. Audit trail"),t(),e(21,"app-catalog-variation-tile",14)(22,"brightrail-timeline",15),l(23,"brightrail-timeline-item",16)(24,"brightrail-timeline-item",17)(25,"brightrail-timeline-item",18),t()()(),e(26,"section",0)(27,"h2",1),i(28,"4. Descriptions"),t(),e(29,"app-catalog-variation-tile",19)(30,"brightrail-timeline"),l(31,"brightrail-timeline-item",20),t()()(),e(32,"section",0)(33,"h2",1),i(34,"5. Mixed statuses"),t(),e(35,"app-catalog-variation-tile",21)(36,"brightrail-timeline"),l(37,"brightrail-timeline-item",22)(38,"brightrail-timeline-item",23)(39,"brightrail-timeline-item",24),t()()(),e(40,"section",0)(41,"h2",1),i(42,"6. Minimal"),t(),e(43,"app-catalog-variation-tile",25)(44,"brightrail-timeline"),l(45,"brightrail-timeline-item",26),t()()(),e(46,"section",0)(47,"h2",1),i(48,"7. Futuristic timeline designs"),t(),e(49,"div",27)(50,"app-catalog-variation-tile",28)(51,"div",29)(52,"span",30),i(53,"Glass"),t(),e(54,"brightrail-timeline",31),l(55,"brightrail-timeline-item",32)(56,"brightrail-timeline-item",33)(57,"brightrail-timeline-item",6),t()()(),e(58,"app-catalog-variation-tile",34)(59,"div",35)(60,"span",30),i(61,"Neon"),t(),e(62,"brightrail-timeline",36),l(63,"brightrail-timeline-item",37)(64,"brightrail-timeline-item",38),t()()(),e(65,"app-catalog-variation-tile",39)(66,"div",40)(67,"span",30),i(68,"Cyber"),t(),e(69,"brightrail-timeline",41),l(70,"brightrail-timeline-item",42)(71,"brightrail-timeline-item",43)(72,"brightrail-timeline-item",44),t()()(),e(73,"app-catalog-variation-tile",45)(74,"div",46)(75,"span",30),i(76,"Holo"),t(),e(77,"brightrail-timeline",47),l(78,"brightrail-timeline-item",48)(79,"brightrail-timeline-item",49)(80,"brightrail-timeline-item",50),t()()()()()),o&2&&(n(3),a("snippet",r.s.coreWorkflow),n(9),a("snippet",r.s.statusCompleted),n(2),a("snippet",r.s.statusCurrent),n(2),a("snippet",r.s.statusError),n(5),a("snippet",r.s.auditTrail),n(8),a("snippet",r.s.coreWorkflow),n(6),a("snippet",r.s.mixedStatuses),n(8),a("snippet",r.s.minimalSingle),n(7),a("snippet",r.s.futuristicGlass),n(8),a("snippet",r.s.futuristicNeon),n(7),a("snippet",r.s.futuristicCyber),n(8),a("snippet",r.s.futuristicHolo))},dependencies:[g,h,b],styles:["[_nghost-%COMP%]{display:block}.tlvc-block[_ngcontent-%COMP%]{margin-bottom:1.35rem}.tlvc-block__h[_ngcontent-%COMP%]{margin:0 0 .5rem;font-size:.95rem;font-weight:700}.tlvc-row[_ngcontent-%COMP%]{display:grid;gap:.75rem}@media(width>720px){.tlvc-row[_ngcontent-%COMP%]{grid-template-columns:repeat(auto-fit,minmax(12rem,1fr))}}"],changeDetection:0})};var C=class m{htmlExamples=v;static \u0275fac=function(o){return new(o||m)};static \u0275cmp=s({type:m,selectors:[["app-timeline-catalog-overview"]],decls:31,vars:1,consts:[[1,"tlco"],[1,"tlco-hero"],[1,"tlco-hero__eyebrow"],[1,"tlco-hero__links"],["routerLink","..",1,"tlco-link"],["routerLink","/variations",1,"tlco-link"],["aria-labelledby","tlco-html-examples",1,"tlco-code-block"],["id","tlco-html-examples"],[1,"tlco-code-block__hint"],[1,"tlco-pre"]],template:function(o,r){o&1&&(e(0,"div",0)(1,"header",1)(2,"p",2),i(3,"Brightrail \xB7 Timeline \xB7 Variation catalog"),t(),e(4,"h1"),i(5,"Timeline types & variations"),t(),e(6,"p"),i(7," Reference layouts and states for timeline. Click any tile for "),e(8,"strong"),i(9,"View code"),t(),i(10,", then "),e(11,"strong"),i(12,"Copy code"),t(),i(13," to paste into your app (import from "),e(14,"code"),i(15,"brightrail"),t(),i(16,"). "),t(),e(17,"p",3)(18,"a",4),i(19,"\u2190 Timeline playground (live settings)"),t(),e(20,"a",5),i(21,"All variation catalogs"),t()()(),l(22,"app-timeline-variation-catalog"),e(23,"section",6)(24,"h2",7),i(25,"Timeline HTML examples"),t(),e(26,"p",8),i(27,"Typical markup for common scenarios."),t(),e(28,"pre",9)(29,"code"),i(30),t()()()()),o&2&&(n(30),d(r.htmlExamples))},dependencies:[u,p],styles:["[_nghost-%COMP%]{flex:1 1 auto;min-height:0;overflow:auto}.tlco[_ngcontent-%COMP%]{padding:1rem 1.25rem 1.5rem}.tlco-hero__eyebrow[_ngcontent-%COMP%]{margin:0 0 .25rem;font-size:.75rem;font-weight:600;letter-spacing:.04em;text-transform:uppercase;color:var(--ff-muted, #64748b)}.tlco-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0;font-size:1.5rem}.tlco-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:.35rem 0 .5rem;color:var(--ff-muted, #64748b)}.tlco-hero__links[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:.75rem 1.25rem}.tlco-link[_ngcontent-%COMP%]{color:var(--ff-accent, #2563eb);text-decoration:none;font-weight:600}.tlco-code-block[_ngcontent-%COMP%]{margin:1.5rem 0 0;padding-top:1rem;border-top:1px solid var(--ff-border, #e2e8f0)}.tlco-code-block[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.1rem;margin:0 0 .35rem}.tlco-code-block__hint[_ngcontent-%COMP%]{margin:0 0 .65rem;font-size:.8125rem;color:var(--ff-muted, #64748b)}.tlco-pre[_ngcontent-%COMP%]{margin:0;padding:.85rem;border-radius:.5rem;background:var(--ff-surface-muted, #f1f3f4);border:1px solid var(--ff-border, #e2e8f0);overflow:auto;font-size:.8rem}"],changeDetection:0})};export{C as TimelineCatalogOverviewComponent};
