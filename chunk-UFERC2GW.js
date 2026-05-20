import{a as S}from"./chunk-E73HXZ2A.js";import{d as _,g as M,o as C,p as w}from"./chunk-2QFTQFU4.js";import{a as T}from"./chunk-YDULXL76.js";import"./chunk-4C4FL2XM.js";import{e as f}from"./chunk-TU4FQAPV.js";import{$a as y,Ab as l,Bb as d,Ga as u,Ya as n,Za as i,_a as r,ua as t,vb as s,wb as b,zb as o}from"./chunk-K6TWHCOD.js";var x={appearanceFilled:`<brightrail-textarea
  appearance="filled"
  label="Description"
  placeholder="Enter details\u2026"
  [(ngModel)]="description"
/>`,appearanceOutlined:`<brightrail-textarea
  appearance="outlined"
  label="Description"
  placeholder="Enter details\u2026"
  [(ngModel)]="description"
/>`,appearanceUnderline:`<brightrail-textarea
  appearance="underline"
  label="Notes"
  placeholder="Add notes\u2026"
  [(ngModel)]="notes"
/>`,appearanceGhost:`<brightrail-textarea
  appearance="ghost"
  label="Comments"
  placeholder="Optional comments\u2026"
  [(ngModel)]="comments"
/>`,appearanceReadonly:`<brightrail-textarea
  appearance="readonly"
  label="Terms"
  [rows]="3"
  [(ngModel)]="termsText"
/>`,labelWithHelper:`<brightrail-textarea
  appearance="outlined"
  label="Bio"
  helperText="Brief summary shown on your profile."
  [rows]="4"
  [(ngModel)]="bio"
/>`,labelRequired:`<brightrail-textarea
  appearance="outlined"
  label="Feedback"
  [required]="true"
  [rows]="4"
  [(ngModel)]="feedback"
/>`,labelCompact:`<brightrail-textarea
  appearance="outlined"
  label="Short note"
  [rows]="2"
  placeholder="Quick note\u2026"
  [(ngModel)]="shortNote"
/>`,labelNoLabel:`<brightrail-textarea
  appearance="outlined"
  placeholder="Write a message\u2026"
  [rows]="4"
  [(ngModel)]="message"
/>`,sizeXs:'<brightrail-textarea appearance="outlined" size="xs" label="Extra small" [rows]="3" [(ngModel)]="value" />',sizeSm:'<brightrail-textarea appearance="outlined" size="sm" label="Small" [rows]="3" [(ngModel)]="value" />',sizeMd:'<brightrail-textarea appearance="outlined" size="md" label="Medium" [rows]="4" [(ngModel)]="value" />',sizeLg:'<brightrail-textarea appearance="outlined" size="lg" label="Large" [rows]="4" [(ngModel)]="value" />',sizeXl:'<brightrail-textarea appearance="outlined" size="xl" label="Extra large" [rows]="5" [(ngModel)]="value" />',statusSuccess:`<brightrail-textarea
  appearance="outlined"
  label="Summary"
  status="success"
  helperText="Looks good!"
  [(ngModel)]="summary"
/>`,statusWarning:`<brightrail-textarea
  appearance="outlined"
  label="Address"
  status="warning"
  [(ngModel)]="address"
/>`,statusError:`<brightrail-textarea
  appearance="outlined"
  label="Reason"
  status="error"
  helperText="This field is required."
  [(ngModel)]="reason"
/>`,statusInfo:`<brightrail-textarea
  appearance="outlined"
  label="Instructions"
  status="info"
  [(ngModel)]="instructions"
/>`,statusDisabled:`<brightrail-textarea
  appearance="outlined"
  label="Locked field"
  [disabled]="true"
  [(ngModel)]="lockedValue"
/>`,resizeNone:`<brightrail-textarea
  appearance="outlined"
  label="Fixed height"
  resize="none"
  [rows]="4"
  [(ngModel)]="fixedText"
/>`,resizeVertical:`<brightrail-textarea
  appearance="outlined"
  label="Vertical resize"
  resize="vertical"
  [rows]="4"
  [(ngModel)]="verticalText"
/>`,resizeHorizontal:`<brightrail-textarea
  appearance="outlined"
  label="Horizontal resize"
  resize="horizontal"
  [rows]="3"
  [(ngModel)]="horizontalText"
/>`,resizeBoth:`<brightrail-textarea
  appearance="outlined"
  label="Both axes"
  resize="both"
  [rows]="3"
  [(ngModel)]="bothText"
/>`,formFullWidth:`<brightrail-textarea
  appearance="outlined"
  label="Project description"
  [fullWidth]="true"
  [rows]="5"
  [(ngModel)]="projectDescription"
/>`,formLoading:`<brightrail-textarea
  appearance="outlined"
  label="Draft"
  [loading]="true"
  [rows]="4"
  [(ngModel)]="draft"
/>`,formReactive:`<brightrail-textarea
  appearance="outlined"
  label="Comments"
  [rows]="4"
  [formControl]="commentsControl"
/>`,futuristicGlass:`<div class="ff-future-shell ff-future-shell--glass">
  <brightrail-textarea
    appearance="outlined"
    label="Mission log"
    placeholder="Record telemetry\u2026"
    [rows]="3"
    [(ngModel)]="missionLog"
  />
</div>`,futuristicNeon:`<div class="ff-future-shell ff-future-shell--neon">
  <brightrail-textarea
    appearance="filled"
    label="Signal transcript"
    [rows]="3"
    [(ngModel)]="transcript"
  />
</div>`,futuristicCyber:`<div class="ff-future-shell ff-future-shell--cyber">
  <brightrail-textarea
    appearance="outlined"
    label="Payload"
    resize="none"
    [rows]="3"
    [(ngModel)]="payload"
  />
</div>`,futuristicHolo:`<div class="ff-future-shell ff-future-shell--holo">
  <brightrail-textarea
    appearance="underline"
    label="Operator notes"
    [rows]="4"
    [fullWidth]="true"
    [(ngModel)]="operatorNotes"
  />
</div>`};var v=`<brightrail-textarea
  appearance="outlined"
  label="Project description"
  placeholder="Describe your project\u2026"
  [rows]="4"
  status="success"
  helperText="Looks good!"
  [(ngModel)]="description"
/>

<brightrail-textarea
  appearance="filled"
  label="Feedback"
  [required]="true"
  status="error"
  helperText="This field is required."
  [fullWidth]="true"
  [(ngModel)]="feedback"
/>

<brightrail-textarea
  appearance="readonly"
  label="Terms and conditions"
  [rows]="3"
  resize="none"
  [(ngModel)]="termsText"
/>`;var c=class m{s=x;demoDescription="Sample project description for the catalog preview.";demoNotes="Quick notes go here.";demoTerms="These terms govern use of the service.";demoBio="Product designer with 8 years of experience.";demoFeedback="";demoShortNote="";demoMessage="";demoValue="Medium textarea content.";demoSummary="All requirements met.";demoAddress="123 Main St";demoReason="";demoInstructions="Follow the steps below.";demoLocked="Cannot edit this content.";demoFixed="Fixed height content.";demoVertical="Vertical resize enabled.";demoHorizontal="Horizontal resize enabled.";demoBoth="Both axes resize enabled.";demoProject="A comprehensive platform for team collaboration.";demoDraft="Saving draft\u2026";futuristicGlassValue="";futuristicNeonValue="";futuristicCyberValue="";futuristicHoloValue="";static \u0275fac=function(g){return new(g||m)};static \u0275cmp=u({type:m,selectors:[["app-textarea-variation-catalog"]],decls:102,vars:86,consts:[[1,"tavc-block"],[1,"tavc-block__h"],[1,"tavc-stack"],["label","Filled",3,"snippet"],["appearance","filled","label","Description","placeholder","Enter details\u2026",3,"ngModelChange","ngModel"],["label","Outlined",3,"snippet"],["appearance","outlined","label","Description","placeholder","Enter details\u2026",3,"ngModelChange","ngModel"],["label","Underline",3,"snippet"],["appearance","underline","label","Notes","placeholder","Add notes\u2026",3,"ngModelChange","ngModel"],["label","Ghost",3,"snippet"],["appearance","ghost","label","Comments","placeholder","Optional comments\u2026",3,"ngModelChange","ngModel"],["label","Read-only",3,"snippet"],["appearance","readonly","label","Terms",3,"ngModelChange","rows","ngModel"],["label","With helper text",3,"snippet"],["appearance","outlined","label","Bio","helperText","Brief summary shown on your profile.",3,"ngModelChange","rows","ngModel"],["label","Required",3,"snippet"],["appearance","outlined","label","Feedback",3,"ngModelChange","required","rows","ngModel"],["label","Compact (2 rows)",3,"snippet"],["appearance","outlined","label","Short note","placeholder","Quick note\u2026",3,"ngModelChange","rows","ngModel"],["label","No label",3,"snippet"],["appearance","outlined","placeholder","Write a message\u2026",3,"ngModelChange","rows","ngModel"],[1,"tavc-block__hint"],["label","Extra small",3,"snippet"],["appearance","outlined","size","xs","label","Extra small",3,"ngModelChange","rows","ngModel"],["label","Small",3,"snippet"],["appearance","outlined","size","sm","label","Small",3,"ngModelChange","rows","ngModel"],["label","Medium",3,"snippet"],["appearance","outlined","size","md","label","Medium",3,"ngModelChange","rows","ngModel"],["label","Large",3,"snippet"],["appearance","outlined","size","lg","label","Large",3,"ngModelChange","rows","ngModel"],["label","Extra large",3,"snippet"],["appearance","outlined","size","xl","label","Extra large",3,"ngModelChange","rows","ngModel"],["label","Success",3,"snippet"],["appearance","outlined","label","Summary","status","success","helperText","Looks good!",3,"ngModelChange","ngModel"],["label","Warning",3,"snippet"],["appearance","outlined","label","Address","status","warning",3,"ngModelChange","ngModel"],["label","Error",3,"snippet"],["appearance","outlined","label","Reason","status","error","helperText","This field is required.",3,"ngModelChange","ngModel"],["label","Info",3,"snippet"],["appearance","outlined","label","Instructions","status","info",3,"ngModelChange","ngModel"],["label","Disabled",3,"snippet"],["appearance","outlined","label","Locked field",3,"ngModelChange","disabled","ngModel"],["label","None",3,"snippet"],["appearance","outlined","label","Fixed height","resize","none",3,"ngModelChange","rows","ngModel"],["label","Vertical",3,"snippet"],["appearance","outlined","label","Vertical resize","resize","vertical",3,"ngModelChange","rows","ngModel"],["label","Horizontal",3,"snippet"],["appearance","outlined","label","Horizontal resize","resize","horizontal",3,"ngModelChange","rows","ngModel"],["label","Both",3,"snippet"],["appearance","outlined","label","Both axes","resize","both",3,"ngModelChange","rows","ngModel"],["label","Full width",3,"snippet"],["appearance","outlined","label","Project description",3,"ngModelChange","fullWidth","rows","ngModel"],["label","Loading",3,"snippet"],["appearance","outlined","label","Draft",3,"ngModelChange","loading","rows","ngModel"],["label","Reactive form",3,"snippet"],["appearance","outlined","label","Comments",3,"ngModelChange","rows","ngModel"],[1,"ff-future-grid"],["label","Glass log",3,"snippet"],[1,"ff-future-shell","ff-future-shell--glass"],["aria-hidden","true",1,"ff-future-shell__label"],["appearance","outlined","label","Mission log","placeholder","Record telemetry\u2026",3,"ngModelChange","rows","ngModel"],["label","Neon transcript",3,"snippet"],[1,"ff-future-shell","ff-future-shell--neon"],["appearance","filled","label","Signal transcript",3,"ngModelChange","rows","ngModel"],["label","Cyber payload",3,"snippet"],[1,"ff-future-shell","ff-future-shell--cyber"],["appearance","outlined","label","Payload","resize","none",3,"ngModelChange","rows","ngModel"],["label","Holo notes",3,"snippet"],[1,"ff-future-shell","ff-future-shell--holo"],["appearance","underline","label","Operator notes",3,"ngModelChange","rows","fullWidth","ngModel"]],template:function(g,e){g&1&&(i(0,"section",0)(1,"h2",1),s(2,"1. Appearances"),r(),i(3,"div",2)(4,"app-catalog-variation-tile",3)(5,"brightrail-textarea",4),d("ngModelChange",function(a){return l(e.demoDescription,a)||(e.demoDescription=a),a}),r()(),i(6,"app-catalog-variation-tile",5)(7,"brightrail-textarea",6),d("ngModelChange",function(a){return l(e.demoDescription,a)||(e.demoDescription=a),a}),r()(),i(8,"app-catalog-variation-tile",7)(9,"brightrail-textarea",8),d("ngModelChange",function(a){return l(e.demoNotes,a)||(e.demoNotes=a),a}),r()(),i(10,"app-catalog-variation-tile",9)(11,"brightrail-textarea",10),d("ngModelChange",function(a){return l(e.demoMessage,a)||(e.demoMessage=a),a}),r()(),i(12,"app-catalog-variation-tile",11)(13,"brightrail-textarea",12),d("ngModelChange",function(a){return l(e.demoTerms,a)||(e.demoTerms=a),a}),r()()()(),i(14,"section",0)(15,"h2",1),s(16,"2. Labels & rows"),r(),i(17,"div",2)(18,"app-catalog-variation-tile",13)(19,"brightrail-textarea",14),d("ngModelChange",function(a){return l(e.demoBio,a)||(e.demoBio=a),a}),r()(),i(20,"app-catalog-variation-tile",15)(21,"brightrail-textarea",16),d("ngModelChange",function(a){return l(e.demoFeedback,a)||(e.demoFeedback=a),a}),r()(),i(22,"app-catalog-variation-tile",17)(23,"brightrail-textarea",18),d("ngModelChange",function(a){return l(e.demoShortNote,a)||(e.demoShortNote=a),a}),r()(),i(24,"app-catalog-variation-tile",19)(25,"brightrail-textarea",20),d("ngModelChange",function(a){return l(e.demoMessage,a)||(e.demoMessage=a),a}),r()()()(),i(26,"section",0)(27,"h2",1),s(28,"3. Sizes"),r(),i(29,"p",21),s(30,"xs \xB7 sm \xB7 md \xB7 lg \xB7 xl"),r(),i(31,"div",2)(32,"app-catalog-variation-tile",22)(33,"brightrail-textarea",23),d("ngModelChange",function(a){return l(e.demoValue,a)||(e.demoValue=a),a}),r()(),i(34,"app-catalog-variation-tile",24)(35,"brightrail-textarea",25),d("ngModelChange",function(a){return l(e.demoValue,a)||(e.demoValue=a),a}),r()(),i(36,"app-catalog-variation-tile",26)(37,"brightrail-textarea",27),d("ngModelChange",function(a){return l(e.demoValue,a)||(e.demoValue=a),a}),r()(),i(38,"app-catalog-variation-tile",28)(39,"brightrail-textarea",29),d("ngModelChange",function(a){return l(e.demoValue,a)||(e.demoValue=a),a}),r()(),i(40,"app-catalog-variation-tile",30)(41,"brightrail-textarea",31),d("ngModelChange",function(a){return l(e.demoValue,a)||(e.demoValue=a),a}),r()()()(),i(42,"section",0)(43,"h2",1),s(44,"4. Status states"),r(),i(45,"div",2)(46,"app-catalog-variation-tile",32)(47,"brightrail-textarea",33),d("ngModelChange",function(a){return l(e.demoSummary,a)||(e.demoSummary=a),a}),r()(),i(48,"app-catalog-variation-tile",34)(49,"brightrail-textarea",35),d("ngModelChange",function(a){return l(e.demoAddress,a)||(e.demoAddress=a),a}),r()(),i(50,"app-catalog-variation-tile",36)(51,"brightrail-textarea",37),d("ngModelChange",function(a){return l(e.demoReason,a)||(e.demoReason=a),a}),r()(),i(52,"app-catalog-variation-tile",38)(53,"brightrail-textarea",39),d("ngModelChange",function(a){return l(e.demoInstructions,a)||(e.demoInstructions=a),a}),r()(),i(54,"app-catalog-variation-tile",40)(55,"brightrail-textarea",41),d("ngModelChange",function(a){return l(e.demoLocked,a)||(e.demoLocked=a),a}),r()()()(),i(56,"section",0)(57,"h2",1),s(58,"5. Resize options"),r(),i(59,"div",2)(60,"app-catalog-variation-tile",42)(61,"brightrail-textarea",43),d("ngModelChange",function(a){return l(e.demoFixed,a)||(e.demoFixed=a),a}),r()(),i(62,"app-catalog-variation-tile",44)(63,"brightrail-textarea",45),d("ngModelChange",function(a){return l(e.demoVertical,a)||(e.demoVertical=a),a}),r()(),i(64,"app-catalog-variation-tile",46)(65,"brightrail-textarea",47),d("ngModelChange",function(a){return l(e.demoHorizontal,a)||(e.demoHorizontal=a),a}),r()(),i(66,"app-catalog-variation-tile",48)(67,"brightrail-textarea",49),d("ngModelChange",function(a){return l(e.demoBoth,a)||(e.demoBoth=a),a}),r()()()(),i(68,"section",0)(69,"h2",1),s(70,"6. Form patterns"),r(),i(71,"div",2)(72,"app-catalog-variation-tile",50)(73,"brightrail-textarea",51),d("ngModelChange",function(a){return l(e.demoProject,a)||(e.demoProject=a),a}),r()(),i(74,"app-catalog-variation-tile",52)(75,"brightrail-textarea",53),d("ngModelChange",function(a){return l(e.demoDraft,a)||(e.demoDraft=a),a}),r()(),i(76,"app-catalog-variation-tile",54)(77,"brightrail-textarea",55),d("ngModelChange",function(a){return l(e.demoMessage,a)||(e.demoMessage=a),a}),r()()()(),i(78,"section",0)(79,"h2",1),s(80,"7. Futuristic textarea designs"),r(),i(81,"div",56)(82,"app-catalog-variation-tile",57)(83,"div",58)(84,"span",59),s(85,"Glass"),r(),i(86,"brightrail-textarea",60),d("ngModelChange",function(a){return l(e.futuristicGlassValue,a)||(e.futuristicGlassValue=a),a}),r()()(),i(87,"app-catalog-variation-tile",61)(88,"div",62)(89,"span",59),s(90,"Neon"),r(),i(91,"brightrail-textarea",63),d("ngModelChange",function(a){return l(e.futuristicNeonValue,a)||(e.futuristicNeonValue=a),a}),r()()(),i(92,"app-catalog-variation-tile",64)(93,"div",65)(94,"span",59),s(95,"Cyber"),r(),i(96,"brightrail-textarea",66),d("ngModelChange",function(a){return l(e.futuristicCyberValue,a)||(e.futuristicCyberValue=a),a}),r()()(),i(97,"app-catalog-variation-tile",67)(98,"div",68)(99,"span",59),s(100,"Holo"),r(),i(101,"brightrail-textarea",69),d("ngModelChange",function(a){return l(e.futuristicHoloValue,a)||(e.futuristicHoloValue=a),a}),r()()()()()),g&2&&(t(4),n("snippet",e.s.appearanceFilled),t(),o("ngModel",e.demoDescription),t(),n("snippet",e.s.appearanceOutlined),t(),o("ngModel",e.demoDescription),t(),n("snippet",e.s.appearanceUnderline),t(),o("ngModel",e.demoNotes),t(),n("snippet",e.s.appearanceGhost),t(),o("ngModel",e.demoMessage),t(),n("snippet",e.s.appearanceReadonly),t(),n("rows",3),o("ngModel",e.demoTerms),t(5),n("snippet",e.s.labelWithHelper),t(),n("rows",4),o("ngModel",e.demoBio),t(),n("snippet",e.s.labelRequired),t(),n("required",!0)("rows",4),o("ngModel",e.demoFeedback),t(),n("snippet",e.s.labelCompact),t(),n("rows",2),o("ngModel",e.demoShortNote),t(),n("snippet",e.s.labelNoLabel),t(),n("rows",4),o("ngModel",e.demoMessage),t(7),n("snippet",e.s.sizeXs),t(),n("rows",3),o("ngModel",e.demoValue),t(),n("snippet",e.s.sizeSm),t(),n("rows",3),o("ngModel",e.demoValue),t(),n("snippet",e.s.sizeMd),t(),n("rows",4),o("ngModel",e.demoValue),t(),n("snippet",e.s.sizeLg),t(),n("rows",4),o("ngModel",e.demoValue),t(),n("snippet",e.s.sizeXl),t(),n("rows",5),o("ngModel",e.demoValue),t(5),n("snippet",e.s.statusSuccess),t(),o("ngModel",e.demoSummary),t(),n("snippet",e.s.statusWarning),t(),o("ngModel",e.demoAddress),t(),n("snippet",e.s.statusError),t(),o("ngModel",e.demoReason),t(),n("snippet",e.s.statusInfo),t(),o("ngModel",e.demoInstructions),t(),n("snippet",e.s.statusDisabled),t(),n("disabled",!0),o("ngModel",e.demoLocked),t(5),n("snippet",e.s.resizeNone),t(),n("rows",4),o("ngModel",e.demoFixed),t(),n("snippet",e.s.resizeVertical),t(),n("rows",4),o("ngModel",e.demoVertical),t(),n("snippet",e.s.resizeHorizontal),t(),n("rows",3),o("ngModel",e.demoHorizontal),t(),n("snippet",e.s.resizeBoth),t(),n("rows",3),o("ngModel",e.demoBoth),t(5),n("snippet",e.s.formFullWidth),t(),n("fullWidth",!0)("rows",5),o("ngModel",e.demoProject),t(),n("snippet",e.s.formLoading),t(),n("loading",!0)("rows",4),o("ngModel",e.demoDraft),t(),n("snippet",e.s.formReactive),t(),n("rows",4),o("ngModel",e.demoMessage),t(5),n("snippet",e.s.futuristicGlass),t(4),n("rows",3),o("ngModel",e.futuristicGlassValue),t(),n("snippet",e.s.futuristicNeon),t(4),n("rows",3),o("ngModel",e.futuristicNeonValue),t(),n("snippet",e.s.futuristicCyber),t(4),n("rows",3),o("ngModel",e.futuristicCyberValue),t(),n("snippet",e.s.futuristicHolo),t(4),n("rows",4)("fullWidth",!0),o("ngModel",e.futuristicHoloValue))},dependencies:[w,_,C,M,S,T],styles:["[_nghost-%COMP%]{display:block}.tavc-stack[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.75rem}.tavc-block[_ngcontent-%COMP%]{margin-bottom:1.35rem}.tavc-block__h[_ngcontent-%COMP%]{margin:0 0 .5rem;font-size:.95rem;font-weight:700}.tavc-block__hint[_ngcontent-%COMP%]{margin:0 0 .5rem;font-size:.8125rem;color:var(--ff-muted, #64748b)}"],changeDetection:0})};var W=class m{htmlExamples=v;static \u0275fac=function(g){return new(g||m)};static \u0275cmp=u({type:m,selectors:[["app-textarea-catalog-overview"]],decls:31,vars:1,consts:[[1,"taco"],[1,"taco-hero"],[1,"taco-hero__eyebrow"],[1,"taco-hero__links"],["routerLink","..",1,"taco-link"],["routerLink","/variations",1,"taco-link"],["aria-labelledby","taco-html-examples",1,"taco-code-block"],["id","taco-html-examples"],[1,"taco-code-block__hint"],[1,"taco-pre"]],template:function(g,e){g&1&&(i(0,"div",0)(1,"header",1)(2,"p",2),s(3,"Brightrail \xB7 Textarea \xB7 Variation catalog"),r(),i(4,"h1"),s(5,"Textarea types & variations"),r(),i(6,"p"),s(7," Reference catalog for textarea appearances, sizes, status states, resize options, and form patterns. Click any tile for "),i(8,"strong"),s(9,"View code"),r(),s(10,", then "),i(11,"strong"),s(12,"Copy code"),r(),s(13," to paste into your app (import from "),i(14,"code"),s(15,"brightrail"),r(),s(16,"). "),r(),i(17,"p",3)(18,"a",4),s(19,"\u2190 Textarea playground (live settings)"),r(),i(20,"a",5),s(21,"All variation catalogs"),r()()(),y(22,"app-textarea-variation-catalog"),i(23,"section",6)(24,"h2",7),s(25,"Textarea HTML examples"),r(),i(26,"p",8),s(27,"Typical markup for an outlined field, validation state, and read-only content."),r(),i(28,"pre",9)(29,"code"),s(30),r()()()()),g&2&&(t(30),b(e.htmlExamples))},dependencies:[f,c],styles:["[_nghost-%COMP%]{flex:1 1 auto;min-height:0;overflow:auto}.taco[_ngcontent-%COMP%]{padding:1rem 1.25rem 1.5rem}.taco-hero__eyebrow[_ngcontent-%COMP%]{margin:0 0 .25rem;font-size:.75rem;font-weight:600;letter-spacing:.04em;text-transform:uppercase;color:var(--ff-muted, #64748b)}.taco-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0;font-size:1.5rem}.taco-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:.35rem 0 .5rem;color:var(--ff-muted, #64748b)}.taco-hero__links[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:.75rem 1.25rem}.taco-link[_ngcontent-%COMP%]{color:var(--ff-accent, #2563eb);text-decoration:none;font-weight:600}.taco-code-block[_ngcontent-%COMP%]{margin:1.5rem 0 0;padding-top:1rem;border-top:1px solid var(--ff-border, #e2e8f0)}.taco-code-block[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.1rem;margin:0 0 .35rem}.taco-code-block__hint[_ngcontent-%COMP%]{margin:0 0 .65rem;font-size:.8125rem;color:var(--ff-muted, #64748b)}.taco-pre[_ngcontent-%COMP%]{margin:0;padding:.85rem;border-radius:.5rem;background:var(--ff-surface-muted, #f1f3f4);border:1px solid var(--ff-border, #e2e8f0);overflow:auto;font-size:.8rem}"],changeDetection:0})};export{W as TextareaCatalogOverviewComponent};
