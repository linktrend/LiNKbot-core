# Module: src/channels/plugins

[← Back to INDEX](../../INDEX.md)

**Type:** js/ts | **Files:** 156

**Entry point:** `src/channels/plugins/index.ts`

## Files

| File | Lines | Large |
| ---- | ----- | ----- |
| `src/channels/plugins/account-action-gate.test.ts` | 35 |  |
| `src/channels/plugins/account-action-gate.ts` | 28 |  |
| `src/channels/plugins/account-helpers.test.ts` | 521 | 📊 |
| `src/channels/plugins/account-helpers.ts` | 278 |  |
| `src/channels/plugins/acp-bindings.test.ts` | 251 |  |
| `src/channels/plugins/acp-configured-binding-consumer.ts` | 175 |  |
| `src/channels/plugins/acp-stateful-target-driver.test.ts` | 85 |  |
| `src/channels/plugins/acp-stateful-target-driver.ts` | 147 |  |
| `src/channels/plugins/acp-stateful-target-reset.runtime.ts` | 3 |  |
| `src/channels/plugins/actions/reaction-message-id.test.ts` | 26 |  |
| `src/channels/plugins/actions/reaction-message-id.ts` | 20 |  |
| `src/channels/plugins/actions/shared.ts` | 30 |  |
| `src/channels/plugins/approval-native.types.ts` | 67 |  |
| `src/channels/plugins/approvals.test.ts` | 80 |  |
| `src/channels/plugins/approvals.ts` | 45 |  |
| `src/channels/plugins/binding-provider.ts` | 22 |  |
| `src/channels/plugins/binding-registry.ts` | 40 |  |
| `src/channels/plugins/binding-routing.test.ts` | 178 |  |
| `src/channels/plugins/binding-routing.ts` | 225 |  |
| `src/channels/plugins/binding-targets.test.ts` | 188 |  |
| `src/channels/plugins/binding-targets.ts` | 79 |  |
| `src/channels/plugins/binding-types.ts` | 84 |  |
| `src/channels/plugins/bootstrap-registry.ts` | 107 |  |
| `src/channels/plugins/bundled-ids.ts` | 36 |  |
| `src/channels/plugins/bundled-root-caches.test.ts` | 204 |  |
| `src/channels/plugins/bundled-root.ts` | 60 |  |
| `src/channels/plugins/bundled.shape-guard.test.ts` | 1374 | 📊 |
| `src/channels/plugins/bundled.ts` | 960 | 📊 |
| `src/channels/plugins/catalog.test.ts` | 77 |  |
| `src/channels/plugins/catalog.ts` | 543 | 📊 |
| `src/channels/plugins/channel-config.ts` | 11 |  |
| `src/channels/plugins/channel-id.types.ts` | 11 |  |
| `src/channels/plugins/channel-meta.ts` | 73 |  |
| `src/channels/plugins/channel-runtime-surface.types.ts` | 48 |  |
| `src/channels/plugins/chat-target-prefixes.test.ts` | 121 |  |
| `src/channels/plugins/chat-target-prefixes.ts` | 328 |  |
| `src/channels/plugins/config-helpers.test.ts` | 111 |  |
| `src/channels/plugins/config-helpers.ts` | 193 |  |
| `src/channels/plugins/config-schema.test.ts` | 262 |  |
| `src/channels/plugins/config-schema.ts` | 311 |  |
| `src/channels/plugins/config-write-policy-shared.ts` | 243 |  |
| `src/channels/plugins/config-writes.ts` | 89 |  |
| `src/channels/plugins/configured-binding-builtins.ts` | 14 |  |
| `src/channels/plugins/configured-binding-compiler.ts` | 197 |  |
| `src/channels/plugins/configured-binding-consumers.ts` | 85 |  |
| `src/channels/plugins/configured-binding-match.ts` | 142 |  |
| `src/channels/plugins/configured-binding-registry.ts` | 135 |  |
| `src/channels/plugins/configured-binding-session-lookup.ts` | 85 |  |
| `src/channels/plugins/configured-state.test.ts` | 85 |  |
| `src/channels/plugins/configured-state.ts` | 38 |  |
| `src/channels/plugins/contracts/trace/delivery-trace.ts` | 329 |  |
| `src/channels/plugins/conversation-bindings.ts` | 65 |  |
| `src/channels/plugins/conversation-read-origin.test.ts` | 16 |  |
| `src/channels/plugins/conversation-read-origin.ts` | 13 |  |
| `src/channels/plugins/directory-adapters.test.ts` | 40 |  |
| `src/channels/plugins/directory-adapters.ts` | 33 |  |
| `src/channels/plugins/directory-config-helpers.test.ts` | 209 |  |
| `src/channels/plugins/directory-config-helpers.ts` | 339 |  |
| `src/channels/plugins/directory-types.ts` | 19 |  |
| `src/channels/plugins/dm-access.ts` | 387 |  |
| `src/channels/plugins/doctor-contract-api.fast-path.test.ts` | 107 |  |
| `src/channels/plugins/doctor-contract-api.ts` | 51 |  |
| `src/channels/plugins/exec-approval-local.ts` | 46 |  |
| `src/channels/plugins/exposure.ts` | 31 |  |
| `src/channels/plugins/gateway-auth-bypass.test.ts` | 78 |  |
| `src/channels/plugins/gateway-auth-bypass.ts` | 49 |  |
| `src/channels/plugins/group-policy-warnings.test.ts` | 559 | 📊 |
| `src/channels/plugins/group-policy-warnings.ts` | 390 |  |
| `src/channels/plugins/helpers.test.ts` | 177 |  |
| `src/channels/plugins/helpers.ts` | 105 |  |
| `src/channels/plugins/index.ts` | 28 |  |
| `src/channels/plugins/legacy-config.test.ts` | 222 |  |
| `src/channels/plugins/legacy-config.ts` | 136 |  |
| `src/channels/plugins/legacy-state-migration.types.ts` | 37 |  |
| `src/channels/plugins/lifecycle-startup.ts` | 39 |  |
| `src/channels/plugins/media-limits.ts` | 31 |  |
| `src/channels/plugins/media-payload.ts` | 44 |  |
| `src/channels/plugins/message-action-discovery.ts` | 449 |  |
| `src/channels/plugins/message-action-dispatch.ts` | 574 | 📊 |
| `src/channels/plugins/message-action-names.ts` | 67 |  |
| `src/channels/plugins/message-actions.security.test.ts` | 1264 | 📊 |
| `src/channels/plugins/message-actions.test.ts` | 430 |  |
| `src/channels/plugins/message-capabilities.ts` | 9 |  |
| `src/channels/plugins/message-capability-matrix.test.ts` | 249 |  |
| `src/channels/plugins/message-tool-api.test.ts` | 66 |  |
| `src/channels/plugins/message-tool-api.ts` | 55 |  |
| `src/channels/plugins/meta-normalization.ts` | 56 |  |
| `src/channels/plugins/module-loader.test.ts` | 133 |  |
| `src/channels/plugins/module-loader.ts` | 123 |  |
| `src/channels/plugins/native-approval-prompt.ts` | 42 |  |
| `src/channels/plugins/outbound.types.ts` | 265 |  |
| `src/channels/plugins/package-state-probes.test.ts` | 348 |  |
| `src/channels/plugins/package-state-probes.ts` | 284 |  |
| `src/channels/plugins/pairing-adapters.test.ts` | 40 |  |
| `src/channels/plugins/pairing-adapters.ts` | 48 |  |
| `src/channels/plugins/pairing-message.ts` | 5 |  |
| `src/channels/plugins/pairing.ts` | 52 |  |
| `src/channels/plugins/pairing.types.ts` | 26 |  |
| `src/channels/plugins/persisted-auth-state.test.ts` | 22 |  |
| `src/channels/plugins/persisted-auth-state.ts` | 38 |  |
| `src/channels/plugins/read-only-command-defaults.test.ts` | 110 |  |
| `src/channels/plugins/read-only-command-defaults.ts` | 123 |  |
| `src/channels/plugins/read-only.test.ts` | 1468 | 📊 |
| `src/channels/plugins/read-only.ts` | 1043 | 📊 |
| `src/channels/plugins/registry-loaded.ts` | 158 |  |
| `src/channels/plugins/registry-loader.ts` | 43 |  |
| `src/channels/plugins/registry.test.ts` | 150 |  |
| `src/channels/plugins/registry.ts` | 82 |  |
| `src/channels/plugins/runtime-forwarders.test.ts` | 88 |  |
| `src/channels/plugins/runtime-forwarders.ts` | 173 |  |
| `src/channels/plugins/session-conversation.bundled-fallback.test.ts` | 158 |  |
| `src/channels/plugins/session-conversation.test.ts` | 147 |  |
| `src/channels/plugins/session-conversation.ts` | 324 |  |
| `src/channels/plugins/session-thread-info-loaded.ts` | 57 |  |
| `src/channels/plugins/setup-group-access-configure.test.ts` | 185 |  |
| `src/channels/plugins/setup-group-access-configure.ts` | 56 |  |
| `src/channels/plugins/setup-group-access.test.ts` | 98 |  |
| `src/channels/plugins/setup-group-access.ts` | 124 |  |
| `src/channels/plugins/setup-helpers.import-safety.test.ts` | 32 |  |
| `src/channels/plugins/setup-helpers.test.ts` | 457 |  |
| `src/channels/plugins/setup-helpers.ts` | 549 | 📊 |
| `src/channels/plugins/setup-promotion-helpers.test.ts` | 131 |  |
| `src/channels/plugins/setup-promotion-helpers.ts` | 90 |  |
| `src/channels/plugins/setup-promotion-keys.ts` | 106 |  |
| `src/channels/plugins/setup-registry.ts` | 94 |  |
| `src/channels/plugins/setup-wizard-binary.test.ts` | 157 |  |
| `src/channels/plugins/setup-wizard-binary.ts` | 142 |  |
| `src/channels/plugins/setup-wizard-helpers.test.ts` | 1977 | 📊 |
| `src/channels/plugins/setup-wizard-helpers.ts` | 1592 | 📊 |
| `src/channels/plugins/setup-wizard-proxy.test.ts` | 234 |  |
| `src/channels/plugins/setup-wizard-proxy.ts` | 144 |  |
| `src/channels/plugins/setup-wizard-types.ts` | 429 |  |
| `src/channels/plugins/setup-wizard.test.ts` | 365 |  |
| `src/channels/plugins/setup-wizard.ts` | 720 | 📊 |
| `src/channels/plugins/stateful-target-builtins.ts` | 36 |  |
| `src/channels/plugins/stateful-target-drivers.ts` | 104 |  |
| `src/channels/plugins/status-issues/shared.ts` | 86 |  |
| `src/channels/plugins/status-state.ts` | 15 |  |
| `src/channels/plugins/status.test.ts` | 45 |  |
| `src/channels/plugins/status.ts` | 99 |  |
| `src/channels/plugins/target-parsing-loaded.test.ts` | 68 |  |
| `src/channels/plugins/target-parsing-loaded.ts` | 33 |  |
| `src/channels/plugins/target-resolvers.test.ts` | 41 |  |
| `src/channels/plugins/target-resolvers.ts` | 43 |  |
| `src/channels/plugins/thread-binding-api.test.ts` | 102 |  |
| `src/channels/plugins/thread-binding-api.ts` | 86 |  |
| `src/channels/plugins/threading-helpers.test.ts` | 83 |  |
| `src/channels/plugins/threading-helpers.ts` | 46 |  |
| `src/channels/plugins/tts-capabilities.test.ts` | 114 |  |
| `src/channels/plugins/tts-capabilities.ts` | 18 |  |
| `src/channels/plugins/types.adapters.ts` | 881 | 📊 |
| `src/channels/plugins/types.config.ts` | 47 |  |
| `src/channels/plugins/types.core.ts` | 874 | 📊 |
| `src/channels/plugins/types.plugin.ts` | 114 |  |
| `src/channels/plugins/types.public.ts` | 52 |  |
| `src/channels/plugins/types.ts` | 13 |  |

## Child Modules

- [src-channels-plugins-contracts](../src-channels-plugins-contracts/MODULE.md)
- [src-channels-plugins-outbound](../src-channels-plugins-outbound/MODULE.md)

## Documentation

- [outline.md](outline.md) - Symbol maps for large files
- [imports.md](imports.md) - Dependencies

---

| High 🔴 | Medium 🟡 | Low 🟢 |
| 1 | 0 | 0 |

## 🔴 High Priority

### `DEPRECATED` (src/channels/plugins/types.core.ts:431)

> alias for allowExplicitReplyTagsWhenOff.
