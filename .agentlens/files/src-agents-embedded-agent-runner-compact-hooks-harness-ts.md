# src/agents/embedded-agent-runner/compact.hooks.harness.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1107
- **Language:** TypeScript
- **Symbols:** 14
- **Public symbols:** 3

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 13 | type | MockResolvedModel | (private) | - |
| 26 | type | MockMemorySearchManager | (private) | - |
| 31 | type | MockEmbeddedAgentStreamFn | (private) | - |
| 109 | fn | createSelectedAgentHarnessMock | (private) | `function createSelectedAgentHarnessMock(params: {` |
| 129 | fn | createDefaultSessionMessages | (private) | `function createDefaultSessionMessages(): unknow...` |
| 145 | fn | createMockCompactionSession | (private) | `function createMockCompactionSession() {` |
| 178 | fn | createMockToolDefinitions | (private) | `function createMockToolDefinitions(tools: unkno...` |
| 234 | fn | createDefaultCompactionAuthStore | (private) | `function createDefaultCompactionAuthStore(): Au...` |
| 261 | fn | runCompactWithSafetyTimeoutMock | (private) | `async function runCompactWithSafetyTimeoutMock(` |
| 270 | fn | cancelAndCreateError | (private) | `const cancelAndCreateError = () => {` |
| 304 | fn | createCompactHooksRuntimePlan | (private) | `function createCompactHooksRuntimePlan(params: ...` |
| 423 | fn | resetCompactSessionStateMocks | pub | `export function resetCompactSessionStateMocks()...` |
| 526 | fn | resetCompactHooksHarnessMocks | pub | `export function resetCompactHooksHarnessMocks()...` |
| 599 | fn | loadCompactHooksHarness | pub | `export async function loadCompactHooksHarness()...` |

## Public API

### `resetCompactSessionStateMocks`

```
export function resetCompactSessionStateMocks(): void {
```

**Line:** 423 | **Kind:** fn

### `resetCompactHooksHarnessMocks`

```
export function resetCompactHooksHarnessMocks(): void {
```

**Line:** 526 | **Kind:** fn

### `loadCompactHooksHarness`

```
export async function loadCompactHooksHarness(): Promise<{
```

**Line:** 599 | **Kind:** fn
