# Fixture owner sign-off process

**Recorded (original):** 2026-07-28 07:44 Asia/Taipei
**Wave 8 AuthClaims 1.1.0 refresh:** 2026-07-29 Asia/Taipei — **fixture-owner gate RE-OPENED**
**Branch:** `issue/ocp-openclawdevelopmentplan01`
**Plan SHA-256:** `17203ee586a3fb2b1281bcddd8b17ae350075ebce537689f3c4bfcbbd14914f7`

## Honest status (wave 8)

- Brain fixtures: **`PENDING_OWNER_COUNTERSIGN`** — aggregate `4493f71432ef56f9fc272ff4c208b8901242c2bd83e138f53d6f0259b4f4811b` (75 JSON)
- Skills fixtures: **`PENDING_OWNER_COUNTERSIGN`** — aggregate `203163711b5db17b8a07d3956e41596384cbd08f0c110bd9f21abfc5c7e5e19a` (71 JSON)
- Prior CLOSED countersign at tip `429a7818…` (aggregates `275c1fb7…` / `8586d89a…`) is **historical only** — AuthClaims 1.0.0 bytes superseded for positive path
- Request packet: `COUNTERSIGN-REQUEST-WAVE8-AUTHCLAIMS-1.1.md`
- **Not** Codex Phase 14; **not** merge; **not** Lisa live

## Aggregate method

```text
find <fixtures-root> -type f -name '*.json' | sed 's|^\./||' | sort \
  | while read f; do shasum -a 256 "$f" | awk -v f="$f" '{print $1 "  " f}'; done \
  | shasum -a 256
```

| Package | Root | JSON files | Aggregate SHA-256 |
| ------- | ---- | ---------- | ----------------- |
| Brain | `extensions/linkbrain/fixtures` | 75 | `4493f71432ef56f9fc272ff4c208b8901242c2bd83e138f53d6f0259b4f4811b` |
| Skills | `extensions/linkskills/fixtures` | 71 | `203163711b5db17b8a07d3956e41596384cbd08f0c110bd9f21abfc5c7e5e19a` |

## Contract pins (wave 7/8)

| Domain | Key |
| ------ | --- |
| LiNKplatform | `platform.auth-claims/1.1.0` / package `0.2.2` @ Platform source HEAD `6861a376aae5fa4e12c1b68a808d7b04e7bbfb5b` |
| LiNKbrain | `BRAIN_CONTRACT_VERSION=1.0.0` (Brain contract; AuthClaims fixtures are 1.1.0) |
| LiNKskills | `skills.api.v0.1` |

## Historical countersignatures (superseded for positive AuthClaims path)

Prior Brain `OWNER_COUNTERSIGNED` of `275c1fb7…9a1d` at tip `429a7818…` (`d43552742b6a…`).
Prior Skills `OWNER_COUNTERSIGNED` of `8586d89a…ec96` at tip `429a7818…` (`41ab5a3d31a7…`).

These remain on record as historical. Wave 8 requires **fresh** owner countersigns of the new aggregates against the exact OpenClaw tip after push.

## Gate closeout note

Wave 8 does **not** close the fixture-owner gate. Owners must sign the new aggregates before the gate can be marked CLOSED again.
