# Agent Session Handoff

## Session Metadata

| Field            | Value                                                                                                   |
| ---------------- | ------------------------------------------------------------------------------------------------------- |
| Agent identity   | Cursor Local Agent / Cursor Grok 4.5 High / feature                                                     |
| Session ID       | cursor-local-mac-mini-agents-window-feature-linkskills-http-gateway-contract-20260803-1454              |
| Orchestrator key | cursor-local-mac-mini-desktop-workspace-orchestrator                                                    |
| Objective        | Correct linkskills `transportMode=http` to frozen LiNKskills Gateway `POST /v1/{operation}` envelope    |
| Scope            | `extensions/linkskills/**` HTTP transport + tests + README/plugin help; session/handoff docs            |
| Started          | 2026-08-03 14:54 Asia/Taipei                                                                            |
| Ended            | 2026-08-03 15:00 Asia/Taipei                                                                            |
| Starting branch  | `dev/cloudcursor/OCP-LINKSKILLS-HTTP-GATEWAY-CONTRACT-FIX` @ `26d2a9e6ee0f796bbb2a40b28dbffb78b6cd1ad6` |
| Ending branch    | `dev/cloudcursor/OCP-LINKSKILLS-HTTP-GATEWAY-CONTRACT-FIX`                                              |
| Starting commit  | `26d2a9e6ee0f796bbb2a40b28dbffb78b6cd1ad6`                                                              |
| Ending commit    | `0c3d3ceb2d6454ba84dc93315d0a1e87e743c6e6`                                                              |
| Starting status  | clean worktree at verified base                                                                         |
| Ending status    | HTTP Gateway contract fix committed and pushed; no merge                                                |

## Summary

OpenClaw `extensions/linkskills` HTTP transport previously POSTed `{toolName,idempotencyKey,arguments}` to the configured `skillsEndpoint` URL unchanged. The frozen LiNKskills Gateway (read-only at `0e03745a177acabfb5a5440e0bbdbc669c4081b6`) requires `POST /v1/{operation}` with envelope `{params, request_id?, idempotency_key?}` (official client also sets `Idempotency-Key` / `X-Request-Id`). Transport now treats `skillsEndpoint` as a Gateway HTTPS base, builds `/v1/{allowlisted drain op}` without origin/host change or path traversal, and sends the Gateway envelope. Allowlist, SSRF pin, HTTPS fail-closed, auth reissue, and privacy exclusions unchanged.

## Files Inspected

- `extensions/linkskills/src/transport.ts`, `config.ts`, `tools.ts`, README, plugin schema, transport/coexistence/adversarial tests
- LiNKskills (read-only) `packages/gateway/linkskills_gateway/server.py`, `service.py`, `packages/client/linkskills_client/client.py` at `0e03745a`
- Coordination: `docs/agent-briefing.md`, `docs/agent-coordination.md`, `docs/current-status.md`, active Lisa stage session (no code ownership conflict)

## Files Created

- `docs/agent-sessions/active/cursor-local-mac-mini-agents-window-feature-linkskills-http-gateway-contract-20260803-1454.md`
- `docs/handoffs/2026-08-03-linkskills-http-gateway-contract-fix.md`

## Files Modified

- `extensions/linkskills/src/transport.ts` — `buildLinkskillsHttpOperationUrl` + Gateway envelope POST
- `extensions/linkskills/transport.test.ts` — exact URL/body + adversarial traversal/origin cases
- `extensions/linkskills/src/config.ts` — skillsEndpoint base-URL note
- `extensions/linkskills/README.md` — HTTP Gateway contract docs
- `extensions/linkskills/openclaw.plugin.json` — skillsEndpoint / transportMode help

## Files Deleted

None.

## Commands Run

```bash
git rev-parse origin/issue/ocp-openclawdevelopmentplan01  # 26d2a9e6ee0f796bbb2a40b28dbffb78b6cd1ad6
git checkout -B dev/cloudcursor/OCP-LINKSKILLS-HTTP-GATEWAY-CONTRACT-FIX 26d2a9e6ee0f796bbb2a40b28dbffb78b6cd1ad6
node scripts/run-vitest.mjs extensions/linkskills/transport.test.ts
# RED: 3 failed (expected), then GREEN: 26 passed
node scripts/run-vitest.mjs extensions/linkskills/{transport,native-coexistence,coexistence-registered,telemetry-adversarial,plugin-boundary,manifest,runtime}.test.ts
# 55 passed
git diff --check
./node_modules/.bin/oxfmt extensions/linkskills/src/transport.ts extensions/linkskills/transport.test.ts extensions/linkskills/src/config.ts extensions/linkskills/README.md
```

## Decisions

| Decision                                                                          | Reason                                              | Evidence                                          | Impact                                                         | Authority                                   |
| --------------------------------------------------------------------------------- | --------------------------------------------------- | ------------------------------------------------- | -------------------------------------------------------------- | ------------------------------------------- |
| Treat `skillsEndpoint` as Gateway base; append `/v1/{drainOp}`                    | Matches frozen Gateway + official client            | LiNKskills `server.py` / `client.py` @ `0e03745a` | Stage HTTPS base works without path rewrite ambiguity          | Carlos assignment + implementation judgment |
| Body `{params,idempotency_key,request_id}` + Idempotency-Key/X-Request-Id headers | Gateway accepts header or body; client uses headers | `server.py` + `client.py`                         | Interop without weakening auth                                 | Implementation judgment                     |
| Keep drain allowlist only (not full OPERATIONS)                                   | Existing strict drain contract                      | `tools.ts` `LINKSKILLS_DRAIN_TOOLS`               | No arbitrary operation names                                   | Preserve existing security                  |
| Reject raw `..` / unsafe prefix / userinfo                                        | Prevent path traversal and origin confusion         | New unit tests                                    | Fail-closed URL build                                          | Implementation judgment                     |
| Do not keep legacy `{toolName,arguments}` body                                    | Ambiguous/insecure dual contract                    | Mission: no ambiguity                             | Breaking for anyone posting old body shape (none shipped live) | Carlos assignment                           |

## Tests and Verification

- `extensions/linkskills/transport.test.ts`: 26 passed (exact URL/body, base URL forms, traversal/userinfo/non-drain rejection, prior auth/MCP cases)
- Broader focused suite: 55 passed (transport, coexistence, adversarial, boundary, manifest, runtime)
- Not tested: live stage Gateway call, Lisa runtime enablement, Tailscale/GSM, merge CI

## Problems and Blockers

None for this bounded fix. Worktree lacked `node_modules`; used symlink to coordination-home install for focused Vitest only.

## Uncommitted Changes

None intended after commit. Symlink `node_modules` is local-only and must not be committed.

## Risks and Unknowns

- Operators who configured `skillsEndpoint` as a full non-Gateway path expecting the old body shape must switch to Gateway base + new envelope (documented).
- Optional mount prefixes are allowed only for safe alphanumeric segments; unusual reverse-proxy paths may need a follow-up if real stage ever mounts off-origin path.

## Remaining Work

- Merge only when Carlos/Orchestrator authorizes (explicitly out of scope here).
- Stage Lisa HTTP drain canary after merge/deploy authorization.

## Exact Next Action

Ask matching Orchestrator to refresh `docs/current-status.md` from this session/handoff; do not merge without Carlos authorization.

## Questions for Carlos

None.

## Questions for the Orchestrator or Next Agent

None.

## Confidence

99% for the HTTP contract alignment against frozen Gateway source and focused tests. Live stage drain remains a separate authorized canary.

## Amendments

Append dated factual corrections here. Never silently rewrite an earlier handoff.
