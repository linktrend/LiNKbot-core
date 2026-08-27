# Module: src/config/sessions

[← Back to INDEX](../../INDEX.md)

**Type:** implicit | **Files:** 184

## Files

| File | Lines | Large |
| ---- | ----- | ----- |
| `src/config/sessions/ambient-transcript-watermark.test.ts` | 124 |  |
| `src/config/sessions/ambient-transcript-watermark.ts` | 114 |  |
| `src/config/sessions/archive-compression.test.ts` | 91 |  |
| `src/config/sessions/archive-compression.ts` | 164 |  |
| `src/config/sessions/artifacts.test.ts` | 145 |  |
| `src/config/sessions/artifacts.ts` | 189 |  |
| `src/config/sessions/cache-fields.test.ts` | 69 |  |
| `src/config/sessions/cleanup-service.agent-purge.test.ts` | 52 |  |
| `src/config/sessions/cleanup-service.ts` | 714 | 📊 |
| `src/config/sessions/cli-session-binding.ts` | 113 |  |
| `src/config/sessions/combined-store-gateway.ts` | 149 |  |
| `src/config/sessions/compaction-session-file.ts` | 36 |  |
| `src/config/sessions/conversation-delivery-store.test.ts` | 248 |  |
| `src/config/sessions/conversation-delivery-store.ts` | 422 |  |
| `src/config/sessions/conversation-identity.test.ts` | 287 |  |
| `src/config/sessions/conversation-identity.ts` | 249 |  |
| `src/config/sessions/conversation-registry.test.ts` | 236 |  |
| `src/config/sessions/conversation-registry.ts` | 216 |  |
| `src/config/sessions/delivery-info.test.ts` | 672 | 📊 |
| `src/config/sessions/delivery-info.ts` | 254 |  |
| `src/config/sessions/disk-budget.test.ts` | 992 | 📊 |
| `src/config/sessions/disk-budget.ts` | 970 | 📊 |
| `src/config/sessions/entry-freshness.test.ts` | 268 |  |
| `src/config/sessions/entry-freshness.ts` | 110 |  |
| `src/config/sessions/explicit-session-key-normalization.test.ts` | 75 |  |
| `src/config/sessions/explicit-session-key-normalization.ts` | 52 |  |
| `src/config/sessions/file-range.ts` | 19 |  |
| `src/config/sessions/generated-transcript-session-id.ts` | 29 |  |
| `src/config/sessions/goals.test.ts` | 506 | 📊 |
| `src/config/sessions/goals.ts` | 358 |  |
| `src/config/sessions/group.test.ts` | 81 |  |
| `src/config/sessions/group.ts` | 209 |  |
| `src/config/sessions/inbound.runtime.ts` | 3 |  |
| `src/config/sessions/internal-session-key.ts` | 28 |  |
| `src/config/sessions/legacy-store-readonly.ts` | 28 |  |
| `src/config/sessions/lifecycle.test.ts` | 179 |  |
| `src/config/sessions/lifecycle.ts` | 286 |  |
| `src/config/sessions/main-session-recovery.types.ts` | 20 |  |
| `src/config/sessions/main-session.runtime.ts` | 8 |  |
| `src/config/sessions/main-session.ts` | 105 |  |
| `src/config/sessions/metadata.ts` | 335 |  |
| `src/config/sessions/model-override-provenance.test.ts` | 52 |  |
| `src/config/sessions/model-override-provenance.ts` | 57 |  |
| `src/config/sessions/origin-channel-switch.test.ts` | 292 |  |
| `src/config/sessions/paths.sqlite-marker.test.ts` | 76 |  |
| `src/config/sessions/paths.test.ts` | 65 |  |
| `src/config/sessions/paths.ts` | 368 |  |
| `src/config/sessions/plugin-host-cleanup.ts` | 241 |  |
| `src/config/sessions/reset-policy.test.ts` | 185 |  |
| `src/config/sessions/reset-policy.ts` | 156 |  |
| `src/config/sessions/reset-preserved-selection.ts` | 59 |  |
| `src/config/sessions/reset.test.ts` | 26 |  |
| `src/config/sessions/reset.ts` | 84 |  |
| `src/config/sessions/restart-recovery-receipt.test.ts` | 135 |  |
| `src/config/sessions/restart-recovery-receipt.ts` | 192 |  |
| `src/config/sessions/restart-recovery-state.ts` | 515 | 📊 |
| `src/config/sessions/restart-recovery-types.ts` | 70 |  |
| `src/config/sessions/runtime-types.ts` | 32 |  |
| `src/config/sessions/session-accessor.conformance.test.ts` | 2189 | 📊 |
| `src/config/sessions/session-accessor.entry-mutation.ts` | 480 |  |
| `src/config/sessions/session-accessor.entry.ts` | 427 |  |
| `src/config/sessions/session-accessor.lifecycle.ts` | 493 |  |
| `src/config/sessions/session-accessor.message-cut.ts` | 38 |  |
| `src/config/sessions/session-accessor.parent-fork.test.ts` | 717 | 📊 |
| `src/config/sessions/session-accessor.readonly.test.ts` | 88 |  |
| `src/config/sessions/session-accessor.reply-init-concurrency.test.ts` | 744 | 📊 |
| `src/config/sessions/session-accessor.reset.ts` | 358 |  |
| `src/config/sessions/session-accessor.sqlite-active-events.test.ts` | 631 | 📊 |
| `src/config/sessions/session-accessor.sqlite-active-events.ts` | 626 | 📊 |
| `src/config/sessions/session-accessor.sqlite-archive.ts` | 199 |  |
| `src/config/sessions/session-accessor.sqlite-checkpoint.ts` | 425 |  |
| `src/config/sessions/session-accessor.sqlite-contract.ts` | 287 |  |
| `src/config/sessions/session-accessor.sqlite-conversation.ts` | 158 |  |
| `src/config/sessions/session-accessor.sqlite-delta.ts` | 228 |  |
| `src/config/sessions/session-accessor.sqlite-entry-store.ts` | 502 | 📊 |
| `src/config/sessions/session-accessor.sqlite-entry.ts` | 476 |  |
| `src/config/sessions/session-accessor.sqlite-events.ts` | 35 |  |
| `src/config/sessions/session-accessor.sqlite-history.ts` | 80 |  |
| `src/config/sessions/session-accessor.sqlite-identity.ts` | 160 |  |
| `src/config/sessions/session-accessor.sqlite-lifecycle-state.ts` | 623 | 📊 |
| `src/config/sessions/session-accessor.sqlite-lifecycle-types.ts` | 31 |  |
| `src/config/sessions/session-accessor.sqlite-lifecycle.ts` | 505 | 📊 |
| `src/config/sessions/session-accessor.sqlite-maintenance.ts` | 245 |  |
| `src/config/sessions/session-accessor.sqlite-message-cut.test.ts` | 316 |  |
| `src/config/sessions/session-accessor.sqlite-message-cut.ts` | 463 |  |
| `src/config/sessions/session-accessor.sqlite-normalize.ts` | 26 |  |
| `src/config/sessions/session-accessor.sqlite-parent-fork.ts` | 341 |  |
| `src/config/sessions/session-accessor.sqlite-parent-session.ts` | 372 |  |
| `src/config/sessions/session-accessor.sqlite-projection.ts` | 477 |  |
| `src/config/sessions/session-accessor.sqlite-provenance.ts` | 79 |  |
| `src/config/sessions/session-accessor.sqlite-read.ts` | 323 |  |
| `src/config/sessions/session-accessor.sqlite-scope.ts` | 264 |  |
| `src/config/sessions/session-accessor.sqlite-session-row.ts` | 103 |  |
| `src/config/sessions/session-accessor.sqlite-status.ts` | 57 |  |
| `src/config/sessions/session-accessor.sqlite-transcript-state.ts` | 230 |  |
| `src/config/sessions/session-accessor.sqlite-transcript-store.ts` | 514 | 📊 |
| `src/config/sessions/session-accessor.sqlite-transcript-write.ts` | 607 | 📊 |
| `src/config/sessions/session-accessor.sqlite.ts` | 70 |  |
| `src/config/sessions/session-accessor.test.ts` | 3122 | 📊 |
| `src/config/sessions/session-accessor.transcript-target.ts` | 244 |  |
| `src/config/sessions/session-accessor.transcript-turn.ts` | 361 |  |
| `src/config/sessions/session-accessor.transcript.ts` | 376 |  |
| `src/config/sessions/session-accessor.ts` | 223 |  |
| `src/config/sessions/session-accessor.types.ts` | 873 | 📊 |
| `src/config/sessions/session-entry-lineage.ts` | 25 |  |
| `src/config/sessions/session-entry-provenance.ts` | 8 |  |
| `src/config/sessions/session-entry-selection.ts` | 94 |  |
| `src/config/sessions/session-file-rotation.ts` | 57 |  |
| `src/config/sessions/session-file.ts` | 39 |  |
| `src/config/sessions/session-history-eviction.test.ts` | 352 |  |
| `src/config/sessions/session-history-eviction.ts` | 444 |  |
| `src/config/sessions/session-history.ts` | 30 |  |
| `src/config/sessions/session-key.test-helpers.ts` | 69 |  |
| `src/config/sessions/session-key.test.ts` | 90 |  |
| `src/config/sessions/session-key.ts` | 65 |  |
| `src/config/sessions/session-model-fallback.ts` | 58 |  |
| `src/config/sessions/session-registry-maintenance.test.ts` | 246 |  |
| `src/config/sessions/session-registry-maintenance.ts` | 157 |  |
| `src/config/sessions/session-snapshot-merge.test.ts` | 613 | 📊 |
| `src/config/sessions/session-snapshot-merge.ts` | 405 |  |
| `src/config/sessions/session-sqlite-target.test.ts` | 38 |  |
| `src/config/sessions/session-sqlite-target.ts` | 88 |  |
| `src/config/sessions/session-store-path.ts` | 21 |  |
| `src/config/sessions/session-transcript-index.ts` | 494 |  |
| `src/config/sessions/session-transcript-projection-rebuild.ts` | 429 |  |
| `src/config/sessions/session-transcript-reconcile.ts` | 389 |  |
| `src/config/sessions/session-transcript-reconcile.worker.ts` | 199 |  |
| `src/config/sessions/session-transcript-search.test.ts` | 311 |  |
| `src/config/sessions/session-transcript-search.ts` | 139 |  |
| `src/config/sessions/session-transcript-turn-lifecycle.types.ts` | 61 |  |
| `src/config/sessions/session-transcript-turn-state.ts` | 100 |  |
| `src/config/sessions/sessions.test.ts` | 1363 | 📊 |
| `src/config/sessions/skill-prompt-blobs.ts` | 279 |  |
| `src/config/sessions/skill-suggestions.ts` | 182 |  |
| `src/config/sessions/sqlite-marker.ts` | 42 |  |
| `src/config/sessions/startup-migration.ts` | 67 |  |
| `src/config/sessions/store-cache.ts` | 378 |  |
| `src/config/sessions/store-entry-shape.ts` | 84 |  |
| `src/config/sessions/store-entry.ts` | 233 |  |
| `src/config/sessions/store-load.ts` | 540 | 📊 |
| `src/config/sessions/store-maintenance-operations.ts` | 306 |  |
| `src/config/sessions/store-maintenance-preserve.ts` | 97 |  |
| `src/config/sessions/store-maintenance-runtime.ts` | 17 |  |
| `src/config/sessions/store-maintenance.ts` | 576 | 📊 |
| `src/config/sessions/store-migrations.ts` | 35 |  |
| `src/config/sessions/store-temp-cleanup.test.ts` | 71 |  |
| `src/config/sessions/store-temp-cleanup.ts` | 68 |  |
| `src/config/sessions/store-writer-state.ts` | 21 |  |
| `src/config/sessions/store-writer.test.ts` | 110 |  |
| `src/config/sessions/store-writer.ts` | 21 |  |
| `src/config/sessions/store.agent-harness-invariant.test.ts` | 473 |  |
| `src/config/sessions/store.pruning.integration.test.ts` | 1868 | 📊 |
| `src/config/sessions/store.pruning.test.ts` | 909 | 📊 |
| `src/config/sessions/store.session-key-normalization.test.ts` | 366 |  |
| `src/config/sessions/store.session-lifecycle-mutation.test.ts` | 908 | 📊 |
| `src/config/sessions/store.skills-stripping.test.ts` | 441 |  |
| `src/config/sessions/store.ts` | 1339 | 📊 |
| `src/config/sessions/targets.test.ts` | 633 | 📊 |
| `src/config/sessions/targets.ts` | 630 | 📊 |
| `src/config/sessions/terminal-status.ts` | 30 |  |
| `src/config/sessions/test-helpers.ts` | 28 |  |
| `src/config/sessions/thread-info.ts` | 21 |  |
| `src/config/sessions/transcript-append-redact.test.ts` | 635 | 📊 |
| `src/config/sessions/transcript-append.test-support.ts` | 617 | 📊 |
| `src/config/sessions/transcript-assistant-message.ts` | 32 |  |
| `src/config/sessions/transcript-file-resolve.ts` | 43 |  |
| `src/config/sessions/transcript-header.ts` | 25 |  |
| `src/config/sessions/transcript-jsonl.test.ts` | 60 |  |
| `src/config/sessions/transcript-jsonl.ts` | 75 |  |
| `src/config/sessions/transcript-mirror.ts` | 56 |  |
| `src/config/sessions/transcript-recent-window.ts` | 34 |  |
| `src/config/sessions/transcript-replay.ts` | 191 |  |
| `src/config/sessions/transcript-resolve.runtime.ts` | 2 |  |
| `src/config/sessions/transcript-stream.test.ts` | 221 |  |
| `src/config/sessions/transcript-stream.ts` | 148 |  |
| `src/config/sessions/transcript-tree.test.ts` | 398 |  |
| `src/config/sessions/transcript-tree.ts` | 376 |  |
| `src/config/sessions/transcript-visible-events.ts` | 39 |  |
| `src/config/sessions/transcript-write-context.ts` | 171 |  |
| `src/config/sessions/transcript.runtime.ts` | 5 |  |
| `src/config/sessions/transcript.test.ts` | 2723 | 📊 |
| `src/config/sessions/transcript.ts` | 863 | 📊 |
| `src/config/sessions/types.ts` | 826 | 📊 |
| `src/config/sessions/version.ts` | 2 |  |

## Documentation

- [outline.md](outline.md) - Symbol maps for large files
- [memory.md](memory.md) - Warnings and TODOs
- [imports.md](imports.md) - Dependencies
