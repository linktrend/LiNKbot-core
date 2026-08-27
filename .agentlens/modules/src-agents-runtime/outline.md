# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 2 large files in this module.

## src/agents/runtime/proxy.test.ts (686 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 35 | fn | responseFromText | (private) |
| 47 | fn | responseFromReaderText | (private) |
| 67 | fn | pendingReaderResponse | (private) |
| 96 | fn | resultWithinMs | (private) |
| 113 | fn | settledResult | (private) |
| 629 | fn | listenDripProxy | (private) |
| 642 | fn | drip | (private) |

## src/agents/runtime/proxy.ts (569 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 30 | type | StreamingToolCall | (private) |
| 33 | class | ProxyMessageEventStream | (private) |
| 53 | type | ProxyAssistantMessageEvent | pub |
| 76 | type | ProxySerializableStreamOptions | (private) |
| 91 | interface | ProxyStreamOptions | pub |
| 119 | fn | buildProxyRequestOptions | (private) |
| 135 | fn | sanitizeProxyModel | (private) |
| 140 | fn | resolveProxyReadIdleTimeoutMs | (private) |
| 144 | type | ProxyRequestAbort | (private) |
| 149 | fn | createProxyRequestTimeoutError | (private) |
| 155 | fn | buildProxyRequestAbort | (private) |
| 173 | fn | isProxyRequestTimeoutError | (private) |
| 191 | fn | readProxyErrorData | (private) |
| 204 | fn | readProxySseChunk | (private) |
| 240 | fn | assertProxySsePendingBufferWithinLimit | (private) |
| 255 | fn | streamProxy | pub |
| 285 | fn | abortHandler | (private) |
| 352 | fn | processSseLine | (private) |
| 431 | fn | processProxyEvent | (private) |
