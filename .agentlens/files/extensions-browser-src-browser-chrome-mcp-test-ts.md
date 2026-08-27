# extensions/browser/src/browser/chrome-mcp.test.ts

[← Back to Module](../modules/extensions-browser/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 3059
- **Language:** TypeScript
- **Symbols:** 14
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 36 | type | ToolCall | (private) | - |
| 40 | type | ToolCallMock | (private) | - |
| 46 | fn | waitForChromeMcpState | (private) | `function waitForChromeMcpState<T>(assertion: ()...` |
| 50 | fn | createSdkTimeoutCallTool | (private) | `function createSdkTimeoutCallTool() {` |
| 62 | fn | fakeListPagesResult | (private) | `function fakeListPagesResult() {` |
| 68 | type | ChromeMcpSessionFactory | (private) | - |
| 72 | type | ChromeMcpSession | (private) | - |
| 78 | fn | processSnapshot | (private) | `function processSnapshot(pid: number, ppid: num...` |
| 82 | fn | createFakeSession | (private) | `function createFakeSession(): ChromeMcpSession {` |
| 86 | fn | readUrlArg | (private) | `const readUrlArg = (value: unknown, fallback: s...` |
| 178 | fn | createToolErrorSession | (private) | `function createToolErrorSession(message: string...` |
| 197 | type | SessionPage | (private) | - |
| 199 | fn | createPageSession | (private) | `function createPageSession(params: {` |
| 1046 | fn | argsFor | (private) | `const argsFor = (name: string) => calls.find((c...` |
