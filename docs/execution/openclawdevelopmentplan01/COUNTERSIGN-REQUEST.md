# Countersign request — OpenClaw fixture packages (Phase 1)

**Date:** 2026-07-28 11:45 Asia/Taipei
**Branch:** `issue/ocp-openclawdevelopmentplan01`
**For:** Principal → route to LiNKbrain owner (re-countersign) and LiNKskills owner (lightweight tip reaffirmation)
**Full process:** `FIXTURE-OWNER-SIGNOFF.md`

## Why this exists

Brain owner returned **`COUNTERSIGN_DENIED`** against tip `0b19e43…` / aggregate
`d539debc…45fb` (`LiNKbrain/docs/handoffs/OPENCLAW-BRAIN-FIXTURE-COUNTERSIGN-2026-07-28.md`).
OpenClaw applied the required Brain fixture corrections (rotated auth, `wrong_service`,
request fields, `BRAIN_CONTRACT_VERSION=1.0.0`, Gateway `BrainErrorCode` +
`ErrorEnvelope`). Skills fixtures were **byte-preserved**.

**OpenClaw does not mark Brain `OWNER_COUNTERSIGNED`.** Phase 1 remains incomplete
until Brain re-countersigns the corrected aggregate and Skills reaffirms against the
new OpenClaw tip.

## Aggregates to attest

| Owner      | Package                          | Aggregate SHA-256                                                  | Status                                                                                                                                 |
| ---------- | -------------------------------- | ------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------- |
| LiNKbrain  | `extensions/linkbrain/fixtures`  | `275c1fb747cf1042516794a1fdd164b88b7450a02cef2a58440bcb221f449a1d` | **Re-request** after denial corrections (72 JSON)                                                                                      |
| LiNKskills | `extensions/linkskills/fixtures` | `8586d89a4a160987ace45ed4392b78c8a66391940e81eed6bdc098f49404ec96` | Previously `OWNER_COUNTERSIGNED` for unchanged tree at tip `0b19e43…`; **awaiting lightweight reaffirmation** against new OpenClaw tip |

Prior denied Brain aggregate (do not re-attest): `d539debc7b9d7347c109e7d462fc27a48c28322f0d3d5b85d57f602e843d45fb`

Skills owner handoff (prior tip): `LiNKskills/docs/handoffs/2026-07-28-linkskills-openclaw-fixtures-OWNER-COUNTERSIGNED.md` (commit `fe9f28caec9eca571c522a5fc3c5059611397ac8`)

## Corrected sibling HEADs pinned

| Domain       | Branch                                      | HEAD                                       |
| ------------ | ------------------------------------------- | ------------------------------------------ |
| LiNKplatform | `issue/LP-01-linkplatformdevelopmentplan01` | `e845ac17dffac52a501603ad2fafd1b53fef195d` |
| LiNKbrain    | `issue/13-developmentplan01`                | `a3cff6e0f04ac968c32beacb7bdb1b81a4d77d3f` |
| LiNKskills   | `issue/21-linkskillsdevelopmentplan01`      | `f16103f23a716d0edeb08a1e82e38608ebd563ea` |

## What each owner should do

1. Pull or review OpenClaw branch `issue/ocp-openclawdevelopmentplan01` at the **new tip** after this correction lands.
2. Recompute the fixture aggregate (method in `FIXTURE-OWNER-SIGNOFF.md`) and confirm match.
3. Brain: confirm denial items closed — rotated reject, `wrong_service`, frozen request fields, `1.0.0`, ErrorEnvelope / BrainErrorCode.
4. Skills: confirm Skills JSON tree is byte-identical to previously countersigned aggregate `8586d89a…ec96`, then lightly reaffirm against the new tip (no fixture rewrite expected).
5. Fill the matching countersignature block in `FIXTURE-OWNER-SIGNOFF.md` (or publish a sibling handoff citing the exact aggregate + tip).

## Related

- `BRAIN-TOOL-NAME-DECISION-PACKET.md` — corrected Brain implements 17 frozen tools
- `PHASE-1-CONTRACT-CONSUMPTION.md` — pin record
- `contracts/{platform,brain,skills}/PIN.json`
- Denial: `LiNKbrain/docs/handoffs/OPENCLAW-BRAIN-FIXTURE-COUNTERSIGN-2026-07-28.md`
