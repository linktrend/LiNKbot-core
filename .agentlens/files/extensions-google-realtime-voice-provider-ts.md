# extensions/google/realtime-voice-provider.ts

[← Back to Module](../modules/extensions-google/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1059
- **Language:** TypeScript
- **Symbols:** 35
- **Public symbols:** 1

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 78 | type | GoogleRealtimeSensitivity | (private) | - |
| 79 | type | GoogleRealtimeThinkingLevel | (private) | - |
| 80 | type | GoogleRealtimeActivityHandling | (private) | - |
| 81 | type | GoogleRealtimeTurnCoverage | (private) | - |
| 101 | type | GoogleRealtimeVoiceProviderConfig | (private) | - |
| 121 | type | GoogleRealtimeLiveConfig | (private) | - |
| 143 | type | GoogleRealtimeVoiceBridgeConfig | (private) | - |
| 144 | type | GoogleLiveTranscription | (private) | - |
| 146 | fn | trimToUndefined | (private) | `function trimToUndefined(value: unknown): strin...` |
| 150 | fn | asSensitivity | (private) | `function asSensitivity(value: unknown): GoogleR...` |
| 155 | fn | asThinkingLevel | (private) | `function asThinkingLevel(value: unknown): Googl...` |
| 165 | fn | asActivityHandling | (private) | `function asActivityHandling(value: unknown): Go...` |
| 182 | fn | asTurnCoverage | (private) | `function asTurnCoverage(value: unknown): Google...` |
| 199 | fn | asNonNegativeInteger | (private) | `function asNonNegativeInteger(value: unknown): ...` |
| 204 | fn | asGoogleRealtimeThinkingBudget | (private) | `function asGoogleRealtimeThinkingBudget(value: ...` |
| 213 | fn | resolveGoogleRealtimeProviderConfigRecord | (private) | `function resolveGoogleRealtimeProviderConfigRec...` |
| 230 | fn | normalizeProviderConfig | (private) | `function normalizeProviderConfig(` |
| 259 | fn | resolveEnvApiKey | (private) | `function resolveEnvApiKey(): string | undefined {` |
| 265 | fn | isGemini31LiveModel | (private) | `function isGemini31LiveModel(model: string): bo...` |
| 270 | fn | supportsAsyncFunctionCalling | (private) | `function supportsAsyncFunctionCalling(model: st...` |
| 274 | fn | buildThinkingConfig | (private) | `function buildThinkingConfig(` |
| 294 | fn | buildRealtimeInputConfig | (private) | `function buildRealtimeInputConfig(` |
| 326 | fn | buildFunctionDeclarations | (private) | `function buildFunctionDeclarations(` |
| 360 | fn | buildGoogleLiveConnectConfig | (private) | `function buildGoogleLiveConnectConfig(` |
| 394 | fn | toGoogleModelResource | (private) | `function toGoogleModelResource(model: string): ...` |
| 398 | fn | buildBrowserInitialSetup | (private) | `function buildBrowserInitialSetup(model: string) {` |
| 411 | fn | parsePcmSampleRate | (private) | `function parsePcmSampleRate(mimeType: string | ...` |
| 417 | fn | isMulawSilence | (private) | `function isMulawSilence(audio: Buffer): boolean {` |
| 421 | fn | isPcm16Silence | (private) | `function isPcm16Silence(audio: Buffer): boolean {` |
| 434 | fn | formatGoogleLiveCloseEvent | (private) | `function formatGoogleLiveCloseEvent(` |
| 452 | class | GoogleRealtimeVoiceBridge | (private) | - |
| 897 | fn | convertMulaw8kToPcm16k | (private) | `function convertMulaw8kToPcm16k(muLaw: Buffer):...` |
| 911 | fn | decodeMulawSample | (private) | `function decodeMulawSample(value: number): numb...` |
| 921 | fn | createGoogleRealtimeBrowserSession | (private) | `async function createGoogleRealtimeBrowserSession(` |
| 1003 | fn | buildGoogleRealtimeVoiceProvider | pub | `export function buildGoogleRealtimeVoiceProvide...` |

## Public API

### `buildGoogleRealtimeVoiceProvider`

```
export function buildGoogleRealtimeVoiceProvider(): RealtimeVoiceProviderPlugin {
```

**Line:** 1003 | **Kind:** fn
