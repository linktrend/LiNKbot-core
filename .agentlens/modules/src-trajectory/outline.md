# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 2 large files in this module.

## src/trajectory/export.test.ts (1738 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 25 | fn | makeTempDir | (private) |
| 46 | fn | userMessage | (private) |
| 54 | fn | assistantMessage | (private) |
| 67 | fn | toolResultMessage | (private) |
| 78 | fn | eventTypes | (private) |
| 82 | fn | writeSimpleSessionFile | (private) |
| 114 | fn | writeToolCallOnlySessionFile | (private) |
| 143 | fn | writeToolCallSessionFile | (private) |

## src/trajectory/export.ts (1219 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 44 | type | BuildTrajectoryBundleParams | (private) |
| 56 | type | RuntimeTrajectoryContext | (private) |
| 61 | type | JsonRecord | (private) |
| 62 | type | TrajectoryExportRedaction | (private) |
| 66 | type | JsonlParseWarning | (private) |
| 70 | type | SessionEntryCandidateRow | (private) |
| 80 | fn | isFiniteNumber | (private) |
| 84 | fn | isSessionFileEntry | (private) |
| 95 | fn | formatSessionParseWarnings | (private) |
| 109 | fn | collectSessionEntries | (private) |
| 135 | fn | migrateLegacySessionEntries | (private) |
| 180 | fn | readSessionEntries | (private) |
| 212 | fn | readSessionBranch | (private) |
| 291 | fn | parseJsonlFile | (private) |
| 357 | fn | readRuntimeTrajectoryEvents | (private) |
| 398 | fn | isRuntimeTrajectoryEvent | (private) |
| 415 | fn | summarizeJsonlWarnings | (private) |
| 438 | fn | normalizeTimestamp | (private) |
| 454 | fn | resolveMessageEventType | (private) |
| 467 | fn | extractAssistantToolCalls | (private) |
| 501 | fn | sanitizeTrajectoryExportValue | (private) |
| 505 | fn | buildTranscriptEvents | (private) |
| 515 | fn | push | (private) |
| 608 | fn | sortTrajectoryEvents | (private) |
| 631 | fn | trajectoryJsonlFile | (private) |
| 641 | fn | redactTrajectoryBundleFileContent | (private) |
| 650 | fn | buildTrajectoryExportRedaction | (private) |
| 661 | fn | redactWorkspacePathString | (private) |
| 678 | fn | maybeRedactPathString | (private) |
| 694 | fn | redactLocalPathValues | (private) |
| 712 | fn | uniqueRedactedObjectKey | (private) |
| 726 | fn | redactTrajectoryExportObjectKeys | (private) |
| 750 | fn | redactTrajectoryExportValue | (private) |
| 758 | fn | redactEventForExport | (private) |
| 765 | fn | resolveRuntimeContext | (private) |
| 781 | fn | resolveLatestRuntimeEventData | (private) |
| 792 | fn | normalizePathForMatch | (private) |
| 796 | fn | collectPotentialPathStrings | (private) |
| 798 | fn | visit | (private) |
| 825 | fn | markInvokedSkills | (private) |
| 878 | fn | buildMetadataCapture | (private) |
| 887 | fn | modelFallback | (private) |
| 922 | fn | buildArtifactsCapture | (private) |
| 972 | fn | buildPromptsCapture | (private) |
| 1023 | fn | resolveDefaultTrajectoryExportDir | pub |
| 1040 | fn | exportTrajectoryBundle | pub |
