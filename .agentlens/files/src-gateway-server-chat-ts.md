# src/gateway/server-chat.ts

[← Back to Module](../modules/src-gateway/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1671
- **Language:** TypeScript
- **Symbols:** 50
- **Public symbols:** 5

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 78 | fn | projectToolSearchCodeEventForChannelPayload | (private) | `function projectToolSearchCodeEventForChannelPa...` |
| 113 | fn | resolveHeartbeatAckMaxChars | (private) | `function resolveHeartbeatAckMaxChars(): number {` |
| 125 | fn | resolveHeartbeatContext | (private) | `function resolveHeartbeatContext(runId: string,...` |
| 142 | fn | shouldHideHeartbeatChatOutput | (private) | `function shouldHideHeartbeatChatOutput(runId: s...` |
| 158 | fn | shouldSuppressHeartbeatToolEvents | (private) | `function shouldSuppressHeartbeatToolEvents(runI...` |
| 162 | fn | shouldMirrorAssistantEventToHiddenSessionMessages | (private) | `function shouldMirrorAssistantEventToHiddenSess...` |
| 175 | fn | shouldMirrorAgentEventToHiddenSessionMessages | (private) | `function shouldMirrorAgentEventToHiddenSessionM...` |
| 179 | fn | normalizeHeartbeatChatFinalText | (private) | `function normalizeHeartbeatChatFinalText(params: {` |
| 207 | type | ChatEventBroadcast | pub | - |
| 209 | type | NodeSendToSession | pub | - |
| 212 | type | ChatErrorKind | (private) | - |
| 222 | fn | readChatErrorKind | (private) | `function readChatErrorKind(value: unknown): Cha...` |
| 229 | fn | resolveChatErrorKindFromError | pub | `export function resolveChatErrorKindFromError(e...` |
| 254 | fn | excludeConnIds | (private) | `function excludeConnIds(` |
| 270 | type | BroadcastDelta | (private) | - |
| 272 | fn | resolveBroadcastDelta | (private) | `function resolveBroadcastDelta(params: {` |
| 290 | type | AgentEventHandlerOptions | pub | - |
| 340 | type | AgentEventHandler | (private) | - |
| 344 | fn | roundedChatSendTimingMs | (private) | `function roundedChatSendTimingMs(value: number)...` |
| 348 | fn | createAgentEventHandler | pub | `export function createAgentEventHandler({` |
| 389 | type | TerminalLifecycleOptions | (private) | - |
| 394 | type | PendingTerminalLifecycleError | (private) | - |
| 402 | type | AgentTextThrottleStream | (private) | - |
| 404 | fn | agentTextThrottleKey | (private) | `const agentTextThrottleKey = (clientRunId: stri...` |
| 407 | fn | agentTextThrottleKeys | (private) | `const agentTextThrottleKeys = (clientRunId: str...` |
| 413 | fn | clearBufferedChatState | (private) | `const clearBufferedChatState = (clientRunId: st...` |
| 417 | fn | clearPendingTerminalLifecycleError | (private) | `const clearPendingTerminalLifecycleError = (run...` |
| 474 | fn | buildSessionEventSnapshot | (private) | `const buildSessionEventSnapshot = (` |
| 590 | fn | resolveSessionDeliveryKey | (private) | `const resolveSessionDeliveryKey = (sessionKey: ...` |
| 597 | fn | resolveNodeSessionDeliveryKeys | (private) | `const resolveNodeSessionDeliveryKeys = (session...` |
| 609 | fn | sendNodeSessionPayloadForAgent | (private) | `const sendNodeSessionPayloadForAgent = (` |
| 620 | fn | emitFirstAssistantChatSendTiming | (private) | `const emitFirstAssistantChatSendTiming = (chatL...` |
| 647 | fn | finalizeLifecycleEvent | (private) | `const finalizeLifecycleEvent = (` |
| 813 | fn | broadcastSessionChange | (private) | `const broadcastSessionChange = (snapshotEvent?:...` |
| 836 | fn | markPersisted | (private) | `const markPersisted = () => {` |
| 862 | fn | scheduleTerminalLifecycleError | (private) | `const scheduleTerminalLifecycleError = (` |
| 879 | fn | emitChatDelta | (private) | `const emitChatDelta = (` |
| 951 | fn | resolveBufferedChatTextState | (private) | `const resolveBufferedChatTextState = (` |
| 971 | fn | flushBufferedChatDeltaIfNeeded | (private) | `const flushBufferedChatDeltaIfNeeded = (` |
| 1027 | fn | sendChatPayload | (private) | `const sendChatPayload = (` |
| 1050 | fn | emitChatTerminal | (private) | `const emitChatTerminal = (` |
| 1116 | fn | sendAgentPayload | (private) | `const sendAgentPayload = (` |
| 1145 | fn | sendNodeAgentPayload | (private) | `const sendNodeAgentPayload = (` |
| 1155 | fn | flushBufferedAgentDeltaIfNeeded | (private) | `const flushBufferedAgentDeltaIfNeeded = (` |
| 1190 | fn | isAgentTextThrottleEvent | (private) | `const isAgentTextThrottleEvent = (evt: AgentEve...` |
| 1193 | fn | shouldCoalesceAgentTextEvent | (private) | `const shouldCoalesceAgentTextEvent = (evt: Agen...` |
| 1202 | fn | shouldAdvanceAgentTextThrottle | (private) | `const shouldAdvanceAgentTextThrottle = (evt: Ag...` |
| 1236 | fn | sendOrBufferAgentTextEvent | (private) | `const sendOrBufferAgentTextEvent = (` |
| 1264 | fn | resolveToolVerboseLevel | (private) | `const resolveToolVerboseLevel = (runId: string,...` |
| 1291 | fn | handleEvent | (private) | `const handleEvent = (event: AgentEventPayload) ...` |

## Public API

### `resolveChatErrorKindFromError`

```
export function resolveChatErrorKindFromError(error: unknown): ChatErrorKind | undefined {
```

**Line:** 229 | **Kind:** fn

### `createAgentEventHandler`

```
export function createAgentEventHandler({
```

**Line:** 348 | **Kind:** fn
