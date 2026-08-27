# src/commands/agent-via-gateway.test.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 2281
- **Language:** TypeScript
- **Symbols:** 16
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 56 | fn | mockConfig | (private) | `function mockConfig(storePath: string, override...` |
| 77 | fn | withTempStore | (private) | `async function withTempStore(` |
| 91 | fn | mockGatewaySuccessReply | (private) | `function mockGatewaySuccessReply(text = "hello") {` |
| 102 | fn | mockLocalAgentReply | (private) | `function mockLocalAgentReply(text = "local") {` |
| 112 | fn | requireFirstCallArg | (private) | `function requireFirstCallArg(mock: { mock: { ca...` |
| 124 | fn | requireRecord | (private) | `function requireRecord(value: unknown, label: s...` |
| 131 | fn | createSignalProcess | (private) | `function createSignalProcess() {` |
| 132 | type | SignalName | (private) | - |
| 159 | fn | waitForAgentCommandCall | (private) | `async function waitForAgentCommandCall(expected...` |
| 163 | fn | waitForGatewayCall | (private) | `async function waitForGatewayCall(expectedCalls...` |
| 167 | fn | mockMessages | (private) | `function mockMessages(mock: unknown): string[] {` |
| 172 | fn | createGatewayTimeoutError | (private) | `function createGatewayTimeoutError() {` |
| 186 | fn | createGatewayClosedError | (private) | `function createGatewayClosedError() {` |
| 201 | fn | createGatewayNormalCloseError | (private) | `function createGatewayNormalCloseError() {` |
| 239 | fn | resetAgentCliCommandMocksForTest | (private) | `function resetAgentCliCommandMocksForTest() {` |
| 526 | fn | writer | (private) | `const writer = (async () => {` |
