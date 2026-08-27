# Module: src/gateway/server-methods

[← Back to INDEX](../../INDEX.md)

**Type:** implicit | **Files:** 322

## Files

| File | Lines | Large |
| ---- | ----- | ----- |
| `src/gateway/server-methods/agent-admission-controller.ts` | 285 |  |
| `src/gateway/server-methods/agent-content-phase.ts` | 264 |  |
| `src/gateway/server-methods/agent-cron-continuation.ts` | 175 |  |
| `src/gateway/server-methods/agent-dedupe-lifecycle.ts` | 177 |  |
| `src/gateway/server-methods/agent-dedupe.ts` | 135 |  |
| `src/gateway/server-methods/agent-delivery-phase.ts` | 236 |  |
| `src/gateway/server-methods/agent-expected-session.ts` | 89 |  |
| `src/gateway/server-methods/agent-handler-helpers.ts` | 259 |  |
| `src/gateway/server-methods/agent-id-shared.ts` | 29 |  |
| `src/gateway/server-methods/agent-identity.ts` | 77 |  |
| `src/gateway/server-methods/agent-job.timeout-fallback.test.ts` | 130 |  |
| `src/gateway/server-methods/agent-job.ts` | 583 | 📊 |
| `src/gateway/server-methods/agent-request-preflight.test.ts` | 352 |  |
| `src/gateway/server-methods/agent-request-preflight.ts` | 315 |  |
| `src/gateway/server-methods/agent-request-routing.ts` | 317 |  |
| `src/gateway/server-methods/agent-request-types.ts` | 57 |  |
| `src/gateway/server-methods/agent-reset-phase.ts` | 198 |  |
| `src/gateway/server-methods/agent-restart-recovery-context.test.ts` | 85 |  |
| `src/gateway/server-methods/agent-restart-recovery-context.ts` | 54 |  |
| `src/gateway/server-methods/agent-run-admission-phase.ts` | 418 |  |
| `src/gateway/server-methods/agent-run-dispatch.ts` | 283 |  |
| `src/gateway/server-methods/agent-run-execution-phase.ts` | 481 |  |
| `src/gateway/server-methods/agent-run-handler.ts` | 531 | 📊 |
| `src/gateway/server-methods/agent-run-model-selection.ts` | 83 |  |
| `src/gateway/server-methods/agent-session-patch.ts` | 264 |  |
| `src/gateway/server-methods/agent-session-persist.ts` | 497 |  |
| `src/gateway/server-methods/agent-session-prepare.ts` | 341 |  |
| `src/gateway/server-methods/agent-session-reset.ts` | 269 |  |
| `src/gateway/server-methods/agent-task-tracking.ts` | 215 |  |
| `src/gateway/server-methods/agent-timestamp.ts` | 110 |  |
| `src/gateway/server-methods/agent-wait-dedupe.test.ts` | 90 |  |
| `src/gateway/server-methods/agent-wait.ts` | 63 |  |
| `src/gateway/server-methods/agent.abort-integration.test-utils.ts` | 2292 | 📊 |
| `src/gateway/server-methods/agent.base.test-utils.ts` | 1695 | 📊 |
| `src/gateway/server-methods/agent.create-event.test.ts` | 138 |  |
| `src/gateway/server-methods/agent.deleted-agent.test.ts` | 183 |  |
| `src/gateway/server-methods/agent.events-and-subagents.test-utils.ts` | 1422 | 📊 |
| `src/gateway/server-methods/agent.media-and-routing.test-utils.ts` | 2004 | 📊 |
| `src/gateway/server-methods/agent.reset-and-identity.test-utils.ts` | 1193 | 📊 |
| `src/gateway/server-methods/agent.sessions-and-models.test-utils.ts` | 2201 | 📊 |
| `src/gateway/server-methods/agent.test-harness.ts` | 1033 | 📊 |
| `src/gateway/server-methods/agent.test.ts` | 6 |  |
| `src/gateway/server-methods/agent.ts` | 11 |  |
| `src/gateway/server-methods/agents-config-mutations.ts` | 84 |  |
| `src/gateway/server-methods/agents-mutate.test.ts` | 1543 | 📊 |
| `src/gateway/server-methods/agents-workspace.test.ts` | 390 |  |
| `src/gateway/server-methods/agents-workspace.ts` | 271 |  |
| `src/gateway/server-methods/agents.ts` | 823 | 📊 |
| `src/gateway/server-methods/approval-publication.ts` | 178 |  |
| `src/gateway/server-methods/approval-run-cancellation.ts` | 43 |  |
| `src/gateway/server-methods/approval-shared.test.ts` | 1825 | 📊 |
| `src/gateway/server-methods/approval-shared.ts` | 779 | 📊 |
| `src/gateway/server-methods/approval-wait-response.ts` | 22 |  |
| `src/gateway/server-methods/approval.test.ts` | 1552 | 📊 |
| `src/gateway/server-methods/approval.ts` | 559 | 📊 |
| `src/gateway/server-methods/artifacts.test.ts` | 911 | 📊 |
| `src/gateway/server-methods/artifacts.ts` | 673 | 📊 |
| `src/gateway/server-methods/attach.test.ts` | 228 |  |
| `src/gateway/server-methods/attach.ts` | 79 |  |
| `src/gateway/server-methods/attachment-normalize.ts` | 57 |  |
| `src/gateway/server-methods/audit.test.ts` | 211 |  |
| `src/gateway/server-methods/audit.ts` | 170 |  |
| `src/gateway/server-methods/base-hash.ts` | 11 |  |
| `src/gateway/server-methods/board.test.ts` | 847 | 📊 |
| `src/gateway/server-methods/board.ts` | 322 |  |
| `src/gateway/server-methods/channels.start.test.ts` | 281 |  |
| `src/gateway/server-methods/channels.status.test.ts` | 451 |  |
| `src/gateway/server-methods/channels.ts` | 712 | 📊 |
| `src/gateway/server-methods/chat-abort-authorization.ts` | 430 |  |
| `src/gateway/server-methods/chat-abort-handler.ts` | 322 |  |
| `src/gateway/server-methods/chat-abort-runtime.ts` | 325 |  |
| `src/gateway/server-methods/chat-assistant-content.ts` | 321 |  |
| `src/gateway/server-methods/chat-broadcast.ts` | 175 |  |
| `src/gateway/server-methods/chat-history-budget.test.ts` | 77 |  |
| `src/gateway/server-methods/chat-history-budget.ts` | 131 |  |
| `src/gateway/server-methods/chat-history-handler.ts` | 620 | 📊 |
| `src/gateway/server-methods/chat-history-omission-logging.test.ts` | 125 |  |
| `src/gateway/server-methods/chat-history-omission-request.test.ts` | 88 |  |
| `src/gateway/server-methods/chat-history-pages.test.ts` | 50 |  |
| `src/gateway/server-methods/chat-history-pages.ts` | 435 |  |
| `src/gateway/server-methods/chat-message-get-handler.ts` | 160 |  |
| `src/gateway/server-methods/chat-origin-routing.ts` | 364 |  |
| `src/gateway/server-methods/chat-reply-media.test.ts` | 267 |  |
| `src/gateway/server-methods/chat-reply-media.ts` | 93 |  |
| `src/gateway/server-methods/chat-restart-recovery.ts` | 419 |  |
| `src/gateway/server-methods/chat-send-admission.ts` | 391 |  |
| `src/gateway/server-methods/chat-send-attachments.ts` | 333 |  |
| `src/gateway/server-methods/chat-send-background.ts` | 84 |  |
| `src/gateway/server-methods/chat-send-command-replies.test.ts` | 99 |  |
| `src/gateway/server-methods/chat-send-command-replies.ts` | 233 |  |
| `src/gateway/server-methods/chat-send-dispatch-errors.test.ts` | 66 |  |
| `src/gateway/server-methods/chat-send-dispatch-errors.ts` | 214 |  |
| `src/gateway/server-methods/chat-send-handler.ts` | 729 | 📊 |
| `src/gateway/server-methods/chat-send-nonagent-finalization.ts` | 257 |  |
| `src/gateway/server-methods/chat-send-pre-admission.ts` | 190 |  |
| `src/gateway/server-methods/chat-send-reply-context.test.ts` | 185 |  |
| `src/gateway/server-methods/chat-send-reply-context.ts` | 145 |  |
| `src/gateway/server-methods/chat-send-reply-dispatch.test.ts` | 83 |  |
| `src/gateway/server-methods/chat-send-reply-dispatch.ts` | 233 |  |
| `src/gateway/server-methods/chat-send-request.test.ts` | 145 |  |
| `src/gateway/server-methods/chat-send-request.ts` | 191 |  |
| `src/gateway/server-methods/chat-send-session.ts` | 173 |  |
| `src/gateway/server-methods/chat-send-source-finalization.ts` | 303 |  |
| `src/gateway/server-methods/chat-send-user-turn.test.ts` | 212 |  |
| `src/gateway/server-methods/chat-send-user-turn.ts` | 274 |  |
| `src/gateway/server-methods/chat-server-timing.ts` | 103 |  |
| `src/gateway/server-methods/chat-text-normalization.ts` | 8 |  |
| `src/gateway/server-methods/chat-transcript-inject.ts` | 160 |  |
| `src/gateway/server-methods/chat-transcript-persistence.ts` | 349 |  |
| `src/gateway/server-methods/chat-tts-markers.ts` | 60 |  |
| `src/gateway/server-methods/chat-user-turn-recorder.ts` | 114 |  |
| `src/gateway/server-methods/chat-webchat-media.test.ts` | 369 |  |
| `src/gateway/server-methods/chat-webchat-media.ts` | 317 |  |
| `src/gateway/server-methods/chat.abort-authorization.test.ts` | 500 |  |
| `src/gateway/server-methods/chat.abort-persistence.test.ts` | 1376 | 📊 |
| `src/gateway/server-methods/chat.abort.test-helpers.ts` | 125 |  |
| `src/gateway/server-methods/chat.directive-tags.test.ts` | 7042 | 📊 |
| `src/gateway/server-methods/chat.error-broadcast.test.ts` | 230 |  |
| `src/gateway/server-methods/chat.inject.parentid.test.ts` | 175 |  |
| `src/gateway/server-methods/chat.send-deleted-agent.test.ts` | 42 |  |
| `src/gateway/server-methods/chat.ts` | 244 |  |
| `src/gateway/server-methods/commands-list-result.ts` | 251 |  |
| `src/gateway/server-methods/commands.test.ts` | 603 | 📊 |
| `src/gateway/server-methods/commands.ts` | 50 |  |
| `src/gateway/server-methods/config-write-flow.ts` | 325 |  |
| `src/gateway/server-methods/config.shared-auth.test.ts` | 574 | 📊 |
| `src/gateway/server-methods/config.test-helpers.ts` | 89 |  |
| `src/gateway/server-methods/config.test.ts` | 156 |  |
| `src/gateway/server-methods/config.ts` | 1001 | 📊 |
| `src/gateway/server-methods/connect.ts` | 17 |  |
| `src/gateway/server-methods/control-ui.test.ts` | 173 |  |
| `src/gateway/server-methods/control-ui.ts` | 77 |  |
| `src/gateway/server-methods/conversations.test.ts` | 499 |  |
| `src/gateway/server-methods/conversations.ts` | 376 |  |
| `src/gateway/server-methods/cron-caller-scope.ts` | 176 |  |
| `src/gateway/server-methods/cron-error-classification.ts` | 30 |  |
| `src/gateway/server-methods/cron-list-caller-scope.ts` | 93 |  |
| `src/gateway/server-methods/cron-run-log-filters.ts` | 40 |  |
| `src/gateway/server-methods/cron.ts` | 942 | 📊 |
| `src/gateway/server-methods/cron.validation.test.ts` | 2509 | 📊 |
| `src/gateway/server-methods/deleted-agent-guard.test-helpers.ts` | 37 |  |
| `src/gateway/server-methods/device-management-authz.ts` | 99 |  |
| `src/gateway/server-methods/device-management-security.ts` | 55 |  |
| `src/gateway/server-methods/device-pair-setup.test.ts` | 333 |  |
| `src/gateway/server-methods/device-pair-setup.ts` | 100 |  |
| `src/gateway/server-methods/devices.test.ts` | 1467 | 📊 |
| `src/gateway/server-methods/devices.ts` | 823 | 📊 |
| `src/gateway/server-methods/diagnostics.test.ts` | 133 |  |
| `src/gateway/server-methods/diagnostics.ts` | 29 |  |
| `src/gateway/server-methods/doctor.memory-core-runtime.ts` | 16 |  |
| `src/gateway/server-methods/doctor.test.ts` | 1763 | 📊 |
| `src/gateway/server-methods/doctor.ts` | 1073 | 📊 |
| `src/gateway/server-methods/environments.test.ts` | 551 | 📊 |
| `src/gateway/server-methods/environments.ts` | 235 |  |
| `src/gateway/server-methods/exec-approval.ts` | 561 | 📊 |
| `src/gateway/server-methods/exec-approvals.test.ts` | 564 | 📊 |
| `src/gateway/server-methods/exec-approvals.ts` | 267 |  |
| `src/gateway/server-methods/fs.test.ts` | 206 |  |
| `src/gateway/server-methods/fs.ts` | 100 |  |
| `src/gateway/server-methods/gateway-client-identity.ts` | 19 |  |
| `src/gateway/server-methods/gateway-response.test-helpers.ts` | 22 |  |
| `src/gateway/server-methods/health.ts` | 197 |  |
| `src/gateway/server-methods/inflight.ts` | 95 |  |
| `src/gateway/server-methods/lazy-core-handlers.ts` | 31 |  |
| `src/gateway/server-methods/logs.ts` | 44 |  |
| `src/gateway/server-methods/mcp-app.test.ts` | 412 |  |
| `src/gateway/server-methods/mcp-app.ts` | 182 |  |
| `src/gateway/server-methods/migrations.test.ts` | 533 | 📊 |
| `src/gateway/server-methods/migrations.ts` | 423 |  |
| `src/gateway/server-methods/models-auth-status.test.ts` | 1636 | 📊 |
| `src/gateway/server-methods/models-auth-status.ts` | 760 | 📊 |
| `src/gateway/server-methods/models-list-result.openai-routes.test.ts` | 571 | 📊 |
| `src/gateway/server-methods/models-list-result.ts` | 584 | 📊 |
| `src/gateway/server-methods/models-probe.test.ts` | 203 |  |
| `src/gateway/server-methods/models-probe.ts` | 148 |  |
| `src/gateway/server-methods/models.test.ts` | 1396 | 📊 |
| `src/gateway/server-methods/models.ts` | 36 |  |
| `src/gateway/server-methods/native-hook-relay.test.ts` | 109 |  |
| `src/gateway/server-methods/native-hook-relay.ts` | 36 |  |
| `src/gateway/server-methods/node-child-process.test-support.ts` | 14 |  |
| `src/gateway/server-methods/node-command-rejection-hint.ts` | 36 |  |
| `src/gateway/server-methods/nodes-pending.test.ts` | 196 |  |
| `src/gateway/server-methods/nodes-pending.ts` | 171 |  |
| `src/gateway/server-methods/nodes-policy.ts` | 34 |  |
| `src/gateway/server-methods/nodes-wake-state.test.ts` | 107 |  |
| `src/gateway/server-methods/nodes-wake-state.ts` | 27 |  |
| `src/gateway/server-methods/nodes.handlers.invoke-progress.ts` | 47 |  |
| `src/gateway/server-methods/nodes.handlers.invoke-result.ts` | 78 |  |
| `src/gateway/server-methods/nodes.helpers.ts` | 71 |  |
| `src/gateway/server-methods/nodes.invoke-wake.test.ts` | 1463 | 📊 |
| `src/gateway/server-methods/nodes.test.ts` | 474 |  |
| `src/gateway/server-methods/nodes.ts` | 1851 | 📊 |
| `src/gateway/server-methods/nodes.wake-leak.test.ts` | 45 |  |
| `src/gateway/server-methods/open-path.test.ts` | 164 |  |
| `src/gateway/server-methods/open-path.ts` | 141 |  |
| `src/gateway/server-methods/optional-model-catalog.ts` | 125 |  |
| `src/gateway/server-methods/plugin-approval-turn-source-routing.e2e.test.ts` | 135 |  |
| `src/gateway/server-methods/plugin-approval.test.ts` | 1028 | 📊 |
| `src/gateway/server-methods/plugin-approval.ts` | 275 |  |
| `src/gateway/server-methods/plugin-host-hooks.ts` | 276 |  |
| `src/gateway/server-methods/plugins.test.ts` | 400 |  |
| `src/gateway/server-methods/plugins.ts` | 227 |  |
| `src/gateway/server-methods/push.test.ts` | 336 |  |
| `src/gateway/server-methods/push.ts` | 206 |  |
| `src/gateway/server-methods/question.test.ts` | 187 |  |
| `src/gateway/server-methods/question.ts` | 181 |  |
| `src/gateway/server-methods/record-shared.ts` | 11 |  |
| `src/gateway/server-methods/restart-request.ts` | 62 |  |
| `src/gateway/server-methods/restart.test.ts` | 275 |  |
| `src/gateway/server-methods/restart.ts` | 168 |  |
| `src/gateway/server-methods/secrets.test.ts` | 280 |  |
| `src/gateway/server-methods/secrets.ts` | 175 |  |
| `src/gateway/server-methods/send.test.ts` | 3554 | 📊 |
| `src/gateway/server-methods/send.ts` | 1032 | 📊 |
| `src/gateway/server-methods/server-methods.test.ts` | 5638 | 📊 |
| `src/gateway/server-methods/session-active-runs.test.ts` | 71 |  |
| `src/gateway/server-methods/session-active-runs.ts` | 137 |  |
| `src/gateway/server-methods/session-catalog.test.ts` | 579 | 📊 |
| `src/gateway/server-methods/session-catalog.ts` | 379 |  |
| `src/gateway/server-methods/session-change-event.ts` | 72 |  |
| `src/gateway/server-methods/session-create-initial-turn.ts` | 51 |  |
| `src/gateway/server-methods/session-discussion.test.ts` | 126 |  |
| `src/gateway/server-methods/session-discussion.ts` | 103 |  |
| `src/gateway/server-methods/sessions-abort.test.ts` | 245 |  |
| `src/gateway/server-methods/sessions-abort.ts` | 332 |  |
| `src/gateway/server-methods/sessions-compact.ts` | 486 |  |
| `src/gateway/server-methods/sessions-compaction-checkpoints.ts` | 431 |  |
| `src/gateway/server-methods/sessions-compaction-queries.ts` | 107 |  |
| `src/gateway/server-methods/sessions-compaction-runner.ts` | 134 |  |
| `src/gateway/server-methods/sessions-create.ts` | 484 |  |
| `src/gateway/server-methods/sessions-delete.ts` | 433 |  |
| `src/gateway/server-methods/sessions-diff.test.ts` | 300 |  |
| `src/gateway/server-methods/sessions-diff.ts` | 496 |  |
| `src/gateway/server-methods/sessions-dispatch.ts` | 269 |  |
| `src/gateway/server-methods/sessions-files.test.ts` | 1112 | 📊 |
| `src/gateway/server-methods/sessions-files.ts` | 845 | 📊 |
| `src/gateway/server-methods/sessions-groups.ts` | 85 |  |
| `src/gateway/server-methods/sessions-messaging.ts` | 428 |  |
| `src/gateway/server-methods/sessions-mutations.ts` | 418 |  |
| `src/gateway/server-methods/sessions-read.test.ts` | 338 |  |
| `src/gateway/server-methods/sessions-read.ts` | 506 | 📊 |
| `src/gateway/server-methods/sessions-rewind.test.ts` | 403 |  |
| `src/gateway/server-methods/sessions-rewind.ts` | 499 |  |
| `src/gateway/server-methods/sessions-search.test.ts` | 235 |  |
| `src/gateway/server-methods/sessions-shared.ts` | 293 |  |
| `src/gateway/server-methods/sessions-subscriptions.ts` | 177 |  |
| `src/gateway/server-methods/sessions.abort-agent-scope.test.ts` | 577 | 📊 |
| `src/gateway/server-methods/sessions.dispatch.test.ts` | 510 | 📊 |
| `src/gateway/server-methods/sessions.messages-subscribe-approvals.test.ts` | 259 |  |
| `src/gateway/server-methods/sessions.runtime.ts` | 12 |  |
| `src/gateway/server-methods/sessions.send-deleted-agent.test.ts` | 50 |  |
| `src/gateway/server-methods/sessions.send-followup-status.test.ts` | 199 |  |
| `src/gateway/server-methods/sessions.ts` | 32 |  |
| `src/gateway/server-methods/shared-types.ts` | 318 |  |
| `src/gateway/server-methods/skills-method-names.ts` | 28 |  |
| `src/gateway/server-methods/skills-proposal-history.ts` | 44 |  |
| `src/gateway/server-methods/skills-upload.test.ts` | 615 | 📊 |
| `src/gateway/server-methods/skills-upload.ts` | 82 |  |
| `src/gateway/server-methods/skills-workspace-handler.ts` | 72 |  |
| `src/gateway/server-methods/skills.clawhub.test.ts` | 584 | 📊 |
| `src/gateway/server-methods/skills.proposals.test.ts` | 305 |  |
| `src/gateway/server-methods/skills.search-detail.test.ts` | 214 |  |
| `src/gateway/server-methods/skills.test-helpers.ts` | 60 |  |
| `src/gateway/server-methods/skills.ts` | 749 | 📊 |
| `src/gateway/server-methods/skills.update.normalizes-api-key.test.ts` | 198 |  |
| `src/gateway/server-methods/speech-mime.ts` | 35 |  |
| `src/gateway/server-methods/subagent-followup.test-helpers.ts` | 55 |  |
| `src/gateway/server-methods/suspend.test.ts` | 178 |  |
| `src/gateway/server-methods/suspend.ts` | 107 |  |
| `src/gateway/server-methods/system-agent-session-ownership.test.ts` | 356 |  |
| `src/gateway/server-methods/system-agent.test.ts` | 972 | 📊 |
| `src/gateway/server-methods/system-agent.ts` | 709 | 📊 |
| `src/gateway/server-methods/system-changes.test.ts` | 719 | 📊 |
| `src/gateway/server-methods/system-changes.ts` | 635 | 📊 |
| `src/gateway/server-methods/system-event-routing.test.ts` | 168 |  |
| `src/gateway/server-methods/system-info.test.ts` | 56 |  |
| `src/gateway/server-methods/system.ts` | 291 |  |
| `src/gateway/server-methods/talk-client.test.ts` | 282 |  |
| `src/gateway/server-methods/talk-client.ts` | 542 | 📊 |
| `src/gateway/server-methods/talk-session-mark.ts` | 54 |  |
| `src/gateway/server-methods/talk-session.ts` | 709 | 📊 |
| `src/gateway/server-methods/talk-shared.ts` | 501 | 📊 |
| `src/gateway/server-methods/talk.test.ts` | 3589 | 📊 |
| `src/gateway/server-methods/talk.ts` | 895 | 📊 |
| `src/gateway/server-methods/task-suggestions.test.ts` | 417 |  |
| `src/gateway/server-methods/task-suggestions.ts` | 373 |  |
| `src/gateway/server-methods/task-summary.ts` | 84 |  |
| `src/gateway/server-methods/tasks.test.ts` | 482 |  |
| `src/gateway/server-methods/tasks.ts` | 196 |  |
| `src/gateway/server-methods/terminal-open-plan.ts` | 72 |  |
| `src/gateway/server-methods/terminal-upload.ts` | 64 |  |
| `src/gateway/server-methods/terminal.test.ts` | 851 | 📊 |
| `src/gateway/server-methods/terminal.ts` | 535 | 📊 |
| `src/gateway/server-methods/tools-catalog.test.ts` | 297 |  |
| `src/gateway/server-methods/tools-catalog.ts` | 259 |  |
| `src/gateway/server-methods/tools-effective.global-agent.integration.test.ts` | 254 |  |
| `src/gateway/server-methods/tools-effective.runtime.ts` | 27 |  |
| `src/gateway/server-methods/tools-effective.test.ts` | 681 | 📊 |
| `src/gateway/server-methods/tools-effective.ts` | 626 | 📊 |
| `src/gateway/server-methods/tools-invoke.ts` | 97 |  |
| `src/gateway/server-methods/tts.test.ts` | 308 |  |
| `src/gateway/server-methods/tts.ts` | 328 |  |
| `src/gateway/server-methods/types.ts` | 4 |  |
| `src/gateway/server-methods/ui-command.test.ts` | 83 |  |
| `src/gateway/server-methods/ui-command.ts` | 47 |  |
| `src/gateway/server-methods/update.test.ts` | 1078 | 📊 |
| `src/gateway/server-methods/update.ts` | 472 |  |
| `src/gateway/server-methods/usage.cost-usage-cache.test.ts` | 133 |  |
| `src/gateway/server-methods/usage.sessions-usage.test.ts` | 934 | 📊 |
| `src/gateway/server-methods/usage.test.ts` | 901 | 📊 |
| `src/gateway/server-methods/usage.ts` | 1732 | 📊 |
| `src/gateway/server-methods/users.test.ts` | 253 |  |
| `src/gateway/server-methods/users.ts` | 181 |  |
| `src/gateway/server-methods/validation.ts` | 35 |  |
| `src/gateway/server-methods/voicewake-routing.ts` | 50 |  |
| `src/gateway/server-methods/voicewake.ts` | 38 |  |
| `src/gateway/server-methods/web.start.test.ts` | 362 |  |
| `src/gateway/server-methods/web.ts` | 215 |  |
| `src/gateway/server-methods/wizard.ts` | 180 |  |
| `src/gateway/server-methods/workspace-fs.ts` | 249 |  |
| `src/gateway/server-methods/worktrees.test.ts` | 186 |  |
| `src/gateway/server-methods/worktrees.ts` | 168 |  |

## Documentation

- [outline.md](outline.md) - Symbol maps for large files
- [imports.md](imports.md) - Dependencies

---

| High 🔴 | Medium 🟡 | Low 🟢 |
| 0 | 0 | 1 |

## 🟢 Low Priority

### `NOTE` (src/gateway/server-methods/agent-timestamp.ts:61)

> The standard user-turn path no longer calls this. Per-message stamps
