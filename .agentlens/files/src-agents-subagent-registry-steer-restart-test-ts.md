# src/agents/subagent-registry.steer-restart.test.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1158
- **Language:** TypeScript
- **Symbols:** 12
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 11 | fn | noop | (private) | `const noop = () => {};` |
| 88 | fn | countMatching | (private) | `function countMatching<T>(items: readonly T[], ...` |
| 98 | fn | requireRecord | (private) | `function requireRecord(value: unknown, label: s...` |
| 105 | fn | requireSubagentEndedHookCall | (private) | `function requireSubagentEndedHookCall(runId: st...` |
| 122 | fn | requireSessionLifecycleEventCall | (private) | `function requireSessionLifecycleEventCall(label...` |
| 130 | fn | requireFirstAnnounceCall | (private) | `function requireFirstAnnounceCall(): Record<str...` |
| 174 | type | RegisterSubagentRunInput | (private) | - |
| 199 | fn | flushAnnounce | (private) | `const flushAnnounce = async () => {` |
| 204 | fn | waitForRegistrySideEffect | (private) | `const waitForRegistrySideEffect = async (assert...` |
| 270 | fn | listMainRuns | (private) | `const listMainRuns = () => mod.listSubagentRuns...` |
| 272 | fn | emitLifecycleEnd | (private) | `const emitLifecycleEnd = (` |
| 292 | fn | replaceRunAfterSteer | (private) | `const replaceRunAfterSteer = (params: {` |
