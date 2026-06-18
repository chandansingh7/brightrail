import{a as v}from"./chunk-FJ7PM77H.js";import{a as f}from"./chunk-XJIDIXNY.js";import"./chunk-63ZAJDYR.js";import{e as g}from"./chunk-FBGATJ5M.js";import"./chunk-3QMANAY7.js";import"./chunk-573ITFZ2.js";import"./chunk-3SQNCDXW.js";import{Ca as p,Va as o,Wa as t,Xa as e,Ya as r,sb as i,ta as a,tb as l}from"./chunk-M22WAZLT.js";var u={coreInfo:'<brightrail-toast variant="info" title="Heads up" message="Your draft was saved." />',coreSuccess:'<brightrail-toast variant="success" title="Saved" message="Changes published successfully." />',coreWarning:'<brightrail-toast variant="warning" title="Review needed" message="Some fields need attention." />',coreDanger:'<brightrail-toast variant="danger" title="Error" message="We could not complete the request." />',titleWithHeadline:`<brightrail-toast
  variant="info"
  title="Sync complete"
  message="3 files uploaded to the workspace."
/>`,titleMessageOnly:'<brightrail-toast variant="info" message="Link copied to clipboard." />',dismissibleYes:`<brightrail-toast
  variant="success"
  title="Profile updated"
  message="Your preferences were saved."
  [dismissible]="true"
/>`,dismissibleNo:`<brightrail-toast
  variant="warning"
  title="Maintenance"
  message="Read-only mode until 2:00 AM UTC."
  [dismissible]="false"
/>`,serviceShow:`// app.config.ts \u2014 provide container once at the root
import { BrightrailToastContainerComponent } from 'brightrail';

@Component({
  imports: [BrightrailToastContainerComponent],
  template: \`<router-outlet />
    <brightrail-toast-container />\`,
})
export class App {}

// feature.component.ts
import { inject } from '@angular/core';
import { BrightrailToastService } from 'brightrail';

readonly toast = inject(BrightrailToastService);

save(): void {
  this.toast.show({
    variant: 'success',
    title: 'Saved',
    message: 'Your changes are live.',
  });
}`,serviceDismissAll:"this.toast.dismissAll();",stackMultiple:`this.toast.show({ variant: 'info', message: 'First notification' });
this.toast.show({ variant: 'success', message: 'Second notification' });`,advancedDuration:`this.toast.show({
  variant: 'info',
  message: 'Auto-dismiss in 3 seconds',
  durationMs: 3000,
});`,advancedPersistent:`this.toast.show({
  variant: 'danger',
  title: 'Action required',
  message: 'Approve the pending request.',
  dismissible: true,
  durationMs: 0,
});`,futuristicGlass:`<div class="ff-future-shell ff-future-shell--glass">
  <brightrail-toast variant="info" title="Sync queued" message="Replication will begin shortly." />
</div>`,futuristicNeon:`<div class="ff-future-shell ff-future-shell--neon">
  <brightrail-toast variant="success" title="Link established" message="Neural bridge online." [dismissible]="true" />
</div>`,futuristicCyber:`<div class="ff-future-shell ff-future-shell--cyber">
  <brightrail-toast variant="warning" title="Anomaly" message="Review sector 7 telemetry." [dismissible]="true" />
</div>`,futuristicHolo:`<div class="ff-future-shell ff-future-shell--holo">
  <brightrail-toast variant="info" message="Holographic preview ready." />
</div>`};var h=`<brightrail-toast-container />

<button type="button" (click)="showToast()">Show toast</button>

<!-- In component TS -->
this.toast.show({
  variant: 'success',
  title: 'Saved',
  message: 'Your profile was updated.',
  dismissible: true,
});`;var m=class c{s=u;static \u0275fac=function(s){return new(s||c)};static \u0275cmp=p({type:c,selectors:[["app-toast-variation-catalog"]],decls:83,vars:23,consts:[[1,"tvc-block"],[1,"tvc-block__h"],[1,"tvc-grid"],["label","Info",3,"snippet"],["variant","info","title","Heads up","message","Your draft was saved."],["label","Success",3,"snippet"],["variant","success","title","Saved","message","Changes published successfully."],["label","Warning",3,"snippet"],["variant","warning","title","Review needed","message","Some fields need attention."],["label","Danger",3,"snippet"],["variant","danger","title","Error","message","We could not complete the request."],[1,"tvc-stack"],["label","Title + message",3,"snippet"],["variant","info","title","Sync complete","message","3 files uploaded to the workspace."],["label","Message only",3,"snippet"],["variant","info","message","Link copied to clipboard."],["label","Dismissible",3,"snippet"],["variant","success","title","Profile updated","message","Your preferences were saved.",3,"dismissible"],["label","Not dismissible",3,"snippet"],["variant","warning","title","Maintenance","message","Read-only mode until 2:00 AM UTC.",3,"dismissible"],[1,"tvc-block__hint"],["label","show() config",3,"snippet"],[1,"tvc-code-sample"],["label","Multiple toasts",3,"snippet"],[1,"tvc-stack-preview"],["variant","info","message","First notification"],["variant","success","title","Saved","message","Second notification"],["label","Auto-dismiss",3,"snippet"],["label","Persistent",3,"snippet"],[1,"ff-future-grid"],["label","Glass shell",3,"snippet"],[1,"ff-future-shell","ff-future-shell--glass"],["aria-hidden","true",1,"ff-future-shell__label"],["variant","info","title","Sync queued","message","Replication will begin shortly."],["label","Neon link",3,"snippet"],[1,"ff-future-shell","ff-future-shell--neon"],["variant","success","title","Link established","message","Neural bridge online.",3,"dismissible"],["label","Cyber alert",3,"snippet"],[1,"ff-future-shell","ff-future-shell--cyber"],["variant","warning","title","Anomaly","message","Review sector 7 telemetry.",3,"dismissible"],["label","Holo preview",3,"snippet"],[1,"ff-future-shell","ff-future-shell--holo"],["variant","info","message","Holographic preview ready."]],template:function(s,n){s&1&&(t(0,"section",0)(1,"h2",1),i(2,"1. Core variants"),e(),t(3,"div",2)(4,"app-catalog-variation-tile",3),r(5,"brightrail-toast",4),e(),t(6,"app-catalog-variation-tile",5),r(7,"brightrail-toast",6),e(),t(8,"app-catalog-variation-tile",7),r(9,"brightrail-toast",8),e(),t(10,"app-catalog-variation-tile",9),r(11,"brightrail-toast",10),e()()(),t(12,"section",0)(13,"h2",1),i(14,"2. Title & message"),e(),t(15,"div",11)(16,"app-catalog-variation-tile",12),r(17,"brightrail-toast",13),e(),t(18,"app-catalog-variation-tile",14),r(19,"brightrail-toast",15),e()()(),t(20,"section",0)(21,"h2",1),i(22,"3. Dismissible"),e(),t(23,"div",2)(24,"app-catalog-variation-tile",16),r(25,"brightrail-toast",17),e(),t(26,"app-catalog-variation-tile",18),r(27,"brightrail-toast",19),e()()(),t(28,"section",0)(29,"h2",1),i(30,"4. Toast service"),e(),t(31,"p",20),i(32,"Mount "),t(33,"code"),i(34,"brightrail-toast-container"),e(),i(35," once, then call "),t(36,"code"),i(37,"BrightrailToastService.show()"),e(),i(38,"."),e(),t(39,"app-catalog-variation-tile",21)(40,"pre",22),i(41),e()()(),t(42,"section",0)(43,"h2",1),i(44,"5. Stacking"),e(),t(45,"app-catalog-variation-tile",23)(46,"div",24),r(47,"brightrail-toast",25)(48,"brightrail-toast",26),e()()(),t(49,"section",0)(50,"h2",1),i(51,"6. Advanced timing"),e(),t(52,"div",2)(53,"app-catalog-variation-tile",27)(54,"pre",22),i(55),e()(),t(56,"app-catalog-variation-tile",28)(57,"pre",22),i(58),e()()()(),t(59,"section",0)(60,"h2",1),i(61,"7. Futuristic toast designs"),e(),t(62,"div",29)(63,"app-catalog-variation-tile",30)(64,"div",31)(65,"span",32),i(66,"Glass"),e(),r(67,"brightrail-toast",33),e()(),t(68,"app-catalog-variation-tile",34)(69,"div",35)(70,"span",32),i(71,"Neon"),e(),r(72,"brightrail-toast",36),e()(),t(73,"app-catalog-variation-tile",37)(74,"div",38)(75,"span",32),i(76,"Cyber"),e(),r(77,"brightrail-toast",39),e()(),t(78,"app-catalog-variation-tile",40)(79,"div",41)(80,"span",32),i(81,"Holo"),e(),r(82,"brightrail-toast",42),e()()()()),s&2&&(a(4),o("snippet",n.s.coreInfo),a(2),o("snippet",n.s.coreSuccess),a(2),o("snippet",n.s.coreWarning),a(2),o("snippet",n.s.coreDanger),a(6),o("snippet",n.s.titleWithHeadline),a(2),o("snippet",n.s.titleMessageOnly),a(6),o("snippet",n.s.dismissibleYes),a(),o("dismissible",!0),a(),o("snippet",n.s.dismissibleNo),a(),o("dismissible",!1),a(12),o("snippet",n.s.serviceShow),a(2),l(n.s.serviceShow),a(4),o("snippet",n.s.stackMultiple),a(8),o("snippet",n.s.advancedDuration),a(2),l(n.s.advancedDuration),a(),o("snippet",n.s.advancedPersistent),a(2),l(n.s.advancedPersistent),a(5),o("snippet",n.s.futuristicGlass),a(5),o("snippet",n.s.futuristicNeon),a(4),o("dismissible",!0),a(),o("snippet",n.s.futuristicCyber),a(4),o("dismissible",!0),a(),o("snippet",n.s.futuristicHolo))},dependencies:[f,v],styles:["[_nghost-%COMP%]{display:block}.tvc-block[_ngcontent-%COMP%]{margin-bottom:1.35rem}.tvc-block__h[_ngcontent-%COMP%]{margin:0 0 .5rem;font-size:.95rem;font-weight:700}.tvc-block__hint[_ngcontent-%COMP%]{margin:-.15rem 0 .65rem;font-size:.78rem;color:var(--ff-muted, #64748b)}.tvc-grid[_ngcontent-%COMP%]{display:grid;gap:.65rem;grid-template-columns:repeat(auto-fill,minmax(14rem,1fr));align-items:start}.tvc-stack[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.75rem}.tvc-stack-preview[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.5rem;width:100%}.tvc-code-sample[_ngcontent-%COMP%]{margin:0;font-size:.72rem;line-height:1.45;white-space:pre-wrap;word-break:break-word;text-align:left}"],changeDetection:0})};var b=class c{htmlExamples=h;static \u0275fac=function(s){return new(s||c)};static \u0275cmp=p({type:c,selectors:[["app-toast-catalog-overview"]],decls:34,vars:1,consts:[[1,"tco"],[1,"tco-hero"],[1,"tco-hero__eyebrow"],[1,"tco-hero__links"],["routerLink","..",1,"tco-link"],["routerLink","/variations",1,"tco-link"],["aria-labelledby","tco-html-examples",1,"tco-code-block"],["id","tco-html-examples"],[1,"tco-code-block__hint"],[1,"tco-pre"]],template:function(s,n){s&1&&(t(0,"div",0)(1,"header",1)(2,"p",2),i(3,"Brightrail \xB7 Toast \xB7 Variation catalog"),e(),t(4,"h1"),i(5,"Toast types & variations"),e(),t(6,"p"),i(7," Reference catalog for toast variants, dismissible behavior, and service-driven notifications. Click any tile for "),t(8,"strong"),i(9,"View code"),e(),i(10,", then "),t(11,"strong"),i(12,"Copy code"),e(),i(13," to paste into your app (import from "),t(14,"code"),i(15,"brightrail"),e(),i(16,"). "),e(),t(17,"p",3)(18,"a",4),i(19,"\u2190 Toast playground (live settings)"),e(),t(20,"a",5),i(21,"All variation catalogs"),e()()(),r(22,"app-toast-variation-catalog"),t(23,"section",6)(24,"h2",7),i(25,"Toast HTML examples"),e(),t(26,"p",8),i(27,"Typical container mount and service "),t(28,"code"),i(29,"show()"),e(),i(30," call."),e(),t(31,"pre",9)(32,"code"),i(33),e()()()()),s&2&&(a(33),l(n.htmlExamples))},dependencies:[g,m],styles:["[_nghost-%COMP%]{flex:1 1 auto;min-height:0;overflow:auto}.tco[_ngcontent-%COMP%]{padding:1rem 1.25rem 1.5rem}.tco-hero__eyebrow[_ngcontent-%COMP%]{margin:0 0 .25rem;font-size:.75rem;font-weight:600;letter-spacing:.04em;text-transform:uppercase;color:var(--ff-muted, #64748b)}.tco-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0;font-size:1.5rem}.tco-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:.35rem 0 .5rem;color:var(--ff-muted, #64748b)}.tco-hero__links[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:.75rem 1.25rem}.tco-link[_ngcontent-%COMP%]{color:var(--ff-accent, #2563eb);text-decoration:none;font-weight:600}.tco-code-block[_ngcontent-%COMP%]{margin:1.5rem 0 0;padding-top:1rem;border-top:1px solid var(--ff-border, #e2e8f0)}.tco-code-block[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.1rem;margin:0 0 .35rem}.tco-code-block__hint[_ngcontent-%COMP%]{margin:0 0 .65rem;font-size:.8125rem;color:var(--ff-muted, #64748b)}.tco-pre[_ngcontent-%COMP%]{margin:0;padding:.85rem;border-radius:.5rem;background:var(--ff-surface-muted, #f1f3f4);border:1px solid var(--ff-border, #e2e8f0);overflow:auto;font-size:.8rem}"],changeDetection:0})};export{b as ToastCatalogOverviewComponent};
