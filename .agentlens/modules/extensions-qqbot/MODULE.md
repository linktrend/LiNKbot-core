# Module: extensions/qqbot

[← Back to INDEX](../../INDEX.md)

**Type:** js/ts | **Files:** 96

**Entry point:** `extensions/qqbot/index.ts`

## Files

| File | Lines | Large |
| ---- | ----- | ----- |
| `extensions/qqbot/api.ts` | 57 |  |
| `extensions/qqbot/channel-entry-api.ts` | 2 |  |
| `extensions/qqbot/channel-plugin-api.ts` | 2 |  |
| `extensions/qqbot/doctor-contract-api.ts` | 2 |  |
| `extensions/qqbot/index.ts` | 45 |  |
| `extensions/qqbot/runtime-api.ts` | 10 |  |
| `extensions/qqbot/secret-contract-api.ts` | 6 |  |
| `extensions/qqbot/setup-entry.ts` | 14 |  |
| `extensions/qqbot/setup-plugin-api.ts` | 3 |  |
| `extensions/qqbot/src/bridge/approval/capability.ts` | 213 |  |
| `extensions/qqbot/src/bridge/approval/handler-runtime.test.ts` | 144 |  |
| `extensions/qqbot/src/bridge/approval/handler-runtime.ts` | 201 |  |
| `extensions/qqbot/src/bridge/bootstrap.test.ts` | 102 |  |
| `extensions/qqbot/src/bridge/bootstrap.ts` | 144 |  |
| `extensions/qqbot/src/bridge/channel-entry.ts` | 18 |  |
| `extensions/qqbot/src/bridge/config-shared.ts` | 133 |  |
| `extensions/qqbot/src/bridge/config.ts` | 177 |  |
| `extensions/qqbot/src/bridge/gateway.ts` | 180 |  |
| `extensions/qqbot/src/bridge/logger.ts` | 31 |  |
| `extensions/qqbot/src/bridge/narrowing.ts` | 32 |  |
| `extensions/qqbot/src/bridge/plugin-version.test.ts` | 146 |  |
| `extensions/qqbot/src/bridge/plugin-version.ts` | 102 |  |
| `extensions/qqbot/src/bridge/runtime.ts` | 26 |  |
| `extensions/qqbot/src/bridge/sdk-adapter.ts` | 187 |  |
| `extensions/qqbot/src/bridge/setup/finalize.test.ts` | 68 |  |
| `extensions/qqbot/src/bridge/setup/finalize.ts` | 163 |  |
| `extensions/qqbot/src/bridge/setup/surface.ts` | 35 |  |
| `extensions/qqbot/src/channel.gateway-status.test.ts` | 116 |  |
| `extensions/qqbot/src/channel.message-adapter.test.ts` | 262 |  |
| `extensions/qqbot/src/channel.setup.ts` | 34 |  |
| `extensions/qqbot/src/channel.ts` | 478 |  |
| `extensions/qqbot/src/command-auth.test.ts` | 113 |  |
| `extensions/qqbot/src/config-schema.ts` | 101 |  |
| `extensions/qqbot/src/config.test.ts` | 467 |  |
| `extensions/qqbot/src/delivery-trace.test.ts` | 475 |  |
| `extensions/qqbot/src/doctor-contract.test.ts` | 208 |  |
| `extensions/qqbot/src/doctor-contract.ts` | 259 |  |
| `extensions/qqbot/src/doctor.ts` | 8 |  |
| `extensions/qqbot/src/engine/engine-import-boundary.test.ts` | 74 |  |
| `extensions/qqbot/src/engine/gateway/active-cfg.test.ts` | 74 |  |
| `extensions/qqbot/src/engine/gateway/active-cfg.ts` | 47 |  |
| `extensions/qqbot/src/engine/gateway/codec.ts` | 47 |  |
| `extensions/qqbot/src/engine/gateway/constants.ts` | 117 |  |
| `extensions/qqbot/src/engine/gateway/event-dispatcher.ts` | 177 |  |
| `extensions/qqbot/src/engine/gateway/gateway-connection.test.ts` | 402 |  |
| `extensions/qqbot/src/engine/gateway/gateway-connection.ts` | 515 | 📊 |
| `extensions/qqbot/src/engine/gateway/gateway.ts` | 334 |  |
| `extensions/qqbot/src/engine/gateway/inbound-attachments.test.ts` | 184 |  |
| `extensions/qqbot/src/engine/gateway/inbound-attachments.ts` | 365 |  |
| `extensions/qqbot/src/engine/gateway/inbound-context.ts` | 94 |  |
| `extensions/qqbot/src/engine/gateway/inbound-pipeline.self-echo.test.ts` | 309 |  |
| `extensions/qqbot/src/engine/gateway/inbound-pipeline.ts` | 172 |  |
| `extensions/qqbot/src/engine/gateway/ingress-effects.ts` | 21 |  |
| `extensions/qqbot/src/engine/gateway/ingress-envelope.ts` | 111 |  |
| `extensions/qqbot/src/engine/gateway/ingress-errors.ts` | 26 |  |
| `extensions/qqbot/src/engine/gateway/ingress.test-support.ts` | 77 |  |
| `extensions/qqbot/src/engine/gateway/ingress.test.ts` | 259 |  |
| `extensions/qqbot/src/engine/gateway/ingress.ts` | 167 |  |
| `extensions/qqbot/src/engine/gateway/interaction-handler.test.ts` | 524 | 📊 |
| `extensions/qqbot/src/engine/gateway/interaction-handler.ts` | 496 |  |
| `extensions/qqbot/src/engine/gateway/message-queue-ingress.test.ts` | 129 |  |
| `extensions/qqbot/src/engine/gateway/message-queue-ingress.ts` | 70 |  |
| `extensions/qqbot/src/engine/gateway/message-queue.test.ts` | 213 |  |
| `extensions/qqbot/src/engine/gateway/message-queue.ts` | 483 |  |
| `extensions/qqbot/src/engine/gateway/outbound-dispatch.test.ts` | 1554 | 📊 |
| `extensions/qqbot/src/engine/gateway/outbound-dispatch.ts` | 857 | 📊 |
| `extensions/qqbot/src/engine/gateway/reconnect.ts` | 205 |  |
| `extensions/qqbot/src/engine/gateway/response-timeout.test.ts` | 76 |  |
| `extensions/qqbot/src/engine/gateway/response-timeout.ts` | 97 |  |
| `extensions/qqbot/src/engine/gateway/types.ts` | 251 |  |
| `extensions/qqbot/src/engine/gateway/typing-keepalive.test.ts` | 132 |  |
| `extensions/qqbot/src/engine/gateway/typing-keepalive.ts` | 103 |  |
| `extensions/qqbot/src/engine/gateway/ws-client.test.ts` | 144 |  |
| `extensions/qqbot/src/engine/gateway/ws-client.ts` | 23 |  |
| `extensions/qqbot/src/engine/session/known-users.test.ts` | 111 |  |
| `extensions/qqbot/src/engine/session/known-users.ts` | 104 |  |
| `extensions/qqbot/src/engine/session/session-store.test.ts` | 110 |  |
| `extensions/qqbot/src/engine/session/session-store.ts` | 177 |  |
| `extensions/qqbot/src/engine/tools/channel-api.test.ts` | 447 |  |
| `extensions/qqbot/src/engine/tools/channel-api.ts` | 411 |  |
| `extensions/qqbot/src/engine/tools/remind-logic.test.ts` | 112 |  |
| `extensions/qqbot/src/engine/tools/remind-logic.ts` | 363 |  |
| `extensions/qqbot/src/engine/types.ts` | 309 |  |
| `extensions/qqbot/src/exec-approvals.test.ts` | 69 |  |
| `extensions/qqbot/src/exec-approvals.ts` | 241 |  |
| `extensions/qqbot/src/group-policy.test.ts` | 112 |  |
| `extensions/qqbot/src/group-policy.ts` | 21 |  |
| `extensions/qqbot/src/manifest-schema.test.ts` | 57 |  |
| `extensions/qqbot/src/qqbot-test-support.ts` | 30 |  |
| `extensions/qqbot/src/secret-contract.test.ts` | 111 |  |
| `extensions/qqbot/src/secret-contract.ts` | 64 |  |
| `extensions/qqbot/src/state-migrations.test.ts` | 260 |  |
| `extensions/qqbot/src/state-migrations.ts` | 275 |  |
| `extensions/qqbot/src/test-support/runtime.ts` | 55 |  |
| `extensions/qqbot/src/types.ts` | 223 |  |
| `extensions/qqbot/tools-api.ts` | 2 |  |

