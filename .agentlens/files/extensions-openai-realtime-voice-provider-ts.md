# extensions/openai/realtime-voice-provider.ts

[← Back to Module](../modules/extensions-openai/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1608
- **Language:** TypeScript
- **Symbols:** 36
- **Public symbols:** 1

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 50 | type | OpenAIRealtimeVoice | (private) | - |
| 62 | type | OpenAIRealtimeVoiceProviderConfig | (private) | - |
| 78 | type | OpenAIRealtimeVoiceBridgeConfig | (private) | - |
| 120 | fn | normalizeOpenAIRealtimeVoice | (private) | `function normalizeOpenAIRealtimeVoice(value: un...` |
| 130 | type | RealtimeEvent | (private) | - |
| 156 | type | RealtimeTurnDetectionConfig | (private) | - |
| 165 | type | RealtimeGaSessionUpdate | (private) | - |
| 190 | type | RealtimeAzureDeploymentSessionUpdate | (private) | - |
| 206 | type | OpenAIRealtimeAudioFormatConfig | (private) | - |
| 215 | fn | normalizeProviderConfig | (private) | `function normalizeProviderConfig(` |
| 242 | fn | asNonNegativeInteger | (private) | `function asNonNegativeInteger(value: unknown): ...` |
| 247 | fn | asUnitInterval | (private) | `function asUnitInterval(value: unknown): number...` |
| 252 | type | OpenAIRealtimeApiKeyResolution | (private) | - |
| 265 | fn | resolveKeychainSecretRef | (private) | `function resolveKeychainSecretRef(value: string...` |
| 299 | fn | resolveOpenAIRealtimeSecretInput | (private) | `function resolveOpenAIRealtimeSecretInput(` |
| 311 | fn | resolveOpenAIRealtimeEnvApiKey | (private) | `function resolveOpenAIRealtimeEnvApiKey(): Open...` |
| 320 | fn | resolveOpenAIRealtimeApiKey | (private) | `function resolveOpenAIRealtimeApiKey(` |
| 333 | fn | requireOpenAIRealtimeApiKey | (private) | `function requireOpenAIRealtimeApiKey(` |
| 344 | fn | hasOpenAIRealtimeConfiguredApiKeyInput | (private) | `function hasOpenAIRealtimeConfiguredApiKeyInput...` |
| 348 | fn | hasOpenAIRealtimeApiKeyInput | (private) | `function hasOpenAIRealtimeApiKeyInput(configure...` |
| 355 | fn | normalizeOpenAIRealtimeTools | (private) | `function normalizeOpenAIRealtimeTools(` |
| 389 | fn | resolveOpenAIRealtimePlatformAuth | (private) | `async function resolveOpenAIRealtimePlatformAut...` |
| 426 | fn | requireOpenAIRealtimePlatformAuth | (private) | `async function requireOpenAIRealtimePlatformAut...` |
| 437 | fn | hasOpenAIRealtimePlatformAuthInput | (private) | `function hasOpenAIRealtimePlatformAuthInput(par...` |
| 456 | fn | isOpenAIRealtimeMaxSessionDurationError | (private) | `function isOpenAIRealtimeMaxSessionDurationErro...` |
| 464 | fn | readRealtimeErrorEventId | (private) | `function readRealtimeErrorEventId(error: unknow...` |
| 472 | fn | base64ToBuffer | (private) | `function base64ToBuffer(b64: string): Buffer {` |
| 476 | class | OpenAIRealtimeVoiceBridge | (private) | - |
| 613 | fn | settleResolve | (private) | `const settleResolve = () => {` |
| 621 | fn | settleReject | (private) | `const settleReject = (error: Error) => {` |
| 637 | fn | openWebSocket | (private) | `const openWebSocket = (connection: { url: strin...` |
| 656 | fn | rejectStartup | (private) | `const rejectStartup = (error: Error) => {` |
| 1042 | fn | emitServerEvent | (private) | `const emitServerEvent = () =>` |
| 1459 | fn | resolveOpenAIRealtimeBrowserOfferHeaders | (private) | `function resolveOpenAIRealtimeBrowserOfferHeade...` |
| 1477 | fn | createOpenAIRealtimeBrowserSession | (private) | `async function createOpenAIRealtimeBrowserSession(` |
| 1549 | fn | buildOpenAIRealtimeVoiceProvider | pub | `export function buildOpenAIRealtimeVoiceProvide...` |

## Public API

### `buildOpenAIRealtimeVoiceProvider`

```
export function buildOpenAIRealtimeVoiceProvider(): RealtimeVoiceProviderPlugin {
```

**Line:** 1549 | **Kind:** fn
