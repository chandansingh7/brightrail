# Publishing Brightrail to npm

This doc explains how maintainers publish the **`brightrail`** package and how **`NPM_TOKEN`** powers the GitHub Actions workflow (`.github/workflows/publish.yml`).

---

## How CI publish works

The **Publish npm package** workflow runs when you push a **version tag**:

```bash
git tag v0.1.0
git push origin v0.1.0
```

It will:

1. Run library tests and `verify:package` (Midway consumer smoke build)
2. Build `dist/brightrail` (`npm run build:lib`)
3. Run `npm publish` from `dist/brightrail` using **`NODE_AUTH_TOKEN`**

In the workflow:

```yaml
- uses: actions/setup-node@v4
  with:
    registry-url: https://registry.npmjs.org

- name: Publish to npm
  env:
    NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
  run: npm publish --access public
  working-directory: dist/brightrail
```

`setup-node` reads `NODE_AUTH_TOKEN` and writes an `.npmrc` for the job. **`secrets.NPM_TOKEN`** must be a secret you add in GitHub (see below). The secret name **`NPM_TOKEN`** is a convention — only the `${{ secrets.NPM_TOKEN }}` → `NODE_AUTH_TOKEN` mapping matters to npm.

---

## Where to get `NPM_TOKEN`

### 1. Create an npm account

1. Go to **[npmjs.com/signup](https://www.npmjs.com/signup)** and create an account (or sign in).
2. Turn on **two-factor authentication** (recommended before publishing).

### 2. Create an access token on npm

Use your account: **[npmjs.com/~imcsingh](https://www.npmjs.com/~imcsingh)**  
Tokens page: **[npmjs.com/settings/imcsingh/tokens](https://www.npmjs.com/settings/imcsingh/tokens)**

**Option A — Granular token (recommended)**

1. Click **Generate New Token** → **Granular Access Token**.
2. Fill the form like this:

   | Field | Value |
   |-------|--------|
   | **Token name** | `brightrail-github-ci` (or any label you recognize) |
   | **Description** | `GitHub Actions publish for brightrail` |
   | **Bypass two-factor authentication (2FA)** | ✅ **Checked** — required so CI can publish without an OTP prompt |
   | **Packages and scopes** | **Read and write** — choose **All packages** for the *first* publish (package `brightrail` does not exist on npm yet). After v0.1.0 is live, you can create a tighter token scoped only to `brightrail`. |
   | **Organizations** | **No access** (unless you publish under an org) |
   | **Expiration** | 30–90 days, or longer — set a reminder to rotate before it expires |

   > ⚠️ **Do not leave “Packages and scopes” on “No access”** — publish will fail with `403 Forbidden`.

3. Click **Generate token** and **copy the token once** (starts with `npm_…`).

**Option B — Classic automation token** (simpler for CI)

1. Same tokens page → **Generate New Token** → **Classic Token**.
2. Type: **Automation** (for CI; bypasses 2FA on publish).
3. Copy the token.

Use a token that has **publish** permission for the `brightrail` package name.

### 3. Add the token as a GitHub secret

1. Open your repo on GitHub: **[github.com/chandansingh7/brightrail](https://github.com/chandansingh7/brightrail)**.
2. **Settings** → **Secrets and variables** → **Actions**.
3. Click **New repository secret**.
4. **Name:** `NPM_TOKEN` (must match the workflow exactly).
5. **Secret:** paste the npm token from step 2.
6. Save.

No code changes are needed after this — the next tag push will publish.

### 4. Trigger a publish

Bump version in `projects/brightrail/package.json` (and root `package.json` if kept in sync), commit, tag, push:

```bash
# example for 0.1.0
git add projects/brightrail/package.json package.json
git commit -m "chore: release brightrail v0.1.0"
git tag v0.1.0
git push origin main
git push origin v0.1.0
```

Watch the **Publish npm package** workflow under **Actions** on GitHub.

---

## Publish manually (without CI)

```bash
npm login                  # browser / OTP if 2FA enabled
npm run publish:lib        # build, verify tarball, npm publish
```

Dry-run only (no upload):

```bash
PACK_DRY_RUN=1 npm run publish:lib
```

For scripts/terminals without `npm login`, export the same token npm gave you:

```bash
export NPM_TOKEN=npm_xxxxxxxx   # do not commit this
npm run publish:lib
```

(`publish-lib.sh` checks `npm whoami` or `NPM_TOKEN`.)

---

## Registry choice

| Registry | Install command | Notes |
|----------|-----------------|-------|
| **[npmjs.com](https://www.npmjs.com/)** | `npm install brightrail` | Default; use this for public consumption. |
| GitHub Packages | `npm install @chandansingh7/brightrail` | Requires consumer `.npmrc` scope mapping. |
| Private mirror | Your registry URL | Point `publishConfig.registry` and consumer `.npmrc` at your server. |

---

## Troubleshooting

| Error | Fix |
|-------|-----|
| `401 Unauthorized` in CI | Regenerate npm token; update `NPM_TOKEN` secret; ensure token has publish rights. |
| `403 Forbidden` / package name taken | The name `brightrail` must be owned by your npm user; use a scoped name if needed. |
| Workflow does not run | Push a tag matching `v*.*.*` (e.g. `v0.1.0`, not `0.1.0`). |
| `npm publish` works locally but not CI | Confirm secret name is exactly `NPM_TOKEN` and workflow sets `NODE_AUTH_TOKEN`. |

---

## Related docs

- **[CONSUMING.md](./CONSUMING.md)** — how app developers install and use Brightrail
- **[../projects/brightrail/README.md](../projects/brightrail/README.md)** — library API overview
