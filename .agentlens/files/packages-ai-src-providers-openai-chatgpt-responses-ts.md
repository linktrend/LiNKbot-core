# packages/ai/src/providers/openai-chatgpt-responses.ts

[← Back to Module](../modules/packages-ai-src-providers/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1720
- **Language:** TypeScript
- **Symbols:** 68
- **Public symbols:** 3

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 11 | type | DynamicImport | (private) | - |
| 15 | type | ProcessWithOsBuiltinModule | (private) | - |
| 19 | fn | loadNodeOs | (private) | `function loadNodeOs(): typeof NodeOs | null {` |
| 100 | interface | OpenAICodexResponsesOptions | (private) | - |
| 107 | type | CodexResponseStatus | (private) | - |
| 115 | interface | RequestBody | (private) | - |
| 138 | fn | isRetryableError | (private) | `function isRetryableError(status: number, error...` |
| 147 | fn | resolveHttpRetryDelayMs | (private) | `function resolveHttpRetryDelayMs(response: Resp...` |
| 173 | fn | resolveRequestTimeoutMs | (private) | `function resolveRequestTimeoutMs(options?: Open...` |
| 180 | fn | buildRequestSignal | (private) | `function buildRequestSignal(` |
| 194 | fn | isRequestTimeoutError | (private) | `function isRequestTimeoutError(` |
| 213 | fn | formatRequestTimeoutError | (private) | `function formatRequestTimeoutError(timeoutMs: n...` |
| 219 | type | ProcessWithZlibBuiltinModule | (private) | - |
| 223 | fn | compressRequestBodyZstd | (private) | `function compressRequestBodyZstd(bodyJson: stri...` |
| 528 | fn | buildRequestBody | (private) | `function buildRequestBody(` |
| 591 | fn | getServiceTierCostMultiplier | (private) | `function getServiceTierCostMultiplier(` |
| 605 | fn | applyServiceTierPricing | (private) | `function applyServiceTierPricing(` |
| 623 | fn | resolveCodexServiceTier | (private) | `function resolveCodexServiceTier(` |
| 636 | fn | resolveCodexUrl | (private) | `function resolveCodexUrl(baseUrl?: string): str...` |
| 648 | fn | resolveCodexWebSocketUrl | (private) | `function resolveCodexWebSocketUrl(baseUrl?: str...` |
| 663 | fn | processStream | (private) | `async function processStream(` |
| 682 | class | CodexApiError | (private) | - |
| 698 | class | CodexProtocolError | (private) | - |
| 709 | fn | isCodexNonTransportError | (private) | `function isCodexNonTransportError(error: unknow...` |
| 713 | fn | isWebSocketConnectionLimitReachedError | (private) | `function isWebSocketConnectionLimitReachedError...` |
| 717 | fn | extractCodexEventError | (private) | `function extractCodexEventError(event: Record<s...` |
| 787 | fn | normalizeCodexStatus | (private) | `function normalizeCodexStatus(status: unknown):...` |
| 875 | type | WebSocketEventType | (private) | - |
| 876 | type | WebSocketListener | (private) | - |
| 878 | interface | WebSocketLike | (private) | - |
| 885 | interface | CachedWebSocketContinuationState | (private) | - |
| 891 | interface | CachedWebSocketConnection | (private) | - |
| 899 | type | WebSocketConstructor | (private) | - |
| 908 | fn | resetOpenAICodexWebSocketStateForTest | pub | `export function resetOpenAICodexWebSocketStateF...` |
| 913 | fn | closeOpenAICodexWebSocketSessions | pub | `export function closeOpenAICodexWebSocketSessio...` |
| 914 | fn | closeEntry | (private) | `const closeEntry = (entry: CachedWebSocketConne...` |
| 936 | fn | isWebSocketSseFallbackActive | (private) | `function isWebSocketSseFallbackActive(sessionId...` |
| 940 | fn | getWebSocketConstructor | (private) | `async function getWebSocketConstructor(): Promi...` |
| 955 | fn | getProxyForUrl | (private) | `const getProxyForUrl = (m as { getProxyForUrl: ...` |
| 983 | class | WebSocketCloseError | (private) | - |
| 997 | fn | getWebSocketReadyState | (private) | `function getWebSocketReadyState(socket: WebSock...` |
| 1002 | fn | isWebSocketReusable | (private) | `function isWebSocketReusable(socket: WebSocketL...` |
| 1008 | fn | isWebSocketSessionExpired | (private) | `function isWebSocketSessionExpired(entry: Cache...` |
| 1012 | fn | closeWebSocketSilently | (private) | `function closeWebSocketSilently(socket: WebSock...` |
| 1018 | fn | scheduleSessionWebSocketExpiry | (private) | `function scheduleSessionWebSocketExpiry(session...` |
| 1031 | fn | connectWebSocket | (private) | `async function connectWebSocket(` |
| 1081 | fn | onAbort | (private) | `const onAbort = () => {` |
| 1091 | fn | cleanup | (private) | `const cleanup = () => {` |
| 1110 | fn | acquireWebSocket | (private) | `async function acquireWebSocket(` |
| 1197 | fn | extractWebSocketError | (private) | `function extractWebSocketError(event: unknown):...` |
| 1218 | fn | extractWebSocketCloseError | (private) | `function extractWebSocketCloseError(event: unkn...` |
| 1237 | fn | decodeWebSocketData | (private) | `async function decodeWebSocketData(data: unknow...` |
| 1266 | fn | wake | (private) | `const wake = () => {` |
| 1331 | fn | onAbort | (private) | `const onAbort = () => {` |
| 1374 | fn | requestBodyWithoutInput | (private) | `function requestBodyWithoutInput(body: RequestB...` |
| 1379 | fn | responseInputsEqual | (private) | `function responseInputsEqual(a: ResponseInput |...` |
| 1383 | fn | requestBodiesMatchExceptInput | (private) | `function requestBodiesMatchExceptInput(a: Reque...` |
| 1387 | fn | getCachedWebSocketInputDelta | (private) | `function getCachedWebSocketInputDelta(` |
| 1412 | fn | buildCachedWebSocketRequestBody | (private) | `function buildCachedWebSocketRequestBody(` |
| 1451 | fn | processWebSocketStream | (private) | `async function processWebSocketStream(` |
| 1534 | fn | readChatGptResponsesErrorTextLimited | (private) | `async function readChatGptResponsesErrorTextLim...` |
| 1585 | fn | parseErrorResponseText | (private) | `function parseErrorResponseText(` |
| 1628 | fn | extractOpenAICodexAccountId | pub | `export function extractOpenAICodexAccountId(tok...` |
| 1636 | fn | createCodexRequestId | (private) | `function createCodexRequestId(): string {` |
| 1649 | fn | buildBaseCodexHeaders | (private) | `function buildBaseCodexHeaders(` |
| 1669 | fn | buildSSEHeaders | (private) | `function buildSSEHeaders(` |
| 1689 | fn | buildWebSocketHeaders | (private) | `function buildWebSocketHeaders(` |
| 1707 | fn | toLintErrorObject | (private) | `function toLintErrorObject(value: unknown, fall...` |

## Public API

### `resetOpenAICodexWebSocketStateForTest`

```
export function resetOpenAICodexWebSocketStateForTest(): void {
```

**Line:** 908 | **Kind:** fn

### `closeOpenAICodexWebSocketSessions`

```
export function closeOpenAICodexWebSocketSessions(sessionId?: string): void {
```

**Line:** 913 | **Kind:** fn

### `extractOpenAICodexAccountId`

```
export function extractOpenAICodexAccountId(token: string): string {
```

**Line:** 1628 | **Kind:** fn

## Memory Markers

### 🟢 `NOTE` (line 296)

> when options.sessionId is absent, this falls back to a fresh random id
