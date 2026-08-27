# Module: extensions/mattermost/src/mattermost

[← Back to INDEX](../../INDEX.md)

**Type:** implicit | **Files:** 62

## Files

| File | Lines | Large |
| ---- | ----- | ----- |
| `extensions/mattermost/src/mattermost/accounts.test.ts` | 226 |  |
| `extensions/mattermost/src/mattermost/accounts.ts` | 162 |  |
| `extensions/mattermost/src/mattermost/client.fetch-timeout.test.ts` | 163 |  |
| `extensions/mattermost/src/mattermost/client.retry.test.ts` | 491 |  |
| `extensions/mattermost/src/mattermost/client.test.ts` | 648 | 📊 |
| `extensions/mattermost/src/mattermost/client.ts` | 748 | 📊 |
| `extensions/mattermost/src/mattermost/directory.test.ts` | 253 |  |
| `extensions/mattermost/src/mattermost/directory.ts` | 205 |  |
| `extensions/mattermost/src/mattermost/draft-stream.test.ts` | 683 | 📊 |
| `extensions/mattermost/src/mattermost/draft-stream.ts` | 318 |  |
| `extensions/mattermost/src/mattermost/interactions.test.ts` | 984 | 📊 |
| `extensions/mattermost/src/mattermost/interactions.ts` | 674 | 📊 |
| `extensions/mattermost/src/mattermost/model-picker.test.ts` | 297 |  |
| `extensions/mattermost/src/mattermost/model-picker.ts` | 415 |  |
| `extensions/mattermost/src/mattermost/monitor-activation.test.ts` | 68 |  |
| `extensions/mattermost/src/mattermost/monitor-activation.ts` | 41 |  |
| `extensions/mattermost/src/mattermost/monitor-auth.test.ts` | 180 |  |
| `extensions/mattermost/src/mattermost/monitor-auth.ts` | 345 |  |
| `extensions/mattermost/src/mattermost/monitor-context.ts` | 167 |  |
| `extensions/mattermost/src/mattermost/monitor-draft-delivery.ts` | 109 |  |
| `extensions/mattermost/src/mattermost/monitor-helpers.test-support.ts` | 186 |  |
| `extensions/mattermost/src/mattermost/monitor-helpers.ts` | 69 |  |
| `extensions/mattermost/src/mattermost/monitor-ingress.test.ts` | 524 | 📊 |
| `extensions/mattermost/src/mattermost/monitor-ingress.ts` | 303 |  |
| `extensions/mattermost/src/mattermost/monitor-onchar.test-support.ts` | 33 |  |
| `extensions/mattermost/src/mattermost/monitor-onchar.ts` | 28 |  |
| `extensions/mattermost/src/mattermost/monitor-resources.test.ts` | 505 | 📊 |
| `extensions/mattermost/src/mattermost/monitor-resources.ts` | 271 |  |
| `extensions/mattermost/src/mattermost/monitor-slash.test.ts` | 227 |  |
| `extensions/mattermost/src/mattermost/monitor-slash.ts` | 211 |  |
| `extensions/mattermost/src/mattermost/monitor-websocket.test.ts` | 765 | 📊 |
| `extensions/mattermost/src/mattermost/monitor-websocket.ts` | 435 |  |
| `extensions/mattermost/src/mattermost/monitor.authz.test.ts` | 307 |  |
| `extensions/mattermost/src/mattermost/monitor.channel-kind.test-support.ts` | 26 |  |
| `extensions/mattermost/src/mattermost/monitor.inbound-system-event.test.ts` | 1717 | 📊 |
| `extensions/mattermost/src/mattermost/monitor.test.ts` | 927 | 📊 |
| `extensions/mattermost/src/mattermost/monitor.ts` | 2107 | 📊 |
| `extensions/mattermost/src/mattermost/no-visible-reply-diagnostic.test.ts` | 141 |  |
| `extensions/mattermost/src/mattermost/no-visible-reply-diagnostic.ts` | 64 |  |
| `extensions/mattermost/src/mattermost/probe.test.ts` | 195 |  |
| `extensions/mattermost/src/mattermost/probe.ts` | 80 |  |
| `extensions/mattermost/src/mattermost/reactions.test-helpers.ts` | 123 |  |
| `extensions/mattermost/src/mattermost/reactions.test.ts` | 502 | 📊 |
| `extensions/mattermost/src/mattermost/reactions.ts` | 231 |  |
| `extensions/mattermost/src/mattermost/reconnect.test.ts` | 202 |  |
| `extensions/mattermost/src/mattermost/reconnect.ts` | 115 |  |
| `extensions/mattermost/src/mattermost/reply-delivery.test.ts` | 312 |  |
| `extensions/mattermost/src/mattermost/reply-delivery.ts` | 147 |  |
| `extensions/mattermost/src/mattermost/runtime-api.ts` | 40 |  |
| `extensions/mattermost/src/mattermost/send.test.ts` | 830 | 📊 |
| `extensions/mattermost/src/mattermost/send.ts` | 496 |  |
| `extensions/mattermost/src/mattermost/slash-commands.test.ts` | 279 |  |
| `extensions/mattermost/src/mattermost/slash-commands.ts` | 620 | 📊 |
| `extensions/mattermost/src/mattermost/slash-http.send-config.test.ts` | 395 |  |
| `extensions/mattermost/src/mattermost/slash-http.test.ts` | 1019 | 📊 |
| `extensions/mattermost/src/mattermost/slash-http.ts` | 934 | 📊 |
| `extensions/mattermost/src/mattermost/slash-state.test.ts` | 233 |  |
| `extensions/mattermost/src/mattermost/slash-state.ts` | 431 |  |
| `extensions/mattermost/src/mattermost/target-resolution.test.ts` | 190 |  |
| `extensions/mattermost/src/mattermost/target-resolution.ts` | 176 |  |
| `extensions/mattermost/src/mattermost/thread-participation.test.ts` | 123 |  |
| `extensions/mattermost/src/mattermost/thread-participation.ts` | 78 |  |

## Documentation

- [outline.md](outline.md) - Symbol maps for large files
- [imports.md](imports.md) - Dependencies

---

| High 🔴 | Medium 🟡 | Low 🟢 |
| 0 | 0 | 2 |

## 🟢 Low Priority

### `NOTE` (extensions/mattermost/src/mattermost/directory.ts:63)

> Uses per_page=200 which covers most instances. Mattermost does not

### `NOTE` (extensions/mattermost/src/mattermost/slash-commands.ts:602)

> Wildcard listen hosts are valid bind addresses but are not routable callback
