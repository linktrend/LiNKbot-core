# src/gateway/mcp-http.test.ts

[← Back to Module](../modules/src-gateway/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 3467
- **Language:** TypeScript
- **Symbols:** 45
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 9 | type | MockGatewayTool | (private) | - |
| 22 | type | MockGatewayScopedTools | (private) | - |
| 27 | type | MockBeforeToolCallHookResult | (private) | - |
| 43 | type | ScopedToolsCall | (private) | - |
| 100 | type | BeforeToolCallHookInput | (private) | - |
| 120 | type | McpToolResultPayload | (private) | - |
| 221 | fn | sendRaw | (private) | `async function sendRaw(params: {` |
| 237 | fn | readStreamChunkWithTimeout | (private) | `async function readStreamChunkWithTimeout(` |
| 260 | fn | expectPromiseResolvesWithin | (private) | `async function expectPromiseResolvesWithin<T>(` |
| 282 | fn | readUntilInitialSseCommentFrame | (private) | `async function readUntilInitialSseCommentFrame(` |
| 298 | fn | expectInitialSseCommentFrame | (private) | `async function expectInitialSseCommentFrame(res...` |
| 328 | fn | sendChunkedOversizedBody | (private) | `async function sendChunkedOversizedBody(params: {` |
| 385 | fn | sendStalledBody | (private) | `async function sendStalledBody(params: {` |
| 463 | fn | startLoopbackServerForTest | (private) | `async function startLoopbackServerForTest(port ...` |
| 472 | fn | readMcpPayload | (private) | `async function readMcpPayload(response: Respons...` |
| 476 | fn | sendLoopbackToolsList | (private) | `async function sendLoopbackToolsList(params: {` |
| 489 | fn | sendLoopbackToolCall | (private) | `async function sendLoopbackToolCall(params: {` |
| 503 | fn | sendMainSessionToolCall | (private) | `async function sendMainSessionToolCall(params: {` |
| 516 | fn | readOkMcpPayload | (private) | `async function readOkMcpPayload(response: Respo...` |
| 522 | fn | listMainSessionTools | (private) | `async function listMainSessionTools(token?: str...` |
| 531 | fn | callMainSessionTool | (private) | `async function callMainSessionTool(params: {` |
| 539 | fn | callMessageToolWithExecute | (private) | `async function callMessageToolWithExecute(execu...` |
| 549 | fn | expectBrowserToolsListStatus | (private) | `async function expectBrowserToolsListStatus(par...` |
| 570 | fn | expectMcpToolNames | (private) | `function expectMcpToolNames(payload: McpToolRes...` |
| 577 | fn | expectMcpResultText | (private) | `function expectMcpResultText(payload: McpToolRe...` |
| 586 | fn | angleSchema | (private) | `function angleSchema(property: unknown, require...` |
| 594 | fn | getScopedToolsCall | (private) | `function getScopedToolsCall(index: number): Sco...` |
| 602 | fn | getBeforeToolCallHookInput | (private) | `function getBeforeToolCallHookInput(index: numb...` |
| 610 | fn | makeMockTool | (private) | `function makeMockTool(overrides: Partial<MockGa...` |
| 623 | fn | makeMessageTool | (private) | `function makeMessageTool(overrides: Partial<Moc...` |
| 631 | fn | makeCronTool | (private) | `function makeCronTool(overrides: Partial<MockGa...` |
| 639 | fn | mockScopedTools | (private) | `function mockScopedTools(tools: MockGatewayTool...` |
| 646 | fn | jsonHeaders | (private) | `function jsonHeaders(headers: Record<string, st...` |
| 653 | fn | mcpToolsListBody | (private) | `function mcpToolsListBody(id = 1) {` |
| 657 | fn | mcpToolCallBody | (private) | `function mcpToolCallBody(name: string, args: Re...` |
| 666 | fn | buildMockMcpToolSchema | (private) | `function buildMockMcpToolSchema(tools: MockGate...` |
| 939 | fn | conflictingUnion | (private) | `const conflictingUnion = (label: string) => ({` |
| 1130 | fn | sendWithCaps | (private) | `const sendWithCaps = async (clientCaps: string,...` |
| 1246 | fn | sendWithCapture | (private) | `const sendWithCapture = async (captureKey?: str...` |
| 1479 | fn | sendYield | (private) | `const sendYield = async (` |
| 1512 | fn | sendToolsList | (private) | `const sendToolsList = async (` |
| 1570 | fn | listTools | (private) | `const listTools = async (clientCaps?: string) =>` |
| 1876 | fn | sendToolsList | (private) | `const sendToolsList = async (token?: string) =>` |
| 3218 | fn | send | (private) | `const send = async (method: "GET" | "DELETE", r...` |
| 3324 | fn | finishStalledRequest | (private) | `const finishStalledRequest = () => {` |
