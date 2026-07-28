# Fixture owner sign-off process

**Recorded (original):** 2026-07-28 07:44 Asia/Taipei
**Corrected:** 2026-07-28 09:52 Asia/Taipei (correction wave 2b)
**Brain denial corrections:** 2026-07-28 11:45 Asia/Taipei (fixture conformance after `COUNTERSIGN_DENIED`)
**Fixture-owner gate closed:** 2026-07-28 13:05 Asia/Taipei (Brain countersign + Skills tip reaffirmation at tip `429a7818…`)
**Branch:** `issue/ocp-openclawdevelopmentplan01`
**OpenClaw tip attested:** `429a7818e2f79be27329c1848531ffe9ba0f7367`
**OpenClaw agent:** Cursor Local Agent (Grok 4.5 High), Feature / Lisa plan execution owner
**Plan SHA-256:** `17203ee586a3fb2b1281bcddd8b17ae350075ebce537689f3c4bfcbbd14914f7`

## Purpose

Brain and Skills owners countersign OpenClaw consumer fixture packages so the
**Phase 1 fixture-owner gate** can claim **owner-approved** sanitized fixtures.

**Honest status (2026-07-28 13:05 Asia/Taipei):**

- Brain fixtures: **`OWNER_COUNTERSIGNED`** at tip `429a7818…` / aggregate `275c1fb7…9a1d`
- Skills fixtures: **`OWNER_COUNTERSIGNED`** (reaffirmed) at tip `429a7818…` / aggregate `8586d89a…ec96`
- **Phase 1 fixture-owner gate: CLOSED**
- **Phase 1 overall: NOT complete** — Platform auth-path approval remains blocked
- **Not** Codex Phase 14 certification; **not** merge authority; **not** Phases 7–12; **not** Lisa live enablement

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
| Brain   | `extensions/linkbrain/fixtures`  | 72         | `275c1fb747cf1042516794a1fdd164b88b7450a02cef2a58440bcb221f449a1d` |
| Skills  | `extensions/linkskills/fixtures` | 69         | `8586d89a4a160987ace45ed4392b78c8a66391940e81eed6bdc098f49404ec96` |

Prior Brain aggregate (denied; superseded): `d539debc7b9d7347c109e7d462fc27a48c28322f0d3d5b85d57f602e843d45fb`

Per-file inventories live in each package `MANIFEST.md`.

## Related contract pins (correction wave 2b)

| Domain       | Source HEAD                                | Key version / hash                                                                                                   |
| ------------ | ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------- |
| LiNKplatform | `e845ac17dffac52a501603ad2fafd1b53fef195d` | `platform.auth-claims/1.0.0`; schema `b0397cdf…50fb`; contentHash `6bf49618…b251`; `PLATFORM_CONTRACTS_SEMVER=0.2.1` |
| LiNKbrain    | `a3cff6e0f04ac968c32beacb7bdb1b81a4d77d3f` | `BRAIN_CONTRACT_VERSION=1.0.0`; frozen 17 tools via `frozen-tools.ts` `1e265b20…be26`                                |
| LiNKskills   | `f16103f23a716d0edeb08a1e82e38608ebd563ea` | `skills.api.v0.1`; schemas aggregate `828ac00d…81d2`; vendored auth-claims schema matches Platform                   |

Pin files: `contracts/{platform,brain,skills}/PIN.json`.

## Brain denial → correction → countersign path

1. Denial: `LiNKbrain/docs/handoffs/OPENCLAW-BRAIN-FIXTURE-COUNTERSIGN-2026-07-28.md` (`COUNTERSIGN_DENIED` of `d539debc…45fb` at tip `0b19e43…`).
2. OpenClaw corrections at tip culminating in `429a7818…` (aggregate `275c1fb7…9a1d`).
3. Brain approval: `LiNKbrain/docs/handoffs/OPENCLAW-BRAIN-FIXTURE-OWNER-COUNTERSIGNED-2026-07-28.md` (commit `d43552742b6a3e9eb942275106b103d873a889fb`).
4. Skills prior sign: `LiNKskills/docs/handoffs/2026-07-28-linkskills-openclaw-fixtures-OWNER-COUNTERSIGNED.md` (commit `fe9f28caec9eca571c522a5fc3c5059611397ac8`).
5. Skills tip reaffirmation: `LiNKskills/docs/handoffs/2026-07-28-linkskills-openclaw-fixtures-OWNER-COUNTERSIGNED-reaffirm.md` (commit `41ab5a3d31a79a662158d8fb434f76b707701b7a`).

OpenClaw independently recomputed both aggregates at tip `429a7818…` before recording these blocks — match confirmed.

---

## Countersignature — LiNKbrain owner

