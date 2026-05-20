import{a as L}from"./chunk-FVWPAVEK.js";import{d as x,g as P,p as W}from"./chunk-2QFTQFU4.js";import{a as E}from"./chunk-YDULXL76.js";import"./chunk-4C4FL2XM.js";import{e as v}from"./chunk-TU4FQAPV.js";import{$a as w,Ab as p,Bb as s,Fb as f,Ga as h,Hb as T,U as _,V as y,Wa as C,Xa as M,Ya as n,Za as i,_a as l,eb as V,ib as b,ua as t,vb as r,wb as S,zb as d}from"./chunk-K6TWHCOD.js";var F={appearanceFilled:`<brightrail-text-field
  appearance="filled"
  label="Label"
  placeholder="Placeholder"
  [(ngModel)]="value"
/>`,appearanceOutlined:`<brightrail-text-field
  appearance="outlined"
  label="Label"
  placeholder="Placeholder"
  [(ngModel)]="value"
/>`,appearanceUnderline:`<brightrail-text-field
  appearance="underline"
  label="Label"
  placeholder="Placeholder"
  [(ngModel)]="value"
/>`,labelTop:`<brightrail-text-field
  appearance="outlined"
  labelPosition="top"
  label="Email"
  placeholder="you@company.com"
  [(ngModel)]="email"
/>`,labelInset:`<brightrail-text-field
  appearance="outlined"
  labelPosition="inset"
  label="Project name"
  placeholder=" "
  [(ngModel)]="projectName"
/>`,labelLeft:`<brightrail-text-field
  appearance="outlined"
  labelPosition="left"
  label="Amount"
  suffix="USD"
  suffixPosition="right"
  [(ngModel)]="amount"
/>`,labelRight:`<brightrail-text-field
  appearance="outlined"
  labelPosition="right"
  label="Notes"
  [(ngModel)]="notes"
/>`,labelNone:`<brightrail-text-field
  appearance="outlined"
  labelPosition="none"
  placeholder="Search\u2026"
  iconLeft="search"
  [(ngModel)]="query"
/>`,sizeXs:'<brightrail-text-field appearance="outlined" size="xs" label="Extra small" [(ngModel)]="value" />',sizeSm:'<brightrail-text-field appearance="outlined" size="sm" label="Small" [(ngModel)]="value" />',sizeMd:'<brightrail-text-field appearance="outlined" size="md" label="Medium" [(ngModel)]="value" />',sizeLg:'<brightrail-text-field appearance="outlined" size="lg" label="Large" [(ngModel)]="value" />',sizeXl:'<brightrail-text-field appearance="outlined" size="xl" label="Extra large" [(ngModel)]="value" />',statusSuccess:`<brightrail-text-field
  appearance="outlined"
  label="Username"
  status="success"
  hint="Available"
  [(ngModel)]="username"
/>`,statusWarning:`<brightrail-text-field
  appearance="outlined"
  label="Phone"
  status="warning"
  [(ngModel)]="phone"
/>`,statusError:`<brightrail-text-field
  appearance="outlined"
  label="Email"
  status="error"
  [(ngModel)]="email"
/>`,statusInfo:`<brightrail-text-field
  appearance="outlined"
  label="Reference"
  status="info"
  [(ngModel)]="reference"
/>`,statusDisabled:`<brightrail-text-field
  appearance="outlined"
  label="Account ID"
  [disabled]="true"
  [(ngModel)]="accountId"
/>`,shapeDefault:'<brightrail-text-field appearance="outlined" shape="default" label="Rounded" [(ngModel)]="value" />',shapeSquare:'<brightrail-text-field appearance="outlined" shape="square" label="Square" [(ngModel)]="value" />',shapePill:'<brightrail-text-field appearance="outlined" shape="pill" label="Pill" [(ngModel)]="value" />',clearable:`<brightrail-text-field
  appearance="outlined"
  label="Search"
  iconLeft="search"
  [clearable]="true"
  [(ngModel)]="query"
/>`,password:`<brightrail-text-field
  appearance="outlined"
  label="Password"
  inputType="password"
  [showPasswordToggle]="true"
  [(ngModel)]="password"
/>`,iconLeft:`<brightrail-text-field
  appearance="outlined"
  label="Email"
  iconLeft="user"
  [(ngModel)]="email"
/>`,iconRight:`<brightrail-text-field
  appearance="outlined"
  label="Website"
  iconRight="info"
  [(ngModel)]="website"
/>`,iconsBoth:`<brightrail-text-field
  appearance="outlined"
  label="Amount"
  iconLeft="filter"
  suffix="kg"
  suffixPosition="right"
  [(ngModel)]="weight"
/>`,futuristicGlass:`<div class="ff-future-shell ff-future-shell--glass">
  <brightrail-text-field
    appearance="outlined"
    label="Command channel"
    placeholder="Transmit signal\u2026"
    [(ngModel)]="channel"
  />
</div>`,futuristicNeon:`<div class="ff-future-shell ff-future-shell--neon">
  <brightrail-text-field
    appearance="filled"
    label="Node ID"
    iconLeft="search"
    placeholder="Search cluster\u2026"
    [(ngModel)]="nodeId"
  />
</div>`,futuristicCyber:`<div class="ff-future-shell ff-future-shell--cyber">
  <brightrail-text-field
    appearance="outlined"
    label="Access key"
    inputType="password"
    [showPasswordToggle]="true"
    [(ngModel)]="accessKey"
  />
</div>`,futuristicHolo:`<div class="ff-future-shell ff-future-shell--holo">
  <brightrail-text-field
    appearance="underline"
    label="Beacon frequency"
    suffix="GHz"
    suffixPosition="right"
    [(ngModel)]="frequency"
  />
</div>`};var z=`<brightrail-text-field
  appearance="outlined"
  labelPosition="top"
  label="Work email"
  placeholder="you@company.com"
  status="success"
  hint="Looks good"
  iconLeft="user"
  [(ngModel)]="email"
/>

<brightrail-text-field
  appearance="filled"
  label="Password"
  inputType="password"
  [showPasswordToggle]="true"
  [clearable]="true"
  [(ngModel)]="password"
/>

<brightrail-text-field
  appearance="underline"
  labelPosition="inset"
  label="Project name"
  shape="pill"
  size="lg"
  [(ngModel)]="projectName"
/>`;var I=g=>({label:"XS",snippet:g,size:"xs"}),k=g=>({label:"Small",snippet:g,size:"sm"}),N=g=>({label:"Medium",snippet:g,size:"md"}),R=g=>({label:"Large",snippet:g,size:"lg"}),A=g=>({label:"XL",snippet:g,size:"xl"}),q=(g,c,u,e,o)=>[g,c,u,e,o],H=(g,c)=>c.size;function X(g,c){if(g&1){let u=V();i(0,"app-catalog-variation-tile",20)(1,"brightrail-text-field",62),s("ngModelChange",function(o){_(u);let a=b();return p(a.sizeValue,o)||(a.sizeValue=o),y(o)}),l()()}if(g&2){let u=c.$implicit,e=b();n("label",u.label)("snippet",u.snippet),t(),n("size",u.size)("label",u.label),d("ngModel",e.sizeValue)}}var m=class g{s=F;appearanceValue="Brightrail";labelDemoValue="";insetValue="Phoenix";leftLabelValue="120";rightLabelValue="";searchValue="";sizeValue="";successValue="jamie";warningValue="";errorValue="";infoValue="";disabledValue="AC-1042";shapeValue="";clearableValue="Quarterly report";passwordValue="";iconLeftValue="";iconRightValue="";iconsBothValue="42";futuristicGlassValue="";futuristicNeonValue="";futuristicCyberValue="";futuristicHoloValue="5.8";static \u0275fac=function(u){return new(u||g)};static \u0275cmp=h({type:g,selectors:[["app-text-field-variation-catalog"]],decls:92,vars:70,consts:[[1,"tfvc-block"],[1,"tfvc-block__h"],[1,"tfvc-grid","tfvc-grid--wide"],["label","Filled",3,"snippet"],["appearance","filled","label","Label","placeholder","Placeholder",3,"ngModelChange","ngModel"],["label","Outlined",3,"snippet"],["appearance","outlined","label","Label","placeholder","Placeholder",3,"ngModelChange","ngModel"],["label","Underline",3,"snippet"],["appearance","underline","label","Label","placeholder","Placeholder",3,"ngModelChange","ngModel"],["label","Top",3,"snippet"],["appearance","outlined","labelPosition","top","label","Email","placeholder","you@company.com",3,"ngModelChange","ngModel"],["label","Inset (on border)",3,"snippet"],["appearance","outlined","labelPosition","inset","label","Project name","placeholder"," ",3,"ngModelChange","ngModel"],["label","Left",3,"snippet"],["appearance","outlined","labelPosition","left","label","Amount","suffix","USD","suffixPosition","right",3,"ngModelChange","ngModel"],["label","Right",3,"snippet"],["appearance","outlined","labelPosition","right","label","Notes",3,"ngModelChange","ngModel"],["label","None",3,"snippet"],["appearance","outlined","labelPosition","none","placeholder","Search\u2026","iconLeft","search",3,"ngModelChange","ngModel"],[1,"tfvc-grid","tfvc-grid--sizes"],[3,"label","snippet"],["label","Success",3,"snippet"],["appearance","outlined","label","Username","status","success","hint","Available",3,"ngModelChange","ngModel"],["label","Warning",3,"snippet"],["appearance","outlined","label","Phone","status","warning",3,"ngModelChange","ngModel"],["label","Error",3,"snippet"],["appearance","outlined","label","Email","status","error",3,"ngModelChange","ngModel"],["label","Info",3,"snippet"],["appearance","outlined","label","Reference","status","info",3,"ngModelChange","ngModel"],["label","Disabled",3,"snippet"],["appearance","outlined","label","Account ID",3,"ngModelChange","disabled","ngModel"],[1,"tfvc-grid"],["label","Rounded (default)",3,"snippet"],["appearance","outlined","shape","default","label","Rounded",3,"ngModelChange","ngModel"],["label","Square",3,"snippet"],["appearance","outlined","shape","square","label","Square",3,"ngModelChange","ngModel"],["label","Pill",3,"snippet"],["appearance","outlined","shape","pill","label","Pill",3,"ngModelChange","ngModel"],["label","Clearable",3,"snippet"],["appearance","outlined","label","Search","iconLeft","search",3,"ngModelChange","clearable","ngModel"],["label","Password",3,"snippet"],["appearance","outlined","label","Password","inputType","password",3,"ngModelChange","showPasswordToggle","ngModel"],["label","Icon left",3,"snippet"],["appearance","outlined","label","Email","iconLeft","user",3,"ngModelChange","ngModel"],["label","Icon right",3,"snippet"],["appearance","outlined","label","Website","iconRight","info",3,"ngModelChange","ngModel"],["label","Icons + suffix",3,"snippet"],["appearance","outlined","label","Amount","iconLeft","filter","suffix","kg","suffixPosition","right",3,"ngModelChange","ngModel"],[1,"ff-future-grid"],["label","Glass shell",3,"snippet"],[1,"ff-future-shell","ff-future-shell--glass"],["aria-hidden","true",1,"ff-future-shell__label"],["appearance","outlined","label","Command channel","placeholder","Transmit signal\u2026",3,"ngModelChange","ngModel"],["label","Neon search",3,"snippet"],[1,"ff-future-shell","ff-future-shell--neon"],["appearance","filled","label","Node ID","iconLeft","search","placeholder","Search cluster\u2026",3,"ngModelChange","ngModel"],["label","Cyber key",3,"snippet"],[1,"ff-future-shell","ff-future-shell--cyber"],["appearance","outlined","label","Access key","inputType","password",3,"ngModelChange","showPasswordToggle","ngModel"],["label","Holo frequency",3,"snippet"],[1,"ff-future-shell","ff-future-shell--holo"],["appearance","underline","label","Beacon frequency","suffix","GHz","suffixPosition","right",3,"ngModelChange","ngModel"],["appearance","outlined",3,"ngModelChange","size","label","ngModel"]],template:function(u,e){u&1&&(i(0,"section",0)(1,"h2",1),r(2,"1. Appearances"),l(),i(3,"div",2)(4,"app-catalog-variation-tile",3)(5,"brightrail-text-field",4),s("ngModelChange",function(a){return p(e.appearanceValue,a)||(e.appearanceValue=a),a}),l()(),i(6,"app-catalog-variation-tile",5)(7,"brightrail-text-field",6),s("ngModelChange",function(a){return p(e.appearanceValue,a)||(e.appearanceValue=a),a}),l()(),i(8,"app-catalog-variation-tile",7)(9,"brightrail-text-field",8),s("ngModelChange",function(a){return p(e.appearanceValue,a)||(e.appearanceValue=a),a}),l()()()(),i(10,"section",0)(11,"h2",1),r(12,"2. Label positions"),l(),i(13,"div",2)(14,"app-catalog-variation-tile",9)(15,"brightrail-text-field",10),s("ngModelChange",function(a){return p(e.labelDemoValue,a)||(e.labelDemoValue=a),a}),l()(),i(16,"app-catalog-variation-tile",11)(17,"brightrail-text-field",12),s("ngModelChange",function(a){return p(e.insetValue,a)||(e.insetValue=a),a}),l()(),i(18,"app-catalog-variation-tile",13)(19,"brightrail-text-field",14),s("ngModelChange",function(a){return p(e.leftLabelValue,a)||(e.leftLabelValue=a),a}),l()(),i(20,"app-catalog-variation-tile",15)(21,"brightrail-text-field",16),s("ngModelChange",function(a){return p(e.rightLabelValue,a)||(e.rightLabelValue=a),a}),l()(),i(22,"app-catalog-variation-tile",17)(23,"brightrail-text-field",18),s("ngModelChange",function(a){return p(e.searchValue,a)||(e.searchValue=a),a}),l()()()(),i(24,"section",0)(25,"h2",1),r(26,"3. Sizes"),l(),i(27,"div",19),C(28,X,2,5,"app-catalog-variation-tile",20,H),l()(),i(30,"section",0)(31,"h2",1),r(32,"4. Statuses"),l(),i(33,"div",2)(34,"app-catalog-variation-tile",21)(35,"brightrail-text-field",22),s("ngModelChange",function(a){return p(e.successValue,a)||(e.successValue=a),a}),l()(),i(36,"app-catalog-variation-tile",23)(37,"brightrail-text-field",24),s("ngModelChange",function(a){return p(e.warningValue,a)||(e.warningValue=a),a}),l()(),i(38,"app-catalog-variation-tile",25)(39,"brightrail-text-field",26),s("ngModelChange",function(a){return p(e.errorValue,a)||(e.errorValue=a),a}),l()(),i(40,"app-catalog-variation-tile",27)(41,"brightrail-text-field",28),s("ngModelChange",function(a){return p(e.infoValue,a)||(e.infoValue=a),a}),l()(),i(42,"app-catalog-variation-tile",29)(43,"brightrail-text-field",30),s("ngModelChange",function(a){return p(e.disabledValue,a)||(e.disabledValue=a),a}),l()()()(),i(44,"section",0)(45,"h2",1),r(46,"5. Shapes"),l(),i(47,"div",31)(48,"app-catalog-variation-tile",32)(49,"brightrail-text-field",33),s("ngModelChange",function(a){return p(e.shapeValue,a)||(e.shapeValue=a),a}),l()(),i(50,"app-catalog-variation-tile",34)(51,"brightrail-text-field",35),s("ngModelChange",function(a){return p(e.shapeValue,a)||(e.shapeValue=a),a}),l()(),i(52,"app-catalog-variation-tile",36)(53,"brightrail-text-field",37),s("ngModelChange",function(a){return p(e.shapeValue,a)||(e.shapeValue=a),a}),l()()()(),i(54,"section",0)(55,"h2",1),r(56,"6. Clearable, password & icons"),l(),i(57,"div",2)(58,"app-catalog-variation-tile",38)(59,"brightrail-text-field",39),s("ngModelChange",function(a){return p(e.clearableValue,a)||(e.clearableValue=a),a}),l()(),i(60,"app-catalog-variation-tile",40)(61,"brightrail-text-field",41),s("ngModelChange",function(a){return p(e.passwordValue,a)||(e.passwordValue=a),a}),l()(),i(62,"app-catalog-variation-tile",42)(63,"brightrail-text-field",43),s("ngModelChange",function(a){return p(e.iconLeftValue,a)||(e.iconLeftValue=a),a}),l()(),i(64,"app-catalog-variation-tile",44)(65,"brightrail-text-field",45),s("ngModelChange",function(a){return p(e.iconRightValue,a)||(e.iconRightValue=a),a}),l()(),i(66,"app-catalog-variation-tile",46)(67,"brightrail-text-field",47),s("ngModelChange",function(a){return p(e.iconsBothValue,a)||(e.iconsBothValue=a),a}),l()()()(),i(68,"section",0)(69,"h2",1),r(70,"7. Futuristic text field designs"),l(),i(71,"div",48)(72,"app-catalog-variation-tile",49)(73,"div",50)(74,"span",51),r(75,"Glass"),l(),i(76,"brightrail-text-field",52),s("ngModelChange",function(a){return p(e.futuristicGlassValue,a)||(e.futuristicGlassValue=a),a}),l()()(),i(77,"app-catalog-variation-tile",53)(78,"div",54)(79,"span",51),r(80,"Neon"),l(),i(81,"brightrail-text-field",55),s("ngModelChange",function(a){return p(e.futuristicNeonValue,a)||(e.futuristicNeonValue=a),a}),l()()(),i(82,"app-catalog-variation-tile",56)(83,"div",57)(84,"span",51),r(85,"Cyber"),l(),i(86,"brightrail-text-field",58),s("ngModelChange",function(a){return p(e.futuristicCyberValue,a)||(e.futuristicCyberValue=a),a}),l()()(),i(87,"app-catalog-variation-tile",59)(88,"div",60)(89,"span",51),r(90,"Holo"),l(),i(91,"brightrail-text-field",61),s("ngModelChange",function(a){return p(e.futuristicHoloValue,a)||(e.futuristicHoloValue=a),a}),l()()()()()),u&2&&(t(4),n("snippet",e.s.appearanceFilled),t(),d("ngModel",e.appearanceValue),t(),n("snippet",e.s.appearanceOutlined),t(),d("ngModel",e.appearanceValue),t(),n("snippet",e.s.appearanceUnderline),t(),d("ngModel",e.appearanceValue),t(5),n("snippet",e.s.labelTop),t(),d("ngModel",e.labelDemoValue),t(),n("snippet",e.s.labelInset),t(),d("ngModel",e.insetValue),t(),n("snippet",e.s.labelLeft),t(),d("ngModel",e.leftLabelValue),t(),n("snippet",e.s.labelRight),t(),d("ngModel",e.rightLabelValue),t(),n("snippet",e.s.labelNone),t(),d("ngModel",e.searchValue),t(5),M(T(64,q,f(54,I,e.s.sizeXs),f(56,k,e.s.sizeSm),f(58,N,e.s.sizeMd),f(60,R,e.s.sizeLg),f(62,A,e.s.sizeXl))),t(6),n("snippet",e.s.statusSuccess),t(),d("ngModel",e.successValue),t(),n("snippet",e.s.statusWarning),t(),d("ngModel",e.warningValue),t(),n("snippet",e.s.statusError),t(),d("ngModel",e.errorValue),t(),n("snippet",e.s.statusInfo),t(),d("ngModel",e.infoValue),t(),n("snippet",e.s.statusDisabled),t(),n("disabled",!0),d("ngModel",e.disabledValue),t(5),n("snippet",e.s.shapeDefault),t(),d("ngModel",e.shapeValue),t(),n("snippet",e.s.shapeSquare),t(),d("ngModel",e.shapeValue),t(),n("snippet",e.s.shapePill),t(),d("ngModel",e.shapeValue),t(5),n("snippet",e.s.clearable),t(),n("clearable",!0),d("ngModel",e.clearableValue),t(),n("snippet",e.s.password),t(),n("showPasswordToggle",!0),d("ngModel",e.passwordValue),t(),n("snippet",e.s.iconLeft),t(),d("ngModel",e.iconLeftValue),t(),n("snippet",e.s.iconRight),t(),d("ngModel",e.iconRightValue),t(),n("snippet",e.s.iconsBoth),t(),d("ngModel",e.iconsBothValue),t(5),n("snippet",e.s.futuristicGlass),t(4),d("ngModel",e.futuristicGlassValue),t(),n("snippet",e.s.futuristicNeon),t(4),d("ngModel",e.futuristicNeonValue),t(),n("snippet",e.s.futuristicCyber),t(4),n("showPasswordToggle",!0),d("ngModel",e.futuristicCyberValue),t(),n("snippet",e.s.futuristicHolo),t(4),d("ngModel",e.futuristicHoloValue))},dependencies:[L,W,x,P,E],styles:["[_nghost-%COMP%]{display:block}.tfvc-block[_ngcontent-%COMP%]{margin-bottom:1.35rem}.tfvc-block__h[_ngcontent-%COMP%]{margin:0 0 .5rem;font-size:.95rem;font-weight:700}.tfvc-grid[_ngcontent-%COMP%]{display:grid;gap:.65rem;grid-template-columns:repeat(auto-fill,minmax(12rem,1fr))}.tfvc-grid--wide[_ngcontent-%COMP%]{grid-template-columns:repeat(auto-fill,minmax(16rem,1fr))}.tfvc-grid--sizes[_ngcontent-%COMP%]{grid-template-columns:repeat(auto-fill,minmax(9.5rem,1fr))}[_nghost-%COMP%]     brightrail-text-field{width:100%}"],changeDetection:0})};var B=class g{htmlExamples=z;static \u0275fac=function(u){return new(u||g)};static \u0275cmp=h({type:g,selectors:[["app-text-field-catalog-overview"]],decls:31,vars:1,consts:[[1,"tfco"],[1,"tfco-hero"],[1,"tfco-hero__eyebrow"],[1,"tfco-hero__links"],["routerLink","..",1,"tfco-link"],["routerLink","/variations",1,"tfco-link"],["aria-labelledby","tfco-html-examples",1,"tfco-code-block"],["id","tfco-html-examples"],[1,"tfco-code-block__hint"],[1,"tfco-pre"]],template:function(u,e){u&1&&(i(0,"div",0)(1,"header",1)(2,"p",2),r(3,"Brightrail \xB7 Text field \xB7 Variation catalog"),l(),i(4,"h1"),r(5,"Text field types & variations"),l(),i(6,"p"),r(7," Reference catalog for appearances, label positions, sizes, statuses, shapes, and affordances. Click any tile for "),i(8,"strong"),r(9,"View code"),l(),r(10,", then "),i(11,"strong"),r(12,"Copy code"),l(),r(13," to paste into your app (import from "),i(14,"code"),r(15,"brightrail"),l(),r(16,"). "),l(),i(17,"p",3)(18,"a",4),r(19,"\u2190 Text field playground (live settings)"),l(),i(20,"a",5),r(21,"All variation catalogs"),l()()(),w(22,"app-text-field-variation-catalog"),i(23,"section",6)(24,"h2",7),r(25,"Text field HTML examples"),l(),i(26,"p",8),r(27,"Typical markup for labeled, validated, and password fields."),l(),i(28,"pre",9)(29,"code"),r(30),l()()()()),u&2&&(t(30),S(e.htmlExamples))},dependencies:[v,m],styles:["[_nghost-%COMP%]{flex:1 1 auto;min-height:0;overflow:auto}.tfco[_ngcontent-%COMP%]{padding:1rem 1.25rem 1.5rem}.tfco-hero__eyebrow[_ngcontent-%COMP%]{margin:0 0 .25rem;font-size:.75rem;font-weight:600;letter-spacing:.04em;text-transform:uppercase;color:var(--ff-muted, #64748b)}.tfco-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0;font-size:1.5rem}.tfco-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:.35rem 0 .5rem;color:var(--ff-muted, #64748b)}.tfco-hero__links[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:.75rem 1.25rem}.tfco-link[_ngcontent-%COMP%]{color:var(--ff-accent, #2563eb);text-decoration:none;font-weight:600}.tfco-code-block[_ngcontent-%COMP%]{margin:1.5rem 0 0;padding-top:1rem;border-top:1px solid var(--ff-border, #e2e8f0)}.tfco-code-block[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.1rem;margin:0 0 .35rem}.tfco-code-block__hint[_ngcontent-%COMP%]{margin:0 0 .65rem;font-size:.8125rem;color:var(--ff-muted, #64748b)}.tfco-pre[_ngcontent-%COMP%]{margin:0;padding:.85rem;border-radius:.5rem;background:var(--ff-surface-muted, #f1f3f4);border:1px solid var(--ff-border, #e2e8f0);overflow:auto;font-size:.8rem}"],changeDetection:0})};export{B as TextFieldCatalogOverviewComponent};
