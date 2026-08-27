# Issue 209 IDE 2.5.1 adoption handoff — 2026-08-22

The governed consumer worktree started clean at `d8d78732dd5d95844dc371adc2a6390ac4423044` / `16c7df67008dcdaeab39df841ab59afc023eb7c4`. Canonical IDE Development provider #405 is protected-integrated at `9d4ad8a6725479dd05124be1a0275fda43df6ff6` / `0fa2ab909080b517edcb1d8ffef74ea733ab1780` (Phase PR #405 head `f13cb81543d1a0b39e3351f6f47b14c62cde10d3`).

The official installer was run with the digest-bound v10 resolution. Dry-run planned 438 actions (88 mutating) with zero conflicts/drift. The transaction completed successfully; installed-state SHA-256 is `fc657c7fa762190ede1e337cea6c63e7275d80b9014e0967cc647f63f98883c2`. Installed verification reports 438 actions, zero mutating actions, conflicts, or drift. Change-scoped secret scan passed with zero findings against baseline `455b8c6402a4a6cffc94554addeec7bd07447b67` / `268e627f99919c1d9f86b7eb00bd91bdbb7a545e`, config digest `sha256:3f145ca2db5b45101a36c4d1a81345452d88ec35759d03631a5f8adbea1fb959`.

The provider correction is bounded to the exact generated `.ide-development/MANIFEST.json` transaction destination and its declared closure contract. Unrelated tracked/untracked paths, symlinks, migration edits, and credential findings remain fail-closed. Implementer, independent Terra, Full Suite, and rollback evidence are recorded in `docs/execution/openclaw-prime-lisa/managed-upgrade-resolution-v10.json`.

Next action: stage only the installer-managed paths plus these two receipts, run focused consumer checks and change-scoped scan, then submit one normal OpenClaw Phase PR for protected integration. No product packets, Cursor dispatch, upstream, runtime, VPS, staging, or promotion action is authorized.
