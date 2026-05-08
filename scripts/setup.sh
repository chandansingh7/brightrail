#!/usr/bin/env bash
# First-time setup: Node 24 (via nvm if needed), then install npm dependencies from the lockfile.
# After this, run ./scripts/build-and-run.sh or npm run dev:all

set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

usage() {
  cat <<'EOF'
Usage:
  ./scripts/setup.sh [-h|--help]

Installs toolchain + dependencies only (no build, no dev servers).

Requirements for auto Node install:
  curl, git (macOS: xcode-select --install provides git)

Environment:
  NVM_DIR       nvm installation directory (default: ~/.nvm)
EOF
}

while [[ $# -gt 0 ]]; do
  case "$1" in
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
  if ! have node; then
    echo ""
    return 0
  fi
  node -p "process.versions.node.split('.')[0]" 2>/dev/null || echo ""
}

install_nvm_if_needed() {
  : "${NVM_DIR:="$HOME/.nvm"}"

  if [[ -s "${NVM_DIR}/nvm.sh" ]]; then
    return 0
  fi

  echo "==> nvm not found. Installing nvm (Node Version Manager)"
  ensure_cmd curl "Install curl first (macOS: xcode-select --install or brew install curl)"
  ensure_cmd git "Install git first (macOS: xcode-select --install)"

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
  local major
  major="$(node_major)"
  if [[ "$major" == "24" ]]; then
    return 0
  fi

  install_nvm_if_needed
  load_nvm
  have nvm || die "nvm is installed but not available in this shell. Open a new terminal and re-run."

  if [[ -f "${ROOT}/.nvmrc" ]]; then
    echo "==> Using Node version from .nvmrc"
    nvm install
    nvm use
  else
    echo "==> Installing Node 24.x via nvm"
    nvm install 24
    nvm use 24
  fi

  major="$(node_major)"
  if [[ "$major" != "24" ]]; then
    die "Node version is still not 24.x after install (found: $(node -v 2>/dev/null || echo 'none'))."
  fi
}

ensure_cmd bash

echo "==> Ensuring Node 24.x (repo engines in package.json)"
ensure_node_24

ensure_cmd node
ensure_cmd npm

if [[ -f "${ROOT}/package-lock.json" ]]; then
  echo "==> Installing dependencies (npm ci)"
  npm ci
else
  echo "==> Installing dependencies (npm install)"
  npm install
fi

echo ""
echo "==> Setup finished."
echo "    Next: ./scripts/build-and-run.sh"
echo "    Or:    npm run dev:all"
