# src/agents/bash-tools.exec.approval-id.test.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1671
- **Language:** TypeScript
- **Symbols:** 18
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 40 | fn | normalizeMessageChannel | (private) | `const normalizeMessageChannel = (raw?: string |...` |
| 50 | fn | isGatewayMessageChannel | (private) | `const isGatewayMessageChannel = (value: string)...` |
| 119 | fn | stdoutFor | (private) | `const stdoutFor = (command: string) => {` |
| 181 | fn | buildPreparedSystemRunPayload | (private) | `function buildPreparedSystemRunPayload(rawInvok...` |
| 195 | fn | writeExecApprovalsConfig | (private) | `async function writeExecApprovalsConfig(config:...` |
| 201 | fn | acceptedApprovalResponse | (private) | `function acceptedApprovalResponse(params: unkno...` |
| 205 | fn | getResultText | (private) | `function getResultText(result: { content: Array...` |
| 209 | fn | expectPendingApprovalText | (private) | `function expectPendingApprovalText(` |
| 248 | fn | expectPendingCommandText | (private) | `function expectPendingCommandText(` |
| 261 | fn | mockGatewayOkCalls | (private) | `function mockGatewayOkCalls(calls: string[]) {` |
| 268 | fn | createElevatedAllowlistExecTool | (private) | `function createElevatedAllowlistExecTool() {` |
| 277 | fn | expectGatewayExecWithoutApproval | (private) | `async function expectGatewayExecWithoutApproval...` |
| 300 | fn | expectGatewayAskAlwaysPrompt | (private) | `async function expectGatewayAskAlwaysPrompt(opt...` |
| 326 | fn | mockAcceptedApprovalFlow | (private) | `function mockAcceptedApprovalFlow(options: {` |
| 348 | fn | mockPendingApprovalRegistration | (private) | `function mockPendingApprovalRegistration() {` |
| 362 | fn | mockNoApprovalRouteRegistration | (private) | `function mockNoApprovalRouteRegistration() {` |
| 374 | fn | requireRecord | (private) | `function requireRecord(value: unknown, label: s...` |
| 381 | fn | expectRecordFields | (private) | `function expectRecordFields(` |