| Field                                                     | Value                                                                                                        |
| --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| Status                                                    | `OWNER_COUNTERSIGNED`                                                                                        |
| Fixture package                                           | `extensions/linkbrain/fixtures`                                                                              |
| Aggregate SHA-256 attested                                | `275c1fb747cf1042516794a1fdd164b88b7450a02cef2a58440bcb221f449a1d`                                           |
| OpenClaw tip attested                                     | `429a7818e2f79be27329c1848531ffe9ba0f7367`                                                                   |
| OpenClaw plan SHA-256                                     | `17203ee586a3fb2b1281bcddd8b17ae350075ebce537689f3c4bfcbbd14914f7`                                           |
| Brain HEAD referenced                                     | `a3cff6e0f04ac968c32beacb7bdb1b81a4d77d3f`                                                                   |
| Tool-name stance                                          | Frozen §9.1 (17) required; corrected Brain implements via `frozen-tools.ts`; OpenClaw allowlist remains §9.1 |
| Platform claims                                           | `platform.auth-claims/1.0.0` camelCase AuthClaims in identity/auth fixtures                                  |
| Contract / errors                                         | `BRAIN_CONTRACT_VERSION=1.0.0`; Gateway `BrainErrorCode` + `ErrorEnvelope`                                   |
| Owner name / session ID                                   | Cursor Grok 4.5 High — LiNKbrain domain owner / `issue/13-developmentplan01`                                 |
| Signature (typed name or commit SHA of approving handoff) | `d43552742b6a3e9eb942275106b103d873a889fb` (`OPENCLAW-BRAIN-FIXTURE-OWNER-COUNTERSIGNED-2026-07-28.md`)      |
| Signed at (Asia/Taipei)                                   | 2026-07-28 12:49                                                                                             |
| Notes / deltas                                            | Supersedes denial of `d539debc…45fb` at tip `0b19e43…`; denial checklist A/B/C cleared                       |

---

## Countersignature — LiNKskills owner

| Field                                                     | Value                                                                                                                                           |
| --------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| Status                                                    | `OWNER_COUNTERSIGNED` (reaffirmed at tip `429a7818…`)                                                                                           |
| Fixture package                                           | `extensions/linkskills/fixtures`                                                                                                                |
| Aggregate SHA-256 attested                                | `8586d89a4a160987ace45ed4392b78c8a66391940e81eed6bdc098f49404ec96`                                                                              |
| OpenClaw tip attested                                     | `429a7818e2f79be27329c1848531ffe9ba0f7367`                                                                                                      |
| Prior approving handoff                                   | `LiNKskills/docs/handoffs/2026-07-28-linkskills-openclaw-fixtures-OWNER-COUNTERSIGNED.md` (`fe9f28caec9eca571c522a5fc3c5059611397ac8`)          |
| Tip reaffirmation handoff                                 | `LiNKskills/docs/handoffs/2026-07-28-linkskills-openclaw-fixtures-OWNER-COUNTERSIGNED-reaffirm.md` (`41ab5a3d31a79a662158d8fb434f76b707701b7a`) |
| OpenClaw plan SHA-256                                     | `17203ee586a3fb2b1281bcddd8b17ae350075ebce537689f3c4bfcbbd14914f7`                                                                              |
| Skills HEAD referenced                                    | `f16103f23a716d0edeb08a1e82e38608ebd563ea`                                                                                                      |
| Contract version                                          | `skills.api.v0.1`                                                                                                                               |
| Platform claims                                           | `platform.auth-claims/1.0.0` (schema `b0397cdf…50fb` / contentHash `6bf49618…b251`)                                                             |
| Certification note                                        | Immutable-release / executor-receipt path; prior suite-authored observed_output path withdrawn                                                  |
| Owner name / session ID                                   | Cursor Grok 4.5 High — LiNKskills domain owner / `20260728-linkskills-openclaw-fixtures-reaffirm`                                               |
| Signature (typed name or commit SHA of approving handoff) | `41ab5a3d31a79a662158d8fb434f76b707701b7a` (reaffirm); prior `fe9f28caec9eca571c522a5fc3c5059611397ac8`                                         |
| Signed at (Asia/Taipei)                                   | 2026-07-28 12:58 (reaffirm); prior 2026-07-28 11:20                                                                                             |
| Notes / deltas                                            | Skills JSON byte-identical between `0b19e43…` and `429a7818…`; Brain-only correction wave                                                       |

## Gate closeout note

Recording these attestations closes the **Phase 1 fixture-owner countersign gate only**.
OpenClaw does **not** claim full Phase 1 exit, Codex Phase 14, merge readiness, Lisa
live enablement, or Phases 7–12 from this document.
