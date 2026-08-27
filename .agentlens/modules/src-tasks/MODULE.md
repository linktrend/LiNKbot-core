# Module: src/tasks

[← Back to INDEX](../../INDEX.md)

**Type:** implicit | **Files:** 74

## Files

| File | Lines | Large |
| ---- | ----- | ----- |
| `src/tasks/agent-harness-task-runtime-scope.ts` | 54 |  |
| `src/tasks/background-exec-task-contract.ts` | 6 |  |
| `src/tasks/codex-native-subagent-task.ts` | 5 |  |
| `src/tasks/cron-history-retention.ts` | 63 |  |
| `src/tasks/cron-run-continuation-cleanup.test.ts` | 118 |  |
| `src/tasks/cron-run-continuation-cleanup.ts` | 81 |  |
| `src/tasks/detached-task-runtime-contract.ts` | 179 |  |
| `src/tasks/detached-task-runtime-state.ts` | 52 |  |
| `src/tasks/detached-task-runtime.test-support.ts` | 13 |  |
| `src/tasks/detached-task-runtime.test.ts` | 502 | 📊 |
| `src/tasks/detached-task-runtime.ts` | 186 |  |
| `src/tasks/generated-media-task-activity.test-support.ts` | 19 |  |
| `src/tasks/generated-media-task-activity.ts` | 71 |  |
| `src/tasks/import-boundary.test-helpers.ts` | 45 |  |
| `src/tasks/native-subagent-task.ts` | 38 |  |
| `src/tasks/runtime-internal.ts` | 48 |  |
| `src/tasks/task-boundaries.test.ts` | 101 |  |
| `src/tasks/task-cancellation-state.ts` | 21 |  |
| `src/tasks/task-completion-contract.test.ts` | 13 |  |
| `src/tasks/task-completion-contract.ts` | 95 |  |
| `src/tasks/task-domain-views.test.ts` | 211 |  |
| `src/tasks/task-domain-views.ts` | 97 |  |
| `src/tasks/task-executor-policy.test.ts` | 266 |  |
| `src/tasks/task-executor-policy.ts` | 166 |  |
| `src/tasks/task-executor.test.ts` | 1134 | 📊 |
| `src/tasks/task-executor.ts` | 629 | 📊 |
| `src/tasks/task-flow-owner-access.test.ts` | 114 |  |
| `src/tasks/task-flow-owner-access.ts` | 51 |  |
| `src/tasks/task-flow-registry.audit.test.ts` | 319 |  |
| `src/tasks/task-flow-registry.audit.ts` | 287 |  |
| `src/tasks/task-flow-registry.maintenance.test.ts` | 333 |  |
| `src/tasks/task-flow-registry.maintenance.ts` | 187 |  |
| `src/tasks/task-flow-registry.store.sqlite.ts` | 261 |  |
| `src/tasks/task-flow-registry.store.test-support.ts` | 35 |  |
| `src/tasks/task-flow-registry.store.test.ts` | 335 |  |
| `src/tasks/task-flow-registry.store.ts` | 82 |  |
| `src/tasks/task-flow-registry.store.types.ts` | 7 |  |
| `src/tasks/task-flow-registry.test-support.ts` | 51 |  |
| `src/tasks/task-flow-registry.test.ts` | 586 | 📊 |
| `src/tasks/task-flow-registry.ts` | 831 | 📊 |
| `src/tasks/task-flow-registry.types.ts` | 73 |  |
| `src/tasks/task-flow-runtime-internal.ts` | 20 |  |
| `src/tasks/task-owner-access.test.ts` | 156 |  |
| `src/tasks/task-owner-access.ts` | 133 |  |
| `src/tasks/task-registry-control.runtime.ts` | 5 |  |
| `src/tasks/task-registry-control.types.ts` | 40 |  |
| `src/tasks/task-registry-delivery-runtime.ts` | 2 |  |
| `src/tasks/task-registry-records.ts` | 62 |  |
| `src/tasks/task-registry.audit.shared.ts` | 66 |  |
| `src/tasks/task-registry.audit.test.ts` | 218 |  |
| `src/tasks/task-registry.audit.ts` | 252 |  |
| `src/tasks/task-registry.maintenance.issue-60299.test.ts` | 996 | 📊 |
| `src/tasks/task-registry.maintenance.ts` | 1177 | 📊 |
| `src/tasks/task-registry.process-state.test.ts` | 42 |  |
| `src/tasks/task-registry.process-state.ts` | 32 |  |
| `src/tasks/task-registry.reconcile.ts` | 5 |  |
| `src/tasks/task-registry.sqlite.shared.ts` | 32 |  |
| `src/tasks/task-registry.store.sqlite.ts` | 467 |  |
| `src/tasks/task-registry.store.test.ts` | 1470 | 📊 |
| `src/tasks/task-registry.store.ts` | 96 |  |
| `src/tasks/task-registry.store.types.ts` | 8 |  |
| `src/tasks/task-registry.summary.ts` | 58 |  |
| `src/tasks/task-registry.test-support.ts` | 57 |  |
| `src/tasks/task-registry.test.ts` | 5589 | 📊 |
| `src/tasks/task-registry.ts` | 2807 | 📊 |
| `src/tasks/task-registry.types.ts` | 160 |  |
| `src/tasks/task-restart-blocker.ts` | 25 |  |
| `src/tasks/task-retention.test.ts` | 84 |  |
| `src/tasks/task-retention.ts` | 38 |  |
| `src/tasks/task-runtime.test-helpers.ts` | 19 |  |
| `src/tasks/task-status-access.test.ts` | 130 |  |
| `src/tasks/task-status-access.ts` | 120 |  |
| `src/tasks/task-status.test.ts` | 147 |  |
| `src/tasks/task-status.ts` | 195 |  |

## Documentation

- [outline.md](outline.md) - Symbol maps for large files
- [imports.md](imports.md) - Dependencies

---

| High 🔴 | Medium 🟡 | Low 🟢 |
| 1 | 0 | 0 |

## 🔴 High Priority

### `INVARIANT` (src/tasks/cron-run-continuation-cleanup.ts:26)

> deleting its exact alias does not discard the stable session.
