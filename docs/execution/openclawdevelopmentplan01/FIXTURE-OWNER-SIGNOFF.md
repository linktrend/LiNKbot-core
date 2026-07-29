# Fixture owner sign-off process

**Recorded (original):** 2026-07-28 07:44 Asia/Taipei
**Wave 8 AuthClaims 1.1.0 refresh:** 2026-07-29 Asia/Taipei — fixture-owner gate RE-OPENED (superseded by closeout below)
**AuthClaims 1.1 countersign closeout:** 2026-07-30 Asia/Taipei — **fixture-owner gate CLOSED** / **`OWNER_COUNTERSIGNED`**
**Branch:** `issue/ocp-openclawdevelopmentplan01`
**Plan SHA-256:** `17203ee586a3fb2b1281bcddd8b17ae350075ebce537689f3c4bfcbbd14914f7`
**Inspected OpenClaw tip (both owners):** `005c9454f1bd3f7427936704131ffe5faa95ef0f`

## Honest status (AuthClaims 1.1.0 — current)

| Package                                   | JSON | Aggregate SHA-256                                                  | Status                    |
| ----------------------------------------- | ---: | ------------------------------------------------------------------ | ------------------------- |
| Brain (`extensions/linkbrain/fixtures`)   |   75 | `4493f71432ef56f9fc272ff4c208b8901242c2bd83e138f53d6f0259b4f4811b` | **`OWNER_COUNTERSIGNED`** |
| Skills (`extensions/linkskills/fixtures`) |   71 | `203163711b5db17b8a07d3956e41596384cbd08f0c110bd9f21abfc5c7e5e19a` | **`OWNER_COUNTERSIGNED`** |

**AuthClaims 1.1 fixture-owner gate:** **CLOSED** (domain-owner fixture approval only).

This is **domain-owner fixture approval**, **not** Codex certification, **not** Phase 14 complete, **not** merge authority, **not** Lisa mutation / deployment / canary / production approval. Phase 1 overall remains **blocked** on the Platform authentication path. Phases 7–12 remain **unstarted**.

Request packet (satisfied): `COUNTERSIGN-REQUEST-WAVE8-AUTHCLAIMS-1.1.md`

## Domain-owner attestation records

### LiNKbrain

| Field                  | Value                                                                              |
| ---------------------- | ---------------------------------------------------------------------------------- |
| Verdict                | `OWNER_COUNTERSIGNED`                                                              |
| Inspected OpenClaw tip | `005c9454f1bd3f7427936704131ffe5faa95ef0f`                                         |
| Aggregate              | `4493f71432ef56f9fc272ff4c208b8901242c2bd83e138f53d6f0259b4f4811b` (75 JSON)       |
| Owner handoff          | `LiNKbrain/docs/handoffs/OPENCLAW-BRAIN-FIXTURE-OWNER-COUNTERSIGNED-2026-07-30.md` |
| Owner handoff commit   | `cfa8e931952fb12326ae53f43e73f77b9b0b09ea`                                         |

### LiNKskills

| Field                  | Value                                                                                                    |
| ---------------------- | -------------------------------------------------------------------------------------------------------- |
| Verdict                | `OWNER_COUNTERSIGNED`                                                                                    |
| Inspected OpenClaw tip | `005c9454f1bd3f7427936704131ffe5faa95ef0f`                                                               |
| Aggregate              | `203163711b5db17b8a07d3956e41596384cbd08f0c110bd9f21abfc5c7e5e19a` (71 JSON)                             |
| Owner handoff          | `LiNKskills/docs/handoffs/2026-07-30-linkskills-openclaw-fixtures-OWNER-COUNTERSIGNED-authclaims-1.1.md` |
| Owner handoff commit   | `2fb6f8d55f42c2350a6c528f32ff35023f544adc`                                                               |

## Residual non-blocking notes (Brain; fixture bytes unchanged)

Recorded from LiNKbrain owner handoff — **not** countersign blockers; OpenClaw does **not** change fixture JSON bytes in this closeout:

1. **`itemId` vs `id`:** private response stubs (`brain_private_load.response.json` / private search) still use `result.itemId` while current Brain `PrivateLoadResult` / `PrivateSearchResult` use `id`. Request path correctly uses `id`. Future stub refresh only.
2. **`authority: "draft"`:** search stub uses a value outside Brain `SearchResultSchema` authority enum (`canonical` / `team_memory` / `private` / `handoff`). Sanitized stub drift; privacy boundary still holds.

## Aggregate method

```text
find <fixtures-root> -type f -name '*.json' | sed 's|^\./||' | sort \
  | while read f; do shasum -a 256 "$f" | awk -v f="$f" '{print $1 "  " f}'; done \
  | shasum -a 256
```

## Contract pins (wave 7/8)

| Domain       | Key                                                                                                              |
| ------------ | ---------------------------------------------------------------------------------------------------------------- |
| LiNKplatform | `platform.auth-claims/1.1.0` / package `0.2.2` @ Platform source HEAD `6861a376aae5fa4e12c1b68a808d7b04e7bbfb5b` |
| LiNKbrain    | `BRAIN_CONTRACT_VERSION=1.0.0` (Brain contract; AuthClaims fixtures are 1.1.0)                                   |
| LiNKskills   | `skills.api.v0.1`                                                                                                |

## Historical countersignatures (AuthClaims 1.0.0 — superseded for positive path)

Prior Brain `OWNER_COUNTERSIGNED` of `275c1fb7…9a1d` at tip `429a7818…` (`d43552742b6a…`).
Prior Skills `OWNER_COUNTERSIGNED` of `8586d89a…ec96` at tip `429a7818…` (`41ab5a3d31a7…`).

These remain on record as **historical only**. They do **not** substitute for the AuthClaims **1.1** closeout above.

## Gate closeout note

AuthClaims **1.1** Brain + Skills owner countersigns at tip `005c9454…` **close** the fixture-owner gate for the current aggregates. This does **not** close Phase 1 overall (Platform auth-path remains open). Do not treat this closeout as Codex certification, merge readiness, Lisa live enablement, deployment, canary, or production approval.
