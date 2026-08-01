# Handoff — PACI machine-token seam implementation (OpenClaw-owned local/fake)

## Session Metadata

| Field            | Value                                                                                                     |
| ---------------- | --------------------------------------------------------------------------------------------------------- |
| Agent identity   | Cursor Grok 4.5 High (local primary + Grok 4.5 High subagents)                                            |
| Session ID       | cursor-local-mac-mini-feature-paci-machine-token-20260730                                                 |
| Orchestrator key | (direct Carlos assignment)                                                                                |
| Objective        | End-to-end OpenClaw-owned PACI machine-token seam + MCP/SDK/Brain/Skills + fake proof on PR #38           |
| Scope            | Implementation + fake/local proof; prepared Lisa packet only; no live Lisa/Platform; no CI poll; no merge |
| Started          | 2026-07-30 Asia/Taipei                                                                                    |
| Ended            | 2026-07-30 Asia/Taipei                                                                                    |
| Starting branch  | `issue/ocp-openclawdevelopmentplan01`                                                                     |
| Ending branch    | `issue/ocp-openclawdevelopmentplan01`                                                                     |
| Starting commit  | `bf10d35847c20c5077335070e3599fe91a81a0de`                                                                |
| Ending commit    | (this push HEAD)                                                                                          |
| Starting status  | clean tip + Principal execution prompt untracked                                                          |
| Ending status    | machine-token seam landed; stop for Codex                                                                 |

## Summary

Implemented the generic public OpenClaw machine-token capability (`client_credentials` + `private_key_jwt`), wired managed MCP `auth: "machine_token"`, added Plugin SDK `machine-token-runtime`, consumed it from linkbrain/linkskills with independent bindings, and proved behavior with a deterministic fake PACI issuer. Preserved interactive MCP OAuth. Lisa ops workstream untouched. Live enablement deferred.

## Public API / config changes

| Surface                                     | Change                                                                                                                                                                   |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `mcp.servers.*.auth`                        | `"oauth" \| "machine_token"`                                                                                                                                             |
| `mcp.servers.*.machineToken`                | `bindingId`, `issuerUrl`, `clientId`, optional `audience`/`scope`, `clientAssertionKeyRef` (SecretInput)                                                                 |
| Plugin config `machineToken`                | Same shape on linkbrain/linkskills (optional)                                                                                                                            |
| `openclaw/plugin-sdk/machine-token-runtime` | `resolveMachineTokenAccess`, `invalidateMachineTokenCache`, `clearMachineTokenCache`, `withMachineTokenBearer`, discovery helpers, `authorizationHeaderFromMachineToken` |
| Dependency                                  | direct `jose@6.2.3` (already in tree via MCP SDK)                                                                                                                        |

## Platform contract pins (draft baseline — not frozen)

| Pin              | Value                                                              |
| ---------------- | ------------------------------------------------------------------ |
| Platform HEAD    | `2c270987842eeb7580dcc80b96fdf5b7c311218e`                         |
| Envelope SHA-256 | `4e6d2b7246a1f6b85f27dd94b005bc662eb74458f85674e314c0d01c1e20e853` |
| Schema SHA-256   | `838c7a427e49cde0599d2cfd4939da4af8ae571b03312e621dd25b7737723bad` |
| Record           | `PACI-DRAFT-CONTRACT-PIN-2026-07-30.md`                            |

OpenClaw does **not** freeze Platform semantics. Committed Platform D12/D14 remain LOCKED in Platform file; Principal OpenClaw prompt authorized this OpenClaw-owned local/fake work.

## Plan SHA

`17203ee586a3fb2b1281bcddd8b17ae350075ebce537689f3c4bfcbbd14914f7` (HASH_OK)

## Files created/modified (primary)

### Core

- `src/agents/machine-token*.ts` (+ tests)
- `test/helpers/paci-fake/*`

### MCP / config

- `src/config/types.mcp.ts`, `zod-schema.root-support.ts`, schema help/labels
- `src/agents/mcp-transport*.ts`, `mcp-auth-profile.ts`, `mcp-transport.machine-token.test.ts`

### Plugin SDK

- `src/plugin-sdk/machine-token-runtime.ts` (+ test)
- `scripts/lib/plugin-sdk-entrypoints.json`, `scripts/check-plugin-sdk-exports.mjs`, `scripts/plugin-sdk-surface-report.mjs`, `package.json`

### Consumers

- `extensions/linkbrain/**`, `extensions/linkskills/**` (config/transport/tests/manifest)

### Docs / templates / coordination

- Principal prompt, draft pin, Lisa prepared packet, machine-token templates, PHASE-13 note, session/handoff records

## Tests and verification

| Suite                                                              | Result                                                                             |
| ------------------------------------------------------------------ | ---------------------------------------------------------------------------------- |
| machine-token + assertion + fetch + MCP machine-token + SDK facade | **PASS** (focused)                                                                 |
| linkbrain + linkskills transport                                   | **PASS** (22 tests in last focused run; full suites earlier 155)                   |
| MCP transport / auth-profile regression (focused)                  | **PASS**                                                                           |
| `pnpm plugin-sdk:surface:check`                                    | **PASS** (budgets bumped for new entrypoint)                                       |
| Secret/redaction scan on changed auth surfaces                     | **SECRET_SCAN_OK**                                                                 |
| Hosted CI / Bugbot                                                 | **Not polled** (Principal-deferred)                                                |
| Crabbox / Blacksmith Testbox                                       | **Unavailable** (`crabbox` binary sanity failed); used trusted local focused proof |

## Local / fake / stage / production separation

| Tier          | Status                                   |
| ------------- | ---------------------------------------- |
| Fake/local    | Implemented + tested                     |
| Stage         | Templates prepared `enabled: false` only |
| Production    | Not authorized                           |
| Live Lisa     | Not mutated; packet prepared only        |
| Live Platform | Not contacted                            |

## Lisa overlap boundary

- Did not edit `.worktrees/lisa-ops01`, `issue/ocp-lisa-ops01`, personality files, models/routing/cron/heartbeat/channels/LaunchAgents
- Prepared packet: `LISA-MACHINE-TOKEN-INTEGRATION-PACKET-PREPARED-2026-07-30.md`

## Residual risks / rollback

- Platform envelope still DRAFT — re-pin when frozen
- Process-memory token cache lost on restart (expected; re-mint)
- Rollback: disable `auth: machine_token` / plugin `machineToken`; keep oauth/SecretRef paths

## Coverage index (plan-facing; no Codex classifications)

| Area                         | Evidence                                            |
| ---------------------------- | --------------------------------------------------- |
| Generic machine-token client | `src/agents/machine-token*.ts` + fake PACI          |
| Managed MCP integration      | `mcp-transport.ts` + machine-token tests            |
| Plugin SDK                   | `machine-token-runtime`                             |
| Brain/Skills independence    | separate bindingIds + transport tests               |
| Interactive OAuth preserved  | oauth path still first-class; grant_types unchanged |
| Disabled default             | templates `enabled: false`                          |

## Explicit non-claims

Not Codex certification · not merge · not PR readiness change · not hosted CI green · not live Lisa/Platform · not Phases 7–12 · not AuthClaims fixture byte changes

## Exact Next Action

**Stop for independent OpenClaw Codex verification** of this tip. Do not self-certify. Do not apply Lisa live packet without combined gate.
