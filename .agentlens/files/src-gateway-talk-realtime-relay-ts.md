# src/gateway/talk-realtime-relay.ts

[← Back to Module](../modules/src-gateway/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1618
- **Language:** TypeScript
- **Symbols:** 62
- **Public symbols:** 10

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 77 | type | TalkRealtimeRelayEventPayload | (private) | - |
| 120 | type | TalkRealtimeRelayEvent | (private) | - |
| 122 | type | ForcedTerminalProviderResult | (private) | - |
| 129 | type | RelayAgentControlProviderSubmission | (private) | - |
| 134 | type | RelaySession | (private) | - |
| 172 | type | CreateTalkRealtimeRelaySessionParams | (private) | - |
| 187 | type | TalkRealtimeRelaySessionResult | (private) | - |
| 200 | fn | logRelayVoiceFailure | (private) | `function logRelayVoiceFailure(session: RelaySes...` |
| 204 | fn | ensureRelayVoiceSession | (private) | `function ensureRelayVoiceSession(session: Relay...` |
| 229 | fn | enqueueRelayVoiceTranscript | (private) | `function enqueueRelayVoiceTranscript(` |
| 281 | fn | closeRelayVoiceSession | (private) | `function closeRelayVoiceSession(session: RelayS...` |
| 302 | fn | ensureTalkRealtimeRelayVoiceSession | pub | `export function ensureTalkRealtimeRelayVoiceSes...` |
| 321 | fn | isWorkingToolResult | (private) | `function isWorkingToolResult(result: unknown): ...` |
| 330 | fn | isRelayAssistantEchoTranscript | (private) | `function isRelayAssistantEchoTranscript(session...` |
| 340 | fn | buildForcedConsultCheckingPrompt | (private) | `function buildForcedConsultCheckingPrompt(): st...` |
| 347 | fn | buildForcedConsultSpeechPrompt | (private) | `function buildForcedConsultSpeechPrompt(text: s...` |
| 356 | fn | buildAlreadyDeliveredToolResult | (private) | `function buildAlreadyDeliveredToolResult(): Rec...` |
| 363 | fn | suppressedToolResultOptions | (private) | `function suppressedToolResultOptions(` |
| 371 | fn | cancelForcedConsults | (private) | `function cancelForcedConsults(session: RelaySes...` |
| 377 | fn | broadcastToOwner | (private) | `function broadcastToOwner(` |
| 386 | fn | relayEventDeliveryOptions | (private) | `function relayEventDeliveryOptions(event: TalkR...` |
| 398 | fn | abortRelayAgentRuns | (private) | `function abortRelayAgentRuns(session: RelaySess...` |
| 410 | fn | pruneInactiveRelayAgentRuns | (private) | `function pruneInactiveRelayAgentRuns(session: R...` |
| 424 | fn | broadcastToolResultToOwner | (private) | `function broadcastToolResultToOwner(` |
| 450 | fn | completeAfterToolResultSubmissions | (private) | `function completeAfterToolResultSubmissions(` |
| 458 | fn | complete | (private) | `const complete = () => {` |
| 470 | fn | submitFinalProviderToolResult | (private) | `function submitFinalProviderToolResult(params: {` |
| 487 | fn | submit | (private) | `const submit = () =>` |
| 491 | fn | submitAfterWorking | (private) | `const submitAfterWorking = async () => {` |
| 518 | fn | accept | (private) | `const accept = () => {` |
| 543 | fn | trackAgentFinalToolResult | (private) | `function trackAgentFinalToolResult(` |
| 560 | fn | trackPendingWorkingToolResult | (private) | `function trackPendingWorkingToolResult(` |
| 577 | fn | clearRelayAgentToolCall | (private) | `function clearRelayAgentToolCall(session: Relay...` |
| 589 | fn | submitRelayAgentControlProviderResults | (private) | `function submitRelayAgentControlProviderResults(` |
| 606 | fn | finalizeAgentCall | (private) | `const finalizeAgentCall = (callId: string, forc...` |
| 634 | fn | clearTerminal | (private) | `const clearTerminal = () => {` |
| 669 | fn | closeRelaySession | (private) | `function closeRelaySession(session: RelaySessio...` |
| 689 | fn | pruneExpiredRelaySessions | (private) | `function pruneExpiredRelaySessions(nowMs = Date...` |
| 697 | fn | countRelaySessionsForConn | (private) | `function countRelaySessionsForConn(connId: stri...` |
| 707 | fn | enforceRelaySessionLimits | (private) | `function enforceRelaySessionLimits(connId: stri...` |
| 718 | fn | createTalkRealtimeRelaySession | pub | `export function createTalkRealtimeRelaySession(` |
| 738 | fn | emit | (private) | `const emit = (event: TalkRealtimeRelayEventPayl...` |
| 1076 | fn | scheduleForcedAgentConsult | (private) | `function scheduleForcedAgentConsult(session: Re...` |
| 1125 | fn | submitForcedConsultProviderResult | (private) | `function submitForcedConsultProviderResult(` |
| 1139 | fn | drainForcedTerminalProviderResults | (private) | `function drainForcedTerminalProviderResults(` |
| 1168 | fn | drainForcedTerminalProviderResultsAfterPending | (private) | `function drainForcedTerminalProviderResultsAfte...` |
| 1185 | fn | submitRealtimeAgentConsultWorkingResponse | (private) | `function submitRealtimeAgentConsultWorkingRespo...` |
| 1218 | fn | ensureRelayTurn | (private) | `function ensureRelayTurn(session: RelaySession)...` |
| 1231 | fn | getRelaySession | (private) | `function getRelaySession(relaySessionId: string...` |
| 1242 | fn | sendTalkRealtimeRelayAudio | pub | `export function sendTalkRealtimeRelayAudio(para...` |
| 1271 | fn | acknowledgeTalkRealtimeRelayMark | pub | `export function acknowledgeTalkRealtimeRelayMar...` |
| 1281 | fn | submitTalkRealtimeRelayToolResult | pub | `export function submitTalkRealtimeRelayToolResu...` |
| 1319 | fn | clearTerminal | (private) | `const clearTerminal = () => {` |
| 1375 | fn | clearTerminal | (private) | `const clearTerminal = () => {` |
| 1407 | fn | submitCancellation | (private) | `const submitCancellation = () =>` |
| 1435 | fn | onAccepted | (private) | `const onAccepted = () => {` |
| 1460 | fn | submit | (private) | `const submit = () =>` |
| 1484 | fn | registerTalkRealtimeRelayAgentRun | pub | `export function registerTalkRealtimeRelayAgentR...` |
| 1511 | fn | flushTalkRealtimeRelayVoiceWrites | pub | `export async function flushTalkRealtimeRelayVoi...` |
| 1520 | fn | steerTalkRealtimeRelayAgentRun | pub | `export async function steerTalkRealtimeRelayAge...` |
| 1575 | fn | cancelTalkRealtimeRelayTurn | pub | `export function cancelTalkRealtimeRelayTurn(par...` |
| 1611 | fn | stopTalkRealtimeRelaySession | pub | `export function stopTalkRealtimeRelaySession(pa...` |

## Public API

### `ensureTalkRealtimeRelayVoiceSession`

```
export function ensureTalkRealtimeRelayVoiceSession(params: {
```

**Line:** 302 | **Kind:** fn

### `createTalkRealtimeRelaySession`

```
export function createTalkRealtimeRelaySession(
```

**Line:** 718 | **Kind:** fn

### `sendTalkRealtimeRelayAudio`

```
export function sendTalkRealtimeRelayAudio(params: {
```

**Line:** 1242 | **Kind:** fn

### `acknowledgeTalkRealtimeRelayMark`

```
export function acknowledgeTalkRealtimeRelayMark(params: {
```

**Line:** 1271 | **Kind:** fn

### `submitTalkRealtimeRelayToolResult`

```
export function submitTalkRealtimeRelayToolResult(params: {
```

**Line:** 1281 | **Kind:** fn

### `registerTalkRealtimeRelayAgentRun`

```
export function registerTalkRealtimeRelayAgentRun(params: {
```

**Line:** 1484 | **Kind:** fn

### `flushTalkRealtimeRelayVoiceWrites`

```
export async function flushTalkRealtimeRelayVoiceWrites(params: {
```

**Line:** 1511 | **Kind:** fn

### `steerTalkRealtimeRelayAgentRun`

```
export async function steerTalkRealtimeRelayAgentRun(params: {
```

**Line:** 1520 | **Kind:** fn

### `cancelTalkRealtimeRelayTurn`

```
export function cancelTalkRealtimeRelayTurn(params: {
```

**Line:** 1575 | **Kind:** fn

### `stopTalkRealtimeRelaySession`

```
export function stopTalkRealtimeRelaySession(params: {
```

**Line:** 1611 | **Kind:** fn
