# extensions/feishu/src/streaming-card.test.ts

[← Back to Module](../modules/extensions-feishu-src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1191
- **Language:** TypeScript
- **Symbols:** 19
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 10 | type | FeishuStreamingFetch | (private) | - |
| 12 | type | StreamingSessionState | (private) | - |
| 21 | type | LocalServer | (private) | - |
| 26 | type | DispatcherInit | (private) | - |
| 27 | type | StreamingFetchDeps | (private) | - |
| 32 | type | StreamingRequest | (private) | - |
| 47 | fn | readRequestBody | (private) | `async function readRequestBody(req: IncomingMes...` |
| 55 | fn | startLocalServer | (private) | `async function startLocalServer(` |
| 89 | fn | stripDispatcher | (private) | `function stripDispatcher(init: RequestInit | un...` |
| 97 | fn | createLocalRedirectFetch | (private) | `function createLocalRedirectFetch(port: number)...` |
| 109 | fn | createStreamingFetch | (private) | `async function createStreamingFetch(` |
| 120 | fn | createMemoryFetch | (private) | `function createMemoryFetch(` |
| 135 | fn | writeJson | (private) | `function writeJson(res: ServerResponse, payload...` |
| 140 | fn | jsonResponse | (private) | `function jsonResponse(payload: unknown, status ...` |
| 147 | fn | writeOversizedJson | (private) | `function writeOversizedJson(` |
| 164 | fn | sendChunk | (private) | `const sendChunk = () => {` |
| 189 | fn | setStreamingSessionInternals | (private) | `function setStreamingSessionInternals(` |
| 219 | fn | mockFetches | (private) | `function mockFetches(` |
| 258 | fn | mockStreamingTokenStart | (private) | `function mockStreamingTokenStart(resolveAuthJso...` |