## Child Modules

- [extensions-qqbot-src-bridge-commands](../extensions-qqbot-src-bridge-commands/MODULE.md)
- [extensions-qqbot-src-bridge-tools](../extensions-qqbot-src-bridge-tools/MODULE.md)
- [extensions-qqbot-src-engine-access](../extensions-qqbot-src-engine-access/MODULE.md)
- [extensions-qqbot-src-engine-adapter](../extensions-qqbot-src-engine-adapter/MODULE.md)
- [extensions-qqbot-src-engine-api](../extensions-qqbot-src-engine-api/MODULE.md)
- [extensions-qqbot-src-engine-approval](../extensions-qqbot-src-engine-approval/MODULE.md)
- [extensions-qqbot-src-engine-commands](../extensions-qqbot-src-engine-commands/MODULE.md)
- [extensions-qqbot-src-engine-config](../extensions-qqbot-src-engine-config/MODULE.md)
- [extensions-qqbot-src-engine-gateway-stages](../extensions-qqbot-src-engine-gateway-stages/MODULE.md)
- [extensions-qqbot-src-engine-group](../extensions-qqbot-src-engine-group/MODULE.md)
- [extensions-qqbot-src-engine-messaging](../extensions-qqbot-src-engine-messaging/MODULE.md)
- [extensions-qqbot-src-engine-ref](../extensions-qqbot-src-engine-ref/MODULE.md)
- [extensions-qqbot-src-engine-utils](../extensions-qqbot-src-engine-utils/MODULE.md)

## Documentation

- [outline.md](outline.md) - Symbol maps for large files
- [imports.md](imports.md) - Dependencies

---

| High 🔴 | Medium 🟡 | Low 🟢 |
| 0 | 0 | 1 |

## 🟢 Low Priority

### `NOTE` (extensions/qqbot/src/command-auth.test.ts:11)

> framework command authorization precedence is covered by the
