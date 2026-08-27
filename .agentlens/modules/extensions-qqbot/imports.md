# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    extensions_qqbot[extensions-qqbot] --> test_support[test-support]
    extensions_qqbot[extensions-qqbot] --> bridge[bridge]
    extensions_qqbot[extensions-qqbot] --> adapter[adapter]
    extensions_qqbot[extensions-qqbot] --> approval[approval]
    extensions_qqbot[extensions-qqbot] --> config[config]
    extensions_qqbot[extensions-qqbot] --> messaging[messaging]
    extensions_qqbot[extensions-qqbot] --> __[..]
    extensions_qqbot[extensions-qqbot] --> test_support[test-support]
    extensions_qqbot[extensions-qqbot] --> access[access]
    extensions_qqbot[extensions-qqbot] --> adapter[adapter]
    extensions_qqbot[extensions-qqbot] --> approval[approval]
    extensions_qqbot[extensions-qqbot] --> __[..]
    extensions_qqbot[extensions-qqbot] --> bridge[bridge]
    extensions_qqbot[extensions-qqbot] --> commands[commands]
    extensions_qqbot[extensions-qqbot] --> commands[commands]
    extensions_qqbot[extensions-qqbot] --> commands[commands]
    extensions_qqbot[extensions-qqbot] --> commands[commands]
    extensions_qqbot[extensions-qqbot] --> __[..]
    extensions_qqbot[extensions-qqbot] --> config[config]
    extensions_qqbot[extensions-qqbot] --> config[config]
    extensions_qqbot[extensions-qqbot] --> __[..]
    extensions_qqbot[extensions-qqbot] --> access[access]
    extensions_qqbot[extensions-qqbot] --> access[access]
    extensions_qqbot[extensions-qqbot] --> adapter[adapter]
    extensions_qqbot[extensions-qqbot] --> config[config]
    extensions_qqbot[extensions-qqbot] --> config[config]
    extensions_qqbot[extensions-qqbot] --> gateway[gateway]
    extensions_qqbot[extensions-qqbot] --> messaging[messaging]
    extensions_qqbot[extensions-qqbot] --> utils[utils]
    extensions_qqbot[extensions-qqbot] --> utils[utils]
    extensions_qqbot[extensions-qqbot] --> utils[utils]
    extensions_qqbot[extensions-qqbot] --> __[..]
    extensions_qqbot[extensions-qqbot] --> messaging[messaging]
    extensions_qqbot[extensions-qqbot] --> messaging[messaging]
    extensions_qqbot[extensions-qqbot] --> messaging[messaging]
    extensions_qqbot[extensions-qqbot] --> messaging[messaging]
    extensions_qqbot[extensions-qqbot] --> messaging[messaging]
    extensions_qqbot[extensions-qqbot] --> messaging[messaging]
    extensions_qqbot[extensions-qqbot] --> messaging[messaging]
    extensions_qqbot[extensions-qqbot] --> messaging[messaging]
    extensions_qqbot[extensions-qqbot] --> ref[ref]
    extensions_qqbot[extensions-qqbot] --> session[session]
    extensions_qqbot[extensions-qqbot] --> session[session]
    extensions_qqbot[extensions-qqbot] --> utils[utils]
    extensions_qqbot[extensions-qqbot] --> utils[utils]
    extensions_qqbot[extensions-qqbot] --> utils[utils]
    extensions_qqbot[extensions-qqbot] --> utils[utils]
    extensions_qqbot[extensions-qqbot] --> utils[utils]
    extensions_qqbot[extensions-qqbot] --> utils[utils]
    extensions_qqbot[extensions-qqbot] --> utils[utils]
    extensions_qqbot[extensions-qqbot] --> utils[utils]
    extensions_qqbot[extensions-qqbot] --> utils[utils]
    extensions_qqbot[extensions-qqbot] --> utils[utils]
    extensions_qqbot[extensions-qqbot] --> utils[utils]
    extensions_qqbot[extensions-qqbot] --> _[.]
    extensions_qqbot[extensions-qqbot] --> _[.]
    extensions_qqbot[extensions-qqbot] --> approval[approval]
    extensions_qqbot[extensions-qqbot] --> bridge[bridge]
    extensions_qqbot[extensions-qqbot] --> bridge[bridge]
    extensions_qqbot[extensions-qqbot] --> bridge[bridge]
    extensions_qqbot[extensions-qqbot] --> bridge[bridge]
    extensions_qqbot[extensions-qqbot] --> bridge[bridge]
    extensions_qqbot[extensions-qqbot] --> bridge[bridge]
    extensions_qqbot[extensions-qqbot] --> setup[setup]
    extensions_qqbot[extensions-qqbot] --> _[.]
    extensions_qqbot[extensions-qqbot] --> _[.]
    extensions_qqbot[extensions-qqbot] --> _[.]
    extensions_qqbot[extensions-qqbot] --> _[.]
    extensions_qqbot[extensions-qqbot] --> commands[commands]
    extensions_qqbot[extensions-qqbot] --> _[.]
    extensions_qqbot[extensions-qqbot] --> _[.]
    extensions_qqbot[extensions-qqbot] --> _[.]
    extensions_qqbot[extensions-qqbot] --> _[.]
    extensions_qqbot[extensions-qqbot] --> _[.]
    extensions_qqbot[extensions-qqbot] --> adapter[adapter]
    extensions_qqbot[extensions-qqbot] --> config[config]
    extensions_qqbot[extensions-qqbot] --> config[config]
    extensions_qqbot[extensions-qqbot] --> gateway[gateway]
    extensions_qqbot[extensions-qqbot] --> messaging[messaging]
    extensions_qqbot[extensions-qqbot] --> messaging[messaging]
    extensions_qqbot[extensions-qqbot] --> messaging[messaging]
    extensions_qqbot[extensions-qqbot] --> messaging[messaging]
    extensions_qqbot[extensions-qqbot] --> messaging[messaging]
    extensions_qqbot[extensions-qqbot] --> messaging[messaging]
    extensions_qqbot[extensions-qqbot] --> messaging[messaging]
    extensions_qqbot[extensions-qqbot] --> messaging[messaging]
    extensions_qqbot[extensions-qqbot] --> utils[utils]
    extensions_qqbot[extensions-qqbot] --> _[.]
    extensions_qqbot[extensions-qqbot] --> _[.]
    extensions_qqbot[extensions-qqbot] --> _[.]
    extensions_qqbot[extensions-qqbot] --> _[.]
    extensions_qqbot[extensions-qqbot] --> _[.]
    extensions_qqbot[extensions-qqbot] --> _[.]
    extensions_qqbot[extensions-qqbot] --> _[.]
    extensions_qqbot[extensions-qqbot] --> _[.]
    extensions_qqbot[extensions-qqbot] --> _[.]
    extensions_qqbot[extensions-qqbot] --> _[.]
    extensions_qqbot[extensions-qqbot] --> _[.]
    extensions_qqbot[extensions-qqbot] --> _[.]
    extensions_qqbot[extensions-qqbot] --> _[.]
    extensions_qqbot[extensions-qqbot] --> _[.]
    extensions_qqbot[extensions-qqbot] --> _[.]
    extensions_qqbot[extensions-qqbot] --> _[.]
    extensions_qqbot[extensions-qqbot] --> _[.]
    extensions_qqbot[extensions-qqbot] --> _[.]
    extensions_qqbot[extensions-qqbot] --> _[.]
    extensions_qqbot[extensions-qqbot] --> _[.]
    extensions_qqbot[extensions-qqbot] --> _[.]
    extensions_qqbot[extensions-qqbot] --> _[.]
    extensions_qqbot[extensions-qqbot] --> _[.]
    extensions_qqbot[extensions-qqbot] --> _[.]
    extensions_qqbot[extensions-qqbot] --> _[.]
    extensions_qqbot[extensions-qqbot] --> _[.]
    extensions_qqbot[extensions-qqbot] --> _[.]
    extensions_qqbot[extensions-qqbot] --> stages[stages]
    extensions_qqbot[extensions-qqbot] --> tools[tools]
    extensions_qqbot[extensions-qqbot] --> _[.]
    extensions_qqbot[extensions-qqbot] --> _[.]
    extensions_qqbot[extensions-qqbot] --> _openclaw[@openclaw]
    extensions_qqbot[extensions-qqbot] --> node_crypto[node:crypto]
    extensions_qqbot[extensions-qqbot] --> node_events[node:events]
    extensions_qqbot[extensions-qqbot] --> node_fs[node:fs]
    extensions_qqbot[extensions-qqbot] --> node_fs[node:fs]
    extensions_qqbot[extensions-qqbot] --> node_os[node:os]
    extensions_qqbot[extensions-qqbot] --> node_path[node:path]
    extensions_qqbot[extensions-qqbot] --> node_url[node:url]
    extensions_qqbot[extensions-qqbot] --> plugin_sdk[plugin-sdk]
    extensions_qqbot[extensions-qqbot] --> plugin_sdk[plugin-sdk]
    extensions_qqbot[extensions-qqbot] --> plugin_sdk[plugin-sdk]
    extensions_qqbot[extensions-qqbot] --> plugin_sdk[plugin-sdk]
    extensions_qqbot[extensions-qqbot] --> plugin_sdk[plugin-sdk]
    extensions_qqbot[extensions-qqbot] --> plugin_sdk[plugin-sdk]
    extensions_qqbot[extensions-qqbot] --> plugin_sdk[plugin-sdk]
    extensions_qqbot[extensions-qqbot] --> plugin_sdk[plugin-sdk]
    extensions_qqbot[extensions-qqbot] --> plugin_sdk[plugin-sdk]
    extensions_qqbot[extensions-qqbot] --> plugin_sdk[plugin-sdk]
    extensions_qqbot[extensions-qqbot] --> plugin_sdk[plugin-sdk]
    extensions_qqbot[extensions-qqbot] --> plugin_sdk[plugin-sdk]
    extensions_qqbot[extensions-qqbot] --> plugin_sdk[plugin-sdk]
    extensions_qqbot[extensions-qqbot] --> plugin_sdk[plugin-sdk]
    extensions_qqbot[extensions-qqbot] --> plugin_sdk[plugin-sdk]
    extensions_qqbot[extensions-qqbot] --> plugin_sdk[plugin-sdk]
    extensions_qqbot[extensions-qqbot] --> plugin_sdk[plugin-sdk]
    extensions_qqbot[extensions-qqbot] --> plugin_sdk[plugin-sdk]
    extensions_qqbot[extensions-qqbot] --> plugin_sdk[plugin-sdk]
    extensions_qqbot[extensions-qqbot] --> plugin_sdk[plugin-sdk]
    extensions_qqbot[extensions-qqbot] --> plugin_sdk[plugin-sdk]
    extensions_qqbot[extensions-qqbot] --> plugin_sdk[plugin-sdk]
    extensions_qqbot[extensions-qqbot] --> plugin_sdk[plugin-sdk]
    extensions_qqbot[extensions-qqbot] --> plugin_sdk[plugin-sdk]
    extensions_qqbot[extensions-qqbot] --> plugin_sdk[plugin-sdk]
    extensions_qqbot[extensions-qqbot] --> plugin_sdk[plugin-sdk]
    extensions_qqbot[extensions-qqbot] --> plugin_sdk[plugin-sdk]
    extensions_qqbot[extensions-qqbot] --> plugin_sdk[plugin-sdk]
    extensions_qqbot[extensions-qqbot] --> plugin_sdk[plugin-sdk]
    extensions_qqbot[extensions-qqbot] --> plugin_sdk[plugin-sdk]
    extensions_qqbot[extensions-qqbot] --> plugin_sdk[plugin-sdk]
    extensions_qqbot[extensions-qqbot] --> plugin_sdk[plugin-sdk]
    extensions_qqbot[extensions-qqbot] --> plugin_sdk[plugin-sdk]
    extensions_qqbot[extensions-qqbot] --> plugin_sdk[plugin-sdk]
    extensions_qqbot[extensions-qqbot] --> plugin_sdk[plugin-sdk]
    extensions_qqbot[extensions-qqbot] --> plugin_sdk[plugin-sdk]
    extensions_qqbot[extensions-qqbot] --> plugin_sdk[plugin-sdk]
    extensions_qqbot[extensions-qqbot] --> plugin_sdk[plugin-sdk]
    extensions_qqbot[extensions-qqbot] --> plugin_sdk[plugin-sdk]
    extensions_qqbot[extensions-qqbot] --> plugin_sdk[plugin-sdk]
    extensions_qqbot[extensions-qqbot] --> plugin_sdk[plugin-sdk]
    extensions_qqbot[extensions-qqbot] --> plugin_sdk[plugin-sdk]
    extensions_qqbot[extensions-qqbot] --> plugin_sdk[plugin-sdk]
    extensions_qqbot[extensions-qqbot] --> plugin_sdk[plugin-sdk]
    extensions_qqbot[extensions-qqbot] --> plugin_sdk[plugin-sdk]
    extensions_qqbot[extensions-qqbot] --> plugin_sdk[plugin-sdk]
    extensions_qqbot[extensions-qqbot] --> plugin_sdk[plugin-sdk]
    extensions_qqbot[extensions-qqbot] --> plugin_sdk[plugin-sdk]
    extensions_qqbot[extensions-qqbot] --> plugin_sdk[plugin-sdk]
    extensions_qqbot[extensions-qqbot] --> plugin_sdk[plugin-sdk]
    extensions_qqbot[extensions-qqbot] --> plugin_sdk[plugin-sdk]
    extensions_qqbot[extensions-qqbot] --> vitest[vitest]
    extensions_qqbot[extensions-qqbot] --> zod[zod]
