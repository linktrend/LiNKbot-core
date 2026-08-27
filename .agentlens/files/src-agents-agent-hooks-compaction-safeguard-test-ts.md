# src/agents/agent-hooks/compaction-safeguard.test.ts

[← Back to Module](../modules/src-agents-agent-hooks/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 3274
- **Language:** TypeScript
- **Symbols:** 15
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 38 | fn | summaryResult | (private) | `function summaryResult(text: string) {` |
| 78 | fn | stubSessionManager | (private) | `function stubSessionManager(): ExtensionContext...` |
| 97 | fn | createAnthropicModelFixture | (private) | `function createAnthropicModelFixture(overrides:...` |
| 113 | type | CompactionHandler | (private) | - |
| 114 | fn | createCompactionHandler | (private) | `const createCompactionHandler = () => {` |
| 130 | fn | createCompactionEvent | (private) | `const createCompactionEvent = (params: { messag...` |
| 148 | fn | createCompactionContext | (private) | `const createCompactionContext = (params: {` |
| 169 | fn | runCompactionScenario | (private) | `async function runCompactionScenario(params: {` |
| 197 | fn | expectCompactionResult | (private) | `function expectCompactionResult(result: {` |
| 212 | fn | mockCallArg | (private) | `function mockCallArg(` |
| 224 | fn | latestMockCallArg | (private) | `function latestMockCallArg(` |
| 231 | fn | requireRecord | (private) | `function requireRecord(value: unknown): Record<...` |
| 238 | fn | requireArray | (private) | `function requireArray(value: unknown): unknown[] {` |
| 3133 | fn | expectWorkspaceSummaryEmptyForAgentsAlias | (private) | `async function expectWorkspaceSummaryEmptyForAg...` |
| 3152 | fn | withWorkspaceSummary | (private) | `async function withWorkspaceSummary(` |

## Memory Markers

### 🔴 `SAFETY` (line 3248)

> \n\nBe safe.\n",
