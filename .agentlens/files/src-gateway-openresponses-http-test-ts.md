# src/gateway/openresponses-http.test.ts

[← Back to Module](../modules/src-gateway/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 2120
- **Language:** TypeScript
- **Symbols:** 17
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 67 | fn | startServer | (private) | `async function startServer(port: number, opts?:...` |
| 82 | fn | startTokenServer | (private) | `async function startTokenServer(port: number, o...` |
| 97 | fn | writeGatewayConfig | (private) | `async function writeGatewayConfig(config: Recor...` |
| 106 | fn | postResponses | (private) | `async function postResponses(port: number, body...` |
| 119 | type | SseEvent | (private) | - |
| 121 | fn | parseSseEvents | (private) | `function parseSseEvents(text: string): SseEvent...` |
| 142 | fn | collectSseEventTypes | (private) | `function collectSseEventTypes(events: readonly ...` |
| 152 | fn | findSseEvent | (private) | `function findSseEvent(events: SseEvent[], event...` |
| 160 | fn | parseSseData | (private) | `function parseSseData(event: SseEvent): unknown {` |
| 164 | fn | requireSessionKey | (private) | `function requireSessionKey(value: string | unde...` |
| 171 | fn | firstAgentOpts | (private) | `function firstAgentOpts(callIndex = 0): Record<...` |
| 179 | fn | ensureResponseConsumed | (private) | `async function ensureResponseConsumed(res: Resp...` |
| 198 | fn | buildUrlInputMessage | (private) | `function buildUrlInputMessage(params: {` |
| 218 | fn | buildResponsesUrlPolicyConfig | (private) | `function buildResponsesUrlPolicyConfig(maxUrlPa...` |
| 249 | fn | expectInvalidRequest | (private) | `async function expectInvalidRequest(` |
| 263 | fn | mockAgentOnce | (private) | `const mockAgentOnce = (payloads: Array<{ text: ...` |
| 1614 | type | FunctionCallEvent | (private) | - |