```

## Internal Dependencies

Dependencies within this module:

- `ws`

## External Dependencies

Dependencies from other modules:

- `../../../../test-support/streaming-error-response.js`
- `../../bridge/sdk-adapter.js`
- `../../engine/adapter/index.js`
- `../../engine/approval/index.js`
- `../../engine/config/resolve.js`
- `../../engine/messaging/sender.js`
- `../../exec-approvals.js`
- `../../test-support/runtime.js`
- `../access/resolve-policy.js`
- `../adapter/index.js`
- `../approval/index.js`
- `../bootstrap.js`
- `../bridge/runtime.js`
- `../commands/command-visibility.js`
- `../commands/slash-command-auth.js`
- `../commands/slash-command-handler.js`
- `../commands/slash-commands-impl.js`
- `../config.js`
- `../config/group.js`
- `../config/resolve.js`
- `../doctor-contract-api.js`
- `../engine/access/resolve-policy.js`
- `../engine/access/sender-match.js`
- `../engine/adapter/index.js`
- `../engine/config/resolve.js`
- `../engine/config/setup-logic.js`
- `../engine/gateway/gateway.js`
- `../engine/messaging/sender.js`
- `../engine/utils/format.js`
- `../engine/utils/log.js`
- `../engine/utils/string-normalize.js`
- `../logger.js`
- `../messaging/markdown-table-chunking.js`
- `../messaging/outbound-deliver.js`
- `../messaging/outbound-reply.js`
- `../messaging/outbound.js`
- `../messaging/reply-dispatcher.js`
- `../messaging/reply-limiter.js`
- `../messaging/sender.js`
- `../messaging/streaming-c2c.js`
- `../ref/store.js`
- `../session/known-users.js`
- `../session/session-store.js`
- `../utils/audio.js`
- `../utils/diagnostics.js`
- `../utils/file-utils.js`
- `../utils/format.js`
- `../utils/log.js`
- `../utils/platform.js`
- `../utils/request-context.js`
- `../utils/sqlite-state.js`
- `../utils/string-normalize.js`
- `../utils/stt.js`
- `../utils/text-parsing.js`
- `./active-cfg.js`
- `./bootstrap.js`
- `./bridge/approval/capability.js`
- `./bridge/bootstrap.js`
- `./bridge/config-shared.js`
- `./bridge/config.js`
- `./bridge/narrowing.js`
- `./bridge/runtime.js`
- `./bridge/sdk-adapter.js`
- `./bridge/setup/surface.js`
- `./channel-api.js`
- `./channel.js`
- `./channel.setup.js`
- `./codec.js`
- `./commands/framework-registration.js`
- `./config-schema.js`
- `./config.js`
- `./constants.js`
- `./doctor-contract.js`
- `./doctor.js`
- `./engine/adapter/index.js`
- `./engine/config/credential-backup.js`
- `./engine/config/credentials.js`
- `./engine/gateway/typing-keepalive.js`
- `./engine/messaging/markdown-table-chunking.js`
- `./engine/messaging/outbound-deliver.js`
- `./engine/messaging/outbound-reply.js`
- `./engine/messaging/outbound.js`
- `./engine/messaging/reply-dispatcher.js`
- `./engine/messaging/sender.js`
- `./engine/messaging/streaming-c2c.js`
- `./engine/messaging/target-parser.js`
- `./engine/utils/state-keys.js`
- `./event-dispatcher.js`
- `./exec-approvals.js`
- `./finalize.js`
- `./gateway-connection.js`
- `./group-policy.js`
- `./handler-runtime.js`
- `./inbound-attachments.js`
- `./inbound-pipeline.js`
- `./ingress-effects.js`
- `./ingress-envelope.js`
- `./ingress-errors.js`
- `./ingress.js`
- `./ingress.test-support.js`
- `./interaction-handler.js`
- `./logger.js`
- `./message-queue-ingress.js`
- `./message-queue.js`
- `./narrowing.js`
- `./outbound-dispatch.js`
- `./plugin-version.js`
- `./qqbot-test-support.js`
- `./reconnect.js`
- `./remind-logic.js`
- `./response-timeout.js`
- `./runtime.js`
- `./sdk-adapter.js`
- `./secret-contract.js`
- `./stages/index.js`
- `./tools/index.js`
- `./typing-keepalive.js`
- `./ws-client.js`
- `@openclaw/normalization-core`
- `node:crypto`
- `node:events`
- `node:fs`
- `node:fs/promises`
- `node:os`
- `node:path`
- `node:url`
- `openclaw/plugin-sdk/access-groups`
- `openclaw/plugin-sdk/agent-runtime`
- `openclaw/plugin-sdk/approval-auth-runtime`
- `openclaw/plugin-sdk/approval-client-runtime`
- `openclaw/plugin-sdk/approval-delivery-runtime`
- `openclaw/plugin-sdk/approval-handler-adapter-runtime`
- `openclaw/plugin-sdk/approval-handler-runtime`
- `openclaw/plugin-sdk/approval-native-runtime`
- `openclaw/plugin-sdk/approval-runtime`
- `openclaw/plugin-sdk/channel-config-schema`
- `openclaw/plugin-sdk/channel-contract-testing`
- `openclaw/plugin-sdk/channel-core`
- `openclaw/plugin-sdk/channel-entry-contract`
- `openclaw/plugin-sdk/channel-inbound`
- `openclaw/plugin-sdk/channel-ingress-runtime`
- `openclaw/plugin-sdk/channel-mention-gating`
- `openclaw/plugin-sdk/channel-outbound`
- `openclaw/plugin-sdk/channel-policy`
- `openclaw/plugin-sdk/channel-secret-basic-runtime`
- `openclaw/plugin-sdk/cli-runtime`
- `openclaw/plugin-sdk/core`
- `openclaw/plugin-sdk/error-runtime`
- `openclaw/plugin-sdk/expect-runtime`
- `openclaw/plugin-sdk/extension-shared`
- `openclaw/plugin-sdk/ingress-effect-once`
- `openclaw/plugin-sdk/json-schema-runtime`
- `openclaw/plugin-sdk/lazy-runtime`
- `openclaw/plugin-sdk/media-mime`
- `openclaw/plugin-sdk/number-runtime`
- `openclaw/plugin-sdk/plugin-state-test-runtime`
- `openclaw/plugin-sdk/plugin-test-runtime`
- `openclaw/plugin-sdk/provider-auth`
- `openclaw/plugin-sdk/provider-http`
- `openclaw/plugin-sdk/reply-chunking`
- `openclaw/plugin-sdk/reply-history`
- `openclaw/plugin-sdk/reply-runtime`
- `openclaw/plugin-sdk/routing`
- `openclaw/plugin-sdk/runtime-config-snapshot`
- `openclaw/plugin-sdk/runtime-doctor`
- `openclaw/plugin-sdk/runtime-store`
- `openclaw/plugin-sdk/secret-input`
- `openclaw/plugin-sdk/secret-ref-runtime`
- `openclaw/plugin-sdk/security-runtime`
- `openclaw/plugin-sdk/setup`
- `openclaw/plugin-sdk/setup-tools`
- `openclaw/plugin-sdk/ssrf-runtime`
- `openclaw/plugin-sdk/string-coerce-runtime`
- `openclaw/plugin-sdk/temp-path`
- `openclaw/plugin-sdk/text-chunking`
- `openclaw/plugin-sdk/text-utility-runtime`
- `openclaw/plugin-sdk/tool-results`
- `vitest`
- `zod`
