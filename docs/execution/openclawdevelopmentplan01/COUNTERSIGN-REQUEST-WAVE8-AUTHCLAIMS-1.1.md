# Countersign request — AuthClaims 1.1.0 fixture refresh (wave 8)

**Date:** 2026-07-29 Asia/Taipei
**Branch:** `issue/ocp-openclawdevelopmentplan01`
**Immutable OpenClaw inspection tip:** `83c118e981e340ba75f8f1068666dba93a6d4149`
**Status:** **PENDING** — owners must countersign the new aggregates against the immutable inspection tip above
**Wave 20 note:** Docs/provenance only; fixture JSON bytes unchanged from wave-8 aggregates. The immutable inspection tip is the exact Wave-20 clean pushed HEAD (tip-record fills/replaces if needed). Do not use a floating “see tip after push” placeholder.
**Supersedes:** prior CLOSED countersign at tip `429a7818…` (AuthClaims 1.0.0 fixtures) — historical only

## Why re-countersign is required

Wave 8 refreshed Brain/Skills consumer fixtures to `platform.auth-claims/1.1.0` (positive path), retained `1.0.0` only as explicit rejection/backward-compat evidence, and added 1.1 positive/negative shape tests. Fixture bytes changed → prior `OWNER_COUNTERSIGNED` attestations no longer cover the package.

## New aggregates (recomputed)

Method: SHA-256 of sorted lines `{file_sha256}  {relative_path}` over all `*.json`.

| Owner | Package | JSON files | Aggregate SHA-256 |
| ----- | ------- | ---------- | ----------------- |
| LiNKbrain | `extensions/linkbrain/fixtures` | 75 | `4493f71432ef56f9fc272ff4c208b8901242c2bd83e138f53d6f0259b4f4811b` |
| LiNKskills | `extensions/linkskills/fixtures` | 71 | `203163711b5db17b8a07d3956e41596384cbd08f0c110bd9f21abfc5c7e5e19a` |

## AuthClaims 1.1 provenance (authoritative)

| Field | Value |
| ----- | ----- |
| AuthClaims | `platform.auth-claims/1.1.0` |
| Platform contracts package | `@linktrend/platform-contracts@0.2.2` |
| Platform source HEAD | `6861a376aae5fa4e12c1b68a808d7b04e7bbfb5b` |
| Schema SHA-256 | `c2e8bc68b3feb9a3dacc497f5a5d497b466c400804fb4f9e41734c10772ddfa1` |
| contentHash | `fb518834be897c32574df5f7235704fdb0de708bd3da1b48fc448246e3eca567` |
| OpenClaw plan SHA-256 | `17203ee586a3fb2b1281bcddd8b17ae350075ebce537689f3c4bfcbbd14914f7` |
| Fixture-owner gate | **RE-OPENED** / **`PENDING_OWNER_COUNTERSIGN`** |

## Owner action required

1. Inspect fixture packages at the **immutable OpenClaw inspection tip** above (`git checkout <tip>`).
2. Recompute aggregates with the method above; must match both exact hashes.
3. Record `OWNER_COUNTERSIGNED` (or denial) in domain handoffs + ask OpenClaw to update `FIXTURE-OWNER-SIGNOFF.md`.

## Explicit non-claims

- OpenClaw does **not** forge owner countersignatures.
- Fixture-owner gate is **re-opened** until both owners sign the new aggregates.
- Not Phase 14 / merge / Lisa live enablement.
- Do **not** request countersigns until OpenClaw Codex confirms the resulting final head.
