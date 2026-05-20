import{a as g}from"./chunk-Z43IUUC4.js";import"./chunk-2QFTQFU4.js";import{a as h}from"./chunk-YDULXL76.js";import{e as c}from"./chunk-TU4FQAPV.js";import{$a as l,Ga as p,Ya as t,Za as a,_a as i,ua as e,vb as r,wb as u}from"./chunk-K6TWHCOD.js";var b={coreDefault:'<brightrail-slider [min]="0" [max]="100" [step]="1" />',coreWithValue:`<brightrail-slider
  [min]="0"
  [max]="100"
  [step]="1"
  [showValue]="true"
  ariaLabel="Volume"
/>`,coreCustomRange:`<brightrail-slider
  [min]="10"
  [max]="90"
  [step]="5"
  [showValue]="true"
  ariaLabel="Brightness"
/>`,coreFineStep:`<brightrail-slider
  [min]="0"
  [max]="1"
  [step]="0.1"
  [showValue]="true"
  ariaLabel="Opacity"
/>`,tonePrimary:'<brightrail-slider tone="primary" [showValue]="true" ariaLabel="Primary" />',toneSuccess:'<brightrail-slider tone="success" [showValue]="true" ariaLabel="Success" />',toneWarning:'<brightrail-slider tone="warning" [showValue]="true" ariaLabel="Warning" />',toneDanger:'<brightrail-slider tone="danger" [showValue]="true" ariaLabel="Danger" />',toneNeutral:'<brightrail-slider tone="neutral" [showValue]="true" ariaLabel="Neutral" />',sizeSm:'<brightrail-slider size="sm" [showValue]="true" ariaLabel="Small" />',sizeMd:'<brightrail-slider size="md" [showValue]="true" ariaLabel="Medium" />',sizeLg:'<brightrail-slider size="lg" [showValue]="true" ariaLabel="Large" />',stateDefault:'<brightrail-slider [showValue]="true" ariaLabel="Default" />',stateDisabled:'<brightrail-slider [disabled]="true" [showValue]="true" ariaLabel="Disabled" />',rangeVolume:`<brightrail-slider
  [min]="0"
  [max]="100"
  [step]="1"
  [showValue]="true"
  ariaLabel="Volume"
  [(ngModel)]="volume"
/>`,rangePercentage:`<brightrail-slider
  [min]="0"
  [max]="100"
  [step]="5"
  [showValue]="true"
  tone="primary"
  ariaLabel="Completion"
  [(ngModel)]="completion"
/>`,rangeTemperature:`<brightrail-slider
  [min]="16"
  [max]="30"
  [step]="1"
  [showValue]="true"
  tone="warning"
  ariaLabel="Temperature"
  [(ngModel)]="temperature"
/>`,rangePrice:`<brightrail-slider
  [min]="0"
  [max]="1000"
  [step]="50"
  [showValue]="true"
  tone="neutral"
  ariaLabel="Max price"
  [(ngModel)]="maxPrice"
/>`,formNgModel:`<brightrail-slider
  [min]="0"
  [max]="100"
  [step]="1"
  [showValue]="true"
  ariaLabel="Volume"
  [(ngModel)]="volume"
/>`,formReactive:`<brightrail-slider
  [min]="0"
  [max]="100"
  [step]="1"
  [showValue]="true"
  ariaLabel="Brightness"
  [formControl]="brightnessControl"
/>`,formLabeledRow:`<div class="slider-row">
  <label for="volume-slider">Volume</label>
  <brightrail-slider
    [min]="0"
    [max]="100"
    [step]="1"
    [showValue]="true"
    ariaLabel="Volume"
    [(ngModel)]="volume"
  />
</div>`,futuristicGlass:`<div class="ff-future-shell ff-future-shell--glass">
  <brightrail-slider [min]="0" [max]="100" [step]="1" [showValue]="true" tone="primary" ariaLabel="Glass output" />
</div>`,futuristicNeon:`<div class="ff-future-shell ff-future-shell--neon">
  <brightrail-slider [min]="0" [max]="100" [step]="1" [showValue]="true" tone="primary" ariaLabel="Neon gain" />
</div>`,futuristicCyber:`<div class="ff-future-shell ff-future-shell--cyber">
  <div class="ff-future-cyber-frame">
    <brightrail-slider [min]="0" [max]="100" [step]="5" [showValue]="true" tone="danger" ariaLabel="Cyber throttle" />
  </div>
</div>`,futuristicHolo:`<div class="ff-future-shell ff-future-shell--holo">
  <brightrail-slider [min]="0" [max]="100" [step]="1" [showValue]="true" tone="success" ariaLabel="Holo blend" />
</div>`};var f=`<brightrail-slider
  [min]="0"
  [max]="100"
  [step]="1"
  [showValue]="true"
  tone="primary"
  size="md"
  ariaLabel="Volume"
  [(ngModel)]="volume"
/>

<brightrail-slider
  [min]="16"
  [max]="30"
  [step]="1"
  [showValue]="true"
  tone="warning"
  ariaLabel="Temperature"
  (valueChange)="onTemperatureChange($event)"
/>

<brightrail-slider
  [min]="0"
  [max]="100"
  [disabled]="true"
  [showValue]="true"
  ariaLabel="Disabled slider"
/>`;var m=class s{s=b;static \u0275fac=function(o){return new(o||s)};static \u0275cmp=p({type:s,selectors:[["app-slider-variation-catalog"]],decls:100,vars:95,consts:[[1,"slvc-block"],[1,"slvc-block__h"],[1,"slvc-grid"],["label","Default",3,"snippet"],["ariaLabel","Default",3,"min","max","step"],["label","With value",3,"snippet"],["ariaLabel","Volume",3,"min","max","step","showValue"],["label","Custom range",3,"snippet"],["ariaLabel","Brightness",3,"min","max","step","showValue"],["label","Fine step",3,"snippet"],["ariaLabel","Opacity",3,"min","max","step","showValue"],[1,"slvc-grid","slvc-grid--wide"],["label","Primary",3,"snippet"],["tone","primary","ariaLabel","Primary",3,"showValue"],["label","Success",3,"snippet"],["tone","success","ariaLabel","Success",3,"showValue"],["label","Warning",3,"snippet"],["tone","warning","ariaLabel","Warning",3,"showValue"],["label","Danger",3,"snippet"],["tone","danger","ariaLabel","Danger",3,"showValue"],["label","Neutral",3,"snippet"],["tone","neutral","ariaLabel","Neutral",3,"showValue"],[1,"slvc-block__hint"],[1,"slvc-grid","slvc-grid--sizes"],["label","Small",3,"snippet"],["size","sm","ariaLabel","Small",3,"showValue"],["label","Medium",3,"snippet"],["size","md","ariaLabel","Medium",3,"showValue"],["label","Large",3,"snippet"],["size","lg","ariaLabel","Large",3,"showValue"],["ariaLabel","Default",3,"showValue"],["label","Disabled",3,"snippet"],["ariaLabel","Disabled",3,"disabled","showValue"],[1,"slvc-stack"],["label","Volume (0\u2013100)",3,"snippet"],["label","Completion %",3,"snippet"],["tone","primary","ariaLabel","Completion",3,"min","max","step","showValue"],["label","Temperature",3,"snippet"],["tone","warning","ariaLabel","Temperature",3,"min","max","step","showValue"],["label","Max price",3,"snippet"],["tone","neutral","ariaLabel","Max price",3,"min","max","step","showValue"],["label","ngModel binding",3,"snippet"],["label","Reactive form",3,"snippet"],["label","Labeled row",3,"snippet"],[1,"slco-row"],[1,"ff-future-grid"],["label","Glass output",3,"snippet"],[1,"ff-future-shell","ff-future-shell--glass"],["aria-hidden","true",1,"ff-future-shell__label"],["tone","primary","ariaLabel","Glass output",3,"min","max","step","showValue"],["label","Neon gain",3,"snippet"],[1,"ff-future-shell","ff-future-shell--neon"],["tone","primary","ariaLabel","Neon gain",3,"min","max","step","showValue"],["label","Cyber throttle",3,"snippet"],[1,"ff-future-shell","ff-future-shell--cyber"],[1,"ff-future-cyber-frame"],["aria-hidden","true",1,"ff-future-cyber-corner","ff-future-cyber-corner--tl"],["aria-hidden","true",1,"ff-future-cyber-corner","ff-future-cyber-corner--tr"],["aria-hidden","true",1,"ff-future-cyber-corner","ff-future-cyber-corner--bl"],["aria-hidden","true",1,"ff-future-cyber-corner","ff-future-cyber-corner--br"],["tone","danger","ariaLabel","Cyber throttle",3,"min","max","step","showValue"],["label","Holo blend",3,"snippet"],[1,"ff-future-shell","ff-future-shell--holo"],["tone","success","ariaLabel","Holo blend",3,"min","max","step","showValue"]],template:function(o,n){o&1&&(a(0,"section",0)(1,"h2",1),r(2,"1. Core slider types"),i(),a(3,"div",2)(4,"app-catalog-variation-tile",3),l(5,"brightrail-slider",4),i(),a(6,"app-catalog-variation-tile",5),l(7,"brightrail-slider",6),i(),a(8,"app-catalog-variation-tile",7),l(9,"brightrail-slider",8),i(),a(10,"app-catalog-variation-tile",9),l(11,"brightrail-slider",10),i()()(),a(12,"section",0)(13,"h2",1),r(14,"2. Tones"),i(),a(15,"div",11)(16,"app-catalog-variation-tile",12),l(17,"brightrail-slider",13),i(),a(18,"app-catalog-variation-tile",14),l(19,"brightrail-slider",15),i(),a(20,"app-catalog-variation-tile",16),l(21,"brightrail-slider",17),i(),a(22,"app-catalog-variation-tile",18),l(23,"brightrail-slider",19),i(),a(24,"app-catalog-variation-tile",20),l(25,"brightrail-slider",21),i()()(),a(26,"section",0)(27,"h2",1),r(28,"3. Sizes"),i(),a(29,"p",22),r(30,"sm \xB7 md (default) \xB7 lg"),i(),a(31,"div",23)(32,"app-catalog-variation-tile",24),l(33,"brightrail-slider",25),i(),a(34,"app-catalog-variation-tile",26),l(35,"brightrail-slider",27),i(),a(36,"app-catalog-variation-tile",28),l(37,"brightrail-slider",29),i()()(),a(38,"section",0)(39,"h2",1),r(40,"4. States"),i(),a(41,"div",2)(42,"app-catalog-variation-tile",3),l(43,"brightrail-slider",30),i(),a(44,"app-catalog-variation-tile",31),l(45,"brightrail-slider",32),i()()(),a(46,"section",0)(47,"h2",1),r(48,"5. Range configurations"),i(),a(49,"div",33)(50,"app-catalog-variation-tile",34),l(51,"brightrail-slider",6),i(),a(52,"app-catalog-variation-tile",35),l(53,"brightrail-slider",36),i(),a(54,"app-catalog-variation-tile",37),l(55,"brightrail-slider",38),i(),a(56,"app-catalog-variation-tile",39),l(57,"brightrail-slider",40),i()()(),a(58,"section",0)(59,"h2",1),r(60,"6. Form integration"),i(),a(61,"div",33)(62,"app-catalog-variation-tile",41),l(63,"brightrail-slider",6),i(),a(64,"app-catalog-variation-tile",42),l(65,"brightrail-slider",8),i(),a(66,"app-catalog-variation-tile",43)(67,"div",44)(68,"label"),r(69,"Volume"),i(),l(70,"brightrail-slider",6),i()()()(),a(71,"section",0)(72,"h2",1),r(73,"7. Futuristic slider designs"),i(),a(74,"div",45)(75,"app-catalog-variation-tile",46)(76,"div",47)(77,"span",48),r(78,"Glass"),i(),l(79,"brightrail-slider",49),i()(),a(80,"app-catalog-variation-tile",50)(81,"div",51)(82,"span",48),r(83,"Neon"),i(),l(84,"brightrail-slider",52),i()(),a(85,"app-catalog-variation-tile",53)(86,"div",54)(87,"span",48),r(88,"Cyber"),i(),a(89,"div",55),l(90,"span",56)(91,"span",57)(92,"span",58)(93,"span",59)(94,"brightrail-slider",60),i()()(),a(95,"app-catalog-variation-tile",61)(96,"div",62)(97,"span",48),r(98,"Holo"),i(),l(99,"brightrail-slider",63),i()()()()),o&2&&(e(4),t("snippet",n.s.coreDefault),e(),t("min",0)("max",100)("step",1),e(),t("snippet",n.s.coreWithValue),e(),t("min",0)("max",100)("step",1)("showValue",!0),e(),t("snippet",n.s.coreCustomRange),e(),t("min",10)("max",90)("step",5)("showValue",!0),e(),t("snippet",n.s.coreFineStep),e(),t("min",0)("max",1)("step",.1)("showValue",!0),e(5),t("snippet",n.s.tonePrimary),e(),t("showValue",!0),e(),t("snippet",n.s.toneSuccess),e(),t("showValue",!0),e(),t("snippet",n.s.toneWarning),e(),t("showValue",!0),e(),t("snippet",n.s.toneDanger),e(),t("showValue",!0),e(),t("snippet",n.s.toneNeutral),e(),t("showValue",!0),e(7),t("snippet",n.s.sizeSm),e(),t("showValue",!0),e(),t("snippet",n.s.sizeMd),e(),t("showValue",!0),e(),t("snippet",n.s.sizeLg),e(),t("showValue",!0),e(5),t("snippet",n.s.stateDefault),e(),t("showValue",!0),e(),t("snippet",n.s.stateDisabled),e(),t("disabled",!0)("showValue",!0),e(5),t("snippet",n.s.rangeVolume),e(),t("min",0)("max",100)("step",1)("showValue",!0),e(),t("snippet",n.s.rangePercentage),e(),t("min",0)("max",100)("step",5)("showValue",!0),e(),t("snippet",n.s.rangeTemperature),e(),t("min",16)("max",30)("step",1)("showValue",!0),e(),t("snippet",n.s.rangePrice),e(),t("min",0)("max",1e3)("step",50)("showValue",!0),e(5),t("snippet",n.s.formNgModel),e(),t("min",0)("max",100)("step",1)("showValue",!0),e(),t("snippet",n.s.formReactive),e(),t("min",0)("max",100)("step",1)("showValue",!0),e(),t("snippet",n.s.formLabeledRow),e(4),t("min",0)("max",100)("step",1)("showValue",!0),e(5),t("snippet",n.s.futuristicGlass),e(4),t("min",0)("max",100)("step",1)("showValue",!0),e(),t("snippet",n.s.futuristicNeon),e(4),t("min",0)("max",100)("step",1)("showValue",!0),e(),t("snippet",n.s.futuristicCyber),e(9),t("min",0)("max",100)("step",5)("showValue",!0),e(),t("snippet",n.s.futuristicHolo),e(4),t("min",0)("max",100)("step",1)("showValue",!0))},dependencies:[g,h],styles:["[_nghost-%COMP%]{display:block}.slvc-grid[_ngcontent-%COMP%]{display:grid;gap:.65rem;grid-template-columns:repeat(auto-fill,minmax(11.5rem,1fr))}.slvc-grid--wide[_ngcontent-%COMP%]{grid-template-columns:repeat(auto-fill,minmax(10rem,1fr))}.slvc-grid--sizes[_ngcontent-%COMP%]{grid-template-columns:repeat(auto-fill,minmax(8.5rem,1fr))}.slvc-stack[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.75rem}.slvc-block[_ngcontent-%COMP%]{margin-bottom:1.35rem}.slvc-block__h[_ngcontent-%COMP%]{margin:0 0 .5rem;font-size:.95rem;font-weight:700}.slvc-block__hint[_ngcontent-%COMP%]{margin:0 0 .5rem;font-size:.8125rem;color:var(--ff-muted, #64748b)}.slco-row[_ngcontent-%COMP%]{display:grid;grid-template-columns:5rem 1fr;align-items:center;gap:.75rem;width:100%;font-size:.875rem}"],changeDetection:0})};var v=class s{htmlExamples=f;static \u0275fac=function(o){return new(o||s)};static \u0275cmp=p({type:s,selectors:[["app-slider-catalog-overview"]],decls:31,vars:1,consts:[[1,"slco"],[1,"slco-hero"],[1,"slco-hero__eyebrow"],[1,"slco-hero__links"],["routerLink","..",1,"slco-link"],["routerLink","/variations",1,"slco-link"],["aria-labelledby","slco-html-examples",1,"slco-code-block"],["id","slco-html-examples"],[1,"slco-code-block__hint"],[1,"slco-pre"]],template:function(o,n){o&1&&(a(0,"div",0)(1,"header",1)(2,"p",2),r(3,"Brightrail \xB7 Slider \xB7 Variation catalog"),i(),a(4,"h1"),r(5,"Slider types & variations"),i(),a(6,"p"),r(7," Reference catalog for slider tones, sizes, states, range configurations, and form integration. Click any tile for "),a(8,"strong"),r(9,"View code"),i(),r(10,", then "),a(11,"strong"),r(12,"Copy code"),i(),r(13," to paste into your app (import from "),a(14,"code"),r(15,"brightrail"),i(),r(16,"). "),i(),a(17,"p",3)(18,"a",4),r(19,"\u2190 Slider playground (live settings)"),i(),a(20,"a",5),r(21,"All variation catalogs"),i()()(),l(22,"app-slider-variation-catalog"),a(23,"section",6)(24,"h2",7),r(25,"Slider HTML examples"),i(),a(26,"p",8),r(27,"Typical markup for a volume slider, custom range, and disabled control."),i(),a(28,"pre",9)(29,"code"),r(30),i()()()()),o&2&&(e(30),u(n.htmlExamples))},dependencies:[c,m],styles:["[_nghost-%COMP%]{flex:1 1 auto;min-height:0;overflow:auto}.slco[_ngcontent-%COMP%]{padding:1rem 1.25rem 1.5rem}.slco-hero__eyebrow[_ngcontent-%COMP%]{margin:0 0 .25rem;font-size:.75rem;font-weight:600;letter-spacing:.04em;text-transform:uppercase;color:var(--ff-muted, #64748b)}.slco-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0;font-size:1.5rem}.slco-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:.35rem 0 .5rem;color:var(--ff-muted, #64748b)}.slco-hero__links[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:.75rem 1.25rem}.slco-link[_ngcontent-%COMP%]{color:var(--ff-accent, #2563eb);text-decoration:none;font-weight:600}.slco-code-block[_ngcontent-%COMP%]{margin:1.5rem 0 0;padding-top:1rem;border-top:1px solid var(--ff-border, #e2e8f0)}.slco-code-block[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.1rem;margin:0 0 .35rem}.slco-code-block__hint[_ngcontent-%COMP%]{margin:0 0 .65rem;font-size:.8125rem;color:var(--ff-muted, #64748b)}.slco-pre[_ngcontent-%COMP%]{margin:0;padding:.85rem;border-radius:.5rem;background:var(--ff-surface-muted, #f1f3f4);border:1px solid var(--ff-border, #e2e8f0);overflow:auto;font-size:.8rem}"],changeDetection:0})};export{v as SliderCatalogOverviewComponent};
