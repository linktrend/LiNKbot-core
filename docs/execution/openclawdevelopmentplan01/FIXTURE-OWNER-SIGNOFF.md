# Fixture owner sign-off process

**Recorded:** 2026-07-28 07:44 Asia/Taipei  
**Branch:** `issue/ocp-openclawdevelopmentplan01`  
**OpenClaw agent:** Cursor Cloud Agent (Grok 4.5 High), Feature  
**Plan SHA-256:** `17203ee586a3fb2b1281bcddd8b17ae350075ebce537689f3c4bfcbbd14914f7`

## Purpose

Brain and Skills owners countersign OpenClaw consumer fixture packages so Phase 1
full exit can claim **owner-approved** sanitized fixtures. Until countersigned,
fixtures remain OpenClaw-derived drafts for fake-tier proof only.

## Aggregate hashes (sorted JSON inventory method)

Compute:

```text
find <fixtures-root> -type f -name '*.json' | sed 's|^\./||' | sort \
  | while read f; do shasum -a 256 "$f" | awk -v f="$f" '{print $1 "  " f}'; done \
  | shasum -a 256
```

Paths are relative to the fixture package root. Result is the package content hash.

| Package | Root                             | JSON files | Aggregate SHA-256                                                  |
| ------- | -------------------------------- | ---------- | ------------------------------------------------------------------ |
| Brain   | `extensions/linkbrain/fixtures`  | 71         | `91167a13fa33b8bb04141981bfec683f381e0593ed2bad4b2b910e9535d994ba` |
| Skills  | `extensions/linkskills/fixtures` | 69         | `adc5b0f0ffe6f07fc62314f628ea813108c49d7e299f82a9b73a8b7f8d46909a` |

Per-file inventories live in each package `MANIFEST.md`.

## Related contract pins

| Domain       | Source HEAD                                | Key version / hash                                                                                              |
| ------------ | ------------------------------------------ | --------------------------------------------------------------------------------------------------------------- |
| LiNKplatform | `95120dc4549f0bc79627668acbc5b21afd699e29` | golden `deb43dca494a198cad86e49fc6be91ccb79d19aa297e8d824d7416e5be35a134`; `PLATFORM_CONTRACTS_SEMVER=0.2.0`    |
| LiNKbrain    | `86161d3ab78679ffc3b96680cf04e03c2d5c8fd2` | `BRAIN_CONTRACT_VERSION=1.0.0`; `schemas.ts` `61468e4cf93d087df23dad1c26fbc91b258378757024debcde0cb6e97d50e0bb` |
| LiNKskills   | `fd1b6364b8450ec292773f00cc2dc6de19143a70` | `skills.api.v0.1`; schemas aggregate `06ec5d10fc579e1e69f99b099939fafe867047674f374079b98db528bf3e61d1`         |

Pin files: `contracts/{platform,brain,skills}/PIN.json`.

## Sign-off process (exact)

1. Owner pulls OpenClaw branch `issue/ocp-openclawdevelopmentplan01` (or reviews
   the commit that contains this file).
2. Owner re-runs the aggregate hash command above and confirms match.
3. Owner reviews tool names against their domain contract:
   - Brain: frozen plan §9.1 names (see `BRAIN-TOOL-NAME-DECISION-PACKET.md`).
     CURRENT mcp-server aliases are **not** accepted as OpenClaw target names.
   - Skills: plan §9.2 `skills_*` names + `skills.api.v0.1` schemas.
4. Owner fills the countersignature block below (or publishes a sibling-repo
   handoff that cites the exact aggregate hash and this document path).
5. OpenClaw updates status from `AWAITING_OWNER_COUNTERSIGN` to
   `OWNER_COUNTERSIGNED` only after the signature fields are non-blank and the
   hash still matches.

## Sibling-repo approval search (2026-07-28)

Read-only scan of LiNKbrain and LiNKskills `docs/handoffs/` for existing approval
of OpenClaw fixture packages:

