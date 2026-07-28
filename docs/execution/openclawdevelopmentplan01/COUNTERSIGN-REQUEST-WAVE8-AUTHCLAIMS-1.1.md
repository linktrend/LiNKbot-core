# Countersign request — AuthClaims 1.1.0 fixture refresh (wave 8)

**Date:** 2026-07-29 Asia/Taipei
**Branch:** `issue/ocp-openclawdevelopmentplan01`
**OpenClaw tip (at request authoring):** see Phase 13 / push tip after wave 8 lands
**Status:** **PENDING** — owners must countersign the new aggregates against the exact OpenClaw tip
**Wave 9 note:** AuthClaims 1.1.0 fixture bytes/aggregates unchanged; countersign against the wave-9 pushed HEAD (MCP toolFilter seam tip).
**Supersedes:** prior CLOSED countersign at tip `429a7818…` (AuthClaims 1.0.0 fixtures)

## Why re-countersign is required

Wave 8 refreshed Brain/Skills consumer fixtures to `platform.auth-claims/1.1.0` (positive path), retained `1.0.0` only as explicit rejection/backward-compat evidence, and added 1.1 positive/negative shape tests. Fixture bytes changed → prior `OWNER_COUNTERSIGNED` attestations no longer cover the package.

## New aggregates (recomputed)

Method: SHA-256 of sorted lines `{file_sha256}  {relative_path}` over all `*.json`.

| Owner | Package | JSON files | Aggregate SHA-256 |
| ----- | ------- | ---------- | ----------------- |
| LiNKbrain | `extensions/linkbrain/fixtures` | 75 | `4493f71432ef56f9fc272ff4c208b8901242c2bd83e138f53d6f0259b4f4811b` |
| LiNKskills | `extensions/linkskills/fixtures` | 71 | `203163711b5db17b8a07d3956e41596384cbd08f0c110bd9f21abfc5c7e5e19a` |

## Pin context

| Field | Value |
| ----- | ----- |
| AuthClaims | `platform.auth-claims/1.1.0` |
| Platform contracts package | `0.2.2` |
| Schema SHA-256 | `c2e8bc68b3feb9a3dacc497f5a5d497b466c400804fb4f9e41734c10772ddfa1` |
| contentHash | `fb518834be897c32574df5f7235704fdb0de708bd3da1b48fc448246e3eca567` |
| OpenClaw plan SHA-256 | `17203ee586a3fb2b1281bcddd8b17ae350075ebce537689f3c4bfcbbd14914f7` |

## Owner action required

1. Inspect fixture packages at the exact pushed OpenClaw tip.
2. Recompute aggregates with the method above; must match.
3. Record `OWNER_COUNTERSIGNED` (or denial) in domain handoffs + ask OpenClaw to update `FIXTURE-OWNER-SIGNOFF.md`.

## Explicit non-claims

- OpenClaw does **not** forge owner countersignatures.
- Fixture-owner gate is **re-opened** until both owners sign the new aggregates.
- Not Phase 14 / merge / Lisa live enablement.
