#!/usr/bin/env bash
# Build the library + both apps, then serve Funfair + Midway on separate ports.
#
# Prerequisites: Node 24.x and npm — run ./scripts/setup.sh once if needed.
# Default ports match projects/funfair/src/app/midway-dev-port.ts.

set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

FUNFAIR_PORT="${FUNFAIR_PORT:-4200}"
MIDWAY_PORT="${MIDWAY_PORT:-4201}"

usage() {
  cat <<'EOF'
Usage:
  ./scripts/build-and-run.sh [options]

Options:
  --install      Run npm ci (or npm install) before builds — use after lockfile / deps change
  --no-build     Skip builds; only serve (assumes artifacts already built)
  --no-serve     Build only; do not start dev servers
  -h, --help     Show this help

Environment:
  FUNFAIR_PORT   Port for Funfair (default: 4200)
  MIDWAY_PORT    Port for Midway (default: 4201)
EOF
}

DO_INSTALL=0
NO_BUILD=0
NO_SERVE=0

while [[ $# -gt 0 ]]; do
  case "$1" in
    --install) DO_INSTALL=1; shift ;;
    --no-build) NO_BUILD=1; shift ;;
    --no-serve) NO_SERVE=1; shift ;;
    -h|--help) usage; exit 0 ;;
    *)
      echo "Unknown argument: $1" >&2
      usage >&2
      exit 2
      ;;
  esac
done

die() {
  echo "ERROR: $*" >&2
  exit 1
}

have() { command -v "$1" >/dev/null 2>&1; }

free_port_if_busy() {
  local port="$1"
  if ! have lsof; then
    echo "WARN: lsof not found; cannot auto-free port ${port}." >&2
    return 0
  fi

  local pids
  pids="$(lsof -ti tcp:"${port}" -sTCP:LISTEN 2>/dev/null || true)"
  if [[ -z "${pids}" ]]; then
    return 0
  fi

  echo "==> Port ${port} is in use. Stopping process(es): ${pids}"
  kill ${pids} 2>/dev/null || true
  sleep 1

  local still_busy
  still_busy="$(lsof -ti tcp:"${port}" -sTCP:LISTEN 2>/dev/null || true)"
  if [[ -n "${still_busy}" ]]; then
    echo "==> Forcing process(es) off port ${port}: ${still_busy}"
    kill -9 ${still_busy} 2>/dev/null || true
  fi
}

node_major() {
  if ! have node; then
    echo ""
    return 0
  fi
  node -p "process.versions.node.split('.')[0]" 2>/dev/null || echo ""
}

ensure_runtime() {
  if ! have node || ! have npm; then
    die "Node.js and npm are required. Run ./scripts/setup.sh first."
  fi
  local major
  major="$(node_major)"
  if [[ "$major" != "24" ]]; then
    die "This repo expects Node.js 24.x (see package.json engines). You have: $(node -v 2>/dev/null || echo none). Run ./scripts/setup.sh or switch with nvm."
  fi
}

run_ng() {
  npx --no-install ng "$@"
}

ensure_runtime

if [[ ! -d "${ROOT}/node_modules" ]] && [[ "$DO_INSTALL" -eq 0 ]]; then
  die "node_modules missing. Run ./scripts/setup.sh or ./scripts/build-and-run.sh --install"
fi

if [[ "$DO_INSTALL" -eq 1 ]]; then
  if [[ -f "${ROOT}/package-lock.json" ]]; then
    echo "==> Installing dependencies (npm ci)"
    npm ci
  else
    echo "==> Installing dependencies (npm install)"
    npm install
  fi
fi

if [[ "$NO_BUILD" -eq 0 ]]; then
  echo "==> Building brightrail → dist/brightrail"
  npm run build:lib

  echo "==> npm install (refresh file:dist/brightrail for Midway)"
  npm install

  echo "==> Building funfair and midway"
  npm run build:funfair
  npm run build:midway
fi

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

if [[ "$NO_SERVE" -eq 1 ]]; then
  echo ""
  echo "==> Done (serve skipped)."
  exit 0
fi

echo ""
echo "==> Serving Funfair at http://localhost:${FUNFAIR_PORT}"
echo "==> Serving Midway at  http://localhost:${MIDWAY_PORT}"
echo "    (Funfair includes a link to Midway; set FUNFAIR_PORT / MIDWAY_PORT to override.)"
echo ""

free_port_if_busy "${FUNFAIR_PORT}"

run_ng serve funfair --port "${FUNFAIR_PORT}" &
FUNFAIR_PID=$!

run_ng serve midway --port "${MIDWAY_PORT}" &
MIDWAY_PID=$!

wait "${FUNFAIR_PID}" "${MIDWAY_PID}"
