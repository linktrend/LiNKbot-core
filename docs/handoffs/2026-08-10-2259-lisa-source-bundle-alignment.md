# Agent Session Handoff

## Session Metadata

| Field           | Value                                                                                                                 |
| --------------- | --------------------------------------------------------------------------------------------------------------------- |
| Agent identity  | Codex Desktop Agent                                                                                                   |
| Session ID      | `codex-local-mac-mini-desktop-workspace-lisa-20260810-2245`                                                           |
| Objective       | Establish `linkbots/lisa` as the deterministic, non-secret recovery source for current VPS Lisa's durable definition. |
| Scope           | `linkbots/lisa/**` plus this session record and handoff; metadata/hash-only VPS comparison.                           |
| Started         | 2026-08-10 22:45 Asia/Taipei                                                                                          |
| Ended           | 2026-08-10 23:19 Asia/Taipei                                                                                          |
| Branch          | `dev/minicodex/WP-0-lisa-source-bundle-alignment`                                                                     |
| Starting commit | `6b8245a4eb8fa6551aad6cbe6898f6190752b1c3`                                                                            |
| Ending status   | Ready for review through a pull request to `development`; not merged or deployed.                                     |

## Summary

The Lisa bundle now contains only the current durable non-secret definition and intentional assets. Its manifest and pinned immutable comparison receipt are authoritative and machine-verifiable. Private or changing memory, user material, runtime configuration, sessions, databases, logs, caches, and credentials are explicitly excluded from Git and remain governed by encrypted backup or Google Secret Manager. The downstream stage workspace package now accepts only canonical stable profile sources and contains no mutable runtime seeds. No VPS file, service, schedule, configuration, or secret was changed.

## Alignment Receipt

- Required stable definition: 22 files.
- Live byte-exact matches: 21.
- Live LF-normalized-equivalent matches: 1 (`tools/lisa-safe.md`; repository uses LF and live uses CRLF).
- Required files missing from live: 0.
- Required semantic/hash mismatches: 0.
- Intentional assets: 2; deployed PNG exact, editable JPEG source-only and not deployment-required.
- Removed from the Git definition tree: 29 paths classified as mutable, private, runtime, or obsolete source-only material.

## Main Changes

- Synchronized current stable Lisa identity, operating instructions, tools, skill, and personality detail from sanitized live comparison.
- Replaced the manifest with schema version 2, per-file SHA-256 values, explicit classifications/exclusions, parity results, and restore boundaries.
- Added `linkbots/lisa/validate-profile-bundle.mjs` for deterministic offline validation.
- Added a metadata-only live comparison receipt containing per-path repository and live SHA-256 metadata plus the single allowed normalized SHA-256. The manifest pins the receipt hash and the validator rejects missing, stale, self-asserted, or invalid-normalization evidence.
- Updated the stage workspace package manifest, loader, and tests to use the current HEARTBEAT hash, reject excluded profile paths, and omit all mutable/private seeds.
- Replaced stale `lisa-ops` reads of the removed workshop `openclaw.json` with assertions against the non-live routing contract and stable-bundle exclusion policy.
- Updated `linkbots/lisa/README.md` to explain the three recovery sources: Git for definition, Google Secret Manager for secrets, and encrypted off-VPS backup for mutable state.

## Validation

- Manifest validator: PASS, 22 required files, 2 assets, 24 classified definition-tree files.
- Validator negative tests: PASS, 4/4 (missing receipt, stale receipt, manifest-only parity, and invalid normalization fail closed).
- Stage workspace package and Lisa ops focused suites: PASS, 63/63 with the repository TypeScript resolver.
- The bare `--experimental-strip-types` package runner remains unsuitable because an existing `src/infra/kysely-sync.js` specifier needs the repository resolver; it failed before test discovery. The documented `tsx` plus resolver lane passed.
- Manifest JSON parse: PASS.
- Git whitespace validation: PASS.
- Bounded secret-shape scan of current added/modified non-secret files: PASS.

## Rollback

Revert the delivery commit on the feature branch or its eventual merge commit. Because this packet made no VPS or runtime changes, rollback requires no service restart, secret rotation, schedule change, or data restoration.

## Exact Next Action

Review the pull request to `development`. Promotion and deployment are intentionally not part of this packet; the current VPS is already the source used for this alignment.
