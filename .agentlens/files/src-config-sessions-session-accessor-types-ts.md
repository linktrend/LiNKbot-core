# src/config/sessions/session-accessor.types.ts

[← Back to Module](../modules/src-config-sessions/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 873
- **Language:** TypeScript
- **Symbols:** 82
- **Public symbols:** 82

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 37 | type | SessionAccessScope | pub | - |
| 57 | type | LogicalSessionAccessScope | pub | - |
| 66 | type | SessionEntryListScope | pub | - |
| 67 | type | SessionEntryStatus | pub | - |
| 69 | type | ResolvedSessionEntryAccessTarget | pub | - |
| 82 | type | ResolvedSessionEntryStoreTarget | pub | - |
| 86 | type | SessionEntryCandidateAccessScope | pub | - |
| 102 | type | ResolvedSessionEntryCandidateTarget | pub | - |
| 115 | type | ResolvedSessionEntryUpdateContext | pub | - |
| 133 | type | SessionTranscriptAccessScope | pub | - |
| 144 | type | SessionTranscriptRuntimeScope | pub | - |
| 151 | type | SessionTranscriptReadScope | pub | - |
| 158 | type | SessionTranscriptReadTarget | pub | - |
| 166 | type | SessionTranscriptWriteScope | pub | - |
| 171 | type | SessionEntrySummary | pub | - |
| 178 | type | SessionEntryReadView | pub | - |
| 186 | type | ExactSessionEntry | pub | - |
| 192 | type | TranscriptEvent | pub | - |
| 194 | type | SessionTranscriptStats | pub | - |
| 202 | type | SessionTranscriptEventRow | pub | - |
| 208 | type | SessionTranscriptRawDeltaLimits | pub | - |
| 218 | type | SessionTranscriptRawDeltaResult | pub | - |
| 242 | type | SessionTranscriptVisibleMessageDeltaLimits | pub | - |
| 252 | type | SessionTranscriptVisibleMessageEventRow | pub | - |
| 260 | type | SessionTranscriptVisibleMessageDeltaResult | pub | - |
| 319 | type | TranscriptUpdatePayload | pub | - |
| 321 | type | LatestTranscriptAssistantText | pub | - |
| 327 | type | SessionTranscriptWriteLockAccessorContext | pub | - |
| 335 | type | SessionTranscriptWriteTransactionContext | pub | - |
| 340 | type | SessionTranscriptTurnUpdateMode | pub | - |
| 342 | type | SessionTranscriptTurnMessageAppend | pub | - |
| 351 | type | SessionTranscriptTurnWriteContext | pub | - |
| 359 | type | SessionTranscriptTurnPersistOptions | pub | - |
| 391 | type | SessionTranscriptTurnPersistResult | pub | - |
| 399 | type | SessionTranscriptRuntimeTarget | pub | - |
| 406 | type | SessionTranscriptManualTrimResult | pub | - |
| 421 | type | SessionTranscriptManualTrimPreflightResult | pub | - |
| 427 | type | SessionEntryUpdateOptions | pub | - |
| 436 | type | SessionAbortTargetCutoff | pub | - |
| 441 | type | SessionAbortTargetContext | pub | - |
| 446 | type | SessionAbortTargetIdentity | pub | - |
| 450 | type | SessionAbortTargetResult | pub | - |
| 455 | type | SessionLifecycleTranscriptInfo | pub | - |
| 460 | type | ReplySessionInitializationSnapshot | pub | - |
| 466 | type | ReplySessionInitializationCommitContext | pub | - |
| 472 | type | ReplySessionInitializationCommitResult | pub | - |
| 486 | type | SessionEntryPatchOptions | pub | - |
| 503 | type | SessionEntryPatchContext | pub | - |
| 508 | type | SessionEntryPatchResult | pub | - |
| 515 | type | SessionEntryTargetPatchScope | pub | - |
| 523 | type | SessionEntryReplacementSnapshot | pub | - |
| 530 | type | SessionEntryReplacement | pub | - |
| 545 | type | SessionCompactionCheckpointForkedTranscript | pub | - |
| 552 | type | SessionCompactionCheckpointTranscriptForkResult | pub | - |
| 558 | type | SessionParentForkDecision | pub | - |
| 573 | type | ParentForkedSessionTranscript | pub | - |
| 578 | type | ForkSessionFromParentTranscriptResult | pub | - |
| 586 | type | ForkSessionFromParentTranscriptParams | pub | - |
| 598 | type | ForkSessionEntryFromParentTargetResult | pub | - |
| 617 | type | ForkSessionEntryFromParentTargetParams | pub | - |
| 639 | type | SessionCompactionCheckpointMutationResult | pub | - |
| 652 | type | SessionMessageCutMutationResult | pub | - |
| 666 | type | SessionMessageCutMutationParams | pub | - |
| 676 | type | SessionBranchSummary | pub | - |
| 684 | type | SessionBranchListResult | pub | - |
| 690 | type | SessionBranchListParams | pub | - |
| 695 | type | SessionBranchSwitchMutationResult | pub | - |
| 708 | type | SessionBranchSwitchMutationParams | pub | - |
| 715 | type | SessionCompactionCheckpointEntryBuildContext | pub | - |
| 724 | type | SessionCompactionCheckpointTranscriptForker | pub | - |
| 728 | type | SessionCompactionCheckpointEntryBuilder | pub | - |
| 732 | type | BranchSessionFromCompactionCheckpointParams | pub | - |
| 749 | type | RestoreSessionFromCompactionCheckpointParams | pub | - |
| 773 | type | SessionEntryCreateWithTranscriptContext | pub | - |
| 789 | type | SessionEntryCreateWithTranscriptOptions | pub | - |
| 796 | type | SessionPatchProjectionSnapshot | pub | - |
| 800 | type | SessionPatchProjectionTarget | pub | - |
| 805 | type | SessionPatchProjectionContext | pub | - |
| 810 | type | SessionPatchProjectionFailure | pub | - |
| 833 | type | ResetSessionEntryLifecycleParams | pub | - |
| 849 | type | DeleteSessionEntryLifecycleParams | pub | - |
| 870 | type | CanonicalizeSessionEntryAliasesResult | pub | - |

## Public API

## Memory Markers

### 🔴 `DEPRECATED` (line 134)

> transcript locator from older file-backed call sites. */

### 🔴 `DEPRECATED` (line 145)

> transcript locator from older file-backed call sites. */
