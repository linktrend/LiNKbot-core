# Module: extensions/voice-call

[← Back to INDEX](../../INDEX.md)

**Type:** js/ts | **Files:** 74

**Entry point:** `extensions/voice-call/index.ts`

## Files

| File | Lines | Large |
| ---- | ----- | ----- |
| `extensions/voice-call/api.ts` | 18 |  |
| `extensions/voice-call/cli-metadata.ts` | 13 |  |
| `extensions/voice-call/doctor-contract-api.test.ts` | 396 |  |
| `extensions/voice-call/doctor-contract-api.ts` | 395 |  |
| `extensions/voice-call/index.test.ts` | 1286 | 📊 |
| `extensions/voice-call/index.ts` | 911 | 📊 |
| `extensions/voice-call/runtime-api.ts` | 20 |  |
| `extensions/voice-call/runtime-entry.ts` | 3 |  |
| `extensions/voice-call/setup-api.ts` | 52 |  |
| `extensions/voice-call/src/allowlist.test.ts` | 19 |  |
| `extensions/voice-call/src/allowlist.ts` | 23 |  |
| `extensions/voice-call/src/bounded-child-output.test.ts` | 31 |  |
| `extensions/voice-call/src/bounded-child-output.ts` | 36 |  |
| `extensions/voice-call/src/cli.test.ts` | 192 |  |
| `extensions/voice-call/src/cli.ts` | 913 | 📊 |
| `extensions/voice-call/src/config-migration.test.ts` | 144 |  |
| `extensions/voice-call/src/config-migration.ts` | 160 |  |
| `extensions/voice-call/src/config.test.ts` | 849 | 📊 |
| `extensions/voice-call/src/config.ts` | 953 | 📊 |
| `extensions/voice-call/src/core-bridge.ts` | 17 |  |
| `extensions/voice-call/src/gateway-continue-operation.test.ts` | 29 |  |
| `extensions/voice-call/src/gateway-continue-operation.ts` | 211 |  |
| `extensions/voice-call/src/http-headers.test.ts` | 17 |  |
| `extensions/voice-call/src/http-headers.ts` | 19 |  |
| `extensions/voice-call/src/manager.closed-loop.test.ts` | 266 |  |
| `extensions/voice-call/src/manager.inbound-allowlist.test.ts` | 184 |  |
| `extensions/voice-call/src/manager.notify.test.ts` | 393 |  |
| `extensions/voice-call/src/manager.restore.test.ts` | 424 |  |
| `extensions/voice-call/src/manager.test-harness.ts` | 162 |  |
| `extensions/voice-call/src/manager.ts` | 471 |  |
| `extensions/voice-call/src/media-stream.test.ts` | 1088 | 📊 |
| `extensions/voice-call/src/media-stream.ts` | 860 | 📊 |
| `extensions/voice-call/src/proxy-ip.ts` | 18 |  |
| `extensions/voice-call/src/realtime-agent-context.test.ts` | 121 |  |
| `extensions/voice-call/src/realtime-agent-context.ts` | 118 |  |
| `extensions/voice-call/src/realtime-defaults.ts` | 7 |  |
| `extensions/voice-call/src/realtime-fast-context.test.ts` | 77 |  |
| `extensions/voice-call/src/realtime-fast-context.ts` | 31 |  |
| `extensions/voice-call/src/realtime-transcription.runtime.ts` | 6 |  |
| `extensions/voice-call/src/realtime-voice.runtime.ts` | 7 |  |
| `extensions/voice-call/src/resolve-call-agent-id.ts` | 11 |  |
| `extensions/voice-call/src/response-generator.test.ts` | 918 | 📊 |
| `extensions/voice-call/src/response-generator.ts` | 471 |  |
| `extensions/voice-call/src/response-model.test.ts` | 72 |  |
| `extensions/voice-call/src/response-model.ts` | 27 |  |
| `extensions/voice-call/src/runtime-state.ts` | 24 |  |
| `extensions/voice-call/src/runtime.test.ts` | 764 | 📊 |
| `extensions/voice-call/src/runtime.ts` | 576 | 📊 |
| `extensions/voice-call/src/store-path.ts` | 8 |  |
| `extensions/voice-call/src/telephony-audio.test.ts` | 40 |  |
| `extensions/voice-call/src/telephony-audio.ts` | 13 |  |
| `extensions/voice-call/src/telephony-tts.test.ts` | 204 |  |
| `extensions/voice-call/src/telephony-tts.ts` | 104 |  |
| `extensions/voice-call/src/test-fixtures.ts` | 82 |  |
| `extensions/voice-call/src/tts-provider-voice.test.ts` | 51 |  |
| `extensions/voice-call/src/tts-provider-voice.ts` | 33 |  |
| `extensions/voice-call/src/tunnel.process.test.ts` | 164 |  |
| `extensions/voice-call/src/tunnel.test.ts` | 451 |  |
| `extensions/voice-call/src/tunnel.ts` | 362 |  |
| `extensions/voice-call/src/types.ts` | 322 |  |
| `extensions/voice-call/src/utils.test.ts` | 18 |  |
| `extensions/voice-call/src/utils.ts` | 18 |  |
| `extensions/voice-call/src/voice-mapping.test.ts` | 20 |  |
| `extensions/voice-call/src/voice-mapping.ts` | 52 |  |
| `extensions/voice-call/src/webhook-exposure.test.ts` | 27 |  |
| `extensions/voice-call/src/webhook-exposure.ts` | 93 |  |
| `extensions/voice-call/src/webhook-replay.ts` | 55 |  |
| `extensions/voice-call/src/webhook-security.test.ts` | 955 | 📊 |
| `extensions/voice-call/src/webhook-security.ts` | 944 | 📊 |
| `extensions/voice-call/src/webhook.hangup-once.lifecycle.test.ts` | 212 |  |
| `extensions/voice-call/src/webhook.test.ts` | 2353 | 📊 |
| `extensions/voice-call/src/webhook.ts` | 1038 | 📊 |
| `extensions/voice-call/src/webhook.types.ts` | 8 |  |
| `extensions/voice-call/src/websocket-test-support.ts` | 73 |  |

## Child Modules

- [extensions-voice-call-src-manager](../extensions-voice-call-src-manager/MODULE.md)
- [extensions-voice-call-src-providers](../extensions-voice-call-src-providers/MODULE.md)
- [extensions-voice-call-src-webhook](../extensions-voice-call-src-webhook/MODULE.md)

## Documentation

- [outline.md](outline.md) - Symbol maps for large files
- [memory.md](memory.md) - Warnings and TODOs
- [imports.md](imports.md) - Dependencies
