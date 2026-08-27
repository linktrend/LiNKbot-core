# Module: extensions/matrix/src/matrix/monitor

[← Back to INDEX](../../INDEX.md)

**Type:** js/ts | **Files:** 72

**Entry point:** `extensions/matrix/src/matrix/monitor/index.ts`

## Files

| File | Lines | Large |
| ---- | ----- | ----- |
| `extensions/matrix/src/matrix/monitor/access-state.test.ts` | 242 |  |
| `extensions/matrix/src/matrix/monitor/access-state.ts` | 146 |  |
| `extensions/matrix/src/matrix/monitor/ack-config.test.ts` | 58 |  |
| `extensions/matrix/src/matrix/monitor/ack-config.ts` | 28 |  |
| `extensions/matrix/src/matrix/monitor/allowlist.test.ts` | 46 |  |
| `extensions/matrix/src/matrix/monitor/allowlist.ts` | 93 |  |
| `extensions/matrix/src/matrix/monitor/auto-join.test.ts` | 216 |  |
| `extensions/matrix/src/matrix/monitor/auto-join.ts` | 96 |  |
| `extensions/matrix/src/matrix/monitor/config.test.ts` | 339 |  |
| `extensions/matrix/src/matrix/monitor/config.ts` | 570 | 📊 |
| `extensions/matrix/src/matrix/monitor/context-summary.ts` | 44 |  |
| `extensions/matrix/src/matrix/monitor/direct.test.ts` | 595 | 📊 |
| `extensions/matrix/src/matrix/monitor/direct.ts` | 311 |  |
| `extensions/matrix/src/matrix/monitor/events.test.ts` | 1846 | 📊 |
| `extensions/matrix/src/matrix/monitor/events.ts` | 405 |  |
| `extensions/matrix/src/matrix/monitor/handler.audio-preflight.test.ts` | 496 |  |
| `extensions/matrix/src/matrix/monitor/handler.body-for-agent.test.ts` | 393 |  |
| `extensions/matrix/src/matrix/monitor/handler.group-history.test.ts` | 760 | 📊 |
| `extensions/matrix/src/matrix/monitor/handler.media-failure.test.ts` | 265 |  |
| `extensions/matrix/src/matrix/monitor/handler.strip-mention.test.ts` | 151 |  |
| `extensions/matrix/src/matrix/monitor/handler.test-helpers.ts` | 448 |  |
| `extensions/matrix/src/matrix/monitor/handler.test.ts` | 4434 | 📊 |
| `extensions/matrix/src/matrix/monitor/handler.thread-root-media.test.ts` | 93 |  |
| `extensions/matrix/src/matrix/monitor/handler.ts` | 2596 | 📊 |
| `extensions/matrix/src/matrix/monitor/inbound-dedupe-migration.ts` | 294 |  |
| `extensions/matrix/src/matrix/monitor/inbound-dedupe.test.ts` | 93 |  |
| `extensions/matrix/src/matrix/monitor/inbound-dedupe.ts` | 76 |  |
| `extensions/matrix/src/matrix/monitor/index.test.ts` | 1086 | 📊 |
| `extensions/matrix/src/matrix/monitor/index.ts` | 553 | 📊 |
| `extensions/matrix/src/matrix/monitor/location.test.ts` | 38 |  |
| `extensions/matrix/src/matrix/monitor/location.ts` | 113 |  |
| `extensions/matrix/src/matrix/monitor/media.test.ts` | 160 |  |
| `extensions/matrix/src/matrix/monitor/media.ts` | 102 |  |
| `extensions/matrix/src/matrix/monitor/mentions.test.ts` | 326 |  |
| `extensions/matrix/src/matrix/monitor/mentions.ts` | 233 |  |
| `extensions/matrix/src/matrix/monitor/preflight-audio.runtime.ts` | 18 |  |
| `extensions/matrix/src/matrix/monitor/preflight-audio.test.ts` | 195 |  |
| `extensions/matrix/src/matrix/monitor/preflight-audio.ts` | 124 |  |
| `extensions/matrix/src/matrix/monitor/reaction-events.test.ts` | 495 |  |
| `extensions/matrix/src/matrix/monitor/reaction-events.ts` | 277 |  |
| `extensions/matrix/src/matrix/monitor/recent-invite.test.ts` | 93 |  |
| `extensions/matrix/src/matrix/monitor/recent-invite.ts` | 31 |  |
| `extensions/matrix/src/matrix/monitor/replies.test.ts` | 258 |  |
| `extensions/matrix/src/matrix/monitor/replies.ts` | 142 |  |
| `extensions/matrix/src/matrix/monitor/reply-context.test.ts` | 302 |  |
| `extensions/matrix/src/matrix/monitor/reply-context.ts` | 96 |  |
| `extensions/matrix/src/matrix/monitor/room-history.test.ts` | 475 |  |
| `extensions/matrix/src/matrix/monitor/room-history.ts` | 507 | 📊 |
| `extensions/matrix/src/matrix/monitor/room-info.test.ts` | 208 |  |
| `extensions/matrix/src/matrix/monitor/room-info.ts` | 128 |  |
| `extensions/matrix/src/matrix/monitor/rooms.test.ts` | 122 |  |
| `extensions/matrix/src/matrix/monitor/rooms.ts` | 53 |  |
| `extensions/matrix/src/matrix/monitor/route.test.ts` | 256 |  |
| `extensions/matrix/src/matrix/monitor/route.ts` | 180 |  |
| `extensions/matrix/src/matrix/monitor/runtime-api.ts` | 25 |  |
| `extensions/matrix/src/matrix/monitor/startup-verification.test.ts` | 353 |  |
| `extensions/matrix/src/matrix/monitor/startup-verification.ts` | 411 |  |
| `extensions/matrix/src/matrix/monitor/startup.test.ts` | 265 |  |
| `extensions/matrix/src/matrix/monitor/startup.ts` | 170 |  |
| `extensions/matrix/src/matrix/monitor/status.ts` | 125 |  |
| `extensions/matrix/src/matrix/monitor/sync-lifecycle.test.ts` | 244 |  |
| `extensions/matrix/src/matrix/monitor/sync-lifecycle.ts` | 92 |  |
| `extensions/matrix/src/matrix/monitor/task-runner.ts` | 38 |  |
| `extensions/matrix/src/matrix/monitor/test-events.ts` | 22 |  |
| `extensions/matrix/src/matrix/monitor/thread-context.test.ts` | 163 |  |
| `extensions/matrix/src/matrix/monitor/thread-context.ts` | 110 |  |
| `extensions/matrix/src/matrix/monitor/threads.test.ts` | 69 |  |
| `extensions/matrix/src/matrix/monitor/threads.ts` | 86 |  |
| `extensions/matrix/src/matrix/monitor/types.ts` | 31 |  |
| `extensions/matrix/src/matrix/monitor/verification-events.ts` | 636 | 📊 |
| `extensions/matrix/src/matrix/monitor/verification-utils.test.ts` | 52 |  |
| `extensions/matrix/src/matrix/monitor/verification-utils.ts` | 47 |  |

## Documentation

- [outline.md](outline.md) - Symbol maps for large files
- [imports.md](imports.md) - Dependencies
