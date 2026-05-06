#!/usr/bin/env bash
# First-time setup + build + run for this Angular workspace.
# - Installs Node (via nvm) if missing / wrong version
# - Installs npm deps
# - Builds the library and both apps
# - Serves Funfair + Midway on separate ports
#
# Default ports match projects/funfair/src/app/midway-dev-port.ts — change both if you remap MIDWAY_PORT.

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
  --no-node      Skip Node/npm checks and installation
  --no-install   Skip npm install/ci
  --no-build     Skip builds (library + apps)
  --no-serve     Skip ng serve (build only)
  -h, --help     Show this help

Environment:
  FUNFAIR_PORT=4200   Port for Funfair dev server
  MIDWAY_PORT=4201    Port for Midway dev server
  NVM_DIR=~/.nvm      Override nvm install directory
EOF
}

NO_NODE=0
NO_INSTALL=0
NO_BUILD=0
NO_SERVE=0

while [[ $# -gt 0 ]]; do
  case "$1" in
    --no-node) NO_NODE=1; shift ;;
    --no-install) NO_INSTALL=1; shift ;;
    --no-build) NO_BUILD=1; shift ;;
    --no-serve) NO_SERVE=1; shift ;;
    -h|--help) usage; exit 0 ;;
    *)
      echo "Unknown argument: $1"
      echo ""
      usage
      exit 2
      ;;
  esac
done

die() {
  echo "ERROR: $*" >&2
  exit 1
}

have() { command -v "$1" >/dev/null 2>&1; }

ensure_cmd() {
  local cmd="$1"
  local hint="${2:-}"
  if ! have "$cmd"; then
    if [[ -n "$hint" ]]; then
      die "Missing required command: ${cmd}. ${hint}"
    fi
    die "Missing required command: ${cmd}"
  fi
}

node_major() {
  # Prints major version number or empty string.
  if ! have node; then
    echo ""
    return 0
  fi
  node -p "process.versions.node.split('.')[0]" 2>/dev/null || echo ""
}

install_nvm_if_needed() {
  # Installs nvm to $NVM_DIR (default ~/.nvm) if missing.
  # Uses the official install script; requires curl + git.
  : "${NVM_DIR:="$HOME/.nvm"}"

  if [[ -s "${NVM_DIR}/nvm.sh" ]]; then
    return 0
  fi

  echo "==> nvm not found. Installing nvm (Node Version Manager)"
  ensure_cmd curl "Install curl first (macOS: xcode-select --install or brew install curl)"
  ensure_cmd git "Install git first (macOS: xcode-select --install)"

  # Official install script (pinned for reproducibility).
  # https://github.com/nvm-sh/nvm
  curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash

  if [[ ! -s "${NVM_DIR}/nvm.sh" ]]; then
    die "nvm install finished but ${NVM_DIR}/nvm.sh was not found. Open a new terminal and re-run."
  fi
}

load_nvm() {
  : "${NVM_DIR:="$HOME/.nvm"}"
  # shellcheck disable=SC1090
  [[ -s "${NVM_DIR}/nvm.sh" ]] && . "${NVM_DIR}/nvm.sh"
  # shellcheck disable=SC1090
  [[ -s "${NVM_DIR}/bash_completion" ]] && . "${NVM_DIR}/bash_completion"
}

ensure_node_24() {
  # Repo requires Node >=24 <25 (see package.json engines).
  local major
  major="$(node_major)"
  if [[ "$major" == "24" ]]; then
    return 0
  fi

  install_nvm_if_needed
  load_nvm
  have nvm || die "nvm is installed but not available in this shell. Open a new terminal and re-run."

  local desired="24"
  if [[ -f "${ROOT}/.nvmrc" ]]; then
    echo "==> Using Node version from .nvmrc"
    nvm install
    nvm use
  else
    echo "==> Installing Node ${desired}.x via nvm"
    nvm install "${desired}"
    nvm use "${desired}"
  fi

  major="$(node_major)"
  if [[ "$major" != "24" ]]; then
    die "Node version is still not 24.x after install (found: $(node -v 2>/dev/null || echo 'none'))."
  fi
}

ensure_npm_ok() {
  ensure_cmd node "Node.js is required. Re-run without --no-node to auto-install via nvm."
  ensure_cmd npm "npm should come with Node.js. Re-run without --no-node to auto-install via nvm."
}

ensure_prereqs() {
  # Keep prereqs minimal; install_nvm_if_needed already checks curl/git when needed.
  ensure_cmd bash
  if [[ "$NO_NODE" -eq 0 ]]; then
    ensure_node_24
    ensure_npm_ok
  else
    ensure_npm_ok
  fi
}

run_ng() {
  # Prefer local Angular CLI via npx (no global install required).
  npx --no-install ng "$@"
}

ensure_prereqs

if [[ "$NO_INSTALL" -eq 0 ]]; then
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
  if [[ "$NO_INSTALL" -eq 0 ]]; then
    npm install
  fi

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

run_ng serve funfair --port "${FUNFAIR_PORT}" &
FUNFAIR_PID=$!

run_ng serve midway --port "${MIDWAY_PORT}" &
MIDWAY_PID=$!

wait "${FUNFAIR_PID}" "${MIDWAY_PID}"
