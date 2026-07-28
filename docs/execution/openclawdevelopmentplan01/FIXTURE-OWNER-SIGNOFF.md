# Fixture owner sign-off process

**Recorded (original):** 2026-07-28 07:44 Asia/Taipei  
**Corrected:** 2026-07-28 09:10 Asia/Taipei (correction wave 2)  
**Branch:** `issue/ocp-openclawdevelopmentplan01`  
**OpenClaw agent:** Cursor Cloud Agent (Grok 4.5 High), Feature  
**Plan SHA-256:** `17203ee586a3fb2b1281bcddd8b17ae350075ebce537689f3c4bfcbbd14914f7`

## Purpose

Brain and Skills owners countersign OpenClaw consumer fixture packages so Phase 1
full exit can claim **owner-approved** sanitized fixtures. Until countersigned,
fixtures remain OpenClaw-derived drafts for fake-tier proof only.

**Honest status:** signature fields below are blank. Status remains
`AWAITING_OWNER_COUNTERSIGN`. **This is NOT a passed Phase 1 gate.**

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
| Brain   | `extensions/linkbrain/fixtures`  | 71         | `d539debc7b9d7347c109e7d462fc27a48c28322f0d3d5b85d57f602e843d45fb` |
| Skills  | `extensions/linkskills/fixtures` | 69         | `8586d89a4a160987ace45ed4392b78c8a66391940e81eed6bdc098f49404ec96` |

Per-file inventories live in each package `MANIFEST.md`.

## Related contract pins (correction wave 2)

| Domain       | Source HEAD                                | Key version / hash                                                                                                   |
| ------------ | ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------- |
| LiNKplatform | `10458829761797a2a2a70eff0dfa3d05bf980396` | `platform.auth-claims/1.0.0`; schema `b0397cdf…50fb`; contentHash `6bf49618…b251`; `PLATFORM_CONTRACTS_SEMVER=0.2.1` |
| LiNKbrain    | `f2c9d6ce76576b5e6edd6d342f52f2ef1180da6a` | `BRAIN_CONTRACT_VERSION=1.0.0`; frozen 17 tools via `frozen-tools.ts` `1e265b20…be26`                                |
| LiNKskills   | `4094d84e1fb70b3310f4e236e6886f1449d8a1d9` | `skills.api.v0.1`; schemas aggregate `828ac00d…81d2`; vendored auth-claims schema matches Platform                   |

Pin files: `contracts/{platform,brain,skills}/PIN.json`.

Stale pre-correction heads (`95120dc…`, `86161d3…`, `fd1b636…`) are removed from active pins.

## Sign-off process (exact)

1. Owner pulls OpenClaw branch `issue/ocp-openclawdevelopmentplan01` (or reviews
   the commit that contains this file).
2. Owner re-runs the aggregate hash command above and confirms match.
3. Owner reviews tool names / claims against their domain contract:
   - Brain: frozen plan §9.1 names (17) — corrected Brain implements them at
     `f2c9d6c…` (`BRAIN-TOOL-NAME-DECISION-PACKET.md`).
   - Skills: plan §9.2 `skills_*` names + `skills.api.v0.1` schemas + exact
     `platform.auth-claims/1.0.0` camelCase AuthClaims in identity/auth fixtures.
4. Owner fills the countersignature block below (or publishes a sibling-repo
   handoff that cites the exact aggregate hash and this document path).
5. OpenClaw updates status from `AWAITING_OWNER_COUNTERSIGN` to
   `OWNER_COUNTERSIGNED` only after the signature fields are non-blank and the
   hash still matches.

## Sibling-repo approval search (2026-07-28; refreshed wave 2)

Read-only scan of LiNKbrain and LiNKskills `docs/handoffs/` for existing approval
of OpenClaw fixture packages:

