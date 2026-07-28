# Fixture owner sign-off process

**Recorded (original):** 2026-07-28 07:44 Asia/Taipei
**Corrected:** 2026-07-28 09:52 Asia/Taipei (correction wave 2b)
**Brain denial corrections:** 2026-07-28 11:45 Asia/Taipei (fixture conformance after `COUNTERSIGN_DENIED`)
**Branch:** `issue/ocp-openclawdevelopmentplan01`
**OpenClaw agent:** Cursor Local Agent (Grok 4.5 High), Feature / Lisa plan execution owner
**Plan SHA-256:** `17203ee586a3fb2b1281bcddd8b17ae350075ebce537689f3c4bfcbbd14914f7`

## Purpose

Brain and Skills owners countersign OpenClaw consumer fixture packages so Phase 1
full exit can claim **owner-approved** sanitized fixtures. Until countersigned,
fixtures remain OpenClaw-derived drafts for fake-tier proof only.

**Honest status:** Brain is **not** `OWNER_COUNTERSIGNED` (prior denial; corrected
aggregate awaiting re-countersign). Skills was `OWNER_COUNTERSIGNED` for the
unchanged fixture tree at tip `0b19e43…`, and now needs a **lightweight tip
reaffirmation** against the post-correction OpenClaw tip. **This is NOT a passed
Phase 1 gate.**

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

## Brain denial → correction summary

Consumed: `LiNKbrain/docs/handoffs/OPENCLAW-BRAIN-FIXTURE-COUNTERSIGN-2026-07-28.md`
(`COUNTERSIGN_DENIED` at OpenClaw tip `0b19e43…`, LiNKbrain commit
`b28b1e595d9b3c5ed2669b76b88cda177b0720b6`).

Corrections applied in OpenClaw (functional fake/fixture/tests, not docs-only):

1. Added `auth/rotated.json` (`reasons: ["revoked"]`, `credentialStatus: "rotated"`).
2. `auth/wrong-scope.json` `expectedOutcome` → `wrong_service`.
3. Request fields: episode `sessionId`/`title`/`summary`; private_load `id`; handoff `decision`; message `toActorBindingId`; task_close `summary`.
4. `contractVersion` → `1.0.0` everywhere required.
5. Failure taxonomy → Gateway codes (`unauthorized`, `validation_error`, `rate_limited`, `internal_error`, …).
6. Error objects → ErrorEnvelope fields (`code`, `message`, `safeMessage`, `retryable`).

Skills fixture JSON preserved byte-for-byte; aggregate remains `8586d89a…ec96`.

## Sign-off process (exact)

1. Owner pulls OpenClaw branch `issue/ocp-openclawdevelopmentplan01` (or reviews
   the commit that contains this file).
2. Owner re-runs the aggregate hash command above and confirms match.
3. Owner reviews tool names / claims against their domain contract:
   - Brain: frozen plan §9.1 names (17) — corrected Brain implements them at
     `a3cff6e…` (`BRAIN-TOOL-NAME-DECISION-PACKET.md`).
   - Skills: plan §9.2 `skills_*` names + `skills.api.v0.1` schemas + exact
     `platform.auth-claims/1.0.0` camelCase AuthClaims in identity/auth fixtures.
4. Owner fills the countersignature block below (or publishes a sibling-repo
   handoff that cites the exact aggregate hash and this document path).
5. OpenClaw updates status from `AWAITING_OWNER_COUNTERSIGN` to
   `OWNER_COUNTERSIGNED` only after the signature fields are non-blank and the
   hash still matches. **OpenClaw must not self-certify Brain.**

## Sibling-repo approval search (2026-07-28; refreshed after Brain denial)

| Source                                                                                    | Finding                                                                                                                           |
| ----------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `LiNKbrain/docs/handoffs/OPENCLAW-BRAIN-FIXTURE-COUNTERSIGN-2026-07-28.md`                | **`COUNTERSIGN_DENIED`** for aggregate `d539debc…45fb` at tip `0b19e43…` — blocking semantics listed; aggregate recompute matched |
| `LiNKskills/docs/handoffs/2026-07-28-linkskills-openclaw-fixtures-OWNER-COUNTERSIGNED.md` | **`OWNER_COUNTERSIGNED`** for Skills aggregate `8586d89a…ec96` at tip `0b19e43…` (commit `fe9f28ca…`); tree unchanged since then  |
| `LiNKbrain/docs/handoffs/CORRECTION-HANDOFF-2026-07-28.md`                                | Frozen 17-tool MCP surface; **not** a countersign of the corrected OpenClaw Brain aggregate                                       |

