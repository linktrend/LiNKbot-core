# PKT-06/ISS-06 Repair 2 Handoff

## Identity and scope

- Branch: `issue/pkt-06-iss-06-repair2-20260824`.
- Base: protected development `e0e9beb58f7f255f1e317038114aaf2daf81121a`, tree `aeb1f41ec49ba360ee5f2a89954b8aae2f1860ff`.
- Source/test only. No VPS, browser service, credentials, runtime activation, or deployment mutation.

## Repair

- `fetchWithSsrFGuard` accepts a previously admitted `PinnedHostname` for the current origin and builds the pinned dispatcher without a second DNS resolution.
- Playwright navigation route handlers use the shared governed admission result, then fetch HTTP(S) document and subresource requests through the pinned dispatcher and fulfill the result back into Chromium. Same-host redirects reuse the binding; new origins resolve independently. IP literals and non-network browser URLs retain direct handling.
- Navigation and interaction callers propagate lookup/fetch policy inputs through the route boundary, covering create-page, navigate, and selected-page action paths.
- Added adversarial route proof that repeated same-host requests call lookup once and receive a dispatcher-backed fetch.

## Changed files

- `src/infra/net/fetch-guard.ts`
- `src/plugin-sdk/ssrf-runtime.ts`
- `extensions/browser/src/browser/navigation-guard.ts`
- `extensions/browser/src/browser/pw-session.ts`
- `extensions/browser/src/browser/pw-tools-core.snapshot.ts`
- `extensions/browser/src/browser/pw-tools-core.interactions.ts`
- `extensions/browser/src/browser/pw-session.create-page.navigation-guard.test.ts`
- Prior PKT-06 policy/SDK/manifest files replayed from rejected checkpoint.

## Validation

- Browser policy: 9/9 passed.
- Navigation guard: 29/29 passed.
- Playwright create-page/navigation boundary: 38/38 passed.
- Interaction suites: 127/127 passed.
- Guarded fetch SSRF suite: 99/99 passed.
- Owned-file `tsgo -p tsconfig.extensions.json --noEmit` probe: no owned errors. Remaining full tsgo errors are pre-existing in profile-manifest, gateway agents, and system-agent operations.
- `oxfmt`, SDK export/subpath/API-baseline checks, and `git diff --check` passed.

## Residual risk

- The route bridge buffers each fulfilled response in Node before handing it to Chromium. This is deliberate for deterministic dispatcher binding and should remain bounded by existing browser/request limits if expanded further.
- A known unrelated snapshot test emits an unhandled rejected download promise while its assertions pass; it is not caused by this repair.
