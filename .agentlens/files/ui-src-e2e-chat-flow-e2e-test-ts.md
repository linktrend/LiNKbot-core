# ui/src/e2e/chat-flow.e2e.test.ts

[← Back to Module](../modules/ui-src-e2e/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 4174
- **Language:** TypeScript
- **Symbols:** 28
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 40 | fn | requireRecord | (private) | `function requireRecord(value: unknown): Record<...` |
| 47 | fn | requireString | (private) | `function requireString(value: unknown, label: s...` |
| 54 | fn | waitForRequests | (private) | `async function waitForRequests(` |
| 72 | fn | expectRequestCountStable | (private) | `async function expectRequestCountStable(` |
| 87 | fn | installPlainHttpClipboardCapture | (private) | `async function installPlainHttpClipboardCapture...` |
| 106 | fn | copiedViaExec | (private) | `async function copiedViaExec(page: Page): Promi...` |
| 110 | fn | chatThreadDistanceFromBottom | (private) | `async function chatThreadDistanceFromBottom(pag...` |
| 117 | fn | waitForChatScrollIdle | (private) | `async function waitForChatScrollIdle(page: Page...` |
| 123 | fn | readGeometry | (private) | `const readGeometry = () => ({` |
| 150 | fn | scrollChatThreadToTop | (private) | `async function scrollChatThreadToTop(page: Page...` |
| 158 | fn | newBrowserContext | (private) | `async function newBrowserContext(options: Param...` |
| 164 | fn | closeBrowserContext | (private) | `async function closeBrowserContext(context: Bro...` |
| 169 | fn | closeOpenBrowserContexts | (private) | `async function closeOpenBrowserContexts(): Prom...` |
| 173 | fn | captureSessionAccessibilityProof | (private) | `async function captureSessionAccessibilityProof...` |
| 190 | fn | visibleChatBubbleTexts | (private) | `async function visibleChatBubbleTexts(page: Pag...` |
| 208 | fn | chatSessionListResponse | (private) | `function chatSessionListResponse(` |
| 244 | fn | sidebarSessionOrder | (private) | `async function sidebarSessionOrder(page: Page):...` |
| 984 | fn | historyFor | (private) | `const historyFor = (indexes: number[], labelPre...` |
| 1001 | fn | readBlobProof | (private) | `const readBlobProof = () =>` |
| 1011 | fn | replaceHistory | (private) | `const replaceHistory = async (messages: unknown...` |
| 2623 | fn | readLayout | (private) | `const readLayout = () =>` |
| 2780 | fn | historyMessage | (private) | `const historyMessage = (seq: number, label: str...` |
| 2876 | type | FrameSample | (private) | - |
| 2890 | fn | sample | (private) | `const sample = () => {` |
| 3093 | fn | readStoredProof | (private) | `const readStoredProof = () =>` |
| 3284 | fn | openModelSelect | (private) | `const openModelSelect = async () => {` |
| 3289 | fn | selectModel | (private) | `const selectModel = async (value: string) => {` |
| 3772 | fn | sessionRow | (private) | `const sessionRow = (sessionKey: string) =>` |
