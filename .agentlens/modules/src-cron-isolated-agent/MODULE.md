# Module: src/cron/isolated-agent

[← Back to INDEX](../../INDEX.md)

**Type:** implicit | **Files:** 74

## Files

| File | Lines | Large |
| ---- | ----- | ----- |
| `src/cron/isolated-agent/channel-output-policy.test.ts` | 87 |  |
| `src/cron/isolated-agent/channel-output-policy.ts` | 53 |  |
| `src/cron/isolated-agent/delivery-dispatch.double-announce.test.ts` | 2750 | 📊 |
| `src/cron/isolated-agent/delivery-dispatch.named-agent.test.ts` | 118 |  |
| `src/cron/isolated-agent/delivery-dispatch.test-support.ts` | 20 |  |
| `src/cron/isolated-agent/delivery-dispatch.ts` | 1584 | 📊 |
| `src/cron/isolated-agent/delivery-logger.runtime.ts` | 2 |  |
| `src/cron/isolated-agent/delivery-outbound.runtime.ts` | 7 |  |
| `src/cron/isolated-agent/delivery-subagent-registry.runtime.ts` | 2 |  |
| `src/cron/isolated-agent/delivery-target.issue-91613.test.ts` | 317 |  |
| `src/cron/isolated-agent/delivery-target.runtime.ts` | 80 |  |
| `src/cron/isolated-agent/delivery-target.test.ts` | 1614 | 📊 |
| `src/cron/isolated-agent/delivery-target.ts` | 512 | 📊 |
| `src/cron/isolated-agent/helpers.test.ts` | 124 |  |
| `src/cron/isolated-agent/helpers.ts` | 365 |  |
| `src/cron/isolated-agent/job-fixtures.ts` | 29 |  |
| `src/cron/isolated-agent/model-preflight.runtime.test.ts` | 174 |  |
| `src/cron/isolated-agent/model-preflight.runtime.ts` | 246 |  |
| `src/cron/isolated-agent/model-selection.ts` | 208 |  |
| `src/cron/isolated-agent/run-auth-profile.runtime.ts` | 2 |  |
| `src/cron/isolated-agent/run-config.ts` | 72 |  |
| `src/cron/isolated-agent/run-context.runtime.ts` | 2 |  |
| `src/cron/isolated-agent/run-delivery.runtime.ts` | 8 |  |
| `src/cron/isolated-agent/run-embedded.runtime.ts` | 4 |  |
| `src/cron/isolated-agent/run-execution-cli.runtime.ts` | 6 |  |
| `src/cron/isolated-agent/run-execution.runtime.ts` | 44 |  |
| `src/cron/isolated-agent/run-executor.runtime.ts` | 2 |  |
| `src/cron/isolated-agent/run-executor.ts` | 839 | 📊 |
| `src/cron/isolated-agent/run-external-content.runtime.ts` | 5 |  |
| `src/cron/isolated-agent/run-fallback-policy.test.ts` | 433 |  |
| `src/cron/isolated-agent/run-fallback-policy.ts` | 75 |  |
| `src/cron/isolated-agent/run-model-catalog.runtime.ts` | 2 |  |
| `src/cron/isolated-agent/run-model-selection.runtime.ts` | 11 |  |
| `src/cron/isolated-agent/run-session-state.test.ts` | 551 | 📊 |
| `src/cron/isolated-agent/run-session-state.ts` | 342 |  |
| `src/cron/isolated-agent/run-subagent-registry.runtime.ts` | 5 |  |
| `src/cron/isolated-agent/run-timeout.ts` | 7 |  |
| `src/cron/isolated-agent/run.auth-profile-cold-path.test.ts` | 63 |  |
| `src/cron/isolated-agent/run.cron-model-override-forwarding.test.ts` | 1010 | 📊 |
| `src/cron/isolated-agent/run.cron-model-override.test.ts` | 312 |  |
| `src/cron/isolated-agent/run.diagnostic-events.test.ts` | 381 |  |
| `src/cron/isolated-agent/run.fast-mode.test.ts` | 276 |  |
| `src/cron/isolated-agent/run.interim-retry.test.ts` | 216 |  |
| `src/cron/isolated-agent/run.live-session-model-switch.test.ts` | 374 |  |
| `src/cron/isolated-agent/run.memory-search-config-preserved.test.ts` | 55 |  |
| `src/cron/isolated-agent/run.message-tool-policy.test.ts` | 2062 | 📊 |
| `src/cron/isolated-agent/run.meta-error-status.test.ts` | 403 |  |
| `src/cron/isolated-agent/run.model-policy-config-preserved.test.ts` | 68 |  |
| `src/cron/isolated-agent/run.payload-fallbacks.test.ts` | 248 |  |
| `src/cron/isolated-agent/run.runtime-plugins.test.ts` | 48 |  |
| `src/cron/isolated-agent/run.runtime.ts` | 29 |  |
| `src/cron/isolated-agent/run.sandbox-config-preserved.test.ts` | 116 |  |
| `src/cron/isolated-agent/run.session-key-isolation.test.ts` | 362 |  |
| `src/cron/isolated-agent/run.session-key.test.ts` | 66 |  |
| `src/cron/isolated-agent/run.session-lifecycle.test.ts` | 381 |  |
| `src/cron/isolated-agent/run.skill-filter.test.ts` | 440 |  |
| `src/cron/isolated-agent/run.source-delivery-guard.test.ts` | 513 | 📊 |
| `src/cron/isolated-agent/run.suite-helpers.ts` | 25 |  |
| `src/cron/isolated-agent/run.test-harness.ts` | 840 | 📊 |
| `src/cron/isolated-agent/run.tools-allow.test.ts` | 305 |  |
| `src/cron/isolated-agent/run.ts` | 1944 | 📊 |
| `src/cron/isolated-agent/run.types.ts` | 31 |  |
| `src/cron/isolated-agent/run.usage-accounting.test.ts` | 174 |  |
| `src/cron/isolated-agent/session-cleanup.ts` | 86 |  |
| `src/cron/isolated-agent/session-key.ts` | 26 |  |
| `src/cron/isolated-agent/session.latest-read.test.ts` | 53 |  |
| `src/cron/isolated-agent/session.provider-owned-reset.test.ts` | 84 |  |
| `src/cron/isolated-agent/session.test.ts` | 560 | 📊 |
| `src/cron/isolated-agent/session.ts` | 249 |  |
| `src/cron/isolated-agent/source-delivery-fallback.ts` | 65 |  |
| `src/cron/isolated-agent/subagent-followup-hints.ts` | 51 |  |
| `src/cron/isolated-agent/subagent-followup.runtime.ts` | 5 |  |
| `src/cron/isolated-agent/subagent-followup.test.ts` | 523 | 📊 |
| `src/cron/isolated-agent/subagent-followup.ts` | 158 |  |

## Documentation

- [outline.md](outline.md) - Symbol maps for large files
- [imports.md](imports.md) - Dependencies

---

| High 🔴 | Medium 🟡 | Low 🟢 |
| 0 | 2 | 0 |

## 🟡 Medium Priority

### `FIXME` (src/cron/isolated-agent/delivery-dispatch.double-announce.test.ts:4)

> early return paths in text finalization (active subagent suppression

### `FIXME` (src/cron/isolated-agent/run.cron-model-override.test.ts:127)

> (#21057): before the fix, the model was only written to the session
