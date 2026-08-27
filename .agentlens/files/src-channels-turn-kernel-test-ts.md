# src/channels/turn/kernel.test.ts

[← Back to Module](../modules/src-channels-turn/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1802
- **Language:** TypeScript
- **Symbols:** 18
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 81 | fn | createCtx | (private) | `function createCtx(overrides: Partial<Finalized...` |
| 95 | fn | createRecordInboundSession | (private) | `function createRecordInboundSession(events: str...` |
| 101 | fn | createDispatch | (private) | `function createDispatch(` |
| 115 | fn | requireFirstMockCall | (private) | `function requireFirstMockCall<T>(mock: { mock: ...` |
| 123 | fn | createDurableSendResult | (private) | `function createDurableSendResult(messageIds: st...` |
| 135 | type | DurableSendRequest | (private) | - |
| 152 | type | DurableSupportRequest | (private) | - |
| 157 | type | DeliveryResult | (private) | - |
| 163 | type | FinalizeResult | (private) | - |
| 169 | type | TurnLogEvent | (private) | - |
| 175 | fn | latestDurableSendRequest | (private) | `function latestDurableSendRequest(): DurableSen...` |
| 185 | fn | latestDurableSupportRequest | (private) | `function latestDurableSupportRequest(): Durable...` |
| 195 | fn | deliveryResult | (private) | `function deliveryResult(value: unknown): Delive...` |
| 199 | fn | finalizeResult | (private) | `function finalizeResult(value: unknown): Finali...` |
| 203 | fn | expectDispatched | (private) | `function expectDispatched<TDispatchResult>(` |
| 212 | fn | loggedEvents | (private) | `function loggedEvents(log: ReturnType<typeof vi...` |
| 241 | type | DispatchResult | (private) | - |
| 1451 | fn | runOne | (private) | `const runOne = async (id: string) =>` |
