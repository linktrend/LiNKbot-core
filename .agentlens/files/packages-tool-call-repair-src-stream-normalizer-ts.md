# packages/tool-call-repair/src/stream-normalizer.ts

[← Back to Module](../modules/packages-tool-call-repair-src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1632
- **Language:** TypeScript
- **Symbols:** 52
- **Public symbols:** 3

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 24 | type | PlainTextToolCallMessageNormalization | pub | - |
| 29 | type | PlainTextToolCallStreamNormalizerOptions | pub | - |
| 49 | type | TextRange | (private) | - |
| 50 | type | StandalonePlainTextToolCallCandidate | (private) | - |
| 54 | type | ScannedCallSequence | (private) | - |
| 55 | type | XmlSuppressor | (private) | - |
| 57 | type | JsonSuppressor | (private) | - |
| 68 | type | OpeningSuppressor | (private) | - |
| 76 | type | OverCapSuppressor | (private) | - |
| 78 | type | CandidatePendingState | (private) | - |
| 91 | type | SuppressingPendingState | (private) | - |
| 98 | type | PendingState | (private) | - |
| 100 | fn | asRecord | (private) | `function asRecord(value: unknown): Record<strin...` |
| 104 | fn | eventContentIndex | (private) | `function eventContentIndex(event: Record<string...` |
| 109 | fn | isTextStreamEvent | (private) | `function isTextStreamEvent(event: Record<string...` |
| 113 | fn | extractStandaloneCandidate | (private) | `function extractStandaloneCandidate(` |
| 146 | fn | scannedCall | (private) | `function scannedCall(scan: PlainTextToolCallSca...` |
| 166 | fn | scanHasNamedCandidate | (private) | `function scanHasNamedCandidate(scan: PlainTextT...` |
| 177 | fn | consumeRemovedLineEnd | (private) | `function consumeRemovedLineEnd(text: string, en...` |
| 185 | fn | findUtf8OverCapOffset | (private) | `function findUtf8OverCapOffset(text: string, st...` |
| 198 | fn | findCallSequences | (private) | `function findCallSequences(` |
| 310 | fn | createCandidateScanView | (private) | `function createCandidateScanView(candidate: Sta...` |
| 321 | fn | findCandidateCallSequences | (private) | `function findCandidateCallSequences(` |
| 329 | fn | createRangeRemover | (private) | `function createRangeRemover(ranges: readonly Te...` |
| 358 | fn | projectRangesOntoMessage | (private) | `function projectRangesOntoMessage(` |
| 395 | fn | projectScrubbedPlainTextToolCallMessage | pub | `export function projectScrubbedPlainTextToolCal...` |
| 425 | fn | findPotentialCallStart | (private) | `function findPotentialCallStart(` |
| 450 | fn | nextAtLineStart | (private) | `function nextAtLineStart(previous: boolean, tex...` |
| 457 | fn | eventTemplate | (private) | `function eventTemplate(event: Record<string, un...` |
| 465 | fn | createSyntheticTextDelta | (private) | `function createSyntheticTextDelta(` |
| 479 | fn | cappedUtf8ByteLength | (private) | `function cappedUtf8ByteLength(text: string): nu...` |
| 485 | fn | pendingEventBytes | (private) | `function pendingEventBytes(record: Record<strin...` |
| 491 | fn | pendingQueueOverCap | (private) | `function pendingQueueOverCap(pending: Candidate...` |
| 497 | fn | createPendingState | (private) | `function createPendingState(` |
| 527 | fn | queuePendingEvent | (private) | `function queuePendingEvent(` |
| 555 | fn | appendPendingText | (private) | `function appendPendingText(` |
| 582 | fn | replayFalsePositiveCandidate | (private) | `function replayFalsePositiveCandidate(pending: ...` |
| 586 | fn | projectPendingAuxEvents | (private) | `function projectPendingAuxEvents(` |
| 626 | fn | projectEventIndex | (private) | `function projectEventIndex(` |
| 637 | fn | projectedTextForEvent | (private) | `function projectedTextForEvent(` |
| 653 | type | PendingClassification | (private) | - |
| 665 | fn | createOverCapSuppressor | (private) | `function createOverCapSuppressor(` |
| 756 | fn | classifyPending | (private) | `function classifyPending(` |
| 826 | fn | consumeXmlSuppressor | (private) | `function consumeXmlSuppressor(` |
| 884 | fn | consumeJsonSuppressor | (private) | `function consumeJsonSuppressor(` |
| 967 | fn | consumeOpeningSuppressor | (private) | `function consumeOpeningSuppressor(` |
| 1000 | fn | consumeOverCapSuppressor | (private) | `function consumeOverCapSuppressor(` |
| 1011 | fn | orderByContentIndex | (private) | `function orderByContentIndex(` |
| 1016 | fn | order | (private) | `const order = (event: unknown) => {` |
| 1043 | fn | scrubSnapshot | (private) | `const scrubSnapshot = (` |
| 1067 | fn | eventKey | (private) | `const eventKey = (record: Record<string, unknow...` |
| 1082 | fn | forceProjectPendingAux | (private) | `const forceProjectPendingAux = (` |

## Public API

### `projectScrubbedPlainTextToolCallMessage`

```
export function projectScrubbedPlainTextToolCallMessage(params: {
```

**Line:** 395 | **Kind:** fn
