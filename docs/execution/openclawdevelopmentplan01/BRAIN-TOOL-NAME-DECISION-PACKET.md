# Decision packet — Brain MCP tool names (frozen §9.1)

**Recorded (original):** 2026-07-28 07:44 Asia/Taipei  
**Corrected:** 2026-07-28 09:10 Asia/Taipei (correction wave 2)  
**Branch:** `issue/ocp-openclawdevelopmentplan01`  
**OpenClaw agent:** Cursor Cloud Agent (Grok 4.5 High), Feature  
**Plan SHA-256:** `17203ee586a3fb2b1281bcddd8b17ae350075ebce537689f3c4bfcbbd14914f7`  
**Brain HEAD (corrected):** `f2c9d6ce76576b5e6edd6d342f52f2ef1180da6a` (`issue/13-developmentplan01`)

## Correction summary

**Corrected Brain implements frozen plan §9.1 — all 17 tools** at HEAD `f2c9d6c…` via
`packages/mcp-server/src/frozen-tools.ts` (`FROZEN_MCP_TOOL_NAMES` /
`FROZEN_MCP_TOOLS`). OpenClaw’s allowlist, fixtures, and fakes remain §9.1.

The pre-correction claim that Brain exposed only nine mismatched CURRENT aliases
(`brain_search_knowledge`, …) is **obsolete** and must not be repeated. Stale pin
`86161d3…` is scrubbed from active consumption records.

## Frozen OpenClaw plan §9.1 (authoritative for OpenClaw)

From
`docs/OPENCLAW-PRIME-LISA-LINKBRAIN-LINKSKILLS-DETAILED-IMPLEMENTATION-PLAN.md`
§9.1:

| Family | Frozen tool names |
| --- | --- |
| knowledge | `brain_browse`, `brain_search`, `brain_load`, `brain_append_finding` |
| private | `brain_capture_batch`, `brain_episode_checkpoint`, `brain_private_search`, `brain_private_load` |
| coordination | `brain_task_start`, `brain_task_update`, `brain_inbox_read`, `brain_conflict_respond`, `brain_message_send`, `brain_checkpoint_write`, `brain_handoff_create`, `brain_handoff_accept`, `brain_task_close` |

OpenClaw mirrors these in:

- `docs/execution/openclawdevelopmentplan01/mcp-templates/tool-allowlists.yaml`
- `extensions/linkbrain/fixtures/tools/**` (request/response/error per frozen name)
- `extensions/linkbrain` MCP tool filter / fake
- `contracts/brain/PIN.json`

## Corrected Brain evidence

| Field | Value |
| --- | --- |
| Source HEAD | `f2c9d6ce76576b5e6edd6d342f52f2ef1180da6a` |
| Authoritative surface | `packages/mcp-server/src/frozen-tools.ts` |
| File SHA-256 | `1e265b20dca34f4be73908a38bf2102c514ce594574faf27a41a9567a663be26` |
| Tool count | **17** (exact match to §9.1) |
| Legacy aliases | Optional via compat flag only; primary `tools/list` is frozen names |
| Contracts | `BRAIN_CONTRACT_VERSION=1.0.0`; `schemas.ts` SHA-256 `61468e4cf93d087df23dad1c26fbc91b258378757024debcde0cb6e97d50e0bb` |
| Correction handoff (Brain) | `LiNKbrain/docs/handoffs/CORRECTION-HANDOFF-2026-07-28.md` |

## Historical options (retained for provenance)

| Option | Description | Status after correction |
| --- | --- | --- |
| **A. Brain implements frozen §9.1 names** | LiNKbrain mcp-server exposes exact §9.1 tool strings | **DONE at corrected Brain HEAD** (code evidence); OpenClaw fixture owner countersign still open |
| **B. OpenClaw aliases CURRENT → §9.1** | Map mismatched CURRENT names | **Rejected** — freeze violation |
| **C. Renegotiate plan §9.1 to CURRENT** | Change OpenClaw plan + fixtures | **Rejected** — not needed |
| **D. Dual expose** | Brain serves both name sets temporarily | Brain may keep optional legacy aliases; OpenClaw still calls §9.1 only |

## Authority

| Party | Action |
| --- | --- |
| OpenClaw Feature (this session) | Keep §9.1 in fixtures/allowlists/fakes; repin corrected Brain HEAD; no alias code |
| Principal | Route fixture countersign (`FIXTURE-OWNER-SIGNOFF.md` / `COUNTERSIGN-REQUEST.md`) to Brain owner |
| LiNKbrain owner | Countersign OpenClaw fixture aggregate after reviewing §9.1 alignment |
| OpenClaw Codex verifier (Phase 14) | Verify OpenClaw did not alias; verify Brain frozen 17-tool evidence |

## Status

| Item | State |
| --- | --- |
| OpenClaw decision | **DECIDED** — keep frozen §9.1; no alias |
| Brain §9.1 implementation (corrected HEAD) | **IMPLEMENTED** at `f2c9d6c…` (code evidence) |
| Brain owner fixture countersign | **AWAITING_OWNER_COUNTERSIGN** |
| Phase 1 full exit | **NOT PASSED** — owner countersign still required |

## Principal routing instruction

Please send this corrected packet to the LiNKbrain owner/session with:

1. Exact frozen name list from §9.1 (table above).
2. Confirmation that corrected Brain HEAD implements `FROZEN_MCP_TOOL_NAMES` (17).
3. Request countersignature of OpenClaw fixture aggregate in `FIXTURE-OWNER-SIGNOFF.md`
   (see also `COUNTERSIGN-REQUEST.md`).
4. Do **not** treat this packet alone as Phase 1 complete.
