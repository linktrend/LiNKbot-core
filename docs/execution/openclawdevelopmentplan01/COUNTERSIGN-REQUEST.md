# Countersign request — OpenClaw fixture packages (Phase 1)

**Date:** 2026-07-28 09:52 Asia/Taipei  
**Branch:** `issue/ocp-openclawdevelopmentplan01`  
**For:** Principal → route to LiNKbrain owner and LiNKskills owner  
**Full process:** `FIXTURE-OWNER-SIGNOFF.md`

## Why this exists

OpenClaw refreshed consumer pins against latest corrected sibling HEADs
(correction wave 2b). Live Brain/Skills owner signatures were **not** obtained
in-session. Fixture status remains **`AWAITING_OWNER_COUNTERSIGN`**.

**This is NOT a passed Phase 1 gate.** Do not treat contract pins or draft
fixtures as domain-owner approved until both countersignature blocks are filled.

## Aggregates to attest

| Owner      | Package                          | Aggregate SHA-256                                                  |
| ---------- | -------------------------------- | ------------------------------------------------------------------ |
| LiNKbrain  | `extensions/linkbrain/fixtures`  | `d539debc7b9d7347c109e7d462fc27a48c28322f0d3d5b85d57f602e843d45fb` |
| LiNKskills | `extensions/linkskills/fixtures` | `8586d89a4a160987ace45ed4392b78c8a66391940e81eed6bdc098f49404ec96` |

## Corrected sibling HEADs pinned

| Domain       | Branch                                      | HEAD                                       |
| ------------ | ------------------------------------------- | ------------------------------------------ |
| LiNKplatform | `issue/LP-01-linkplatformdevelopmentplan01` | `e845ac17dffac52a501603ad2fafd1b53fef195d` |
| LiNKbrain    | `issue/13-developmentplan01`                | `a3cff6e0f04ac968c32beacb7bdb1b81a4d77d3f` |
| LiNKskills   | `issue/21-linkskillsdevelopmentplan01`      | `f16103f23a716d0edeb08a1e82e38608ebd563ea` |

## What each owner should do

1. Pull or review OpenClaw branch `issue/ocp-openclawdevelopmentplan01`.
2. Recompute the fixture aggregate (method in `FIXTURE-OWNER-SIGNOFF.md`) and confirm match.
3. Brain: confirm §9.1 / `FROZEN_MCP_TOOL_NAMES` (17) alignment + AuthClaims fixtures.
4. Skills: confirm §9.2 tools + `platform.auth-claims/1.0.0` camelCase claims + certification-path correction awareness.
5. Fill the matching countersignature block in `FIXTURE-OWNER-SIGNOFF.md` (or publish a sibling handoff citing the exact aggregate).

## Related

- `BRAIN-TOOL-NAME-DECISION-PACKET.md` — corrected Brain implements 17 frozen tools
- `PHASE-1-CONTRACT-CONSUMPTION.md` — pin record
- `contracts/{platform,brain,skills}/PIN.json`
