# Module: src/infra/outbound

[← Back to INDEX](../../INDEX.md)

**Type:** implicit | **Files:** 139

## Files

| File | Lines | Large |
| ---- | ----- | ----- |
| `src/infra/outbound/abort.test.ts` | 24 |  |
| `src/infra/outbound/abort.ts` | 11 |  |
| `src/infra/outbound/account-scoped-conversation-bindings.ts` | 356 |  |
| `src/infra/outbound/agent-delivery.target-resolution.test.ts` | 262 |  |
| `src/infra/outbound/agent-delivery.test.ts` | 1002 | 📊 |
| `src/infra/outbound/agent-delivery.ts` | 447 |  |
| `src/infra/outbound/base-session-key.ts` | 28 |  |
| `src/infra/outbound/best-effort-delivery.test.ts` | 88 |  |
| `src/infra/outbound/best-effort-delivery.ts` | 57 |  |
| `src/infra/outbound/bound-delivery-router.test.ts` | 201 |  |
| `src/infra/outbound/bound-delivery-router.ts` | 144 |  |
| `src/infra/outbound/cfg-threading.guard.test.ts` | 298 |  |
| `src/infra/outbound/channel-bootstrap.runtime.test.ts` | 206 |  |
| `src/infra/outbound/channel-bootstrap.runtime.ts` | 127 |  |
| `src/infra/outbound/channel-resolution.test.ts` | 605 | 📊 |
| `src/infra/outbound/channel-resolution.ts` | 263 |  |
| `src/infra/outbound/channel-selection.runtime.ts` | 2 |  |
| `src/infra/outbound/channel-selection.test.ts` | 373 |  |
| `src/infra/outbound/channel-selection.ts` | 301 |  |
| `src/infra/outbound/channel-target-prefix.test.ts` | 21 |  |
| `src/infra/outbound/channel-target-prefix.ts` | 117 |  |
| `src/infra/outbound/channel-target.test.ts` | 74 |  |
| `src/infra/outbound/channel-target.ts` | 51 |  |
| `src/infra/outbound/conversation-delivery.ts` | 252 |  |
| `src/infra/outbound/conversation-id.test.ts` | 86 |  |
| `src/infra/outbound/conversation-id.ts` | 54 |  |
| `src/infra/outbound/current-conversation-bindings.test.ts` | 691 | 📊 |
| `src/infra/outbound/current-conversation-bindings.ts` | 458 |  |
| `src/infra/outbound/deferred-delivery-admission.ts` | 17 |  |
| `src/infra/outbound/deliver-runtime.ts` | 3 |  |
| `src/infra/outbound/deliver-types.ts` | 140 |  |
| `src/infra/outbound/deliver.queue-integration.test.ts` | 312 |  |
| `src/infra/outbound/deliver.test.ts` | 6226 | 📊 |
| `src/infra/outbound/deliver.ts` | 2836 | 📊 |
| `src/infra/outbound/delivery-commit-hooks.ts` | 54 |  |
| `src/infra/outbound/delivery-completion.ts` | 80 |  |
| `src/infra/outbound/delivery-queue-media-directive-durability.test.ts` | 220 |  |
| `src/infra/outbound/delivery-queue-media-spool.crash-child.test-support.ts` | 39 |  |
| `src/infra/outbound/delivery-queue-media-spool.crash.integration.test.ts` | 114 |  |
| `src/infra/outbound/delivery-queue-media-spool.test.ts` | 330 |  |
| `src/infra/outbound/delivery-queue-media-spool.ts` | 289 |  |
| `src/infra/outbound/delivery-queue-media-staging.ts` | 100 |  |
| `src/infra/outbound/delivery-queue-recovery.ts` | 1214 | 📊 |
| `src/infra/outbound/delivery-queue-storage.ts` | 413 |  |
| `src/infra/outbound/delivery-queue.policy.test.ts` | 41 |  |
| `src/infra/outbound/delivery-queue.reconnect-drain.test.ts` | 604 | 📊 |
| `src/infra/outbound/delivery-queue.recovery.test.ts` | 2064 | 📊 |
| `src/infra/outbound/delivery-queue.storage.test.ts` | 573 | 📊 |
| `src/infra/outbound/delivery-queue.test-helpers.ts` | 140 |  |
| `src/infra/outbound/delivery-queue.ts` | 22 |  |
| `src/infra/outbound/directory-cache.test.ts` | 86 |  |
| `src/infra/outbound/directory-cache.ts` | 123 |  |
| `src/infra/outbound/envelope.test.ts` | 80 |  |
| `src/infra/outbound/envelope.ts` | 49 |  |
| `src/infra/outbound/format.test.ts` | 93 |  |
| `src/infra/outbound/format.ts` | 83 |  |
| `src/infra/outbound/formatting.ts` | 15 |  |
| `src/infra/outbound/identity-types.ts` | 7 |  |
| `src/infra/outbound/identity.test.ts` | 108 |  |
| `src/infra/outbound/identity.ts` | 41 |  |
| `src/infra/outbound/internal-source-reply.ts` | 104 |  |
| `src/infra/outbound/message-action-normalization.test.ts` | 349 |  |
| `src/infra/outbound/message-action-normalization.ts` | 116 |  |
| `src/infra/outbound/message-action-param-keys.ts` | 73 |  |
| `src/infra/outbound/message-action-params.test.ts` | 799 | 📊 |
| `src/infra/outbound/message-action-params.ts` | 753 | 📊 |
| `src/infra/outbound/message-action-runner.context.test.ts` | 621 | 📊 |
| `src/infra/outbound/message-action-runner.core-send.test.ts` | 913 | 📊 |
| `src/infra/outbound/message-action-runner.media.test.ts` | 1514 | 📊 |
| `src/infra/outbound/message-action-runner.plugin-dispatch.test.ts` | 3631 | 📊 |
| `src/infra/outbound/message-action-runner.poll.test.ts` | 257 |  |
| `src/infra/outbound/message-action-runner.send-validation.test.ts` | 591 | 📊 |
| `src/infra/outbound/message-action-runner.test-helpers.ts` | 183 |  |
| `src/infra/outbound/message-action-runner.threading.test.ts` | 538 | 📊 |
| `src/infra/outbound/message-action-runner.ts` | 2029 | 📊 |
| `src/infra/outbound/message-action-spec.test.ts` | 140 |  |
| `src/infra/outbound/message-action-spec.ts` | 228 |  |
| `src/infra/outbound/message-action-test-fixtures.ts` | 64 |  |
| `src/infra/outbound/message-action-threading.test-helpers.ts` | 158 |  |
| `src/infra/outbound/message-action-threading.ts` | 235 |  |
| `src/infra/outbound/message-action-tts.ts` | 80 |  |
| `src/infra/outbound/message-gateway-options.test.ts` | 24 |  |
| `src/infra/outbound/message-gateway-options.ts` | 38 |  |
| `src/infra/outbound/message-plan.test.ts` | 114 |  |
| `src/infra/outbound/message-plan.ts` | 192 |  |
| `src/infra/outbound/message.channels.test.ts` | 596 | 📊 |
| `src/infra/outbound/message.config.runtime.ts` | 2 |  |
| `src/infra/outbound/message.gateway.runtime.ts` | 7 |  |
| `src/infra/outbound/message.test.ts` | 680 | 📊 |
| `src/infra/outbound/message.ts` | 619 | 📊 |
| `src/infra/outbound/mirror.ts` | 24 |  |
| `src/infra/outbound/outbound-audit.test.ts` | 353 |  |
| `src/infra/outbound/outbound-audit.ts` | 456 |  |
| `src/infra/outbound/outbound-policy.test.ts` | 358 |  |
| `src/infra/outbound/outbound-policy.ts` | 364 |  |
| `src/infra/outbound/outbound-send-service.test.ts` | 1238 | 📊 |
| `src/infra/outbound/outbound-send-service.ts` | 526 | 📊 |
| `src/infra/outbound/outbound-session.integration.test.ts` | 116 |  |
| `src/infra/outbound/outbound-session.test-helpers.ts` | 623 | 📊 |
| `src/infra/outbound/outbound-session.test.ts` | 648 | 📊 |
| `src/infra/outbound/outbound-session.ts` | 288 |  |
| `src/infra/outbound/outbound.test.ts` | 59 |  |
| `src/infra/outbound/payloads.test.ts` | 782 | 📊 |
| `src/infra/outbound/payloads.ts` | 451 |  |
| `src/infra/outbound/protocol-scaffolding.ts` | 95 |  |
| `src/infra/outbound/reply-payload-normalize.ts` | 65 |  |
| `src/infra/outbound/reply-policy.test.ts` | 36 |  |
| `src/infra/outbound/reply-policy.ts` | 89 |  |
| `src/infra/outbound/sanitize-text.test.ts` | 263 |  |
| `src/infra/outbound/sanitize-text.ts` | 58 |  |
| `src/infra/outbound/send-deps.ts` | 59 |  |
| `src/infra/outbound/session-binding-normalization.ts` | 57 |  |
| `src/infra/outbound/session-binding-service.test.ts` | 639 | 📊 |
| `src/infra/outbound/session-binding-service.ts` | 409 |  |
| `src/infra/outbound/session-binding.types.ts` | 77 |  |
| `src/infra/outbound/session-context.test.ts` | 219 |  |
| `src/infra/outbound/session-context.ts` | 138 |  |
| `src/infra/outbound/source-delivery-plan.test.ts` | 315 |  |
| `src/infra/outbound/source-delivery-plan.ts` | 269 |  |
| `src/infra/outbound/source-reply-mirror.test.ts` | 61 |  |
| `src/infra/outbound/source-reply-mirror.ts` | 435 |  |
| `src/infra/outbound/target-errors.test.ts` | 72 |  |
| `src/infra/outbound/target-errors.ts` | 61 |  |
| `src/infra/outbound/target-id-resolution.ts` | 34 |  |
| `src/infra/outbound/target-normalization.test.ts` | 352 |  |
| `src/infra/outbound/target-normalization.ts` | 282 |  |
| `src/infra/outbound/target-resolver.test.ts` | 690 | 📊 |
| `src/infra/outbound/target-resolver.ts` | 592 | 📊 |
| `src/infra/outbound/targets-loaded.test.ts` | 57 |  |
| `src/infra/outbound/targets-loaded.ts` | 36 |  |
| `src/infra/outbound/targets-resolve-shared.ts` | 117 |  |
| `src/infra/outbound/targets-session.ts` | 204 |  |
| `src/infra/outbound/targets.runtime.ts` | 2 |  |
| `src/infra/outbound/targets.shared-test.ts` | 203 |  |
| `src/infra/outbound/targets.test-helpers.ts` | 229 |  |
| `src/infra/outbound/targets.test.ts` | 1801 | 📊 |
| `src/infra/outbound/targets.ts` | 554 | 📊 |
| `src/infra/outbound/thread-id.test.ts` | 18 |  |
| `src/infra/outbound/thread-id.ts` | 8 |  |

## Documentation

- [outline.md](outline.md) - Symbol maps for large files
- [memory.md](memory.md) - Warnings and TODOs
- [imports.md](imports.md) - Dependencies
