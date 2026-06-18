import{a as _}from"./chunk-FJ7PM77H.js";import"./chunk-63ZAJDYR.js";import{a as v}from"./chunk-LMQ4CP4O.js";import{e as u}from"./chunk-FBGATJ5M.js";import{a as y,b as C}from"./chunk-BBBVP5SK.js";import{a as T}from"./chunk-JBEOUGWN.js";import{a as f}from"./chunk-GYG4PR7L.js";import"./chunk-UCBO3RDG.js";import"./chunk-3QMANAY7.js";import"./chunk-573ITFZ2.js";import"./chunk-3SQNCDXW.js";import"./chunk-NNTI4JQ5.js";import{Ca as c,Ha as m,Ib as d,Va as r,Wa as i,Xa as e,Ya as p,ob as b,sb as t,ta as o,tb as h}from"./chunk-M22WAZLT.js";var P={defaultInfo:`<brightrail-button
  variant="outline"
  size="sm"
  iconLeft="info"
  brightrailTooltip="Helpful information about this item."
  brightrailTooltipPlacement="top"
>
  Default info
</brightrail-button>`,helper:`<brightrail-button
  variant="ghost"
  size="sm"
  iconLeft="help"
  brightrailTooltip="This helps you complete the task."
  brightrailTooltipPlacement="top"
>
  Helper
</brightrail-button>`,richContent:`<brightrail-button
  variant="outline"
  size="sm"
  [brightrailTooltip]="richTooltipTemplate"
  brightrailTooltipPlacement="top"
  [brightrailTooltipMaxWidth]="280"
>
  Rich content
</brightrail-button>

<ng-template #richTooltipTemplate>
  <div class="tooltip-rich">
    <div class="tooltip-rich__title">System update</div>
    <p class="tooltip-rich__body">Version 2.4.0 is now available with collaboration fixes.</p>
    <span class="tooltip-rich__link">Learn more \u2192</span>
  </div>
</ng-template>`,iconTooltip:`<brightrail-icon-button
  ariaLabel="Add to favorites"
  brightrailTooltip="Add to favorites"
  brightrailTooltipPlacement="top"
>
  \u2665
</brightrail-icon-button>`,placementTop:'<brightrail-button variant="outline" size="sm" brightrailTooltip="Top" brightrailTooltipPlacement="top">Top</brightrail-button>',placementBottom:'<brightrail-button variant="outline" size="sm" brightrailTooltip="Bottom" brightrailTooltipPlacement="bottom">Bottom</brightrail-button>',placementLeft:'<brightrail-button variant="outline" size="sm" brightrailTooltip="Left" brightrailTooltipPlacement="left">Left</brightrail-button>',placementRight:'<brightrail-button variant="outline" size="sm" brightrailTooltip="Right" brightrailTooltipPlacement="right">Right</brightrail-button>',triggerHover:'<brightrail-button variant="outline" size="sm" brightrailTooltip="Hover to open" brightrailTooltipTrigger="hover">Hover</brightrail-button>',triggerFocus:'<brightrail-button variant="outline" size="sm" brightrailTooltip="Focused state" brightrailTooltipTrigger="focus">Focus</brightrail-button>',triggerClick:'<brightrail-button variant="outline" size="sm" brightrailTooltip="Click outside to dismiss" brightrailTooltipTrigger="click">Click</brightrail-button>',triggerDelayed:`<brightrail-button
  variant="outline"
  size="sm"
  brightrailTooltip="Opens after 600ms"
  brightrailTooltipTrigger="hover"
  [brightrailTooltipShowDelay]="600"
>
  Delayed
</brightrail-button>`,sizeSm:'<brightrail-button variant="outline" size="sm" iconLeft="info" brightrailTooltip="Small tooltip copy." brightrailTooltipSize="sm">Small</brightrail-button>',sizeMd:`<brightrail-button
  variant="outline"
  size="md"
  iconLeft="info"
  brightrailTooltip="Medium is the default density for most enterprise surfaces."
  brightrailTooltipSize="md"
>
  Medium
</brightrail-button>`,sizeLg:`<brightrail-button
  variant="outline"
  size="lg"
  iconLeft="info"
  brightrailTooltip="Large tooltips give you room for multi-line guidance."
  brightrailTooltipSize="lg"
  [brightrailTooltipMaxWidth]="320"
>
  Large
</brightrail-button>`,semanticSuccess:`<span
  tabindex="0"
  brightrailTooltip="Everything looks good!"
  brightrailTooltipContentVariant="success"
  brightrailTooltipTrigger="focus"
>
  Success
</span>`,semanticWarning:`<span
  tabindex="0"
  brightrailTooltip="Be careful with this action."
  brightrailTooltipContentVariant="warning"
  brightrailTooltipTrigger="focus"
>
  Warning
</span>`,semanticError:`<span
  tabindex="0"
  brightrailTooltip="Action failed. Please retry."
  brightrailTooltipContentVariant="error"
  brightrailTooltipTrigger="focus"
>
  Error
</span>`,semanticInfo:`<span
  tabindex="0"
  brightrailTooltip="Here's some information."
  brightrailTooltipContentVariant="info"
  brightrailTooltipTrigger="focus"
>
  Info
</span>`,avatarRoster:`<brightrail-avatar
  kind="image"
  shape="circle"
  size="md"
  imageSrc="/images/avatar/avatar-02.png"
  imageAlt="Olivia"
  tooltip="Olivia Rhye \xB7 Product designer \xB7 London"
  tooltipPlacement="top"
  [tooltipMaxWidth]="260"
/>`,avatarInitials:`<brightrail-avatar
  kind="initials"
  name="Noah Williams"
  shape="circle"
  size="sm"
  tone="primary"
  tooltip="Noah Williams \u2014 click profile to edit"
  tooltipTrigger="hover"
/>`,metricDensity:`<span
  tabindex="0"
  brightrailTooltip="CPU utilization across the fleet"
  brightrailTooltipPlacement="top"
>
  CPU: 68%
</span>`,variantNeon:`<brightrail-button
  variant="ghost"
  size="sm"
  brightrailTooltip="Neon glow tooltip"
  brightrailTooltipVariant="neon"
  brightrailTooltipPlacement="top"
>
  Neon glow
</brightrail-button>`,variantHolographic:`<brightrail-button
  variant="ghost"
  size="sm"
  brightrailTooltip="Holographic readout"
  brightrailTooltipVariant="holographic"
  brightrailTooltipPlacement="top"
>
  Holographic
</brightrail-button>`,variantGlass:`<brightrail-button
  variant="ghost"
  size="sm"
  brightrailTooltip="Glassmorphism layer"
  brightrailTooltipVariant="glassmorphism"
  brightrailTooltipPlacement="top"
>
  Glassmorphism
</brightrail-button>`,variantCyber:`<brightrail-button
  variant="ghost"
  size="sm"
  brightrailTooltip="Cyber pulse frame"
  brightrailTooltipVariant="cyber-pulse"
  brightrailTooltipPlacement="top"
>
  Cyber pulse
</brightrail-button>`};var x=`<brightrail-avatar
  kind="image"
  shape="circle"
  size="md"
  imageSrc="/images/avatar/avatar-02.png"
  imageAlt="Olivia"
  tooltip="Olivia Rhye \xB7 Product designer"
  tooltipPlacement="top"
  tooltipMaxWidth="260"
/>

<brightrail-button
  variant="outline"
  size="md"
  iconLeft="info"
  brightrailTooltip="Helpful information about this item."
  brightrailTooltipPlacement="top"
>
  Account details
</brightrail-button>`;function z(l,s){l&1&&(i(0,"div",60)(1,"div",61),t(2,"System update"),e(),i(3,"p",62),t(4,"Version 2.4.0 is now available with collaboration fixes."),e(),i(5,"span",63),t(6,"Learn more \u2192"),e()())}var g=class l{avatarImg=C;s=P;static \u0275fac=function(n){return new(n||l)};static \u0275cmp=c({type:l,selectors:[["app-tooltip-variation-catalog"]],decls:114,vars:32,consts:[["catalogRich",""],[1,"tvc-block"],[1,"tvc-block__h"],[1,"tvc-row"],["label","Default info",3,"snippet"],["variant","outline","size","sm","iconLeft","info","brightrailTooltip","Helpful information about this item.","brightrailTooltipPlacement","top"],["label","Helper",3,"snippet"],["variant","ghost","size","sm","iconLeft","help","brightrailTooltip","This helps you complete the task.","brightrailTooltipPlacement","top"],["label","Rich content",3,"snippet"],["variant","outline","size","sm","brightrailTooltipPlacement","top",3,"brightrailTooltip","brightrailTooltipMaxWidth"],["label","Icon tooltip",3,"snippet"],["ariaLabel","Add to favorites","brightrailTooltip","Add to favorites","brightrailTooltipPlacement","top"],[1,"tvc-row","tvc-row--wrap"],["label","Top",3,"snippet"],["variant","outline","size","sm","brightrailTooltip","Top","brightrailTooltipPlacement","top"],["label","Bottom",3,"snippet"],["variant","outline","size","sm","brightrailTooltip","Bottom","brightrailTooltipPlacement","bottom"],["label","Left",3,"snippet"],["variant","outline","size","sm","brightrailTooltip","Left","brightrailTooltipPlacement","left"],["label","Right",3,"snippet"],["variant","outline","size","sm","brightrailTooltip","Right","brightrailTooltipPlacement","right"],["label","Hover",3,"snippet"],["variant","outline","size","sm","brightrailTooltip","Hover to open","brightrailTooltipTrigger","hover"],["label","Focus",3,"snippet"],["variant","outline","size","sm","brightrailTooltip","Focused state","brightrailTooltipTrigger","focus"],["label","Click",3,"snippet"],["variant","outline","size","sm","brightrailTooltip","Click outside to dismiss","brightrailTooltipTrigger","click"],["label","Delayed",3,"snippet"],["variant","outline","size","sm","brightrailTooltip","Opens after 600ms","brightrailTooltipTrigger","hover",3,"brightrailTooltipShowDelay"],["label","Small",3,"snippet"],["variant","outline","size","sm","iconLeft","info","brightrailTooltip","Small tooltip copy.","brightrailTooltipSize","sm"],["label","Medium",3,"snippet"],["variant","outline","size","md","iconLeft","info","brightrailTooltip","Medium is the default density for most enterprise surfaces.","brightrailTooltipSize","md"],["label","Large",3,"snippet"],["variant","outline","size","lg","iconLeft","info","brightrailTooltip","Large tooltips give you room for multi-line guidance without feeling cramped in the layout.","brightrailTooltipSize","lg",3,"brightrailTooltipMaxWidth"],["label","Success",3,"snippet"],["tabindex","0","brightrailTooltip","Everything looks good!","brightrailTooltipContentVariant","success","brightrailTooltipTrigger","focus",1,"tvc-status","tvc-status--success"],["label","Warning",3,"snippet"],["tabindex","0","brightrailTooltip","Be careful with this action.","brightrailTooltipContentVariant","warning","brightrailTooltipTrigger","focus",1,"tvc-status","tvc-status--warning"],["label","Error",3,"snippet"],["tabindex","0","brightrailTooltip","Action failed. Please retry.","brightrailTooltipContentVariant","error","brightrailTooltipTrigger","focus",1,"tvc-status","tvc-status--error"],["label","Info",3,"snippet"],["tabindex","0","brightrailTooltip","Here's some information.","brightrailTooltipContentVariant","info","brightrailTooltipTrigger","focus",1,"tvc-status","tvc-status--info"],[1,"tvc-block__hint"],[1,"tvc-row","tvc-row--baseline"],["label","Avatar roster",3,"snippet"],["kind","image","shape","circle","size","md","imageAlt","Olivia","borderStyle","subtle","tooltip","Olivia Rhye \xB7 Product designer \xB7 London","tooltipPlacement","top",3,"imageSrc","tooltipMaxWidth"],["label","Initials avatar",3,"snippet"],["kind","initials","name","Noah Williams","shape","circle","size","sm","tone","primary","borderStyle","subtle","tooltip","Noah Williams \u2014 click profile to edit","tooltipTrigger","hover"],["label","Metric density",3,"snippet"],["tabindex","0","brightrailTooltip","CPU utilization across the fleet","brightrailTooltipPlacement","top",1,"tvc-metric"],[1,"tvc-block","tvc-block--dark"],["label","Neon glow",3,"snippet"],["variant","ghost","size","sm","brightrailTooltip","Neon glow tooltip","brightrailTooltipVariant","neon","brightrailTooltipPlacement","top"],["label","Holographic",3,"snippet"],["variant","ghost","size","sm","brightrailTooltip","Holographic readout","brightrailTooltipVariant","holographic","brightrailTooltipPlacement","top"],["label","Glassmorphism",3,"snippet"],["variant","ghost","size","sm","brightrailTooltip","Glassmorphism layer","brightrailTooltipVariant","glassmorphism","brightrailTooltipPlacement","top"],["label","Cyber pulse",3,"snippet"],["variant","ghost","size","sm","brightrailTooltip","Cyber pulse frame","brightrailTooltipVariant","cyber-pulse","brightrailTooltipPlacement","top"],[1,"tvc-rich"],[1,"tvc-rich__title"],[1,"tvc-rich__body"],[1,"tvc-rich__link"]],template:function(n,a){if(n&1&&(m(0,z,7,0,"ng-template",null,0,d),i(2,"section",1)(3,"h2",2),t(4,"1. Core tooltip types"),e(),i(5,"div",3)(6,"app-catalog-variation-tile",4)(7,"brightrail-button",5),t(8," Default info "),e()(),i(9,"app-catalog-variation-tile",6)(10,"brightrail-button",7),t(11," Helper "),e()(),i(12,"app-catalog-variation-tile",8)(13,"brightrail-button",9),t(14," Rich content "),e()(),i(15,"app-catalog-variation-tile",10)(16,"brightrail-icon-button",11),t(17," \u2665 "),e()()()(),i(18,"section",1)(19,"h2",2),t(20,"2. Placements"),e(),i(21,"div",12)(22,"app-catalog-variation-tile",13)(23,"brightrail-button",14),t(24," Top "),e()(),i(25,"app-catalog-variation-tile",15)(26,"brightrail-button",16),t(27," Bottom "),e()(),i(28,"app-catalog-variation-tile",17)(29,"brightrail-button",18),t(30," Left "),e()(),i(31,"app-catalog-variation-tile",19)(32,"brightrail-button",20),t(33," Right "),e()()()(),i(34,"section",1)(35,"h2",2),t(36,"3. Triggers"),e(),i(37,"div",12)(38,"app-catalog-variation-tile",21)(39,"brightrail-button",22),t(40," Hover "),e()(),i(41,"app-catalog-variation-tile",23)(42,"brightrail-button",24),t(43," Focus "),e()(),i(44,"app-catalog-variation-tile",25)(45,"brightrail-button",26),t(46," Click "),e()(),i(47,"app-catalog-variation-tile",27)(48,"brightrail-button",28),t(49," Delayed "),e()()()(),i(50,"section",1)(51,"h2",2),t(52,"4. Sizes"),e(),i(53,"div",3)(54,"app-catalog-variation-tile",29)(55,"brightrail-button",30),t(56," Small "),e()(),i(57,"app-catalog-variation-tile",31)(58,"brightrail-button",32),t(59," Medium "),e()(),i(60,"app-catalog-variation-tile",33)(61,"brightrail-button",34),t(62," Large "),e()()()(),i(63,"section",1)(64,"h2",2),t(65,"5. Status / semantic"),e(),i(66,"div",12)(67,"app-catalog-variation-tile",35)(68,"span",36),t(69," Success "),e()(),i(70,"app-catalog-variation-tile",37)(71,"span",38),t(72," Warning "),e()(),i(73,"app-catalog-variation-tile",39)(74,"span",40),t(75," Error "),e()(),i(76,"app-catalog-variation-tile",41)(77,"span",42),t(78," Info "),e()()()(),i(79,"section",1)(80,"h2",2),t(81,"6. Avatars & density"),e(),i(82,"p",43),t(83," Pass "),i(84,"code"),t(85,"tooltip"),e(),t(86," and related inputs directly on "),i(87,"code"),t(88,"brightrail-avatar"),e(),t(89," \u2014 they forward to the tooltip host directive. "),e(),i(90,"div",44)(91,"app-catalog-variation-tile",45),p(92,"brightrail-avatar",46),e(),i(93,"app-catalog-variation-tile",47),p(94,"brightrail-avatar",48),e(),i(95,"app-catalog-variation-tile",49)(96,"span",50),t(97," CPU: 68% "),e()()()(),i(98,"section",51)(99,"h2",2),t(100,"7. Futuristic shells"),e(),i(101,"div",12)(102,"app-catalog-variation-tile",52)(103,"brightrail-button",53),t(104," Neon glow "),e()(),i(105,"app-catalog-variation-tile",54)(106,"brightrail-button",55),t(107," Holographic "),e()(),i(108,"app-catalog-variation-tile",56)(109,"brightrail-button",57),t(110," Glassmorphism "),e()(),i(111,"app-catalog-variation-tile",58)(112,"brightrail-button",59),t(113," Cyber pulse "),e()()()()),n&2){let M=b(1);o(6),r("snippet",a.s.defaultInfo),o(3),r("snippet",a.s.helper),o(3),r("snippet",a.s.richContent),o(),r("brightrailTooltip",M)("brightrailTooltipMaxWidth",280),o(2),r("snippet",a.s.iconTooltip),o(7),r("snippet",a.s.placementTop),o(3),r("snippet",a.s.placementBottom),o(3),r("snippet",a.s.placementLeft),o(3),r("snippet",a.s.placementRight),o(7),r("snippet",a.s.triggerHover),o(3),r("snippet",a.s.triggerFocus),o(3),r("snippet",a.s.triggerClick),o(3),r("snippet",a.s.triggerDelayed),o(),r("brightrailTooltipShowDelay",600),o(6),r("snippet",a.s.sizeSm),o(3),r("snippet",a.s.sizeMd),o(3),r("snippet",a.s.sizeLg),o(),r("brightrailTooltipMaxWidth",320),o(6),r("snippet",a.s.semanticSuccess),o(3),r("snippet",a.s.semanticWarning),o(3),r("snippet",a.s.semanticError),o(3),r("snippet",a.s.semanticInfo),o(15),r("snippet",a.s.avatarRoster),o(),r("imageSrc",a.avatarImg.a02)("tooltipMaxWidth",260),o(),r("snippet",a.s.avatarInitials),o(2),r("snippet",a.s.metricDensity),o(7),r("snippet",a.s.variantNeon),o(3),r("snippet",a.s.variantHolographic),o(3),r("snippet",a.s.variantGlass),o(3),r("snippet",a.s.variantCyber)}},dependencies:[T,f,v,y,_],styles:["[_nghost-%COMP%]{display:block}.tvc-block[_ngcontent-%COMP%]{margin-bottom:1.25rem}.tvc-block--dark[_ngcontent-%COMP%]{padding:1rem 1.1rem;border-radius:.85rem;background:#0f172a;border:1px solid #1e293b;color:#e2e8f0}.tvc-block--dark[_ngcontent-%COMP%]   .tvc-block__h[_ngcontent-%COMP%]{color:#f8fafc}.tvc-block__h[_ngcontent-%COMP%]{margin:0 0 .65rem;font-size:.95rem;font-weight:700}.tvc-block__hint[_ngcontent-%COMP%]{margin:-.15rem 0 .65rem;font-size:.78rem;color:var(--ff-muted, #64748b)}.tvc-row[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:.65rem;align-items:center}.tvc-row--baseline[_ngcontent-%COMP%]{align-items:flex-end}.tvc-row--wrap[_ngcontent-%COMP%]{flex-wrap:wrap}.tvc-chip[_ngcontent-%COMP%], .tvc-pill[_ngcontent-%COMP%], .tvc-ghost[_ngcontent-%COMP%]{font:inherit;cursor:pointer;border-radius:.65rem}.tvc-chip[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:.4rem;padding:.45rem .65rem;border:1px solid var(--ff-border, #e8eaed);background:var(--br-color-surface-muted, #f1f3f4)}.tvc-pill[_ngcontent-%COMP%]{padding:.4rem .75rem;border:1px solid var(--ff-border, #e8eaed);background:var(--br-color-surface, #fff)}.tvc-ghost[_ngcontent-%COMP%]{padding:.45rem .75rem;border:1px solid rgba(148,163,184,.45);background:#0f172a59;color:#e2e8f0}.tvc-q[_ngcontent-%COMP%]{display:inline-flex;width:1.25rem;height:1.25rem;align-items:center;justify-content:center;border-radius:999px;background:var(--br-color-secondary-bg, #e8eaed);font-weight:700;font-size:.75rem}.tvc-status[_ngcontent-%COMP%]{display:inline-flex;padding:.35rem .65rem;border-radius:999px;font-size:.8125rem;font-weight:600;outline:none}.tvc-status--success[_ngcontent-%COMP%]{background:color-mix(in srgb,var(--br-color-success, #0d9f4c) 12%,transparent);color:var(--br-color-success, #0d9f4c)}.tvc-status--warning[_ngcontent-%COMP%]{background:color-mix(in srgb,var(--br-color-warning, #e8710a) 14%,transparent);color:var(--br-color-warning, #c75f08)}.tvc-status--error[_ngcontent-%COMP%]{background:color-mix(in srgb,var(--br-color-danger, #d93025) 12%,transparent);color:var(--br-color-danger, #d93025)}.tvc-status--info[_ngcontent-%COMP%]{background:color-mix(in srgb,var(--br-color-primary, #0062ff) 10%,transparent);color:var(--br-color-primary, #0062ff)}.tvc-metric[_ngcontent-%COMP%]{font-size:.875rem;font-weight:650;padding:.25rem .45rem;border-radius:.35rem;background:var(--br-color-surface-muted, #f1f3f4);outline:none}.tvc-rich__title[_ngcontent-%COMP%]{font-weight:650;margin-bottom:.35rem}.tvc-rich__body[_ngcontent-%COMP%]{margin:0 0 .45rem;opacity:.92}.tvc-rich__link[_ngcontent-%COMP%]{font-weight:600;color:var(--br-color-primary, #0062ff)}"],changeDetection:0})};var S=class l{htmlExamples=x;static \u0275fac=function(n){return new(n||l)};static \u0275cmp=c({type:l,selectors:[["app-tooltip-catalog-overview"]],decls:34,vars:1,consts:[[1,"tco"],[1,"tco-hero"],[1,"tco-hero__eyebrow"],[1,"tco-hero__links"],["routerLink","..",1,"tco-link"],["routerLink","/variations",1,"tco-link"],["aria-labelledby","tco-html-examples",1,"tco-code-block"],["id","tco-html-examples"],[1,"tco-code-block__hint"],[1,"tco-pre"]],template:function(n,a){n&1&&(i(0,"div",0)(1,"header",1)(2,"p",2),t(3,"Brightrail \xB7 Tooltip \xB7 Variation catalog"),e(),i(4,"h1"),t(5,"Tooltip types & variations"),e(),i(6,"p"),t(7," Enterprise tooltip patterns for guidance, status, actions, avatars, and futuristic shells \u2014 all driven by "),i(8,"code"),t(9,"brightrailTooltip"),e(),t(10," and optional avatar host inputs. Click any tile for "),i(11,"strong"),t(12,"View code"),e(),t(13,", then "),i(14,"strong"),t(15,"Copy code"),e(),t(16," to paste into your app (import from "),i(17,"code"),t(18,"brightrail"),e(),t(19,"). "),e(),i(20,"p",3)(21,"a",4),t(22,"\u2190 Tooltip playground (live settings)"),e(),i(23,"a",5),t(24,"All variation catalogs"),e()()(),p(25,"app-tooltip-variation-catalog"),i(26,"section",6)(27,"h2",7),t(28,"Tooltip HTML examples"),e(),i(29,"p",8),t(30,"Typical avatar-hosted and button-hosted tooltip markup."),e(),i(31,"pre",9)(32,"code"),t(33),e()()()()),n&2&&(o(33),h(a.htmlExamples))},dependencies:[u,g],styles:["[_nghost-%COMP%]{flex:1 1 auto;min-height:0;overflow:auto}.tco[_ngcontent-%COMP%]{max-width:1120px;margin:0 auto;padding:1.25rem 1.25rem 2.5rem;box-sizing:border-box}.tco-hero__eyebrow[_ngcontent-%COMP%]{margin:0 0 .25rem;font-size:.75rem;font-weight:600;letter-spacing:.04em;text-transform:uppercase;color:var(--ff-muted, #64748b)}.tco-hero__links[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:.75rem 1.25rem}.tco-code-block[_ngcontent-%COMP%]{margin:1.5rem 0 0;padding-top:1rem;border-top:1px solid var(--ff-border, #e8eaed)}.tco-code-block[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.1rem;margin:0 0 .35rem}.tco-code-block__hint[_ngcontent-%COMP%]{margin:0 0 .65rem;font-size:.8125rem;color:var(--ff-muted, #64748b)}.tco-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0;font-size:1.5rem}.tco-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:.35rem 0 .5rem;color:var(--ff-muted, #5f6368)}.tco-hero[_ngcontent-%COMP%]   .tco-link[_ngcontent-%COMP%]{display:inline-block;margin-top:.5rem;font-weight:600;color:var(--br-color-primary, #0062ff);text-decoration:none}.tco-hero[_ngcontent-%COMP%]   .tco-link[_ngcontent-%COMP%]:hover{text-decoration:underline}.tco-pre[_ngcontent-%COMP%]{margin:.5rem 0 0;padding:.85rem;background:var(--br-color-surface-muted, #f1f3f4);border-radius:.5rem;overflow:auto;font-size:.8rem}"],changeDetection:0})};export{S as TooltipCatalogOverviewComponent};
