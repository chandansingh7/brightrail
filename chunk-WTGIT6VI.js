import{a as x}from"./chunk-FJ7PM77H.js";import{a as c,b as u,c as f,d as v,e as y}from"./chunk-LQXSYBG5.js";import"./chunk-63ZAJDYR.js";import"./chunk-AJAFYN6V.js";import{e as g}from"./chunk-FBGATJ5M.js";import{a as h}from"./chunk-GYG4PR7L.js";import"./chunk-UCBO3RDG.js";import"./chunk-3QMANAY7.js";import"./chunk-573ITFZ2.js";import"./chunk-3SQNCDXW.js";import"./chunk-NNTI4JQ5.js";import{Ca as m,Va as r,Wa as t,Xa as i,Ya as o,sb as e,ta as a,tb as b}from"./chunk-M22WAZLT.js";var S={sizeSm:`<brightrail-modal [isOpen]="true" [contain]="true" size="sm" appearance="default">
  <brightrail-modal-header>
    <div brightrailModalTitle>Small dialog</div>
  </brightrail-modal-header>
  <brightrail-modal-body><p>Compact confirmation or notice.</p></brightrail-modal-body>
</brightrail-modal>`,sizeMd:`<brightrail-modal [isOpen]="true" [contain]="true" size="md" appearance="default">
  <brightrail-modal-header>
    <div brightrailModalTitle>Medium dialog</div>
  </brightrail-modal-header>
  <brightrail-modal-body><p>Default modal width for most flows.</p></brightrail-modal-body>
</brightrail-modal>`,sizeLg:`<brightrail-modal [isOpen]="true" [contain]="true" size="lg" appearance="default">
  <brightrail-modal-header>
    <div brightrailModalTitle>Large dialog</div>
  </brightrail-modal-header>
  <brightrail-modal-body><p>Forms, wizards, and rich content.</p></brightrail-modal-body>
</brightrail-modal>`,sizeXl:`<brightrail-modal [isOpen]="true" [contain]="true" size="xl" appearance="default">
  <brightrail-modal-header>
    <div brightrailModalTitle>Extra large</div>
  </brightrail-modal-header>
  <brightrail-modal-body><p>Wide layouts and multi-column content.</p></brightrail-modal-body>
</brightrail-modal>`,appearanceDefault:`<brightrail-modal [isOpen]="true" [contain]="true" size="md" appearance="default">
  <brightrail-modal-header>
    <div brightrailModalTitle>Workspace saved</div>
  </brightrail-modal-header>
  <brightrail-modal-body><p>Neutral chrome for informational dialogs.</p></brightrail-modal-body>
  <brightrail-modal-footer>
    <brightrail-button variant="primary" size="sm">Got it</brightrail-button>
  </brightrail-modal-footer>
</brightrail-modal>`,appearanceDanger:`<brightrail-modal [isOpen]="true" [contain]="true" size="md" appearance="danger">
  <brightrail-modal-header>
    <div brightrailModalTitle>Delete project?</div>
  </brightrail-modal-header>
  <brightrail-modal-body><p>This action cannot be undone.</p></brightrail-modal-body>
  <brightrail-modal-footer>
    <brightrail-button variant="outline" size="sm">Cancel</brightrail-button>
    <brightrail-button variant="danger" size="sm">Delete</brightrail-button>
  </brightrail-modal-footer>
</brightrail-modal>`,confirmDestructive:`<brightrail-modal [isOpen]="true" [contain]="true" size="md" appearance="danger">
  <brightrail-modal-header>
    <div brightrailModalTitle>Delete project?</div>
  </brightrail-modal-header>
  <brightrail-modal-body>
    <p>Permanently removes the project and linked files.</p>
  </brightrail-modal-body>
  <brightrail-modal-footer>
    <brightrail-button variant="outline" size="sm">Cancel</brightrail-button>
    <brightrail-button variant="danger" size="sm">Delete</brightrail-button>
  </brightrail-modal-footer>
</brightrail-modal>`,confirmAcknowledge:`<brightrail-modal [isOpen]="true" [contain]="true" size="sm" appearance="default">
  <brightrail-modal-header>
    <div brightrailModalTitle>Invitation sent</div>
  </brightrail-modal-header>
  <brightrail-modal-body><p>Teammates receive email invites with join instructions.</p></brightrail-modal-body>
  <brightrail-modal-footer>
    <brightrail-button variant="primary" size="sm">Got it</brightrail-button>
  </brightrail-modal-footer>
</brightrail-modal>`,formRename:`<brightrail-modal [isOpen]="true" [contain]="true" size="md" appearance="default">
  <brightrail-modal-header>
    <div brightrailModalTitle>Rename project</div>
  </brightrail-modal-header>
  <brightrail-modal-body>
    <p>Pick a concise name for navigation and billing.</p>
    <label for="project-name">Project name</label>
    <input id="project-name" type="text" name="projectName" />
  </brightrail-modal-body>
  <brightrail-modal-footer>
    <brightrail-button variant="outline" size="sm">Cancel</brightrail-button>
    <brightrail-button variant="primary" size="sm">Continue</brightrail-button>
  </brightrail-modal-footer>
</brightrail-modal>`,formSubmit:`<form (submit)="onSubmit($event)">
  <brightrail-modal [isOpen]="true" [contain]="true" size="md" appearance="default">
    <brightrail-modal-header>
      <div brightrailModalTitle>Create workspace</div>
    </brightrail-modal-header>
    <brightrail-modal-body>
      <label for="workspace-name">Workspace name</label>
      <input id="workspace-name" type="text" name="workspaceName" />
    </brightrail-modal-body>
    <brightrail-modal-footer>
      <brightrail-button variant="outline" size="sm" type="button">Cancel</brightrail-button>
      <brightrail-button variant="primary" size="sm" type="submit">Submit</brightrail-button>
    </brightrail-modal-footer>
  </brightrail-modal>
</form>`,patternLoading:`<brightrail-modal [isOpen]="true" [contain]="true" size="md" appearance="default">
  <brightrail-modal-header>
    <div brightrailModalTitle>Publishing changes</div>
  </brightrail-modal-header>
  <brightrail-modal-body>
  <!-- spinner + status copy -->
  </brightrail-modal-body>
  <brightrail-modal-footer>
    <brightrail-button variant="primary" size="sm" [disabled]="true">Please wait</brightrail-button>
  </brightrail-modal-footer>
</brightrail-modal>`,patternSuccess:`<brightrail-modal [isOpen]="true" [contain]="true" size="sm" appearance="default">
  <brightrail-modal-header>
    <div brightrailModalTitle>Invitation sent</div>
  </brightrail-modal-header>
  <brightrail-modal-body><p>Teammates receive email invites.</p></brightrail-modal-body>
  <brightrail-modal-footer>
    <brightrail-button variant="primary" size="sm">Done</brightrail-button>
  </brightrail-modal-footer>
</brightrail-modal>`,patternErrorRetry:`<brightrail-modal [isOpen]="true" [contain]="true" size="md" appearance="default">
  <brightrail-modal-header>
    <div brightrailModalTitle>Sync failed</div>
  </brightrail-modal-header>
  <brightrail-modal-body><p>We could not reach the sync service.</p></brightrail-modal-body>
  <brightrail-modal-footer>
    <brightrail-button variant="outline" size="sm">Cancel</brightrail-button>
    <brightrail-button variant="primary" size="sm">Retry</brightrail-button>
  </brightrail-modal-footer>
</brightrail-modal>`,exampleMarkup:`<brightrail-modal
  [isOpen]="modalOpen()"
  [contain]="true"
  size="md"
  appearance="danger"
  [labelledBy]="'modal-title'"
  (backdropDismiss)="modalOpen.set(false)"
  (closed)="modalOpen.set(false)"
>
  <brightrail-modal-header>
    <div brightrailModalTitle id="modal-title">Delete project?</div>
  </brightrail-modal-header>
  <brightrail-modal-body>
    <p>This permanently removes the project and linked integrations.</p>
  </brightrail-modal-body>
  <brightrail-modal-footer>
    <brightrail-button variant="outline" size="sm" (click)="modalOpen.set(false)">Cancel</brightrail-button>
    <brightrail-button variant="danger" size="sm" (click)="modalOpen.set(false)">Delete</brightrail-button>
  </brightrail-modal-footer>
</brightrail-modal>`,futuristicGlass:`<div class="ff-future-shell ff-future-shell--glass">
  <span class="ff-future-shell__label" aria-hidden="true">Glass</span>
  <brightrail-modal [isOpen]="true" [contain]="true" size="sm" appearance="default">
    <brightrail-modal-header>
      <div brightrailModalTitle>Workspace saved</div>
    </brightrail-modal-header>
    <brightrail-modal-body><p>Glassmorphism shell for lightweight confirmations.</p></brightrail-modal-body>
    <brightrail-modal-footer>
      <brightrail-button variant="primary" size="sm">Got it</brightrail-button>
    </brightrail-modal-footer>
  </brightrail-modal>
</div>`,futuristicNeon:`<div class="ff-future-shell ff-future-shell--neon">
  <span class="ff-future-shell__label" aria-hidden="true">Neon</span>
  <brightrail-modal [isOpen]="true" [contain]="true" size="sm" appearance="default">
    <brightrail-modal-header>
      <div brightrailModalTitle>Sync node online</div>
    </brightrail-modal-header>
    <brightrail-modal-body><p>Fleet telemetry is streaming in real time.</p></brightrail-modal-body>
    <brightrail-modal-footer>
      <brightrail-button variant="primary" size="sm">Acknowledge</brightrail-button>
    </brightrail-modal-footer>
  </brightrail-modal>
</div>`,futuristicCyber:`<div class="ff-future-shell ff-future-shell--cyber">
  <span class="ff-future-shell__label" aria-hidden="true">Cyber</span>
  <div class="ff-future-cyber-frame">
    <brightrail-modal [isOpen]="true" [contain]="true" size="sm" appearance="danger">
      <brightrail-modal-header>
        <div brightrailModalTitle>Deploy to production?</div>
      </brightrail-modal-header>
      <brightrail-modal-body><p>This pushes the current build to all edge nodes.</p></brightrail-modal-body>
      <brightrail-modal-footer>
        <brightrail-button variant="outline" size="sm">Abort</brightrail-button>
        <brightrail-button variant="danger" size="sm">Deploy</brightrail-button>
      </brightrail-modal-footer>
    </brightrail-modal>
  </div>
</div>`,futuristicHolo:`<div class="ff-future-shell ff-future-shell--holo">
  <span class="ff-future-shell__label" aria-hidden="true">Holo</span>
  <brightrail-modal [isOpen]="true" [contain]="true" size="sm" appearance="default">
    <brightrail-modal-header>
      <div brightrailModalTitle>Mission briefing</div>
    </brightrail-modal-header>
    <brightrail-modal-body><p>Holographic panel for immersive status readouts.</p></brightrail-modal-body>
    <brightrail-modal-footer>
      <brightrail-button variant="primary" size="sm">Continue</brightrail-button>
    </brightrail-modal-footer>
  </brightrail-modal>
</div>`};var E=`<brightrail-modal
  [isOpen]="modalOpen()"
  [contain]="true"
  size="md"
  appearance="danger"
  [labelledBy]="'delete-project-title'"
  (backdropDismiss)="modalOpen.set(false)"
  (closed)="modalOpen.set(false)"
>
  <brightrail-modal-header>
    <div brightrailModalTitle id="delete-project-title">Delete project?</div>
  </brightrail-modal-header>
  <brightrail-modal-body>
    <p>This action will permanently remove the selected project and its files.</p>
  </brightrail-modal-body>
  <brightrail-modal-footer>
    <brightrail-button variant="outline" size="sm" (click)="modalOpen.set(false)">Cancel</brightrail-button>
    <brightrail-button variant="danger" size="sm" (click)="modalOpen.set(false)">Delete</brightrail-button>
  </brightrail-modal-footer>
</brightrail-modal>`;var p=class d{s=S;static \u0275fac=function(n){return new(n||d)};static \u0275cmp=m({type:d,selectors:[["app-modal-variation-catalog"]],decls:273,vars:56,consts:[[1,"mvc-block"],[1,"mvc-block__h"],[1,"mvc-block__hint"],[1,"mvc-grid","mvc-grid--modals"],["label","Small (sm)",3,"snippet"],[1,"mvc-shell","mvc-shell--sm"],["size","sm","appearance","default",3,"isOpen","contain"],["brightrailModalTitle",""],[1,"mvc-body-line"],["label","Medium (md)",3,"snippet"],[1,"mvc-shell"],["size","md","appearance","default",3,"isOpen","contain"],["label","Large (lg)",3,"snippet"],[1,"mvc-shell","mvc-shell--tall"],["size","lg","appearance","default",3,"isOpen","contain"],["label","Extra large (xl)",3,"snippet"],["size","xl","appearance","default",3,"isOpen","contain"],["label","Default",3,"snippet"],["variant","primary","size","sm"],["label","Danger",3,"snippet"],["size","md","appearance","danger",3,"isOpen","contain"],["variant","outline","size","sm"],["variant","danger","size","sm"],["label","Destructive confirm",3,"snippet"],["label","Acknowledge",3,"snippet"],["label","Rename flow",3,"snippet"],["for","mvc-rename",1,"mvc-field-label"],["id","mvc-rename","type","text","value","Northstar rollout",1,"mvc-field-input"],["label","Input + submit",3,"snippet"],["for","mvc-workspace",1,"mvc-field-label"],["id","mvc-workspace","type","text","placeholder","Acme workspace",1,"mvc-field-input"],["label","Loading",3,"snippet"],["role","status","aria-live","polite",1,"mvc-loading"],["aria-hidden","true",1,"mvc-loading__spin"],["variant","primary","size","sm",3,"disabled"],["label","Success",3,"snippet"],["label","Error + retry",3,"snippet"],["label","Baseline destructive dialog",3,"snippet"],[1,"mvc-shell","mvc-shell--example"],["size","md","appearance","danger",3,"isOpen","contain","labelledBy"],["brightrailModalTitle","","id","mvc-example-title"],[1,"ff-future-grid"],["label","Glass command center",3,"snippet"],[1,"ff-future-shell","ff-future-shell--glass"],["aria-hidden","true",1,"ff-future-shell__label"],["label","Neon sync alert",3,"snippet"],[1,"ff-future-shell","ff-future-shell--neon"],["label","Cyber deploy gate",3,"snippet"],[1,"ff-future-shell","ff-future-shell--cyber"],[1,"ff-future-cyber-frame"],["aria-hidden","true",1,"ff-future-cyber-corner","ff-future-cyber-corner--tl"],["aria-hidden","true",1,"ff-future-cyber-corner","ff-future-cyber-corner--tr"],["aria-hidden","true",1,"ff-future-cyber-corner","ff-future-cyber-corner--bl"],["aria-hidden","true",1,"ff-future-cyber-corner","ff-future-cyber-corner--br"],["size","sm","appearance","danger",3,"isOpen","contain"],["label","Holo briefing",3,"snippet"],[1,"ff-future-shell","ff-future-shell--holo"]],template:function(n,l){n&1&&(t(0,"section",0)(1,"h2",1),e(2,"1. Modal sizes"),i(),t(3,"p",2),e(4,"All previews use "),t(5,"code"),e(6,'[contain]="true"'),i(),e(7," with static open dialogs inside the tile shell."),i(),t(8,"div",3)(9,"app-catalog-variation-tile",4)(10,"div",5)(11,"brightrail-modal",6)(12,"brightrail-modal-header")(13,"div",7),e(14,"Small dialog"),i()(),t(15,"brightrail-modal-body")(16,"p",8),e(17,"Compact confirmation or notice."),i()()()()(),t(18,"app-catalog-variation-tile",9)(19,"div",10)(20,"brightrail-modal",11)(21,"brightrail-modal-header")(22,"div",7),e(23,"Medium dialog"),i()(),t(24,"brightrail-modal-body")(25,"p",8),e(26,"Default width for most flows."),i()()()()(),t(27,"app-catalog-variation-tile",12)(28,"div",13)(29,"brightrail-modal",14)(30,"brightrail-modal-header")(31,"div",7),e(32,"Large dialog"),i()(),t(33,"brightrail-modal-body")(34,"p",8),e(35,"Forms, wizards, and rich content."),i()()()()(),t(36,"app-catalog-variation-tile",15)(37,"div",13)(38,"brightrail-modal",16)(39,"brightrail-modal-header")(40,"div",7),e(41,"Extra large"),i()(),t(42,"brightrail-modal-body")(43,"p",8),e(44,"Wide layouts and multi-column content."),i()()()()()()(),t(45,"section",0)(46,"h2",1),e(47,"2. Appearances"),i(),t(48,"div",3)(49,"app-catalog-variation-tile",17)(50,"div",10)(51,"brightrail-modal",11)(52,"brightrail-modal-header")(53,"div",7),e(54,"Workspace saved"),i()(),t(55,"brightrail-modal-body")(56,"p",8),e(57,"Neutral chrome for informational dialogs."),i()(),t(58,"brightrail-modal-footer")(59,"brightrail-button",18),e(60,"Got it"),i()()()()(),t(61,"app-catalog-variation-tile",19)(62,"div",10)(63,"brightrail-modal",20)(64,"brightrail-modal-header")(65,"div",7),e(66,"Delete project?"),i()(),t(67,"brightrail-modal-body")(68,"p",8),e(69,"Destructive accent for irreversible actions."),i()(),t(70,"brightrail-modal-footer")(71,"brightrail-button",21),e(72,"Cancel"),i(),t(73,"brightrail-button",22),e(74,"Delete"),i()()()()()()(),t(75,"section",0)(76,"h2",1),e(77,"3. Confirmation dialogs"),i(),t(78,"div",3)(79,"app-catalog-variation-tile",23)(80,"div",10)(81,"brightrail-modal",20)(82,"brightrail-modal-header")(83,"div",7),e(84,"Delete project?"),i()(),t(85,"brightrail-modal-body")(86,"p",8),e(87,"Permanently removes the project and linked files."),i()(),t(88,"brightrail-modal-footer")(89,"brightrail-button",21),e(90,"Cancel"),i(),t(91,"brightrail-button",22),e(92,"Delete"),i()()()()(),t(93,"app-catalog-variation-tile",24)(94,"div",5)(95,"brightrail-modal",6)(96,"brightrail-modal-header")(97,"div",7),e(98,"Invitation sent"),i()(),t(99,"brightrail-modal-body")(100,"p",8),e(101,"Teammates receive email invites with join instructions."),i()(),t(102,"brightrail-modal-footer")(103,"brightrail-button",18),e(104,"Got it"),i()()()()()()(),t(105,"section",0)(106,"h2",1),e(107,"4. Form modals"),i(),t(108,"div",3)(109,"app-catalog-variation-tile",25)(110,"div",13)(111,"brightrail-modal",11)(112,"brightrail-modal-header")(113,"div",7),e(114,"Rename project"),i()(),t(115,"brightrail-modal-body")(116,"p",8),e(117,"Pick a concise name for navigation and billing."),i(),t(118,"label",26),e(119,"Project name"),i(),o(120,"input",27),i(),t(121,"brightrail-modal-footer")(122,"brightrail-button",21),e(123,"Cancel"),i(),t(124,"brightrail-button",18),e(125,"Continue"),i()()()()(),t(126,"app-catalog-variation-tile",28)(127,"div",13)(128,"brightrail-modal",11)(129,"brightrail-modal-header")(130,"div",7),e(131,"Create workspace"),i()(),t(132,"brightrail-modal-body")(133,"label",29),e(134,"Workspace name"),i(),o(135,"input",30),i(),t(136,"brightrail-modal-footer")(137,"brightrail-button",21),e(138,"Cancel"),i(),t(139,"brightrail-button",18),e(140,"Submit"),i()()()()()()(),t(141,"section",0)(142,"h2",1),e(143,"5. Loading & success patterns"),i(),t(144,"div",3)(145,"app-catalog-variation-tile",31)(146,"div",10)(147,"brightrail-modal",11)(148,"brightrail-modal-header")(149,"div",7),e(150,"Publishing changes"),i()(),t(151,"brightrail-modal-body")(152,"div",32),o(153,"span",33),t(154,"p",8),e(155,"Hang tight while we apply updates."),i()()(),t(156,"brightrail-modal-footer")(157,"brightrail-button",34),e(158,"Please wait"),i()()()()(),t(159,"app-catalog-variation-tile",35)(160,"div",5)(161,"brightrail-modal",6)(162,"brightrail-modal-header")(163,"div",7),e(164,"Invitation sent"),i()(),t(165,"brightrail-modal-body")(166,"p",8),e(167,"Teammates receive email invites."),i()(),t(168,"brightrail-modal-footer")(169,"brightrail-button",18),e(170,"Done"),i()()()()(),t(171,"app-catalog-variation-tile",36)(172,"div",10)(173,"brightrail-modal",11)(174,"brightrail-modal-header")(175,"div",7),e(176,"Sync failed"),i()(),t(177,"brightrail-modal-body")(178,"p",8),e(179,"We could not reach the sync service."),i()(),t(180,"brightrail-modal-footer")(181,"brightrail-button",21),e(182,"Cancel"),i(),t(183,"brightrail-button",18),e(184,"Retry"),i()()()()()()(),t(185,"section",0)(186,"h2",1),e(187,"6. Example modal markup"),i(),t(188,"app-catalog-variation-tile",37)(189,"div",38)(190,"brightrail-modal",39)(191,"brightrail-modal-header")(192,"div",40),e(193,"Delete project?"),i()(),t(194,"brightrail-modal-body")(195,"p",8),e(196,"This permanently removes the project and linked integrations."),i()(),t(197,"brightrail-modal-footer")(198,"brightrail-button",21),e(199,"Cancel"),i(),t(200,"brightrail-button",22),e(201,"Delete"),i()()()()()(),t(202,"section",0)(203,"h2",1),e(204,"7. Futuristic modal designs"),i(),t(205,"div",41)(206,"app-catalog-variation-tile",42)(207,"div",43)(208,"span",44),e(209,"Glass"),i(),t(210,"div",5)(211,"brightrail-modal",6)(212,"brightrail-modal-header")(213,"div",7),e(214,"Workspace saved"),i()(),t(215,"brightrail-modal-body")(216,"p",8),e(217,"Glassmorphism shell for lightweight confirmations."),i()(),t(218,"brightrail-modal-footer")(219,"brightrail-button",18),e(220,"Got it"),i()()()()()(),t(221,"app-catalog-variation-tile",45)(222,"div",46)(223,"span",44),e(224,"Neon"),i(),t(225,"div",5)(226,"brightrail-modal",6)(227,"brightrail-modal-header")(228,"div",7),e(229,"Sync node online"),i()(),t(230,"brightrail-modal-body")(231,"p",8),e(232,"Fleet telemetry is streaming in real time."),i()(),t(233,"brightrail-modal-footer")(234,"brightrail-button",18),e(235,"Acknowledge"),i()()()()()(),t(236,"app-catalog-variation-tile",47)(237,"div",48)(238,"span",44),e(239,"Cyber"),i(),t(240,"div",49),o(241,"span",50)(242,"span",51)(243,"span",52)(244,"span",53),t(245,"div",5)(246,"brightrail-modal",54)(247,"brightrail-modal-header")(248,"div",7),e(249,"Deploy to production?"),i()(),t(250,"brightrail-modal-body")(251,"p",8),e(252,"This pushes the current build to all edge nodes."),i()(),t(253,"brightrail-modal-footer")(254,"brightrail-button",21),e(255,"Abort"),i(),t(256,"brightrail-button",22),e(257,"Deploy"),i()()()()()()(),t(258,"app-catalog-variation-tile",55)(259,"div",56)(260,"span",44),e(261,"Holo"),i(),t(262,"div",5)(263,"brightrail-modal",6)(264,"brightrail-modal-header")(265,"div",7),e(266,"Mission briefing"),i()(),t(267,"brightrail-modal-body")(268,"p",8),e(269,"Holographic panel for immersive status readouts."),i()(),t(270,"brightrail-modal-footer")(271,"brightrail-button",18),e(272,"Continue"),i()()()()()()()()),n&2&&(a(9),r("snippet",l.s.sizeSm),a(2),r("isOpen",!0)("contain",!0),a(7),r("snippet",l.s.sizeMd),a(2),r("isOpen",!0)("contain",!0),a(7),r("snippet",l.s.sizeLg),a(2),r("isOpen",!0)("contain",!0),a(7),r("snippet",l.s.sizeXl),a(2),r("isOpen",!0)("contain",!0),a(11),r("snippet",l.s.appearanceDefault),a(2),r("isOpen",!0)("contain",!0),a(10),r("snippet",l.s.appearanceDanger),a(2),r("isOpen",!0)("contain",!0),a(16),r("snippet",l.s.confirmDestructive),a(2),r("isOpen",!0)("contain",!0),a(12),r("snippet",l.s.confirmAcknowledge),a(2),r("isOpen",!0)("contain",!0),a(14),r("snippet",l.s.formRename),a(2),r("isOpen",!0)("contain",!0),a(15),r("snippet",l.s.formSubmit),a(2),r("isOpen",!0)("contain",!0),a(17),r("snippet",l.s.patternLoading),a(2),r("isOpen",!0)("contain",!0),a(10),r("disabled",!0),a(2),r("snippet",l.s.patternSuccess),a(2),r("isOpen",!0)("contain",!0),a(10),r("snippet",l.s.patternErrorRetry),a(2),r("isOpen",!0)("contain",!0),a(15),r("snippet",l.s.exampleMarkup),a(2),r("isOpen",!0)("contain",!0)("labelledBy","mvc-example-title"),a(16),r("snippet",l.s.futuristicGlass),a(5),r("isOpen",!0)("contain",!0),a(10),r("snippet",l.s.futuristicNeon),a(5),r("isOpen",!0)("contain",!0),a(10),r("snippet",l.s.futuristicCyber),a(10),r("isOpen",!0)("contain",!0),a(12),r("snippet",l.s.futuristicHolo),a(5),r("isOpen",!0)("contain",!0))},dependencies:[c,u,f,v,y,h,x],styles:["[_nghost-%COMP%]{display:block}.mvc-block[_ngcontent-%COMP%]{margin-bottom:1.35rem}.mvc-block__h[_ngcontent-%COMP%]{margin:0 0 .5rem;font-size:.95rem;font-weight:700}.mvc-block__hint[_ngcontent-%COMP%]{margin:-.15rem 0 .65rem;font-size:.78rem;color:var(--ff-muted, #64748b)}.mvc-grid[_ngcontent-%COMP%]{display:grid;gap:.65rem;grid-template-columns:repeat(auto-fill,minmax(14rem,1fr))}.mvc-grid--modals[_ngcontent-%COMP%]{grid-template-columns:repeat(auto-fill,minmax(16rem,1fr))}.mvc-shell[_ngcontent-%COMP%]{position:relative;width:100%;min-height:11rem;border:1px solid var(--ff-border, #e2e8f0);border-radius:.55rem;overflow:hidden;background:var(--ff-surface-muted, #f8fafc)}.mvc-shell--tall[_ngcontent-%COMP%]{min-height:13rem}.mvc-shell--sm[_ngcontent-%COMP%]{min-height:9rem}.mvc-shell--example[_ngcontent-%COMP%]{min-height:14rem}.mvc-body-line[_ngcontent-%COMP%]{margin:0 0 .5rem;font-size:.8125rem;line-height:1.45;color:var(--ff-text-core, #334155)}.mvc-field-label[_ngcontent-%COMP%]{display:block;margin:.65rem 0 .35rem;font-size:.78rem;font-weight:600;color:var(--ff-label, #475569)}.mvc-field-input[_ngcontent-%COMP%]{box-sizing:border-box;width:100%;padding:.45rem .55rem;border-radius:.45rem;border:1px solid var(--ff-border-strong, #cbd5e1);font:inherit;font-size:.875rem;color:var(--ff-text-core, #334155);background:var(--ff-surface, #fff)}.mvc-loading[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:.65rem;padding:.5rem 0}.mvc-loading__spin[_ngcontent-%COMP%]{width:1.75rem;height:1.75rem;border:2px solid var(--ff-border, #e2e8f0);border-top-color:var(--ff-brand, #2563eb);border-radius:50%;animation:_ngcontent-%COMP%_mvc-spin .8s linear infinite}@keyframes _ngcontent-%COMP%_mvc-spin{to{transform:rotate(360deg)}}"],changeDetection:0})};var O=class d{htmlExamples=E;static \u0275fac=function(n){return new(n||d)};static \u0275cmp=m({type:d,selectors:[["app-modal-catalog-overview"]],decls:37,vars:1,consts:[[1,"mco"],[1,"mco-hero"],[1,"mco-hero__eyebrow"],[1,"mco-hero__links"],["routerLink","..",1,"mco-link"],["routerLink","/variations",1,"mco-link"],["aria-labelledby","mco-html-examples",1,"mco-code-block"],["id","mco-html-examples"],[1,"mco-code-block__hint"],[1,"mco-pre"]],template:function(n,l){n&1&&(t(0,"div",0)(1,"header",1)(2,"p",2),e(3,"Brightrail \xB7 Modal \xB7 Variation catalog"),i(),t(4,"h1"),e(5,"Modal types & variations"),i(),t(6,"p"),e(7," Mirrors "),t(8,"code"),e(9,"doc/modals/"),i(),e(10," reference mocks. Click any tile for "),t(11,"strong"),e(12,"View code"),i(),e(13,", then "),t(14,"strong"),e(15,"Copy code"),i(),e(16," to paste into your app (import from "),t(17,"code"),e(18,"brightrail"),i(),e(19,"). "),i(),t(20,"p",3)(21,"a",4),e(22,"\u2190 Modal playground (live settings)"),i(),t(23,"a",5),e(24,"All variation catalogs"),i()()(),o(25,"app-modal-variation-catalog"),t(26,"section",6)(27,"h2",7),e(28,"Modal HTML examples"),i(),t(29,"p",8),e(30," Typical destructive confirmation with header, body, and footer actions \u2014 use "),t(31,"code"),e(32,'[contain]="true"'),i(),e(33," in catalog previews and playgrounds. "),i(),t(34,"pre",9)(35,"code"),e(36),i()()()()),n&2&&(a(36),b(l.htmlExamples))},dependencies:[g,p],styles:["[_nghost-%COMP%]{flex:1 1 auto;min-height:0;overflow:auto}.mco[_ngcontent-%COMP%]{padding:1rem 1.25rem 1.5rem}.mco-hero__eyebrow[_ngcontent-%COMP%]{margin:0 0 .25rem;font-size:.75rem;font-weight:600;letter-spacing:.04em;text-transform:uppercase;color:var(--ff-muted, #64748b)}.mco-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0;font-size:1.5rem}.mco-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:.35rem 0 .5rem;color:var(--ff-muted, #64748b)}.mco-hero__links[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:.75rem 1.25rem}.mco-link[_ngcontent-%COMP%]{color:var(--ff-accent, #2563eb);text-decoration:none;font-weight:600}.mco-code-block[_ngcontent-%COMP%]{margin:1.5rem 0 0;padding-top:1rem;border-top:1px solid var(--ff-border, #e2e8f0)}.mco-code-block[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.1rem;margin:0 0 .35rem}.mco-code-block__hint[_ngcontent-%COMP%]{margin:0 0 .65rem;font-size:.8125rem;color:var(--ff-muted, #64748b)}.mco-pre[_ngcontent-%COMP%]{margin:0;padding:.85rem;border-radius:.5rem;background:var(--ff-surface-muted, #f1f3f4);border:1px solid var(--ff-border, #e2e8f0);overflow:auto;font-size:.8rem}"],changeDetection:0})};export{O as ModalCatalogOverviewComponent};
