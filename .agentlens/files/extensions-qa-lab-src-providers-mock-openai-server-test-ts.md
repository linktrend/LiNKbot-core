# extensions/qa-lab/src/providers/mock-openai/server.test.ts

[← Back to Module](../modules/extensions-qa-lab-src-providers-mock-openai/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 6305
- **Language:** TypeScript
- **Symbols:** 20
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 32 | fn | startMockServer | (private) | `async function startMockServer(params?: { final...` |
| 44 | fn | postResponses | (private) | `async function postResponses(server: { baseUrl:...` |
| 54 | fn | expectResponsesText | (private) | `async function expectResponsesText(server: { ba...` |
| 60 | fn | expectResponsesJson | (private) | `async function expectResponsesJson<T>(server: {...` |
| 66 | fn | requireRecord | (private) | `function requireRecord(value: unknown, label: s...` |
| 73 | fn | requireArray | (private) | `function requireArray(value: unknown, label: st...` |
| 80 | fn | outputItem | (private) | `function outputItem(payload: unknown, index = 0) {` |
| 85 | fn | outputItems | (private) | `function outputItems(payload: unknown) {` |
| 91 | fn | outputToolArgs | (private) | `function outputToolArgs(payload: unknown, index...` |
| 96 | fn | outputToolArgsFromItem | (private) | `function outputToolArgsFromItem(item: Record<st...` |
| 103 | fn | outputToolCall | (private) | `function outputToolCall(payload: unknown, name:...` |
| 113 | fn | outputToolCallId | (private) | `function outputToolCallId(item: Record<string, ...` |
| 117 | fn | outputContentItem | (private) | `function outputContentItem(payload: unknown, ou...` |
| 122 | fn | outputText | (private) | `function outputText(payload: unknown, outputInd...` |
| 130 | fn | makeUserInput | (private) | `function makeUserInput(text: string) {` |
| 146 | fn | makeDeveloperInput | (private) | `function makeDeveloperInput(text: string) {` |
| 153 | fn | buildWhatsAppPendingHistoryContextFixture | (private) | `function buildWhatsAppPendingHistoryContextFixt...` |
| 225 | fn | threadSubagentTask | (private) | `function threadSubagentTask(token: string) {` |
| 229 | fn | explicitSessionsSpawnPrompt | (private) | `function explicitSessionsSpawnPrompt(token: str...` |
| 241 | fn | readCursor | (private) | `const readCursor = async () =>` |
