# src/gateway/sessions-history-http.test.ts

[← Back to Module](../modules/src-gateway/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1164
- **Language:** TypeScript
- **Symbols:** 24
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 44 | type | SessionHistoryTestDatabase | (private) | - |
| 49 | fn | createSessionStoreFile | (private) | `async function createSessionStoreFile(): Promis...` |
| 61 | fn | seedSession | (private) | `async function seedSession(params?: { text?: st...` |
| 83 | fn | writeResetArchiveTranscript | (private) | `async function writeResetArchiveTranscript(para...` |
| 103 | fn | seedRawSessionRows | (private) | `function seedRawSessionRows(params: {` |
| 177 | fn | makeTranscriptAssistantMessage | (private) | `function makeTranscriptAssistantMessage(params: {` |
| 208 | fn | makeDeliveryMirrorAssistantMessage | (private) | `function makeDeliveryMirrorAssistantMessage(` |
| 221 | fn | appendTranscriptMessage | (private) | `async function appendTranscriptMessage(params: {` |
| 240 | fn | appendVisibleAssistantMessage | (private) | `async function appendVisibleAssistantMessage(pa...` |
| 257 | fn | fetchSessionHistory | (private) | `async function fetchSessionHistory(` |
| 280 | fn | withGatewayHarness | (private) | `async function withGatewayHarness<T>(` |
| 295 | type | SessionHistoryMessage | (private) | - |
| 300 | type | SessionHistoryBody | (private) | - |
| 308 | fn | readSessionHistoryBody | (private) | `async function readSessionHistoryBody(` |
| 318 | fn | expectSessionHistoryText | (private) | `async function expectSessionHistoryText(params:...` |
| 326 | fn | readSseEvent | (private) | `async function readSseEvent(` |
| 359 | type | SessionHistorySseStream | (private) | - |
| 364 | fn | expectOpenClawMetadata | (private) | `function expectOpenClawMetadata(` |
| 374 | fn | expectErrorResponse | (private) | `function expectErrorResponse(body: unknown, exp...` |
| 384 | fn | openSessionHistorySse | (private) | `async function openSessionHistorySse(` |
| 401 | fn | withFirstMessageHistoryStream | (private) | `async function withFirstMessageHistoryStream(` |
| 415 | fn | expectHistoryEventTexts | (private) | `async function expectHistoryEventTexts(stream: ...` |
| 426 | fn | expectMessageEventMatch | (private) | `async function expectMessageEventMatch(` |
| 451 | fn | openBoundedHistoryStreamWithSecondMessage | (private) | `async function openBoundedHistoryStreamWithSeco...` |
