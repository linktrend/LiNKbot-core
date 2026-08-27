# src/agents/tool-loop-detection.test.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1192
- **Language:** TypeScript
- **Symbols:** 15
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 28 | fn | createState | (private) | `function createState(): SessionState {` |
| 36 | fn | recordArgsHash | (private) | `function recordArgsHash(toolName: string, param...` |
| 48 | fn | recordSuccessfulCall | (private) | `function recordSuccessfulCall(` |
| 65 | fn | recordFailedCall | (private) | `function recordFailedCall(` |
| 82 | fn | recordRepeatedSuccessfulCalls | (private) | `function recordRepeatedSuccessfulCalls(params: {` |
| 102 | fn | createNoProgressPollFixture | (private) | `function createNoProgressPollFixture(sessionId:...` |
| 112 | fn | createReadNoProgressFixture | (private) | `function createReadNoProgressFixture() {` |
| 123 | fn | createPingPongFixture | (private) | `function createPingPongFixture() {` |
| 131 | fn | detectLoopAfterRepeatedCalls | (private) | `function detectLoopAfterRepeatedCalls(params: {` |
| 154 | fn | recordSuccessfulPingPongCalls | (private) | `function recordSuccessfulPingPongCalls(params: {` |
| 184 | fn | expectPingPongLoop | (private) | `function expectPingPongLoop(` |
| 854 | fn | sendResult | (private) | `function sendResult(payload: Record<string, unk...` |
| 861 | fn | recordSend | (private) | `function recordSend(` |
| 879 | fn | sendPayload | (private) | `function sendPayload(index: number): Record<str...` |
| 905 | fn | broadcast | (private) | `const broadcast = (index: number) => ({` |
