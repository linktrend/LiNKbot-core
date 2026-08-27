# extensions/msteams/src/monitor-handler/message-handler.authz.test.ts

[← Back to Module](../modules/extensions-msteams-src-monitor-handler/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1078
- **Language:** TypeScript
- **Symbols:** 20
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 11 | type | HandlerInput | (private) | - |
| 12 | type | TestThreadUser | (private) | - |
| 16 | type | TestAttachment | (private) | - |
| 51 | fn | stripHtmlFromTeamsMessage | (private) | `const stripHtmlFromTeamsMessage = (html: string...` |
| 63 | fn | formatThreadContext | (private) | `const formatThreadContext = (messages: GraphThr...` |
| 95 | fn | createDeps | (private) | `function createDeps(` |
| 128 | fn | resetThreadMocks | (private) | `function resetThreadMocks() {` |
| 137 | fn | createThreadMessage | (private) | `function createThreadMessage(params: {` |
| 152 | fn | mockThreadContext | (private) | `function mockThreadContext(params: {` |
| 161 | fn | createThreadAllowlistConfig | (private) | `function createThreadAllowlistConfig(params: {` |
| 185 | fn | createMessageActivity | (private) | `function createMessageActivity(params: {` |
| 221 | fn | createAttackerGroupActivity | (private) | `function createAttackerGroupActivity(params?: {` |
| 241 | fn | createAttackerPersonalActivity | (private) | `function createAttackerPersonalActivity(id: str...` |
| 257 | fn | createChannelThreadActivity | (private) | `function createChannelThreadActivity(params?: {...` |
| 279 | fn | createQuoteAttachment | (private) | `function createQuoteAttachment(): TestAttachment {` |
| 287 | fn | dispatchQuoteContextWithParent | (private) | `async function dispatchQuoteContextWithParent(p...` |
| 295 | fn | recordFromMockCall | (private) | `function recordFromMockCall(value: unknown): Re...` |
| 302 | fn | mockCallArg | (private) | `function mockCallArg(mocked: unknown, callIndex...` |
| 311 | fn | firstSettledDispatch | (private) | `function firstSettledDispatch(): { ctxPayload?:...` |
| 320 | fn | logMeta | (private) | `function logMeta(logFn: unknown, message: strin...` |
