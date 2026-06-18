import{a as S}from"./chunk-FJ7PM77H.js";import"./chunk-63ZAJDYR.js";import{a as b,b as u,c as w,d as v,e as f,f as y}from"./chunk-TKXK6HVV.js";import"./chunk-AJAFYN6V.js";import{e as h}from"./chunk-FBGATJ5M.js";import{a as g}from"./chunk-GYG4PR7L.js";import"./chunk-UCBO3RDG.js";import"./chunk-3QMANAY7.js";import"./chunk-573ITFZ2.js";import"./chunk-3SQNCDXW.js";import"./chunk-NNTI4JQ5.js";import{Ca as s,Va as a,Wa as r,Xa as t,Ya as d,sb as e,ta as i,tb as m}from"./chunk-M22WAZLT.js";var C={coreNavigation:`<brightrail-drawer
  [isOpen]="true"
  [contain]="true"
  placement="left"
  size="narrow"
  mode="dismissible"
  [showBackdrop]="false"
>
  <brightrail-drawer-header [showCloseButton]="true">
    <div brightrailDrawerTitle>Projects</div>
    <div brightrailDrawerSubtitle>Quick links and team navigation.</div>
  </brightrail-drawer-header>
  <brightrail-drawer-body><!-- nav links --></brightrail-drawer-body>
</brightrail-drawer>`,coreSettings:`<brightrail-drawer
  [isOpen]="true"
  [contain]="true"
  placement="right"
  size="wide"
  mode="modal"
  backdropStyle="blur"
>
  <brightrail-drawer-header [showCloseButton]="true">
    <div brightrailDrawerTitle>Workspace settings</div>
  </brightrail-drawer-header>
  <brightrail-drawer-body><!-- settings form --></brightrail-drawer-body>
  <brightrail-drawer-footer>
    <brightrail-button variant="primary" size="sm">Apply</brightrail-button>
  </brightrail-drawer-footer>
</brightrail-drawer>`,coreDetailInspector:`<brightrail-drawer
  [isOpen]="true"
  [contain]="true"
  placement="right"
  size="narrow"
  mode="dismissible"
  [showBackdrop]="false"
>
  <brightrail-drawer-header [showCloseButton]="true">
    <div brightrailDrawerTitle>Detail inspector</div>
  </brightrail-drawer-header>
  <brightrail-drawer-body><!-- metadata --></brightrail-drawer-body>
</brightrail-drawer>`,coreBottomSheet:`<brightrail-drawer
  [isOpen]="true"
  [contain]="true"
  placement="bottom"
  size="full"
  mode="modal"
>
  <brightrail-drawer-header [showCloseButton]="true">
    <div brightrailDrawerTitle>Quick actions</div>
  </brightrail-drawer-header>
  <brightrail-drawer-body><!-- action list --></brightrail-drawer-body>
  <brightrail-drawer-footer>
    <brightrail-button variant="outline" size="sm">Cancel</brightrail-button>
    <brightrail-button variant="primary" size="sm">Confirm</brightrail-button>
  </brightrail-drawer-footer>
</brightrail-drawer>`,placementLeft:`<brightrail-drawer [isOpen]="true" [contain]="true" placement="left" size="narrow" mode="modal">
  <brightrail-drawer-header [showCloseButton]="true">
    <div brightrailDrawerTitle>Left panel</div>
  </brightrail-drawer-header>
  <brightrail-drawer-body><!-- content --></brightrail-drawer-body>
</brightrail-drawer>`,placementRight:`<brightrail-drawer [isOpen]="true" [contain]="true" placement="right" size="medium" mode="modal">
  <brightrail-drawer-header [showCloseButton]="true">
    <div brightrailDrawerTitle>Right panel</div>
  </brightrail-drawer-header>
  <brightrail-drawer-body><!-- content --></brightrail-drawer-body>
</brightrail-drawer>`,placementBottom:`<brightrail-drawer [isOpen]="true" [contain]="true" placement="bottom" size="medium" mode="modal">
  <brightrail-drawer-header [showCloseButton]="true">
    <div brightrailDrawerTitle>Bottom sheet</div>
  </brightrail-drawer-header>
  <brightrail-drawer-body><!-- content --></brightrail-drawer-body>
</brightrail-drawer>`,placementTop:`<brightrail-drawer [isOpen]="true" [contain]="true" placement="top" size="medium" mode="modal">
  <brightrail-drawer-header [showCloseButton]="true">
    <div brightrailDrawerTitle>Top panel</div>
  </brightrail-drawer-header>
  <brightrail-drawer-body><!-- content --></brightrail-drawer-body>
</brightrail-drawer>`,placementLeftClosed:`<brightrail-drawer [isOpen]="false" [contain]="true" placement="left" size="narrow" mode="modal">
  <!-- closed preview within a contained shell -->
</brightrail-drawer>`,sizeNarrow:`<brightrail-drawer [isOpen]="true" [contain]="true" placement="right" size="narrow" mode="modal">
  <!-- 320px -->
</brightrail-drawer>`,sizeMedium:`<brightrail-drawer [isOpen]="true" [contain]="true" placement="right" size="medium" mode="modal">
  <!-- 480px -->
</brightrail-drawer>`,sizeWide:`<brightrail-drawer [isOpen]="true" [contain]="true" placement="right" size="wide" mode="modal">
  <!-- 720px -->
</brightrail-drawer>`,modeModalDim:`<brightrail-drawer
  [isOpen]="true"
  [contain]="true"
  mode="modal"
  [showBackdrop]="true"
  backdropStyle="dim"
>
  <!-- page dimmed, drawer blocks interaction -->
</brightrail-drawer>`,modeModalBlur:`<brightrail-drawer
  [isOpen]="true"
  [contain]="true"
  mode="modal"
  [showBackdrop]="true"
  backdropStyle="blur"
>
  <!-- blurred backdrop -->
</brightrail-drawer>`,modeModalGlass:`<brightrail-drawer
  [isOpen]="true"
  [contain]="true"
  mode="modal"
  [showBackdrop]="true"
  backdropStyle="glass"
>
  <!-- glass overlay -->
</brightrail-drawer>`,modeDismissible:`<brightrail-drawer
  [isOpen]="true"
  [contain]="true"
  mode="dismissible"
  [showBackdrop]="false"
>
  <!-- page stays interactive -->
</brightrail-drawer>`,modePersistent:`<brightrail-drawer
  [isOpen]="true"
  [contain]="true"
  mode="persistent"
  [showBackdrop]="false"
>
  <!-- always visible, no overlay -->
</brightrail-drawer>`,surfaceDefault:`<brightrail-drawer [isOpen]="true" [contain]="true" surface="default">
  <!-- standard panel surface -->
</brightrail-drawer>`,surfaceGlass:`<brightrail-drawer [isOpen]="true" [contain]="true" surface="glass" backdropStyle="glass">
  <!-- glassmorphism panel -->
</brightrail-drawer>`,surfaceGradient:`<brightrail-drawer [isOpen]="true" [contain]="true" surface="gradient" backdropStyle="blur">
  <!-- gradient accent edge -->
</brightrail-drawer>`,surfaceAi:`<brightrail-drawer [isOpen]="true" [contain]="true" surface="ai" backdropStyle="glass">
  <!-- AI command shell -->
</brightrail-drawer>`,exampleMarkup:`<brightrail-drawer
  [isOpen]="true"
  [contain]="true"
  placement="right"
  size="medium"
  mode="modal"
  [showBackdrop]="true"
  backdropStyle="glass"
  surface="gradient"
>
  <brightrail-drawer-header [showCloseButton]="true">
    <div brightrailDrawerTitle>Edit project details</div>
  </brightrail-drawer-header>
  <brightrail-drawer-body>
    <p>Use this baseline markup and tune placement, size, mode, overlay, and surface for your app.</p>
  </brightrail-drawer-body>
  <brightrail-drawer-footer>
    <brightrail-button variant="outline" size="sm">Cancel</brightrail-button>
    <brightrail-button variant="primary" size="sm">Save changes</brightrail-button>
  </brightrail-drawer-footer>
</brightrail-drawer>`,futuristicGlass:`<div class="ff-future-shell ff-future-shell--glass">
  <brightrail-drawer
    [isOpen]="true"
    [contain]="true"
    placement="right"
    size="medium"
    mode="modal"
    surface="glass"
    backdropStyle="glass"
  >
    <brightrail-drawer-header [showCloseButton]="true">
      <div brightrailDrawerTitle>Glass panel</div>
    </brightrail-drawer-header>
    <brightrail-drawer-body><!-- glass drawer content --></brightrail-drawer-body>
  </brightrail-drawer>
</div>`,futuristicNeon:`<div class="ff-future-shell ff-future-shell--neon">
  <brightrail-drawer
    [isOpen]="true"
    [contain]="true"
    placement="right"
    size="wide"
    mode="modal"
    surface="ai"
    backdropStyle="glass"
  >
    <brightrail-drawer-header [showCloseButton]="true">
      <div brightrailDrawerTitle>AI command center</div>
    </brightrail-drawer-header>
    <brightrail-drawer-body><!-- neon AI shell --></brightrail-drawer-body>
  </brightrail-drawer>
</div>`,futuristicCyber:`<div class="ff-future-shell ff-future-shell--cyber">
  <brightrail-drawer
    [isOpen]="true"
    [contain]="true"
    placement="right"
    size="medium"
    mode="modal"
    surface="ai"
    backdropStyle="glass"
  >
    <brightrail-drawer-header [showCloseButton]="true">
      <div brightrailDrawerTitle>Cyber inspector</div>
    </brightrail-drawer-header>
    <brightrail-drawer-body><!-- cyber drawer content --></brightrail-drawer-body>
  </brightrail-drawer>
</div>`,futuristicHolo:`<div class="ff-future-shell ff-future-shell--holo">
  <brightrail-drawer
    [isOpen]="true"
    [contain]="true"
    placement="right"
    size="medium"
    mode="modal"
    surface="gradient"
    backdropStyle="blur"
  >
    <brightrail-drawer-header [showCloseButton]="true">
      <div brightrailDrawerTitle>Holo settings</div>
    </brightrail-drawer-header>
    <brightrail-drawer-body><!-- holo drawer content --></brightrail-drawer-body>
  </brightrail-drawer>
</div>`};var O=`<brightrail-drawer
  [isOpen]="drawerOpen()"
  [contain]="true"
  placement="right"
  size="medium"
  mode="modal"
  [showBackdrop]="true"
  backdropStyle="dim"
  (backdropDismiss)="drawerOpen.set(false)"
  (closed)="drawerOpen.set(false)"
>
  <brightrail-drawer-header [showCloseButton]="true">
    <div brightrailDrawerTitle>Edit project details</div>
  </brightrail-drawer-header>
  <brightrail-drawer-body><!-- drawer content --></brightrail-drawer-body>
  <brightrail-drawer-footer>
    <brightrail-button variant="outline" size="sm">Cancel</brightrail-button>
    <brightrail-button variant="primary" size="sm">Save changes</brightrail-button>
  </brightrail-drawer-footer>
</brightrail-drawer>`;var p=class o{s=C;static \u0275fac=function(l){return new(l||o)};static \u0275cmp=s({type:o,selectors:[["app-drawer-variation-catalog"]],decls:305,vars:111,consts:[[1,"dvc-block"],[1,"dvc-block__h"],[1,"dvc-grid","dvc-grid--drawers"],["label","Navigation drawer",3,"snippet"],[1,"dvc-shell","dvc-shell--tall"],["placement","left","size","narrow","mode","dismissible",3,"isOpen","contain","showBackdrop"],[3,"showCloseButton"],["brightrailDrawerTitle",""],["brightrailDrawerSubtitle",""],[1,"dvc-body-line"],["label","Settings panel",3,"snippet"],["placement","right","size","wide","mode","modal","backdropStyle","blur",3,"isOpen","contain"],["variant","primary","size","sm"],["label","Detail inspector",3,"snippet"],["placement","right","size","narrow","mode","dismissible",3,"isOpen","contain","showBackdrop"],["label","Bottom sheet",3,"snippet"],[1,"dvc-shell","dvc-shell--sheet"],["placement","bottom","size","medium","mode","modal",3,"isOpen","contain"],["variant","outline","size","sm"],[1,"dvc-block__hint"],["label","Left \xB7 open",3,"snippet"],["placement","left","size","narrow","mode","modal",3,"isOpen","contain"],["label","Right \xB7 open",3,"snippet"],["placement","right","size","medium","mode","modal",3,"isOpen","contain"],["label","Bottom \xB7 open",3,"snippet"],["label","Top \xB7 open",3,"snippet"],[1,"dvc-shell","dvc-shell--top"],["placement","top","size","medium","mode","modal",3,"isOpen","contain"],["label","Right \xB7 closed","hint","Closed state in contained shell",3,"snippet"],[1,"dvc-fake-app"],[1,"dvc-fake-app__title"],[1,"dvc-fake-app__sub"],["label","Narrow",3,"snippet"],["placement","right","size","narrow","mode","modal",3,"isOpen","contain"],["label","Medium",3,"snippet"],["label","Wide",3,"snippet"],["placement","right","size","wide","mode","modal",3,"isOpen","contain"],["label","Modal \xB7 dim",3,"snippet"],["placement","right","size","medium","mode","modal","backdropStyle","dim",3,"isOpen","contain","showBackdrop"],["label","Modal \xB7 blur",3,"snippet"],["placement","right","size","medium","mode","modal","backdropStyle","blur",3,"isOpen","contain","showBackdrop"],["label","Modal \xB7 glass",3,"snippet"],["placement","right","size","medium","mode","modal","backdropStyle","glass",3,"isOpen","contain","showBackdrop"],["label","Dismissible",3,"snippet"],["label","Persistent",3,"snippet"],["placement","left","size","narrow","mode","persistent",3,"isOpen","contain","showBackdrop"],["label","Default",3,"snippet"],["placement","right","size","medium","mode","modal","surface","default",3,"isOpen","contain"],["label","Glass",3,"snippet"],[1,"dvc-shell","dvc-shell--tall","dvc-shell--glass-bg"],["placement","right","size","medium","mode","modal","surface","glass","backdropStyle","glass",3,"isOpen","contain"],["label","Gradient",3,"snippet"],["placement","right","size","medium","mode","modal","surface","gradient","backdropStyle","blur",3,"isOpen","contain"],["label","AI command shell",3,"snippet"],[1,"dvc-shell","dvc-shell--tall","dvc-shell--ai-bg"],["placement","right","size","wide","mode","modal","surface","ai","backdropStyle","glass",3,"isOpen","contain"],["label","Baseline form panel",3,"snippet"],[1,"dvc-shell","dvc-shell--example"],["placement","right","size","medium","mode","modal","backdropStyle","glass","surface","gradient",3,"isOpen","contain","showBackdrop"],[1,"ff-future-grid"],["label","Glass panel",3,"snippet"],[1,"ff-future-shell","ff-future-shell--glass"],["aria-hidden","true",1,"ff-future-shell__label"],["label","Neon AI shell",3,"snippet"],[1,"ff-future-shell","ff-future-shell--neon"],["label","Cyber inspector",3,"snippet"],[1,"ff-future-shell","ff-future-shell--cyber"],[1,"ff-future-cyber-frame"],["aria-hidden","true",1,"ff-future-cyber-corner","ff-future-cyber-corner--tl"],["aria-hidden","true",1,"ff-future-cyber-corner","ff-future-cyber-corner--tr"],["aria-hidden","true",1,"ff-future-cyber-corner","ff-future-cyber-corner--bl"],["aria-hidden","true",1,"ff-future-cyber-corner","ff-future-cyber-corner--br"],["placement","right","size","medium","mode","modal","surface","ai","backdropStyle","glass",3,"isOpen","contain"],["label","Holo gradient",3,"snippet"],[1,"ff-future-shell","ff-future-shell--holo"]],template:function(l,n){l&1&&(r(0,"section",0)(1,"h2",1),e(2,"1. Core drawer types"),t(),r(3,"div",2)(4,"app-catalog-variation-tile",3)(5,"div",4)(6,"brightrail-drawer",5)(7,"brightrail-drawer-header",6)(8,"div",7),e(9,"Projects"),t(),r(10,"div",8),e(11,"Quick links and team navigation."),t()(),r(12,"brightrail-drawer-body")(13,"p",9),e(14,"Dashboard"),t(),r(15,"p",9),e(16,"Team roster"),t()()()()(),r(17,"app-catalog-variation-tile",10)(18,"div",4)(19,"brightrail-drawer",11)(20,"brightrail-drawer-header",6)(21,"div",7),e(22,"Workspace settings"),t()(),r(23,"brightrail-drawer-body")(24,"p",9),e(25,"Alert defaults and policy."),t()(),r(26,"brightrail-drawer-footer")(27,"brightrail-button",12),e(28,"Apply"),t()()()()(),r(29,"app-catalog-variation-tile",13)(30,"div",4)(31,"brightrail-drawer",14)(32,"brightrail-drawer-header",6)(33,"div",7),e(34,"Detail inspector"),t()(),r(35,"brightrail-drawer-body")(36,"p",9),e(37,"Object metadata and activity."),t()()()()(),r(38,"app-catalog-variation-tile",15)(39,"div",16)(40,"brightrail-drawer",17)(41,"brightrail-drawer-header",6)(42,"div",7),e(43,"Quick actions"),t()(),r(44,"brightrail-drawer-body")(45,"p",9),e(46,"Run fast actions without leaving context."),t()(),r(47,"brightrail-drawer-footer")(48,"brightrail-button",18),e(49,"Cancel"),t(),r(50,"brightrail-button",12),e(51,"Confirm"),t()()()()()()(),r(52,"section",0)(53,"h2",1),e(54,"2. Placements"),t(),r(55,"p",19),e(56,"All previews use "),r(57,"code"),e(58,'[contain]="true"'),t(),e(59," \u2014 open panels or closed shells within the tile."),t(),r(60,"div",2)(61,"app-catalog-variation-tile",20)(62,"div",4)(63,"brightrail-drawer",21)(64,"brightrail-drawer-header",6)(65,"div",7),e(66,"Left panel"),t()(),r(67,"brightrail-drawer-body")(68,"p",9),e(69,"Navigation rail."),t()()()()(),r(70,"app-catalog-variation-tile",22)(71,"div",4)(72,"brightrail-drawer",23)(73,"brightrail-drawer-header",6)(74,"div",7),e(75,"Right panel"),t()(),r(76,"brightrail-drawer-body")(77,"p",9),e(78,"Form or detail content."),t()()()()(),r(79,"app-catalog-variation-tile",24)(80,"div",16)(81,"brightrail-drawer",17)(82,"brightrail-drawer-header",6)(83,"div",7),e(84,"Bottom sheet"),t()(),r(85,"brightrail-drawer-body")(86,"p",9),e(87,"Mobile-first actions."),t()()()()(),r(88,"app-catalog-variation-tile",25)(89,"div",26)(90,"brightrail-drawer",27)(91,"brightrail-drawer-header",6)(92,"div",7),e(93,"Top panel"),t()(),r(94,"brightrail-drawer-body")(95,"p",9),e(96,"Banner or filters."),t()()()()(),r(97,"app-catalog-variation-tile",28)(98,"div",4)(99,"div",29)(100,"span",30),e(101,"Projects"),t(),r(102,"span",31),e(103,"Drawer closed \u2014 page visible."),t()(),r(104,"brightrail-drawer",23)(105,"brightrail-drawer-header",6)(106,"div",7),e(107,"Hidden panel"),t()(),d(108,"brightrail-drawer-body"),t()()()()(),r(109,"section",0)(110,"h2",1),e(111,"3. Sizes"),t(),r(112,"p",19),e(113,"narrow 320px \xB7 medium 480px \xB7 wide 720px"),t(),r(114,"div",2)(115,"app-catalog-variation-tile",32)(116,"div",4)(117,"brightrail-drawer",33)(118,"brightrail-drawer-header",6)(119,"div",7),e(120,"Narrow"),t()(),r(121,"brightrail-drawer-body")(122,"p",9),e(123,"320px rail."),t()()()()(),r(124,"app-catalog-variation-tile",34)(125,"div",4)(126,"brightrail-drawer",23)(127,"brightrail-drawer-header",6)(128,"div",7),e(129,"Medium"),t()(),r(130,"brightrail-drawer-body")(131,"p",9),e(132,"480px form panel."),t()()()()(),r(133,"app-catalog-variation-tile",35)(134,"div",4)(135,"brightrail-drawer",36)(136,"brightrail-drawer-header",6)(137,"div",7),e(138,"Wide"),t()(),r(139,"brightrail-drawer-body")(140,"p",9),e(141,"720px settings or wizard."),t()()()()()()(),r(142,"section",0)(143,"h2",1),e(144,"4. Modes & backdrop styles"),t(),r(145,"div",2)(146,"app-catalog-variation-tile",37)(147,"div",4)(148,"brightrail-drawer",38)(149,"brightrail-drawer-header",6)(150,"div",7),e(151,"Modal dim"),t()(),r(152,"brightrail-drawer-body")(153,"p",9),e(154,"Standard overlay."),t()()()()(),r(155,"app-catalog-variation-tile",39)(156,"div",4)(157,"brightrail-drawer",40)(158,"brightrail-drawer-header",6)(159,"div",7),e(160,"Modal blur"),t()(),r(161,"brightrail-drawer-body")(162,"p",9),e(163,"Blurred backdrop."),t()()()()(),r(164,"app-catalog-variation-tile",41)(165,"div",4)(166,"brightrail-drawer",42)(167,"brightrail-drawer-header",6)(168,"div",7),e(169,"Modal glass"),t()(),r(170,"brightrail-drawer-body")(171,"p",9),e(172,"Glass overlay."),t()()()()(),r(173,"app-catalog-variation-tile",43)(174,"div",4)(175,"div",29)(176,"span",30),e(177,"Page stays interactive"),t()(),r(178,"brightrail-drawer",14)(179,"brightrail-drawer-header",6)(180,"div",7),e(181,"Dismissible"),t()(),r(182,"brightrail-drawer-body")(183,"p",9),e(184,"No backdrop lock."),t()()()()(),r(185,"app-catalog-variation-tile",44)(186,"div",4)(187,"brightrail-drawer",45)(188,"brightrail-drawer-body")(189,"p",9),e(190,"Always visible shell."),t()()()()()()(),r(191,"section",0)(192,"h2",1),e(193,"5. Surfaces"),t(),r(194,"div",2)(195,"app-catalog-variation-tile",46)(196,"div",4)(197,"brightrail-drawer",47)(198,"brightrail-drawer-header",6)(199,"div",7),e(200,"Default surface"),t()(),r(201,"brightrail-drawer-body")(202,"p",9),e(203,"Standard panel."),t()()()()(),r(204,"app-catalog-variation-tile",48)(205,"div",49)(206,"brightrail-drawer",50)(207,"brightrail-drawer-header",6)(208,"div",7),e(209,"Glass panel"),t()(),r(210,"brightrail-drawer-body")(211,"p",9),e(212,"Glassmorphism treatment."),t()()()()(),r(213,"app-catalog-variation-tile",51)(214,"div",4)(215,"brightrail-drawer",52)(216,"brightrail-drawer-header",6)(217,"div",7),e(218,"Gradient panel"),t()(),r(219,"brightrail-drawer-body")(220,"p",9),e(221,"Accent gradient edge."),t()()()()(),r(222,"app-catalog-variation-tile",53)(223,"div",54)(224,"brightrail-drawer",55)(225,"brightrail-drawer-header",6)(226,"div",7),e(227,"AI command center"),t()(),r(228,"brightrail-drawer-body")(229,"p",9),e(230,"Smart suggestions shell."),t()()()()()()(),r(231,"section",0)(232,"h2",1),e(233,"6. Example drawer markup"),t(),r(234,"app-catalog-variation-tile",56)(235,"div",57)(236,"brightrail-drawer",58)(237,"brightrail-drawer-header",6)(238,"div",7),e(239,"Edit project details"),t()(),r(240,"brightrail-drawer-body")(241,"p",9),e(242,"Use this baseline markup and tune placement, size, mode, overlay, and surface for your app."),t()(),r(243,"brightrail-drawer-footer")(244,"brightrail-button",18),e(245,"Cancel"),t(),r(246,"brightrail-button",12),e(247,"Save changes"),t()()()()()(),r(248,"section",0)(249,"h2",1),e(250,"7. Futuristic drawer designs"),t(),r(251,"div",59)(252,"app-catalog-variation-tile",60)(253,"div",61)(254,"span",62),e(255,"Glass"),t(),r(256,"div",4)(257,"brightrail-drawer",50)(258,"brightrail-drawer-header",6)(259,"div",7),e(260,"Glass panel"),t()(),r(261,"brightrail-drawer-body")(262,"p",9),e(263,"Glassmorphism drawer with frosted backdrop."),t()()()()()(),r(264,"app-catalog-variation-tile",63)(265,"div",64)(266,"span",62),e(267,"Neon"),t(),r(268,"div",54)(269,"brightrail-drawer",55)(270,"brightrail-drawer-header",6)(271,"div",7),e(272,"AI command center"),t()(),r(273,"brightrail-drawer-body")(274,"p",9),e(275,"Neon AI shell with smart suggestions."),t()()()()()(),r(276,"app-catalog-variation-tile",65)(277,"div",66)(278,"span",62),e(279,"Cyber"),t(),r(280,"div",4)(281,"div",67),d(282,"span",68)(283,"span",69)(284,"span",70)(285,"span",71),r(286,"brightrail-drawer",72)(287,"brightrail-drawer-header",6)(288,"div",7),e(289,"Cyber inspector"),t()(),r(290,"brightrail-drawer-body")(291,"p",9),e(292,"Grid-framed AI detail panel."),t()()()()()()(),r(293,"app-catalog-variation-tile",73)(294,"div",74)(295,"span",62),e(296,"Holo"),t(),r(297,"div",4)(298,"brightrail-drawer",52)(299,"brightrail-drawer-header",6)(300,"div",7),e(301,"Holo settings"),t()(),r(302,"brightrail-drawer-body")(303,"p",9),e(304,"Gradient edge with holographic shell."),t()()()()()()()()),l&2&&(i(4),a("snippet",n.s.coreNavigation),i(2),a("isOpen",!0)("contain",!0)("showBackdrop",!1),i(),a("showCloseButton",!0),i(10),a("snippet",n.s.coreSettings),i(2),a("isOpen",!0)("contain",!0),i(),a("showCloseButton",!0),i(9),a("snippet",n.s.coreDetailInspector),i(2),a("isOpen",!0)("contain",!0)("showBackdrop",!1),i(),a("showCloseButton",!0),i(6),a("snippet",n.s.coreBottomSheet),i(2),a("isOpen",!0)("contain",!0),i(),a("showCloseButton",!0),i(20),a("snippet",n.s.placementLeft),i(2),a("isOpen",!0)("contain",!0),i(),a("showCloseButton",!0),i(6),a("snippet",n.s.placementRight),i(2),a("isOpen",!0)("contain",!0),i(),a("showCloseButton",!0),i(6),a("snippet",n.s.placementBottom),i(2),a("isOpen",!0)("contain",!0),i(),a("showCloseButton",!0),i(6),a("snippet",n.s.placementTop),i(2),a("isOpen",!0)("contain",!0),i(),a("showCloseButton",!0),i(6),a("snippet",n.s.placementLeftClosed),i(7),a("isOpen",!1)("contain",!0),i(),a("showCloseButton",!0),i(10),a("snippet",n.s.sizeNarrow),i(2),a("isOpen",!0)("contain",!0),i(),a("showCloseButton",!0),i(6),a("snippet",n.s.sizeMedium),i(2),a("isOpen",!0)("contain",!0),i(),a("showCloseButton",!0),i(6),a("snippet",n.s.sizeWide),i(2),a("isOpen",!0)("contain",!0),i(),a("showCloseButton",!0),i(10),a("snippet",n.s.modeModalDim),i(2),a("isOpen",!0)("contain",!0)("showBackdrop",!0),i(),a("showCloseButton",!0),i(6),a("snippet",n.s.modeModalBlur),i(2),a("isOpen",!0)("contain",!0)("showBackdrop",!0),i(),a("showCloseButton",!0),i(6),a("snippet",n.s.modeModalGlass),i(2),a("isOpen",!0)("contain",!0)("showBackdrop",!0),i(),a("showCloseButton",!0),i(6),a("snippet",n.s.modeDismissible),i(5),a("isOpen",!0)("contain",!0)("showBackdrop",!1),i(),a("showCloseButton",!0),i(6),a("snippet",n.s.modePersistent),i(2),a("isOpen",!0)("contain",!0)("showBackdrop",!1),i(8),a("snippet",n.s.surfaceDefault),i(2),a("isOpen",!0)("contain",!0),i(),a("showCloseButton",!0),i(6),a("snippet",n.s.surfaceGlass),i(2),a("isOpen",!0)("contain",!0),i(),a("showCloseButton",!0),i(6),a("snippet",n.s.surfaceGradient),i(2),a("isOpen",!0)("contain",!0),i(),a("showCloseButton",!0),i(6),a("snippet",n.s.surfaceAi),i(2),a("isOpen",!0)("contain",!0),i(),a("showCloseButton",!0),i(9),a("snippet",n.s.exampleMarkup),i(2),a("isOpen",!0)("contain",!0)("showBackdrop",!0),i(),a("showCloseButton",!0),i(15),a("snippet",n.s.futuristicGlass),i(5),a("isOpen",!0)("contain",!0),i(),a("showCloseButton",!0),i(6),a("snippet",n.s.futuristicNeon),i(5),a("isOpen",!0)("contain",!0),i(),a("showCloseButton",!0),i(6),a("snippet",n.s.futuristicCyber),i(10),a("isOpen",!0)("contain",!0),i(),a("showCloseButton",!0),i(6),a("snippet",n.s.futuristicHolo),i(5),a("isOpen",!0)("contain",!0),i(),a("showCloseButton",!0))},dependencies:[b,u,w,v,f,y,g,S],styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]   .ff-future-shell[_ngcontent-%COMP%]{width:100%;flex-direction:column;align-items:stretch}.dvc-block[_ngcontent-%COMP%]{margin-bottom:1.35rem}.dvc-block__h[_ngcontent-%COMP%]{margin:0 0 .5rem;font-size:.95rem;font-weight:700}.dvc-block__hint[_ngcontent-%COMP%]{margin:-.15rem 0 .65rem;font-size:.78rem;color:var(--ff-muted, #64748b)}.dvc-grid[_ngcontent-%COMP%]{display:grid;gap:.65rem;grid-template-columns:repeat(auto-fill,minmax(14rem,1fr))}.dvc-grid--drawers[_ngcontent-%COMP%]{grid-template-columns:repeat(auto-fill,minmax(16rem,1fr))}.dvc-shell[_ngcontent-%COMP%]{position:relative;width:100%;min-height:11rem;border:1px solid var(--ff-border, #e2e8f0);border-radius:.55rem;overflow:hidden;background:var(--ff-surface-muted, #f8fafc)}.dvc-shell--tall[_ngcontent-%COMP%]{min-height:13rem}.dvc-shell--sheet[_ngcontent-%COMP%]{min-height:10rem}.dvc-shell--top[_ngcontent-%COMP%]{min-height:9rem}.dvc-shell--example[_ngcontent-%COMP%]{min-height:14rem}.dvc-shell--glass-bg[_ngcontent-%COMP%]{background:linear-gradient(135deg,#dbeafeb3,#f3e8ffa6),var(--ff-surface-muted, #f8fafc)}.dvc-shell--ai-bg[_ngcontent-%COMP%]{background:radial-gradient(circle at 80% 20%,rgba(34,211,238,.18),transparent 55%),linear-gradient(160deg,#0f172aeb,#1e293be0)}.dvc-fake-app[_ngcontent-%COMP%]{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:.25rem;padding:1rem;text-align:center;pointer-events:none;z-index:0}.dvc-fake-app__title[_ngcontent-%COMP%]{font-size:.85rem;font-weight:600;color:var(--ff-text, #202124)}.dvc-fake-app__sub[_ngcontent-%COMP%]{font-size:.72rem;color:var(--ff-muted, #64748b)}.dvc-body-line[_ngcontent-%COMP%]{margin:0 0 .35rem;font-size:.78rem;color:var(--ff-text-core, #334155);line-height:1.35}"],changeDetection:0})};var x=class o{htmlExamples=O;static \u0275fac=function(l){return new(l||o)};static \u0275cmp=s({type:o,selectors:[["app-drawer-catalog-overview"]],decls:31,vars:1,consts:[[1,"cco"],[1,"cco-hero"],[1,"cco-hero__eyebrow"],[1,"cco-hero__links"],["routerLink","..",1,"cco-link"],["routerLink","/variations",1,"cco-link"],["aria-labelledby","cco-drawer-html",1,"cco-code-block"],["id","cco-drawer-html"],[1,"cco-code-block__hint"],[1,"cco-pre"]],template:function(l,n){l&1&&(r(0,"div",0)(1,"header",1)(2,"p",2),e(3,"Brightrail \xB7 Drawer \xB7 Variation catalog"),t(),r(4,"h1"),e(5,"Drawer / side panel types & variations"),t(),r(6,"p"),e(7," Live tile previews for placements, sizes, modes, backdrop styles, and surfaces. Click any tile for "),r(8,"strong"),e(9,"View code"),t(),e(10,", then "),r(11,"strong"),e(12,"Copy code"),t(),e(13," (import from "),r(14,"code"),e(15,"brightrail"),t(),e(16,"). "),t(),r(17,"p",3)(18,"a",4),e(19,"\u2190 Drawer playground (live settings)"),t(),r(20,"a",5),e(21,"All variation catalogs"),t()()(),d(22,"app-drawer-variation-catalog"),r(23,"section",6)(24,"h2",7),e(25,"Drawer HTML examples"),t(),r(26,"p",8),e(27,"Typical modal drawer with header, body, and footer actions."),t(),r(28,"pre",9)(29,"code"),e(30),t()()()()),l&2&&(i(30),m(n.htmlExamples))},dependencies:[h,p],styles:["[_nghost-%COMP%]{flex:1 1 auto;min-height:0;overflow:auto}.cco[_ngcontent-%COMP%]{padding:1rem 1.25rem 1.5rem}.cco-hero__eyebrow[_ngcontent-%COMP%]{margin:0 0 .25rem;font-size:.75rem;font-weight:600;letter-spacing:.04em;text-transform:uppercase;color:var(--ff-muted, #64748b)}.cco-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0;font-size:1.5rem}.cco-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:.35rem 0 .5rem;color:var(--ff-muted, #64748b)}.cco-hero__links[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:.75rem 1.25rem}.cco-link[_ngcontent-%COMP%]{color:var(--ff-accent, #2563eb);text-decoration:none;font-weight:600}.cco-code-block[_ngcontent-%COMP%]{margin:1.5rem 0 0;padding-top:1rem;border-top:1px solid var(--ff-border, #e2e8f0)}.cco-code-block[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.1rem;margin:0 0 .35rem}.cco-code-block__hint[_ngcontent-%COMP%]{margin:0 0 .65rem;font-size:.8125rem;color:var(--ff-muted, #64748b)}.cco-pre[_ngcontent-%COMP%]{margin:0;padding:.85rem;border-radius:.5rem;background:var(--ff-surface-muted, #f1f3f4);border:1px solid var(--ff-border, #e2e8f0);overflow:auto;font-size:.8rem}"],changeDetection:0})};export{x as DrawerCatalogOverviewComponent};
