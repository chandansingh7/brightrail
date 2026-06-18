import{a as C}from"./chunk-FJ7PM77H.js";import{a as u,b,c as v,d as f,e as S,f as y,g as E,h as k,i as A,j as L}from"./chunk-ZSSUJTPH.js";import{b as c}from"./chunk-NF33QU7O.js";import"./chunk-63ZAJDYR.js";import{e as m}from"./chunk-FBGATJ5M.js";import"./chunk-573ITFZ2.js";import"./chunk-3SQNCDXW.js";import{Ca as p,Va as a,Wa as t,Xa as e,Ya as l,sb as n,ta as i,tb as g}from"./chunk-M22WAZLT.js";var _={lineDefault:`<brightrail-graph
  kind="line"
  [series]="chartSeries"
  xAxisLabel="Month"
  yAxisLabel="Revenue (USD)"
  [showGrid]="true"
  [showLegend]="true"
  [showTooltip]="true"
/>`,lineSmooth:`<brightrail-graph
  kind="line-smooth"
  [series]="chartSeries"
  yAxisLabel="Revenue (USD)"
  lineStyle="smooth"
  [showGrid]="true"
/>`,lineArea:`<brightrail-graph
  kind="line-area"
  [series]="chartSeries"
  [showArea]="true"
  yAxisLabel="Revenue (USD)"
  [showGrid]="true"
/>`,lineMulti:`<brightrail-graph
  kind="line-multi"
  [series]="multiSeries"
  yAxisLabel="Revenue (USD)"
  legendPosition="bottom"
  [showGrid]="true"
  [showLegend]="true"
/>`,barVertical:`<brightrail-graph
  kind="bar-vertical"
  [series]="chartSeries"
  yAxisLabel="Units"
  [showGrid]="true"
/>`,barStacked:`<brightrail-graph
  kind="bar-stacked"
  [series]="multiSeries"
  yAxisLabel="Share"
  [showGrid]="true"
  [showLegend]="true"
/>`,barHorizontal:`<brightrail-graph
  kind="bar-horizontal"
  [series]="chartSeries"
  yAxisLabel="Revenue"
  [showGrid]="true"
/>`,barGrouped:`<brightrail-graph
  kind="bar-grouped"
  [series]="multiSeries"
  yAxisLabel="Volume"
  [showGrid]="true"
  [showLegend]="true"
/>`,areaDefault:`<brightrail-graph
  kind="area"
  [series]="chartSeries"
  [showArea]="true"
  yAxisLabel="Revenue (USD)"
  [showGrid]="true"
/>`,areaGradient:`<brightrail-graph
  kind="area-gradient"
  [series]="chartSeries"
  [showArea]="true"
  yAxisLabel="Revenue (USD)"
  [showGrid]="true"
/>`,areaStacked:`<brightrail-graph
  kind="area-stacked"
  [series]="multiSeries"
  [showArea]="true"
  yAxisLabel="Share"
  [showLegend]="true"
/>`,areaStep:`<brightrail-graph
  kind="area-step"
  [series]="chartSeries"
  lineStyle="step"
  [showArea]="true"
  yAxisLabel="Revenue (USD)"
/>`,donutStandard:`<brightrail-graph
  kind="donut"
  [segments]="channelSegments"
  [donutInnerRadius]="0.55"
  [showLegend]="true"
  legendPosition="right"
  ariaLabel="Traffic by channel"
/>`,pieStandard:`<brightrail-graph
  kind="pie"
  [segments]="channelSegments"
  [showLegend]="true"
  ariaLabel="Channel mix"
/>`,radialProgress:`<brightrail-graph
  kind="radial"
  [radialValue]="completionPct"
  ariaLabel="Goal completion"
/>`,gauge:`<brightrail-graph
  kind="gauge"
  [gaugeValue]="score"
  ariaLabel="Performance gauge"
/>`,scatterPlot:`<brightrail-graph
  kind="scatter"
  [series]="scatterSeries"
  yAxisLabel="Score"
  [showGrid]="true"
  [pointRadius]="5"
/>`,bubbleChart:`<brightrail-graph
  kind="bubble"
  [series]="bubbleSeries"
  yAxisLabel="Value"
  [showGrid]="true"
/>`,mixedChart:`<brightrail-graph
  kind="mixed"
  [series]="mixedSeries"
  yAxisLabel="Units / Conversion"
  [showGrid]="true"
  [showLegend]="true"
/>`,candlestick:`<brightrail-graph
  kind="candlestick"
  [series]="ohlcSeries"
  yAxisLabel="Price (USD)"
  [showGrid]="true"
/>`,heatmap:`<brightrail-graph
  kind="heatmap"
  [heatmapCells]="activityCells"
  ariaLabel="Activity heatmap"
/>`,funnel:`<brightrail-graph
  kind="funnel"
  [segments]="funnelStages"
  [showLegend]="true"
  ariaLabel="Conversion funnel"
/>`,futuristicGlass:`<div class="ff-future-shell ff-future-shell--glass">
  <brightrail-graph
    kind="area-gradient"
    [series]="chartSeries"
    [showArea]="true"
    yAxisLabel="Revenue (USD)"
    [height]="200"
  />
</div>`,futuristicNeon:`<div class="ff-future-shell ff-future-shell--neon">
  <brightrail-graph
    kind="line-smooth"
    surface="dark"
    [series]="chartSeries"
    yAxisLabel="Throughput"
    [height]="200"
  />
</div>`,futuristicCyber:`<div class="ff-future-shell ff-future-shell--cyber">
  <brightrail-graph
    kind="radial"
    surface="dark"
    [radialValue]="72"
    [height]="200"
    ariaLabel="System load"
  />
</div>`,futuristicHolo:`<div class="ff-future-shell ff-future-shell--holo">
  <brightrail-graph
    kind="donut"
    surface="dark"
    [segments]="channelSegments"
    [height]="200"
    ariaLabel="Channel mix"
  />
</div>`};var w=`<!-- Your component owns the data -->
<brightrail-graph
  kind="line-area"
  [series]="chartSeries"
  xAxisLabel="Month"
  yAxisLabel="Revenue (USD)"
  tooltipValuePrefix="$"
  [lineWidth]="2"
  [showArea]="true"
  [showGrid]="true"
  [showLegend]="true"
  [showTooltip]="true"
  legendPosition="bottom"
  ariaLabel="Sales overview"
/>

<brightrail-graph
  kind="donut"
  [segments]="channelSegments"
  [donutInnerRadius]="0.55"
  [showLegend]="true"
  legendPosition="right"
  ariaLabel="Traffic by channel"
/>`;var h=class o{s=_;salesOverview=u;salesMulti=b;channelMix=v;channelSegments=f;scatterSeries=S;bubbleSeries=y;mixedSeries=L;candleSeries=E;heatmapCells=k;funnelStages=A;static \u0275fac=function(s){return new(s||o)};static \u0275cmp=p({type:o,selectors:[["app-graph-variation-catalog"]],decls:104,vars:84,consts:[[1,"gvc-block"],[1,"gvc-block__h"],[1,"gvc-grid"],["label","Default",3,"snippet"],["kind","line","yAxisLabel","Revenue (USD)",3,"series","height"],["label","Smooth",3,"snippet"],["kind","line-smooth","yAxisLabel","Revenue (USD)",3,"series","height"],["label","With area",3,"snippet"],["kind","line-area","yAxisLabel","Revenue (USD)",3,"series","showArea","height"],["label","Multi line",3,"snippet"],["kind","line-multi","yAxisLabel","Revenue (USD)",3,"series","height"],["label","Vertical",3,"snippet"],["kind","bar-vertical","yAxisLabel","Units",3,"series","height"],["label","Stacked",3,"snippet"],["kind","bar-stacked","yAxisLabel","Share",3,"series","height"],["label","Horizontal",3,"snippet"],["kind","bar-horizontal","yAxisLabel","Revenue",3,"series","height"],["label","Grouped",3,"snippet"],["kind","bar-grouped","yAxisLabel","Volume",3,"series","height"],["kind","area","yAxisLabel","Revenue (USD)",3,"series","showArea","height"],["label","Gradient",3,"snippet"],["kind","area-gradient","yAxisLabel","Revenue (USD)",3,"series","showArea","height"],["label","Stacked area",3,"snippet"],["kind","area-stacked","yAxisLabel","Share",3,"series","showArea","height"],["label","Step area",3,"snippet"],["kind","area-step","yAxisLabel","Revenue (USD)",3,"series","showArea","height"],["label","Standard donut",3,"snippet"],["kind","donut","ariaLabel","Traffic by channel",3,"segments","height"],["label","Pie chart",3,"snippet"],["kind","pie","ariaLabel","Channel mix",3,"segments","height"],["label","Radial progress",3,"snippet"],["kind","radial","ariaLabel","Goal completion",3,"radialValue","height"],["label","Gauge",3,"snippet"],["kind","gauge","ariaLabel","Performance gauge",3,"gaugeValue","height"],["label","Scatter plot",3,"snippet"],["kind","scatter","yAxisLabel","Score",3,"series","height"],["label","Bubble chart",3,"snippet"],["kind","bubble","yAxisLabel","Value",3,"series","height"],["label","Bar + line",3,"snippet"],["kind","mixed","yAxisLabel","Units / Conversion",3,"series","height"],["label","OHLC",3,"snippet"],["kind","candlestick","yAxisLabel","Price (USD)",3,"series","height"],["label","Activity grid",3,"snippet"],["kind","heatmap","ariaLabel","Activity heatmap",3,"heatmapCells","height"],["label","Conversion funnel",3,"snippet"],["kind","funnel","ariaLabel","Conversion funnel",3,"segments","height"],[1,"ff-future-grid"],["label","Glass gradient area",3,"snippet"],[1,"ff-future-shell","ff-future-shell--glass"],["aria-hidden","true",1,"ff-future-shell__label"],["label","Neon line",3,"snippet"],[1,"ff-future-shell","ff-future-shell--neon"],["kind","line-smooth","surface","dark","yAxisLabel","Throughput",3,"series","height"],["label","Cyber radial",3,"snippet"],[1,"ff-future-shell","ff-future-shell--cyber"],["kind","radial","surface","dark","ariaLabel","System load",3,"radialValue","height"],["label","Holo donut",3,"snippet"],[1,"ff-future-shell","ff-future-shell--holo"],["kind","donut","surface","dark","ariaLabel","Channel mix",3,"segments","height"]],template:function(s,r){s&1&&(t(0,"section",0)(1,"h2",1),n(2,"1. Line graph"),e(),t(3,"div",2)(4,"app-catalog-variation-tile",3),l(5,"brightrail-graph",4),e(),t(6,"app-catalog-variation-tile",5),l(7,"brightrail-graph",6),e(),t(8,"app-catalog-variation-tile",7),l(9,"brightrail-graph",8),e(),t(10,"app-catalog-variation-tile",9),l(11,"brightrail-graph",10),e()()(),t(12,"section",0)(13,"h2",1),n(14,"2. Bar chart"),e(),t(15,"div",2)(16,"app-catalog-variation-tile",11),l(17,"brightrail-graph",12),e(),t(18,"app-catalog-variation-tile",13),l(19,"brightrail-graph",14),e(),t(20,"app-catalog-variation-tile",15),l(21,"brightrail-graph",16),e(),t(22,"app-catalog-variation-tile",17),l(23,"brightrail-graph",18),e()()(),t(24,"section",0)(25,"h2",1),n(26,"3. Area graph"),e(),t(27,"div",2)(28,"app-catalog-variation-tile",3),l(29,"brightrail-graph",19),e(),t(30,"app-catalog-variation-tile",20),l(31,"brightrail-graph",21),e(),t(32,"app-catalog-variation-tile",22),l(33,"brightrail-graph",23),e(),t(34,"app-catalog-variation-tile",24),l(35,"brightrail-graph",25),e()()(),t(36,"section",0)(37,"h2",1),n(38,"4. Donut / pie chart"),e(),t(39,"div",2)(40,"app-catalog-variation-tile",26),l(41,"brightrail-graph",27),e(),t(42,"app-catalog-variation-tile",28),l(43,"brightrail-graph",29),e()()(),t(44,"section",0)(45,"h2",1),n(46,"5. Radial / gauge chart"),e(),t(47,"div",2)(48,"app-catalog-variation-tile",30),l(49,"brightrail-graph",31),e(),t(50,"app-catalog-variation-tile",32),l(51,"brightrail-graph",33),e()()(),t(52,"section",0)(53,"h2",1),n(54,"6. Scatter / bubble chart"),e(),t(55,"div",2)(56,"app-catalog-variation-tile",34),l(57,"brightrail-graph",35),e(),t(58,"app-catalog-variation-tile",36),l(59,"brightrail-graph",37),e()()(),t(60,"section",0)(61,"h2",1),n(62,"7. Mixed chart"),e(),t(63,"app-catalog-variation-tile",38),l(64,"brightrail-graph",39),e()(),t(65,"section",0)(66,"h2",1),n(67,"8. Candlestick chart"),e(),t(68,"app-catalog-variation-tile",40),l(69,"brightrail-graph",41),e()(),t(70,"section",0)(71,"h2",1),n(72,"9. Heatmap chart"),e(),t(73,"app-catalog-variation-tile",42),l(74,"brightrail-graph",43),e()(),t(75,"section",0)(76,"h2",1),n(77,"10. Funnel chart"),e(),t(78,"app-catalog-variation-tile",44),l(79,"brightrail-graph",45),e()(),t(80,"section",0)(81,"h2",1),n(82,"11. Futuristic graph designs"),e(),t(83,"div",46)(84,"app-catalog-variation-tile",47)(85,"div",48)(86,"span",49),n(87,"Glass"),e(),l(88,"brightrail-graph",21),e()(),t(89,"app-catalog-variation-tile",50)(90,"div",51)(91,"span",49),n(92,"Neon"),e(),l(93,"brightrail-graph",52),e()(),t(94,"app-catalog-variation-tile",53)(95,"div",54)(96,"span",49),n(97,"Cyber"),e(),l(98,"brightrail-graph",55),e()(),t(99,"app-catalog-variation-tile",56)(100,"div",57)(101,"span",49),n(102,"Holo"),e(),l(103,"brightrail-graph",58),e()()()()),s&2&&(i(4),a("snippet",r.s.lineDefault),i(),a("series",r.salesOverview)("height",220),i(),a("snippet",r.s.lineSmooth),i(),a("series",r.salesOverview)("height",220),i(),a("snippet",r.s.lineArea),i(),a("series",r.salesOverview)("showArea",!0)("height",220),i(),a("snippet",r.s.lineMulti),i(),a("series",r.salesMulti)("height",220),i(5),a("snippet",r.s.barVertical),i(),a("series",r.salesOverview)("height",220),i(),a("snippet",r.s.barStacked),i(),a("series",r.channelMix)("height",220),i(),a("snippet",r.s.barHorizontal),i(),a("series",r.salesOverview)("height",220),i(),a("snippet",r.s.barGrouped),i(),a("series",r.channelMix)("height",220),i(5),a("snippet",r.s.areaDefault),i(),a("series",r.salesOverview)("showArea",!0)("height",220),i(),a("snippet",r.s.areaGradient),i(),a("series",r.salesOverview)("showArea",!0)("height",220),i(),a("snippet",r.s.areaStacked),i(),a("series",r.channelMix)("showArea",!0)("height",220),i(),a("snippet",r.s.areaStep),i(),a("series",r.salesOverview)("showArea",!0)("height",220),i(5),a("snippet",r.s.donutStandard),i(),a("segments",r.channelSegments)("height",220),i(),a("snippet",r.s.pieStandard),i(),a("segments",r.channelSegments)("height",220),i(5),a("snippet",r.s.radialProgress),i(),a("radialValue",68)("height",220),i(),a("snippet",r.s.gauge),i(),a("gaugeValue",72)("height",220),i(5),a("snippet",r.s.scatterPlot),i(),a("series",r.scatterSeries)("height",220),i(),a("snippet",r.s.bubbleChart),i(),a("series",r.bubbleSeries)("height",220),i(4),a("snippet",r.s.mixedChart),i(),a("series",r.mixedSeries)("height",220),i(4),a("snippet",r.s.candlestick),i(),a("series",r.candleSeries)("height",220),i(4),a("snippet",r.s.heatmap),i(),a("heatmapCells",r.heatmapCells)("height",220),i(4),a("snippet",r.s.funnel),i(),a("segments",r.funnelStages)("height",240),i(5),a("snippet",r.s.futuristicGlass),i(4),a("series",r.salesOverview)("showArea",!0)("height",180),i(),a("snippet",r.s.futuristicNeon),i(4),a("series",r.salesOverview)("height",180),i(),a("snippet",r.s.futuristicCyber),i(4),a("radialValue",72)("height",180),i(),a("snippet",r.s.futuristicHolo),i(4),a("segments",r.channelSegments)("height",180))},dependencies:[c,C],styles:[".gvc-block[_ngcontent-%COMP%]{margin-bottom:2rem}[_nghost-%COMP%]   .ff-future-shell[_ngcontent-%COMP%]{width:100%;flex-direction:column;align-items:stretch}.gvc-block__h[_ngcontent-%COMP%]{margin:0 0 .75rem;font-size:1rem}.gvc-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:1rem}[_nghost-%COMP%]     brightrail-graph{width:100%}"],changeDetection:0})};var x=class o{htmlExamples=w;static \u0275fac=function(s){return new(s||o)};static \u0275cmp=p({type:o,selectors:[["app-graph-catalog-overview"]],decls:43,vars:1,consts:[[1,"cco"],[1,"cco-hero"],[1,"cco-hero__eyebrow"],[1,"cco-hero__links"],["routerLink","..",1,"cco-link"],["routerLink","/variations",1,"cco-link"],["aria-labelledby","cco-html-examples",1,"cco-code-block"],["id","cco-html-examples"],[1,"cco-code-block__hint"],[1,"cco-pre"]],template:function(s,r){s&1&&(t(0,"div",0)(1,"header",1)(2,"p",2),n(3,"Brightrail \xB7 Graph \xB7 Variation catalog"),e(),t(4,"h1"),n(5,"Graph / chart variations"),e(),t(6,"p"),n(7," Mirrors "),t(8,"code"),n(9,"doc/graph/"),e(),n(10,". Click any tile for "),t(11,"strong"),n(12,"View code"),e(),n(13,", then "),t(14,"strong"),n(15,"Copy code"),e(),n(16," to paste into your app (import from "),t(17,"code"),n(18,"brightrail"),e(),n(19,"). "),e(),t(20,"p",3)(21,"a",4),n(22,"\u2190 Graph playground (live settings)"),e(),t(23,"a",5),n(24,"All variation catalogs"),e()()(),l(25,"app-graph-variation-catalog"),t(26,"section",6)(27,"h2",7),n(28,"Graph HTML examples"),e(),t(29,"p",8),n(30," The library is data-agnostic \u2014 define "),t(31,"code"),n(32,"chartSeries"),e(),n(33," / "),t(34,"code"),n(35,"channelSegments"),e(),n(36," in your component and bind them to "),t(37,"code"),n(38,"brightrail-graph"),e(),n(39,". "),e(),t(40,"pre",9)(41,"code"),n(42),e()()()()),s&2&&(i(42),g(r.htmlExamples))},dependencies:[m,h],styles:["[_nghost-%COMP%]{flex:1 1 auto;min-height:0;overflow:auto}.cco[_ngcontent-%COMP%]{padding:1rem 1.25rem 1.5rem}.cco-hero__eyebrow[_ngcontent-%COMP%]{margin:0 0 .25rem;font-size:.75rem;font-weight:600;letter-spacing:.04em;text-transform:uppercase;color:var(--ff-muted, #64748b)}.cco-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0;font-size:1.5rem}.cco-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:.35rem 0 .5rem;color:var(--ff-muted, #64748b)}.cco-hero__links[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:.75rem 1.25rem}.cco-link[_ngcontent-%COMP%]{color:var(--ff-accent, #2563eb);text-decoration:none;font-weight:600}.cco-code-block[_ngcontent-%COMP%]{margin:1.5rem 0 0;padding-top:1rem;border-top:1px solid var(--ff-border, #e2e8f0)}.cco-code-block[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.1rem;margin:0 0 .35rem}.cco-code-block__hint[_ngcontent-%COMP%]{margin:0 0 .65rem;font-size:.8125rem;color:var(--ff-muted, #64748b)}.cco-pre[_ngcontent-%COMP%]{margin:0;padding:.85rem;border-radius:.5rem;background:var(--ff-surface-muted, #f1f3f4);border:1px solid var(--ff-border, #e2e8f0);overflow:auto;font-size:.8rem}"],changeDetection:0})};export{x as GraphCatalogOverviewComponent};
