#!/usr/bin/env bash
# Run Brightrail CI quality gates locally: axe a11y, contrast audit, Playwright visual baselines.
#
# Prerequisites: Node 24.x, npm, Playwright Chromium — run ./scripts/setup.sh once if needed.

set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

E2E_PORT="${E2E_PORT:-4321}"

usage() {
  cat <<'EOF'
Usage:
  ./scripts/e2e-gates.sh [options]

Runs Funfair a11y-preview Playwright gates (same jobs as .github/workflows/ci.yml).

Options:
  --all              Run semantic a11y, contrast audit, and visual regression (default)
  --a11y             axe semantic rules on every a11y-preview route (blocking)
  --contrast         WCAG color-contrast audit (report-only; does not fail the script)
  --visual           Playwright screenshot regression (blocking)
  --update-snapshots Refresh visual baselines after intentional UI changes
  --install          Run npm ci (or npm install) before gates
  --skip-playwright-install
                     Skip "npx playwright install chromium"
  -h, --help         Show this help

Environment:
  E2E_PORT           Port for the static Funfair server (default: 4321)
  PLAYWRIGHT_BASE_URL
                     When set, skip building/serving Funfair (use an existing server)

Examples:
  ./scripts/e2e-gates.sh
  ./scripts/e2e-gates.sh --a11y --visual
  ./scripts/e2e-gates.sh --update-snapshots
  PLAYWRIGHT_BASE_URL=http://127.0.0.1:4321 ./scripts/e2e-gates.sh --visual
EOF
}

die() {
  echo "ERROR: $*" >&2
  exit 1
}

have() { command -v "$1" >/dev/null 2>&1; }

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

DO_INSTALL=0
SKIP_PLAYWRIGHT_INSTALL=0
RUN_A11Y=0
RUN_CONTRAST=0
RUN_VISUAL=0
UPDATE_SNAPSHOTS=0
RUN_ALL=1

while [[ $# -gt 0 ]]; do
  case "$1" in
    --all) RUN_ALL=1; shift ;;
    --a11y) RUN_ALL=0; RUN_A11Y=1; shift ;;
    --contrast) RUN_ALL=0; RUN_CONTRAST=1; shift ;;
    --visual) RUN_ALL=0; RUN_VISUAL=1; shift ;;
    --update-snapshots) RUN_ALL=0; RUN_VISUAL=1; UPDATE_SNAPSHOTS=1; shift ;;
    --install) DO_INSTALL=1; shift ;;
    --skip-playwright-install) SKIP_PLAYWRIGHT_INSTALL=1; shift ;;
    -h|--help) usage; exit 0 ;;
    *)
      echo "Unknown argument: $1" >&2
      usage >&2
      exit 2
      ;;
  esac
done

if [[ "$RUN_ALL" -eq 1 ]]; then
  RUN_A11Y=1
  RUN_CONTRAST=1
  RUN_VISUAL=1
fi

if [[ "$RUN_A11Y$RUN_CONTRAST$RUN_VISUAL" == "000" ]]; then
  die "No gates selected. Use --all, --a11y, --contrast, --visual, or --update-snapshots."
fi

ensure_runtime

if [[ ! -d "${ROOT}/node_modules" ]] && [[ "$DO_INSTALL" -eq 0 ]]; then
  die "node_modules missing. Run ./scripts/setup.sh or ./scripts/e2e-gates.sh --install"
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

if [[ "$SKIP_PLAYWRIGHT_INSTALL" -eq 0 ]]; then
  echo "==> Ensuring Playwright Chromium is installed"
  npx playwright install chromium
fi

export E2E_PORT

run_gate() {
  local label="$1"
  shift
  echo ""
  echo "==> ${label}"
  "$@"
}

GATE_FAILED=0

if [[ "$RUN_A11Y" -eq 1 ]]; then
  if ! run_gate "Accessibility gate (axe semantic rules)" npm run e2e:a11y; then
    GATE_FAILED=1
  fi
fi

if [[ "$RUN_CONTRAST" -eq 1 ]]; then
  echo ""
  echo "==> Color contrast audit (report-only)"
  if ! npm run e2e:a11y:contrast; then
    echo "WARN: Contrast audit reported issues (expected until tokens are tightened)." >&2
  fi
fi

if [[ "$RUN_VISUAL" -eq 1 ]]; then
  if [[ "$UPDATE_SNAPSHOTS" -eq 1 ]]; then
    if ! run_gate "Updating Playwright visual baselines" npm run e2e:update-snapshots; then
      GATE_FAILED=1
    fi
  elif ! run_gate "Visual regression gate (Playwright screenshots)" npm run e2e:visual; then
    GATE_FAILED=1
  fi
fi

echo ""
if [[ "$GATE_FAILED" -ne 0 ]]; then
  die "One or more blocking gates failed."
fi

echo "==> E2E gates finished successfully."
