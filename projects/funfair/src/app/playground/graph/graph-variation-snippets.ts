/** Copy-ready markup — bind your own `series`, `segments`, or `heatmapCells` from the app. */
export const GRAPH_VARIATION_SNIPPETS = {
  lineDefault: `<brightrail-graph
  kind="line"
  [series]="chartSeries"
  xAxisLabel="Month"
  yAxisLabel="Revenue (USD)"
  [showGrid]="true"
  [showLegend]="true"
  [showTooltip]="true"
/>`,
  lineSmooth: `<brightrail-graph
  kind="line-smooth"
  [series]="chartSeries"
  yAxisLabel="Revenue (USD)"
  lineStyle="smooth"
  [showGrid]="true"
/>`,
  lineArea: `<brightrail-graph
  kind="line-area"
  [series]="chartSeries"
  [showArea]="true"
  yAxisLabel="Revenue (USD)"
  [showGrid]="true"
/>`,
  lineMulti: `<brightrail-graph
  kind="line-multi"
  [series]="multiSeries"
  yAxisLabel="Revenue (USD)"
  legendPosition="bottom"
  [showGrid]="true"
  [showLegend]="true"
/>`,
  barVertical: `<brightrail-graph
  kind="bar-vertical"
  [series]="chartSeries"
  yAxisLabel="Units"
  [showGrid]="true"
/>`,
  barStacked: `<brightrail-graph
  kind="bar-stacked"
  [series]="multiSeries"
  yAxisLabel="Share"
  [showGrid]="true"
  [showLegend]="true"
/>`,
  barHorizontal: `<brightrail-graph
  kind="bar-horizontal"
  [series]="chartSeries"
  yAxisLabel="Revenue"
  [showGrid]="true"
/>`,
  barGrouped: `<brightrail-graph
  kind="bar-grouped"
  [series]="multiSeries"
  yAxisLabel="Volume"
  [showGrid]="true"
  [showLegend]="true"
/>`,
  areaDefault: `<brightrail-graph
  kind="area"
  [series]="chartSeries"
  [showArea]="true"
  yAxisLabel="Revenue (USD)"
  [showGrid]="true"
/>`,
  areaGradient: `<brightrail-graph
  kind="area-gradient"
  [series]="chartSeries"
  [showArea]="true"
  yAxisLabel="Revenue (USD)"
  [showGrid]="true"
/>`,
  areaStacked: `<brightrail-graph
  kind="area-stacked"
  [series]="multiSeries"
  [showArea]="true"
  yAxisLabel="Share"
  [showLegend]="true"
/>`,
  areaStep: `<brightrail-graph
  kind="area-step"
  [series]="chartSeries"
  lineStyle="step"
  [showArea]="true"
  yAxisLabel="Revenue (USD)"
/>`,
  donutStandard: `<brightrail-graph
  kind="donut"
  [segments]="channelSegments"
  [donutInnerRadius]="0.55"
  [showLegend]="true"
  legendPosition="right"
  ariaLabel="Traffic by channel"
/>`,
  pieStandard: `<brightrail-graph
  kind="pie"
  [segments]="channelSegments"
  [showLegend]="true"
  ariaLabel="Channel mix"
/>`,
  radialProgress: `<brightrail-graph
  kind="radial"
  [radialValue]="completionPct"
  ariaLabel="Goal completion"
/>`,
  gauge: `<brightrail-graph
  kind="gauge"
  [gaugeValue]="score"
  ariaLabel="Performance gauge"
/>`,
  scatterPlot: `<brightrail-graph
  kind="scatter"
  [series]="scatterSeries"
  yAxisLabel="Score"
  [showGrid]="true"
  [pointRadius]="5"
/>`,
  bubbleChart: `<brightrail-graph
  kind="bubble"
  [series]="bubbleSeries"
  yAxisLabel="Value"
  [showGrid]="true"
/>`,
  mixedChart: `<brightrail-graph
  kind="mixed"
  [series]="mixedSeries"
  yAxisLabel="Units / Conversion"
  [showGrid]="true"
  [showLegend]="true"
/>`,
  candlestick: `<brightrail-graph
  kind="candlestick"
  [series]="ohlcSeries"
  yAxisLabel="Price (USD)"
  [showGrid]="true"
/>`,
  heatmap: `<brightrail-graph
  kind="heatmap"
  [heatmapCells]="activityCells"
  ariaLabel="Activity heatmap"
/>`,
  funnel: `<brightrail-graph
  kind="funnel"
  [segments]="funnelStages"
  [showLegend]="true"
  ariaLabel="Conversion funnel"
/>`,

  futuristicGlass: `<div class="ff-future-shell ff-future-shell--glass">
  <brightrail-graph
    kind="area-gradient"
    [series]="chartSeries"
    [showArea]="true"
    yAxisLabel="Revenue (USD)"
    [height]="200"
  />
</div>`,
  futuristicNeon: `<div class="ff-future-shell ff-future-shell--neon">
  <brightrail-graph
    kind="line-smooth"
    surface="dark"
    [series]="chartSeries"
    yAxisLabel="Throughput"
    [height]="200"
  />
</div>`,
  futuristicCyber: `<div class="ff-future-shell ff-future-shell--cyber">
  <brightrail-graph
    kind="radial"
    surface="dark"
    [radialValue]="72"
    [height]="200"
    ariaLabel="System load"
  />
</div>`,
  futuristicHolo: `<div class="ff-future-shell ff-future-shell--holo">
  <brightrail-graph
    kind="donut"
    surface="dark"
    [segments]="channelSegments"
    [height]="200"
    ariaLabel="Channel mix"
  />
</div>`,
} as const;

export const GRAPH_DOC_SECTION_COUNT = 11;

export const GRAPH_HTML_EXAMPLES = `<!-- Your component owns the data -->
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
/>`;
