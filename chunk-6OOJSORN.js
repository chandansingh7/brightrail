import{a as v}from"./chunk-FJ7PM77H.js";import"./chunk-63ZAJDYR.js";import{a as O}from"./chunk-Q5SSWK6K.js";import"./chunk-DZ3SR23X.js";import"./chunk-XVSO74ZO.js";import"./chunk-TEOKHIN3.js";import{e as y}from"./chunk-FBGATJ5M.js";import{d as f,g as M,p as _}from"./chunk-TX2IANRT.js";import"./chunk-3QMANAY7.js";import"./chunk-573ITFZ2.js";import"./chunk-3SQNCDXW.js";import{Ca as m,Va as a,Wa as t,Xa as i,Ya as h,sb as l,ta as n,tb as u,wb as r,xb as d,yb as p}from"./chunk-M22WAZLT.js";var S={coreDefault:`<brightrail-combobox
  [options]="countryOptions"
  placeholder="Search or select\u2026"
  [(ngModel)]="countryCode"
/>`,coreWithValue:`<brightrail-combobox
  [options]="countryOptions"
  placeholder="Search or select\u2026"
  [(ngModel)]="countryCode"
/>`,coreCompact:`<brightrail-combobox
  [options]="statusOptions"
  placeholder="Status"
  [fullWidth]="false"
  [(ngModel)]="statusCode"
/>`,filterableOn:`<brightrail-combobox
  [options]="assigneeOptions"
  [filterable]="true"
  placeholder="Search assignees\u2026"
  [(ngModel)]="assigneeId"
/>`,filterableOff:`<brightrail-combobox
  [options]="priorityOptions"
  [filterable]="false"
  placeholder="Priority"
  [(ngModel)]="priorityCode"
/>`,widthFull:`<brightrail-combobox
  [options]="regionOptions"
  [fullWidth]="true"
  placeholder="Select region"
  [(ngModel)]="regionCode"
/>`,widthInline:`<brightrail-combobox
  [options]="tagOptions"
  [fullWidth]="false"
  placeholder="Tag"
  [(ngModel)]="tagCode"
/>`,stateDisabled:`<brightrail-combobox
  [options]="countryOptions"
  [disabled]="true"
  placeholder="Search or select\u2026"
  [(ngModel)]="countryCode"
/>`,stateDisabledOption:`<brightrail-combobox
  [options]="planOptions"
  placeholder="Select plan"
  [(ngModel)]="planCode"
/>`,formReactive:`<brightrail-combobox
  [options]="departmentOptions"
  placeholder="Department"
  [formControl]="departmentControl"
/>`,formTemplate:`<form>
  <brightrail-combobox
    [options]="roleOptions"
    placeholder="Role"
    name="role"
    [(ngModel)]="roleCode"
    required
  />
</form>`,enterpriseMultiField:`<div class="cbco-form-row">
  <brightrail-combobox
    [options]="countryOptions"
    placeholder="Country"
    [(ngModel)]="countryCode"
  />
  <brightrail-combobox
    [options]="cityOptions"
    placeholder="City"
    [(ngModel)]="cityCode"
  />
</div>`,futuristicGlass:`<div class="ff-future-shell ff-future-shell--glass">
  <brightrail-combobox
    [options]="regionOptions"
    placeholder="Select region"
    [(ngModel)]="regionCode"
  />
</div>`,futuristicNeon:`<div class="ff-future-shell ff-future-shell--neon">
  <brightrail-combobox
    [options]="assigneeOptions"
    [filterable]="true"
    placeholder="Search assignees\u2026"
    [(ngModel)]="assigneeId"
  />
</div>`,futuristicCyber:`<div class="ff-future-shell ff-future-shell--cyber">
  <brightrail-combobox
    [options]="priorityOptions"
    placeholder="Priority"
    [(ngModel)]="priorityCode"
  />
</div>`,futuristicHolo:`<div class="ff-future-shell ff-future-shell--holo">
  <brightrail-combobox
    [options]="tagOptions"
    placeholder="Tag"
    [fullWidth]="false"
    [(ngModel)]="tagCode"
  />
</div>`};var w=`<brightrail-combobox
  [options]="[
    { value: 'us', label: 'United States' },
    { value: 'ca', label: 'Canada' },
    { value: 'mx', label: 'Mexico', disabled: true }
  ]"
  placeholder="Search or select\u2026"
  [filterable]="true"
  [fullWidth]="true"
  [(ngModel)]="countryCode"
  (valueChange)="onCountryChange($event)"
/>

<brightrail-combobox
  [options]="priorityOptions"
  [filterable]="false"
  [disabled]="isReadonly"
  placeholder="Priority"
  [(ngModel)]="priority"
/>`;var c=class b{s=S;ngModelStandalone={standalone:!0};countryOptions=[{value:"us",label:"United States"},{value:"ca",label:"Canada"},{value:"mx",label:"Mexico",disabled:!0}];assigneeOptions=[{value:"alex",label:"Alex Morgan"},{value:"jordan",label:"Jordan Lee"}];priorityOptions=[{value:"p1",label:"P1 \u2014 Critical"},{value:"p2",label:"P2 \u2014 High"},{value:"p3",label:"P3 \u2014 Normal"}];tagOptions=[{value:"bug",label:"Bug"},{value:"feat",label:"Feature"}];countryCode="us";assigneeId="alex";priorityCode="p2";tagCode="bug";regionCode="us";planCode="p1";cityCode="alex";static \u0275fac=function(g){return new(g||b)};static \u0275cmp=m({type:b,selectors:[["app-combobox-variation-catalog"]],decls:89,vars:75,consts:[[1,"cbvc-block"],[1,"cbvc-block__h"],[1,"cbvc-grid"],["label","Default",3,"snippet"],[1,"cbvc-tile-body"],["placeholder","Search or select\u2026",3,"ngModelChange","ngModelOptions","options","ngModel"],["label","With value",3,"snippet"],["label","Compact inline",3,"snippet"],["placeholder","Status",3,"ngModelChange","ngModelOptions","options","fullWidth","ngModel"],["label","Filterable",3,"snippet"],["placeholder","Search assignees\u2026",3,"ngModelChange","ngModelOptions","options","filterable","ngModel"],["label","Not filterable",3,"snippet"],["placeholder","Priority",3,"ngModelChange","ngModelOptions","options","filterable","ngModel"],["label","Full width",3,"snippet"],["placeholder","Select region",3,"ngModelChange","ngModelOptions","options","fullWidth","ngModel"],["label","Inline width",3,"snippet"],["placeholder","Tag",3,"ngModelChange","ngModelOptions","options","fullWidth","ngModel"],["label","Disabled control",3,"snippet"],["placeholder","Search or select\u2026",3,"ngModelChange","ngModelOptions","options","disabled","ngModel"],["label","Disabled option",3,"snippet"],["placeholder","Select plan",3,"ngModelChange","ngModelOptions","options","ngModel"],["label","Template-driven",3,"snippet"],["placeholder","Role",3,"ngModelChange","ngModelOptions","options","ngModel"],["label","Reactive (snippet)",3,"snippet"],["placeholder","Department",3,"ngModelChange","ngModelOptions","options","ngModel"],["label","Country + city",3,"snippet"],[1,"cbco-form-row"],["placeholder","Country",3,"ngModelChange","ngModelOptions","options","ngModel"],["placeholder","City",3,"ngModelChange","ngModelOptions","options","ngModel"],[1,"ff-future-grid"],["label","Glass shell",3,"snippet"],[1,"ff-future-shell","ff-future-shell--glass"],["aria-hidden","true",1,"ff-future-shell__label"],["placeholder","Select region",3,"ngModelChange","ngModelOptions","options","ngModel"],["label","Neon filter",3,"snippet"],[1,"ff-future-shell","ff-future-shell--neon"],["label","Cyber grid",3,"snippet"],[1,"ff-future-shell","ff-future-shell--cyber"],["placeholder","Priority",3,"ngModelChange","ngModelOptions","options","ngModel"],["label","Holo chip",3,"snippet"],[1,"ff-future-shell","ff-future-shell--holo"]],template:function(g,e){g&1&&(t(0,"section",0)(1,"h2",1),l(2,"1. Core combobox"),i(),t(3,"div",2)(4,"app-catalog-variation-tile",3)(5,"div",4)(6,"brightrail-combobox",5),p("ngModelChange",function(o){return d(e.countryCode,o)||(e.countryCode=o),o}),i()()(),t(7,"app-catalog-variation-tile",6)(8,"div",4)(9,"brightrail-combobox",5),p("ngModelChange",function(o){return d(e.countryCode,o)||(e.countryCode=o),o}),i()()(),t(10,"app-catalog-variation-tile",7)(11,"div",4)(12,"brightrail-combobox",8),p("ngModelChange",function(o){return d(e.tagCode,o)||(e.tagCode=o),o}),i()()()()(),t(13,"section",0)(14,"h2",1),l(15,"2. Filterable behavior"),i(),t(16,"div",2)(17,"app-catalog-variation-tile",9)(18,"div",4)(19,"brightrail-combobox",10),p("ngModelChange",function(o){return d(e.assigneeId,o)||(e.assigneeId=o),o}),i()()(),t(20,"app-catalog-variation-tile",11)(21,"div",4)(22,"brightrail-combobox",12),p("ngModelChange",function(o){return d(e.priorityCode,o)||(e.priorityCode=o),o}),i()()()()(),t(23,"section",0)(24,"h2",1),l(25,"3. Width modes"),i(),t(26,"div",2)(27,"app-catalog-variation-tile",13)(28,"div",4)(29,"brightrail-combobox",14),p("ngModelChange",function(o){return d(e.regionCode,o)||(e.regionCode=o),o}),i()()(),t(30,"app-catalog-variation-tile",15)(31,"div",4)(32,"brightrail-combobox",16),p("ngModelChange",function(o){return d(e.tagCode,o)||(e.tagCode=o),o}),i()()()()(),t(33,"section",0)(34,"h2",1),l(35,"4. Disabled states"),i(),t(36,"div",2)(37,"app-catalog-variation-tile",17)(38,"div",4)(39,"brightrail-combobox",18),p("ngModelChange",function(o){return d(e.countryCode,o)||(e.countryCode=o),o}),i()()(),t(40,"app-catalog-variation-tile",19)(41,"div",4)(42,"brightrail-combobox",20),p("ngModelChange",function(o){return d(e.planCode,o)||(e.planCode=o),o}),i()()()()(),t(43,"section",0)(44,"h2",1),l(45,"5. Form integration"),i(),t(46,"div",2)(47,"app-catalog-variation-tile",21)(48,"div",4)(49,"brightrail-combobox",22),p("ngModelChange",function(o){return d(e.assigneeId,o)||(e.assigneeId=o),o}),i()()(),t(50,"app-catalog-variation-tile",23)(51,"div",4)(52,"brightrail-combobox",24),p("ngModelChange",function(o){return d(e.priorityCode,o)||(e.priorityCode=o),o}),i()()()()(),t(53,"section",0)(54,"h2",1),l(55,"6. Enterprise patterns"),i(),t(56,"div",2)(57,"app-catalog-variation-tile",25)(58,"div",26)(59,"brightrail-combobox",27),p("ngModelChange",function(o){return d(e.countryCode,o)||(e.countryCode=o),o}),i(),t(60,"brightrail-combobox",28),p("ngModelChange",function(o){return d(e.cityCode,o)||(e.cityCode=o),o}),i()()()()(),t(61,"section",0)(62,"h2",1),l(63,"7. Futuristic combobox designs"),i(),t(64,"div",29)(65,"app-catalog-variation-tile",30)(66,"div",31)(67,"span",32),l(68,"Glass"),i(),t(69,"div",4)(70,"brightrail-combobox",33),p("ngModelChange",function(o){return d(e.regionCode,o)||(e.regionCode=o),o}),i()()()(),t(71,"app-catalog-variation-tile",34)(72,"div",35)(73,"span",32),l(74,"Neon"),i(),t(75,"div",4)(76,"brightrail-combobox",10),p("ngModelChange",function(o){return d(e.assigneeId,o)||(e.assigneeId=o),o}),i()()()(),t(77,"app-catalog-variation-tile",36)(78,"div",37)(79,"span",32),l(80,"Cyber"),i(),t(81,"div",4)(82,"brightrail-combobox",38),p("ngModelChange",function(o){return d(e.priorityCode,o)||(e.priorityCode=o),o}),i()()()(),t(83,"app-catalog-variation-tile",39)(84,"div",40)(85,"span",32),l(86,"Holo"),i(),t(87,"div",4)(88,"brightrail-combobox",16),p("ngModelChange",function(o){return d(e.tagCode,o)||(e.tagCode=o),o}),i()()()()()()),g&2&&(n(4),a("snippet",e.s.coreDefault),n(2),a("ngModelOptions",e.ngModelStandalone)("options",e.countryOptions),r("ngModel",e.countryCode),n(),a("snippet",e.s.coreWithValue),n(2),a("ngModelOptions",e.ngModelStandalone)("options",e.countryOptions),r("ngModel",e.countryCode),n(),a("snippet",e.s.coreCompact),n(2),a("ngModelOptions",e.ngModelStandalone)("options",e.tagOptions)("fullWidth",!1),r("ngModel",e.tagCode),n(5),a("snippet",e.s.filterableOn),n(2),a("ngModelOptions",e.ngModelStandalone)("options",e.assigneeOptions)("filterable",!0),r("ngModel",e.assigneeId),n(),a("snippet",e.s.filterableOff),n(2),a("ngModelOptions",e.ngModelStandalone)("options",e.priorityOptions)("filterable",!1),r("ngModel",e.priorityCode),n(5),a("snippet",e.s.widthFull),n(2),a("ngModelOptions",e.ngModelStandalone)("options",e.countryOptions)("fullWidth",!0),r("ngModel",e.regionCode),n(),a("snippet",e.s.widthInline),n(2),a("ngModelOptions",e.ngModelStandalone)("options",e.tagOptions)("fullWidth",!1),r("ngModel",e.tagCode),n(5),a("snippet",e.s.stateDisabled),n(2),a("ngModelOptions",e.ngModelStandalone)("options",e.countryOptions)("disabled",!0),r("ngModel",e.countryCode),n(),a("snippet",e.s.stateDisabledOption),n(2),a("ngModelOptions",e.ngModelStandalone)("options",e.countryOptions),r("ngModel",e.planCode),n(5),a("snippet",e.s.formTemplate),n(2),a("ngModelOptions",e.ngModelStandalone)("options",e.assigneeOptions),r("ngModel",e.assigneeId),n(),a("snippet",e.s.formReactive),n(2),a("ngModelOptions",e.ngModelStandalone)("options",e.priorityOptions),r("ngModel",e.priorityCode),n(5),a("snippet",e.s.enterpriseMultiField),n(2),a("ngModelOptions",e.ngModelStandalone)("options",e.countryOptions),r("ngModel",e.countryCode),n(),a("ngModelOptions",e.ngModelStandalone)("options",e.assigneeOptions),r("ngModel",e.cityCode),n(5),a("snippet",e.s.futuristicGlass),n(5),a("ngModelOptions",e.ngModelStandalone)("options",e.countryOptions),r("ngModel",e.regionCode),n(),a("snippet",e.s.futuristicNeon),n(5),a("ngModelOptions",e.ngModelStandalone)("options",e.assigneeOptions)("filterable",!0),r("ngModel",e.assigneeId),n(),a("snippet",e.s.futuristicCyber),n(5),a("ngModelOptions",e.ngModelStandalone)("options",e.priorityOptions),r("ngModel",e.priorityCode),n(),a("snippet",e.s.futuristicHolo),n(5),a("ngModelOptions",e.ngModelStandalone)("options",e.tagOptions)("fullWidth",!1),r("ngModel",e.tagCode))},dependencies:[_,f,M,O,v],styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]   .ff-future-shell[_ngcontent-%COMP%]{width:100%;flex-direction:column;align-items:stretch}.cbvc-grid[_ngcontent-%COMP%]{display:grid;gap:.65rem;grid-template-columns:repeat(auto-fill,minmax(13rem,1fr))}.cbvc-block[_ngcontent-%COMP%]{margin-bottom:1.35rem}.cbvc-block__h[_ngcontent-%COMP%]{margin:0 0 .5rem;font-size:.95rem;font-weight:700}.cbvc-block__hint[_ngcontent-%COMP%]{margin:0 0 .5rem;font-size:.8125rem;color:var(--ff-muted, #64748b)}.cbvc-tile-body[_ngcontent-%COMP%]{width:100%;max-width:16rem}.cbco-form-row[_ngcontent-%COMP%]{display:grid;gap:.65rem;width:100%;max-width:16rem}"],changeDetection:0})};var W=class b{htmlExamples=w;static \u0275fac=function(g){return new(g||b)};static \u0275cmp=m({type:b,selectors:[["app-combobox-catalog-overview"]],decls:31,vars:1,consts:[[1,"cbco"],[1,"cbco-hero"],[1,"cbco-hero__eyebrow"],[1,"cbco-hero__links"],["routerLink","..",1,"cbco-link"],["routerLink","/variations",1,"cbco-link"],["aria-labelledby","cbco-html-examples",1,"cbco-code-block"],["id","cbco-html-examples"],[1,"cbco-code-block__hint"],[1,"cbco-pre"]],template:function(g,e){g&1&&(t(0,"div",0)(1,"header",1)(2,"p",2),l(3,"Brightrail \xB7 Combobox \xB7 Variation catalog"),i(),t(4,"h1"),l(5,"Combobox types & variations"),i(),t(6,"p"),l(7," Reference catalog for filterable selects, width modes, disabled states, and form wiring. Click any tile for "),t(8,"strong"),l(9,"View code"),i(),l(10,", then "),t(11,"strong"),l(12,"Copy code"),i(),l(13," (import from "),t(14,"code"),l(15,"brightrail"),i(),l(16,"). "),i(),t(17,"p",3)(18,"a",4),l(19,"\u2190 Combobox playground (live settings)"),i(),t(20,"a",5),l(21,"All variation catalogs"),i()()(),h(22,"app-combobox-variation-catalog"),t(23,"section",6)(24,"h2",7),l(25,"Combobox HTML examples"),i(),t(26,"p",8),l(27,"Filterable country picker and static priority list."),i(),t(28,"pre",9)(29,"code"),l(30),i()()()()),g&2&&(n(30),u(e.htmlExamples))},dependencies:[y,c],styles:["[_nghost-%COMP%]{flex:1 1 auto;min-height:0;overflow:auto}.cbco[_ngcontent-%COMP%]{padding:1rem 1.25rem 1.5rem}.cbco-hero__eyebrow[_ngcontent-%COMP%]{margin:0 0 .25rem;font-size:.75rem;font-weight:600;letter-spacing:.04em;text-transform:uppercase;color:var(--ff-muted, #64748b)}.cbco-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0;font-size:1.5rem}.cbco-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:.35rem 0 .5rem;color:var(--ff-muted, #64748b)}.cbco-hero__links[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:.75rem 1.25rem}.cbco-link[_ngcontent-%COMP%]{color:var(--ff-accent, #2563eb);text-decoration:none;font-weight:600}.cbco-code-block[_ngcontent-%COMP%]{margin:1.5rem 0 0;padding-top:1rem;border-top:1px solid var(--ff-border, #e2e8f0)}.cbco-code-block[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.1rem;margin:0 0 .35rem}.cbco-code-block__hint[_ngcontent-%COMP%]{margin:0 0 .65rem;font-size:.8125rem;color:var(--ff-muted, #64748b)}.cbco-pre[_ngcontent-%COMP%]{margin:0;padding:.85rem;border-radius:.5rem;background:var(--ff-surface-muted, #f1f3f4);border:1px solid var(--ff-border, #e2e8f0);overflow:auto;font-size:.8rem}"],changeDetection:0})};export{W as ComboboxCatalogOverviewComponent};
