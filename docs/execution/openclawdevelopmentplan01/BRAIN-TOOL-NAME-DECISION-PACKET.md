# Decision packet — Brain MCP tool names (frozen §9.1 vs CURRENT aliases)

**Recorded:** 2026-07-28 07:44 Asia/Taipei  
**Branch:** `issue/ocp-openclawdevelopmentplan01`  
**OpenClaw agent:** Cursor Cloud Agent (Grok 4.5 High), Feature  
**Plan SHA-256:** `17203ee586a3fb2b1281bcddd8b17ae350075ebce537689f3c4bfcbbd14914f7`  
**Brain HEAD inspected (read-only):** `86161d3ab78679ffc3b96680cf04e03c2d5c8fd2`

## Problem

OpenClaw’s frozen integration plan §9.1 names the Brain managed MCP tools Lisa
may call. LiNKbrain’s current `packages/mcp-server` registers a different,
shorter set of tool names. The surfaces are incompatible. If OpenClaw aliases
to Brain’s CURRENT names, the frozen plan, fixture package, allowlists, and
fakes all drift. If Brain never implements §9.1, live MCP will not match the
consumer.

## Evidence

### Frozen OpenClaw plan §9.1 (authoritative for OpenClaw)

From
`docs/OPENCLAW-PRIME-LISA-LINKBRAIN-LINKSKILLS-DETAILED-IMPLEMENTATION-PLAN.md`
§9.1:

| Family       | Frozen tool names                                                                                                                                                                                         |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| knowledge    | `brain_browse`, `brain_search`, `brain_load`, `brain_append_finding`                                                                                                                                      |
| private      | `brain_capture_batch`, `brain_episode_checkpoint`, `brain_private_search`, `brain_private_load`                                                                                                           |
| coordination | `brain_task_start`, `brain_task_update`, `brain_inbox_read`, `brain_conflict_respond`, `brain_message_send`, `brain_checkpoint_write`, `brain_handoff_create`, `brain_handoff_accept`, `brain_task_close` |

OpenClaw mirrors these in:

- `docs/execution/openclawdevelopmentplan01/mcp-templates/tool-allowlists.yaml`
- `extensions/linkbrain/fixtures/tools/**` (request/response/error per frozen name)
- `extensions/linkbrain` MCP tool filter / fake

### Brain CURRENT mcp-server (incompatible)

Source: `LiNKbrain/packages/mcp-server/src/tools.ts` at HEAD
`86161d3ab78679ffc3b96680cf04e03c2d5c8fd2` (also README / tests).

| CURRENT Brain MCP name   | Closest frozen §9.1 name(s)                     | Match?                    |
| ------------------------ | ----------------------------------------------- | ------------------------- |
| `brain_search_knowledge` | `brain_search`                                  | **no** — different string |
| `brain_load_knowledge`   | `brain_load`                                    | **no**                    |
| `brain_start_task`       | `brain_task_start`                              | **no**                    |
| `brain_respond_conflict` | `brain_conflict_respond`                        | **no**                    |
| `brain_checkpoint`       | `brain_checkpoint_write`                        | **no**                    |
| `brain_handoff`          | `brain_handoff_create` / `brain_handoff_accept` | **no** — collapsed        |
| `brain_capture_batch`    | `brain_capture_batch`                           | yes (name only)           |
| `brain_list_inbox`       | `brain_inbox_read`                              | **no**                    |
| `brain_submit_finding`   | `brain_append_finding`                          | **no**                    |

Missing entirely from CURRENT vs frozen §9.1 (non-exhaustive): `brain_browse`,
`brain_episode_checkpoint`, `brain_private_search`, `brain_private_load`,
`brain_task_update`, `brain_message_send`, `brain_task_close`, and separate
handoff create/accept.

Brain contracts package pin: `BRAIN_CONTRACT_VERSION=1.0.0`,
`schemas.ts` SHA-256
`61468e4cf93d087df23dad1c26fbc91b258378757024debcde0cb6e97d50e0bb`.

## Options

| Option                                                  | Description                                                                                           | Pros                                                                                   | Cons                                                                                                        |
| ------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| **A. Brain implements frozen §9.1 names** (recommended) | LiNKbrain mcp-server exposes exact §9.1 tool strings; CURRENT aliases removed or doctor-migrated only | Single consumer contract; OpenClaw fixtures/allowlists stay valid; plan freeze honored | Brain owner work; may break early Brain-only callers of CURRENT names                                       |
| **B. OpenClaw aliases CURRENT → §9.1**                  | OpenClaw maps `brain_search` → `brain_search_knowledge` etc.                                          | Faster short-term live wiring                                                          | Violates freeze; dual names forever; fixtures lie; Principal mission forbids                                |
| **C. Renegotiate plan §9.1 to CURRENT**                 | Change OpenClaw plan + fixtures + allowlists to Brain CURRENT                                         | Aligns to today’s Brain code                                                           | Breaks frozen plan hash; requires Principal + multi-repo re-freeze; loses private/coordination completeness |
| **D. Dual expose**                                      | Brain serves both name sets temporarily                                                               | Soft migration                                                                         | Two contracts; still need end-state §9.1; OpenClaw still must not invent aliases                            |

## Recommendation

**Option A.** OpenClaw keeps frozen §9.1 names and **will not** implement Option B
aliases. Brain owner must implement the frozen tool surface before live Lisa MCP
conformance can be claimed.

Option D is acceptable only as a Brain-owned migration aid if Brain dual-exposes
during a dated window; OpenClaw still calls §9.1 names only.

## Authority

| Party                              | Action                                                                                             |
| ---------------------------------- | -------------------------------------------------------------------------------------------------- |
| OpenClaw Feature (this session)    | Record packet; keep §9.1 in fixtures/allowlists/fakes; no alias code                               |
| Principal                          | Route this packet to LiNKbrain owner; reject any OpenClaw PR that renames tools to CURRENT aliases |
| LiNKbrain owner                    | Implement §9.1 names (Option A); publish conformance evidence + superseding contract pin if needed |
| OpenClaw Codex verifier (Phase 14) | Verify OpenClaw did not alias; verify Brain §9.1 evidence when claimed                             |

## Status

| Item                   | State                                    |
| ---------------------- | ---------------------------------------- |
| OpenClaw decision      | **DECIDED** — keep frozen §9.1; no alias |
| Brain owner acceptance | **AWAITING_OWNER_COUNTERSIGN**           |
| Live MCP conformance   | **blocked** until Brain implements §9.1  |

## Principal routing instruction

Please send this packet to the LiNKbrain owner/session with:

1. Exact frozen name list from §9.1 (table above).
2. CURRENT incompatible inventory from `packages/mcp-server/src/tools.ts`.
3. Requirement: implement Option A; do not ask OpenClaw to alias.
4. Reply countersignature in `FIXTURE-OWNER-SIGNOFF.md` (Brain block) and/or a
   Brain handoff citing this packet SHA once committed.
