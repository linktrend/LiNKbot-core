# src/commands/agent-via-gateway.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1039
- **Language:** TypeScript
- **Symbols:** 56
- **Public symbols:** 1

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 45 | type | AgentGatewayResult | (private) | - |
| 55 | type | GatewayAgentResponse | (private) | - |
| 71 | type | AgentCliOpts | (private) | - |
| 94 | type | AgentDispatchOpts | (private) | - |
| 98 | type | AgentCliSignal | (private) | - |
| 99 | type | AgentCliProcessLike | (private) | - |
| 103 | type | AgentCliDeps | (private) | - |
| 106 | type | AgentGatewayCallIdentity | (private) | - |
| 110 | type | AgentSessionModule | (private) | - |
| 111 | type | AgentSessionModuleLoader | (private) | - |
| 141 | fn | resolveGatewayAbortRetryDelaysMs | (private) | `function resolveGatewayAbortRetryDelaysMs(): re...` |
| 148 | fn | loadRuntimeConfig | (private) | `async function loadRuntimeConfig(): Promise<Ope...` |
| 174 | fn | protectJsonStdout | (private) | `function protectJsonStdout(opts: Pick<AgentCliO...` |
| 180 | fn | missingAgentMessageError | (private) | `function missingAgentMessageError(): Error {` |
| 186 | fn | formatMessageFileReadFailure | (private) | `function formatMessageFileReadFailure(messageFi...` |
| 204 | fn | readAgentMessageFile | (private) | `async function readAgentMessageFile(messageFile...` |
| 238 | fn | resolveAgentMessageOpts | (private) | `async function resolveAgentMessageOpts(opts: Ag...` |
| 262 | fn | parseTimeoutSeconds | (private) | `function parseTimeoutSeconds(opts: { cfg: OpenC...` |
| 275 | fn | resolveGatewayAgentTimeoutMs | (private) | `function resolveGatewayAgentTimeoutMs(timeoutSe...` |
| 282 | fn | getGatewayDispatchConfig | (private) | `async function getGatewayDispatchConfig(options...` |
| 293 | fn | formatPayloadForLog | (private) | `async function formatPayloadForLog(payload: {` |
| 314 | fn | isGatewayAgentTimeoutError | (private) | `function isGatewayAgentTimeoutError(err: unknow...` |
| 321 | fn | isCompactControlCommand | (private) | `function isCompactControlCommand(message: strin...` |
| 325 | fn | isSessionResetCommand | (private) | `function isSessionResetCommand(message: string)...` |
| 329 | fn | shouldRetryGatewayDispatchWithShellEnvFallback | (private) | `function shouldRetryGatewayDispatchWithShellEnv...` |
| 337 | fn | resolveGatewayAgentEmbeddedFallbackReason | (private) | `function resolveGatewayAgentEmbeddedFallbackRea...` |
| 348 | fn | isTransientGatewayAgentConnectClose | (private) | `function isTransientGatewayAgentConnectClose(er...` |
| 357 | fn | validateExplicitSessionKeyForDispatch | (private) | `function validateExplicitSessionKeyForDispatch(` |
| 384 | fn | normalizeSessionKeyOptsForDispatch | (private) | `async function normalizeSessionKeyOptsForDispatch(` |
| 421 | fn | isAbortError | (private) | `function isAbortError(err: unknown): boolean {` |
| 425 | fn | readAcceptedRunContext | (private) | `function readAcceptedRunContext(payload: unknow...` |
| 444 | fn | createAgentCliSignalBridge | (private) | `function createAgentCliSignalBridge(processLike...` |
| 448 | fn | detachHandlers | (private) | `const detachHandlers = () => {` |
| 455 | fn | handler | (private) | `const handler = () => {` |
| 473 | fn | isAgentCliProcessLike | (private) | `function isAgentCliProcessLike(value: unknown):...` |
| 482 | fn | resolveAgentCliProcessLike | (private) | `function resolveAgentCliProcessLike(deps: Agent...` |
| 490 | fn | createAbortDelayError | (private) | `function createAbortDelayError(): Error {` |
| 494 | fn | delayMs | (private) | `function delayMs(ms: number, signal?: AbortSign...` |
| 503 | fn | onAbort | (private) | `const onAbort = () => {` |
| 512 | fn | isConfirmedChatAbortResponseForRun | (private) | `function isConfirmedChatAbortResponseForRun(val...` |
| 526 | fn | abortAcceptedGatewayAgentRunWithRequest | (private) | `async function abortAcceptedGatewayAgentRunWith...` |
| 567 | fn | abortAcceptedGatewayAgentRunWithGatewayCall | (private) | `async function abortAcceptedGatewayAgentRunWith...` |
| 606 | fn | abortAcceptedGatewayAgentRunOnActiveConnection | (private) | `async function abortAcceptedGatewayAgentRunOnAc...` |
| 632 | fn | exitForReceivedSignal | (private) | `function exitForReceivedSignal(signal: AgentCli...` |
| 640 | fn | returnAfterSignalExit | (private) | `function returnAfterSignalExit<T>(` |
| 648 | fn | createGatewayFallbackSessionId | (private) | `function createGatewayFallbackSessionId(): stri...` |
| 652 | fn | createGatewayFallbackSession | (private) | `function createGatewayFallbackSession(agentId?:...` |
| 663 | fn | resolveAgentIdForGatewayFallback | (private) | `async function resolveAgentIdForGatewayFallback(` |
| 694 | fn | buildGatewayJsonResponse | (private) | `function buildGatewayJsonResponse(response: Gat...` |
| 705 | fn | isInFlightGatewayAgentResponse | (private) | `function isInFlightGatewayAgentResponse(respons...` |
| 709 | fn | formatInFlightGatewayAgentMessage | (private) | `function formatInFlightGatewayAgentMessage(resp...` |
| 715 | fn | agentViaGatewayCommand | (private) | `async function agentViaGatewayCommand(` |
| 797 | fn | dispatchGatewayAgentCall | (private) | `const dispatchGatewayAgentCall = async (activeC...` |
| 852 | fn | consumeShellEnvFallbackRetry | (private) | `const consumeShellEnvFallbackRetry = () => shel...` |
| 917 | fn | agentViaGatewayCommandWithTransientRetries | (private) | `async function agentViaGatewayCommandWithTransi...` |
| 945 | fn | agentCliCommand | pub | `export async function agentCliCommand(` |

## Public API

### `agentCliCommand`

```
export async function agentCliCommand(
```

**Line:** 945 | **Kind:** fn
