import{a as k}from"./chunk-FJ7PM77H.js";import"./chunk-63ZAJDYR.js";import{a as v,b as S,c as C,d as M,e as c}from"./chunk-SW4P7MJX.js";import{a as x,b as w,c as z}from"./chunk-COKBYRTB.js";import{a as y,b as E,c as _}from"./chunk-G2UXOGFK.js";import{a as u}from"./chunk-LMQ4CP4O.js";import{e as b}from"./chunk-FBGATJ5M.js";import"./chunk-2OLYPZTH.js";import"./chunk-NKFZ7ROU.js";import{a as f}from"./chunk-GYG4PR7L.js";import"./chunk-UCBO3RDG.js";import"./chunk-TX2IANRT.js";import"./chunk-3QMANAY7.js";import"./chunk-573ITFZ2.js";import"./chunk-ZPYCUCV5.js";import"./chunk-CT3LT7KZ.js";import"./chunk-3SQNCDXW.js";import"./chunk-NNTI4JQ5.js";import{Ca as p,Va as i,Wa as t,Xa as e,Ya as l,qa as h,sb as r,ta as a,tb as m}from"./chunk-M22WAZLT.js";var T={coreBasic:`<brightrail-card appearance="basic" size="md">
  <brightrail-card-header>
    <h3>Card title</h3>
  </brightrail-card-header>
  <brightrail-card-content>
    <p>Flat surface with minimal chrome.</p>
  </brightrail-card-content>
</brightrail-card>`,coreElevated:`<brightrail-card appearance="elevated" size="md">
  <brightrail-card-header>
    <h3>Team performance</h3>
  </brightrail-card-header>
  <brightrail-card-content>
    <p>Monitor weekly delivery metrics and team updates.</p>
  </brightrail-card-content>
  <brightrail-card-actions align="between">
    <brightrail-button variant="primary">View details</brightrail-button>
    <span class="brightrail-text-secondary">Updated 10 min ago</span>
  </brightrail-card-actions>
</brightrail-card>`,coreOutlined:`<brightrail-card appearance="outlined" size="md">
  <brightrail-card-header>
    <h3>Review changes</h3>
  </brightrail-card-header>
  <brightrail-card-content>
    <p>Bordered surface for forms and confirmations.</p>
  </brightrail-card-content>
  <brightrail-card-footer>
    <brightrail-button variant="outline">Cancel</brightrail-button>
    <brightrail-button variant="primary">Save</brightrail-button>
  </brightrail-card-footer>
</brightrail-card>`,coreFilled:`<brightrail-card appearance="filled" size="md">
  <brightrail-card-header>
    <h3>Summary</h3>
  </brightrail-card-header>
  <brightrail-card-content>
    <p>Tinted background for grouped content blocks.</p>
  </brightrail-card-content>
</brightrail-card>`,layoutHorizontal:`<brightrail-card appearance="horizontal" size="md">
  <brightrail-card-media>
    <img class="card-demo-media-img" src="${c.horizontalThumb}" alt="" />
  </brightrail-card-media>
  <brightrail-card-header>
    <h3>Briefing pack</h3>
  </brightrail-card-header>
  <brightrail-card-content>
    <p>Media and copy in a horizontal row.</p>
  </brightrail-card-content>
  <brightrail-card-actions align="end">
    <brightrail-button variant="link" iconRight="chevron">Open</brightrail-button>
  </brightrail-card-actions>
</brightrail-card>`,layoutImage:`<brightrail-card appearance="image" size="md">
  <brightrail-card-media>
    <img class="card-demo-image" src="${c.imageLeadHero}" alt="Decorative artwork" />
  </brightrail-card-media>
  <brightrail-card-header>
    <h3>Featured launch</h3>
  </brightrail-card-header>
  <brightrail-card-content>
    <p>Hero image leads the card stack.</p>
  </brightrail-card-content>
  <brightrail-card-actions align="start">
    <brightrail-button variant="primary">View details</brightrail-button>
  </brightrail-card-actions>
</brightrail-card>`,layoutStats:`<brightrail-card appearance="stats" size="md">
  <brightrail-card-header>
    <p class="br-card-stat-label">Total revenue</p>
  </brightrail-card-header>
  <brightrail-card-content>
    <p class="br-card-stat-value">$24.8M</p>
    <p class="br-card-stat-trend">\u25B2 12.5% vs last month</p>
    <p>Compared to the prior rolling quarter.</p>
  </brightrail-card-content>
</brightrail-card>`,sizeSm:`<brightrail-card appearance="elevated" size="sm">
  <brightrail-card-header><h3>Small</h3></brightrail-card-header>
  <brightrail-card-content><p>Compact padding and type scale.</p></brightrail-card-content>
</brightrail-card>`,sizeMd:`<brightrail-card appearance="elevated" size="md">
  <brightrail-card-header><h3>Medium</h3></brightrail-card-header>
  <brightrail-card-content><p>Default card density.</p></brightrail-card-content>
</brightrail-card>`,sizeLg:`<brightrail-card appearance="elevated" size="lg">
  <brightrail-card-header><h3>Large</h3></brightrail-card-header>
  <brightrail-card-content><p>Roomier spacing for dashboards.</p></brightrail-card-content>
</brightrail-card>`,stateInteractive:`<brightrail-card appearance="elevated" size="md" [interactive]="true" (activated)="onCardActivate()">
  <brightrail-card-header><h3>Selectable row</h3></brightrail-card-header>
  <brightrail-card-content><p>Whole card is keyboard activatable.</p></brightrail-card-content>
</brightrail-card>`,stateDismissible:`<brightrail-card appearance="basic" size="sm" [dismissible]="true" (dismiss)="onDismiss()">
  <brightrail-card-header><h3>Heads up</h3></brightrail-card-header>
  <brightrail-card-content>
    <p>You can dismiss this card from the corner control.</p>
  </brightrail-card-content>
  <brightrail-card-actions align="end">
    <brightrail-button variant="link">View activity</brightrail-button>
  </brightrail-card-actions>
</brightrail-card>`,stateDisabled:`<brightrail-card appearance="elevated" size="md" state="disabled">
  <brightrail-card-header><h3>Disabled</h3></brightrail-card-header>
  <brightrail-card-content><p>Non-interactive muted surface.</p></brightrail-card-content>
</brightrail-card>`,stateFullWidth:`<brightrail-card appearance="outlined" size="md" [fullWidth]="true">
  <brightrail-card-header><h3>Full width</h3></brightrail-card-header>
  <brightrail-card-content><p>Stretches to the parent container.</p></brightrail-card-content>
</brightrail-card>`,patternTitledHeader:`<brightrail-card appearance="elevated" size="md">
  <brightrail-card-header [withTitle]="true" [showLeading]="true">
    <span class="br-card-header-chart-badge" brightrailCardHeaderLeading>
      <brightrail-icon name="show_chart" />
    </span>
    <span class="br-card-header-heading" brightrailCardHeaderTitle>Team performance</span>
  </brightrail-card-header>
  <brightrail-card-content>
    <p>Structured header row with leading slot.</p>
  </brightrail-card-content>
</brightrail-card>`,patternHeaderActions:`<brightrail-card appearance="elevated" size="md">
  <brightrail-card-header [withTitle]="true" [showLeading]="true">
    <span class="br-card-header-chart-badge" brightrailCardHeaderLeading>
      <brightrail-icon name="show_chart" />
    </span>
    <span class="br-card-header-heading" brightrailCardHeaderTitle>Team performance</span>
    <brightrail-icon-button ariaLabel="More options" brightrailCardHeaderActions>
      <brightrail-icon name="more_vert" />
    </brightrail-icon-button>
  </brightrail-card-header>
  <brightrail-card-content>
    <p>Overflow menu projected into header actions.</p>
  </brightrail-card-content>
</brightrail-card>`,patternActionsRow:`<brightrail-card appearance="elevated" size="md">
  <brightrail-card-header><h3>Delivery status</h3></brightrail-card-header>
  <brightrail-card-content><p>Primary action with supporting meta.</p></brightrail-card-content>
  <brightrail-card-actions align="between">
    <brightrail-button variant="primary">View details</brightrail-button>
    <span class="brightrail-text-secondary">Updated 10 min ago</span>
  </brightrail-card-actions>
</brightrail-card>`,patternFooterActions:`<brightrail-card appearance="outlined" size="md">
  <brightrail-card-header><h3>Confirm changes</h3></brightrail-card-header>
  <brightrail-card-content><p>Footer slot for paired actions.</p></brightrail-card-content>
  <brightrail-card-footer>
    <brightrail-button variant="outline">Cancel</brightrail-button>
    <brightrail-button variant="primary">Save</brightrail-button>
  </brightrail-card-footer>
</brightrail-card>`,enterpriseTeamDashboard:`<brightrail-card appearance="elevated" size="md">
  <brightrail-card-header [withTitle]="true" [showLeading]="true">
    <span class="br-card-header-chart-badge" brightrailCardHeaderLeading>
      <brightrail-icon name="show_chart" />
    </span>
    <span class="br-card-header-heading" brightrailCardHeaderTitle>Team performance</span>
    <brightrail-icon-button ariaLabel="More options" brightrailCardHeaderActions>
      <brightrail-icon name="more_vert" />
    </brightrail-icon-button>
  </brightrail-card-header>
  <brightrail-card-content>
    <p>Monitor weekly delivery metrics and team updates.</p>
  </brightrail-card-content>
  <brightrail-card-actions align="between">
    <brightrail-button variant="primary">View details</brightrail-button>
    <span class="brightrail-text-secondary">Updated 10 min ago</span>
  </brightrail-card-actions>
</brightrail-card>`,enterpriseStatsKpi:`<brightrail-card appearance="stats" size="md">
  <brightrail-card-header>
    <p class="br-card-stat-label">North star metric</p>
  </brightrail-card-header>
  <brightrail-card-content>
    <p class="br-card-stat-value">$24.8M</p>
    <p class="br-card-stat-trend">\u25B2 12.5% vs last month</p>
    <p>Compared to the prior rolling quarter.</p>
  </brightrail-card-content>
</brightrail-card>`,enterpriseHorizontalBrief:`<brightrail-card appearance="horizontal" size="md">
  <brightrail-card-media>
    <img class="card-demo-media-img" src="${c.horizontalThumb}" alt="" />
  </brightrail-card-media>
  <brightrail-card-header><h3>Briefing pack</h3></brightrail-card-header>
  <brightrail-card-content><p>Supporting copy for this card scenario.</p></brightrail-card-content>
  <brightrail-card-actions align="end">
    <brightrail-button variant="link" iconRight="chevron">Open</brightrail-button>
  </brightrail-card-actions>
</brightrail-card>`,enterpriseImageFeatured:`<brightrail-card appearance="image" size="md">
  <brightrail-card-media>
    <img class="card-demo-image" src="${c.imageLeadHero}" alt="Decorative artwork" />
  </brightrail-card-media>
  <brightrail-card-header><h3>Featured launch</h3></brightrail-card-header>
  <brightrail-card-content><p>Supporting copy for this card scenario.</p></brightrail-card-content>
  <brightrail-card-actions align="start">
    <brightrail-button variant="primary">View details</brightrail-button>
  </brightrail-card-actions>
</brightrail-card>`,futuristicGlassKpi:`<div class="ff-future-shell ff-future-shell--dark">
  <brightrail-card appearance="stats" size="md">
    <brightrail-card-header><p class="br-card-stat-label">Throughput</p></brightrail-card-header>
    <brightrail-card-content>
      <p class="br-card-stat-value">2.4 TB/s</p>
      <p class="br-card-stat-trend">\u25B2 8.2% vs baseline</p>
    </brightrail-card-content>
  </brightrail-card>
</div>`,futuristicNeon:`<div class="ff-future-shell ff-future-shell--neon">
  <brightrail-card appearance="elevated" size="sm">
    <brightrail-card-header><h3>Sync queue</h3></brightrail-card-header>
    <brightrail-card-content><p>12 nodes replicating.</p></brightrail-card-content>
  </brightrail-card>
</div>`,futuristicCyber:`<div class="ff-future-cyber-frame">
  <span class="ff-future-cyber-corner ff-future-cyber-corner--tl" aria-hidden="true"></span>
  <span class="ff-future-cyber-corner ff-future-cyber-corner--tr" aria-hidden="true"></span>
  <span class="ff-future-cyber-corner ff-future-cyber-corner--bl" aria-hidden="true"></span>
  <span class="ff-future-cyber-corner ff-future-cyber-corner--br" aria-hidden="true"></span>
  <brightrail-card appearance="outlined" size="md">
    <brightrail-card-header><h3>Sector lock</h3></brightrail-card-header>
    <brightrail-card-content><p>Authorization required.</p></brightrail-card-content>
  </brightrail-card>
</div>`,futuristicHolo:`<div class="ff-future-shell ff-future-shell--holo">
  <brightrail-card appearance="elevated" size="md">
    <brightrail-card-header><h3>Holo briefing</h3></brightrail-card-header>
    <brightrail-card-content><p>Mission timeline updated.</p></brightrail-card-content>
    <brightrail-card-actions align="end">
      <brightrail-button variant="link">Open</brightrail-button>
    </brightrail-card-actions>
  </brightrail-card>
</div>`};var O=`<brightrail-card appearance="elevated" size="md">
  <brightrail-card-header [withTitle]="true" [showLeading]="true">
    <span class="br-card-header-chart-badge" brightrailCardHeaderLeading>
      <brightrail-icon name="show_chart" />
    </span>
    <span class="br-card-header-heading" brightrailCardHeaderTitle>Team performance</span>
    <brightrail-icon-button ariaLabel="More options" brightrailCardHeaderActions>
      <brightrail-icon name="more_vert" />
    </brightrail-icon-button>
  </brightrail-card-header>
  <brightrail-card-content>
    <p>Monitor weekly delivery metrics and team updates.</p>
  </brightrail-card-content>
  <brightrail-card-actions align="between">
    <brightrail-button variant="primary">View details</brightrail-button>
    <span class="brightrail-text-secondary">Updated 10 min ago</span>
  </brightrail-card-actions>
</brightrail-card>

<brightrail-card appearance="horizontal" size="md">
  <brightrail-card-media>
    <img class="card-demo-media-img" src="${c.horizontalThumb}" alt="" />
  </brightrail-card-media>
  <brightrail-card-header><h3>Briefing pack</h3></brightrail-card-header>
  <brightrail-card-content><p>Media and copy in a horizontal row.</p></brightrail-card-content>
</brightrail-card>`;var s=class o{demoImages=c;s=T;static \u0275fac=function(d){return new(d||o)};static \u0275cmp=p({type:o,selectors:[["app-card-variation-catalog"]],decls:352,vars:39,consts:[[1,"crvc-block"],[1,"crvc-block__h"],[1,"crvc-grid","crvc-grid--cards"],["label","Basic",3,"snippet"],[1,"crvc-shell"],["appearance","basic","size","md"],["label","Elevated",3,"snippet"],["appearance","elevated","size","md"],["align","between"],["variant","primary"],[1,"brightrail-text-secondary"],["label","Outlined",3,"snippet"],["appearance","outlined","size","md"],[1,"crvc-footer-actions"],["variant","outline"],["label","Filled",3,"snippet"],["appearance","filled","size","md"],["label","Horizontal",3,"snippet"],["appearance","horizontal","size","md"],["width","96","height","96","alt","",1,"crvc-media-img",3,"src"],["align","end"],["variant","link","iconRight","chevron"],["label","Image lead",3,"snippet"],["appearance","image","size","md"],["width","640","height","360","alt","Decorative artwork",1,"crvc-image-lead",3,"src"],["align","start"],["label","Stats",3,"snippet"],["appearance","stats","size","md"],[1,"br-card-stat-label"],[1,"br-card-stat-value"],[1,"br-card-stat-trend"],["aria-hidden","true"],[1,"crvc-grid","crvc-grid--sizes"],["label","Small",3,"snippet"],["appearance","elevated","size","sm"],["label","Medium",3,"snippet"],["label","Large",3,"snippet"],["appearance","elevated","size","lg"],["label","Interactive",3,"snippet"],["appearance","elevated","size","md",3,"interactive"],["label","Dismissible",3,"snippet"],["appearance","basic","size","sm",3,"dismissible"],["variant","link"],["label","Disabled",3,"snippet"],["appearance","elevated","size","md","state","disabled"],["label","Full width",3,"snippet"],[1,"crvc-shell","crvc-shell--wide"],["appearance","outlined","size","md",3,"fullWidth"],["label","Titled header + leading",3,"snippet"],[3,"withTitle","showLeading"],["brightrailCardHeaderLeading","",1,"br-card-header-chart-badge"],["name","show_chart"],["brightrailCardHeaderTitle","",1,"br-card-header-heading"],["label","Header overflow actions",3,"snippet"],["ariaLabel","More options","brightrailCardHeaderActions",""],["name","more_vert"],["label","Actions row",3,"snippet"],["label","Footer actions",3,"snippet"],[1,"crvc-block__hint"],[1,"crvc-stack-demos"],["label","Team dashboard",3,"snippet"],[1,"crvc-shell","crvc-shell--example"],["label","Stats KPI",3,"snippet"],["label","Horizontal brief",3,"snippet"],["label","Image featured",3,"snippet"],[1,"ff-future-grid"],["label","Glass KPI on dark",3,"snippet"],[1,"ff-future-shell","ff-future-shell--dark"],[1,"ff-future-shell__label"],["label","Neon sync card",3,"snippet"],[1,"ff-future-shell","ff-future-shell--neon"],["label","Cyber sector lock",3,"snippet"],[1,"ff-future-shell","ff-future-shell--cyber"],[1,"ff-future-cyber-frame"],["aria-hidden","true",1,"ff-future-cyber-corner","ff-future-cyber-corner--tl"],["aria-hidden","true",1,"ff-future-cyber-corner","ff-future-cyber-corner--tr"],["aria-hidden","true",1,"ff-future-cyber-corner","ff-future-cyber-corner--bl"],["aria-hidden","true",1,"ff-future-cyber-corner","ff-future-cyber-corner--br"],["label","Holo briefing",3,"snippet"],[1,"ff-future-shell","ff-future-shell--holo"]],template:function(d,n){d&1&&(t(0,"section",0)(1,"h2",1),r(2,"1. Core appearances"),e(),t(3,"div",2)(4,"app-catalog-variation-tile",3)(5,"div",4)(6,"brightrail-card",5)(7,"brightrail-card-header")(8,"h3"),r(9,"Card title"),e()(),t(10,"brightrail-card-content")(11,"p"),r(12,"Flat surface with minimal chrome."),e()()()()(),t(13,"app-catalog-variation-tile",6)(14,"div",4)(15,"brightrail-card",7)(16,"brightrail-card-header")(17,"h3"),r(18,"Team performance"),e()(),t(19,"brightrail-card-content")(20,"p"),r(21,"Monitor weekly delivery metrics and team updates."),e()(),t(22,"brightrail-card-actions",8)(23,"brightrail-button",9),r(24,"View details"),e(),t(25,"span",10),r(26,"Updated 10 min ago"),e()()()()(),t(27,"app-catalog-variation-tile",11)(28,"div",4)(29,"brightrail-card",12)(30,"brightrail-card-header")(31,"h3"),r(32,"Review changes"),e()(),t(33,"brightrail-card-content")(34,"p"),r(35,"Bordered surface for forms and confirmations."),e()(),t(36,"brightrail-card-footer",13)(37,"brightrail-button",14),r(38,"Cancel"),e(),t(39,"brightrail-button",9),r(40,"Save"),e()()()()(),t(41,"app-catalog-variation-tile",15)(42,"div",4)(43,"brightrail-card",16)(44,"brightrail-card-header")(45,"h3"),r(46,"Summary"),e()(),t(47,"brightrail-card-content")(48,"p"),r(49,"Tinted background for grouped content blocks."),e()()()()()()(),t(50,"section",0)(51,"h2",1),r(52,"2. Layout types"),e(),t(53,"div",2)(54,"app-catalog-variation-tile",17)(55,"div",4)(56,"brightrail-card",18)(57,"brightrail-card-media"),l(58,"img",19),e(),t(59,"brightrail-card-header")(60,"h3"),r(61,"Briefing pack"),e()(),t(62,"brightrail-card-content")(63,"p"),r(64,"Media and copy in a horizontal row."),e()(),t(65,"brightrail-card-actions",20)(66,"brightrail-button",21),r(67,"Open"),e()()()()(),t(68,"app-catalog-variation-tile",22)(69,"div",4)(70,"brightrail-card",23)(71,"brightrail-card-media"),l(72,"img",24),e(),t(73,"brightrail-card-header")(74,"h3"),r(75,"Featured launch"),e()(),t(76,"brightrail-card-content")(77,"p"),r(78,"Hero image leads the card stack."),e()(),t(79,"brightrail-card-actions",25)(80,"brightrail-button",9),r(81,"View details"),e()()()()(),t(82,"app-catalog-variation-tile",26)(83,"div",4)(84,"brightrail-card",27)(85,"brightrail-card-header")(86,"p",28),r(87,"Total revenue"),e()(),t(88,"brightrail-card-content")(89,"p",29),r(90,"$24.8M"),e(),t(91,"p",30)(92,"span",31),r(93,"\u25B2"),e(),r(94," 12.5% vs last month "),e(),t(95,"p"),r(96,"Compared to the prior rolling quarter."),e()()()()()()(),t(97,"section",0)(98,"h2",1),r(99,"3. Sizes"),e(),t(100,"div",32)(101,"app-catalog-variation-tile",33)(102,"div",4)(103,"brightrail-card",34)(104,"brightrail-card-header")(105,"h3"),r(106,"Small"),e()(),t(107,"brightrail-card-content")(108,"p"),r(109,"Compact padding and type scale."),e()()()()(),t(110,"app-catalog-variation-tile",35)(111,"div",4)(112,"brightrail-card",7)(113,"brightrail-card-header")(114,"h3"),r(115,"Medium"),e()(),t(116,"brightrail-card-content")(117,"p"),r(118,"Default card density."),e()()()()(),t(119,"app-catalog-variation-tile",36)(120,"div",4)(121,"brightrail-card",37)(122,"brightrail-card-header")(123,"h3"),r(124,"Large"),e()(),t(125,"brightrail-card-content")(126,"p"),r(127,"Roomier spacing for dashboards."),e()()()()()()(),t(128,"section",0)(129,"h2",1),r(130,"4. Interactive & dismissible states"),e(),t(131,"div",2)(132,"app-catalog-variation-tile",38)(133,"div",4)(134,"brightrail-card",39)(135,"brightrail-card-header")(136,"h3"),r(137,"Selectable row"),e()(),t(138,"brightrail-card-content")(139,"p"),r(140,"Whole card is keyboard activatable."),e()()()()(),t(141,"app-catalog-variation-tile",40)(142,"div",4)(143,"brightrail-card",41)(144,"brightrail-card-header")(145,"h3"),r(146,"Heads up"),e()(),t(147,"brightrail-card-content")(148,"p"),r(149,"You can dismiss this card from the corner control."),e()(),t(150,"brightrail-card-actions",20)(151,"brightrail-button",42),r(152,"View activity"),e()()()()(),t(153,"app-catalog-variation-tile",43)(154,"div",4)(155,"brightrail-card",44)(156,"brightrail-card-header")(157,"h3"),r(158,"Disabled"),e()(),t(159,"brightrail-card-content")(160,"p"),r(161,"Non-interactive muted surface."),e()()()()(),t(162,"app-catalog-variation-tile",45)(163,"div",46)(164,"brightrail-card",47)(165,"brightrail-card-header")(166,"h3"),r(167,"Full width"),e()(),t(168,"brightrail-card-content")(169,"p"),r(170,"Stretches to the parent container."),e()()()()()()(),t(171,"section",0)(172,"h2",1),r(173,"5. Header, actions & footer patterns"),e(),t(174,"div",2)(175,"app-catalog-variation-tile",48)(176,"div",4)(177,"brightrail-card",7)(178,"brightrail-card-header",49)(179,"span",50),l(180,"brightrail-icon",51),e(),t(181,"span",52),r(182,"Team performance"),e()(),t(183,"brightrail-card-content")(184,"p"),r(185,"Structured header row with leading slot."),e()()()()(),t(186,"app-catalog-variation-tile",53)(187,"div",4)(188,"brightrail-card",7)(189,"brightrail-card-header",49)(190,"span",50),l(191,"brightrail-icon",51),e(),t(192,"span",52),r(193,"Team performance"),e(),t(194,"brightrail-icon-button",54),l(195,"brightrail-icon",55),e()(),t(196,"brightrail-card-content")(197,"p"),r(198,"Overflow menu projected into header actions."),e()()()()(),t(199,"app-catalog-variation-tile",56)(200,"div",4)(201,"brightrail-card",7)(202,"brightrail-card-header")(203,"h3"),r(204,"Delivery status"),e()(),t(205,"brightrail-card-content")(206,"p"),r(207,"Primary action with supporting meta."),e()(),t(208,"brightrail-card-actions",8)(209,"brightrail-button",9),r(210,"View details"),e(),t(211,"span",10),r(212,"Updated 10 min ago"),e()()()()(),t(213,"app-catalog-variation-tile",57)(214,"div",4)(215,"brightrail-card",12)(216,"brightrail-card-header")(217,"h3"),r(218,"Confirm changes"),e()(),t(219,"brightrail-card-content")(220,"p"),r(221,"Footer slot for paired actions."),e()(),t(222,"brightrail-card-footer",13)(223,"brightrail-button",14),r(224,"Cancel"),e(),t(225,"brightrail-button",9),r(226,"Save"),e()()()()()()(),t(227,"section",0)(228,"h2",1),r(229,"6. Enterprise-style composed cards"),e(),t(230,"p",58),r(231,"Full recipes from the card playground \u2014 dashboard KPIs, media layouts, and titled headers."),e(),t(232,"div",59)(233,"app-catalog-variation-tile",60)(234,"div",61)(235,"brightrail-card",7)(236,"brightrail-card-header",49)(237,"span",50),l(238,"brightrail-icon",51),e(),t(239,"span",52),r(240,"Team performance"),e(),t(241,"brightrail-icon-button",54),l(242,"brightrail-icon",55),e()(),t(243,"brightrail-card-content")(244,"p"),r(245,"Monitor weekly delivery metrics and team updates."),e()(),t(246,"brightrail-card-actions",8)(247,"brightrail-button",9),r(248,"View details"),e(),t(249,"span",10),r(250,"Updated 10 min ago"),e()()()()(),t(251,"app-catalog-variation-tile",62)(252,"div",61)(253,"brightrail-card",27)(254,"brightrail-card-header")(255,"p",28),r(256,"North star metric"),e()(),t(257,"brightrail-card-content")(258,"p",29),r(259,"$24.8M"),e(),t(260,"p",30)(261,"span",31),r(262,"\u25B2"),e(),r(263," 12.5% vs last month "),e(),t(264,"p"),r(265,"Compared to the prior rolling quarter."),e()()()()(),t(266,"app-catalog-variation-tile",63)(267,"div",61)(268,"brightrail-card",18)(269,"brightrail-card-media"),l(270,"img",19),e(),t(271,"brightrail-card-header")(272,"h3"),r(273,"Briefing pack"),e()(),t(274,"brightrail-card-content")(275,"p"),r(276,"Supporting copy for this card scenario."),e()(),t(277,"brightrail-card-actions",20)(278,"brightrail-button",21),r(279,"Open"),e()()()()(),t(280,"app-catalog-variation-tile",64)(281,"div",61)(282,"brightrail-card",23)(283,"brightrail-card-media"),l(284,"img",24),e(),t(285,"brightrail-card-header")(286,"h3"),r(287,"Featured launch"),e()(),t(288,"brightrail-card-content")(289,"p"),r(290,"Supporting copy for this card scenario."),e()(),t(291,"brightrail-card-actions",25)(292,"brightrail-button",9),r(293,"View details"),e()()()()()()(),t(294,"section",0)(295,"h2",1),r(296,"7. Futuristic card designs"),e(),t(297,"div",65)(298,"app-catalog-variation-tile",66)(299,"div",67)(300,"span",68),r(301,"Dark"),e(),t(302,"brightrail-card",27)(303,"brightrail-card-header")(304,"p",28),r(305,"Throughput"),e()(),t(306,"brightrail-card-content")(307,"p",29),r(308,"2.4 TB/s"),e(),t(309,"p",30)(310,"span",31),r(311,"\u25B2"),e(),r(312," 8.2% vs baseline"),e()()()()(),t(313,"app-catalog-variation-tile",69)(314,"div",70)(315,"span",68),r(316,"Neon"),e(),t(317,"brightrail-card",34)(318,"brightrail-card-header")(319,"h3"),r(320,"Sync queue"),e()(),t(321,"brightrail-card-content")(322,"p"),r(323,"12 nodes replicating."),e()()()()(),t(324,"app-catalog-variation-tile",71)(325,"div",72)(326,"div",73),l(327,"span",74)(328,"span",75)(329,"span",76)(330,"span",77),t(331,"brightrail-card",12)(332,"brightrail-card-header")(333,"h3"),r(334,"Sector lock"),e()(),t(335,"brightrail-card-content")(336,"p"),r(337,"Authorization required."),e()()()()()(),t(338,"app-catalog-variation-tile",78)(339,"div",79)(340,"span",68),r(341,"Holo"),e(),t(342,"brightrail-card",7)(343,"brightrail-card-header")(344,"h3"),r(345,"Holo briefing"),e()(),t(346,"brightrail-card-content")(347,"p"),r(348,"Mission timeline updated."),e()(),t(349,"brightrail-card-actions",20)(350,"brightrail-button",42),r(351,"Open"),e()()()()()()()),d&2&&(a(4),i("snippet",n.s.coreBasic),a(9),i("snippet",n.s.coreElevated),a(14),i("snippet",n.s.coreOutlined),a(14),i("snippet",n.s.coreFilled),a(13),i("snippet",n.s.layoutHorizontal),a(4),i("src",n.demoImages.horizontalThumb,h),a(10),i("snippet",n.s.layoutImage),a(4),i("src",n.demoImages.imageLeadHero,h),a(10),i("snippet",n.s.layoutStats),a(19),i("snippet",n.s.sizeSm),a(9),i("snippet",n.s.sizeMd),a(9),i("snippet",n.s.sizeLg),a(13),i("snippet",n.s.stateInteractive),a(2),i("interactive",!0),a(7),i("snippet",n.s.stateDismissible),a(2),i("dismissible",!0),a(10),i("snippet",n.s.stateDisabled),a(9),i("snippet",n.s.stateFullWidth),a(2),i("fullWidth",!0),a(11),i("snippet",n.s.patternTitledHeader),a(3),i("withTitle",!0)("showLeading",!0),a(8),i("snippet",n.s.patternHeaderActions),a(3),i("withTitle",!0)("showLeading",!0),a(10),i("snippet",n.s.patternActionsRow),a(14),i("snippet",n.s.patternFooterActions),a(20),i("snippet",n.s.enterpriseTeamDashboard),a(3),i("withTitle",!0)("showLeading",!0),a(15),i("snippet",n.s.enterpriseStatsKpi),a(15),i("snippet",n.s.enterpriseHorizontalBrief),a(4),i("src",n.demoImages.horizontalThumb,h),a(10),i("snippet",n.s.enterpriseImageFeatured),a(4),i("src",n.demoImages.imageLeadHero,h),a(14),i("snippet",n.s.futuristicGlassKpi),a(15),i("snippet",n.s.futuristicNeon),a(11),i("snippet",n.s.futuristicCyber),a(14),i("snippet",n.s.futuristicHolo))},dependencies:[y,C,E,x,z,w,_,S,M,f,v,u,k],styles:["[_nghost-%COMP%]{display:block}.crvc-block[_ngcontent-%COMP%]{margin-bottom:1.35rem}.crvc-block__h[_ngcontent-%COMP%]{margin:0 0 .5rem;font-size:.95rem;font-weight:700}.crvc-block__hint[_ngcontent-%COMP%]{margin:-.15rem 0 .65rem;font-size:.78rem;color:var(--ff-muted, #64748b)}.crvc-grid[_ngcontent-%COMP%]{display:grid;gap:.65rem;grid-template-columns:repeat(auto-fill,minmax(11.5rem,1fr))}.crvc-grid--cards[_ngcontent-%COMP%]{grid-template-columns:repeat(auto-fill,minmax(14rem,1fr))}.crvc-grid--sizes[_ngcontent-%COMP%]{grid-template-columns:repeat(auto-fill,minmax(10rem,1fr))}.crvc-stack-demos[_ngcontent-%COMP%]{display:grid;gap:.65rem;grid-template-columns:repeat(auto-fill,minmax(16rem,1fr))}.crvc-shell[_ngcontent-%COMP%]{width:100%;max-width:min(22rem,100%);margin-inline:auto}.crvc-shell--wide[_ngcontent-%COMP%]{max-width:100%}.crvc-shell--example[_ngcontent-%COMP%]{max-width:min(24rem,100%)}.crvc-shell[_ngcontent-%COMP%]   brightrail-card[_ngcontent-%COMP%]{width:100%}.crvc-media-img[_ngcontent-%COMP%]{display:block;width:100%;height:100%;min-height:4rem;max-height:6rem;object-fit:cover}.crvc-image-lead[_ngcontent-%COMP%]{display:block;width:100%;max-height:11rem;aspect-ratio:16/9;object-fit:cover;flex-shrink:0}.crvc-footer-actions[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:.5rem;align-items:center;justify-content:flex-end}"],changeDetection:0})};var H=class o{htmlExamples=O;static \u0275fac=function(d){return new(d||o)};static \u0275cmp=p({type:o,selectors:[["app-card-catalog-overview"]],decls:34,vars:1,consts:[[1,"crco"],[1,"crco-hero"],[1,"crco-hero__eyebrow"],[1,"crco-hero__links"],["routerLink","..",1,"crco-link"],["routerLink","/variations",1,"crco-link"],["aria-labelledby","crco-html-examples",1,"crco-code-block"],["id","crco-html-examples"],[1,"crco-code-block__hint"],[1,"crco-pre"]],template:function(d,n){d&1&&(t(0,"div",0)(1,"header",1)(2,"p",2),r(3,"Brightrail \xB7 Card \xB7 Variation catalog"),e(),t(4,"h1"),r(5,"Card types & variations"),e(),t(6,"p"),r(7," Reference catalog for card appearances, layouts, sizes, states, and composed patterns. Click any tile for "),t(8,"strong"),r(9,"View code"),e(),r(10,", then "),t(11,"strong"),r(12,"Copy code"),e(),r(13," to paste into your app (import from "),t(14,"code"),r(15,"brightrail"),e(),r(16,"). "),e(),t(17,"p",3)(18,"a",4),r(19,"\u2190 Card playground (live settings)"),e(),t(20,"a",5),r(21,"All variation catalogs"),e()()(),l(22,"app-card-variation-catalog"),t(23,"section",6)(24,"h2",7),r(25,"Card HTML examples"),e(),t(26,"p",8),r(27," Typical markup for an elevated dashboard card and a horizontal media layout \u2014 aligned with "),t(28,"code"),r(29,"doc/card/"),e(),r(30," reference mocks. "),e(),t(31,"pre",9)(32,"code"),r(33),e()()()()),d&2&&(a(33),m(n.htmlExamples))},dependencies:[b,s],styles:["[_nghost-%COMP%]{flex:1 1 auto;min-height:0;overflow:auto}.crco[_ngcontent-%COMP%]{padding:1rem 1.25rem 1.5rem}.crco-hero__eyebrow[_ngcontent-%COMP%]{margin:0 0 .25rem;font-size:.75rem;font-weight:600;letter-spacing:.04em;text-transform:uppercase;color:var(--ff-muted, #64748b)}.crco-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0;font-size:1.5rem}.crco-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:.35rem 0 .5rem;color:var(--ff-muted, #64748b)}.crco-hero__links[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:.75rem 1.25rem}.crco-link[_ngcontent-%COMP%]{color:var(--ff-accent, #2563eb);text-decoration:none;font-weight:600}.crco-code-block[_ngcontent-%COMP%]{margin:1.5rem 0 0;padding-top:1rem;border-top:1px solid var(--ff-border, #e2e8f0)}.crco-code-block[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.1rem;margin:0 0 .35rem}.crco-code-block__hint[_ngcontent-%COMP%]{margin:0 0 .65rem;font-size:.8125rem;color:var(--ff-muted, #64748b)}.crco-pre[_ngcontent-%COMP%]{margin:0;padding:.85rem;border-radius:.5rem;background:var(--ff-surface-muted, #f1f3f4);border:1px solid var(--ff-border, #e2e8f0);overflow:auto;font-size:.8rem}"],changeDetection:0})};export{H as CardCatalogOverviewComponent};
