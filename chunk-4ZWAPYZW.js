import{a as h,b as d}from"./chunk-3WPU4EID.js";import{a as u}from"./chunk-YDULXL76.js";import{e as m}from"./chunk-TU4FQAPV.js";import{$a as l,Ga as o,Ya as i,Za as e,_a as t,ua as r,vb as a,wb as g}from"./chunk-K6TWHCOD.js";var v={coreLinear:`<brightrail-stepper [currentStep]="0">
  <brightrail-step label="Account" />
  <brightrail-step label="Profile" />
  <brightrail-step label="Confirm" />
</brightrail-stepper>`,coreProgress:`<brightrail-stepper stepStyle="progress" [currentStep]="1">
  <brightrail-step label="Upload" />
  <brightrail-step label="Process" />
  <brightrail-step label="Complete" />
</brightrail-stepper>`,coreNumbered:`<brightrail-stepper stepStyle="numbered" [currentStep]="0">
  <brightrail-step label="Step one" />
  <brightrail-step label="Step two" />
  <brightrail-step label="Step three" />
</brightrail-stepper>`,orientHorizontal:`<brightrail-stepper [currentStep]="1">
  <brightrail-step label="Shipping" />
  <brightrail-step label="Payment" />
  <brightrail-step label="Review" />
</brightrail-stepper>`,orientVertical:`<brightrail-stepper orientation="vertical" [currentStep]="1">
  <brightrail-step label="Details" description="Enter your information" />
  <brightrail-step label="Shipping" description="Choose shipping method" />
  <brightrail-step label="Payment" description="Add payment details" />
  <brightrail-step label="Review" description="Confirm and place order" />
</brightrail-stepper>`,sizeDefault:`<brightrail-stepper [currentStep]="0">
  <brightrail-step label=" " />
  <brightrail-step label=" " />
  <brightrail-step label=" " />
</brightrail-stepper>`,sizeCompact:`<!-- Compact: --br-stepper-node-size: 1.65rem on host -->
<brightrail-stepper [currentStep]="1">
  <brightrail-step label=" " />
  <brightrail-step label=" " />
  <brightrail-step label=" " />
</brightrail-stepper>`,sizeSmall:`<!-- Small: --br-stepper-node-size: 1.35rem on host -->
<brightrail-stepper [currentStep]="2">
  <brightrail-step label=" " />
  <brightrail-step label=" " />
  <brightrail-step label=" " />
</brightrail-stepper>`,stateCompleted:`<brightrail-stepper [currentStep]="2">
  <brightrail-step label=" " status="completed" />
  <brightrail-step label=" " status="completed" />
  <brightrail-step label=" " status="inactive" />
</brightrail-stepper>`,stateCurrent:`<brightrail-stepper [currentStep]="1">
  <brightrail-step label=" " status="completed" />
  <brightrail-step label=" " status="current" />
  <brightrail-step label=" " status="pending" />
</brightrail-stepper>`,stateErrorDisabled:`<brightrail-stepper [currentStep]="0">
  <brightrail-step label=" " status="inactive" />
  <brightrail-step label=" " status="error" />
  <brightrail-step label=" " status="disabled" />
</brightrail-stepper>`,labelsBelow:`<brightrail-stepper labelPlacement="below" [currentStep]="0">
  <brightrail-step label="Details" />
  <brightrail-step label="Shipping" />
  <brightrail-step label="Review" />
</brightrail-stepper>`,labelsTop:`<brightrail-stepper labelPlacement="top" [currentStep]="1">
  <brightrail-step label="Details" />
  <brightrail-step label="Shipping" />
  <brightrail-step label="Review" />
</brightrail-stepper>`,labelsAlternatingVertical:`<brightrail-stepper orientation="vertical" [currentStep]="0">
  <brightrail-step label="Details" description="Enter your information" />
  <brightrail-step label="Shipping" description="Choose shipping method" />
  <brightrail-step label="Review" description="Confirm and place order" />
</brightrail-stepper>`,workflowOnboarding:`<brightrail-stepper stepStyle="progress" [currentStep]="1">
  <brightrail-step label="Welcome" />
  <brightrail-step label="Profile" />
  <brightrail-step label="Preferences" />
  <brightrail-step label="Finish" />
</brightrail-stepper>`,workflowCheckout:`<brightrail-stepper stepStyle="progress" [currentStep]="2">
  <brightrail-step label="Cart" />
  <brightrail-step label="Shipping" />
  <brightrail-step label="Payment" />
  <brightrail-step label="Confirm" />
</brightrail-stepper>`,workflowApproval:`<brightrail-stepper stepStyle="progress" [currentStep]="3">
  <brightrail-step label="Submit" />
  <brightrail-step label="Review" />
  <brightrail-step label="Approve" />
  <brightrail-step label="Complete" />
</brightrail-stepper>`,formMultiStep:`<brightrail-stepper [currentStep]="1">
  <brightrail-step label="Account" />
  <brightrail-step label="Address" />
  <brightrail-step label="Details" />
  <brightrail-step label="Confirm" />
</brightrail-stepper>`,formWizardValidation:`<brightrail-stepper [currentStep]="1">
  <brightrail-step label="Basics" status="completed" />
  <brightrail-step label="Settings" status="current" />
  <brightrail-step label="Review" status="pending" />
</brightrail-stepper>`,futuristicGlowing:`<brightrail-stepper [currentStep]="1" connectorGap="2px">
  <brightrail-step label="Discover" />
  <brightrail-step label="Configure" />
  <brightrail-step label="Preview" />
  <brightrail-step label="Launch" />
</brightrail-stepper>`,futuristicPill:`<brightrail-stepper [currentStep]="1" stepStyle="progress" connectorGap="0.2rem">
  <brightrail-step label="Plan" />
  <brightrail-step label="Build" />
  <brightrail-step label="Test" />
  <brightrail-step label="Deploy" />
</brightrail-stepper>`,futuristicMinimalLine:`<brightrail-stepper [currentStep]="1" connectorGap="0">
  <brightrail-step label="Start" />
  <brightrail-step label="Configure" />
  <brightrail-step label="Review" />
  <brightrail-step label="Done" />
</brightrail-stepper>`};var S=`<brightrail-stepper [currentStep]="1">
  <brightrail-step label="Shipping" />
  <brightrail-step label="Payment" />
  <brightrail-step label="Review" />
</brightrail-stepper>

<brightrail-stepper stepStyle="progress" [currentStep]="2" ariaLabel="Checkout">
  <brightrail-step label="Cart" />
  <brightrail-step label="Shipping" />
  <brightrail-step label="Payment" />
  <brightrail-step label="Confirm" />
</brightrail-stepper>`;var b=class s{s=v;static \u0275fac=function(n){return new(n||s)};static \u0275cmp=o({type:s,selectors:[["app-stepper-variation-catalog"]],decls:173,vars:44,consts:[[1,"stvc-block"],[1,"stvc-block__h"],[1,"stvc-grid"],["label","Linear stepper",3,"snippet"],[3,"currentStep"],["label","Account"],["label","Profile"],["label","Confirm"],["label","Progress stepper",3,"snippet"],["stepStyle","progress",3,"currentStep"],["label","Upload"],["label","Process"],["label","Complete"],["label","Numbered stepper",3,"snippet"],["stepStyle","numbered",3,"currentStep"],["label","Step one"],["label","Step two"],["label","Step three"],["label","Horizontal",3,"snippet"],["label","Shipping"],["label","Payment"],["label","Review"],["label","Vertical",3,"snippet"],["orientation","vertical",3,"currentStep"],["label","Details","description","Enter your information"],["label","Shipping","description","Choose shipping method"],["label","Payment","description","Add payment details"],["label","Review","description","Confirm and place order"],["label","Default",3,"snippet"],["label"," "],["label","Compact",3,"snippet"],[1,"stvc-size-host--compact"],["label","Small",3,"snippet"],[1,"stvc-size-host--mini"],["label","Completed",3,"snippet"],["label"," ","status","completed"],["label"," ","status","inactive"],["label","Current",3,"snippet"],["label"," ","status","current"],["label"," ","status","pending"],["label","Inactive / Error / Disabled",3,"snippet"],["label"," ","status","error"],["label"," ","status","disabled"],["label","Bottom labels",3,"snippet"],["labelPlacement","below",3,"currentStep"],["label","Details"],["label","Top labels",3,"snippet"],["labelPlacement","top",3,"currentStep"],["label","Alternating (vertical)",3,"snippet"],["label","Onboarding flow",3,"snippet"],["label","Welcome"],["label","Preferences"],["label","Finish"],["label","Checkout flow",3,"snippet"],["label","Cart"],["label","Approval workflow",3,"snippet"],["label","Submit"],["label","Approve"],["label","Multi-step form",3,"snippet"],["label","Address"],["label","Wizard with validation",3,"snippet"],["label","Basics","status","completed"],["label","Settings","status","current"],["label","Review","status","pending"],[1,"stvc-note"],["aria-labelledby","stvc-a11y-title",1,"stvc-block"],["id","stvc-a11y-title",1,"stvc-block__h"],[1,"stvc-a11y"],[1,"stvc-a11y__link-hint"],[1,"stvc-grid","stvc-grid--wide"],["label","Glowing progress",3,"snippet"],[1,"stvc-futuristic"],["connectorGap","2px",3,"currentStep"],["label","Discover"],["label","Configure"],["label","Preview"],["label","Launch"],["label","Pill indicator",3,"snippet"],["stepStyle","progress","connectorGap","0.2rem",3,"currentStep"],["label","Plan"],["label","Build"],["label","Test"],["label","Deploy"],["label","Minimal line",3,"snippet"],["connectorGap","0",3,"currentStep"],["label","Start"],["label","Done"]],template:function(n,p){n&1&&(e(0,"section",0)(1,"h2",1),a(2,"1. Core stepper types"),t(),e(3,"div",2)(4,"app-catalog-variation-tile",3)(5,"brightrail-stepper",4),l(6,"brightrail-step",5)(7,"brightrail-step",6)(8,"brightrail-step",7),t()(),e(9,"app-catalog-variation-tile",8)(10,"brightrail-stepper",9),l(11,"brightrail-step",10)(12,"brightrail-step",11)(13,"brightrail-step",12),t()(),e(14,"app-catalog-variation-tile",13)(15,"brightrail-stepper",14),l(16,"brightrail-step",15)(17,"brightrail-step",16)(18,"brightrail-step",17),t()()()(),e(19,"section",0)(20,"h2",1),a(21,"2. Orientations"),t(),e(22,"div",2)(23,"app-catalog-variation-tile",18)(24,"brightrail-stepper",4),l(25,"brightrail-step",19)(26,"brightrail-step",20)(27,"brightrail-step",21),t()(),e(28,"app-catalog-variation-tile",22)(29,"brightrail-stepper",23),l(30,"brightrail-step",24)(31,"brightrail-step",25)(32,"brightrail-step",26)(33,"brightrail-step",27),t()()()(),e(34,"section",0)(35,"h2",1),a(36,"3. Sizes"),t(),e(37,"div",2)(38,"app-catalog-variation-tile",28)(39,"brightrail-stepper",4),l(40,"brightrail-step",29)(41,"brightrail-step",29)(42,"brightrail-step",29),t()(),e(43,"app-catalog-variation-tile",30)(44,"div",31)(45,"brightrail-stepper",4),l(46,"brightrail-step",29)(47,"brightrail-step",29)(48,"brightrail-step",29),t()()(),e(49,"app-catalog-variation-tile",32)(50,"div",33)(51,"brightrail-stepper",4),l(52,"brightrail-step",29)(53,"brightrail-step",29)(54,"brightrail-step",29),t()()()()(),e(55,"section",0)(56,"h2",1),a(57,"4. Step states"),t(),e(58,"div",2)(59,"app-catalog-variation-tile",34)(60,"brightrail-stepper",4),l(61,"brightrail-step",35)(62,"brightrail-step",35)(63,"brightrail-step",36),t()(),e(64,"app-catalog-variation-tile",37)(65,"brightrail-stepper",4),l(66,"brightrail-step",35)(67,"brightrail-step",38)(68,"brightrail-step",39),t()(),e(69,"app-catalog-variation-tile",40)(70,"brightrail-stepper",4),l(71,"brightrail-step",36)(72,"brightrail-step",41)(73,"brightrail-step",42),t()()()(),e(74,"section",0)(75,"h2",1),a(76,"5. Label placements"),t(),e(77,"div",2)(78,"app-catalog-variation-tile",43)(79,"brightrail-stepper",44),l(80,"brightrail-step",45)(81,"brightrail-step",19)(82,"brightrail-step",21),t()(),e(83,"app-catalog-variation-tile",46)(84,"brightrail-stepper",47),l(85,"brightrail-step",45)(86,"brightrail-step",19)(87,"brightrail-step",21),t()(),e(88,"app-catalog-variation-tile",48)(89,"brightrail-stepper",23),l(90,"brightrail-step",24)(91,"brightrail-step",25)(92,"brightrail-step",27),t()()()(),e(93,"section",0)(94,"h2",1),a(95,"6. Workflow examples"),t(),e(96,"div",2)(97,"app-catalog-variation-tile",49)(98,"brightrail-stepper",9),l(99,"brightrail-step",50)(100,"brightrail-step",6)(101,"brightrail-step",51)(102,"brightrail-step",52),t()(),e(103,"app-catalog-variation-tile",53)(104,"brightrail-stepper",9),l(105,"brightrail-step",54)(106,"brightrail-step",19)(107,"brightrail-step",20)(108,"brightrail-step",7),t()(),e(109,"app-catalog-variation-tile",55)(110,"brightrail-stepper",9),l(111,"brightrail-step",56)(112,"brightrail-step",21)(113,"brightrail-step",57)(114,"brightrail-step",12),t()()()(),e(115,"section",0)(116,"h2",1),a(117,"7. Form / wizard patterns"),t(),e(118,"div",2)(119,"app-catalog-variation-tile",58)(120,"brightrail-stepper",4),l(121,"brightrail-step",5)(122,"brightrail-step",59)(123,"brightrail-step",45)(124,"brightrail-step",7),t()(),e(125,"app-catalog-variation-tile",60)(126,"brightrail-stepper",4),l(127,"brightrail-step",61)(128,"brightrail-step",62)(129,"brightrail-step",63),t(),e(130,"p",64),a(131,"Please complete all required fields to continue."),t()()()(),e(132,"section",65)(133,"h2",66),a(134,"8. Accessibility tips"),t(),e(135,"aside",67)(136,"ul")(137,"li"),a(138,"Use clear, short labels users can scan quickly."),t(),e(139,"li"),a(140,"Keep keyboard focus visible on active step controls."),t(),e(141,"li"),a(142,"Expose active step state with "),e(143,"code"),a(144,'aria-current="step"'),t(),a(145,"."),t()(),e(146,"p",68),a(147," See the stepper playground for live keyboard and screen-reader guidance. "),t()()(),e(148,"section",0)(149,"h2",1),a(150,"9. Futuristic stepper designs"),t(),e(151,"div",69)(152,"app-catalog-variation-tile",70)(153,"div",71)(154,"brightrail-stepper",72),l(155,"brightrail-step",73)(156,"brightrail-step",74)(157,"brightrail-step",75)(158,"brightrail-step",76),t()()(),e(159,"app-catalog-variation-tile",77)(160,"div",71)(161,"brightrail-stepper",78),l(162,"brightrail-step",79)(163,"brightrail-step",80)(164,"brightrail-step",81)(165,"brightrail-step",82),t()()(),e(166,"app-catalog-variation-tile",83)(167,"div",71)(168,"brightrail-stepper",84),l(169,"brightrail-step",85)(170,"brightrail-step",74)(171,"brightrail-step",21)(172,"brightrail-step",86),t()()()()()),n&2&&(r(4),i("snippet",p.s.coreLinear),r(),i("currentStep",0),r(4),i("snippet",p.s.coreProgress),r(),i("currentStep",1),r(4),i("snippet",p.s.coreNumbered),r(),i("currentStep",0),r(8),i("snippet",p.s.orientHorizontal),r(),i("currentStep",1),r(4),i("snippet",p.s.orientVertical),r(),i("currentStep",1),r(9),i("snippet",p.s.sizeDefault),r(),i("currentStep",0),r(4),i("snippet",p.s.sizeCompact),r(2),i("currentStep",1),r(4),i("snippet",p.s.sizeSmall),r(2),i("currentStep",2),r(8),i("snippet",p.s.stateCompleted),r(),i("currentStep",2),r(4),i("snippet",p.s.stateCurrent),r(),i("currentStep",1),r(4),i("snippet",p.s.stateErrorDisabled),r(),i("currentStep",0),r(8),i("snippet",p.s.labelsBelow),r(),i("currentStep",0),r(4),i("snippet",p.s.labelsTop),r(),i("currentStep",1),r(4),i("snippet",p.s.labelsAlternatingVertical),r(),i("currentStep",0),r(8),i("snippet",p.s.workflowOnboarding),r(),i("currentStep",1),r(5),i("snippet",p.s.workflowCheckout),r(),i("currentStep",2),r(5),i("snippet",p.s.workflowApproval),r(),i("currentStep",3),r(9),i("snippet",p.s.formMultiStep),r(),i("currentStep",1),r(5),i("snippet",p.s.formWizardValidation),r(),i("currentStep",1),r(26),i("snippet",p.s.futuristicGlowing),r(2),i("currentStep",1),r(5),i("snippet",p.s.futuristicPill),r(2),i("currentStep",1),r(5),i("snippet",p.s.futuristicMinimalLine),r(2),i("currentStep",1))},dependencies:[d,h,u],styles:["[_nghost-%COMP%]{display:block}.stvc-block[_ngcontent-%COMP%]{margin-bottom:1.35rem}.stvc-block__h[_ngcontent-%COMP%]{margin:0 0 .5rem;font-size:.95rem;font-weight:700}.stvc-grid[_ngcontent-%COMP%]{display:grid;gap:.65rem;grid-template-columns:repeat(auto-fill,minmax(14rem,1fr));align-items:start}.stvc-grid--wide[_ngcontent-%COMP%]{grid-template-columns:1fr}.stvc-a11y[_ngcontent-%COMP%]{margin:0;padding:.85rem 1rem;border:1px solid var(--ff-border, #e2e8f0);border-radius:.65rem;background:var(--ff-surface-muted, #f8fafc);font-size:.8rem}.stvc-a11y[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:0 0 .5rem;padding-left:1rem;display:grid;gap:.35rem}.stvc-a11y__title[_ngcontent-%COMP%]{margin:0 0 .45rem;font-size:.95rem;font-weight:700}.stvc-note[_ngcontent-%COMP%]{margin:.45rem 0 0;border:1px solid rgba(26,115,232,.25);background:#1a73e814;color:#1a73e8;border-radius:.4rem;padding:.35rem .5rem;font-size:.74rem}.stvc-size-host--compact[_ngcontent-%COMP%]{--br-stepper-node-size: 1.65rem}.stvc-size-host--mini[_ngcontent-%COMP%]{--br-stepper-node-size: 1.35rem}.stvc-futuristic[_ngcontent-%COMP%]{padding:.45rem .55rem;border-radius:.5rem;background:linear-gradient(90deg,#fffffff2,#ebf3ffeb);border:1px solid var(--ff-border, #e2e8f0)}"],changeDetection:0})};var f=class s{htmlExamples=S;static \u0275fac=function(n){return new(n||s)};static \u0275cmp=o({type:s,selectors:[["app-stepper-catalog-overview"]],decls:31,vars:1,consts:[[1,"cco"],[1,"cco-hero"],[1,"cco-hero__eyebrow"],[1,"cco-hero__links"],["routerLink","..",1,"cco-link"],["routerLink","/variations",1,"cco-link"],["aria-labelledby","cco-html-examples",1,"cco-code-block"],["id","cco-html-examples"],[1,"cco-code-block__hint"],[1,"cco-pre"]],template:function(n,p){n&1&&(e(0,"div",0)(1,"header",1)(2,"p",2),a(3,"Brightrail \xB7 Stepper \xB7 Variation catalog"),t(),e(4,"h1"),a(5,"Stepper types & variations"),t(),e(6,"p"),a(7," Build clear, guided progress experiences with flexible stepper patterns. Click any tile for "),e(8,"strong"),a(9,"View code"),t(),a(10,", then "),e(11,"strong"),a(12,"Copy code"),t(),a(13," (import from "),e(14,"code"),a(15,"brightrail"),t(),a(16,"). "),t(),e(17,"p",3)(18,"a",4),a(19,"\u2190 Stepper playground (live settings)"),t(),e(20,"a",5),a(21,"All variation catalogs"),t()()(),l(22,"app-stepper-variation-catalog"),e(23,"section",6)(24,"h2",7),a(25,"Stepper HTML examples"),t(),e(26,"p",8),a(27,"Linear and progress-style checkout steppers."),t(),e(28,"pre",9)(29,"code"),a(30),t()()()()),n&2&&(r(30),g(p.htmlExamples))},dependencies:[m,b],styles:["[_nghost-%COMP%]{flex:1 1 auto;min-height:0;overflow:auto}.cco[_ngcontent-%COMP%]{padding:1rem 1.25rem 1.5rem}.cco-hero__eyebrow[_ngcontent-%COMP%]{margin:0 0 .25rem;font-size:.75rem;font-weight:600;letter-spacing:.04em;text-transform:uppercase;color:var(--ff-muted, #64748b)}.cco-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0;font-size:1.5rem}.cco-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:.35rem 0 .5rem;color:var(--ff-muted, #64748b)}.cco-hero__links[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:.75rem 1.25rem}.cco-link[_ngcontent-%COMP%]{color:var(--ff-accent, #2563eb);text-decoration:none;font-weight:600}.cco-code-block[_ngcontent-%COMP%]{margin:1.5rem 0 0;padding-top:1rem;border-top:1px solid var(--ff-border, #e2e8f0)}.cco-code-block[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.1rem;margin:0 0 .35rem}.cco-code-block__hint[_ngcontent-%COMP%]{margin:0 0 .65rem;font-size:.8125rem;color:var(--ff-muted, #64748b)}.cco-pre[_ngcontent-%COMP%]{margin:0;padding:.85rem;border-radius:.5rem;background:var(--ff-surface-muted, #f1f3f4);border:1px solid var(--ff-border, #e2e8f0);overflow:auto;font-size:.8rem}"],changeDetection:0})};export{f as StepperCatalogOverviewComponent};
