# extensions/discord/src/voice/realtime.ts

[← Back to Module](../modules/extensions-discord-src-voice/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1800
- **Language:** TypeScript
- **Symbols:** 35
- **Public symbols:** 4

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 68 | fn | resolveDiscordRealtimeVoiceAgentConsultTools | (private) | `function resolveDiscordRealtimeVoiceAgentConsul...` |
| 91 | fn | discordRealtimeTalkPayload | (private) | `const discordRealtimeTalkPayload = () => ({});` |
| 106 | type | DiscordVoiceMode | pub | - |
| 108 | type | DiscordRealtimeSpeakerContext | (private) | - |
| 110 | type | DiscordRealtimeVoiceConfig | (private) | - |
| 112 | type | PendingSpeakerTurnStats | (private) | - |
| 119 | type | PendingSpeakerTurn | (private) | - |
| 124 | type | TranscriptUtteranceAttribution | (private) | - |
| 129 | type | RecentAgentProxyConsultResult | (private) | - |
| 133 | type | AgentProxyConsultState | (private) | - |
| 141 | type | AgentProxyConsultHandle | (private) | - |
| 143 | fn | formatRealtimeInterruptionLog | (private) | `function formatRealtimeInterruptionLog(event: R...` |
| 173 | fn | formatRealtimeLifecycleLog | (private) | `function formatRealtimeLifecycleLog(event: Real...` |
| 181 | fn | isRealtimeResponseCancelled | (private) | `function isRealtimeResponseCancelled(event: Rea...` |
| 189 | fn | shouldLogRealtimeVerboseEvent | (private) | `function shouldLogRealtimeVerboseEvent(event: R...` |
| 193 | fn | readProviderConfigString | (private) | `function readProviderConfigString(` |
| 201 | fn | readProviderConfigBoolean | (private) | `function readProviderConfigBoolean(` |
| 208 | fn | resolveDiscordVoiceMode | pub | `export function resolveDiscordVoiceMode(voice: ...` |
| 216 | fn | isDiscordRealtimeVoiceMode | pub | `export function isDiscordRealtimeVoiceMode(` |
| 222 | fn | isDiscordAgentProxyVoiceMode | (private) | `function isDiscordAgentProxyVoiceMode(mode: Dis...` |
| 226 | fn | resolveDiscordRealtimeInterruptResponseOnInputAudio | (private) | `function resolveDiscordRealtimeInterruptRespons...` |
| 234 | fn | resolveDiscordRealtimeBargeIn | (private) | `function resolveDiscordRealtimeBargeIn(params: {` |
| 245 | fn | buildDiscordSpeakExactUserMessage | (private) | `function buildDiscordSpeakExactUserMessage(text...` |
| 254 | fn | isEscapedQuote | (private) | `function isEscapedQuote(text: string, quoteInde...` |
| 262 | fn | readJsonStringAfterLabel | (private) | `function readJsonStringAfterLabel(text: string,...` |
| 285 | fn | collectRealtimeConsultArgStrings | (private) | `function collectRealtimeConsultArgStrings(args:...` |
| 299 | fn | extractDiscordExactSpeechConsultText | (private) | `function extractDiscordExactSpeechConsultText(a...` |
| 313 | fn | normalizeControlSpeechText | (private) | `function normalizeControlSpeechText(text: strin...` |
| 317 | class | DiscordRealtimeVoiceSession | pub | - |
| 1707 | fn | isDiscordRealtimeSpeakerContext | (private) | `function isDiscordRealtimeSpeakerContext(value:...` |
| 1717 | fn | pcm16MonoDurationMs | (private) | `function pcm16MonoDurationMs(audio: Buffer, sam...` |
| 1725 | fn | buildProviderConfigs | (private) | `function buildProviderConfigs(` |
| 1732 | fn | buildProviderConfigOverrides | (private) | `function buildProviderConfigOverrides(` |
| 1749 | fn | resolveDiscordRealtimeMinBargeInAudioEndMs | (private) | `function resolveDiscordRealtimeMinBargeInAudioE...` |
| 1757 | fn | buildDiscordRealtimeInstructions | (private) | `function buildDiscordRealtimeInstructions(param...` |

## Public API

### `resolveDiscordVoiceMode`

```
export function resolveDiscordVoiceMode(voice: DiscordAccountConfig["voice"]): DiscordVoiceMode {
```

**Line:** 208 | **Kind:** fn

### `isDiscordRealtimeVoiceMode`

```
export function isDiscordRealtimeVoiceMode(
```

**Line:** 216 | **Kind:** fn
