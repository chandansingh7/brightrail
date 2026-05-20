import {
  BrightrailGraphHeatCell,
  BrightrailGraphSegment,
  BrightrailGraphSeries,
} from 'brightrail';

function indentBlock(text: string, spaces: number): string {
  const pad = ' '.repeat(spaces);
  return text
    .split('\n')
    .map((line) => (line.length ? `${pad}${line}` : line))
    .join('\n');
}

function formatPoint(point: BrightrailGraphSeries['points'][number]): string {
  const parts = [`x: ${formatLiteral(point.x)}`];
  if ('y' in point && point.y !== undefined) {
    parts.push(`y: ${point.y}`);
  }
  if ('open' in point && point.open !== undefined) {
    parts.push(`open: ${point.open}`, `high: ${point.high}`, `low: ${point.low}`, `close: ${point.close}`);
  }
  if ('z' in point && point.z !== undefined) {
    parts.push(`z: ${point.z}`);
  }
  return `{ ${parts.join(', ')} }`;
}

function formatLiteral(value: string | number): string {
  return typeof value === 'number' ? String(value) : `'${value.replace(/'/g, "\\'")}'`;
}

export function formatGraphSeriesLiteral(series: BrightrailGraphSeries[]): string {
  const lines = series.map((s) => {
    const props = [`id: '${s.id}'`, `label: '${s.label.replace(/'/g, "\\'")}'`];
    if (s.color) {
      props.push(`color: '${s.color}'`);
    }
    const points = s.points.map((p) => formatPoint(p)).join(',\n      ');
    return `  {\n    ${props.join(',\n    ')},\n    points: [\n      ${points},\n    ],\n  }`;
  });
  return `[\n${lines.join(',\n')}\n]`;
}

export function formatGraphSegmentsLiteral(segments: BrightrailGraphSegment[]): string {
  const lines = segments.map((seg) => {
    const props = [`label: '${seg.label.replace(/'/g, "\\'")}'`, `value: ${seg.value}`];
    if (seg.color) {
      props.push(`color: '${seg.color}'`);
    }
    return `  { ${props.join(', ')} }`;
  });
  return `[\n${lines.join(',\n')}\n]`;
}

export function formatGraphHeatmapLiteral(cells: BrightrailGraphHeatCell[]): string {
  const lines = cells.map(
    (cell) =>
      `  { row: '${cell.row.replace(/'/g, "\\'")}', col: '${cell.col.replace(/'/g, "\\'")}', value: ${cell.value} }`,
  );
  return `[\n${lines.join(',\n')}\n]`;
}

export function formatGraphComponentClassBody(dataLines: string[]): string {
  return indentBlock(dataLines.join('\n\n'), 2);
}
