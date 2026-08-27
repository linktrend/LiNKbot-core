# src/agents/agent-tools.before-tool-call.e2e.test.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 2789
- **Language:** TypeScript
- **Symbols:** 33
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 61 | fn | setGlobalHookRunnerForTest | (private) | `function setGlobalHookRunnerForTest(hookRunner:...` |
| 75 | fn | getGlobalHookRunnerForTest | (private) | `function getGlobalHookRunnerForTest(): HookRunn...` |
| 83 | type | TestHookRunner | (private) | - |
| 88 | fn | createTestHookRunner | (private) | `function createTestHookRunner(): TestHookRunner {` |
| 96 | fn | asAgentTool | (private) | `function asAgentTool(tool: { name: string; exec...` |
| 128 | fn | createWrappedTool | (private) | `function createWrappedTool(` |
| 139 | fn | withToolLoopEvents | (private) | `async function withToolLoopEvents(` |
| 156 | fn | withToolExecutionEvents | (private) | `async function withToolExecutionEvents(` |
| 165 | fn | flush | (private) | `const flush = () =>` |
| 176 | fn | withDiagnosticEvents | (private) | `async function withDiagnosticEvents(` |
| 183 | fn | flush | (private) | `const flush = () =>` |
| 194 | fn | withSkillUsageDiagnosticEvents | (private) | `async function withSkillUsageDiagnosticEvents(` |
| 209 | fn | flush | (private) | `const flush = () =>` |
| 221 | fn | createPingPongTools | (private) | `function createPingPongTools(options?: { withPr...` |
| 246 | fn | runPingPongSequence | (private) | `async function runPingPongSequence(` |
| 260 | fn | createGenericReadRepeatFixture | (private) | `function createGenericReadRepeatFixture() {` |
| 271 | fn | createNoProgressProcessFixture | (private) | `function createNoProgressProcessFixture(session...` |
| 282 | fn | expectCriticalLoopEvent | (private) | `function expectCriticalLoopEvent(` |
| 298 | fn | expectToolLoopBlockedResult | (private) | `function expectToolLoopBlockedResult(result: un...` |
| 310 | fn | expectUnblockedToolExecution | (private) | `async function expectUnblockedToolExecution(` |
| 322 | fn | requireRecord | (private) | `function requireRecord(value: unknown, label: s...` |
| 329 | fn | requireArray | (private) | `function requireArray(value: unknown, label: st...` |
| 337 | fn | expectEventFields | (private) | `function expectEventFields(` |
| 1492 | fn | requireRecord | (private) | `function requireRecord(value: unknown, label: s...` |
| 1499 | fn | requireHookCall | (private) | `function requireHookCall(` |
| 1512 | fn | requireGatewayCall | (private) | `function requireGatewayCall(index: number): unk...` |
| 1520 | fn | expectRecordFields | (private) | `function expectRecordFields(record: Record<stri...` |
| 1526 | fn | registerTelegramPluginApprovalSetup | (private) | `function registerTelegramPluginApprovalSetup():...` |
| 1559 | fn | runAbortDuringApprovalWait | (private) | `async function runAbortDuringApprovalWait(optio...` |
| 2652 | type | TrustedToolEvent | (private) | - |
| 2662 | fn | withTrustedToolEvents | (private) | `async function withTrustedToolEvents(` |
| 2671 | fn | flush | (private) | `const flush = () =>` |
| 2682 | fn | configWithToolContent | (private) | `function configWithToolContent(` |
