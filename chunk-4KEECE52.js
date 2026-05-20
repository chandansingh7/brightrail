import{a as P}from"./chunk-ZPUNR46Q.js";import{a as v}from"./chunk-XUZ3ZZR3.js";import{a as S}from"./chunk-BGKKKH7A.js";import{a as w}from"./chunk-THW5W2B5.js";import{e as y}from"./chunk-B3LO3J2X.js";import{d as M,g as _,p as C}from"./chunk-3JJTVFT5.js";import"./chunk-GGN7H5D7.js";import{Ca as m,Ua as n,Va as a,Wa as l,Xa as b,rb as o,sb as u,ta as t,vb as r,wb as d,xb as p}from"./chunk-GSG23AZM.js";var O={coreLabelHint:`<brightrail-form-field label="Email" hint="We will never share your email.">
  <brightrail-text-field
    appearance="outlined"
    labelPosition="none"
    placeholder="you@example.com"
    [(ngModel)]="email"
  />
</brightrail-form-field>`,coreLabelOnly:`<brightrail-form-field label="Display name">
  <brightrail-text-field
    appearance="outlined"
    labelPosition="none"
    placeholder="Jane Doe"
    [(ngModel)]="displayName"
  />
</brightrail-form-field>`,coreHintOnly:`<brightrail-form-field hint="Optional \u2014 shown when the field is valid.">
  <brightrail-text-field
    appearance="outlined"
    labelPosition="none"
    placeholder="Reference code"
    [(ngModel)]="reference"
  />
</brightrail-form-field>`,requiredField:`<brightrail-form-field label="Workspace name" [required]="true">
  <brightrail-text-field
    appearance="outlined"
    labelPosition="none"
    placeholder="Acme Corp"
    [(ngModel)]="workspace"
  />
</brightrail-form-field>`,errorInvalid:`<brightrail-form-field
  label="Password"
  [required]="true"
  [invalid]="true"
  error="Password must be at least 8 characters."
>
  <brightrail-text-field
    appearance="outlined"
    labelPosition="none"
    inputType="password"
    placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
    [(ngModel)]="password"
  />
</brightrail-form-field>`,errorWithHint:`<brightrail-form-field
  label="API key"
  hint="Rotate keys from the admin console."
  [invalid]="showApiKeyError"
  error="API key is required."
>
  <brightrail-text-field
    appearance="outlined"
    labelPosition="none"
    placeholder="sk_live_\u2026"
    [(ngModel)]="apiKey"
  />
</brightrail-form-field>`,withTextField:`<brightrail-form-field label="Company" hint="Legal entity name on invoices.">
  <brightrail-text-field
    appearance="filled"
    labelPosition="none"
    placeholder="Brightrail Inc."
    [(ngModel)]="company"
  />
</brightrail-form-field>`,withTextFieldOutlined:`<brightrail-form-field label="Job title">
  <brightrail-text-field
    appearance="outlined"
    labelPosition="none"
    placeholder="Product designer"
    [(ngModel)]="title"
  />
</brightrail-form-field>`,withSwitch:`<brightrail-form-field
  label="Email notifications"
  hint="Receive product updates and security alerts."
>
  <brightrail-switch label="Enable notifications" [(ngModel)]="notificationsOn" />
</brightrail-form-field>`,withSwitchRequired:`<brightrail-form-field
  label="Terms of service"
  [required]="true"
  [invalid]="!acceptedTerms"
  error="You must accept the terms to continue."
>
  <brightrail-switch label="I accept the terms" [(ngModel)]="acceptedTerms" />
</brightrail-form-field>`,layoutStack:`<div class="ffco-stack">
  <brightrail-form-field label="First name" [required]="true">
    <brightrail-text-field appearance="outlined" labelPosition="none" [(ngModel)]="firstName" />
  </brightrail-form-field>
  <brightrail-form-field label="Last name" [required]="true">
    <brightrail-text-field appearance="outlined" labelPosition="none" [(ngModel)]="lastName" />
  </brightrail-form-field>
</div>`,layoutSettings:`<brightrail-form-field label="Public profile" hint="Visible to anyone with the link.">
  <brightrail-switch label="Make profile public" [(ngModel)]="isPublic" />
</brightrail-form-field>`,futuristicGlass:`<div class="ff-future-shell ff-future-shell--glass">
  <brightrail-form-field label="Access token" hint="Scoped to read-only operations.">
    <brightrail-text-field
      appearance="outlined"
      labelPosition="none"
      placeholder="br_live_\u2026"
      [(ngModel)]="apiKey"
    />
  </brightrail-form-field>
</div>`,futuristicNeon:`<div class="ff-future-shell ff-future-shell--neon">
  <brightrail-form-field label="Node alias" [required]="true">
    <brightrail-text-field
      appearance="outlined"
      labelPosition="none"
      placeholder="alpha-01"
      [(ngModel)]="displayName"
    />
  </brightrail-form-field>
</div>`,futuristicCyber:`<div class="ff-future-shell ff-future-shell--cyber">
  <brightrail-form-field label="Encryption key" hint="Rotates every 24 hours.">
    <brightrail-text-field
      appearance="outlined"
      labelPosition="none"
      inputType="password"
      placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
      [(ngModel)]="password"
    />
  </brightrail-form-field>
</div>`,futuristicHolo:`<div class="ff-future-shell ff-future-shell--holo">
  <brightrail-form-field label="Telemetry stream" hint="Enable real-time metrics.">
    <brightrail-switch label="Stream active" [(ngModel)]="notificationsOn" />
  </brightrail-form-field>
</div>`};var F=`<brightrail-form-field label="Email" hint="Work email for invites." [required]="true">
  <brightrail-text-field
    appearance="outlined"
    labelPosition="none"
    placeholder="you@company.com"
    [(ngModel)]="email"
  />
</brightrail-form-field>

<brightrail-form-field
  label="Password"
  [invalid]="passwordInvalid"
  error="Password must be at least 8 characters."
>
  <brightrail-text-field
    appearance="outlined"
    labelPosition="none"
    inputType="password"
    [(ngModel)]="password"
  />
</brightrail-form-field>

<brightrail-form-field label="Notifications" hint="Control alert channels.">
  <brightrail-switch label="Email me updates" [(ngModel)]="notify" />
</brightrail-form-field>`;var c=class f{s=O;ngModelStandalone={standalone:!0};email="you@example.com";displayName="Jane Doe";reference="";workspace="Acme Corp";password="";apiKey="";company="Brightrail Inc.";title="Product designer";notificationsOn=!0;acceptedTerms=!1;firstName="Jane";lastName="Doe";isPublic=!1;showApiKeyError=!0;static \u0275fac=function(g){return new(g||f)};static \u0275cmp=m({type:f,selectors:[["app-form-field-variation-catalog"]],decls:106,vars:59,consts:[[1,"ffvc-block"],[1,"ffvc-block__h"],[1,"ffvc-grid"],["label","Label + hint",3,"snippet"],[1,"ffvc-tile-body"],["label","Email","hint","We will never share your email."],["appearance","outlined","labelPosition","none","placeholder","you@example.com",3,"ngModelChange","ngModel","ngModelOptions"],["label","Label only",3,"snippet"],["label","Display name"],["appearance","outlined","labelPosition","none","placeholder","Jane Doe",3,"ngModelChange","ngModel","ngModelOptions"],["label","Hint only",3,"snippet"],["hint","Optional \u2014 shown when the field is valid."],["appearance","outlined","labelPosition","none","placeholder","Reference code",3,"ngModelChange","ngModel","ngModelOptions"],["label","Required",3,"snippet"],["label","Workspace name",3,"required"],["appearance","outlined","labelPosition","none","placeholder","Acme Corp",3,"ngModelChange","ngModel","ngModelOptions"],["label","Invalid + error",3,"snippet"],["label","Password","error","Password must be at least 8 characters.",3,"required","invalid"],["appearance","outlined","labelPosition","none","inputType","password","placeholder","\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",3,"ngModelChange","ngModel","ngModelOptions"],["label","Hint hidden when invalid",3,"snippet"],["label","API key","hint","Rotate keys from the admin console.","error","API key is required.",3,"invalid"],["appearance","outlined","labelPosition","none","placeholder","sk_live_\u2026",3,"ngModelChange","ngModel","ngModelOptions"],["label","Filled appearance",3,"snippet"],["label","Company","hint","Legal entity name on invoices."],["appearance","filled","labelPosition","none","placeholder","Brightrail Inc.",3,"ngModelChange","ngModel","ngModelOptions"],["label","Outlined appearance",3,"snippet"],["label","Job title"],["appearance","outlined","labelPosition","none","placeholder","Product designer",3,"ngModelChange","ngModel","ngModelOptions"],["label","Notifications",3,"snippet"],["label","Email notifications","hint","Receive product updates and security alerts."],["label","Enable notifications",3,"ngModelChange","ngModel","ngModelOptions"],["label","Terms acceptance",3,"snippet"],["label","Terms of service","error","You must accept the terms to continue.",3,"required","invalid"],["label","I accept the terms",3,"ngModelChange","ngModel","ngModelOptions"],["label","Stacked fields",3,"snippet"],[1,"ffco-stack"],["label","First name",3,"required"],["appearance","outlined","labelPosition","none",3,"ngModelChange","ngModel","ngModelOptions"],["label","Last name",3,"required"],["label","Settings row",3,"snippet"],["label","Public profile","hint","Visible to anyone with the link."],["label","Make profile public",3,"ngModelChange","ngModel","ngModelOptions"],[1,"ff-future-grid"],["label","Glass token",3,"snippet"],[1,"ff-future-shell","ff-future-shell--glass"],["aria-hidden","true",1,"ff-future-shell__label"],["label","Access token","hint","Scoped to read-only operations."],["appearance","outlined","labelPosition","none","placeholder","br_live_\u2026",3,"ngModelChange","ngModel","ngModelOptions"],["label","Neon alias",3,"snippet"],[1,"ff-future-shell","ff-future-shell--neon"],["label","Node alias",3,"required"],["appearance","outlined","labelPosition","none","placeholder","alpha-01",3,"ngModelChange","ngModel","ngModelOptions"],["label","Cyber key",3,"snippet"],[1,"ff-future-shell","ff-future-shell--cyber"],["label","Encryption key","hint","Rotates every 24 hours."],["label","Holo telemetry",3,"snippet"],[1,"ff-future-shell","ff-future-shell--holo"],["label","Telemetry stream","hint","Enable real-time metrics."],["label","Stream active",3,"ngModelChange","ngModel","ngModelOptions"]],template:function(g,e){g&1&&(a(0,"section",0)(1,"h2",1),o(2,"1. Label & hint"),l(),a(3,"div",2)(4,"app-catalog-variation-tile",3)(5,"div",4)(6,"brightrail-form-field",5)(7,"brightrail-text-field",6),p("ngModelChange",function(i){return d(e.email,i)||(e.email=i),i}),l()()()(),a(8,"app-catalog-variation-tile",7)(9,"div",4)(10,"brightrail-form-field",8)(11,"brightrail-text-field",9),p("ngModelChange",function(i){return d(e.displayName,i)||(e.displayName=i),i}),l()()()(),a(12,"app-catalog-variation-tile",10)(13,"div",4)(14,"brightrail-form-field",11)(15,"brightrail-text-field",12),p("ngModelChange",function(i){return d(e.reference,i)||(e.reference=i),i}),l()()()()()(),a(16,"section",0)(17,"h2",1),o(18,"2. Required fields"),l(),a(19,"div",2)(20,"app-catalog-variation-tile",13)(21,"div",4)(22,"brightrail-form-field",14)(23,"brightrail-text-field",15),p("ngModelChange",function(i){return d(e.workspace,i)||(e.workspace=i),i}),l()()()()()(),a(24,"section",0)(25,"h2",1),o(26,"3. Error & validation"),l(),a(27,"div",2)(28,"app-catalog-variation-tile",16)(29,"div",4)(30,"brightrail-form-field",17)(31,"brightrail-text-field",18),p("ngModelChange",function(i){return d(e.password,i)||(e.password=i),i}),l()()()(),a(32,"app-catalog-variation-tile",19)(33,"div",4)(34,"brightrail-form-field",20)(35,"brightrail-text-field",21),p("ngModelChange",function(i){return d(e.apiKey,i)||(e.apiKey=i),i}),l()()()()()(),a(36,"section",0)(37,"h2",1),o(38,"4. With text field"),l(),a(39,"div",2)(40,"app-catalog-variation-tile",22)(41,"div",4)(42,"brightrail-form-field",23)(43,"brightrail-text-field",24),p("ngModelChange",function(i){return d(e.company,i)||(e.company=i),i}),l()()()(),a(44,"app-catalog-variation-tile",25)(45,"div",4)(46,"brightrail-form-field",26)(47,"brightrail-text-field",27),p("ngModelChange",function(i){return d(e.title,i)||(e.title=i),i}),l()()()()()(),a(48,"section",0)(49,"h2",1),o(50,"5. With switch"),l(),a(51,"div",2)(52,"app-catalog-variation-tile",28)(53,"div",4)(54,"brightrail-form-field",29)(55,"brightrail-switch",30),p("ngModelChange",function(i){return d(e.notificationsOn,i)||(e.notificationsOn=i),i}),l()()()(),a(56,"app-catalog-variation-tile",31)(57,"div",4)(58,"brightrail-form-field",32)(59,"brightrail-switch",33),p("ngModelChange",function(i){return d(e.acceptedTerms,i)||(e.acceptedTerms=i),i}),l()()()()()(),a(60,"section",0)(61,"h2",1),o(62,"6. Layout patterns"),l(),a(63,"div",2)(64,"app-catalog-variation-tile",34)(65,"div",35)(66,"brightrail-form-field",36)(67,"brightrail-text-field",37),p("ngModelChange",function(i){return d(e.firstName,i)||(e.firstName=i),i}),l()(),a(68,"brightrail-form-field",38)(69,"brightrail-text-field",37),p("ngModelChange",function(i){return d(e.lastName,i)||(e.lastName=i),i}),l()()()(),a(70,"app-catalog-variation-tile",39)(71,"div",4)(72,"brightrail-form-field",40)(73,"brightrail-switch",41),p("ngModelChange",function(i){return d(e.isPublic,i)||(e.isPublic=i),i}),l()()()()()(),a(74,"section",0)(75,"h2",1),o(76,"7. Futuristic form field designs"),l(),a(77,"div",42)(78,"app-catalog-variation-tile",43)(79,"div",44)(80,"span",45),o(81,"Glass"),l(),a(82,"div",4)(83,"brightrail-form-field",46)(84,"brightrail-text-field",47),p("ngModelChange",function(i){return d(e.apiKey,i)||(e.apiKey=i),i}),l()()()()(),a(85,"app-catalog-variation-tile",48)(86,"div",49)(87,"span",45),o(88,"Neon"),l(),a(89,"div",4)(90,"brightrail-form-field",50)(91,"brightrail-text-field",51),p("ngModelChange",function(i){return d(e.displayName,i)||(e.displayName=i),i}),l()()()()(),a(92,"app-catalog-variation-tile",52)(93,"div",53)(94,"span",45),o(95,"Cyber"),l(),a(96,"div",4)(97,"brightrail-form-field",54)(98,"brightrail-text-field",18),p("ngModelChange",function(i){return d(e.password,i)||(e.password=i),i}),l()()()()(),a(99,"app-catalog-variation-tile",55)(100,"div",56)(101,"span",45),o(102,"Holo"),l(),a(103,"div",4)(104,"brightrail-form-field",57)(105,"brightrail-switch",58),p("ngModelChange",function(i){return d(e.notificationsOn,i)||(e.notificationsOn=i),i}),l()()()()()()()),g&2&&(t(4),n("snippet",e.s.coreLabelHint),t(3),r("ngModel",e.email),n("ngModelOptions",e.ngModelStandalone),t(),n("snippet",e.s.coreLabelOnly),t(3),r("ngModel",e.displayName),n("ngModelOptions",e.ngModelStandalone),t(),n("snippet",e.s.coreHintOnly),t(3),r("ngModel",e.reference),n("ngModelOptions",e.ngModelStandalone),t(5),n("snippet",e.s.requiredField),t(2),n("required",!0),t(),r("ngModel",e.workspace),n("ngModelOptions",e.ngModelStandalone),t(5),n("snippet",e.s.errorInvalid),t(2),n("required",!0)("invalid",!0),t(),r("ngModel",e.password),n("ngModelOptions",e.ngModelStandalone),t(),n("snippet",e.s.errorWithHint),t(2),n("invalid",e.showApiKeyError),t(),r("ngModel",e.apiKey),n("ngModelOptions",e.ngModelStandalone),t(5),n("snippet",e.s.withTextField),t(3),r("ngModel",e.company),n("ngModelOptions",e.ngModelStandalone),t(),n("snippet",e.s.withTextFieldOutlined),t(3),r("ngModel",e.title),n("ngModelOptions",e.ngModelStandalone),t(5),n("snippet",e.s.withSwitch),t(3),r("ngModel",e.notificationsOn),n("ngModelOptions",e.ngModelStandalone),t(),n("snippet",e.s.withSwitchRequired),t(2),n("required",!0)("invalid",!e.acceptedTerms),t(),r("ngModel",e.acceptedTerms),n("ngModelOptions",e.ngModelStandalone),t(5),n("snippet",e.s.layoutStack),t(2),n("required",!0),t(),r("ngModel",e.firstName),n("ngModelOptions",e.ngModelStandalone),t(),n("required",!0),t(),r("ngModel",e.lastName),n("ngModelOptions",e.ngModelStandalone),t(),n("snippet",e.s.layoutSettings),t(3),r("ngModel",e.isPublic),n("ngModelOptions",e.ngModelStandalone),t(5),n("snippet",e.s.futuristicGlass),t(6),r("ngModel",e.apiKey),n("ngModelOptions",e.ngModelStandalone),t(),n("snippet",e.s.futuristicNeon),t(5),n("required",!0),t(),r("ngModel",e.displayName),n("ngModelOptions",e.ngModelStandalone),t(),n("snippet",e.s.futuristicCyber),t(6),r("ngModel",e.password),n("ngModelOptions",e.ngModelStandalone),t(),n("snippet",e.s.futuristicHolo),t(6),r("ngModel",e.notificationsOn),n("ngModelOptions",e.ngModelStandalone))},dependencies:[C,M,_,v,w,S,P],styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]   .ff-future-shell[_ngcontent-%COMP%]{width:100%;flex-direction:column;align-items:stretch}.ffvc-grid[_ngcontent-%COMP%]{display:grid;gap:.65rem;grid-template-columns:repeat(auto-fill,minmax(13rem,1fr))}.ffvc-block[_ngcontent-%COMP%]{margin-bottom:1.35rem}.ffvc-block__h[_ngcontent-%COMP%]{margin:0 0 .5rem;font-size:.95rem;font-weight:700}.ffvc-block__hint[_ngcontent-%COMP%]{margin:0 0 .5rem;font-size:.8125rem;color:var(--ff-muted, #64748b)}.ffvc-tile-body[_ngcontent-%COMP%]{width:100%;max-width:18rem}.ffco-stack[_ngcontent-%COMP%]{display:grid;gap:.65rem;width:100%;max-width:18rem}"],changeDetection:0})};var E=class f{htmlExamples=F;static \u0275fac=function(g){return new(g||f)};static \u0275cmp=m({type:f,selectors:[["app-form-field-catalog-overview"]],decls:31,vars:1,consts:[[1,"ffco"],[1,"ffco-hero"],[1,"ffco-hero__eyebrow"],[1,"ffco-hero__links"],["routerLink","..",1,"ffco-link"],["routerLink","/variations",1,"ffco-link"],["aria-labelledby","ffco-html-examples",1,"ffco-code-block"],["id","ffco-html-examples"],[1,"ffco-code-block__hint"],[1,"ffco-pre"]],template:function(g,e){g&1&&(a(0,"div",0)(1,"header",1)(2,"p",2),o(3,"Brightrail \xB7 Form field \xB7 Variation catalog"),l(),a(4,"h1"),o(5,"Form field types & variations"),l(),a(6,"p"),o(7," Reference catalog for filterable selects, width modes, disabled states, and form wiring. Click any tile for "),a(8,"strong"),o(9,"View code"),l(),o(10,", then "),a(11,"strong"),o(12,"Copy code"),l(),o(13," (import from "),a(14,"code"),o(15,"brightrail"),l(),o(16,"). "),l(),a(17,"p",3)(18,"a",4),o(19,"\u2190 Form field playground (live settings)"),l(),a(20,"a",5),o(21,"All variation catalogs"),l()()(),b(22,"app-form-field-variation-catalog"),a(23,"section",6)(24,"h2",7),o(25,"Form field HTML examples"),l(),a(26,"p",8),o(27,"Filterable country picker and static priority list."),l(),a(28,"pre",9)(29,"code"),o(30),l()()()()),g&2&&(t(30),u(e.htmlExamples))},dependencies:[y,c],styles:["[_nghost-%COMP%]{flex:1 1 auto;min-height:0;overflow:auto}.ffco[_ngcontent-%COMP%]{padding:1rem 1.25rem 1.5rem}.ffco-hero__eyebrow[_ngcontent-%COMP%]{margin:0 0 .25rem;font-size:.75rem;font-weight:600;letter-spacing:.04em;text-transform:uppercase;color:var(--ff-muted, #64748b)}.ffco-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0;font-size:1.5rem}.ffco-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:.35rem 0 .5rem;color:var(--ff-muted, #64748b)}.ffco-hero__links[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:.75rem 1.25rem}.ffco-link[_ngcontent-%COMP%]{color:var(--ff-accent, #2563eb);text-decoration:none;font-weight:600}.ffco-code-block[_ngcontent-%COMP%]{margin:1.5rem 0 0;padding-top:1rem;border-top:1px solid var(--ff-border, #e2e8f0)}.ffco-code-block[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.1rem;margin:0 0 .35rem}.ffco-code-block__hint[_ngcontent-%COMP%]{margin:0 0 .65rem;font-size:.8125rem;color:var(--ff-muted, #64748b)}.ffco-pre[_ngcontent-%COMP%]{margin:0;padding:.85rem;border-radius:.5rem;background:var(--ff-surface-muted, #f1f3f4);border:1px solid var(--ff-border, #e2e8f0);overflow:auto;font-size:.8rem}"],changeDetection:0})};export{E as FormFieldCatalogOverviewComponent};
