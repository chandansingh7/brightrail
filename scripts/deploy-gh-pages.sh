#!/usr/bin/env bash
# Build Funfair and push static output to the gh-pages branch for GitHub Pages.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

BASE_HREF="${BASE_HREF:-/brightrail/}"
REMOTE="${GIT_REMOTE:-origin}"
BRANCH="${DEPLOY_BRANCH:-gh-pages}"
WORKTREE="${DEPLOY_WORKTREE:-$ROOT/.gh-pages-worktree}"

echo "→ Building brightrail library…"
npm run build:lib

echo "→ Building funfair (base-href=${BASE_HREF})…"
npx ng build funfair --configuration=production --base-href="${BASE_HREF}"

BROWSER_OUT="$ROOT/dist/funfair/browser"
if [[ ! -d "$BROWSER_OUT" ]]; then
  echo "Expected build output at $BROWSER_OUT" >&2
  exit 1
fi

if git worktree list | grep -q "$WORKTREE"; then
  git worktree remove --force "$WORKTREE" 2>/dev/null || true
fi

if git show-ref --verify --quiet "refs/heads/${BRANCH}"; then
  git worktree add -B "$BRANCH" "$WORKTREE" "$BRANCH"
else
  git fetch "$REMOTE" "$BRANCH" 2>/dev/null || true
  if git show-ref --verify --quiet "refs/remotes/${REMOTE}/${BRANCH}"; then
    git worktree add -B "$BRANCH" "$WORKTREE" "${REMOTE}/${BRANCH}"
  else
    mkdir -p "$WORKTREE"
    git worktree add -B "$BRANCH" "$WORKTREE"
  fi
fi

echo "→ Syncing build output to worktree…"
find "$WORKTREE" -mindepth 1 -maxdepth 1 ! -name '.git' -exec rm -rf {} +
cp -R "$BROWSER_OUT"/. "$WORKTREE/"
touch "$WORKTREE/.nojekyll"

# SPA fallback for GitHub Pages (hash routing still benefits from direct deep links).
cp "$WORKTREE/index.html" "$WORKTREE/404.html"

# Deploy stamp so every run produces a traceable commit when forced or when assets change.
DEPLOY_STAMP="$(date -u +%Y-%m-%dT%H:%MZ)"
SOURCE_BRANCH="$(git -C "$ROOT" rev-parse --abbrev-ref HEAD)"
SOURCE_COMMIT="$(git -C "$ROOT" rev-parse HEAD)"
printf '%s\n' "{\"deployedAt\":\"${DEPLOY_STAMP}\",\"sourceBranch\":\"${SOURCE_BRANCH}\",\"sourceCommit\":\"${SOURCE_COMMIT}\"}" > "$WORKTREE/deploy-meta.json"

cd "$WORKTREE"
git add -A
if git diff --cached --quiet && [[ "${FORCE_DEPLOY:-0}" != "1" ]]; then
  echo "No changes to deploy."
else
  git commit -m "Deploy funfair to GitHub Pages (${DEPLOY_STAMP})"
  git push "$REMOTE" "$BRANCH"
  echo "✓ Deployed to https://chandansingh7.github.io/brightrail/"
fi

cd "$ROOT"
git worktree remove "$WORKTREE"
