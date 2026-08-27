# src/infra/restart-stale-pids.test.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1441
- **Language:** TypeScript
- **Symbols:** 12
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 107 | fn | lsofOutput | (private) | `function lsofOutput(entries: Array<{ pid: numbe...` |
| 111 | type | MockLsofResult | (private) | - |
| 118 | type | MockWindowsListeningPidsResult | (private) | - |
| 122 | type | MockWindowsProcessArgsResult | (private) | - |
| 126 | fn | createLsofResult | (private) | `function createLsofResult(overrides: Partial<Mo...` |
| 136 | fn | createOpenClawBusyResult | (private) | `function createOpenClawBusyResult(pid: number, ...` |
| 143 | fn | createErrnoResult | (private) | `function createErrnoResult(code: string, messag...` |
| 149 | fn | installInitialBusyPoll | (private) | `function installInitialBusyPoll(` |
| 167 | fn | mockCall | (private) | `function mockCall(mock: ReturnType<typeof vi.fn...` |
| 175 | fn | mockCallRecordArg | (private) | `function mockCallRecordArg(` |
| 188 | fn | expectWarningContaining | (private) | `function expectWarningContaining(text: string):...` |
| 233 | fn | withStubbedPpid | (private) | `function withStubbedPpid<T>(ppid: number, fn: (...` |
