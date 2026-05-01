#!/usr/bin/env bash
# Build the library and both apps, then serve Funfair + Midway on separate ports.
# Default ports match projects/funfair/src/app/midway-dev-port.ts — change both if you remap MIDWAY_PORT.

set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

FUNFAIR_PORT="${FUNFAIR_PORT:-4200}"
MIDWAY_PORT="${MIDWAY_PORT:-4201}"

echo "==> Building brightrail → dist/brightrail"
npm run build:lib

echo "==> npm install (refresh file:dist/brightrail for Midway)"
npm install

echo "==> Building funfair and midway"
npm run build:funfair
npm run build:midway

FUNFAIR_PID=""
MIDWAY_PID=""
cleanup() {
  if [[ -n "${FUNFAIR_PID}" ]] && kill -0 "${FUNFAIR_PID}" 2>/dev/null; then
    kill "${FUNFAIR_PID}" 2>/dev/null || true
  fi
  if [[ -n "${MIDWAY_PID}" ]] && kill -0 "${MIDWAY_PID}" 2>/dev/null; then
    kill "${MIDWAY_PID}" 2>/dev/null || true
  fi
}
trap cleanup EXIT INT TERM

echo ""
echo "==> Serving Funfair at http://localhost:${FUNFAIR_PORT}"
echo "==> Serving Midway at  http://localhost:${MIDWAY_PORT}"
echo "    (Funfair includes a link to Midway; set FUNFAIR_PORT / MIDWAY_PORT to override.)"
echo ""

ng serve funfair --port "${FUNFAIR_PORT}" &
FUNFAIR_PID=$!

ng serve midway --port "${MIDWAY_PORT}" &
MIDWAY_PID=$!

wait "${FUNFAIR_PID}" "${MIDWAY_PID}"
