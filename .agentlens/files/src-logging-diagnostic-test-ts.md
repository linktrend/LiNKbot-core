# src/logging/diagnostic.test.ts

[← Back to Module](../modules/src-logging/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 3156
- **Language:** TypeScript
- **Symbols:** 15
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 56 | fn | startDiagnosticHeartbeat | (private) | `function startDiagnosticHeartbeat(` |
| 66 | fn | createEmitMemorySampleMock | (private) | `function createEmitMemorySampleMock() {` |
| 76 | fn | flushDiagnosticEvents | (private) | `function flushDiagnosticEvents() {` |
| 82 | fn | countMatching | (private) | `function countMatching<T>(items: readonly T[], ...` |
| 92 | fn | requireRecord | (private) | `function requireRecord(value: unknown, label: s...` |
| 99 | fn | expectRecordFields | (private) | `function expectRecordFields(record: Record<stri...` |
| 105 | fn | expectNumberField | (private) | `function expectNumberField(record: Record<strin...` |
| 109 | fn | requireMatchingRecord | (private) | `function requireMatchingRecord(` |
| 127 | fn | requireFirstMockCallArg | (private) | `function requireFirstMockCallArg(mock: unknown,...` |
| 136 | fn | loggerMessages | (private) | `function loggerMessages(spy: unknown): string[] {` |
| 143 | fn | expectLoggerMessageContaining | (private) | `function expectLoggerMessageContaining(spy: unk...` |
| 147 | fn | expectNoLoggerMessageContaining | (private) | `function expectNoLoggerMessageContaining(spy: u...` |
| 151 | fn | expectRecoveryCall | (private) | `function expectRecoveryCall(` |
| 2572 | fn | abortedOutcome | (private) | `function abortedOutcome(): StuckSessionRecovery...` |
| 2587 | fn | flush | (private) | `function flush(): Promise<void> {` |

## Memory Markers

### 🔴 `WARNING` (line 639)

> stays throttled: still only the single 60s warning.
