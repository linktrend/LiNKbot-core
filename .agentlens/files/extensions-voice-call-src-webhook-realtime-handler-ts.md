# extensions/voice-call/src/webhook/realtime-handler.ts

[← Back to Module](../modules/extensions-voice-call-src-webhook/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1446
- **Language:** TypeScript
- **Symbols:** 28
- **Public symbols:** 3

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 42 | type | ToolHandlerContext | pub | - |
| 45 | type | ToolHandlerFn | (private) | - |
| 66 | fn | buildGreetingInstructions | (private) | `function buildGreetingInstructions(` |
| 81 | fn | readConsultArgText | (private) | `function readConsultArgText(args: unknown, key:...` |
| 89 | fn | readConsultQuestionText | (private) | `function readConsultQuestionText(args: unknown)...` |
| 93 | fn | normalizeTranscriptText | (private) | `function normalizeTranscriptText(text: string):...` |
| 97 | fn | findTextOverlap | (private) | `function findTextOverlap(base: string, next: st...` |
| 107 | fn | shouldInsertTranscriptSpace | (private) | `function shouldInsertTranscriptSpace(base: stri...` |
| 126 | fn | appendTranscriptText | (private) | `function appendTranscriptText(base: string | un...` |
| 151 | fn | resolveFinalTranscriptText | (private) | `function resolveFinalTranscriptText(params: {` |
| 165 | fn | compact | (private) | `const compact = (value: string) => value.toLowe...` |
| 183 | fn | limitPartialUserTranscript | (private) | `function limitPartialUserTranscript(text: strin...` |
| 191 | fn | withFallbackConsultQuestion | (private) | `function withFallbackConsultQuestion(args: unkn...` |
| 220 | fn | buildForcedConsultSpeechPrompt | (private) | `function buildForcedConsultSpeechPrompt(result:...` |
| 234 | type | PendingStreamToken | (private) | - |
| 243 | type | StreamSessionRequest | (private) | - |
| 251 | type | StreamSession | pub | - |
| 256 | type | CallRegistration | (private) | - |
| 262 | type | ActiveRealtimeVoiceBridge | (private) | - |
| 264 | type | RealtimeSpeakResult | (private) | - |
| 269 | type | ForcedConsultState | (private) | - |
| 275 | type | NativeConsultState | (private) | - |
| 281 | type | TelephonyCloseReason | (private) | - |
| 283 | fn | appendRecentTalkEventMetadata | (private) | `function appendRecentTalkEventMetadata(` |
| 313 | class | RealtimeCallHandler | pub | - |
| 594 | fn | cancelOutputAudioForBargeIn | (private) | `const cancelOutputAudioForBargeIn = (` |
| 636 | fn | emitCallEnd | (private) | `const emitCallEnd = (reason: "completed" | "err...` |
| 898 | fn | closeTelephony | (private) | `const closeTelephony = (reason: TelephonyCloseR...` |

## Public API
