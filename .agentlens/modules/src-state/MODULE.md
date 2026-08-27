# Module: src/state

[← Back to INDEX](../../INDEX.md)

**Type:** implicit | **Files:** 73

## Files

| File | Lines | Large |
| ---- | ----- | ----- |
| `src/state/lisa-compliance-state-schema.ts` | 52 |  |
| `src/state/lisa-compliance-state-store.test.ts` | 244 |  |
| `src/state/lisa-compliance-state-store.ts` | 431 |  |
| `src/state/lisa-job-state-schema.ts` | 685 | 📊 |
| `src/state/lisa-job-state-store.test.ts` | 546 | 📊 |
| `src/state/lisa-job-state-store.ts` | 700 | 📊 |
| `src/state/lisa-principal-task-helpers.ts` | 347 |  |
| `src/state/lisa-principal-task-schema.ts` | 104 |  |
| `src/state/lisa-principal-task-store.test.ts` | 312 |  |
| `src/state/lisa-principal-task-store.ts` | 255 |  |
| `src/state/lisa-principal-task-types.ts` | 220 |  |
| `src/state/lisa-principal-task-writes.ts` | 524 | 📊 |
| `src/state/lisa-stage-ops-schema.ts` | 85 |  |
| `src/state/lisa-stage-ops-store.test.ts` | 556 | 📊 |
| `src/state/lisa-stage-ops-store.ts` | 909 | 📊 |
| `src/state/onboarding-recommendations.test.ts` | 230 |  |
| `src/state/onboarding-recommendations.ts` | 414 |  |
| `src/state/openclaw-agent-board-schema.ts` | 21 |  |
| `src/state/openclaw-agent-db-contract.ts` | 44 |  |
| `src/state/openclaw-agent-db-maintenance.ts` | 116 |  |
| `src/state/openclaw-agent-db-permissions.ts` | 39 |  |
| `src/state/openclaw-agent-db-readonly.ts` | 65 |  |
| `src/state/openclaw-agent-db-registry.ts` | 181 |  |
| `src/state/openclaw-agent-db-schema-helpers.ts` | 69 |  |
| `src/state/openclaw-agent-db-schema.ts` | 590 | 📊 |
| `src/state/openclaw-agent-db-session-migrations.test.ts` | 389 |  |
| `src/state/openclaw-agent-db-session-migrations.ts` | 300 |  |
| `src/state/openclaw-agent-db-session-provenance.ts` | 104 |  |
| `src/state/openclaw-agent-db.cache-eviction.test.ts` | 180 |  |
| `src/state/openclaw-agent-db.generated.d.ts` | 359 |  |
| `src/state/openclaw-agent-db.paths.ts` | 32 |  |
| `src/state/openclaw-agent-db.permissions.test.ts` | 72 |  |
| `src/state/openclaw-agent-db.test.ts` | 2409 | 📊 |
| `src/state/openclaw-agent-db.ts` | 460 |  |
| `src/state/openclaw-agent-schema.generated.ts` | 469 |  |
| `src/state/openclaw-database-maintenance.test.ts` | 334 |  |
| `src/state/openclaw-database-preflight.test.ts` | 172 |  |
| `src/state/openclaw-database-preflight.ts` | 173 |  |
| `src/state/openclaw-database-verify.impl.ts` | 193 |  |
| `src/state/openclaw-database-verify.test.ts` | 333 |  |
| `src/state/openclaw-database-verify.ts` | 63 |  |
| `src/state/openclaw-database-verify.worker.ts` | 59 |  |
| `src/state/openclaw-quarantine-store.ts` | 206 |  |
| `src/state/openclaw-schema-versions.ts` | 33 |  |
| `src/state/openclaw-state-db-audit-migration.ts` | 342 |  |
| `src/state/openclaw-state-db-contract.ts` | 32 |  |
| `src/state/openclaw-state-db-legacy-backfills.ts` | 549 | 📊 |
| `src/state/openclaw-state-db-maintenance.ts` | 121 |  |
| `src/state/openclaw-state-db-operator-approval-migration.test.ts` | 164 |  |
| `src/state/openclaw-state-db-operator-approval-migration.ts` | 188 |  |
| `src/state/openclaw-state-db-permissions.ts` | 54 |  |
| `src/state/openclaw-state-db-readonly.ts` | 56 |  |
| `src/state/openclaw-state-db-restart-handoff-migration.test.ts` | 137 |  |
| `src/state/openclaw-state-db-schema-additive.ts` | 321 |  |
| `src/state/openclaw-state-db-schema-helpers.ts` | 35 |  |
| `src/state/openclaw-state-db-schema-repair.ts` | 178 |  |
| `src/state/openclaw-state-db-session-watch-migration.ts` | 133 |  |
| `src/state/openclaw-state-db-startup-checkpoint.ts` | 80 |  |
| `src/state/openclaw-state-db.generated.d.ts` | 1410 | 📊 |
| `src/state/openclaw-state-db.paths.ts` | 41 |  |
| `src/state/openclaw-state-db.permissions.test.ts` | 162 |  |
| `src/state/openclaw-state-db.test.ts` | 3579 | 📊 |
| `src/state/openclaw-state-db.ts` | 445 |  |
| `src/state/openclaw-state-lease.test.ts` | 51 |  |
| `src/state/openclaw-state-lease.ts` | 593 | 📊 |
| `src/state/openclaw-state-schema.generated.ts` | 1911 | 📊 |
| `src/state/openclaw-state-snapshot-sanitizer.ts` | 31 |  |
| `src/state/session-watch-cursor-provenance.ts` | 7 |  |
| `src/state/sqlite-query-plan.test.ts` | 333 |  |
| `src/state/sqlite-schema-shape.test-support.ts` | 179 |  |
| `src/state/user-profiles-schema.ts` | 23 |  |
| `src/state/user-profiles.test.ts` | 220 |  |
| `src/state/user-profiles.ts` | 490 |  |

## Documentation

- [outline.md](outline.md) - Symbol maps for large files
- [imports.md](imports.md) - Dependencies

---

| High 🔴 | Medium 🟡 | Low 🟢 |
| 1 | 0 | 0 |

## 🔴 High Priority

### `SAFETY` (src/state/openclaw-agent-db.ts:258)

> net for processes that end without an orderly close: agent DBs have
