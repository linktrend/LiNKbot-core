# Module: extensions/signal

[← Back to INDEX](../../INDEX.md)

**Type:** js/ts | **Files:** 90

**Entry point:** `extensions/signal/index.ts`

## Files

| File | Lines | Large |
| ---- | ----- | ----- |
| `extensions/signal/api.ts` | 66 |  |
| `extensions/signal/channel-config-api.ts` | 2 |  |
| `extensions/signal/channel-entry.ts` | 17 |  |
| `extensions/signal/channel-plugin-api.ts` | 3 |  |
| `extensions/signal/config-api.ts` | 3 |  |
| `extensions/signal/contract-api.ts` | 4 |  |
| `extensions/signal/doctor-contract-api.test.ts` | 78 |  |
| `extensions/signal/doctor-contract-api.ts` | 29 |  |
| `extensions/signal/index.ts` | 17 |  |
| `extensions/signal/reaction-runtime-api.ts` | 7 |  |
| `extensions/signal/runtime-api.ts` | 49 |  |
| `extensions/signal/secret-contract-api.ts` | 4 |  |
| `extensions/signal/setup-entry.ts` | 10 |  |
| `extensions/signal/src/account-types.ts` | 7 |  |
| `extensions/signal/src/accounts.test.ts` | 51 |  |
| `extensions/signal/src/accounts.ts` | 124 |  |
| `extensions/signal/src/aliases.test.ts` | 263 |  |
| `extensions/signal/src/aliases.ts` | 192 |  |
| `extensions/signal/src/approval-auth.test.ts` | 73 |  |
| `extensions/signal/src/approval-auth.ts` | 41 |  |
| `extensions/signal/src/approval-handler.runtime.test.ts` | 220 |  |
| `extensions/signal/src/approval-handler.runtime.ts` | 259 |  |
| `extensions/signal/src/approval-native.test.ts` | 552 | 📊 |
| `extensions/signal/src/approval-native.ts` | 324 |  |
| `extensions/signal/src/approval-reactions.test.ts` | 970 | 📊 |
| `extensions/signal/src/approval-reactions.ts` | 1001 | 📊 |
| `extensions/signal/src/approval-resolver.ts` | 29 |  |
| `extensions/signal/src/channel.runtime.ts` | 6 |  |
| `extensions/signal/src/channel.setup.ts` | 12 |  |
| `extensions/signal/src/channel.ts` | 793 | 📊 |
| `extensions/signal/src/client-adapter.test.ts` | 643 | 📊 |
| `extensions/signal/src/client-adapter.ts` | 256 |  |
| `extensions/signal/src/client-container.real-server.test.ts` | 98 |  |
| `extensions/signal/src/client-container.test.ts` | 1669 | 📊 |
| `extensions/signal/src/client-container.ts` | 965 | 📊 |
| `extensions/signal/src/client.test.ts` | 444 |  |
| `extensions/signal/src/client.ts` | 457 |  |
| `extensions/signal/src/config-schema.test.ts` | 148 |  |
| `extensions/signal/src/config-schema.ts` | 7 |  |
| `extensions/signal/src/config-ui-hints.ts` | 23 |  |
| `extensions/signal/src/core.test.ts` | 1288 | 📊 |
| `extensions/signal/src/daemon.test.ts` | 198 |  |
| `extensions/signal/src/daemon.ts` | 218 |  |
| `extensions/signal/src/format.chunking.test.ts` | 437 |  |
| `extensions/signal/src/format.test.ts` | 162 |  |
| `extensions/signal/src/format.ts` | 280 |  |
| `extensions/signal/src/identity.ts` | 132 |  |
| `extensions/signal/src/inbound-context.contract.test.ts` | 33 |  |
| `extensions/signal/src/install-signal-cli.test.ts` | 655 | 📊 |
| `extensions/signal/src/install-signal-cli.ts` | 414 |  |
| `extensions/signal/src/message-actions.test.ts` | 260 |  |
| `extensions/signal/src/message-actions.ts` | 201 |  |
| `extensions/signal/src/monitor.approval-reply-delivery.test.ts` | 295 |  |
| `extensions/signal/src/monitor.tool-result.autostart.test.ts` | 295 |  |
| `extensions/signal/src/monitor.tool-result.pairs-uuid-only-senders-uuid-allowlist-entry.test.ts` | 294 |  |
| `extensions/signal/src/monitor.tool-result.sends-tool-summaries-responseprefix.test.ts` | 985 | 📊 |
| `extensions/signal/src/monitor.tool-result.test-harness.ts` | 332 |  |
| `extensions/signal/src/monitor.ts` | 723 | 📊 |
| `extensions/signal/src/normalize.test.ts` | 56 |  |
| `extensions/signal/src/normalize.ts` | 73 |  |
| `extensions/signal/src/outbound-session.test.ts` | 30 |  |
| `extensions/signal/src/outbound-session.ts` | 59 |  |
| `extensions/signal/src/outbound-tool-trace-sanitize.test.ts` | 19 |  |
| `extensions/signal/src/presentation-fallback.ts` | 49 |  |
| `extensions/signal/src/probe.contract.test.ts` | 10 |  |
| `extensions/signal/src/probe.ts` | 64 |  |
| `extensions/signal/src/question-reactions.test.ts` | 92 |  |
| `extensions/signal/src/question-reactions.ts` | 168 |  |
| `extensions/signal/src/reaction-level.ts` | 35 |  |
| `extensions/signal/src/reaction-targets.ts` | 17 |  |
| `extensions/signal/src/reply-authors-state.ts` | 21 |  |
| `extensions/signal/src/reply-authors.test-helpers.ts` | 7 |  |
| `extensions/signal/src/reply-authors.ts` | 224 |  |
| `extensions/signal/src/rpc-context.ts` | 23 |  |
| `extensions/signal/src/runtime-api.ts` | 52 |  |
| `extensions/signal/src/runtime.test-support.ts` | 12 |  |
| `extensions/signal/src/runtime.ts` | 10 |  |
| `extensions/signal/src/send-reactions.test.ts` | 113 |  |
| `extensions/signal/src/send-reactions.ts` | 193 |  |
| `extensions/signal/src/send.runtime.ts` | 2 |  |
| `extensions/signal/src/send.test.ts` | 711 | 📊 |
| `extensions/signal/src/send.ts` | 454 |  |
| `extensions/signal/src/session-route.test.ts` | 34 |  |
| `extensions/signal/src/setup-core.ts` | 273 |  |
| `extensions/signal/src/setup-surface.ts` | 88 |  |
| `extensions/signal/src/shared.ts` | 148 |  |
| `extensions/signal/src/signal-ingress.test.ts` | 275 |  |
| `extensions/signal/src/signal-ingress.ts` | 222 |  |
| `extensions/signal/src/sse-reconnect.ts` | 98 |  |
| `extensions/signal/src/uuid.ts` | 14 |  |

## Child Modules

- [extensions-signal-src-monitor](../extensions-signal-src-monitor/MODULE.md)

## Documentation

- [outline.md](outline.md) - Symbol maps for large files
- [imports.md](imports.md) - Dependencies