| Source                                                                                  | Finding                                                                                                                |
| --------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `LiNKbrain/docs/handoffs/CORRECTION-HANDOFF-2026-07-28.md`                              | Documents frozen 17-tool MCP surface; **does not** countersign OpenClaw `extensions/linkbrain/fixtures` aggregate      |
| `LiNKbrain/docs/handoffs/PROVISIONAL-IMPLEMENTATION-HANDOFF.md`                         | OpenClaw/Lisa adapter outside Brain ownership — **not** an OpenClaw fixture hash approval                              |
| `LiNKskills/docs/handoffs/2026-07-28-grok-certification-path-correction.md`             | Immutable-release certification path correction + Platform claims; **no** sign-off of `extensions/linkskills/fixtures` |
| `LiNKskills/docs/handoffs/2026-07-27-grok-linkskills-internal-launch-implementation.md` | Superseded on certification/auth claims; no OpenClaw fixture hash approval                                             |

**Conclusion:** No live owner countersignature of OpenClaw fixture aggregates was
found in-session. Signature fields remain blank; status `AWAITING_OWNER_COUNTERSIGN`.
See `COUNTERSIGN-REQUEST.md` for Principal routing.

---

## Countersignature — LiNKbrain owner

| Field                                                     | Value                                                                                                        |
| --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| Status                                                    | `AWAITING_OWNER_COUNTERSIGN`                                                                                 |
| Fixture package                                           | `extensions/linkbrain/fixtures`                                                                              |
| Aggregate SHA-256 attested                                | `d539debc7b9d7347c109e7d462fc27a48c28322f0d3d5b85d57f602e843d45fb`                                           |
| OpenClaw plan SHA-256                                     | `17203ee586a3fb2b1281bcddd8b17ae350075ebce537689f3c4bfcbbd14914f7`                                           |
| Brain HEAD referenced                                     | `f2c9d6ce76576b5e6edd6d342f52f2ef1180da6a`                                                                   |
| Tool-name stance                                          | Frozen §9.1 (17) required; corrected Brain implements via `frozen-tools.ts`; OpenClaw allowlist remains §9.1 |
| Platform claims                                           | `platform.auth-claims/1.0.0` camelCase AuthClaims in identity/auth fixtures                                  |
| Owner name / session ID                                   | _(blank — awaiting)_                                                                                         |
| Signature (typed name or commit SHA of approving handoff) | _(blank — awaiting)_                                                                                         |
| Signed at (Asia/Taipei)                                   | _(blank — awaiting)_                                                                                         |
| Notes / deltas                                            | _(blank — awaiting)_                                                                                         |

---

## Countersignature — LiNKskills owner

| Field                                                     | Value                                                                                          |
| --------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| Status                                                    | `AWAITING_OWNER_COUNTERSIGN`                                                                   |
| Fixture package                                           | `extensions/linkskills/fixtures`                                                               |
| Aggregate SHA-256 attested                                | `8586d89a4a160987ace45ed4392b78c8a66391940e81eed6bdc098f49404ec96`                             |
| OpenClaw plan SHA-256                                     | `17203ee586a3fb2b1281bcddd8b17ae350075ebce537689f3c4bfcbbd14914f7`                             |
| Skills HEAD referenced                                    | `4094d84e1fb70b3310f4e236e6886f1449d8a1d9`                                                     |
| Contract version                                          | `skills.api.v0.1`                                                                              |
| Platform claims                                           | `platform.auth-claims/1.0.0` (schema `b0397cdf…50fb` / contentHash `6bf49618…b251`)            |
| Certification note                                        | Immutable-release / executor-receipt path; prior suite-authored observed_output path withdrawn |
| Owner name / session ID                                   | _(blank — awaiting)_                                                                           |
| Signature (typed name or commit SHA of approving handoff) | _(blank — awaiting)_                                                                           |
| Signed at (Asia/Taipei)                                   | _(blank — awaiting)_                                                                           |
| Notes / deltas                                            | _(blank — awaiting)_                                                                           |
