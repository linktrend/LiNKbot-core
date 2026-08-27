# src/agents/agent-hooks/compaction-safeguard.ts

[← Back to Module](../modules/src-agents-agent-hooks/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1539
- **Language:** TypeScript
- **Symbols:** 42
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 90 | fn | buildPreviousSummaryMessage | (private) | `function buildPreviousSummaryMessage(previousSu...` |
| 103 | fn | prependPreviousSummaryForRedistill | (private) | `function prependPreviousSummaryForRedistill(par...` |
| 114 | type | SessionBranchEntry | (private) | - |
| 126 | fn | coerceTimestamp | (private) | `function coerceTimestamp(value: unknown): number {` |
| 139 | fn | sessionBranchEntryToMessage | (private) | `function sessionBranchEntryToMessage(entry: Ses...` |
| 164 | fn | collectSessionBranchMessages | (private) | `function collectSessionBranchMessages(sessionMa...` |
| 187 | fn | isReplayUnsafeInterSessionInput | (private) | `function isReplayUnsafeInterSessionInput(messag...` |
| 195 | fn | isSessionsSendToolName | (private) | `function isSessionsSendToolName(value: unknown)...` |
| 207 | fn | sanitizeSourceSessionSends | (private) | `function sanitizeSourceSessionSends(messages: A...` |
| 295 | fn | filterReplayUnsafeSessionBranchMessages | (private) | `function filterReplayUnsafeSessionBranchMessage...` |
| 335 | fn | containsRealConversation | (private) | `function containsRealConversation(messages: Age...` |
| 346 | fn | tryProviderSummarize | (private) | `async function tryProviderSummarize(` |
| 387 | fn | summarizeViaLLM | (private) | `async function summarizeViaLLM(params: {` |
| 431 | fn | assembleSuffix | (private) | `function assembleSuffix(parts: {` |
| 452 | type | ToolFailure | (private) | - |
| 459 | type | ModelRegistryWithRequestAuthLookup | (private) | - |
| 465 | type | ResolvedRequestAuth | (private) | - |
| 480 | fn | resolveModelAuth | (private) | `async function resolveModelAuth(` |
| 519 | fn | buildCompactionSummaryHeaders | (private) | `function buildCompactionSummaryHeaders(params: {` |
| 539 | fn | clampNonNegativeInt | (private) | `function clampNonNegativeInt(value: unknown, fa...` |
| 544 | fn | resolveRecentTurnsPreserve | (private) | `function resolveRecentTurnsPreserve(value: unkn...` |
| 551 | fn | resolveQualityGuardMaxRetries | (private) | `function resolveQualityGuardMaxRetries(value: u...` |
| 558 | fn | normalizeFailureText | (private) | `function normalizeFailureText(text: string): st...` |
| 562 | fn | truncateFailureText | (private) | `function truncateFailureText(text: string, maxC...` |
| 569 | fn | formatToolFailureMeta | (private) | `function formatToolFailureMeta(details: unknown...` |
| 589 | fn | extractToolResultText | (private) | `function extractToolResultText(content: unknown...` |
| 593 | fn | collectToolFailures | (private) | `function collectToolFailures(messages: AgentMes...` |
| 649 | fn | formatToolFailuresSection | (private) | `function formatToolFailuresSection(failures: To...` |
| 663 | fn | computeFileLists | (private) | `function computeFileLists(fileOps: FileOperatio...` |
| 673 | fn | formatFileOperations | (private) | `function formatFileOperations(readFiles: string...` |
| 674 | fn | formatBoundedFileList | (private) | `function formatBoundedFileList(tag: string, fil...` |
| 722 | fn | capCompactionSummary | (private) | `function capCompactionSummary(summary: string, ...` |
| 735 | fn | capCompactionSummaryPreservingSuffix | (private) | `function capCompactionSummaryPreservingSuffix(` |
| 755 | fn | resolveSummaryReserveTokens | (private) | `function resolveSummaryReserveTokens(` |
| 771 | fn | extractMessageText | (private) | `function extractMessageText(message: AgentMessa...` |
| 792 | fn | formatNonTextPlaceholder | (private) | `function formatNonTextPlaceholder(content: unkn...` |
| 823 | fn | splitPreservedRecentTurns | (private) | `function splitPreservedRecentTurns(params: {` |
| 924 | fn | formatContextMessages | (private) | `function formatContextMessages(messages: AgentM...` |
| 957 | fn | formatPreservedTurnsSection | (private) | `function formatPreservedTurnsSection(messages: ...` |
| 968 | fn | formatSplitTurnContextSection | (private) | `function formatSplitTurnContextSection(messages...` |
| 979 | fn | extractLatestUserAsk | (private) | `function extractLatestUserAsk(messages: AgentMe...` |
| 999 | fn | readWorkspaceContextForSummary | (private) | `async function readWorkspaceContextForSummary(` |
