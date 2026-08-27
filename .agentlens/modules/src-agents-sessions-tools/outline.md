# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 6 large files in this module.

## src/agents/sessions/tools/bash.ts (506 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 36 | fn | resolveBashTimeoutMs | (private) |
| 62 | fn | createLocalBashOperations | pub |
| 100 | fn | onAbort | (private) |
| 151 | interface | BashSpawnContext | pub |
| 157 | type | BashSpawnHook | pub |
| 159 | fn | resolveSpawnContext | (private) |
| 169 | interface | BashToolOptions | pub |
| 183 | type | BashRenderState | (private) |
| 189 | type | BashResultRenderState | (private) |
| 195 | class | BashResultRenderComponent | (private) |
| 203 | fn | formatBashCall | (private) |
| 212 | fn | rebuildBashResultRenderComponent | (private) |
| 302 | fn | createBashToolDefinition | pub |
| 333 | fn | emitOutputUpdate | (private) |
| 349 | fn | clearUpdateTimer | (private) |
| 356 | fn | scheduleOutputUpdate | (private) |
| 377 | fn | handleData | (private) |
| 385 | fn | finishOutput | (private) |
| 422 | fn | appendStatus | (private) |
| 501 | fn | createBashTool | pub |

## src/agents/sessions/tools/edit-diff.ts (719 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 12 | fn | detectLineEnding | pub |
| 24 | fn | normalizeToLF | pub |
| 28 | fn | restoreLineEndings | pub |
| 39 | fn | normalizeForFuzzyMatch | (private) |
| 62 | interface | FuzzyMatchResult | (private) |
| 78 | interface | Edit | pub |
| 83 | class | EditNoChangeError | pub |
| 90 | interface | MatchedEdit | (private) |
| 97 | type | TextReplacement | (private) |
| 99 | interface | LineSpan | (private) |
| 104 | fn | splitLinesWithEndings | (private) |
| 108 | fn | getLineSpans | (private) |
| 117 | fn | getReplacementLineRange | (private) |
| 141 | fn | applyReplacements | (private) |
| 157 | fn | applyReplacementsPreservingUnchangedLines | (private) |
| 214 | fn | fuzzyFindText | (private) |
| 255 | fn | stripBom | pub |
| 261 | fn | countOccurrences | (private) |
| 273 | interface | EditCandidate | (private) |
| 279 | fn | truncateCandidateText | (private) |
| 292 | fn | getBoundedLines | (private) |
| 298 | fn | scoreCandidate | (private) |
| 317 | fn | describeIndentation | (private) |
| 327 | fn | firstDifferenceIndex | (private) |
| 337 | fn | describeCandidateDifference | (private) |
| 356 | fn | getCandidateHint | (private) |
| 406 | fn | getNotFoundError | (private) |
| 421 | fn | getDuplicateError | (private) |
| 437 | fn | getEmptyOldTextError | (private) |
| 444 | fn | getNoChangeError | (private) |
| 462 | fn | applyEditsToNormalizedContent | pub |
| 537 | fn | generateUnifiedPatch | pub |
| 553 | fn | generateDiffString | pub |
| 599 | interface | EditDiffResult | pub |
| 604 | interface | EditDiffError | pub |
| 608 | fn | validateNoOpEditTargets | pub |
| 636 | fn | splitNoOpEdits | pub |
| 663 | fn | computeEditsDiff | pub |

## src/agents/sessions/tools/edit.test.ts (636 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 30 | fn | createTempFile | (private) |

## src/agents/sessions/tools/edit.ts (621 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 41 | type | EditPreview | (private) |
| 43 | type | EditRenderState | (private) |
| 84 | type | LegacyEditToolInput | (private) |
| 97 | interface | EditOperations | pub |
| 112 | interface | EditToolOptions | pub |
| 117 | fn | prepareEditArguments | (private) |
| 155 | fn | validateEditInput | (private) |
| 165 | fn | removeExactOccurrences | (private) |
| 169 | fn | didEditLikelyApply | (private) |
| 197 | fn | appendMismatchHint | (private) |
| 209 | type | RenderableEditArgs | (private) |
| 217 | type | EditToolResultLike | (private) |
| 227 | type | EditCallRenderComponent | (private) |
| 234 | fn | createEditCallRenderComponent | (private) |
| 243 | fn | getEditCallRenderComponent | (private) |
| 260 | fn | getRenderablePreviewInput | (private) |
| 294 | fn | formatEditCall | (private) |
| 306 | fn | formatEditResult | (private) |
| 333 | fn | getEditHeaderBg | (private) |
| 350 | fn | buildEditCallComponent | (private) |
| 372 | fn | setEditPreview | (private) |
| 392 | fn | createEditToolDefinition | pub |
| 616 | fn | createEditTool | pub |

## src/agents/sessions/tools/read.ts (522 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 99 | fn | withoutTruncationContent | (private) |
| 104 | fn | createReadDetails | (private) |
| 122 | interface | CompactReadClassification | (private) |
| 133 | interface | ReadOperations | pub |
| 154 | interface | ReadToolOptions | pub |
| 161 | type | ReadRenderArgs | (private) |
| 163 | fn | formatReadLineRange | (private) |
| 174 | fn | formatReadCall | (private) |
| 183 | fn | trimTrailingEmptyLines | (private) |
| 191 | fn | getNonVisionImageNote | (private) |
| 198 | fn | quotePosixShellArg | (private) |
| 202 | fn | getOpenClawDocsClassification | (private) |
| 223 | fn | getCompactReadClassification | (private) |
| 250 | fn | resolveLocalReadPath | (private) |
| 258 | fn | resolveReadToolPath | (private) |
| 266 | fn | formatCompactReadCall | (private) |
| 290 | fn | formatReadResult | (private) |
| 329 | fn | createReadToolDefinition | pub |
| 364 | fn | onAbort | (private) |
| 517 | fn | createReadTool | pub |

## src/agents/sessions/tools/write.ts (643 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 72 | interface | WriteOperations | pub |
| 109 | interface | WriteToolOptions | pub |
| 114 | type | WriteToolFileStat | (private) |
| 120 | type | WriteToolPrecheck | (private) |
| 133 | fn | withinWriteDiffBudget | (private) |
| 141 | fn | countNewlines | (private) |
| 149 | type | WriteHighlightCache | (private) |
| 157 | class | WriteCallRenderComponent | (private) |
| 167 | fn | highlightSingleLine | (private) |
| 172 | fn | refreshWriteHighlightPrefix | (private) |
| 185 | fn | rebuildWriteHighlightCacheFull | (private) |
| 204 | fn | updateWriteHighlightCacheIncremental | (private) |
| 255 | fn | trimTrailingEmptyLines | (private) |
| 263 | fn | formatWriteCall | (private) |
| 297 | fn | formatWriteResult | (private) |
| 322 | fn | isMissingFileError | (private) |
| 332 | fn | readOriginalWriteState | (private) |
| 380 | fn | resolveWriteDetails | (private) |
| 466 | fn | didWriteMetadataChange | (private) |
| 481 | fn | isWriteRecoveryCandidate | (private) |
| 497 | fn | successfulWriteResult | (private) |
| 504 | fn | recoverSuccessfulWrite | (private) |
| 529 | fn | createWriteToolDefinition | pub |
| 638 | fn | createWriteTool | pub |
