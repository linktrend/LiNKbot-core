# PKT-06/ISS-06 Repair Handoff

## Identity

- Agent: Codex Desktop Agent, local mac-mini, feature role.
- Branch: `issue/pkt-06-iss-06-repair-20260824`.
- Base: `3ceafa100342dfabeb7d38678b57ea326be61786` / tree `f60c3e1732a9e909039dceb3fbf4077c6a42dc16`.
- Scope: browser policy production caller and DNS binding only; no VPS/runtime activation.

## Changes

- Added the narrow `openclaw/plugin-sdk/browser-policy` facade and synchronized its package/export/API-baseline manifests.
- Changed the production browser navigation guard to admit the shared governed URL policy and retain the checked `PinnedHostname` result per guarded navigation hostname.
- Reused the binding for repeated same-host document requests and rejected host mismatches.
- Preserved the existing void assertion/error contract for callers that do not request the internal binding.
- Added adversarial policy, navigation-guard, and Playwright route-boundary tests.

## Files

- `src/agents/sandbox/browser-policy.ts`
- `src/agents/sandbox/browser-policy.test.ts`
- `src/plugin-sdk/browser-policy.ts`
- `src/plugin-sdk/security-runtime.ts`
- `extensions/browser/src/browser/navigation-guard.ts`
- `extensions/browser/src/browser/navigation-guard.test.ts`
- `extensions/browser/src/browser/pw-session.ts`
- `extensions/browser/src/browser/pw-session.create-page.navigation-guard.test.ts`
- `extensions/browser/src/infra/net/ssrf.ts`
- `extensions/browser/src/sdk-security-runtime.ts`
- `scripts/lib/plugin-sdk-entrypoints.json`
- `package.json`
- `docs/.generated/plugin-sdk-api-baseline.sha256`

## Validation

- `src/agents/sandbox/browser-policy.test.ts`: 9/9 passed.
- `extensions/browser/src/browser/navigation-guard.test.ts`: 29/29 passed.
- `extensions/browser/src/browser/pw-session.create-page.navigation-guard.test.ts`: 38/38 passed.
- `tsgo -p tsconfig.extensions.json --noEmit`: no errors in owned files; unrelated pre-existing errors remain in `src/agents/profile-manifest.ts`, `src/gateway/server-methods/agents.ts`, and `src/system-agent/operations-execute.ts`.
- Plugin SDK export/subpath checks and API-baseline check passed.
- `oxfmt` and `git diff --check` passed.

## Decisions and risks

- Browser Chromium DNS cannot be replaced by Playwright route continuation; the route boundary now retains and reuses the exact Node-side DNS admission result rather than discarding it, and any host mismatch fails closed. No browser/VPS process was started.
- The repair is source/test-only. Runtime activation, credentials, services, deployment, and VPS paths were not touched.

## Remaining action

- Commit and push this branch, then provide the exact checkpoint SHA/tree to `/root` for review/integration. Rollback is deleting the successor branch/commit before integration; the rejected checkpoint remains unchanged.
