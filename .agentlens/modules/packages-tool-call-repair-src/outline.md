# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 3 large files in this module.

## packages/tool-call-repair/src/payload.ts (743 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 29 | type | PlainTextToolCallBlock | pub |
| 46 | type | PlainTextJsonToolCallSpan | pub |
| 47 | type | PlainTextJsonToolCallSyntax | pub |
| 48 | type | PlainTextJsonToolCallState | pub |
| 53 | type | PlainTextJsonToolCallCandidate | pub |
| 60 | type | PlainTextJsonToolCallScan | pub |
| 70 | type | PlainTextToolCallNameMatcher | pub |
| 75 | type | PlainTextToolCallScanBranches | (private) |
| 81 | type | PlainTextToolCallScan | pub |
| 106 | type | PlainTextToolCallScanCandidate | (private) |
| 112 | type | PlainTextToolCallScanBranch | (private) |
| 121 | type | PlainTextJsonToolCallOpening | (private) |
| 126 | type | PlainTextJsonToolCallOpeningScan | (private) |
| 130 | fn | isLiteralPrefixAt | (private) |
| 135 | fn | scanToolNameEnd | (private) |
| 146 | fn | candidate | (private) |
| 156 | fn | scanBracketOpening | (private) |
| 205 | fn | scanHarmonyOpening | (private) |
| 270 | fn | scanJsonObject | (private) |
| 312 | fn | scanPlainTextJsonToolCall | pub |
| 392 | fn | scanPlainTextToolCall | pub |
| 430 | fn | overCap | (private) |
| 519 | fn | parsePlainTextToolCallBlockAt | (private) |
| 552 | fn | parseJsonArguments | (private) |
| 567 | fn | extractXmlishParameterValue | (private) |
| 592 | fn | parseXmlishPlainTextToolCallBlockAt | (private) |
| 633 | fn | parsePlainTextToolCallBlockAtAnySyntax | (private) |
| 651 | fn | parseStandalonePlainTextToolCallBlocks | pub |
| 683 | fn | stripPlainTextToolCallBlocks | pub |

## packages/tool-call-repair/src/stream-normalizer.test.ts (1187 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 15 | type | Terminal | (private) |
| 17 | fn | parseSplitCall | (private) |
| 30 | fn | textContent | (private) |
| 34 | fn | textDelta | (private) |
| 43 | fn | normalize | (private) |
| 48 | fn | scrubMessage | (private) |
| 72 | fn | withTerminal | (private) |
| 86 | fn | textDeltas | (private) |
| 90 | fn | expectTerminalContent | (private) |

## packages/tool-call-repair/src/stream-normalizer.ts (1632 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 24 | type | PlainTextToolCallMessageNormalization | pub |
| 29 | type | PlainTextToolCallStreamNormalizerOptions | pub |
| 49 | type | TextRange | (private) |
| 50 | type | StandalonePlainTextToolCallCandidate | (private) |
| 54 | type | ScannedCallSequence | (private) |
| 55 | type | XmlSuppressor | (private) |
| 57 | type | JsonSuppressor | (private) |
| 68 | type | OpeningSuppressor | (private) |
| 76 | type | OverCapSuppressor | (private) |
| 78 | type | CandidatePendingState | (private) |
| 91 | type | SuppressingPendingState | (private) |
| 98 | type | PendingState | (private) |
| 100 | fn | asRecord | (private) |
| 104 | fn | eventContentIndex | (private) |
| 109 | fn | isTextStreamEvent | (private) |
| 113 | fn | extractStandaloneCandidate | (private) |
| 146 | fn | scannedCall | (private) |
| 166 | fn | scanHasNamedCandidate | (private) |
| 177 | fn | consumeRemovedLineEnd | (private) |
| 185 | fn | findUtf8OverCapOffset | (private) |
| 198 | fn | findCallSequences | (private) |
| 310 | fn | createCandidateScanView | (private) |
| 321 | fn | findCandidateCallSequences | (private) |
| 329 | fn | createRangeRemover | (private) |
| 358 | fn | projectRangesOntoMessage | (private) |
| 395 | fn | projectScrubbedPlainTextToolCallMessage | pub |
| 425 | fn | findPotentialCallStart | (private) |
| 450 | fn | nextAtLineStart | (private) |
| 457 | fn | eventTemplate | (private) |
| 465 | fn | createSyntheticTextDelta | (private) |
| 479 | fn | cappedUtf8ByteLength | (private) |
| 485 | fn | pendingEventBytes | (private) |
| 491 | fn | pendingQueueOverCap | (private) |
| 497 | fn | createPendingState | (private) |
| 527 | fn | queuePendingEvent | (private) |
| 555 | fn | appendPendingText | (private) |
| 582 | fn | replayFalsePositiveCandidate | (private) |
| 586 | fn | projectPendingAuxEvents | (private) |
| 626 | fn | projectEventIndex | (private) |
| 637 | fn | projectedTextForEvent | (private) |
| 653 | type | PendingClassification | (private) |
| 665 | fn | createOverCapSuppressor | (private) |
| 756 | fn | classifyPending | (private) |
| 826 | fn | consumeXmlSuppressor | (private) |
| 884 | fn | consumeJsonSuppressor | (private) |
| 967 | fn | consumeOpeningSuppressor | (private) |
| 1000 | fn | consumeOverCapSuppressor | (private) |
| 1011 | fn | orderByContentIndex | (private) |
| 1016 | fn | order | (private) |
| 1043 | fn | scrubSnapshot | (private) |
| 1067 | fn | eventKey | (private) |
| 1082 | fn | forceProjectPendingAux | (private) |