| Source                                                                                  | Finding                                                                                                                                                                               |
| --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `LiNKbrain/docs/handoffs/PROVISIONAL-IMPLEMENTATION-HANDOFF.md`                         | States OpenClaw/Lisa adapter is outside Brain ownership; Brain supplies contracts/fixtures for consumer — **does not** countersign OpenClaw `extensions/linkbrain/fixtures` aggregate |
| `LiNKbrain/docs/handoffs/PHASE1-BATCH-HEADER.md`                                        | “Supply contract/fixtures only” for OpenClaw — **not** an approval of OpenClaw draft MANIFEST hashes                                                                                  |
| `LiNKbrain/docs/handoffs/CONSUMER-INVENTORY.md`                                         | Future OpenClaw/Lisa adapter **not live**                                                                                                                                             |
| `LiNKskills/docs/handoffs/2026-07-27-grok-linkskills-internal-launch-implementation.md` | OpenClaw gate: implement from Skills MCP fragment + handoff — **no** sign-off of `extensions/linkskills/fixtures`                                                                     |
| `LiNKskills/docs/handoffs/2026-07-27-codex-linkskills-internal-launch-plan.md`          | Ownership assignment only; no fixture hash approval                                                                                                                                   |

**Conclusion:** No live owner countersignature of OpenClaw fixture aggregates was
found. Signature fields remain blank; status `AWAITING_OWNER_COUNTERSIGN`.

## Principal routing instruction

Please ask:

1. **LiNKbrain owner** to countersign the Brain block below (and accept
   `BRAIN-TOOL-NAME-DECISION-PACKET.md` Option A).
2. **LiNKskills owner** to countersign the Skills block below.

Until both countersign, Phase 1 domain-owner fixture approval remains open;
OpenClaw may continue fake-tier Phases 2–6 without claiming domain conformance.

---

## Countersignature — LiNKbrain owner

| Field                                                     | Value                                                                       |
| --------------------------------------------------------- | --------------------------------------------------------------------------- |
| Status                                                    | `AWAITING_OWNER_COUNTERSIGN`                                                |
| Fixture package                                           | `extensions/linkbrain/fixtures`                                             |
| Aggregate SHA-256 attested                                | `91167a13fa33b8bb04141981bfec683f381e0593ed2bad4b2b910e9535d994ba`          |
| OpenClaw plan SHA-256                                     | `17203ee586a3fb2b1281bcddd8b17ae350075ebce537689f3c4bfcbbd14914f7`          |
| Brain HEAD referenced                                     | `86161d3ab78679ffc3b96680cf04e03c2d5c8fd2`                                  |
| Tool-name stance                                          | Frozen §9.1 names required; CURRENT aliases not accepted as OpenClaw target |
| Owner name / session ID                                   | _(blank — awaiting)_                                                        |
| Signature (typed name or commit SHA of approving handoff) | _(blank — awaiting)_                                                        |
| Signed at (Asia/Taipei)                                   | _(blank — awaiting)_                                                        |
| Notes / deltas                                            | _(blank — awaiting)_                                                        |

---

## Countersignature — LiNKskills owner

| Field                                                     | Value                                                              |
| --------------------------------------------------------- | ------------------------------------------------------------------ |
| Status                                                    | `AWAITING_OWNER_COUNTERSIGN`                                       |
| Fixture package                                           | `extensions/linkskills/fixtures`                                   |
| Aggregate SHA-256 attested                                | `adc5b0f0ffe6f07fc62314f628ea813108c49d7e299f82a9b73a8b7f8d46909a` |
| OpenClaw plan SHA-256                                     | `17203ee586a3fb2b1281bcddd8b17ae350075ebce537689f3c4bfcbbd14914f7` |
| Skills HEAD referenced                                    | `fd1b6364b8450ec292773f00cc2dc6de19143a70`                         |
| Contract version                                          | `skills.api.v0.1`                                                  |
| Owner name / session ID                                   | _(blank — awaiting)_                                               |
| Signature (typed name or commit SHA of approving handoff) | _(blank — awaiting)_                                               |
| Signed at (Asia/Taipei)                                   | _(blank — awaiting)_                                               |
| Notes / deltas                                            | _(blank — awaiting)_                                               |
