# Module: src/logging

[← Back to INDEX](../../INDEX.md)

**Type:** implicit | **Files:** 78

## Files

| File | Lines | Large |
| ---- | ----- | ----- |
| `src/logging/config.test.ts` | 85 |  |
| `src/logging/config.ts` | 50 |  |
| `src/logging/console-capture.test.ts` | 252 |  |
| `src/logging/console-settings.test.ts` | 93 |  |
| `src/logging/console-timestamp.test.ts` | 79 |  |
| `src/logging/console.ts` | 321 |  |
| `src/logging/diagnostic-log-events.test.ts` | 205 |  |
| `src/logging/diagnostic-memory.test.ts` | 478 |  |
| `src/logging/diagnostic-memory.ts` | 326 |  |
| `src/logging/diagnostic-payload.ts` | 47 |  |
| `src/logging/diagnostic-phase.test.ts` | 30 |  |
| `src/logging/diagnostic-phase.ts` | 113 |  |
| `src/logging/diagnostic-run-activity.test-support.ts` | 46 |  |
| `src/logging/diagnostic-run-activity.test.ts` | 104 |  |
| `src/logging/diagnostic-run-activity.ts` | 709 | 📊 |
| `src/logging/diagnostic-runtime.ts` | 57 |  |
| `src/logging/diagnostic-session-attention.test.ts` | 186 |  |
| `src/logging/diagnostic-session-attention.ts` | 144 |  |
| `src/logging/diagnostic-session-context.test.ts` | 124 |  |
| `src/logging/diagnostic-session-context.ts` | 200 |  |
| `src/logging/diagnostic-session-recovery-coordinator.ts` | 258 |  |
| `src/logging/diagnostic-session-recovery.ts` | 164 |  |
| `src/logging/diagnostic-session-state.ts` | 228 |  |
| `src/logging/diagnostic-stability-bundle.test.ts` | 448 |  |
| `src/logging/diagnostic-stability-bundle.ts` | 1424 | 📊 |
| `src/logging/diagnostic-stability.test.ts` | 597 | 📊 |
| `src/logging/diagnostic-stability.ts` | 798 | 📊 |
| `src/logging/diagnostic-stuck-session-recovery.integration.test.ts` | 306 |  |
| `src/logging/diagnostic-stuck-session-recovery.runtime.test.ts` | 818 | 📊 |
| `src/logging/diagnostic-stuck-session-recovery.runtime.ts` | 396 |  |
| `src/logging/diagnostic-support-bundle.test.ts` | 76 |  |
| `src/logging/diagnostic-support-bundle.ts` | 143 |  |
| `src/logging/diagnostic-support-export.test.ts` | 961 | 📊 |
| `src/logging/diagnostic-support-export.ts` | 825 | 📊 |
| `src/logging/diagnostic-support-log-redaction.ts` | 219 |  |
| `src/logging/diagnostic-support-redaction.ts` | 478 |  |
| `src/logging/diagnostic.test.ts` | 3156 | 📊 |
| `src/logging/diagnostic.ts` | 1388 | 📊 |
| `src/logging/env-log-level.ts` | 25 |  |
| `src/logging/level-filter.test.ts` | 143 |  |
| `src/logging/levels.test.ts` | 35 |  |
| `src/logging/levels.ts` | 39 |  |
| `src/logging/log-file-path.ts` | 18 |  |
| `src/logging/log-file-shared.ts` | 25 |  |
| `src/logging/log-file-size-cap.test.ts` | 99 |  |
| `src/logging/log-tail-redaction.test.ts` | 65 |  |
| `src/logging/log-tail.test.ts` | 87 |  |
| `src/logging/log-tail.ts` | 177 |  |
| `src/logging/log-test-helpers.ts` | 24 |  |
| `src/logging/logger-env.test.ts` | 90 |  |
| `src/logging/logger-redaction-behavior.test.ts` | 279 |  |
| `src/logging/logger-settings.test.ts` | 69 |  |
| `src/logging/logger-timestamp.test.ts` | 56 |  |
| `src/logging/logger-transport.test.ts` | 61 |  |
| `src/logging/logger.browser-import.test.ts` | 74 |  |
| `src/logging/logger.settings.test.ts` | 36 |  |
| `src/logging/logger.ts` | 838 | 📊 |
| `src/logging/message-lifecycle.test.ts` | 128 |  |
| `src/logging/message-lifecycle.ts` | 95 |  |
| `src/logging/node-require.ts` | 21 |  |
| `src/logging/parse-log-line.test.ts` | 45 |  |
| `src/logging/parse-log-line.ts` | 68 |  |
| `src/logging/redact-bounded.ts` | 29 |  |
| `src/logging/redact-identifier.ts` | 18 |  |
| `src/logging/redact-internal-state.ts` | 22 |  |
| `src/logging/redact-internal.ts` | 8 |  |
| `src/logging/redact.test-support.ts` | 8 |  |
| `src/logging/redact.test.ts` | 1793 | 📊 |
| `src/logging/redact.ts` | 1294 | 📊 |
| `src/logging/secret-redaction-registry.test-support.ts` | 15 |  |
| `src/logging/secret-redaction-registry.ts` | 99 |  |
| `src/logging/state.test.ts` | 11 |  |
| `src/logging/state.ts` | 33 |  |
| `src/logging/subsystem.test.ts` | 315 |  |
| `src/logging/subsystem.ts` | 520 | 📊 |
| `src/logging/timestamps.test.ts` | 31 |  |
| `src/logging/timestamps.ts` | 87 |  |
| `src/logging/types.ts` | 14 |  |

## Documentation

- [outline.md](outline.md) - Symbol maps for large files
- [imports.md](imports.md) - Dependencies

---

| High 🔴 | Medium 🟡 | Low 🟢 |
| 1 | 1 | 0 |

## 🔴 High Priority

### `WARNING` (src/logging/diagnostic.test.ts:639)

> stays throttled: still only the single 60s warning.

## 🟡 Medium Priority

### `FIXME` (src/logging/diagnostic-stuck-session-recovery.runtime.test.ts:488)

> scenario: ghost run aborted+drained successfully, but user sent messages during the stall
