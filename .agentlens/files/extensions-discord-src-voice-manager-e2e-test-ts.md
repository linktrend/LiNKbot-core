# extensions/discord/src/voice/manager.e2e.test.ts

[← Back to Module](../modules/extensions-discord-src-voice/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 7048
- **Language:** TypeScript
- **Symbols:** 32
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 38 | type | EventHandler | (private) | - |
| 39 | type | MockConnection | (private) | - |
| 323 | fn | createVoiceChannelInfo | (private) | `function createVoiceChannelInfo(` |
| 341 | type | VoiceChannelInfo | (private) | - |
| 343 | fn | createClient | (private) | `function createClient() {` |
| 367 | fn | createRuntime | (private) | `function createRuntime() {` |
| 453 | fn | createManager | (private) | `const createManager = (` |
| 469 | fn | expectConnectedStatus | (private) | `const expectConnectedStatus = (` |
| 483 | fn | getSessionEntry | (private) | `const getSessionEntry = (` |
| 494 | fn | getLastAudioPlayer | (private) | `const getLastAudioPlayer = () => {` |
| 509 | type | MockCallSource | (private) | - |
| 522 | fn | mockCall | (private) | `const mockCall = (source: MockCallSource, index...` |
| 530 | fn | lastMockCall | (private) | `const lastMockCall = (source: MockCallSource, l...` |
| 539 | fn | expectOffEventWithFunction | (private) | `const expectOffEventWithFunction = (source: Moc...` |
| 547 | fn | lastAgentCommandArgs | (private) | `const lastAgentCommandArgs = () =>` |
| 553 | fn | lastAgentCommandToolNames | (private) | `const lastAgentCommandToolNames = () => {` |
| 567 | fn | agentCommandArgsAt | (private) | `const agentCommandArgsAt = (index: number) =>` |
| 573 | fn | lastRealtimeBridgeParams | (private) | `const lastRealtimeBridgeParams = () =>` |
| 582 | fn | lastAudioResourceInput | (private) | `const lastAudioResourceInput = () =>` |
| 585 | fn | lastTtsArgs | (private) | `const lastTtsArgs = () =>` |
| 591 | fn | lastTtsStreamArgs | (private) | `const lastTtsStreamArgs = () =>` |
| 597 | fn | sentUserMessages | (private) | `const sentUserMessages = () =>` |
| 600 | fn | emitFinalRealtimeUserTranscript | (private) | `const emitFinalRealtimeUserTranscript = async (` |
| 614 | fn | flushRealtimeForcedConsultTimers | (private) | `const flushRealtimeForcedConsultTimers = async ...` |
| 624 | fn | expectUserMessageIncludes | (private) | `const expectUserMessageIncludes = (text: string...` |
| 631 | fn | expectUserMessageNotIncludes | (private) | `const expectUserMessageNotIncludes = (text: str...` |
| 638 | fn | emitDecryptFailure | (private) | `const emitDecryptFailure = (manager: InstanceTy...` |
| 658 | type | ProcessSegmentInvoker | (private) | - |
| 667 | fn | processVoiceSegment | (private) | `const processVoiceSegment = async (` |
| 3028 | fn | acceptResult | (private) | `let acceptResult = () => {};` |
| 3756 | fn | beginOwnerTurn | (private) | `const beginOwnerTurn = () => {` |
| 6859 | fn | runSegment | (private) | `const runSegment = async () => await processVoi...` |
