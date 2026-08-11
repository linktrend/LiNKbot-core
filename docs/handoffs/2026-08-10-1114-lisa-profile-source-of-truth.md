# Agent Session Handoff

## Session Metadata

| Field           | Value                                                                                                          |
| --------------- | -------------------------------------------------------------------------------------------------------------- |
| Agent identity  | Codex Desktop Agent                                                                                            |
| Session ID      | codex-local-mac-mini-desktop-workspace-feature-20260810-1114                                                   |
| Objective       | Establish a non-secret repository source bundle contract for VPS Lisa and retire the unused David placeholder. |
| Scope           | `linkbots/` only, plus this session record and handoff.                                                        |
| Started         | 2026-08-10 11:14 Asia/Taipei                                                                                   |
| Ended           | 2026-08-10 11:14 Asia/Taipei                                                                                   |
| Starting branch | `dev/minicodex/WP-0-lisa-profile-source-of-truth`                                                              |
| Ending branch   | `dev/minicodex/WP-0-lisa-profile-source-of-truth`                                                              |
| Starting commit | `a5d67da87bbab9edfbc3465c5f505da26d4dbc29`                                                                     |
| Ending status   | committed locally as `273ee9bcacc` (not pushed)                                                                |

## Summary

The repository now describes `linkbots/lisa` as a reviewed, non-secret deployment bundle rather than a raw Mac-mini workshop copy. The exact unused David placeholder was removed. No live profile, OpenClaw service, secret payload, runtime state, or schedule was changed.

## Files Modified

- `linkbots/README.md`
- `linkbots/lisa/README.md`

## Files Created

- `linkbots/lisa/PROFILE_BUNDLE_MANIFEST.json`
- `docs/agent-sessions/completed/codex-local-mac-mini-desktop-workspace-feature-20260810-1114.md`
- `docs/handoffs/2026-08-10-1114-lisa-profile-source-of-truth.md`

## Files Deleted

- `linkbots/david/README.md`

## Tests and Verification

- Parsed `PROFILE_BUNDLE_MANIFEST.json` with `python3 -m json.tool`.
- Ran `git diff --check`.
- Confirmed the comparison receipt intentionally records only two disposable scratch files absent from VPS and expected mutable-state differences.

## Risks and Unknowns

- Git does not protect mutable Lisa runtime state. Encrypted off-VPS backup and a restore drill remain required.
- Existing `Personality files/` workshop content is retained but must be redacted and reviewed before any current live content is promoted into the deployable definition bundle.

## Exact Next Action

Review and land this isolated documentation change, then create and test encrypted off-VPS backup for the selected VPS Lisa state.
