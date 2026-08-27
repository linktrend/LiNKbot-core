# scripts/docs-i18n/markdown_segments.go

[← Back to Module](../modules/scripts-docs-i18n/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1074
- **Language:** Go
- **Symbols:** 55
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 14 | fn | extractSegments | (private) | `func extractSegments(body, relPath string) ([]S...` |
| 98 | fn | extractMarkdownHeadingLevels | (private) | `func extractMarkdownHeadingLevels(body string) ...` |
| 115 | struct | markdownListShape | (private) | - |
| 123 | fn | extractMarkdownListShapes | (private) | `func extractMarkdownListShapes(body string) []m...` |
| 159 | fn | markdownListParentItemPath | (private) | `func markdownListParentItemPath(list *ast.List)...` |
| 184 | fn | extractMarkdownInlineCodeValues | (private) | `func extractMarkdownInlineCodeValues(body strin...` |
| 206 | fn | extractMarkdownFencedLiteralValues | (private) | `func extractMarkdownFencedLiteralValues(body st...` |
| 268 | fn | markdownLiteralFencesBalanced | (private) | `func markdownLiteralFencesBalanced(body string)...` |
| 291 | struct | markdownLiteralFenceState | (private) | - |
| 298 | fn | parseMarkdownLiteralFenceOpening | (private) | `func parseMarkdownLiteralFenceOpening(line stri...` |
| 337 | fn | continuesMarkdownLiteralFenceContainer | (private) | `func continuesMarkdownLiteralFenceContainer(lin...` |
| 354 | fn | isMarkdownLiteralFenceClosing | (private) | `func isMarkdownLiteralFenceClosing(line string,...` |
| 369 | fn | stripMarkdownQuotePrefixPreserveIndent | (private) | `func stripMarkdownQuotePrefixPreserveIndent(lin...` |
| 384 | fn | stripMarkdownQuotePrefix | (private) | `func stripMarkdownQuotePrefix(line string, quot...` |
| 395 | fn | extractAngleBracketValues | (private) | `func extractAngleBracketValues(line string) []s...` |
| 419 | fn | isAngleBracketComparisonContext | (private) | `func isAngleBracketComparisonContext(line strin...` |
| 427 | fn | isAngleBracketPlaceholder | (private) | `func isAngleBracketPlaceholder(value string) bo...` |
| 438 | fn | isFencedMarkupTag | (private) | `func isFencedMarkupTag(value string) bool {` |
| 461 | fn | isASCIIComponentTagName | (private) | `func isASCIIComponentTagName(value string) bool {` |
| 474 | fn | extractSquareBracketValues | (private) | `func extractSquareBracketValues(line string) []...` |
| 501 | fn | isTranslatableBracketLabelContext | (private) | `func isTranslatableBracketLabelContext(line str...` |
| 514 | fn | isASCIIIdentifierByte | (private) | `func isASCIIIdentifierByte(value byte) bool {` |
| 518 | fn | extractDoubleBracketValues | (private) | `func extractDoubleBracketValues(line string) []...` |
| 537 | fn | isFencedProtocolToken | (private) | `func isFencedProtocolToken(token string, closin...` |
| 565 | fn | hasCompactEquals | (private) | `func hasCompactEquals(value string) bool {` |
| 574 | fn | isFencedEnvelopeToken | (private) | `func isFencedEnvelopeToken(token string) bool {` |
| 592 | fn | fencedSingleMarkerName | (private) | `func fencedSingleMarkerName(line string) (strin...` |
| 599 | fn | fencedClosingMarkerName | (private) | `func fencedClosingMarkerName(line string) (stri...` |
| 606 | fn | fencedOpeningMarkerName | (private) | `func fencedOpeningMarkerName(line string) (stri...` |
| 617 | fn | fencedMarkerName | (private) | `func fencedMarkerName(value string) (string, bo...` |
| 630 | fn | extractFallbackBacktickValues | (private) | `func extractFallbackBacktickValues(body string)...` |
| 649 | fn | markdownCodeSpanContentRange | (private) | `func markdownCodeSpanContentRange(span *ast.Cod...` |
| 670 | fn | markdownFencedCodeRanges | (private) | `func markdownFencedCodeRanges(body string) [][2...` |
| 691 | fn | rangeOverlapsAny | (private) | `func rangeOverlapsAny(candidate [2]int, ranges ...` |
| 700 | fn | normalizeDocComponentsForMarkdownParse | (private) | `func normalizeDocComponentsForMarkdownParse(bod...` |
| 727 | fn | isLikelyFencedBacktickRange | (private) | `func isLikelyFencedBacktickRange(body string, s...` |
| 748 | fn | isMarkdownContainerPrefix | (private) | `func isMarkdownContainerPrefix(prefix string) b...` |
| 764 | fn | isMarkdownListMarker | (private) | `func isMarkdownListMarker(marker string) bool {` |
| 783 | fn | stripDocComponentTagsOutsideInlineCode | (private) | `func stripDocComponentTagsOutsideInlineCode(lin...` |
| 818 | struct | docComponentTagSpan | (private) | - |
| 825 | fn | findDocComponentTagSpans | (private) | `func findDocComponentTagSpans(line string) []do...` |
| 885 | fn | isASCIIAlphaNumeric | (private) | `func isASCIIAlphaNumeric(char byte) bool {` |
| 889 | fn | markdownCodeSpanRanges | (private) | `func markdownCodeSpanRanges(body string) [][2]i...` |
| 909 | fn | markdownBlockBacktickRanges | (private) | `func markdownBlockBacktickRanges(body string) [...` |
| 935 | fn | backtickRangesWithinBlock | (private) | `func backtickRangesWithinBlock(body string, sta...` |
| 954 | fn | findBacktickRun | (private) | `func findBacktickRun(body string, start, end, r...` |
| 969 | fn | backtickRunLength | (private) | `func backtickRunLength(body string, start, end ...` |
| 977 | fn | isEscapedBacktick | (private) | `func isEscapedBacktick(body string, index, bloc...` |
| 985 | fn | removeMarkdownComponentIndent | (private) | `func removeMarkdownComponentIndent(line string,...` |
| 1006 | fn | rangeIsProtected | (private) | `func rangeIsProtected(start, end int, protected...` |
| 1015 | fn | protectedWithinRange | (private) | `func protectedWithinRange(start, end int, prote...` |
| 1025 | fn | stripDocComponentTagsForHeadingParse | (private) | `func stripDocComponentTagsForHeadingParse(body ...` |
| 1040 | fn | blockParent | (private) | `func blockParent(n ast.Node) ast.Node {` |
| 1049 | fn | isTranslatableBlock | (private) | `func isTranslatableBlock(n ast.Node) bool {` |
| 1058 | fn | applyTranslations | (private) | `func applyTranslations(body string, segments []...` |
