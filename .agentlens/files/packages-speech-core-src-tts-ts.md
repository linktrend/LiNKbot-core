# packages/speech-core/src/tts.ts

[← Back to Module](../modules/packages-speech-core-src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1774
- **Language:** TypeScript
- **Symbols:** 54
- **Public symbols:** 21

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 75 | fn | resolvePositiveTimeoutMs | (private) | `function resolvePositiveTimeoutMs(timeoutMs: nu...` |
| 81 | fn | resolveSpeechProviderTimeoutMs | (private) | `function resolveSpeechProviderTimeoutMs(params: {` |
| 95 | type | TtsAttemptReasonCode | (private) | - |
| 104 | type | TtsProviderAttempt | (private) | - |
| 114 | type | TtsResult | pub | - |
| 130 | type | TtsSynthesisResult | pub | - |
| 148 | type | TtsStreamResult | pub | - |
| 167 | type | TtsSynthesisStreamResult | pub | - |
| 169 | type | TtsTelephonyResult | pub | - |
| 185 | type | TtsStatusEntry | (private) | - |
| 201 | fn | resolveConfiguredSpeechVoiceModelRefs | (private) | `function resolveConfiguredSpeechVoiceModelRefs(...` |
| 209 | fn | resolveConfiguredSpeechVoiceModelForProvider | (private) | `function resolveConfiguredSpeechVoiceModelForPr...` |
| 228 | fn | applyVoiceModelToSpeechProviderConfig | (private) | `function applyVoiceModelToSpeechProviderConfig(...` |
| 257 | fn | sortSpeechProvidersForAutoSelection | (private) | `function sortSpeechProvidersForAutoSelection(cf...` |
| 268 | fn | resolvePersonaProviderConfig | (private) | `function resolvePersonaProviderConfig(` |
| 285 | fn | mergeProviderConfigWithPersona | (private) | `function mergeProviderConfigWithPersona(params: {` |
| 311 | fn | resolveRawProviderConfig | (private) | `function resolveRawProviderConfig(` |
| 323 | fn | resolveLazyProviderConfig | (private) | `function resolveLazyProviderConfig(` |
| 402 | fn | getResolvedSpeechProviderConfig | pub | `export function getResolvedSpeechProviderConfig(` |
| 415 | fn | getResolvedSpeechProviderConfigForVoiceModel | (private) | `function getResolvedSpeechProviderConfigForVoic...` |
| 432 | fn | getTtsProvider | pub | `export function getTtsProvider(config: Resolved...` |
| 465 | type | PreparedTtsRequest | pub | - |
| 471 | fn | prepareTtsRequest | pub | `export function prepareTtsRequest(params: {` |
| 494 | fn | resolveExplicitTtsOverrides | pub | `export function resolveExplicitTtsOverrides(par...` |
| 562 | fn | getLastTtsAttempt | pub | `export function getLastTtsAttempt(): TtsStatusE...` |
| 566 | fn | setLastTtsAttempt | pub | `export function setLastTtsAttempt(entry: TtsSta...` |
| 570 | fn | supportsNativeVoiceNoteTts | (private) | `function supportsNativeVoiceNoteTts(channel: st...` |
| 574 | fn | supportsTranscodedVoiceNoteTts | (private) | `function supportsTranscodedVoiceNoteTts(channel...` |
| 579 | fn | resolveTtsSynthesisTarget | (private) | `function resolveTtsSynthesisTarget(channel: str...` |
| 583 | fn | supportsAudioFileVoiceMemoOutput | (private) | `function supportsAudioFileVoiceMemoOutput(param...` |
| 600 | fn | shouldDeliverTtsAsVoice | (private) | `function shouldDeliverTtsAsVoice(params: {` |
| 627 | fn | resolveTtsProviderOrder | pub | `export function resolveTtsProviderOrder(primary...` |
| 646 | fn | resolveTtsProviderCandidates | (private) | `function resolveTtsProviderCandidates(` |
| 659 | fn | resolvePrimaryTtsProviderCandidate | (private) | `function resolvePrimaryTtsProviderCandidate(` |
| 671 | fn | isTtsProviderConfigured | pub | `export function isTtsProviderConfigured(` |
| 696 | fn | formatTtsProviderError | (private) | `function formatTtsProviderError(provider: TtsPr...` |
| 704 | fn | sanitizeTtsErrorForLog | (private) | `function sanitizeTtsErrorForLog(err: unknown): ...` |
| 709 | fn | buildTtsFailureResult | (private) | `function buildTtsFailureResult(` |
| 730 | type | TtsProviderReadyResolution | (private) | - |
| 746 | fn | resolveReadySpeechProvider | (private) | `function resolveReadySpeechProvider(params: {` |
| 817 | fn | prepareSpeechSynthesis | (private) | `async function prepareSpeechSynthesis(params: {` |
| 860 | fn | resolveTtsRequestSetup | (private) | `function resolveTtsRequestSetup(params: {` |
| 904 | fn | readTtsResultString | (private) | `function readTtsResultString(value: unknown): s...` |
| 908 | fn | resolveTtsResultModel | (private) | `function resolveTtsResultModel(` |
| 920 | fn | resolveTtsResultVoice | (private) | `function resolveTtsResultVoice(` |
| 938 | fn | textToSpeech | pub | `export async function textToSpeech(params: {` |
| 1005 | fn | maybePreTranscodeForVoiceDelivery | (private) | `async function maybePreTranscodeForVoiceDeliver...` |
| 1050 | fn | synthesizeSpeech | pub | `export async function synthesizeSpeech(params: {` |
| 1202 | fn | streamSpeech | pub | `export async function streamSpeech(params: {` |
| 1367 | fn | textToSpeechStream | pub | `export async function textToSpeechStream(params: {` |
| 1391 | fn | textToSpeechTelephony | pub | `export async function textToSpeechTelephony(par...` |
| 1534 | fn | listSpeechVoices | pub | `export async function listSpeechVoices(params: {` |
| 1571 | fn | hasLegacyFinalMediaDirective | (private) | `function hasLegacyFinalMediaDirective(text: str...` |
| 1575 | fn | maybeApplyTtsToPayload | pub | `export async function maybeApplyTtsToPayload(pa...` |

## Public API

### `getResolvedSpeechProviderConfig`

```
export function getResolvedSpeechProviderConfig(
```

**Line:** 402 | **Kind:** fn

### `getTtsProvider`

```
export function getTtsProvider(config: ResolvedTtsConfig, prefsPath: string): TtsProvider {
```

**Line:** 432 | **Kind:** fn

### `prepareTtsRequest`

```
export function prepareTtsRequest(params: {
```

**Line:** 471 | **Kind:** fn

### `resolveExplicitTtsOverrides`

```
export function resolveExplicitTtsOverrides(params: {
```

**Line:** 494 | **Kind:** fn

### `getLastTtsAttempt`

```
export function getLastTtsAttempt(): TtsStatusEntry | undefined {
```

**Line:** 562 | **Kind:** fn

### `setLastTtsAttempt`

```
export function setLastTtsAttempt(entry: TtsStatusEntry | undefined): void {
```

**Line:** 566 | **Kind:** fn

### `resolveTtsProviderOrder`

```
export function resolveTtsProviderOrder(primary: TtsProvider, cfg?: OpenClawConfig): TtsProvider[] {
```

**Line:** 627 | **Kind:** fn

### `isTtsProviderConfigured`

```
export function isTtsProviderConfigured(
```

**Line:** 671 | **Kind:** fn

### `textToSpeech`

```
export async function textToSpeech(params: {
```

**Line:** 938 | **Kind:** fn

### `synthesizeSpeech`

```
export async function synthesizeSpeech(params: {
```

**Line:** 1050 | **Kind:** fn

### `streamSpeech`

```
export async function streamSpeech(params: {
```

**Line:** 1202 | **Kind:** fn

### `textToSpeechStream`

```
export async function textToSpeechStream(params: {
```

**Line:** 1367 | **Kind:** fn

### `textToSpeechTelephony`

```
export async function textToSpeechTelephony(params: {
```

**Line:** 1391 | **Kind:** fn

### `listSpeechVoices`

```
export async function listSpeechVoices(params: {
```

**Line:** 1534 | **Kind:** fn

### `maybeApplyTtsToPayload`

```
export async function maybeApplyTtsToPayload(params: {
```

**Line:** 1575 | **Kind:** fn
