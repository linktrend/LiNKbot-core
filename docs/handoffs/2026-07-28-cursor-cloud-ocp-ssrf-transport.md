# Agent Session Handoff

## Session Metadata

| Field            | Value                                                           |
| ---------------- | --------------------------------------------------------------- |
| Agent identity   | Cursor Cloud Agent (OpenClaw Cursor Grok 4.5 High)              |
| Session ID       | cursor-cloud-ocp-ssrf-transport-20260728-1007                   |
| Orchestrator key | (parent OpenClaw Prime Agent)                                   |
| Objective        | SSRF-guard linkbrain/linkskills HTTP transport fetches          |
| Scope            | `extensions/linkbrain` + `extensions/linkskills` transport only |
| Started          | 2026-07-28 10:07 Asia/Taipei                                    |
| Ended            | 2026-07-28 10:12 Asia/Taipei                                    |
| Starting branch  | `issue/ocp-openclawdevelopmentplan01`                           |
| Ending branch    | `issue/ocp-openclawdevelopmentplan01`                           |
| Starting commit  | `a7f3ca0e75d`                                                   |
| Ending commit    | `d79e3356db5` (`d79e3356db527492f0ab8a0b1af7888469815f19`)      |
| Starting status  | clean working tree                                              |
| Ending status    | tip pushed; session record uncommitted                          |

## Summary

Replaced raw `fetchImpl(endpoint, …)` in both plugins' `createHttpTransport` with `fetchWithSsrFGuard` from `openclaw/plugin-sdk/ssrf-runtime`. Default production path uses hostname-pinned SSRF policy plus `allowPrivateNetwork: true` for intentional operator-configured endpoints. Injected test `fetchImpl` is still forwarded into the guard. `release()` always runs in `finally`.

## Files Inspected

- `extensions/linkbrain/src/transport.ts`
- `extensions/linkskills/src/transport.ts`
- `extensions/xiaomi/speech-provider.ts`, `extensions/volcengine/tts.ts`, `extensions/qa-channel/src/bus-client.ts`, `extensions/tlon/src/urbit/fetch.ts`
- `src/plugin-sdk/ssrf-runtime.ts`, `src/infra/net/fetch-guard.ts`

## Files Created

- `docs/agent-sessions/active/cursor-cloud-ocp-ssrf-transport-20260728-1007.md` (uncommitted)
- this handoff

## Files Modified

- `extensions/linkbrain/src/transport.ts`
- `extensions/linkskills/src/transport.ts`
- `extensions/linkbrain/transport.test.ts` (503/401 stubs → `vi.fn` for hermetic SSRF mock path)

## Files Deleted

None.

## Commands Run

- `node scripts/run-vitest.mjs extensions/linkbrain/transport.test.ts extensions/linkskills/transport.test.ts` → 15 passed
- `node scripts/run-vitest.mjs test/helpers/link-domain-fakes extensions/linkbrain extensions/linkskills` → **144 passed**
- `scripts/run-opengrep.sh -- extensions/linkbrain/src/transport.ts extensions/linkskills/src/transport.ts` → **0 findings**

## Decisions

1. Always route HTTP through `fetchWithSsrFGuard` (including injected `fetchImpl`) rather than branching around the guard — matches tlon and keeps production path guarded; `vi.fn` mocks skip DNS pinning via `isMockedFetch`.
2. Policy = `mergeSsrFPolicies(ssrfPolicyFromHttpBaseUrlAllowedHostname(endpoint), { allowPrivateNetwork: true })` — hostname pin + private/LAN allowed for operator-configured Brain/Skills endpoints (implementation judgment; no Carlos approval needed for this scoped security fix).
3. Did not default `fetchImpl` to global `fetch` at resolve time — omit so the guard owns the production default.

## Tests and Verification

- Focused transport tests: 15/15 passed
- Full requested matrix: 144/144 passed (20 files)
- Opengrep precise on both transport files: 0 findings
- Not tested: live HTTP against real Brain/Skills endpoints; Lisa runtime

## Problems and Blockers

None.

## Uncommitted Changes

- Session record only: `docs/agent-sessions/active/cursor-cloud-ocp-ssrf-transport-20260728-1007.md`
- This handoff (about to be written under `docs/handoffs/`)

## Risks and Unknowns

- `allowPrivateNetwork: true` is unconditional for http mode; redirects remain hostname-constrained by `allowedHostnames`. If a future redirect escapes the configured host, the guard should block it.

## Remaining Work

None for this task. Parent may close session / refresh dashboard.

## Exact Next Action

Parent agent: use tip SHA `d79e3356db527492f0ab8a0b1af7888469815f19` for PR evidence. No merge (HARD constraint).

## Questions for Carlos

None.

## Questions for the Orchestrator or Next Agent

None.

## Confidence

99%

## Amendments
