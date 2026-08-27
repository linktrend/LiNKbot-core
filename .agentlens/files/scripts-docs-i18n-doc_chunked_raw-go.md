# scripts/docs-i18n/doc_chunked_raw.go

[← Back to Module](../modules/scripts-docs-i18n/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1167
- **Language:** Go
- **Symbols:** 61
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 20 | const | defaultDocChunkMaxBytes | (private) | - |
| 21 | const | defaultDocChunkPromptBudget | (private) | - |
| 34 | struct | docChunkStructure | (private) | - |
| 49 | struct | docChunkSplitPlan | (private) | - |
| 54 | fn | translateDocBodyChunked | (private) | `func translateDocBodyChunked(ctx context.Contex...` |
| 87 | fn | validateDocBodyFencedLiterals | (private) | `func validateDocBodyFencedLiterals(source, tran...` |
| 129 | fn | translateDocBlockGroup | (private) | `func translateDocBlockGroup(ctx context.Context...` |
| 176 | fn | translateDocLeafBlock | (private) | `func translateDocLeafBlock(ctx context.Context,...` |
| 204 | fn | splitDocBodyIntoBlocks | (private) | `func splitDocBodyIntoBlocks(body string) []stri...` |
| 230 | fn | groupDocBlocks | (private) | `func groupDocBlocks(blocks []string, maxBytes i...` |
| 264 | fn | validateDocChunkTranslation | (private) | `func validateDocChunkTranslation(source, transl...` |
| 334 | fn | sameI18NProtocolMarkers | (private) | `func sameI18NProtocolMarkers(source, translated...` |
| 346 | fn | sameStringMultiset | (private) | `func sameStringMultiset(left, right []string) b...` |
| 357 | fn | sanitizeDocChunkProtocolWrappers | (private) | `func sanitizeDocChunkProtocolWrappers(source, t...` |
| 381 | fn | preserveDocChunkBoundaryWhitespace | (private) | `func preserveDocChunkBoundaryWhitespace(source,...` |
| 403 | fn | isDocChunkBoundaryWhitespace | (private) | `func isDocChunkBoundaryWhitespace(value byte) b...` |
| 407 | fn | stripBodyOnlyWrapper | (private) | `func stripBodyOnlyWrapper(source, text string) ...` |
| 429 | fn | hasAmbiguousTaggedBodyClose | (private) | `func hasAmbiguousTaggedBodyClose(source, transl...` |
| 441 | fn | maskDocComponentTags | (private) | `func maskDocComponentTags(text string) (string,...` |
| 451 | fn | restoreDocComponentTags | (private) | `func restoreDocComponentTags(text string, place...` |
| 463 | fn | logDocChunkSplit | (private) | `func logDocChunkSplit(chunkID string, blockCoun...` |
| 469 | fn | logDocChunkPlanSplit | (private) | `func logDocChunkPlanSplit(chunkID string, plan ...` |
| 476 | fn | summarizeDocChunkStructure | (private) | `func summarizeDocChunkStructure(text string) do...` |
| 519 | fn | extractMarkdownLinkDestinations | (private) | `func extractMarkdownLinkDestinations(text strin...` |
| 544 | fn | extractProtectedMarkdownLinkLabels | (private) | `func extractProtectedMarkdownLinkLabels(text st...` |
| 573 | fn | isProtectedProductLinkLabel | (private) | `func isProtectedProductLinkLabel(label, destina...` |
| 581 | struct | contextualProductDestinationRule | (private) | - |
| 604 | fn | destinationMentionsProductName | (private) | `func destinationMentionsProductName(destination...` |
| 628 | fn | pathContainsRoute | (private) | `func pathContainsRoute(path, route string) bool {` |
| 639 | fn | nonemptyPathParts | (private) | `func nonemptyPathParts(value string) []string {` |
| 644 | fn | parseDocsMarkdown | (private) | `func parseDocsMarkdown(source []byte) ast.Node {` |
| 648 | fn | countsWithoutFence | (private) | `func countsWithoutFence(counts map[string]int) ...` |
| 659 | fn | sortedKeys | (private) | `func sortedKeys(counts map[string]int) []string {` |
| 668 | fn | updateFenceDelimiter | (private) | `func updateFenceDelimiter(current, line string)...` |
| 682 | fn | leadingFenceDelimiter | (private) | `func leadingFenceDelimiter(line string) string {` |
| 703 | fn | isClosingFenceLine | (private) | `func isClosingFenceLine(line, delimiter string)...` |
| 711 | fn | hasUnexpectedTopLevelProtocolWrapper | (private) | `func hasUnexpectedTopLevelProtocolWrapper(sourc...` |
| 731 | fn | containsProtocolWrapperToken | (private) | `func containsProtocolWrapperToken(text string) ...` |
| 736 | fn | translatePlannedDocChunkGroups | (private) | `func translatePlannedDocChunkGroups(ctx context...` |
| 757 | fn | mergeSplitPureFencedDocTranslations | (private) | `func mergeSplitPureFencedDocTranslations(source...` |
| 779 | fn | splitPureFencedDocSection | (private) | `func splitPureFencedDocSection(text string) (pr...` |
| 804 | fn | planDocChunkSplit | (private) | `func planDocChunkSplit(blocks []string, maxByte...` |
| 823 | fn | splitDocChunkBlocksMidpoint | (private) | `func splitDocChunkBlocksMidpoint(blocks []strin...` |
| 837 | fn | splitDocChunkBlocksMidpointSimple | (private) | `func splitDocChunkBlocksMidpointSimple(blocks [...` |
| 851 | fn | planSingletonDocChunk | (private) | `func planSingletonDocChunk(block string, maxByt...` |
| 863 | fn | planSingletonDocChunkRetry | (private) | `func planSingletonDocChunkRetry(block string, m...` |
| 867 | fn | planSingletonDocChunkWithMode | (private) | `func planSingletonDocChunkWithMode(block string...` |
| 906 | fn | wrapDocChunkSections | (private) | `func wrapDocChunkSections(sections []string) []...` |
| 917 | fn | splitDocBlockSections | (private) | `func splitDocBlockSections(block string) []stri...` |
| 961 | fn | splitPureFencedDocSectionWithMode | (private) | `func splitPureFencedDocSectionWithMode(block st...` |
| 977 | fn | splitPlainDocSectionWithMode | (private) | `func splitPlainDocSectionWithMode(text string, ...` |
| 1019 | fn | splitPlainDocSectionMidpoint | (private) | `func splitPlainDocSectionMidpoint(lines []strin...` |
| 1035 | fn | firstNonEmptyLineIndex | (private) | `func firstNonEmptyLineIndex(lines []string) int {` |
| 1044 | fn | lastNonEmptyLineIndex | (private) | `func lastNonEmptyLineIndex(lines []string) int {` |
| 1053 | fn | docsI18nDocChunkMaxBytes | (private) | `func docsI18nDocChunkMaxBytes() int {` |
| 1065 | fn | docsI18nDocChunkPromptBudget | (private) | `func docsI18nDocChunkPromptBudget() int {` |
| 1077 | fn | estimateDocPromptCost | (private) | `func estimateDocPromptCost(text string) int {` |
| 1091 | fn | stripCommonIndent | (private) | `func stripCommonIndent(text string) (string, st...` |
| 1128 | fn | reapplyCommonIndent | (private) | `func reapplyCommonIndent(text, indent string) s...` |
| 1146 | fn | leadingIndent | (private) | `func leadingIndent(line string) string {` |
| 1157 | fn | commonIndentPrefix | (private) | `func commonIndentPrefix(a, b string) string {` |
