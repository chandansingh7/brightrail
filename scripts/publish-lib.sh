#!/usr/bin/env bash
# Build and publish the brightrail library to npm (or dry-run with PACK_DRY_RUN=1).
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

PACK_DIR="$ROOT/dist/brightrail"
DRY_RUN="${PACK_DRY_RUN:-0}"
TAG="${NPM_PUBLISH_TAG:-latest}"

echo "→ Building brightrail library…"
npm run build:lib

if [[ ! -f "$PACK_DIR/package.json" ]]; then
  echo "Expected package at $PACK_DIR" >&2
  exit 1
fi

echo "→ Verifying tarball contents…"
( cd "$PACK_DIR" && npm pack --pack-destination "$ROOT/dist" >/dev/null )
TARBALL="$(ls -t "$ROOT/dist"/brightrail-*.tgz | head -1)"
tar -tzf "$TARBALL" | head -20
echo "… ($(tar -tzf "$TARBALL" | wc -l | tr -d ' ') files in $TARBALL)"

if [[ "$DRY_RUN" == "1" ]]; then
  echo "✓ Dry run complete (PACK_DRY_RUN=1). Tarball: $TARBALL"
  exit 0
fi

if [[ -z "${NPM_TOKEN:-}" ]] && ! npm whoami >/dev/null 2>&1; then
  cat <<'EOF'
Not logged in to npm. Either:
  1. npm login
  2. export NPM_TOKEN=<token>   # CI / automation

Then re-run: npm run publish:lib
EOF
  exit 1
fi

echo "→ Publishing to npm (tag=${TAG})…"
( cd "$PACK_DIR" && npm publish --access public --tag "$TAG" )
echo "✓ Published brightrail@$(node -p "require('$PACK_DIR/package.json').version")"
echo "  Install in any Angular 21 app: npm install brightrail"
