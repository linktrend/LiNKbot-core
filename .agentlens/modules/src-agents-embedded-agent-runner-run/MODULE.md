# Module: src/agents/embedded-agent-runner/run

[← Back to INDEX](../../INDEX.md)

**Type:** implicit | **Files:** 252

## Files

| File | Lines | Large |
| ---- | ----- | ----- |
| `src/agents/embedded-agent-runner/run/abortable.test.ts` | 32 |  |
| `src/agents/embedded-agent-runner/run/abortable.ts` | 60 |  |
| `src/agents/embedded-agent-runner/run/agent-end-context.ts` | 52 |  |
| `src/agents/embedded-agent-runner/run/assistant-failover.test.ts` | 773 | 📊 |
| `src/agents/embedded-agent-runner/run/assistant-failover.ts` | 389 |  |
| `src/agents/embedded-agent-runner/run/assistant-failure.ts` | 373 |  |
| `src/agents/embedded-agent-runner/run/attempt-abort.test.ts` | 252 |  |
| `src/agents/embedded-agent-runner/run/attempt-abort.ts` | 243 |  |
| `src/agents/embedded-agent-runner/run/attempt-after-turn.ts` | 235 |  |
| `src/agents/embedded-agent-runner/run/attempt-before-agent-run.test.ts` | 174 |  |
| `src/agents/embedded-agent-runner/run/attempt-before-agent-run.ts` | 122 |  |
| `src/agents/embedded-agent-runner/run/attempt-bootstrap-prepare.ts` | 192 |  |
| `src/agents/embedded-agent-runner/run/attempt-bundle-tools.test.ts` | 86 |  |
| `src/agents/embedded-agent-runner/run/attempt-bundle-tools.ts` | 226 |  |
| `src/agents/embedded-agent-runner/run/attempt-client-tools.ts` | 174 |  |
| `src/agents/embedded-agent-runner/run/attempt-context-guards.test.ts` | 142 |  |
| `src/agents/embedded-agent-runner/run/attempt-context-guards.ts` | 183 |  |
| `src/agents/embedded-agent-runner/run/attempt-context-summary.ts` | 70 |  |
| `src/agents/embedded-agent-runner/run/attempt-dispatch-preparation.ts` | 240 |  |
| `src/agents/embedded-agent-runner/run/attempt-execution-phase.test.ts` | 224 |  |
| `src/agents/embedded-agent-runner/run/attempt-execution-phase.ts` | 136 |  |
| `src/agents/embedded-agent-runner/run/attempt-execution-settle.test.ts` | 399 |  |
| `src/agents/embedded-agent-runner/run/attempt-execution-settle.ts` | 423 |  |
| `src/agents/embedded-agent-runner/run/attempt-execution-types.ts` | 88 |  |
| `src/agents/embedded-agent-runner/run/attempt-finalize.ts` | 116 |  |
| `src/agents/embedded-agent-runner/run/attempt-history-prepare.ts` | 276 |  |
| `src/agents/embedded-agent-runner/run/attempt-hook-messages.ts` | 6 |  |
| `src/agents/embedded-agent-runner/run/attempt-http-runtime.ts` | 18 |  |
| `src/agents/embedded-agent-runner/run/attempt-normalization.ts` | 346 |  |
| `src/agents/embedded-agent-runner/run/attempt-orphan-repair.ts` | 132 |  |
| `src/agents/embedded-agent-runner/run/attempt-phase-lifecycle.test.ts` | 153 |  |
| `src/agents/embedded-agent-runner/run/attempt-prompt-assembly.ts` | 342 |  |
| `src/agents/embedded-agent-runner/run/attempt-prompt-context.test.ts` | 332 |  |
| `src/agents/embedded-agent-runner/run/attempt-prompt-context.ts` | 281 |  |
| `src/agents/embedded-agent-runner/run/attempt-prompt-dispatch.test.ts` | 166 |  |
| `src/agents/embedded-agent-runner/run/attempt-prompt-dispatch.ts` | 137 |  |
| `src/agents/embedded-agent-runner/run/attempt-prompt-error.test.ts` | 137 |  |
| `src/agents/embedded-agent-runner/run/attempt-prompt-error.ts` | 76 |  |
| `src/agents/embedded-agent-runner/run/attempt-prompt-execution-prepare.test.ts` | 155 |  |
| `src/agents/embedded-agent-runner/run/attempt-prompt-execution-prepare.ts` | 74 |  |
| `src/agents/embedded-agent-runner/run/attempt-prompt-observability.test.ts` | 208 |  |
| `src/agents/embedded-agent-runner/run/attempt-prompt-observability.ts` | 218 |  |
| `src/agents/embedded-agent-runner/run/attempt-prompt-phase.test.ts` | 338 |  |
| `src/agents/embedded-agent-runner/run/attempt-prompt-phase.ts` | 329 |  |
| `src/agents/embedded-agent-runner/run/attempt-prompt-preflight.test.ts` | 229 |  |
| `src/agents/embedded-agent-runner/run/attempt-prompt-preflight.ts` | 340 |  |
| `src/agents/embedded-agent-runner/run/attempt-prompt-skip.ts` | 41 |  |
| `src/agents/embedded-agent-runner/run/attempt-prompt-submit.test.ts` | 203 |  |
| `src/agents/embedded-agent-runner/run/attempt-prompt-submit.ts` | 169 |  |
| `src/agents/embedded-agent-runner/run/attempt-recovery.ts` | 351 |  |
| `src/agents/embedded-agent-runner/run/attempt-result.test.ts` | 152 |  |
| `src/agents/embedded-agent-runner/run/attempt-result.ts` | 422 |  |
| `src/agents/embedded-agent-runner/run/attempt-session-boundary.test.ts` | 263 |  |
| `src/agents/embedded-agent-runner/run/attempt-session-boundary.ts` | 120 |  |
| `src/agents/embedded-agent-runner/run/attempt-session-cleanup.test.ts` | 163 |  |
| `src/agents/embedded-agent-runner/run/attempt-session-cleanup.ts` | 199 |  |
| `src/agents/embedded-agent-runner/run/attempt-session-lock-prepare.test.ts` | 174 |  |
| `src/agents/embedded-agent-runner/run/attempt-session-lock-prepare.ts` | 102 |  |
| `src/agents/embedded-agent-runner/run/attempt-session-manager-prepare.ts` | 215 |  |
| `src/agents/embedded-agent-runner/run/attempt-session-runtime-prepare.test.ts` | 312 |  |
| `src/agents/embedded-agent-runner/run/attempt-session-runtime-prepare.ts` | 250 |  |
| `src/agents/embedded-agent-runner/run/attempt-session-settle.test.ts` | 52 |  |
| `src/agents/embedded-agent-runner/run/attempt-session-settle.ts` | 43 |  |
| `src/agents/embedded-agent-runner/run/attempt-session.test.ts` | 238 |  |
| `src/agents/embedded-agent-runner/run/attempt-session.ts` | 199 |  |
| `src/agents/embedded-agent-runner/run/attempt-setup.ts` | 183 |  |
| `src/agents/embedded-agent-runner/run/attempt-stage-timing.test.ts` | 93 |  |
| `src/agents/embedded-agent-runner/run/attempt-stage-timing.ts` | 127 |  |
| `src/agents/embedded-agent-runner/run/attempt-startup.test.ts` | 61 |  |
| `src/agents/embedded-agent-runner/run/attempt-startup.ts` | 149 |  |
| `src/agents/embedded-agent-runner/run/attempt-stream-finalize.test.ts` | 196 |  |
| `src/agents/embedded-agent-runner/run/attempt-stream-finalize.ts` | 104 |  |
| `src/agents/embedded-agent-runner/run/attempt-stream-prepare.test.ts` | 153 |  |
| `src/agents/embedded-agent-runner/run/attempt-stream-prepare.ts` | 388 |  |
| `src/agents/embedded-agent-runner/run/attempt-stream-runtime-prepare.test.ts` | 249 |  |
| `src/agents/embedded-agent-runner/run/attempt-stream-runtime-prepare.ts` | 192 |  |
| `src/agents/embedded-agent-runner/run/attempt-stream-settle.ts` | 384 |  |
| `src/agents/embedded-agent-runner/run/attempt-stream-transport.ts` | 199 |  |
| `src/agents/embedded-agent-runner/run/attempt-stream.ts` | 353 |  |
| `src/agents/embedded-agent-runner/run/attempt-system-prompt-prepare.ts` | 343 |  |
| `src/agents/embedded-agent-runner/run/attempt-system-prompt.test.ts` | 183 |  |
| `src/agents/embedded-agent-runner/run/attempt-system-prompt.ts` | 59 |  |
| `src/agents/embedded-agent-runner/run/attempt-timeout-prepare.test.ts` | 119 |  |
| `src/agents/embedded-agent-runner/run/attempt-timeout-prepare.ts` | 139 |  |
| `src/agents/embedded-agent-runner/run/attempt-tool-allowlist.ts` | 39 |  |
| `src/agents/embedded-agent-runner/run/attempt-tool-base-prepare.ts` | 345 |  |
| `src/agents/embedded-agent-runner/run/attempt-tool-catalog.ts` | 241 |  |
| `src/agents/embedded-agent-runner/run/attempt-tool-construction-plan.test.ts` | 563 | 📊 |
| `src/agents/embedded-agent-runner/run/attempt-tool-construction-plan.ts` | 251 |  |
| `src/agents/embedded-agent-runner/run/attempt-trajectory-flush-cleanup.test.ts` | 50 |  |
| `src/agents/embedded-agent-runner/run/attempt-trajectory-flush-cleanup.ts` | 39 |  |
| `src/agents/embedded-agent-runner/run/attempt-trajectory-status.test.ts` | 279 |  |
| `src/agents/embedded-agent-runner/run/attempt-trajectory-status.ts` | 160 |  |
| `src/agents/embedded-agent-runner/run/attempt-trajectory.test.ts` | 92 |  |
| `src/agents/embedded-agent-runner/run/attempt-trajectory.ts` | 81 |  |
| `src/agents/embedded-agent-runner/run/attempt-transcript-helpers.ts` | 224 |  |
| `src/agents/embedded-agent-runner/run/attempt.abort-race.test.ts` | 65 |  |
| `src/agents/embedded-agent-runner/run/attempt.abort-settle-timeout.test.ts` | 32 |  |
| `src/agents/embedded-agent-runner/run/attempt.abort-settle-timeout.ts` | 23 |  |
| `src/agents/embedded-agent-runner/run/attempt.async-tasks.test.ts` | 386 |  |
| `src/agents/embedded-agent-runner/run/attempt.async-tasks.ts` | 247 |  |
| `src/agents/embedded-agent-runner/run/attempt.bootstrap-context.test.ts` | 51 |  |
| `src/agents/embedded-agent-runner/run/attempt.bootstrap-context.ts` | 45 |  |
| `src/agents/embedded-agent-runner/run/attempt.context-engine-helpers.test.ts` | 43 |  |
| `src/agents/embedded-agent-runner/run/attempt.context-engine-helpers.ts` | 235 |  |
| `src/agents/embedded-agent-runner/run/attempt.cwd-split.test.ts` | 156 |  |
| `src/agents/embedded-agent-runner/run/attempt.llm-boundary.cache-stability.test.ts` | 646 | 📊 |
| `src/agents/embedded-agent-runner/run/attempt.llm-boundary.test.ts` | 1079 | 📊 |
| `src/agents/embedded-agent-runner/run/attempt.llm-boundary.ts` | 612 | 📊 |
| `src/agents/embedded-agent-runner/run/attempt.media-hint-cache-boundary.test.ts` | 145 |  |
| `src/agents/embedded-agent-runner/run/attempt.memory-flush-forwarding.test.ts` | 114 |  |
| `src/agents/embedded-agent-runner/run/attempt.model-diagnostic-events.test.ts` | 1259 | 📊 |
| `src/agents/embedded-agent-runner/run/attempt.model-diagnostic-events.ts` | 896 | 📊 |
| `src/agents/embedded-agent-runner/run/attempt.prompt-helpers.test.ts` | 389 |  |
| `src/agents/embedded-agent-runner/run/attempt.prompt-helpers.ts` | 639 | 📊 |
| `src/agents/embedded-agent-runner/run/attempt.queue-message.test.ts` | 299 |  |
| `src/agents/embedded-agent-runner/run/attempt.queue-message.ts` | 280 |  |
| `src/agents/embedded-agent-runner/run/attempt.run-decisions.test.ts` | 119 |  |
| `src/agents/embedded-agent-runner/run/attempt.run-decisions.ts` | 82 |  |
| `src/agents/embedded-agent-runner/run/attempt.session-lock.test-support.ts` | 15 |  |
| `src/agents/embedded-agent-runner/run/attempt.session-lock.test.ts` | 3808 | 📊 |
| `src/agents/embedded-agent-runner/run/attempt.session-lock.ts` | 2216 | 📊 |
| `src/agents/embedded-agent-runner/run/attempt.sessions-yield.ts` | 251 |  |
| `src/agents/embedded-agent-runner/run/attempt.spawn-workspace.bootstrap-marker.test.ts` | 75 |  |
| `src/agents/embedded-agent-runner/run/attempt.spawn-workspace.bootstrap-warning.test.ts` | 47 |  |
| `src/agents/embedded-agent-runner/run/attempt.spawn-workspace.cache-ttl.test.ts` | 69 |  |
| `src/agents/embedded-agent-runner/run/attempt.spawn-workspace.context-engine.test.ts` | 3785 | 📊 |
| `src/agents/embedded-agent-runner/run/attempt.spawn-workspace.context-injection.test.ts` | 254 |  |
| `src/agents/embedded-agent-runner/run/attempt.spawn-workspace.diagnostics.test.ts` | 69 |  |
| `src/agents/embedded-agent-runner/run/attempt.spawn-workspace.sessions-spawn.test.ts` | 45 |  |
| `src/agents/embedded-agent-runner/run/attempt.spawn-workspace.test-support.ts` | 1437 | 📊 |
| `src/agents/embedded-agent-runner/run/attempt.spawn-workspace.timeout.test.ts` | 46 |  |
| `src/agents/embedded-agent-runner/run/attempt.stop-reason-recovery.test.ts` | 79 |  |
| `src/agents/embedded-agent-runner/run/attempt.stop-reason-recovery.ts` | 174 |  |
| `src/agents/embedded-agent-runner/run/attempt.subscription-cleanup.test.ts` | 215 |  |
| `src/agents/embedded-agent-runner/run/attempt.subscription-cleanup.ts` | 148 |  |
| `src/agents/embedded-agent-runner/run/attempt.test.ts` | 3570 | 📊 |
| `src/agents/embedded-agent-runner/run/attempt.thread-helpers.ts` | 124 |  |
| `src/agents/embedded-agent-runner/run/attempt.tool-call-argument-repair.test.ts` | 524 | 📊 |
| `src/agents/embedded-agent-runner/run/attempt.tool-call-argument-repair.ts` | 799 | 📊 |
| `src/agents/embedded-agent-runner/run/attempt.tool-call-block-type.ts` | 3 |  |
| `src/agents/embedded-agent-runner/run/attempt.tool-call-normalization.test.ts` | 1731 | 📊 |
| `src/agents/embedded-agent-runner/run/attempt.tool-call-normalization.ts` | 1211 | 📊 |
| `src/agents/embedded-agent-runner/run/attempt.tool-run-context.ts` | 35 |  |
| `src/agents/embedded-agent-runner/run/attempt.tool-search-catalog-abort.test.ts` | 91 |  |
| `src/agents/embedded-agent-runner/run/attempt.tool-search-run-plan.test.ts` | 322 |  |
| `src/agents/embedded-agent-runner/run/attempt.tool-search-run-plan.ts` | 145 |  |
| `src/agents/embedded-agent-runner/run/attempt.transcript-policy.test.ts` | 113 |  |
| `src/agents/embedded-agent-runner/run/attempt.transcript-policy.ts` | 48 |  |
| `src/agents/embedded-agent-runner/run/attempt.ts` | 502 | 📊 |
| `src/agents/embedded-agent-runner/run/attempt.ultra-thinking.test.ts` | 80 |  |
| `src/agents/embedded-agent-runner/run/attempt.user-message-boundary.ts` | 342 |  |
| `src/agents/embedded-agent-runner/run/attempt.user-transcript-context-registry.test.ts` | 31 |  |
| `src/agents/embedded-agent-runner/run/attempt.user-transcript-context-registry.ts` | 32 |  |
| `src/agents/embedded-agent-runner/run/auth-controller.test.ts` | 873 | 📊 |
| `src/agents/embedded-agent-runner/run/auth-controller.ts` | 680 | 📊 |
| `src/agents/embedded-agent-runner/run/auth-plan.ts` | 212 |  |
| `src/agents/embedded-agent-runner/run/auth-profile-failure-policy.test.ts` | 129 |  |
| `src/agents/embedded-agent-runner/run/auth-profile-failure-policy.ts` | 46 |  |
| `src/agents/embedded-agent-runner/run/auth-profile-failure-policy.types.ts` | 4 |  |
| `src/agents/embedded-agent-runner/run/auth-profile-success.ts` | 185 |  |
| `src/agents/embedded-agent-runner/run/auth-store.ts` | 58 |  |
| `src/agents/embedded-agent-runner/run/backend.ts` | 14 |  |
| `src/agents/embedded-agent-runner/run/blocked-run-result.ts` | 28 |  |
| `src/agents/embedded-agent-runner/run/codex-app-server-recovery.ts` | 66 |  |
| `src/agents/embedded-agent-runner/run/compaction-retry-aggregate-timeout.test.ts` | 225 |  |
| `src/agents/embedded-agent-runner/run/compaction-retry-aggregate-timeout.ts` | 73 |  |
| `src/agents/embedded-agent-runner/run/compaction-runtime.ts` | 116 |  |
| `src/agents/embedded-agent-runner/run/compaction-timeout.test.ts` | 266 |  |
| `src/agents/embedded-agent-runner/run/compaction-timeout.ts` | 120 |  |
| `src/agents/embedded-agent-runner/run/context-recovery-state.ts` | 16 |  |
| `src/agents/embedded-agent-runner/run/execution-context.ts` | 35 |  |
| `src/agents/embedded-agent-runner/run/execution-phase-diagnostics.test.ts` | 158 |  |
| `src/agents/embedded-agent-runner/run/execution-phase-diagnostics.ts` | 50 |  |
| `src/agents/embedded-agent-runner/run/failover-observation.test.ts` | 215 |  |
| `src/agents/embedded-agent-runner/run/failover-observation.ts` | 108 |  |
| `src/agents/embedded-agent-runner/run/failover-policy.test.ts` | 824 | 📊 |
| `src/agents/embedded-agent-runner/run/failover-policy.ts` | 267 |  |
| `src/agents/embedded-agent-runner/run/failover-retry-controller.ts` | 169 |  |
| `src/agents/embedded-agent-runner/run/fallbacks.test.ts` | 49 |  |
| `src/agents/embedded-agent-runner/run/fallbacks.ts` | 27 |  |
| `src/agents/embedded-agent-runner/run/helpers.resolve-error-context.test.ts` | 42 |  |
| `src/agents/embedded-agent-runner/run/helpers.test.ts` | 318 |  |
| `src/agents/embedded-agent-runner/run/helpers.ts` | 285 |  |
| `src/agents/embedded-agent-runner/run/history-image-prune.test.ts` | 456 |  |
| `src/agents/embedded-agent-runner/run/history-image-prune.ts` | 153 |  |
| `src/agents/embedded-agent-runner/run/idle-timeout-breaker.test.ts` | 168 |  |
| `src/agents/embedded-agent-runner/run/idle-timeout-breaker.ts` | 90 |  |
| `src/agents/embedded-agent-runner/run/images.test.ts` | 678 | 📊 |
| `src/agents/embedded-agent-runner/run/images.ts` | 665 | 📊 |
| `src/agents/embedded-agent-runner/run/incomplete-turn.ts` | 903 | 📊 |
| `src/agents/embedded-agent-runner/run/internal-params.ts` | 14 |  |
| `src/agents/embedded-agent-runner/run/lane-controller.ts` | 192 |  |
| `src/agents/embedded-agent-runner/run/lane-runtime.ts` | 50 |  |
| `src/agents/embedded-agent-runner/run/llm-idle-timeout.test.ts` | 1167 | 📊 |
| `src/agents/embedded-agent-runner/run/llm-idle-timeout.ts` | 615 | 📊 |
| `src/agents/embedded-agent-runner/run/message-merge-strategy.test.ts` | 26 |  |
| `src/agents/embedded-agent-runner/run/message-merge-strategy.ts` | 48 |  |
| `src/agents/embedded-agent-runner/run/message-tool-terminal.test.ts` | 376 |  |
| `src/agents/embedded-agent-runner/run/message-tool-terminal.ts` | 62 |  |
| `src/agents/embedded-agent-runner/run/message-transform-stream-wrapper.ts` | 39 |  |
| `src/agents/embedded-agent-runner/run/midturn-precheck.ts` | 41 |  |
| `src/agents/embedded-agent-runner/run/model-harness.ts` | 140 |  |
| `src/agents/embedded-agent-runner/run/model-setup.ts` | 216 |  |
| `src/agents/embedded-agent-runner/run/overflow-context-recovery.ts` | 433 |  |
| `src/agents/embedded-agent-runner/run/params.ts` | 370 |  |
| `src/agents/embedded-agent-runner/run/payloads.errors.test.ts` | 1205 | 📊 |
| `src/agents/embedded-agent-runner/run/payloads.test-helpers.ts` | 57 |  |
| `src/agents/embedded-agent-runner/run/payloads.test.ts` | 1076 | 📊 |
| `src/agents/embedded-agent-runner/run/payloads.ts` | 963 | 📊 |
| `src/agents/embedded-agent-runner/run/pre-persisted-user-turn.ts` | 38 |  |
| `src/agents/embedded-agent-runner/run/preemptive-compaction.bashexec.test.ts` | 85 |  |
| `src/agents/embedded-agent-runner/run/preemptive-compaction.test.ts` | 587 | 📊 |
| `src/agents/embedded-agent-runner/run/preemptive-compaction.ts` | 467 |  |
| `src/agents/embedded-agent-runner/run/preemptive-compaction.types.ts` | 8 |  |
| `src/agents/embedded-agent-runner/run/prepared-runtime-context.test.ts` | 57 |  |
| `src/agents/embedded-agent-runner/run/prepared-runtime-context.ts` | 32 |  |
| `src/agents/embedded-agent-runner/run/progress-controller.ts` | 167 |  |
| `src/agents/embedded-agent-runner/run/prompt-failure.ts` | 327 |  |
| `src/agents/embedded-agent-runner/run/recovery-message-action-capability.test.ts` | 74 |  |
| `src/agents/embedded-agent-runner/run/recovery-message-action-capability.ts` | 71 |  |
| `src/agents/embedded-agent-runner/run/retry-limit.ts` | 53 |  |
| `src/agents/embedded-agent-runner/run/run-attempt-dispatch.ts` | 382 |  |
| `src/agents/embedded-agent-runner/run/run-attempt-result.ts` | 87 |  |
| `src/agents/embedded-agent-runner/run/runtime-context-prompt.test.ts` | 636 | 📊 |
| `src/agents/embedded-agent-runner/run/runtime-context-prompt.ts` | 285 |  |
| `src/agents/embedded-agent-runner/run/runtime-preparation.ts` | 519 | 📊 |
| `src/agents/embedded-agent-runner/run/runtime-resolution.ts` | 127 |  |
| `src/agents/embedded-agent-runner/run/session-bootstrap.ts` | 156 |  |
| `src/agents/embedded-agent-runner/run/session-prompt-state.ts` | 156 |  |
| `src/agents/embedded-agent-runner/run/setup.test.ts` | 354 |  |
| `src/agents/embedded-agent-runner/run/setup.ts` | 290 |  |
| `src/agents/embedded-agent-runner/run/skill-workshop-attempt-params.ts` | 20 |  |
| `src/agents/embedded-agent-runner/run/source-reply-payloads.ts` | 93 |  |
| `src/agents/embedded-agent-runner/run/stream-wrapper.ts` | 32 |  |
| `src/agents/embedded-agent-runner/run/terminal-outcome.test.ts` | 173 |  |
| `src/agents/embedded-agent-runner/run/terminal-outcome.ts` | 103 |  |
| `src/agents/embedded-agent-runner/run/terminal-preparation.ts` | 240 |  |
| `src/agents/embedded-agent-runner/run/terminal-resolution.delivery-state.test.ts` | 15 |  |
| `src/agents/embedded-agent-runner/run/terminal-resolution.ts` | 565 | 📊 |
| `src/agents/embedded-agent-runner/run/terminal-retry-state.ts` | 23 |  |
| `src/agents/embedded-agent-runner/run/terminal-timeout.ts` | 98 |  |
| `src/agents/embedded-agent-runner/run/timeout-context-recovery.ts` | 236 |  |
| `src/agents/embedded-agent-runner/run/tool-activity-heartbeat.test.ts` | 169 |  |
| `src/agents/embedded-agent-runner/run/tool-activity-heartbeat.ts` | 43 |  |
| `src/agents/embedded-agent-runner/run/tool-failure-acknowledgement.ts` | 41 |  |
| `src/agents/embedded-agent-runner/run/tool-media-payloads.test.ts` | 271 |  |
| `src/agents/embedded-agent-runner/run/tool-media-payloads.ts` | 110 |  |
| `src/agents/embedded-agent-runner/run/transcript-repair-runtime-contract.test.ts` | 94 |  |
| `src/agents/embedded-agent-runner/run/trigger-policy.test.ts` | 24 |  |
| `src/agents/embedded-agent-runner/run/trigger-policy.ts` | 32 |  |
| `src/agents/embedded-agent-runner/run/types.ts` | 334 |  |

## Documentation

- [outline.md](outline.md) - Symbol maps for large files
- [memory.md](memory.md) - Warnings and TODOs
- [imports.md](imports.md) - Dependencies
