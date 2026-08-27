# extensions/ollama/src/stream-runtime.test.ts

[← Back to Module](../modules/extensions-ollama-src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 3082
- **Language:** TypeScript
- **Symbols:** 16
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 34 | type | GuardedFetchCall | (private) | - |
| 43 | fn | requireEntry | (private) | `function requireEntry<T>(entries: readonly T[],...` |
| 47 | fn | requireRecord | (private) | `function requireRecord(value: unknown, label: s...` |
| 54 | fn | requireHeaders | (private) | `function requireHeaders(value: unknown): Record...` |
| 58 | fn | expectToolCallContent | (private) | `function expectToolCallContent(` |
| 68 | fn | expectIteratorEvent | (private) | `function expectIteratorEvent(` |
| 1479 | fn | mockNdjsonReader | (private) | `function mockNdjsonReader(` |
| 1500 | fn | expectDoneEventContent | (private) | `async function expectDoneEventContent(lines: st...` |
| 1514 | fn | expectNoParsedChunks | (private) | `async function expectNoParsedChunks(reader: Rea...` |
| 1651 | fn | withMockNdjsonFetch | (private) | `async function withMockNdjsonFetch(` |
| 1668 | fn | createControlledNdjsonFetch | (private) | `function createControlledNdjsonFetch(): {` |
| 1703 | fn | getGuardedFetchCall | (private) | `function getGuardedFetchCall(fetchMock: typeof ...` |
| 1707 | fn | cancelTrackedResponse | (private) | `function cancelTrackedResponse(` |
| 1729 | fn | createOllamaTestStream | (private) | `async function createOllamaTestStream(params: {` |
| 1758 | fn | collectStreamEvents | (private) | `async function collectStreamEvents<T>(stream: A...` |
| 1766 | fn | nextEventWithin | (private) | `async function nextEventWithin<T>(` |