**Conclusion:** Brain requires a **new** countersign of aggregate `275c1fb7…9a1d`.
Skills prior countersign covers the unchanged fixture bytes but needs tip
reaffirmation after the OpenClaw tip advances. See `COUNTERSIGN-REQUEST.md`.

---

## Countersignature — LiNKbrain owner

| Field                                                     | Value                                                                                                        |
| --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| Status                                                    | `AWAITING_OWNER_COUNTERSIGN` (re-request; prior denial of `d539debc…45fb`)                                   |
| Fixture package                                           | `extensions/linkbrain/fixtures`                                                                              |
| Aggregate SHA-256 attested                                | `275c1fb747cf1042516794a1fdd164b88b7450a02cef2a58440bcb221f449a1d`                                           |
| OpenClaw plan SHA-256                                     | `17203ee586a3fb2b1281bcddd8b17ae350075ebce537689f3c4bfcbbd14914f7`                                           |
| Brain HEAD referenced                                     | `a3cff6e0f04ac968c32beacb7bdb1b81a4d77d3f`                                                                   |
| Tool-name stance                                          | Frozen §9.1 (17) required; corrected Brain implements via `frozen-tools.ts`; OpenClaw allowlist remains §9.1 |
| Platform claims                                           | `platform.auth-claims/1.0.0` camelCase AuthClaims in identity/auth fixtures                                  |
| Contract / errors                                         | `BRAIN_CONTRACT_VERSION=1.0.0`; Gateway `BrainErrorCode` + `ErrorEnvelope`                                   |
| Owner name / session ID                                   | _(blank — awaiting)_                                                                                         |
| Signature (typed name or commit SHA of approving handoff) | _(blank — awaiting)_                                                                                         |
| Signed at (Asia/Taipei)                                   | _(blank — awaiting)_                                                                                         |
| Notes / deltas                                            | _(blank — awaiting)_                                                                                         |

---

## Countersignature — LiNKskills owner

| Field                               | Value                                                                                                                                                 |
| ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| Status                              | `OWNER_COUNTERSIGNED` for fixture tree `8586d89a…ec96` at tip `0b19e43…`; **`AWAITING_TIP_REAFFIRMATION`** against post-Brain-correction OpenClaw tip |
| Fixture package                     | `extensions/linkskills/fixtures`                                                                                                                      |
| Aggregate SHA-256 attested          | `8586d89a4a160987ace45ed4392b78c8a66391940e81eed6bdc098f49404ec96`                                                                                    |
| Prior approving handoff             | `LiNKskills/docs/handoffs/2026-07-28-linkskills-openclaw-fixtures-OWNER-COUNTERSIGNED.md` (`fe9f28ca…`)                                               |
| OpenClaw plan SHA-256               | `17203ee586a3fb2b1281bcddd8b17ae350075ebce537689f3c4bfcbbd14914f7`                                                                                    |
| Skills HEAD referenced              | `f16103f23a716d0edeb08a1e82e38608ebd563ea`                                                                                                            |
| Contract version                    | `skills.api.v0.1`                                                                                                                                     |
| Platform claims                     | `platform.auth-claims/1.0.0` (schema `b0397cdf…50fb` / contentHash `6bf49618…b251`)                                                                   |
| Certification note                  | Immutable-release / executor-receipt path; prior suite-authored observed_output path withdrawn                                                        |
| Tip reaffirmation name / session ID | _(blank — awaiting lightweight reaffirmation)_                                                                                                        |
| Tip reaffirmation signature         | _(blank — awaiting)_                                                                                                                                  |
| Tip reaffirmation at (Asia/Taipei)  | _(blank — awaiting)_                                                                                                                                  |
| Notes / deltas                      | Skills JSON bytes unchanged in Brain-denial correction wave                                                                                           |
