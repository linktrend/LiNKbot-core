# extensions/signal/src/client-container.test.ts

[← Back to Module](../modules/extensions-signal/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1669
- **Language:** TypeScript
- **Symbols:** 19
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 7 | type | ContainerRpcOptions | (private) | - |
| 9 | fn | containerRestRequest | (private) | `async function containerRestRequest<T = unknown>(` |
| 49 | fn | containerSendMessage | (private) | `async function containerSendMessage(params: {` |
| 88 | fn | containerSendTyping | (private) | `async function containerSendTyping(params: {` |
| 107 | fn | containerSendReceipt | (private) | `async function containerSendReceipt(params: {` |
| 128 | fn | containerFetchAttachment | (private) | `async function containerFetchAttachment(` |
| 140 | type | ContainerReactionParams | (private) | - |
| 151 | fn | sendContainerReaction | (private) | `function sendContainerReaction(params: Containe...` |
| 167 | fn | containerSendReaction | (private) | `function containerSendReaction(params: Containe...` |
| 171 | fn | containerRemoveReaction | (private) | `function containerRemoveReaction(params: Contai...` |
| 180 | fn | bodyStream | (private) | `function bodyStream(text: string): { body: Read...` |
| 194 | fn | stalledBodyStream | (private) | `function stalledBodyStream(): { body: ReadableS...` |
| 200 | fn | delayedBodyStream | (private) | `function delayedBodyStream(` |
| 231 | fn | requireFetchCall | (private) | `function requireFetchCall(index = 0): [RequestI...` |
| 239 | fn | expectFetchCall | (private) | `function expectFetchCall(index: number, url: st...` |
| 248 | fn | expectFirstFetchCall | (private) | `function expectFirstFetchCall(url: string, meth...` |
| 252 | fn | parseFetchBody | (private) | `function parseFetchBody(index = 0): Record<stri...` |
| 260 | fn | expectMockLogNotContains | (private) | `function expectMockLogNotContains(mock: ReturnT...` |
| 297 | fn | onceCallback | (private) | `const onceCallback = (...args: unknown[]) => {` |
