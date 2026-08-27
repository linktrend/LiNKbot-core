# src/infra/outbound/deliver.test.ts

[← Back to Module](../modules/src-infra-outbound/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 6226
- **Language:** TypeScript
- **Symbols:** 15
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 135 | fn | makeLogger | (private) | `const makeLogger = () => ({` |
| 146 | type | DeliverModule | (private) | - |
| 158 | type | DeliverOutboundArgs | (private) | - |
| 159 | type | DeliverOutboundPayload | (private) | - |
| 160 | type | MatrixSendFn | (private) | - |
| 166 | fn | resolveMatrixSender | (private) | `function resolveMatrixSender(deps: DeliverOutbo...` |
| 174 | fn | requireMockCallArg | (private) | `function requireMockCallArg(` |
| 186 | fn | requireMockCall | (private) | `function requireMockCall(` |
| 198 | fn | requireMatrixSendCall | (private) | `function requireMatrixSendCall(sendMatrix: Retu...` |
| 202 | fn | withMatrixChannel | (private) | `function withMatrixChannel(result: Awaited<Retu...` |
| 246 | fn | deliverMatrixPayload | (private) | `async function deliverMatrixPayload(params: {` |
| 260 | fn | runChunkedMatrixDelivery | (private) | `async function runChunkedMatrixDelivery(params?: {` |
| 281 | fn | deliverSingleMatrixForHookTest | (private) | `async function deliverSingleMatrixForHookTest(p...` |
| 293 | fn | flushDiagnosticEvents | (private) | `function flushDiagnosticEvents() {` |
| 299 | fn | runBestEffortPartialFailureDelivery | (private) | `async function runBestEffortPartialFailureDeliv...` |

## Memory Markers

### 🔴 `RULE` (line 2509)

> conversationType alone must not claim "direct" for a room
