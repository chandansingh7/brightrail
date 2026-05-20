import{a as T,b as C}from"./chunk-FJDWJVPD.js";import{a as f}from"./chunk-65OZ56CQ.js";import{a as y}from"./chunk-YDULXL76.js";import{a as v}from"./chunk-4C4FL2XM.js";import{e as u}from"./chunk-TU4FQAPV.js";import{$a as l,Ga as s,Kb as h,La as m,Ya as r,Za as e,_a as i,rb as b,ua as o,vb as t,wb as d}from"./chunk-K6TWHCOD.js";var _={defaultInfo:`<button
  type="button"
  brightrailTooltip="Helpful information about this item."
  brightrailTooltipPlacement="top"
>
  <brightrail-button-icon name="info" />
  Default info
</button>`,helper:`<button
  type="button"
  brightrailTooltip="This helps you complete the task."
  brightrailTooltipPlacement="top"
>
  Helper
</button>`,richContent:`<button
  type="button"
  [brightrailTooltip]="richTooltipTemplate"
  brightrailTooltipPlacement="top"
  [brightrailTooltipMaxWidth]="280"
>
  Rich content
</button>

<ng-template #richTooltipTemplate>
  <div class="tooltip-rich">
    <div class="tooltip-rich__title">System update</div>
    <p class="tooltip-rich__body">Version 2.4.0 is now available with collaboration fixes.</p>
    <span class="tooltip-rich__link">Learn more \u2192</span>
  </div>
</ng-template>`,iconTooltip:`<button
  type="button"
  brightrailTooltip="Add to favorites"
  brightrailTooltipPlacement="top"
>
  Icon tooltip
</button>`,placementTop:'<button type="button" brightrailTooltip="Top" brightrailTooltipPlacement="top">Top</button>',placementBottom:'<button type="button" brightrailTooltip="Bottom" brightrailTooltipPlacement="bottom">Bottom</button>',placementLeft:'<button type="button" brightrailTooltip="Left" brightrailTooltipPlacement="left">Left</button>',placementRight:'<button type="button" brightrailTooltip="Right" brightrailTooltipPlacement="right">Right</button>',triggerHover:'<button type="button" brightrailTooltip="Hover to open" brightrailTooltipTrigger="hover">Hover</button>',triggerFocus:'<button type="button" brightrailTooltip="Focused state" brightrailTooltipTrigger="focus">Focus</button>',triggerClick:'<button type="button" brightrailTooltip="Click outside to dismiss" brightrailTooltipTrigger="click">Click</button>',triggerDelayed:`<button
  type="button"
  brightrailTooltip="Opens after 600ms"
  brightrailTooltipTrigger="hover"
  [brightrailTooltipShowDelay]="600"
>
  Delayed
</button>`,sizeSm:'<button type="button" brightrailTooltip="Small tooltip copy." brightrailTooltipSize="sm">Small</button>',sizeMd:`<button
  type="button"
  brightrailTooltip="Medium is the default density for most enterprise surfaces."
  brightrailTooltipSize="md"
>
  Medium
</button>`,sizeLg:`<button
  type="button"
  brightrailTooltip="Large tooltips give you room for multi-line guidance."
  brightrailTooltipSize="lg"
  [brightrailTooltipMaxWidth]="320"
>
  Large
</button>`,semanticSuccess:`<span
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
</span>`,variantNeon:`<button
  type="button"
  brightrailTooltip="Neon glow tooltip"
  brightrailTooltipVariant="neon"
  brightrailTooltipPlacement="top"
>
  Neon glow
</button>`,variantHolographic:`<button
  type="button"
  brightrailTooltip="Holographic readout"
  brightrailTooltipVariant="holographic"
  brightrailTooltipPlacement="top"
>
  Holographic
</button>`,variantGlass:`<button
  type="button"
  brightrailTooltip="Glassmorphism layer"
  brightrailTooltipVariant="glassmorphism"
  brightrailTooltipPlacement="top"
>
  Glassmorphism
</button>`,variantCyber:`<button
  type="button"
  brightrailTooltip="Cyber pulse frame"
  brightrailTooltipVariant="cyber-pulse"
  brightrailTooltipPlacement="top"
>
  Cyber pulse
</button>`};var P=`<brightrail-avatar
  kind="image"
  shape="circle"
  size="md"
  imageSrc="/images/avatar/avatar-02.png"
  imageAlt="Olivia"
  tooltip="Olivia Rhye \xB7 Product designer"
  tooltipPlacement="top"
  tooltipMaxWidth="260"
/>

<button
  type="button"
  brightrailTooltip="Helpful information about this item."
  brightrailTooltipPlacement="top"
>
  Hover me
</button>`;function O(p,c){p&1&&(e(0,"div",63)(1,"div",64),t(2,"System update"),i(),e(3,"p",65),t(4,"Version 2.4.0 is now available with collaboration fixes."),i(),e(5,"span",66),t(6,"Learn more \u2192"),i()())}var g=class p{avatarImg=C;s=_;static \u0275fac=function(n){return new(n||p)};static \u0275cmp=s({type:p,selectors:[["app-tooltip-variation-catalog"]],decls:128,vars:32,consts:[["catalogRich",""],[1,"tvc-block"],[1,"tvc-block__h"],[1,"tvc-row"],["label","Default info",3,"snippet"],["type","button","brightrailTooltip","Helpful information about this item.","brightrailTooltipPlacement","top",1,"tvc-chip"],["name","info"],["label","Helper",3,"snippet"],["type","button","brightrailTooltip","This helps you complete the task.","brightrailTooltipPlacement","top",1,"tvc-chip"],["aria-hidden","true",1,"tvc-q"],["label","Rich content",3,"snippet"],["type","button","brightrailTooltipPlacement","top",1,"tvc-chip",3,"brightrailTooltip","brightrailTooltipMaxWidth"],["aria-hidden","true"],["label","Icon tooltip",3,"snippet"],["type","button","brightrailTooltip","Add to favorites","brightrailTooltipPlacement","top",1,"tvc-chip"],[1,"tvc-row","tvc-row--wrap"],["label","Top",3,"snippet"],["type","button","brightrailTooltip","Top","brightrailTooltipPlacement","top",1,"tvc-pill"],["label","Bottom",3,"snippet"],["type","button","brightrailTooltip","Bottom","brightrailTooltipPlacement","bottom",1,"tvc-pill"],["label","Left",3,"snippet"],["type","button","brightrailTooltip","Left","brightrailTooltipPlacement","left",1,"tvc-pill"],["label","Right",3,"snippet"],["type","button","brightrailTooltip","Right","brightrailTooltipPlacement","right",1,"tvc-pill"],["label","Hover",3,"snippet"],["type","button","brightrailTooltip","Hover to open","brightrailTooltipTrigger","hover",1,"tvc-pill"],["label","Focus",3,"snippet"],["type","button","brightrailTooltip","Focused state","brightrailTooltipTrigger","focus",1,"tvc-pill"],["label","Click",3,"snippet"],["type","button","brightrailTooltip","Click outside to dismiss","brightrailTooltipTrigger","click",1,"tvc-pill"],["label","Delayed",3,"snippet"],["type","button","brightrailTooltip","Opens after 600ms","brightrailTooltipTrigger","hover",1,"tvc-pill",3,"brightrailTooltipShowDelay"],["label","Small",3,"snippet"],["type","button","brightrailTooltip","Small tooltip copy.","brightrailTooltipSize","sm",1,"tvc-chip"],["label","Medium",3,"snippet"],["type","button","brightrailTooltip","Medium is the default density for most enterprise surfaces.","brightrailTooltipSize","md",1,"tvc-chip"],["label","Large",3,"snippet"],["type","button","brightrailTooltip","Large tooltips give you room for multi-line guidance without feeling cramped in the layout.","brightrailTooltipSize","lg",1,"tvc-chip",3,"brightrailTooltipMaxWidth"],["label","Success",3,"snippet"],["tabindex","0","brightrailTooltip","Everything looks good!","brightrailTooltipContentVariant","success","brightrailTooltipTrigger","focus",1,"tvc-status","tvc-status--success"],["label","Warning",3,"snippet"],["tabindex","0","brightrailTooltip","Be careful with this action.","brightrailTooltipContentVariant","warning","brightrailTooltipTrigger","focus",1,"tvc-status","tvc-status--warning"],["label","Error",3,"snippet"],["tabindex","0","brightrailTooltip","Action failed. Please retry.","brightrailTooltipContentVariant","error","brightrailTooltipTrigger","focus",1,"tvc-status","tvc-status--error"],["label","Info",3,"snippet"],["tabindex","0","brightrailTooltip","Here's some information.","brightrailTooltipContentVariant","info","brightrailTooltipTrigger","focus",1,"tvc-status","tvc-status--info"],[1,"tvc-block__hint"],[1,"tvc-row","tvc-row--baseline"],["label","Avatar roster",3,"snippet"],["kind","image","shape","circle","size","md","imageAlt","Olivia","borderStyle","subtle","tooltip","Olivia Rhye \xB7 Product designer \xB7 London","tooltipPlacement","top",3,"imageSrc","tooltipMaxWidth"],["label","Initials avatar",3,"snippet"],["kind","initials","name","Noah Williams","shape","circle","size","sm","tone","primary","borderStyle","subtle","tooltip","Noah Williams \u2014 click profile to edit","tooltipTrigger","hover"],["label","Metric density",3,"snippet"],["tabindex","0","brightrailTooltip","CPU utilization across the fleet","brightrailTooltipPlacement","top",1,"tvc-metric"],[1,"tvc-block","tvc-block--dark"],["label","Neon glow",3,"snippet"],["type","button","brightrailTooltip","Neon glow tooltip","brightrailTooltipVariant","neon","brightrailTooltipPlacement","top",1,"tvc-ghost"],["label","Holographic",3,"snippet"],["type","button","brightrailTooltip","Holographic readout","brightrailTooltipVariant","holographic","brightrailTooltipPlacement","top",1,"tvc-ghost"],["label","Glassmorphism",3,"snippet"],["type","button","brightrailTooltip","Glassmorphism layer","brightrailTooltipVariant","glassmorphism","brightrailTooltipPlacement","top",1,"tvc-ghost"],["label","Cyber pulse",3,"snippet"],["type","button","brightrailTooltip","Cyber pulse frame","brightrailTooltipVariant","cyber-pulse","brightrailTooltipPlacement","top",1,"tvc-ghost"],[1,"tvc-rich"],[1,"tvc-rich__title"],[1,"tvc-rich__body"],[1,"tvc-rich__link"]],template:function(n,a){if(n&1&&(m(0,O,7,0,"ng-template",null,0,h),e(2,"section",1)(3,"h2",2),t(4,"1. Core tooltip types"),i(),e(5,"div",3)(6,"app-catalog-variation-tile",4)(7,"button",5),l(8,"brightrail-button-icon",6),e(9,"span"),t(10,"Default info"),i()()(),e(11,"app-catalog-variation-tile",7)(12,"button",8)(13,"span",9),t(14,"?"),i(),e(15,"span"),t(16,"Helper"),i()()(),e(17,"app-catalog-variation-tile",10)(18,"button",11)(19,"span",12),t(20,"\u{1F680}"),i(),e(21,"span"),t(22,"Rich content"),i()()(),e(23,"app-catalog-variation-tile",13)(24,"button",14)(25,"span",12),t(26,"\u2665"),i(),e(27,"span"),t(28,"Icon tooltip"),i()()()()(),e(29,"section",1)(30,"h2",2),t(31,"2. Placements"),i(),e(32,"div",15)(33,"app-catalog-variation-tile",16)(34,"button",17),t(35,"Top"),i()(),e(36,"app-catalog-variation-tile",18)(37,"button",19),t(38," Bottom "),i()(),e(39,"app-catalog-variation-tile",20)(40,"button",21),t(41,"Left"),i()(),e(42,"app-catalog-variation-tile",22)(43,"button",23),t(44,"Right"),i()()()(),e(45,"section",1)(46,"h2",2),t(47,"3. Triggers"),i(),e(48,"div",15)(49,"app-catalog-variation-tile",24)(50,"button",25),t(51," Hover "),i()(),e(52,"app-catalog-variation-tile",26)(53,"button",27),t(54," Focus "),i()(),e(55,"app-catalog-variation-tile",28)(56,"button",29),t(57," Click "),i()(),e(58,"app-catalog-variation-tile",30)(59,"button",31),t(60," Delayed "),i()()()(),e(61,"section",1)(62,"h2",2),t(63,"4. Sizes"),i(),e(64,"div",3)(65,"app-catalog-variation-tile",32)(66,"button",33),l(67,"brightrail-button-icon",6),t(68," Small "),i()(),e(69,"app-catalog-variation-tile",34)(70,"button",35),l(71,"brightrail-button-icon",6),t(72," Medium "),i()(),e(73,"app-catalog-variation-tile",36)(74,"button",37),l(75,"brightrail-button-icon",6),t(76," Large "),i()()()(),e(77,"section",1)(78,"h2",2),t(79,"5. Status / semantic"),i(),e(80,"div",15)(81,"app-catalog-variation-tile",38)(82,"span",39),t(83," Success "),i()(),e(84,"app-catalog-variation-tile",40)(85,"span",41),t(86," Warning "),i()(),e(87,"app-catalog-variation-tile",42)(88,"span",43),t(89," Error "),i()(),e(90,"app-catalog-variation-tile",44)(91,"span",45),t(92," Info "),i()()()(),e(93,"section",1)(94,"h2",2),t(95,"6. Avatars & density"),i(),e(96,"p",46),t(97," Pass "),e(98,"code"),t(99,"tooltip"),i(),t(100," and related inputs directly on "),e(101,"code"),t(102,"brightrail-avatar"),i(),t(103," \u2014 they forward to the tooltip host directive. "),i(),e(104,"div",47)(105,"app-catalog-variation-tile",48),l(106,"brightrail-avatar",49),i(),e(107,"app-catalog-variation-tile",50),l(108,"brightrail-avatar",51),i(),e(109,"app-catalog-variation-tile",52)(110,"span",53),t(111," CPU: 68% "),i()()()(),e(112,"section",54)(113,"h2",2),t(114,"7. Futuristic shells"),i(),e(115,"div",15)(116,"app-catalog-variation-tile",55)(117,"button",56),t(118," Neon glow "),i()(),e(119,"app-catalog-variation-tile",57)(120,"button",58),t(121," Holographic "),i()(),e(122,"app-catalog-variation-tile",59)(123,"button",60),t(124," Glassmorphism "),i()(),e(125,"app-catalog-variation-tile",61)(126,"button",62),t(127," Cyber pulse "),i()()()()),n&2){let S=b(1);o(6),r("snippet",a.s.defaultInfo),o(5),r("snippet",a.s.helper),o(6),r("snippet",a.s.richContent),o(),r("brightrailTooltip",S)("brightrailTooltipMaxWidth",280),o(5),r("snippet",a.s.iconTooltip),o(10),r("snippet",a.s.placementTop),o(3),r("snippet",a.s.placementBottom),o(3),r("snippet",a.s.placementLeft),o(3),r("snippet",a.s.placementRight),o(7),r("snippet",a.s.triggerHover),o(3),r("snippet",a.s.triggerFocus),o(3),r("snippet",a.s.triggerClick),o(3),r("snippet",a.s.triggerDelayed),o(),r("brightrailTooltipShowDelay",600),o(6),r("snippet",a.s.sizeSm),o(4),r("snippet",a.s.sizeMd),o(4),r("snippet",a.s.sizeLg),o(),r("brightrailTooltipMaxWidth",320),o(7),r("snippet",a.s.semanticSuccess),o(3),r("snippet",a.s.semanticWarning),o(3),r("snippet",a.s.semanticError),o(3),r("snippet",a.s.semanticInfo),o(15),r("snippet",a.s.avatarRoster),o(),r("imageSrc",a.avatarImg.a02)("tooltipMaxWidth",260),o(),r("snippet",a.s.avatarInitials),o(2),r("snippet",a.s.metricDensity),o(7),r("snippet",a.s.variantNeon),o(3),r("snippet",a.s.variantHolographic),o(3),r("snippet",a.s.variantGlass),o(3),r("snippet",a.s.variantCyber)}},dependencies:[f,v,T,y],styles:["[_nghost-%COMP%]{display:block}.tvc-block[_ngcontent-%COMP%]{margin-bottom:1.25rem}.tvc-block--dark[_ngcontent-%COMP%]{padding:1rem 1.1rem;border-radius:.85rem;background:#0f172a;border:1px solid #1e293b;color:#e2e8f0}.tvc-block--dark[_ngcontent-%COMP%]   .tvc-block__h[_ngcontent-%COMP%]{color:#f8fafc}.tvc-block__h[_ngcontent-%COMP%]{margin:0 0 .65rem;font-size:.95rem;font-weight:700}.tvc-block__hint[_ngcontent-%COMP%]{margin:-.15rem 0 .65rem;font-size:.78rem;color:var(--ff-muted, #64748b)}.tvc-row[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:.65rem;align-items:center}.tvc-row--baseline[_ngcontent-%COMP%]{align-items:flex-end}.tvc-row--wrap[_ngcontent-%COMP%]{flex-wrap:wrap}.tvc-chip[_ngcontent-%COMP%], .tvc-pill[_ngcontent-%COMP%], .tvc-ghost[_ngcontent-%COMP%]{font:inherit;cursor:pointer;border-radius:.65rem}.tvc-chip[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:.4rem;padding:.45rem .65rem;border:1px solid var(--ff-border, #e8eaed);background:var(--br-color-surface-muted, #f1f3f4)}.tvc-pill[_ngcontent-%COMP%]{padding:.4rem .75rem;border:1px solid var(--ff-border, #e8eaed);background:var(--br-color-surface, #fff)}.tvc-ghost[_ngcontent-%COMP%]{padding:.45rem .75rem;border:1px solid rgba(148,163,184,.45);background:#0f172a59;color:#e2e8f0}.tvc-q[_ngcontent-%COMP%]{display:inline-flex;width:1.25rem;height:1.25rem;align-items:center;justify-content:center;border-radius:999px;background:var(--br-color-secondary-bg, #e8eaed);font-weight:700;font-size:.75rem}.tvc-status[_ngcontent-%COMP%]{display:inline-flex;padding:.35rem .65rem;border-radius:999px;font-size:.8125rem;font-weight:600;outline:none}.tvc-status--success[_ngcontent-%COMP%]{background:color-mix(in srgb,var(--br-color-success, #0d9f4c) 12%,transparent);color:var(--br-color-success, #0d9f4c)}.tvc-status--warning[_ngcontent-%COMP%]{background:color-mix(in srgb,var(--br-color-warning, #e8710a) 14%,transparent);color:var(--br-color-warning, #c75f08)}.tvc-status--error[_ngcontent-%COMP%]{background:color-mix(in srgb,var(--br-color-danger, #d93025) 12%,transparent);color:var(--br-color-danger, #d93025)}.tvc-status--info[_ngcontent-%COMP%]{background:color-mix(in srgb,var(--br-color-primary, #0062ff) 10%,transparent);color:var(--br-color-primary, #0062ff)}.tvc-metric[_ngcontent-%COMP%]{font-size:.875rem;font-weight:650;padding:.25rem .45rem;border-radius:.35rem;background:var(--br-color-surface-muted, #f1f3f4);outline:none}.tvc-rich__title[_ngcontent-%COMP%]{font-weight:650;margin-bottom:.35rem}.tvc-rich__body[_ngcontent-%COMP%]{margin:0 0 .45rem;opacity:.92}.tvc-rich__link[_ngcontent-%COMP%]{font-weight:600;color:var(--br-color-primary, #0062ff)}"],changeDetection:0})};var x=class p{htmlExamples=P;static \u0275fac=function(n){return new(n||p)};static \u0275cmp=s({type:p,selectors:[["app-tooltip-catalog-overview"]],decls:34,vars:1,consts:[[1,"tco"],[1,"tco-hero"],[1,"tco-hero__eyebrow"],[1,"tco-hero__links"],["routerLink","..",1,"tco-link"],["routerLink","/variations",1,"tco-link"],["aria-labelledby","tco-html-examples",1,"tco-code-block"],["id","tco-html-examples"],[1,"tco-code-block__hint"],[1,"tco-pre"]],template:function(n,a){n&1&&(e(0,"div",0)(1,"header",1)(2,"p",2),t(3,"Brightrail \xB7 Tooltip \xB7 Variation catalog"),i(),e(4,"h1"),t(5,"Tooltip types & variations"),i(),e(6,"p"),t(7," Enterprise tooltip patterns for guidance, status, actions, avatars, and futuristic shells \u2014 all driven by "),e(8,"code"),t(9,"brightrailTooltip"),i(),t(10," and optional avatar host inputs. Click any tile for "),e(11,"strong"),t(12,"View code"),i(),t(13,", then "),e(14,"strong"),t(15,"Copy code"),i(),t(16," to paste into your app (import from "),e(17,"code"),t(18,"brightrail"),i(),t(19,"). "),i(),e(20,"p",3)(21,"a",4),t(22,"\u2190 Tooltip playground (live settings)"),i(),e(23,"a",5),t(24,"All variation catalogs"),i()()(),l(25,"app-tooltip-variation-catalog"),e(26,"section",6)(27,"h2",7),t(28,"Tooltip HTML examples"),i(),e(29,"p",8),t(30,"Typical avatar-hosted and button-hosted tooltip markup."),i(),e(31,"pre",9)(32,"code"),t(33),i()()()()),n&2&&(o(33),d(a.htmlExamples))},dependencies:[u,g],styles:["[_nghost-%COMP%]{flex:1 1 auto;min-height:0;overflow:auto}.tco[_ngcontent-%COMP%]{max-width:1120px;margin:0 auto;padding:1.25rem 1.25rem 2.5rem;box-sizing:border-box}.tco-hero__eyebrow[_ngcontent-%COMP%]{margin:0 0 .25rem;font-size:.75rem;font-weight:600;letter-spacing:.04em;text-transform:uppercase;color:var(--ff-muted, #64748b)}.tco-hero__links[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:.75rem 1.25rem}.tco-code-block[_ngcontent-%COMP%]{margin:1.5rem 0 0;padding-top:1rem;border-top:1px solid var(--ff-border, #e8eaed)}.tco-code-block[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.1rem;margin:0 0 .35rem}.tco-code-block__hint[_ngcontent-%COMP%]{margin:0 0 .65rem;font-size:.8125rem;color:var(--ff-muted, #64748b)}.tco-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0;font-size:1.5rem}.tco-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:.35rem 0 .5rem;color:var(--ff-muted, #5f6368)}.tco-hero[_ngcontent-%COMP%]   .tco-link[_ngcontent-%COMP%]{display:inline-block;margin-top:.5rem;font-weight:600;color:var(--br-color-primary, #0062ff);text-decoration:none}.tco-hero[_ngcontent-%COMP%]   .tco-link[_ngcontent-%COMP%]:hover{text-decoration:underline}.tco-pre[_ngcontent-%COMP%]{margin:.5rem 0 0;padding:.85rem;background:var(--br-color-surface-muted, #f1f3f4);border-radius:.5rem;overflow:auto;font-size:.8rem}"],changeDetection:0})};export{x as TooltipCatalogOverviewComponent};
