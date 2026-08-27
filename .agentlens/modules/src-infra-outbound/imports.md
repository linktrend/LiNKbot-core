# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    src_infra_outbound[src-infra-outbound] --> schema[schema]
    src_infra_outbound[src-infra-outbound] --> src[src]
    src_infra_outbound[src-infra-outbound] --> src[src]
    src_infra_outbound[src-infra-outbound] --> infra[infra]
    src_infra_outbound[src-infra-outbound] --> helpers[helpers]
    src_infra_outbound[src-infra-outbound] --> acp[acp]
    src_infra_outbound[src-infra-outbound] --> agents[agents]
    src_infra_outbound[src-infra-outbound] --> agents[agents]
    src_infra_outbound[src-infra-outbound] --> agents[agents]
    src_infra_outbound[src-infra-outbound] --> agents[agents]
    src_infra_outbound[src-infra-outbound] --> tools[tools]
    src_infra_outbound[src-infra-outbound] --> audit[audit]
    src_infra_outbound[src-infra-outbound] --> audit[audit]
    src_infra_outbound[src-infra-outbound] --> auto_reply[auto-reply]
    src_infra_outbound[src-infra-outbound] --> reply[reply]
    src_infra_outbound[src-infra-outbound] --> reply[reply]
    src_infra_outbound[src-infra-outbound] --> reply[reply]
    src_infra_outbound[src-infra-outbound] --> reply[reply]
    src_infra_outbound[src-infra-outbound] --> reply[reply]
    src_infra_outbound[src-infra-outbound] --> channels[channels]
    src_infra_outbound[src-infra-outbound] --> channels[channels]
    src_infra_outbound[src-infra-outbound] --> channels[channels]
    src_infra_outbound[src-infra-outbound] --> message[message]
    src_infra_outbound[src-infra-outbound] --> message[message]
    src_infra_outbound[src-infra-outbound] --> message[message]
    src_infra_outbound[src-infra-outbound] --> message[message]
    src_infra_outbound[src-infra-outbound] --> message[message]
    src_infra_outbound[src-infra-outbound] --> plugins[plugins]
    src_infra_outbound[src-infra-outbound] --> plugins[plugins]
    src_infra_outbound[src-infra-outbound] --> plugins[plugins]
    src_infra_outbound[src-infra-outbound] --> plugins[plugins]
    src_infra_outbound[src-infra-outbound] --> plugins[plugins]
    src_infra_outbound[src-infra-outbound] --> plugins[plugins]
    src_infra_outbound[src-infra-outbound] --> outbound[outbound]
    src_infra_outbound[src-infra-outbound] --> outbound[outbound]
    src_infra_outbound[src-infra-outbound] --> plugins[plugins]
    src_infra_outbound[src-infra-outbound] --> plugins[plugins]
    src_infra_outbound[src-infra-outbound] --> channels[channels]
    src_infra_outbound[src-infra-outbound] --> channels[channels]
    src_infra_outbound[src-infra-outbound] --> channels[channels]
    src_infra_outbound[src-infra-outbound] --> cli[cli]
    src_infra_outbound[src-infra-outbound] --> config[config]
    src_infra_outbound[src-infra-outbound] --> config[config]
    src_infra_outbound[src-infra-outbound] --> config[config]
    src_infra_outbound[src-infra-outbound] --> config[config]
    src_infra_outbound[src-infra-outbound] --> config[config]
    src_infra_outbound[src-infra-outbound] --> sessions[sessions]
    src_infra_outbound[src-infra-outbound] --> sessions[sessions]
    src_infra_outbound[src-infra-outbound] --> sessions[sessions]
    src_infra_outbound[src-infra-outbound] --> sessions[sessions]
    src_infra_outbound[src-infra-outbound] --> sessions[sessions]
    src_infra_outbound[src-infra-outbound] --> sessions[sessions]
    src_infra_outbound[src-infra-outbound] --> sessions[sessions]
    src_infra_outbound[src-infra-outbound] --> sessions[sessions]
    src_infra_outbound[src-infra-outbound] --> hooks[hooks]
    src_infra_outbound[src-infra-outbound] --> hooks[hooks]
    src_infra_outbound[src-infra-outbound] --> hooks[hooks]
    src_infra_outbound[src-infra-outbound] --> infra[infra]
    src_infra_outbound[src-infra-outbound] --> infra[infra]
    src_infra_outbound[src-infra-outbound] --> interactive[interactive]
    src_infra_outbound[src-infra-outbound] --> logging[logging]
    src_infra_outbound[src-infra-outbound] --> media[media]
    src_infra_outbound[src-infra-outbound] --> media[media]
    src_infra_outbound[src-infra-outbound] --> media[media]
    src_infra_outbound[src-infra-outbound] --> media[media]
    src_infra_outbound[src-infra-outbound] --> media[media]
    src_infra_outbound[src-infra-outbound] --> media[media]
    src_infra_outbound[src-infra-outbound] --> media[media]
    src_infra_outbound[src-infra-outbound] --> __[..]
    src_infra_outbound[src-infra-outbound] --> plugin_sdk[plugin-sdk]
    src_infra_outbound[src-infra-outbound] --> plugin_sdk[plugin-sdk]
    src_infra_outbound[src-infra-outbound] --> plugin_sdk[plugin-sdk]
    src_infra_outbound[src-infra-outbound] --> plugin_sdk[plugin-sdk]
    src_infra_outbound[src-infra-outbound] --> plugin_sdk[plugin-sdk]
    src_infra_outbound[src-infra-outbound] --> plugins[plugins]
    src_infra_outbound[src-infra-outbound] --> plugins[plugins]
    src_infra_outbound[src-infra-outbound] --> plugins[plugins]
    src_infra_outbound[src-infra-outbound] --> plugins[plugins]
    src_infra_outbound[src-infra-outbound] --> plugins[plugins]
    src_infra_outbound[src-infra-outbound] --> plugins[plugins]
    src_infra_outbound[src-infra-outbound] --> plugins[plugins]
    src_infra_outbound[src-infra-outbound] --> plugins[plugins]
    src_infra_outbound[src-infra-outbound] --> plugins[plugins]
    src_infra_outbound[src-infra-outbound] --> __[..]
    src_infra_outbound[src-infra-outbound] --> __[..]
    src_infra_outbound[src-infra-outbound] --> routing[routing]
    src_infra_outbound[src-infra-outbound] --> routing[routing]
    src_infra_outbound[src-infra-outbound] --> routing[routing]
    src_infra_outbound[src-infra-outbound] --> routing[routing]
    src_infra_outbound[src-infra-outbound] --> routing[routing]
    src_infra_outbound[src-infra-outbound] --> __[..]
    src_infra_outbound[src-infra-outbound] --> sessions[sessions]
    src_infra_outbound[src-infra-outbound] --> shared[shared]
    src_infra_outbound[src-infra-outbound] --> shared[shared]
    src_infra_outbound[src-infra-outbound] --> shared[shared]
    src_infra_outbound[src-infra-outbound] --> shared[shared]
    src_infra_outbound[src-infra-outbound] --> shared[shared]
    src_infra_outbound[src-infra-outbound] --> text[text]
    src_infra_outbound[src-infra-outbound] --> text[text]
    src_infra_outbound[src-infra-outbound] --> state[state]
    src_infra_outbound[src-infra-outbound] --> state[state]
    src_infra_outbound[src-infra-outbound] --> test_utils[test-utils]
    src_infra_outbound[src-infra-outbound] --> test_utils[test-utils]
    src_infra_outbound[src-infra-outbound] --> test_utils[test-utils]
    src_infra_outbound[src-infra-outbound] --> test_utils[test-utils]
    src_infra_outbound[src-infra-outbound] --> test_utils[test-utils]
    src_infra_outbound[src-infra-outbound] --> test_utils[test-utils]
    src_infra_outbound[src-infra-outbound] --> test_utils[test-utils]
    src_infra_outbound[src-infra-outbound] --> tts[tts]
    src_infra_outbound[src-infra-outbound] --> utils[utils]
    src_infra_outbound[src-infra-outbound] --> utils[utils]
    src_infra_outbound[src-infra-outbound] --> utils[utils]
    src_infra_outbound[src-infra-outbound] --> utils[utils]
    src_infra_outbound[src-infra-outbound] --> utils[utils]
    src_infra_outbound[src-infra-outbound] --> utils[utils]
    src_infra_outbound[src-infra-outbound] --> utils[utils]
    src_infra_outbound[src-infra-outbound] --> __[..]
    src_infra_outbound[src-infra-outbound] --> __[..]
    src_infra_outbound[src-infra-outbound] --> __[..]
    src_infra_outbound[src-infra-outbound] --> __[..]
    src_infra_outbound[src-infra-outbound] --> __[..]
    src_infra_outbound[src-infra-outbound] --> __[..]
    src_infra_outbound[src-infra-outbound] --> __[..]
    src_infra_outbound[src-infra-outbound] --> __[..]
    src_infra_outbound[src-infra-outbound] --> __[..]
    src_infra_outbound[src-infra-outbound] --> __[..]
    src_infra_outbound[src-infra-outbound] --> __[..]
    src_infra_outbound[src-infra-outbound] --> __[..]
    src_infra_outbound[src-infra-outbound] --> __[..]
    src_infra_outbound[src-infra-outbound] --> _[.]
    src_infra_outbound[src-infra-outbound] --> _[.]
    src_infra_outbound[src-infra-outbound] --> _[.]
    src_infra_outbound[src-infra-outbound] --> _[.]
    src_infra_outbound[src-infra-outbound] --> _[.]
    src_infra_outbound[src-infra-outbound] --> _[.]
    src_infra_outbound[src-infra-outbound] --> _[.]
    src_infra_outbound[src-infra-outbound] --> _[.]
    src_infra_outbound[src-infra-outbound] --> _[.]
    src_infra_outbound[src-infra-outbound] --> _[.]
    src_infra_outbound[src-infra-outbound] --> _[.]
    src_infra_outbound[src-infra-outbound] --> _[.]
    src_infra_outbound[src-infra-outbound] --> _[.]
    src_infra_outbound[src-infra-outbound] --> _[.]
    src_infra_outbound[src-infra-outbound] --> _[.]
    src_infra_outbound[src-infra-outbound] --> _[.]
    src_infra_outbound[src-infra-outbound] --> _[.]
    src_infra_outbound[src-infra-outbound] --> _[.]
    src_infra_outbound[src-infra-outbound] --> _[.]
    src_infra_outbound[src-infra-outbound] --> _[.]
    src_infra_outbound[src-infra-outbound] --> _[.]
    src_infra_outbound[src-infra-outbound] --> _[.]
    src_infra_outbound[src-infra-outbound] --> _[.]
    src_infra_outbound[src-infra-outbound] --> _[.]
    src_infra_outbound[src-infra-outbound] --> _[.]
    src_infra_outbound[src-infra-outbound] --> _[.]
    src_infra_outbound[src-infra-outbound] --> _[.]
    src_infra_outbound[src-infra-outbound] --> _[.]
    src_infra_outbound[src-infra-outbound] --> _[.]
    src_infra_outbound[src-infra-outbound] --> _[.]
    src_infra_outbound[src-infra-outbound] --> _[.]
    src_infra_outbound[src-infra-outbound] --> _[.]
    src_infra_outbound[src-infra-outbound] --> _[.]
    src_infra_outbound[src-infra-outbound] --> _[.]
    src_infra_outbound[src-infra-outbound] --> _[.]
    src_infra_outbound[src-infra-outbound] --> _[.]
    src_infra_outbound[src-infra-outbound] --> _[.]
    src_infra_outbound[src-infra-outbound] --> _[.]
    src_infra_outbound[src-infra-outbound] --> _[.]
    src_infra_outbound[src-infra-outbound] --> _[.]
    src_infra_outbound[src-infra-outbound] --> _[.]
    src_infra_outbound[src-infra-outbound] --> _[.]
    src_infra_outbound[src-infra-outbound] --> _[.]
    src_infra_outbound[src-infra-outbound] --> _[.]
    src_infra_outbound[src-infra-outbound] --> _[.]
    src_infra_outbound[src-infra-outbound] --> _[.]
    src_infra_outbound[src-infra-outbound] --> _[.]
    src_infra_outbound[src-infra-outbound] --> _[.]
    src_infra_outbound[src-infra-outbound] --> _[.]
    src_infra_outbound[src-infra-outbound] --> _[.]
    src_infra_outbound[src-infra-outbound] --> _[.]
    src_infra_outbound[src-infra-outbound] --> _[.]
    src_infra_outbound[src-infra-outbound] --> _[.]
    src_infra_outbound[src-infra-outbound] --> _[.]
    src_infra_outbound[src-infra-outbound] --> _[.]
    src_infra_outbound[src-infra-outbound] --> _[.]
    src_infra_outbound[src-infra-outbound] --> _[.]
    src_infra_outbound[src-infra-outbound] --> _[.]
    src_infra_outbound[src-infra-outbound] --> _[.]
    src_infra_outbound[src-infra-outbound] --> _[.]
    src_infra_outbound[src-infra-outbound] --> _[.]
    src_infra_outbound[src-infra-outbound] --> media_core[media-core]
    src_infra_outbound[src-infra-outbound] --> media_core[media-core]
    src_infra_outbound[src-infra-outbound] --> media_core[media-core]
    src_infra_outbound[src-infra-outbound] --> media_core[media-core]
    src_infra_outbound[src-infra-outbound] --> _openclaw[@openclaw]
    src_infra_outbound[src-infra-outbound] --> normalization_core[normalization-core]
    src_infra_outbound[src-infra-outbound] --> normalization_core[normalization-core]
    src_infra_outbound[src-infra-outbound] --> normalization_core[normalization-core]
    src_infra_outbound[src-infra-outbound] --> normalization_core[normalization-core]
    src_infra_outbound[src-infra-outbound] --> node_child_process[node:child_process]
    src_infra_outbound[src-infra-outbound] --> node_crypto[node:crypto]
    src_infra_outbound[src-infra-outbound] --> node_fs[node:fs]
    src_infra_outbound[src-infra-outbound] --> node_fs[node:fs]
    src_infra_outbound[src-infra-outbound] --> node_os[node:os]
    src_infra_outbound[src-infra-outbound] --> node_path[node:path]
    src_infra_outbound[src-infra-outbound] --> node_url[node:url]
    src_infra_outbound[src-infra-outbound] --> plugin_sdk[plugin-sdk]
    src_infra_outbound[src-infra-outbound] --> plugin_sdk[plugin-sdk]
    src_infra_outbound[src-infra-outbound] --> plugin_sdk[plugin-sdk]
    src_infra_outbound[src-infra-outbound] --> typebox[typebox]
    src_infra_outbound[src-infra-outbound] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../../../packages/gateway-protocol/src/schema/error-codes.js`
- `../../../packages/normalization-core/src/string-coerce.js`
- `../../../packages/tool-call-repair/src/index.js`
- `../../../test/helpers/infra/delivery-recovery.js`
- `../../../test/helpers/temp-dir.js`
- `../../acp/conversation-id.js`
- `../../agents/agent-scope.js`
- `../../agents/identity-avatar.js`
- `../../agents/identity.js`
- `../../agents/sandbox-paths.js`
- `../../agents/tools/common.js`
- `../../audit/message-audit-events.js`
- `../../audit/message-audit-events.test-support.js`
- `../../auto-reply/chunk.js`
- `../../auto-reply/reply/reply-directives.js`
- `../../auto-reply/reply/reply-payload-sending-hook.js`
- `../../auto-reply/reply/reply-payloads.js`
- `../../auto-reply/reply/reply-reference.js`
- `../../auto-reply/reply/response-prefix-template.js`
- `../../channels/chat-meta.js`
- `../../channels/chat-type.js`
- `../../channels/location.js`
- `../../channels/message/capabilities.js`
- `../../channels/message/receipt.js`
- `../../channels/message/rendered-batch.js`
- `../../channels/message/runtime.js`
- `../../channels/message/types.js`
- `../../channels/plugins/bootstrap-registry.js`
- `../../channels/plugins/conversation-read-origin.js`
- `../../channels/plugins/helpers.js`
- `../../channels/plugins/index.js`
- `../../channels/plugins/message-action-discovery.js`
- `../../channels/plugins/message-action-dispatch.js`
- `../../channels/plugins/outbound/interactive.js`
- `../../channels/plugins/outbound/load.js`
- `../../channels/plugins/registry-loaded.js`
- `../../channels/plugins/target-parsing-loaded.js`
- `../../channels/registry.js`
- `../../channels/thread-binding-id.js`
- `../../channels/thread-bindings-policy.js`
- `../../cli/command-format.js`
- `../../config/bindings.js`
- `../../config/paths.js`
- `../../config/plugin-auto-enable.js`
- `../../config/runtime-snapshot.js`
- `../../config/sessions.js`
- `../../config/sessions/conversation-delivery-store.js`
- `../../config/sessions/conversation-identity.js`
- `../../config/sessions/conversation-registry.js`
- `../../config/sessions/inbound.runtime.js`
- `../../config/sessions/paths.js`
- `../../config/sessions/restart-recovery-receipt.js`
- `../../config/sessions/session-accessor.js`
- `../../config/sessions/transcript-mirror.js`
- `../../hooks/fire-and-forget.js`
- `../../hooks/internal-hooks.js`
- `../../hooks/message-hook-mappers.js`
- `../../infra/fs-safe.js`
- `../../infra/local-file-access.js`
- `../../interactive/payload.js`
- `../../logging/subsystem.js`
- `../../media/configured-max-bytes.js`
- `../../media/load-options.js`
- `../../media/local-roots.js`
- `../../media/outbound-attachment.js`
- `../../media/read-capability.js`
- `../../media/store.js`
- `../../media/web-media.js`
- `../../param-key.js`
- `../../plugin-sdk/boolean-param.js`
- `../../plugin-sdk/channel-route.js`
- `../../plugin-sdk/core.js`
- `../../plugin-sdk/routing.js`
- `../../plugin-sdk/tool-payload.js`
- `../../plugins/hook-runner-global.js`
- `../../plugins/hooks.js`
- `../../plugins/hooks.test-fixtures.js`
- `../../plugins/loader.js`
- `../../plugins/official-external-plugin-repair-hints.js`
- `../../plugins/registry-empty.js`
- `../../plugins/registry.js`
- `../../plugins/runtime-channel-state.js`
- `../../plugins/runtime.js`
- `../../poll-params.js`
- `../../polls.js`
- `../../routing/binding-scope.js`
- `../../routing/bound-account-read.js`
- `../../routing/conversation-ref.js`
- `../../routing/resolve-route.js`
- `../../routing/session-key.js`
- `../../runtime.js`
- `../../sessions/session-key-utils.js`
- `../../shared/account-enabled.js`
- `../../shared/global-singleton.js`
- `../../shared/lazy-promise.js`
- `../../shared/lazy-runtime.js`
- `../../shared/number-coercion.js`
- `../../shared/text/citation-control-markers.js`
- `../../shared/text/formatted-reasoning-message.js`
- `../../state/openclaw-agent-db.js`
- `../../state/openclaw-state-db.js`
- `../../test-utils/channel-plugins.js`
- `../../test-utils/env.js`
- `../../test-utils/fs-scan-assertions.js`
- `../../test-utils/internal-hook-event-payload.js`
- `../../test-utils/repo-files.js`
- `../../test-utils/tracked-temp-dirs.js`
- `../../test-utils/typed-cases.js`
- `../../tts/tts-config.js`
- `../../utils/account-id.js`
- `../../utils/delivery-context.shared.js`
- `../../utils/directive-tags.js`
- `../../utils/message-channel-constants.js`
- `../../utils/message-channel-core.js`
- `../../utils/message-channel.js`
- `../../utils/string-readers.js`
- `../abort-signal.js`
- `../dedupe.js`
- `../delivery-queue-sqlite.js`
- `../delivery-recovery.shared.js`
- `../diagnostic-error-metadata.js`
- `../diagnostic-events.js`
- `../errors.js`
- `../file-store.js`
- `../kysely-sync.js`
- `../retry-attempt-errors.js`
- `../retry.js`
- `../secure-random.js`
- `../tmp-openclaw-dir.js`
- `./abort.js`
- `./base-session-key.js`
- `./best-effort-delivery.js`
- `./bound-delivery-router.js`
- `./channel-bootstrap.runtime.js`
- `./channel-resolution.js`
- `./channel-selection.js`
- `./channel-target-prefix.js`
- `./channel-target.js`
- `./conversation-id.js`
- `./current-conversation-bindings.js`
- `./deferred-delivery-admission.js`
- `./deliver-types.js`
- `./deliver.js`
- `./delivery-commit-hooks.js`
- `./delivery-completion.js`
- `./delivery-queue-media-spool.js`
- `./delivery-queue-media-staging.js`
- `./delivery-queue-storage.js`
- `./delivery-queue.js`
- `./delivery-queue.test-helpers.js`
- `./directory-cache.js`
- `./envelope.js`
- `./format.js`
- `./internal-source-reply.js`
- `./message-action-normalization.js`
- `./message-action-param-keys.js`
- `./message-action-params.js`
- `./message-action-runner.js`
- `./message-action-runner.test-helpers.js`
- `./message-action-spec.js`
- `./message-action-threading.js`
- `./message-action-tts.js`
- `./message-gateway-options.js`
- `./message-plan.js`
- `./message.js`
- `./outbound-audit.js`
- `./outbound-policy.js`
- `./outbound-send-service.js`
- `./outbound-session.js`
- `./outbound-session.test-helpers.js`
- `./payloads.js`
- `./protocol-scaffolding.js`
- `./reply-policy.js`
- `./sanitize-text.js`
- `./session-binding-normalization.js`
- `./session-binding-service.js`
- `./session-context.js`
- `./source-delivery-plan.js`
- `./source-reply-mirror.js`
- `./target-errors.js`
- `./target-id-resolution.js`
- `./target-normalization.js`
- `./target-resolver.js`
- `./targets-loaded.js`
- `./targets-resolve-shared.js`
- `./targets-session.js`
- `./targets.js`
- `./targets.shared-test.js`
- `./targets.test-helpers.js`
- `./thread-id.js`
- `@openclaw/media-core/base64`
- `@openclaw/media-core/file-name`
- `@openclaw/media-core/media-source-url`
- `@openclaw/media-core/mime`
- `@openclaw/normalization-core`
- `@openclaw/normalization-core/number-coercion`
- `@openclaw/normalization-core/record-coerce`
- `@openclaw/normalization-core/string-coerce`
- `@openclaw/normalization-core/string-normalization`
- `node:child_process`
- `node:crypto`
- `node:fs`
- `node:fs/promises`
- `node:os`
- `node:path`
- `node:url`
- `openclaw/plugin-sdk/channel-config-helpers`
- `openclaw/plugin-sdk/reply-payload`
- `openclaw/plugin-sdk/test-fixtures`
- `typebox`
- `vitest`
