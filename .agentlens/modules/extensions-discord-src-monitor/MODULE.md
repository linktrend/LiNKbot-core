# Module: extensions/discord/src/monitor

[← Back to INDEX](../../INDEX.md)

**Type:** implicit | **Files:** 240

## Files

| File | Lines | Large |
| ---- | ----- | ----- |
| `extensions/discord/src/monitor/ack-reactions.ts` | 71 |  |
| `extensions/discord/src/monitor/acp-bind-here.integration.test.ts` | 220 |  |
| `extensions/discord/src/monitor/agent-components-auth.ts` | 8 |  |
| `extensions/discord/src/monitor/agent-components-context.ts` | 155 |  |
| `extensions/discord/src/monitor/agent-components-data.ts` | 217 |  |
| `extensions/discord/src/monitor/agent-components-dm-auth.ts` | 179 |  |
| `extensions/discord/src/monitor/agent-components-guild-auth.ts` | 323 |  |
| `extensions/discord/src/monitor/agent-components-helpers.runtime.ts` | 4 |  |
| `extensions/discord/src/monitor/agent-components-helpers.ts` | 30 |  |
| `extensions/discord/src/monitor/agent-components-reply.ts` | 11 |  |
| `extensions/discord/src/monitor/agent-components.deps.runtime.ts` | 3 |  |
| `extensions/discord/src/monitor/agent-components.dispatch.ts` | 348 |  |
| `extensions/discord/src/monitor/agent-components.handlers.ts` | 317 |  |
| `extensions/discord/src/monitor/agent-components.modal.ts` | 161 |  |
| `extensions/discord/src/monitor/agent-components.plugin-interactive.ts` | 186 |  |
| `extensions/discord/src/monitor/agent-components.runtime.ts` | 15 |  |
| `extensions/discord/src/monitor/agent-components.system-controls.ts` | 180 |  |
| `extensions/discord/src/monitor/agent-components.ts` | 63 |  |
| `extensions/discord/src/monitor/agent-components.types.ts` | 59 |  |
| `extensions/discord/src/monitor/agent-components.wildcard-controls.ts` | 172 |  |
| `extensions/discord/src/monitor/agent-components.wildcard.test.ts` | 102 |  |
| `extensions/discord/src/monitor/allow-list.test.ts` | 15 |  |
| `extensions/discord/src/monitor/allow-list.ts` | 664 | 📊 |
| `extensions/discord/src/monitor/auto-presence.test.ts` | 186 |  |
| `extensions/discord/src/monitor/auto-presence.ts` | 357 |  |
| `extensions/discord/src/monitor/channel-access.test.ts` | 117 |  |
| `extensions/discord/src/monitor/channel-access.ts` | 103 |  |
| `extensions/discord/src/monitor/commands.test.ts` | 25 |  |
| `extensions/discord/src/monitor/commands.ts` | 10 |  |
| `extensions/discord/src/monitor/dm-command-auth.test.ts` | 293 |  |
| `extensions/discord/src/monitor/dm-command-auth.ts` | 260 |  |
| `extensions/discord/src/monitor/dm-command-decision.test.ts` | 109 |  |
| `extensions/discord/src/monitor/dm-command-decision.ts` | 51 |  |
| `extensions/discord/src/monitor/exec-approvals.test.ts` | 325 |  |
| `extensions/discord/src/monitor/exec-approvals.ts` | 219 |  |
| `extensions/discord/src/monitor/format.ts` | 46 |  |
| `extensions/discord/src/monitor/gateway-handle.ts` | 35 |  |
| `extensions/discord/src/monitor/gateway-metadata.test.ts` | 228 |  |
| `extensions/discord/src/monitor/gateway-metadata.ts` | 323 |  |
| `extensions/discord/src/monitor/gateway-plugin.test.ts` | 378 |  |
| `extensions/discord/src/monitor/gateway-plugin.ts` | 427 |  |
| `extensions/discord/src/monitor/gateway-registry.ts` | 38 |  |
| `extensions/discord/src/monitor/gateway-supervisor.test.ts` | 173 |  |
| `extensions/discord/src/monitor/gateway-supervisor.ts` | 240 |  |
| `extensions/discord/src/monitor/inbound-context.test-helpers.ts` | 38 |  |
| `extensions/discord/src/monitor/inbound-context.test.ts` | 113 |  |
| `extensions/discord/src/monitor/inbound-context.ts` | 103 |  |
| `extensions/discord/src/monitor/inbound-job.test.ts` | 230 |  |
| `extensions/discord/src/monitor/inbound-job.ts` | 127 |  |
| `extensions/discord/src/monitor/ingress.test.ts` | 257 |  |
| `extensions/discord/src/monitor/ingress.ts` | 188 |  |
| `extensions/discord/src/monitor/listeners.presence.test.ts` | 1011 | 📊 |
| `extensions/discord/src/monitor/listeners.queue.ts` | 92 |  |
| `extensions/discord/src/monitor/listeners.reactions.ts` | 593 | 📊 |
| `extensions/discord/src/monitor/listeners.test.ts` | 208 |  |
| `extensions/discord/src/monitor/listeners.ts` | 515 | 📊 |
| `extensions/discord/src/monitor/message-channel-info-state.ts` | 13 |  |
| `extensions/discord/src/monitor/message-channel-info.test-support.ts` | 5 |  |
| `extensions/discord/src/monitor/message-channel-info.ts` | 102 |  |
| `extensions/discord/src/monitor/message-dispatcher.ts` | 410 |  |
| `extensions/discord/src/monitor/message-forwarded.ts` | 115 |  |
| `extensions/discord/src/monitor/message-handler.batch-gate.test.ts` | 23 |  |
| `extensions/discord/src/monitor/message-handler.batch-gate.ts` | 20 |  |
| `extensions/discord/src/monitor/message-handler.bot-self-filter.test.ts` | 73 |  |
| `extensions/discord/src/monitor/message-handler.context.test.ts` | 55 |  |
| `extensions/discord/src/monitor/message-handler.context.ts` | 500 |  |
| `extensions/discord/src/monitor/message-handler.dm-preflight.ts` | 121 |  |
| `extensions/discord/src/monitor/message-handler.draft-preview.ts` | 400 |  |
| `extensions/discord/src/monitor/message-handler.hydration.test.ts` | 260 |  |
| `extensions/discord/src/monitor/message-handler.hydration.ts` | 255 |  |
| `extensions/discord/src/monitor/message-handler.inbound-context.test.ts` | 62 |  |
| `extensions/discord/src/monitor/message-handler.module-test-helpers.ts` | 31 |  |
| `extensions/discord/src/monitor/message-handler.preflight-channel-access.ts` | 87 |  |
| `extensions/discord/src/monitor/message-handler.preflight-channel-context.test.ts` | 19 |  |
| `extensions/discord/src/monitor/message-handler.preflight-channel-context.ts` | 59 |  |
| `extensions/discord/src/monitor/message-handler.preflight-context.ts` | 57 |  |
| `extensions/discord/src/monitor/message-handler.preflight-helpers.ts` | 159 |  |
| `extensions/discord/src/monitor/message-handler.preflight-history.ts` | 24 |  |
| `extensions/discord/src/monitor/message-handler.preflight-logging.ts` | 37 |  |
| `extensions/discord/src/monitor/message-handler.preflight-pluralkit.ts` | 30 |  |
| `extensions/discord/src/monitor/message-handler.preflight-runtime.ts` | 15 |  |
| `extensions/discord/src/monitor/message-handler.preflight-thread.ts` | 50 |  |
| `extensions/discord/src/monitor/message-handler.preflight.acp-bindings.test.ts` | 374 |  |
| `extensions/discord/src/monitor/message-handler.preflight.test-helpers.ts` | 115 |  |
| `extensions/discord/src/monitor/message-handler.preflight.test.ts` | 2422 | 📊 |
| `extensions/discord/src/monitor/message-handler.preflight.ts` | 878 | 📊 |
| `extensions/discord/src/monitor/message-handler.preflight.types.ts` | 120 |  |
| `extensions/discord/src/monitor/message-handler.process-progress.ts` | 341 |  |
| `extensions/discord/src/monitor/message-handler.process-reactions.ts` | 284 |  |
| `extensions/discord/src/monitor/message-handler.process-reply-runtime.ts` | 169 |  |
| `extensions/discord/src/monitor/message-handler.process.abort-retry.test.ts` | 206 |  |
| `extensions/discord/src/monitor/message-handler.process.abort-skip.test.ts` | 65 |  |
| `extensions/discord/src/monitor/message-handler.process.ack.test.ts` | 582 | 📊 |
| `extensions/discord/src/monitor/message-handler.process.draft-final.test.ts` | 592 | 📊 |
| `extensions/discord/src/monitor/message-handler.process.draft-progress.test.ts` | 589 | 📊 |
| `extensions/discord/src/monitor/message-handler.process.draft-reasoning.test.ts` | 628 | 📊 |
| `extensions/discord/src/monitor/message-handler.process.draft-recovery.test.ts` | 597 | 📊 |
| `extensions/discord/src/monitor/message-handler.process.room-events.test.ts` | 406 |  |
| `extensions/discord/src/monitor/message-handler.process.session-routing.test.ts` | 416 |  |
| `extensions/discord/src/monitor/message-handler.process.test-harness.ts` | 673 | 📊 |
| `extensions/discord/src/monitor/message-handler.process.test-helpers.ts` | 224 |  |
| `extensions/discord/src/monitor/message-handler.process.ts` | 708 | 📊 |
| `extensions/discord/src/monitor/message-handler.queue.test.ts` | 659 | 📊 |
| `extensions/discord/src/monitor/message-handler.retry.ts` | 56 |  |
| `extensions/discord/src/monitor/message-handler.routing-preflight.ts` | 109 |  |
| `extensions/discord/src/monitor/message-handler.test-harness.ts` | 101 |  |
| `extensions/discord/src/monitor/message-handler.test-helpers.ts` | 82 |  |
| `extensions/discord/src/monitor/message-handler.ts` | 51 |  |
| `extensions/discord/src/monitor/message-media.ts` | 589 | 📊 |
| `extensions/discord/src/monitor/message-run-queue.ts` | 145 |  |
| `extensions/discord/src/monitor/message-text.ts` | 172 |  |
| `extensions/discord/src/monitor/message-utils.test.ts` | 1490 | 📊 |
| `extensions/discord/src/monitor/message-utils.ts` | 20 |  |
| `extensions/discord/src/monitor/model-picker-preferences-migrations.test.ts` | 321 |  |
| `extensions/discord/src/monitor/model-picker-preferences-migrations.ts` | 272 |  |
| `extensions/discord/src/monitor/model-picker-preferences.test.ts` | 206 |  |
| `extensions/discord/src/monitor/model-picker-preferences.ts` | 241 |  |
| `extensions/discord/src/monitor/model-picker.state.ts` | 636 | 📊 |
| `extensions/discord/src/monitor/model-picker.test-utils.ts` | 27 |  |
| `extensions/discord/src/monitor/model-picker.test.ts` | 1412 | 📊 |
| `extensions/discord/src/monitor/model-picker.view.ts` | 1015 | 📊 |
| `extensions/discord/src/monitor/monitor.agent-components.test.ts` | 383 |  |
| `extensions/discord/src/monitor/monitor.test.ts` | 1026 | 📊 |
| `extensions/discord/src/monitor/monitor.threading-utils.test.ts` | 620 | 📊 |
| `extensions/discord/src/monitor/native-command-agent-reply.ts` | 126 |  |
| `extensions/discord/src/monitor/native-command-arg-ui.ts` | 223 |  |
| `extensions/discord/src/monitor/native-command-auth.ts` | 360 |  |
| `extensions/discord/src/monitor/native-command-bypass.ts` | 14 |  |
| `extensions/discord/src/monitor/native-command-context.test.ts` | 106 |  |
| `extensions/discord/src/monitor/native-command-context.ts` | 110 |  |
| `extensions/discord/src/monitor/native-command-dispatch.ts` | 36 |  |
| `extensions/discord/src/monitor/native-command-model-picker-apply.ts` | 236 |  |
| `extensions/discord/src/monitor/native-command-model-picker-interaction.ts` | 783 | 📊 |
| `extensions/discord/src/monitor/native-command-model-picker-ui.ts` | 392 |  |
| `extensions/discord/src/monitor/native-command-reply.test.ts` | 69 |  |
| `extensions/discord/src/monitor/native-command-reply.ts` | 186 |  |
| `extensions/discord/src/monitor/native-command-route.ts` | 92 |  |
| `extensions/discord/src/monitor/native-command-status.ts` | 77 |  |
| `extensions/discord/src/monitor/native-command-ui.ts` | 18 |  |
| `extensions/discord/src/monitor/native-command-ui.types.ts` | 21 |  |
| `extensions/discord/src/monitor/native-command.args.ts` | 46 |  |
| `extensions/discord/src/monitor/native-command.command-arg.test.ts` | 107 |  |
| `extensions/discord/src/monitor/native-command.commands-allowfrom.test.ts` | 535 | 📊 |
| `extensions/discord/src/monitor/native-command.model-picker.test.ts` | 1241 | 📊 |
| `extensions/discord/src/monitor/native-command.options.test.ts` | 725 | 📊 |
| `extensions/discord/src/monitor/native-command.options.ts` | 178 |  |
| `extensions/discord/src/monitor/native-command.plugin-dispatch.test.ts` | 1395 | 📊 |
| `extensions/discord/src/monitor/native-command.runtime.ts` | 15 |  |
| `extensions/discord/src/monitor/native-command.status-direct.test.ts` | 277 |  |
| `extensions/discord/src/monitor/native-command.test-helpers.ts` | 65 |  |
| `extensions/discord/src/monitor/native-command.think-autocomplete.test.ts` | 486 |  |
| `extensions/discord/src/monitor/native-command.ts` | 745 | 📊 |
| `extensions/discord/src/monitor/native-command.types.ts` | 10 |  |
| `extensions/discord/src/monitor/native-interaction-channel-context.ts` | 51 |  |
| `extensions/discord/src/monitor/preflight-audio.runtime.ts` | 10 |  |
| `extensions/discord/src/monitor/preflight-audio.test.ts` | 158 |  |
| `extensions/discord/src/monitor/preflight-audio.ts` | 127 |  |
| `extensions/discord/src/monitor/presence-cache.ts` | 62 |  |
| `extensions/discord/src/monitor/presence-cooldown-store.test.ts` | 22 |  |
| `extensions/discord/src/monitor/presence-cooldown-store.ts` | 15 |  |
| `extensions/discord/src/monitor/presence-emission-gate.test.ts` | 178 |  |
| `extensions/discord/src/monitor/presence-emission-gate.ts` | 135 |  |
| `extensions/discord/src/monitor/presence-events.test.ts` | 115 |  |
| `extensions/discord/src/monitor/presence-events.ts` | 58 |  |
| `extensions/discord/src/monitor/presence-transition-cache.test.ts` | 63 |  |
| `extensions/discord/src/monitor/presence-transition-cache.ts` | 63 |  |
| `extensions/discord/src/monitor/presence.test.ts` | 67 |  |
| `extensions/discord/src/monitor/presence.ts` | 51 |  |
| `extensions/discord/src/monitor/provider-runtime.ts` | 64 |  |
| `extensions/discord/src/monitor/provider-session.runtime.ts` | 13 |  |
| `extensions/discord/src/monitor/provider.acp.ts` | 105 |  |
| `extensions/discord/src/monitor/provider.allowlist.test.ts` | 219 |  |
| `extensions/discord/src/monitor/provider.allowlist.ts` | 402 |  |
| `extensions/discord/src/monitor/provider.cleanup.ts` | 42 |  |
| `extensions/discord/src/monitor/provider.commands.ts` | 121 |  |
| `extensions/discord/src/monitor/provider.config-log.ts` | 46 |  |
| `extensions/discord/src/monitor/provider.deploy-errors.ts` | 384 |  |
| `extensions/discord/src/monitor/provider.deploy.test.ts` | 136 |  |
| `extensions/discord/src/monitor/provider.deploy.ts` | 221 |  |
| `extensions/discord/src/monitor/provider.interactions.ts` | 199 |  |
| `extensions/discord/src/monitor/provider.lifecycle.test.ts` | 720 | 📊 |
| `extensions/discord/src/monitor/provider.lifecycle.ts` | 579 | 📊 |
| `extensions/discord/src/monitor/provider.proxy.test.ts` | 916 | 📊 |
| `extensions/discord/src/monitor/provider.rest-proxy.test.ts` | 404 |  |
| `extensions/discord/src/monitor/provider.runtime.ts` | 2 |  |
| `extensions/discord/src/monitor/provider.skill-dedupe.test.ts` | 38 |  |
| `extensions/discord/src/monitor/provider.startup-log.ts` | 33 |  |
| `extensions/discord/src/monitor/provider.startup.test.ts` | 474 |  |
| `extensions/discord/src/monitor/provider.startup.ts` | 333 |  |
| `extensions/discord/src/monitor/provider.test-support.ts` | 57 |  |
| `extensions/discord/src/monitor/provider.test.ts` | 1227 | 📊 |
| `extensions/discord/src/monitor/provider.ts` | 522 | 📊 |
| `extensions/discord/src/monitor/questions.test.ts` | 94 |  |
| `extensions/discord/src/monitor/questions.ts` | 99 |  |
| `extensions/discord/src/monitor/reply-context.ts` | 65 |  |
| `extensions/discord/src/monitor/reply-delivery.test.ts` | 616 | 📊 |
| `extensions/discord/src/monitor/reply-delivery.ts` | 273 |  |
| `extensions/discord/src/monitor/reply-safety.ts` | 94 |  |
| `extensions/discord/src/monitor/reply-typing-feedback.ts` | 42 |  |
| `extensions/discord/src/monitor/rest-fetch.ts` | 94 |  |
| `extensions/discord/src/monitor/route-resolution.test.ts` | 215 |  |
| `extensions/discord/src/monitor/route-resolution.ts` | 141 |  |
| `extensions/discord/src/monitor/sender-identity.ts` | 82 |  |
| `extensions/discord/src/monitor/startup-status.test.ts` | 31 |  |
| `extensions/discord/src/monitor/startup-status.ts` | 11 |  |
| `extensions/discord/src/monitor/status.ts` | 23 |  |
| `extensions/discord/src/monitor/system-events.ts` | 56 |  |
| `extensions/discord/src/monitor/thread-bindings.config.ts` | 36 |  |
| `extensions/discord/src/monitor/thread-bindings.discord-api.test.ts` | 260 |  |
| `extensions/discord/src/monitor/thread-bindings.discord-api.ts` | 305 |  |
| `extensions/discord/src/monitor/thread-bindings.lifecycle.test.ts` | 1915 | 📊 |
| `extensions/discord/src/monitor/thread-bindings.lifecycle.ts` | 332 |  |
| `extensions/discord/src/monitor/thread-bindings.manager.ts` | 556 | 📊 |
| `extensions/discord/src/monitor/thread-bindings.messages.ts` | 7 |  |
| `extensions/discord/src/monitor/thread-bindings.persona.test.ts` | 40 |  |
| `extensions/discord/src/monitor/thread-bindings.persona.ts` | 27 |  |
| `extensions/discord/src/monitor/thread-bindings.session-adapter.ts` | 230 |  |
| `extensions/discord/src/monitor/thread-bindings.session-shared.ts` | 60 |  |
| `extensions/discord/src/monitor/thread-bindings.session-updates.ts` | 36 |  |
| `extensions/discord/src/monitor/thread-bindings.shared-state.test.ts` | 40 |  |
| `extensions/discord/src/monitor/thread-bindings.state.ts` | 507 | 📊 |
| `extensions/discord/src/monitor/thread-bindings.ts` | 48 |  |
| `extensions/discord/src/monitor/thread-bindings.types.ts` | 73 |  |
| `extensions/discord/src/monitor/thread-channel-context.ts` | 113 |  |
| `extensions/discord/src/monitor/thread-session-close.test.ts` | 240 |  |
| `extensions/discord/src/monitor/thread-session-close.ts` | 64 |  |
| `extensions/discord/src/monitor/thread-title.generate.test.ts` | 308 |  |
| `extensions/discord/src/monitor/thread-title.ts` | 206 |  |
| `extensions/discord/src/monitor/threading.auto-thread.test.ts` | 396 |  |
| `extensions/discord/src/monitor/threading.auto-thread.ts` | 310 |  |
| `extensions/discord/src/monitor/threading.cache.ts` | 46 |  |
| `extensions/discord/src/monitor/threading.parent-info.test.ts` | 157 |  |
| `extensions/discord/src/monitor/threading.starter.test.ts` | 280 |  |
| `extensions/discord/src/monitor/threading.starter.ts` | 289 |  |
| `extensions/discord/src/monitor/threading.ts` | 21 |  |
| `extensions/discord/src/monitor/threading.types.ts` | 103 |  |
| `extensions/discord/src/monitor/timeouts.test.ts` | 134 |  |
| `extensions/discord/src/monitor/timeouts.ts` | 140 |  |
| `extensions/discord/src/monitor/typing.test.ts` | 40 |  |
| `extensions/discord/src/monitor/typing.ts` | 18 |  |

## Documentation

- [outline.md](outline.md) - Symbol maps for large files
- [imports.md](imports.md) - Dependencies
