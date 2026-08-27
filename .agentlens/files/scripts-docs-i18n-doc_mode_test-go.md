# scripts/docs-i18n/doc_mode_test.go

[← Back to Module](../modules/scripts-docs-i18n/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 2737
- **Language:** Go
- **Symbols:** 181
- **Public symbols:** 165

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 15 | struct | docChunkTranslator | (private) | - |
| 17 | fn | Translate | pub | `func (docChunkTranslator) Translate(_ context.C...` |
| 21 | fn | TranslateRaw | pub | `func (docChunkTranslator) TranslateRaw(_ contex...` |
| 35 | fn | Close | pub | `func (docChunkTranslator) Close() {}` |
| 37 | struct | docLeafFallbackTranslator | (private) | - |
| 39 | fn | Translate | pub | `func (docLeafFallbackTranslator) Translate(_ co...` |
| 47 | fn | TranslateRaw | pub | `func (docLeafFallbackTranslator) TranslateRaw(_...` |
| 54 | fn | Close | pub | `func (docLeafFallbackTranslator) Close() {}` |
| 56 | struct | docFrontmatterTranslator | (private) | - |
| 58 | fn | Translate | pub | `func (docFrontmatterTranslator) Translate(_ con...` |
| 67 | fn | TranslateRaw | pub | `func (docFrontmatterTranslator) TranslateRaw(_ ...` |
| 71 | fn | Close | pub | `func (docFrontmatterTranslator) Close() {}` |
| 73 | struct | docFrontmatterFallbackTranslator | (private) | - |
| 75 | fn | Translate | pub | `func (docFrontmatterFallbackTranslator) Transla...` |
| 100 | fn | TranslateRaw | pub | `func (docFrontmatterFallbackTranslator) Transla...` |
| 104 | fn | Close | pub | `func (docFrontmatterFallbackTranslator) Close() {}` |
| 106 | struct | docProtocolLeakTranslator | (private) | - |
| 108 | fn | Translate | pub | `func (docProtocolLeakTranslator) Translate(_ co...` |
| 112 | fn | TranslateRaw | pub | `func (docProtocolLeakTranslator) TranslateRaw(_...` |
| 135 | fn | Close | pub | `func (docProtocolLeakTranslator) Close() {}` |
| 137 | struct | docWrappedLeafTranslator | (private) | - |
| 139 | fn | Translate | pub | `func (docWrappedLeafTranslator) Translate(_ con...` |
| 143 | fn | TranslateRaw | pub | `func (docWrappedLeafTranslator) TranslateRaw(_ ...` |
| 155 | fn | Close | pub | `func (docWrappedLeafTranslator) Close() {}` |
| 157 | struct | docComponentLeafFallbackTranslator | (private) | - |
| 159 | fn | Translate | pub | `func (docComponentLeafFallbackTranslator) Trans...` |
| 163 | fn | TranslateRaw | pub | `func (docComponentLeafFallbackTranslator) Trans...` |
| 170 | fn | Close | pub | `func (docComponentLeafFallbackTranslator) Close...` |
| 172 | struct | docPromptBudgetTranslator | (private) | - |
| 176 | fn | Translate | pub | `func (t *docPromptBudgetTranslator) Translate(_...` |
| 180 | fn | TranslateRaw | pub | `func (t *docPromptBudgetTranslator) TranslateRa...` |
| 189 | fn | Close | pub | `func (t *docPromptBudgetTranslator) Close() {}` |
| 191 | struct | uppercaseWrapperTranslator | (private) | - |
| 193 | fn | Translate | pub | `func (uppercaseWrapperTranslator) Translate(_ c...` |
| 197 | fn | TranslateRaw | pub | `func (uppercaseWrapperTranslator) TranslateRaw(...` |
| 201 | fn | Close | pub | `func (uppercaseWrapperTranslator) Close() {}` |
| 203 | struct | boundaryWrapperTranslator | (private) | - |
| 205 | fn | Translate | pub | `func (boundaryWrapperTranslator) Translate(_ co...` |
| 209 | fn | TranslateRaw | pub | `func (boundaryWrapperTranslator) TranslateRaw(_...` |
| 216 | fn | Close | pub | `func (boundaryWrapperTranslator) Close() {}` |
| 218 | struct | oversizedBlockTranslator | (private) | - |
| 222 | fn | Translate | pub | `func (t *oversizedBlockTranslator) Translate(_ ...` |
| 226 | fn | TranslateRaw | pub | `func (t *oversizedBlockTranslator) TranslateRaw...` |
| 231 | fn | Close | pub | `func (t *oversizedBlockTranslator) Close() {}` |
| 233 | struct | singletonFenceRetryTranslator | (private) | - |
| 237 | fn | Translate | pub | `func (t *singletonFenceRetryTranslator) Transla...` |
| 241 | fn | TranslateRaw | pub | `func (t *singletonFenceRetryTranslator) Transla...` |
| 249 | fn | Close | pub | `func (t *singletonFenceRetryTranslator) Close() {}` |
| 251 | struct | splitProtocolMarkerTranslator | (private) | - |
| 253 | fn | Translate | pub | `func (splitProtocolMarkerTranslator) Translate(...` |
| 257 | fn | TranslateRaw | pub | `func (splitProtocolMarkerTranslator) TranslateR...` |
| 261 | fn | Close | pub | `func (splitProtocolMarkerTranslator) Close() {}` |
| 263 | struct | fencedLiteralMaskingTranslator | (private) | - |
| 267 | fn | Translate | pub | `func (t *fencedLiteralMaskingTranslator) Transl...` |
| 271 | fn | TranslateRaw | pub | `func (t *fencedLiteralMaskingTranslator) Transl...` |
| 284 | fn | Close | pub | `func (t *fencedLiteralMaskingTranslator) Close(...` |
| 286 | struct | docSyntaxMaskingTranslator | (private) | - |
| 290 | fn | Translate | pub | `func (t *docSyntaxMaskingTranslator) Translate(...` |
| 294 | fn | TranslateRaw | pub | `func (t *docSyntaxMaskingTranslator) TranslateR...` |
| 301 | fn | Close | pub | `func (t *docSyntaxMaskingTranslator) Close() {}` |
| 303 | struct | duplicateFirstFencedPlaceholderTranslator | (private) | - |
| 307 | fn | Translate | pub | `func (t *duplicateFirstFencedPlaceholderTransla...` |
| 311 | fn | TranslateRaw | pub | `func (t *duplicateFirstFencedPlaceholderTransla...` |
| 322 | fn | Close | pub | `func (t *duplicateFirstFencedPlaceholderTransla...` |
| 324 | fn | TestParseTaggedDocumentRejectsMissingBodyCloseAtEOF | pub | `func TestParseTaggedDocumentRejectsMissingBodyC...` |
| 335 | fn | TestParseTaggedDocumentRejectsTrailingTextOutsideTags | pub | `func TestParseTaggedDocumentRejectsTrailingText...` |
| 346 | fn | TestFindTaggedBodyEndSearchesFromBodyStart | pub | `func TestFindTaggedBodyEndSearchesFromBodyStart...` |
| 373 | fn | TestSplitDocBodyIntoBlocksKeepsFenceTogether | pub | `func TestSplitDocBodyIntoBlocksKeepsFenceTogeth...` |
| 402 | fn | TestSplitDocBodyIntoBlocksKeepsNestedTripleBackticksInsideFourBacktickFence | pub | `func TestSplitDocBodyIntoBlocksKeepsNestedTripl...` |
| 428 | fn | TestSanitizeDocChunkProtocolWrappersStripsOuterWrapperAroundBodyExamples | pub | `func TestSanitizeDocChunkProtocolWrappersStrips...` |
| 465 | fn | TestTranslateDocBodyChunkedFallsBackToSmallerChunks | pub | `func TestTranslateDocBodyChunkedFallsBackToSmal...` |
| 488 | fn | TestStripAndReapplyCommonIndent | pub | `func TestStripAndReapplyCommonIndent(t *testing...` |
| 512 | fn | TestTranslateDocBodyChunkedFallsBackToMaskedTranslateForLeafValidationFailure | pub | `func TestTranslateDocBodyChunkedFallsBackToMask...` |
| 539 | fn | TestValidateDocChunkTranslationRejectsProtocolTokenLeakage | pub | `func TestValidateDocChunkTranslationRejectsProt...` |
| 554 | fn | TestValidateDocChunkTranslationRejectsInventedI18NPlaceholder | pub | `func TestValidateDocChunkTranslationRejectsInve...` |
| 569 | fn | TestValidateDocChunkTranslationRejectsAdditionalI18NPlaceholder | pub | `func TestValidateDocChunkTranslationRejectsAddi...` |
| 584 | fn | TestValidateDocChunkTranslationRejectsMalformedI18NPlaceholder | pub | `func TestValidateDocChunkTranslationRejectsMalf...` |
| 595 | fn | TestValidateDocBodyFencedLiteralsRejectsRestoredPlaceholderLeak | pub | `func TestValidateDocBodyFencedLiteralsRejectsRe...` |
| 607 | fn | TestFinalDocOutputRejectsI18NPlaceholderLeak | pub | `func TestFinalDocOutputRejectsI18NPlaceholderLe...` |
| 618 | fn | TestValidateDocChunkTranslationRejectsHeadingLoss | pub | `func TestValidateDocChunkTranslationRejectsHead...` |
| 633 | fn | TestValidateDocChunkTranslationAcceptsTranslatedHeadingText | pub | `func TestValidateDocChunkTranslationAcceptsTran...` |
| 644 | fn | TestValidateDocChunkTranslationRejectsAccidentalOrderedListFromTranslatedDate | pub | `func TestValidateDocChunkTranslationRejectsAcci...` |
| 659 | fn | TestValidateDocChunkTranslationAcceptsTranslatedDateWithoutListChange | pub | `func TestValidateDocChunkTranslationAcceptsTran...` |
| 670 | fn | TestValidateDocChunkTranslationPreservesNestedListShape | pub | `func TestValidateDocChunkTranslationPreservesNe...` |
| 681 | fn | TestValidateDocChunkTranslationRejectsChangedListNesting | pub | `func TestValidateDocChunkTranslationRejectsChan...` |
| 696 | fn | TestValidateDocChunkTranslationRejectsNestedListMovedToDifferentParentItem | pub | `func TestValidateDocChunkTranslationRejectsNest...` |
| 711 | fn | TestValidateDocBodyRejectsListIndentationChangeInsideComponent | pub | `func TestValidateDocBodyRejectsListIndentationC...` |
| 726 | fn | TestExtractMarkdownListMarkerPrefixesIgnoresFencedExamples | pub | `func TestExtractMarkdownListMarkerPrefixesIgnor...` |
| 736 | fn | TestNormalizeMaskedListMarkerPlaceholdersRemovesAddedContainers | pub | `func TestNormalizeMaskedListMarkerPlaceholdersR...` |
| 765 | fn | TestValidateDocChunkTranslationRejectsTranslatedInlineCode | pub | `func TestValidateDocChunkTranslationRejectsTran...` |
| 780 | fn | TestValidateDocChunkTranslationAcceptsPreservedInlineCode | pub | `func TestValidateDocChunkTranslationAcceptsPres...` |
| 791 | fn | TestValidateDocChunkTranslationAcceptsReorderedInlineCode | pub | `func TestValidateDocChunkTranslationAcceptsReor...` |
| 802 | fn | TestMaskMarkdownDocSyntaxPreservesCanonicalNestedBackticks | pub | `func TestMaskMarkdownDocSyntaxPreservesCanonica...` |
| 841 | fn | TestMaskMarkdownDocSyntaxProtectsProductLinksInsideRawHTML | pub | `func TestMaskMarkdownDocSyntaxProtectsProductLi...` |
| 875 | fn | TestMaskMarkdownDocSyntaxKeepsProtectedLinkAssociationOpaque | pub | `func TestMaskMarkdownDocSyntaxKeepsProtectedLin...` |
| 898 | fn | TestValidateDocBodyRejectsTranslatedInlineCode | pub | `func TestValidateDocBodyRejectsTranslatedInline...` |
| 914 | fn | TestValidateDocChunkTranslationRejectsTranslatedMultiBacktickCode | pub | `func TestValidateDocChunkTranslationRejectsTran...` |
| 929 | fn | TestValidateDocChunkTranslationRejectsChangedTripleBacktickCodeSpan | pub | `func TestValidateDocChunkTranslationRejectsChan...` |
| 944 | fn | TestValidateDocChunkTranslationRejectsChangedLineStartTripleBacktickCodeSpan | pub | `func TestValidateDocChunkTranslationRejectsChan...` |
| 959 | fn | TestValidateDocChunkTranslationRejectsChangedMultilineCodeSpan | pub | `func TestValidateDocChunkTranslationRejectsChan...` |
| 974 | fn | TestValidateDocChunkTranslationRejectsChangedMultilineCodeIndent | pub | `func TestValidateDocChunkTranslationRejectsChan...` |
| 989 | fn | TestValidateDocChunkTranslationRejectsCodeAfterUnmatchedBacktick | pub | `func TestValidateDocChunkTranslationRejectsCode...` |
| 1004 | fn | TestValidateDocChunkTranslationRejectsChangedCapitalizedPlaceholder | pub | `func TestValidateDocChunkTranslationRejectsChan...` |
| 1019 | fn | TestValidateDocChunkTranslationRejectsChangedCodeInsideMDXComponent | pub | `func TestValidateDocChunkTranslationRejectsChan...` |
| 1067 | fn | TestValidateDocChunkTranslationRejectsCodeAfterComponentFence | pub | `func TestValidateDocChunkTranslationRejectsCode...` |
| 1082 | fn | TestValidateDocChunkTranslationAllowsTranslatedProseInIsolatedIndentedFence | pub | `func TestValidateDocChunkTranslationAllowsTrans...` |
| 1096 | fn | TestValidateDocChunkTranslationRejectsChangedCodeInSplitComponentBody | pub | `func TestValidateDocChunkTranslationRejectsChan...` |
| 1111 | fn | TestValidateDocChunkTranslationRejectsChangedCodeInsideMDXAttribute | pub | `func TestValidateDocChunkTranslationRejectsChan...` |
| 1126 | fn | TestValidateDocChunkTranslationRejectsAnglePlaceholderInsideMDXAttribute | pub | `func TestValidateDocChunkTranslationRejectsAngl...` |
| 1141 | fn | TestValidateDocChunkTranslationRejectsAttributeCodeWithoutTrailingNewline | pub | `func TestValidateDocChunkTranslationRejectsAttr...` |
| 1156 | fn | TestValidateDocChunkTranslationAllowsTranslationInsideFencedExamples | pub | `func TestValidateDocChunkTranslationAllowsTrans...` |
| 1167 | fn | TestValidateDocChunkTranslationAllowsVisibleFencedMarkupToTranslate | pub | `func TestValidateDocChunkTranslationAllowsVisib...` |
| 1178 | fn | TestValidateDocChunkTranslationRejectsTranslatedFencedPlaceholders | pub | `func TestValidateDocChunkTranslationRejectsTran...` |
| 1193 | fn | TestValidateDocChunkTranslationRejectsTranslatedFencedProtocolMarkers | pub | `func TestValidateDocChunkTranslationRejectsTran...` |
| 1228 | fn | TestValidateDocChunkTranslationRejectsChangedFencedMarkersInContainers | pub | `func TestValidateDocChunkTranslationRejectsChan...` |
| 1257 | fn | TestValidateDocChunkTranslationRejectsFencedProtocolMarkersWithoutPlaceholders | pub | `func TestValidateDocChunkTranslationRejectsFenc...` |
| 1315 | fn | TestValidateDocChunkTranslationPreservesFencedDirectiveTokens | pub | `func TestValidateDocChunkTranslationPreservesFe...` |
| 1334 | fn | TestValidateDocChunkTranslationRejectsPlaceholderAfterContainerLikeFenceContent | pub | `func TestValidateDocChunkTranslationRejectsPlac...` |
| 1349 | fn | TestValidateDocChunkTranslationAllowsBracketedFencedHumanProse | pub | `func TestValidateDocChunkTranslationAllowsBrack...` |
| 1378 | fn | TestValidateDocChunkTranslationAllowsFencedComparisonsToTranslate | pub | `func TestValidateDocChunkTranslationAllowsFence...` |
| 1407 | fn | TestValidateDocChunkTranslationFindsPlaceholderAfterFencedComparison | pub | `func TestValidateDocChunkTranslationFindsPlaceh...` |
| 1422 | fn | TestValidateDocChunkTranslationPreservesEmbeddedSquareMarkers | pub | `func TestValidateDocChunkTranslationPreservesEm...` |
| 1470 | fn | TestValidateDocChunkTranslationKeepsIndentedFenceLikeContentOpen | pub | `func TestValidateDocChunkTranslationKeepsIndent...` |
| 1485 | fn | TestValidateDocChunkTranslationPreservesEmbeddedAnglePlaceholders | pub | `func TestValidateDocChunkTranslationPreservesEm...` |
| 1523 | fn | TestValidateDocBodyFencedLiteralsRejectsFenceBalanceChange | pub | `func TestValidateDocBodyFencedLiteralsRejectsFe...` |
| 1538 | fn | TestValidateDocBodyFencedLiteralsRejectsBalancedFenceCountChange | pub | `func TestValidateDocBodyFencedLiteralsRejectsBa...` |
| 1553 | fn | TestMergeSplitPureFencedDocTranslationsRejectsAdjacentFences | pub | `func TestMergeSplitPureFencedDocTranslationsRej...` |
| 1567 | fn | TestValidateDocChunkTranslationAllowsFencedBracketLabelsToTranslate | pub | `func TestValidateDocChunkTranslationAllowsFence...` |
| 1611 | fn | TestValidateDocChunkTranslationPreservesFencedMarkdownReferenceID | pub | `func TestValidateDocChunkTranslationPreservesFe...` |
| 1626 | fn | TestValidateDocChunkTranslationPreservesFencedMarkdownReferenceDefinitionID | pub | `func TestValidateDocChunkTranslationPreservesFe...` |
| 1641 | fn | TestValidateDocChunkTranslationPreservesFencedEnvelopeTokens | pub | `func TestValidateDocChunkTranslationPreservesFe...` |
| 1674 | fn | TestValidateDocChunkTranslationRejectsMarkerInListBlockquoteFence | pub | `func TestValidateDocChunkTranslationRejectsMark...` |
| 1689 | fn | TestValidateDocChunkTranslationRejectsUppercasePlaceholderAcrossFenceBlankLine | pub | `func TestValidateDocChunkTranslationRejectsUppe...` |
| 1704 | fn | TestValidateDocChunkTranslationRejectsAlternativeFencedPlaceholderSyntax | pub | `func TestValidateDocChunkTranslationRejectsAlte...` |
| 1742 | fn | TestValidateDocChunkTranslationRejectsReorderedFencedPlaceholders | pub | `func TestValidateDocChunkTranslationRejectsReor...` |
| 1757 | fn | TestValidateDocChunkTranslationStopsFencedLiteralsAtContainerBoundary | pub | `func TestValidateDocChunkTranslationStopsFenced...` |
| 1791 | fn | TestTranslateDocBodyChunkedPreservesMarkersAfterSplit | pub | `func TestTranslateDocBodyChunkedPreservesMarker...` |
| 1823 | fn | TestTranslateDocBodyChunkedMasksFencedLiteralsBeforeTranslation | pub | `func TestTranslateDocBodyChunkedMasksFencedLite...` |
| 1863 | fn | TestTranslateDocBodyChunkedRetriesDuplicatedFencedPlaceholder | pub | `func TestTranslateDocBodyChunkedRetriesDuplicat...` |
| 1884 | fn | TestValidateDocChunkTranslationAcceptsLongerClosingFence | pub | `func TestValidateDocChunkTranslationAcceptsLong...` |
| 1895 | fn | TestValidateDocChunkTranslationAllowsTranslationInsideNestedFences | pub | `func TestValidateDocChunkTranslationAllowsTrans...` |
| 1924 | fn | TestValidateDocChunkTranslationChecksCodeAfterUnclosedNestedFence | pub | `func TestValidateDocChunkTranslationChecksCodeA...` |
| 1939 | fn | TestValidateDocChunkTranslationRejectsSetextHeadingLoss | pub | `func TestValidateDocChunkTranslationRejectsSete...` |
| 1954 | fn | TestValidateDocChunkTranslationAcceptsTranslatedSetextHeading | pub | `func TestValidateDocChunkTranslationAcceptsTran...` |
| 1965 | fn | TestValidateDocChunkTranslationDoesNotTreatThematicBreakAsSetextHeading | pub | `func TestValidateDocChunkTranslationDoesNotTrea...` |
| 1976 | fn | TestValidateDocChunkTranslationRejectsNestedHeadingLoss | pub | `func TestValidateDocChunkTranslationRejectsNest...` |
| 1991 | fn | TestValidateDocChunkTranslationRejectsComponentNestedHeadingLoss | pub | `func TestValidateDocChunkTranslationRejectsComp...` |
| 2006 | fn | TestHeadingExtractionIgnoresComponentExamplesInsideCodeFences | pub | `func TestHeadingExtractionIgnoresComponentExamp...` |
| 2015 | fn | TestValidateDocChunkTranslationRejectsTranscriptArtifact | pub | `func TestValidateDocChunkTranslationRejectsTran...` |
| 2030 | fn | TestValidateDocChunkTranslationRejectsTopLevelBodyWrapperLeakEvenWhenSourceMentionsBodyTag | pub | `func TestValidateDocChunkTranslationRejectsTopL...` |
| 2045 | fn | TestTranslateDocBodyChunkedSplitsOnProtocolTokenLeakage | pub | `func TestTranslateDocBodyChunkedSplitsOnProtoco...` |
| 2066 | fn | TestTranslateDocBodyChunkedStripsUppercaseBodyWrapper | pub | `func TestTranslateDocBodyChunkedStripsUppercase...` |
| 2082 | fn | TestTranslateDocBodyChunkedPreservesListStructureAcrossSanitizedChunkBoundary | pub | `func TestTranslateDocBodyChunkedPreservesListSt...` |
| 2098 | fn | TestSanitizeDocChunkProtocolWrappersKeepsBodyOnlyWrapperWhenSourceMentionsBodyTag | pub | `func TestSanitizeDocChunkProtocolWrappersKeepsB...` |
| 2110 | fn | TestSanitizeDocChunkProtocolWrappersKeepsLegitimateTopLevelBodyBlock | pub | `func TestSanitizeDocChunkProtocolWrappersKeepsL...` |
| 2122 | fn | TestSanitizeDocChunkProtocolWrappersStripsBodyOnlyWrapperWhenSourceHasNoBodyTokens | pub | `func TestSanitizeDocChunkProtocolWrappersStrips...` |
| 2137 | fn | TestSanitizeDocChunkProtocolWrappersKeepsAmbiguousTaggedWrapperForRetry | pub | `func TestSanitizeDocChunkProtocolWrappersKeepsA...` |
| 2161 | fn | TestSplitDocBodyIntoBlocksKeepsInfoStringExampleInsideFence | pub | `func TestSplitDocBodyIntoBlocksKeepsInfoStringE...` |
| 2186 | fn | TestTranslateDocBodyChunkedPreSplitsOversizedPromptBudget | pub | `func TestTranslateDocBodyChunkedPreSplitsOversi...` |
| 2219 | fn | TestTranslateDocBodyChunkedSplitsOversizedSingletonBlock | pub | `func TestTranslateDocBodyChunkedSplitsOversized...` |
| 2249 | fn | TestTranslateDocBodyChunkedSplitsSingletonBlockWhenPromptBudgetExceeded | pub | `func TestTranslateDocBodyChunkedSplitsSingleton...` |
| 2278 | fn | TestTranslateDocBodyChunkedSplitsOversizedFenceBeforeTrailingProse | pub | `func TestTranslateDocBodyChunkedSplitsOversized...` |
| 2311 | fn | TestTranslateDocBodyChunkedMasksInlineCodeAndListMarkers | pub | `func TestTranslateDocBodyChunkedMasksInlineCode...` |
| 2366 | fn | TestTranslateDocBodyChunkedRetriesSingletonFenceAfterValidationFailure | pub | `func TestTranslateDocBodyChunkedRetriesSingleto...` |
| 2406 | fn | TestTranslateDocBodyChunkedUnwrapsTaggedLeafProtocolLeakage | pub | `func TestTranslateDocBodyChunkedUnwrapsTaggedLe...` |
| 2429 | fn | TestTranslateDocBodyChunkedFallsBackForComponentLeafValidationFailure | pub | `func TestTranslateDocBodyChunkedFallsBackForCom...` |
| 2455 | fn | TestProcessFileDocUsesFieldLevelFrontmatterTranslation | pub | `func TestProcessFileDocUsesFieldLevelFrontmatte...` |
| 2504 | fn | TestProcessFileDocRejectsSuspiciousFrontmatterScalarExpansion | pub | `func TestProcessFileDocRejectsSuspiciousFrontma...` |
| 2550 | fn | TestValidateDocChunkTranslationRejectsChangedCompositeLiteral | pub | `func TestValidateDocChunkTranslationRejectsChan...` |
| 2567 | fn | TestValidateDocBodyRejectsChangedCompositeLiteral | pub | `func TestValidateDocBodyRejectsChangedComposite...` |
| 2582 | fn | TestExtractNumericValuesKeepsLowAmbiguityComposites | pub | `func TestExtractNumericValuesKeepsLowAmbiguityC...` |
| 2597 | fn | TestExtractNumericValuesKeepsClockCoreBeforeMeridiemSuffix | pub | `func TestExtractNumericValuesKeepsClockCoreBefo...` |
| 2614 | fn | TestValidateDocChunkTranslationRejectsDroppedDuplicateLink | pub | `func TestValidateDocChunkTranslationRejectsDrop...` |
| 2625 | fn | TestValidateDocChunkTranslationRejectsMovedProtectedProductLinkLabel | pub | `func TestValidateDocChunkTranslationRejectsMove...` |
| 2641 | fn | TestValidateDocBodyAllowsTranslatedOrdinaryLinkLabel | pub | `func TestValidateDocBodyAllowsTranslatedOrdinar...` |
| 2651 | fn | TestValidateDocBodyAllowsTranslatedContextualOrdinaryLinkLabel | pub | `func TestValidateDocBodyAllowsTranslatedContext...` |
| 2661 | fn | TestValidateDocBodyRejectsMovedProtectedReferenceLinkLabel | pub | `func TestValidateDocBodyRejectsMovedProtectedRe...` |
| 2672 | fn | TestContextualProtectedProductLinksRecognizeCanonicalDestinations | pub | `func TestContextualProtectedProductLinksRecogni...` |
| 2705 | fn | TestValidateDocBodyRejectsDroppedLinkMarkup | pub | `func TestValidateDocBodyRejectsDroppedLinkMarku...` |
| 2714 | fn | TestExtractMarkdownLinkDestinationsUsesParsedNodes | pub | `func TestExtractMarkdownLinkDestinationsUsesPar...` |
| 2728 | fn | TestValidateDocChunkTranslationChecksLinkInsideMDX | pub | `func TestValidateDocChunkTranslationChecksLinkI...` |

## Public API

### `Translate`

```
func (docChunkTranslator) Translate(_ context.Context, text, _, _ string) (string, error) {
```

**Line:** 17 | **Kind:** fn

### `TranslateRaw`

```
func (docChunkTranslator) TranslateRaw(_ context.Context, text, _, _ string) (string, error) {
```

**Line:** 21 | **Kind:** fn

### `Close`

```
func (docChunkTranslator) Close() {}
```

**Line:** 35 | **Kind:** fn

### `Translate`

```
func (docLeafFallbackTranslator) Translate(_ context.Context, text, _, _ string) (string, error) {
```

**Line:** 39 | **Kind:** fn

### `TranslateRaw`

```
func (docLeafFallbackTranslator) TranslateRaw(_ context.Context, text, _, _ string) (string, error) {
```

**Line:** 47 | **Kind:** fn

### `Close`

```
func (docLeafFallbackTranslator) Close() {}
```

**Line:** 54 | **Kind:** fn

### `Translate`

```
func (docFrontmatterTranslator) Translate(_ context.Context, text, _, _ string) (string, error) {
```

**Line:** 58 | **Kind:** fn

### `TranslateRaw`

```
func (docFrontmatterTranslator) TranslateRaw(_ context.Context, text, _, _ string) (string, error) {
```

**Line:** 67 | **Kind:** fn

### `Close`

```
func (docFrontmatterTranslator) Close() {}
```

**Line:** 71 | **Kind:** fn

### `Translate`

```
func (docFrontmatterFallbackTranslator) Translate(_ context.Context, text, _, _ string) (string, error) {
```

**Line:** 75 | **Kind:** fn

### `TranslateRaw`

```
func (docFrontmatterFallbackTranslator) TranslateRaw(_ context.Context, text, _, _ string) (string, error) {
```

**Line:** 100 | **Kind:** fn

### `Close`

```
func (docFrontmatterFallbackTranslator) Close() {}
```

**Line:** 104 | **Kind:** fn

### `Translate`

```
func (docProtocolLeakTranslator) Translate(_ context.Context, text, _, _ string) (string, error) {
```

**Line:** 108 | **Kind:** fn

### `TranslateRaw`

```
func (docProtocolLeakTranslator) TranslateRaw(_ context.Context, text, _, _ string) (string, error) {
```

**Line:** 112 | **Kind:** fn

### `Close`

```
func (docProtocolLeakTranslator) Close() {}
```

**Line:** 135 | **Kind:** fn

### `Translate`

```
func (docWrappedLeafTranslator) Translate(_ context.Context, text, _, _ string) (string, error) {
```

**Line:** 139 | **Kind:** fn

### `TranslateRaw`

```
func (docWrappedLeafTranslator) TranslateRaw(_ context.Context, text, _, _ string) (string, error) {
```

**Line:** 143 | **Kind:** fn

### `Close`

```
func (docWrappedLeafTranslator) Close() {}
```

**Line:** 155 | **Kind:** fn

### `Translate`

```
func (docComponentLeafFallbackTranslator) Translate(_ context.Context, text, _, _ string) (string, error) {
```

**Line:** 159 | **Kind:** fn

### `TranslateRaw`

```
func (docComponentLeafFallbackTranslator) TranslateRaw(_ context.Context, text, _, _ string) (string, error) {
```

**Line:** 163 | **Kind:** fn

### `Close`

```
func (docComponentLeafFallbackTranslator) Close() {}
```

**Line:** 170 | **Kind:** fn

### `Translate`

```
func (t *docPromptBudgetTranslator) Translate(_ context.Context, text, _, _ string) (string, error) {
```

**Line:** 176 | **Kind:** fn

### `TranslateRaw`

```
func (t *docPromptBudgetTranslator) TranslateRaw(_ context.Context, text, _, _ string) (string, error) {
```

**Line:** 180 | **Kind:** fn

### `Close`

```
func (t *docPromptBudgetTranslator) Close() {}
```

**Line:** 189 | **Kind:** fn

### `Translate`

```
func (uppercaseWrapperTranslator) Translate(_ context.Context, text, _, _ string) (string, error) {
```

**Line:** 193 | **Kind:** fn

### `TranslateRaw`

```
func (uppercaseWrapperTranslator) TranslateRaw(_ context.Context, text, _, _ string) (string, error) {
```

**Line:** 197 | **Kind:** fn

### `Close`

```
func (uppercaseWrapperTranslator) Close() {}
```

**Line:** 201 | **Kind:** fn

### `Translate`

```
func (boundaryWrapperTranslator) Translate(_ context.Context, text, _, _ string) (string, error) {
```

**Line:** 205 | **Kind:** fn

### `TranslateRaw`

```
func (boundaryWrapperTranslator) TranslateRaw(_ context.Context, text, _, _ string) (string, error) {
```

**Line:** 209 | **Kind:** fn

### `Close`

```
func (boundaryWrapperTranslator) Close() {}
```

**Line:** 216 | **Kind:** fn

### `Translate`

```
func (t *oversizedBlockTranslator) Translate(_ context.Context, text, _, _ string) (string, error) {
```

**Line:** 222 | **Kind:** fn

### `TranslateRaw`

```
func (t *oversizedBlockTranslator) TranslateRaw(_ context.Context, text, _, _ string) (string, error) {
```

**Line:** 226 | **Kind:** fn

### `Close`

```
func (t *oversizedBlockTranslator) Close() {}
```

**Line:** 231 | **Kind:** fn

### `Translate`

```
func (t *singletonFenceRetryTranslator) Translate(_ context.Context, text, _, _ string) (string, error) {
```

**Line:** 237 | **Kind:** fn

### `TranslateRaw`

```
func (t *singletonFenceRetryTranslator) TranslateRaw(_ context.Context, text, _, _ string) (string, error) {
```

**Line:** 241 | **Kind:** fn

### `Close`

```
func (t *singletonFenceRetryTranslator) Close() {}
```

**Line:** 249 | **Kind:** fn

### `Translate`

```
func (splitProtocolMarkerTranslator) Translate(_ context.Context, text, _, _ string) (string, error) {
```

**Line:** 253 | **Kind:** fn

### `TranslateRaw`

```
func (splitProtocolMarkerTranslator) TranslateRaw(_ context.Context, text, _, _ string) (string, error) {
```

**Line:** 257 | **Kind:** fn

### `Close`

```
func (splitProtocolMarkerTranslator) Close() {}
```

**Line:** 261 | **Kind:** fn

### `Translate`

```
func (t *fencedLiteralMaskingTranslator) Translate(_ context.Context, text, _, _ string) (string, error) {
```

**Line:** 267 | **Kind:** fn

### `TranslateRaw`

```
func (t *fencedLiteralMaskingTranslator) TranslateRaw(_ context.Context, text, _, _ string) (string, error) {
```

**Line:** 271 | **Kind:** fn

### `Close`

```
func (t *fencedLiteralMaskingTranslator) Close() {}
```

**Line:** 284 | **Kind:** fn

### `Translate`

```
func (t *docSyntaxMaskingTranslator) Translate(_ context.Context, text, _, _ string) (string, error) {
```

**Line:** 290 | **Kind:** fn

### `TranslateRaw`

```
func (t *docSyntaxMaskingTranslator) TranslateRaw(_ context.Context, text, _, _ string) (string, error) {
```

**Line:** 294 | **Kind:** fn

### `Close`

```
func (t *docSyntaxMaskingTranslator) Close() {}
```

**Line:** 301 | **Kind:** fn

### `Translate`

```
func (t *duplicateFirstFencedPlaceholderTranslator) Translate(_ context.Context, text, _, _ string) (string, error) {
```

**Line:** 307 | **Kind:** fn

### `TranslateRaw`

```
func (t *duplicateFirstFencedPlaceholderTranslator) TranslateRaw(_ context.Context, text, _, _ string) (string, error) {
```

**Line:** 311 | **Kind:** fn

### `Close`

```
func (t *duplicateFirstFencedPlaceholderTranslator) Close() {}
```

**Line:** 322 | **Kind:** fn

### `TestParseTaggedDocumentRejectsMissingBodyCloseAtEOF`

```
func TestParseTaggedDocumentRejectsMissingBodyCloseAtEOF(t *testing.T) {
```

**Line:** 324 | **Kind:** fn

### `TestParseTaggedDocumentRejectsTrailingTextOutsideTags`

```
func TestParseTaggedDocumentRejectsTrailingTextOutsideTags(t *testing.T) {
```

**Line:** 335 | **Kind:** fn

### `TestFindTaggedBodyEndSearchesFromBodyStart`

```
func TestFindTaggedBodyEndSearchesFromBodyStart(t *testing.T) {
```

**Line:** 346 | **Kind:** fn

### `TestSplitDocBodyIntoBlocksKeepsFenceTogether`

```
func TestSplitDocBodyIntoBlocksKeepsFenceTogether(t *testing.T) {
```

**Line:** 373 | **Kind:** fn

### `TestSplitDocBodyIntoBlocksKeepsNestedTripleBackticksInsideFourBacktickFence`

```
func TestSplitDocBodyIntoBlocksKeepsNestedTripleBackticksInsideFourBacktickFence(t *testing.T) {
```

**Line:** 402 | **Kind:** fn

### `TestSanitizeDocChunkProtocolWrappersStripsOuterWrapperAroundBodyExamples`

```
func TestSanitizeDocChunkProtocolWrappersStripsOuterWrapperAroundBodyExamples(t *testing.T) {
```

**Line:** 428 | **Kind:** fn

### `TestTranslateDocBodyChunkedFallsBackToSmallerChunks`

```
func TestTranslateDocBodyChunkedFallsBackToSmallerChunks(t *testing.T) {
```

**Line:** 465 | **Kind:** fn

### `TestStripAndReapplyCommonIndent`

```
func TestStripAndReapplyCommonIndent(t *testing.T) {
```

**Line:** 488 | **Kind:** fn

### `TestTranslateDocBodyChunkedFallsBackToMaskedTranslateForLeafValidationFailure`

```
func TestTranslateDocBodyChunkedFallsBackToMaskedTranslateForLeafValidationFailure(t *testing.T) {
```

**Line:** 512 | **Kind:** fn

### `TestValidateDocChunkTranslationRejectsProtocolTokenLeakage`

```
func TestValidateDocChunkTranslationRejectsProtocolTokenLeakage(t *testing.T) {
```

**Line:** 539 | **Kind:** fn

### `TestValidateDocChunkTranslationRejectsInventedI18NPlaceholder`

```
func TestValidateDocChunkTranslationRejectsInventedI18NPlaceholder(t *testing.T) {
```

**Line:** 554 | **Kind:** fn

### `TestValidateDocChunkTranslationRejectsAdditionalI18NPlaceholder`

```
func TestValidateDocChunkTranslationRejectsAdditionalI18NPlaceholder(t *testing.T) {
```

**Line:** 569 | **Kind:** fn

### `TestValidateDocChunkTranslationRejectsMalformedI18NPlaceholder`

```
func TestValidateDocChunkTranslationRejectsMalformedI18NPlaceholder(t *testing.T) {
```

**Line:** 584 | **Kind:** fn

### `TestValidateDocBodyFencedLiteralsRejectsRestoredPlaceholderLeak`

```
func TestValidateDocBodyFencedLiteralsRejectsRestoredPlaceholderLeak(t *testing.T) {
```

**Line:** 595 | **Kind:** fn

### `TestFinalDocOutputRejectsI18NPlaceholderLeak`

```
func TestFinalDocOutputRejectsI18NPlaceholderLeak(t *testing.T) {
```

**Line:** 607 | **Kind:** fn

### `TestValidateDocChunkTranslationRejectsHeadingLoss`

```
func TestValidateDocChunkTranslationRejectsHeadingLoss(t *testing.T) {
```

**Line:** 618 | **Kind:** fn

### `TestValidateDocChunkTranslationAcceptsTranslatedHeadingText`

```
func TestValidateDocChunkTranslationAcceptsTranslatedHeadingText(t *testing.T) {
```

**Line:** 633 | **Kind:** fn

### `TestValidateDocChunkTranslationRejectsAccidentalOrderedListFromTranslatedDate`

```
func TestValidateDocChunkTranslationRejectsAccidentalOrderedListFromTranslatedDate(t *testing.T) {
```

**Line:** 644 | **Kind:** fn

### `TestValidateDocChunkTranslationAcceptsTranslatedDateWithoutListChange`

```
func TestValidateDocChunkTranslationAcceptsTranslatedDateWithoutListChange(t *testing.T) {
```

**Line:** 659 | **Kind:** fn

### `TestValidateDocChunkTranslationPreservesNestedListShape`

```
func TestValidateDocChunkTranslationPreservesNestedListShape(t *testing.T) {
```

**Line:** 670 | **Kind:** fn

### `TestValidateDocChunkTranslationRejectsChangedListNesting`

```
func TestValidateDocChunkTranslationRejectsChangedListNesting(t *testing.T) {
```

**Line:** 681 | **Kind:** fn

### `TestValidateDocChunkTranslationRejectsNestedListMovedToDifferentParentItem`

```
func TestValidateDocChunkTranslationRejectsNestedListMovedToDifferentParentItem(t *testing.T) {
```

**Line:** 696 | **Kind:** fn

### `TestValidateDocBodyRejectsListIndentationChangeInsideComponent`

```
func TestValidateDocBodyRejectsListIndentationChangeInsideComponent(t *testing.T) {
```

**Line:** 711 | **Kind:** fn

### `TestExtractMarkdownListMarkerPrefixesIgnoresFencedExamples`

```
func TestExtractMarkdownListMarkerPrefixesIgnoresFencedExamples(t *testing.T) {
```

**Line:** 726 | **Kind:** fn

### `TestNormalizeMaskedListMarkerPlaceholdersRemovesAddedContainers`

```
func TestNormalizeMaskedListMarkerPlaceholdersRemovesAddedContainers(t *testing.T) {
```

**Line:** 736 | **Kind:** fn

### `TestValidateDocChunkTranslationRejectsTranslatedInlineCode`

```
func TestValidateDocChunkTranslationRejectsTranslatedInlineCode(t *testing.T) {
```

**Line:** 765 | **Kind:** fn

### `TestValidateDocChunkTranslationAcceptsPreservedInlineCode`

```
func TestValidateDocChunkTranslationAcceptsPreservedInlineCode(t *testing.T) {
```

**Line:** 780 | **Kind:** fn

### `TestValidateDocChunkTranslationAcceptsReorderedInlineCode`

```
func TestValidateDocChunkTranslationAcceptsReorderedInlineCode(t *testing.T) {
```

**Line:** 791 | **Kind:** fn

### `TestMaskMarkdownDocSyntaxPreservesCanonicalNestedBackticks`

```
func TestMaskMarkdownDocSyntaxPreservesCanonicalNestedBackticks(t *testing.T) {
```

**Line:** 802 | **Kind:** fn

### `TestMaskMarkdownDocSyntaxProtectsProductLinksInsideRawHTML`

```
func TestMaskMarkdownDocSyntaxProtectsProductLinksInsideRawHTML(t *testing.T) {
```

**Line:** 841 | **Kind:** fn

### `TestMaskMarkdownDocSyntaxKeepsProtectedLinkAssociationOpaque`

```
func TestMaskMarkdownDocSyntaxKeepsProtectedLinkAssociationOpaque(t *testing.T) {
```

**Line:** 875 | **Kind:** fn

### `TestValidateDocBodyRejectsTranslatedInlineCode`

```
func TestValidateDocBodyRejectsTranslatedInlineCode(t *testing.T) {
```

**Line:** 898 | **Kind:** fn

### `TestValidateDocChunkTranslationRejectsTranslatedMultiBacktickCode`

```
func TestValidateDocChunkTranslationRejectsTranslatedMultiBacktickCode(t *testing.T) {
```

**Line:** 914 | **Kind:** fn

### `TestValidateDocChunkTranslationRejectsChangedTripleBacktickCodeSpan`

```
func TestValidateDocChunkTranslationRejectsChangedTripleBacktickCodeSpan(t *testing.T) {
```

**Line:** 929 | **Kind:** fn

### `TestValidateDocChunkTranslationRejectsChangedLineStartTripleBacktickCodeSpan`

```
func TestValidateDocChunkTranslationRejectsChangedLineStartTripleBacktickCodeSpan(t *testing.T) {
```

**Line:** 944 | **Kind:** fn

### `TestValidateDocChunkTranslationRejectsChangedMultilineCodeSpan`

```
func TestValidateDocChunkTranslationRejectsChangedMultilineCodeSpan(t *testing.T) {
```

**Line:** 959 | **Kind:** fn

### `TestValidateDocChunkTranslationRejectsChangedMultilineCodeIndent`

```
func TestValidateDocChunkTranslationRejectsChangedMultilineCodeIndent(t *testing.T) {
```

**Line:** 974 | **Kind:** fn

### `TestValidateDocChunkTranslationRejectsCodeAfterUnmatchedBacktick`

```
func TestValidateDocChunkTranslationRejectsCodeAfterUnmatchedBacktick(t *testing.T) {
```

**Line:** 989 | **Kind:** fn

### `TestValidateDocChunkTranslationRejectsChangedCapitalizedPlaceholder`

```
func TestValidateDocChunkTranslationRejectsChangedCapitalizedPlaceholder(t *testing.T) {
```

**Line:** 1004 | **Kind:** fn

### `TestValidateDocChunkTranslationRejectsChangedCodeInsideMDXComponent`

```
func TestValidateDocChunkTranslationRejectsChangedCodeInsideMDXComponent(t *testing.T) {
```

**Line:** 1019 | **Kind:** fn

### `TestValidateDocChunkTranslationRejectsCodeAfterComponentFence`

```
func TestValidateDocChunkTranslationRejectsCodeAfterComponentFence(t *testing.T) {
```

**Line:** 1067 | **Kind:** fn

### `TestValidateDocChunkTranslationAllowsTranslatedProseInIsolatedIndentedFence`

```
func TestValidateDocChunkTranslationAllowsTranslatedProseInIsolatedIndentedFence(t *testing.T) {
```

**Line:** 1082 | **Kind:** fn

### `TestValidateDocChunkTranslationRejectsChangedCodeInSplitComponentBody`

```
func TestValidateDocChunkTranslationRejectsChangedCodeInSplitComponentBody(t *testing.T) {
```

**Line:** 1096 | **Kind:** fn

### `TestValidateDocChunkTranslationRejectsChangedCodeInsideMDXAttribute`

```
func TestValidateDocChunkTranslationRejectsChangedCodeInsideMDXAttribute(t *testing.T) {
```

**Line:** 1111 | **Kind:** fn

### `TestValidateDocChunkTranslationRejectsAnglePlaceholderInsideMDXAttribute`

```
func TestValidateDocChunkTranslationRejectsAnglePlaceholderInsideMDXAttribute(t *testing.T) {
```

**Line:** 1126 | **Kind:** fn

### `TestValidateDocChunkTranslationRejectsAttributeCodeWithoutTrailingNewline`

```
func TestValidateDocChunkTranslationRejectsAttributeCodeWithoutTrailingNewline(t *testing.T) {
```

**Line:** 1141 | **Kind:** fn

### `TestValidateDocChunkTranslationAllowsTranslationInsideFencedExamples`

```
func TestValidateDocChunkTranslationAllowsTranslationInsideFencedExamples(t *testing.T) {
```

**Line:** 1156 | **Kind:** fn

### `TestValidateDocChunkTranslationAllowsVisibleFencedMarkupToTranslate`

```
func TestValidateDocChunkTranslationAllowsVisibleFencedMarkupToTranslate(t *testing.T) {
```

**Line:** 1167 | **Kind:** fn

### `TestValidateDocChunkTranslationRejectsTranslatedFencedPlaceholders`

```
func TestValidateDocChunkTranslationRejectsTranslatedFencedPlaceholders(t *testing.T) {
```

**Line:** 1178 | **Kind:** fn

### `TestValidateDocChunkTranslationRejectsTranslatedFencedProtocolMarkers`

```
func TestValidateDocChunkTranslationRejectsTranslatedFencedProtocolMarkers(t *testing.T) {
```

**Line:** 1193 | **Kind:** fn

### `TestValidateDocChunkTranslationRejectsChangedFencedMarkersInContainers`

```
func TestValidateDocChunkTranslationRejectsChangedFencedMarkersInContainers(t *testing.T) {
```

**Line:** 1228 | **Kind:** fn

### `TestValidateDocChunkTranslationRejectsFencedProtocolMarkersWithoutPlaceholders`

```
func TestValidateDocChunkTranslationRejectsFencedProtocolMarkersWithoutPlaceholders(t *testing.T) {
```

**Line:** 1257 | **Kind:** fn

### `TestValidateDocChunkTranslationPreservesFencedDirectiveTokens`

```
func TestValidateDocChunkTranslationPreservesFencedDirectiveTokens(t *testing.T) {
```

**Line:** 1315 | **Kind:** fn

### `TestValidateDocChunkTranslationRejectsPlaceholderAfterContainerLikeFenceContent`

```
func TestValidateDocChunkTranslationRejectsPlaceholderAfterContainerLikeFenceContent(t *testing.T) {
```

**Line:** 1334 | **Kind:** fn

### `TestValidateDocChunkTranslationAllowsBracketedFencedHumanProse`

```
func TestValidateDocChunkTranslationAllowsBracketedFencedHumanProse(t *testing.T) {
```

**Line:** 1349 | **Kind:** fn

### `TestValidateDocChunkTranslationAllowsFencedComparisonsToTranslate`

```
func TestValidateDocChunkTranslationAllowsFencedComparisonsToTranslate(t *testing.T) {
```

**Line:** 1378 | **Kind:** fn

### `TestValidateDocChunkTranslationFindsPlaceholderAfterFencedComparison`

```
func TestValidateDocChunkTranslationFindsPlaceholderAfterFencedComparison(t *testing.T) {
```

**Line:** 1407 | **Kind:** fn

### `TestValidateDocChunkTranslationPreservesEmbeddedSquareMarkers`

```
func TestValidateDocChunkTranslationPreservesEmbeddedSquareMarkers(t *testing.T) {
```

**Line:** 1422 | **Kind:** fn

### `TestValidateDocChunkTranslationKeepsIndentedFenceLikeContentOpen`

```
func TestValidateDocChunkTranslationKeepsIndentedFenceLikeContentOpen(t *testing.T) {
```

**Line:** 1470 | **Kind:** fn

### `TestValidateDocChunkTranslationPreservesEmbeddedAnglePlaceholders`

```
func TestValidateDocChunkTranslationPreservesEmbeddedAnglePlaceholders(t *testing.T) {
```

**Line:** 1485 | **Kind:** fn

### `TestValidateDocBodyFencedLiteralsRejectsFenceBalanceChange`

```
func TestValidateDocBodyFencedLiteralsRejectsFenceBalanceChange(t *testing.T) {
```

**Line:** 1523 | **Kind:** fn

### `TestValidateDocBodyFencedLiteralsRejectsBalancedFenceCountChange`

```
func TestValidateDocBodyFencedLiteralsRejectsBalancedFenceCountChange(t *testing.T) {
```

**Line:** 1538 | **Kind:** fn

### `TestMergeSplitPureFencedDocTranslationsRejectsAdjacentFences`

```
func TestMergeSplitPureFencedDocTranslationsRejectsAdjacentFences(t *testing.T) {
```

**Line:** 1553 | **Kind:** fn

### `TestValidateDocChunkTranslationAllowsFencedBracketLabelsToTranslate`

```
func TestValidateDocChunkTranslationAllowsFencedBracketLabelsToTranslate(t *testing.T) {
```

**Line:** 1567 | **Kind:** fn

### `TestValidateDocChunkTranslationPreservesFencedMarkdownReferenceID`

```
func TestValidateDocChunkTranslationPreservesFencedMarkdownReferenceID(t *testing.T) {
```

**Line:** 1611 | **Kind:** fn

### `TestValidateDocChunkTranslationPreservesFencedMarkdownReferenceDefinitionID`

```
func TestValidateDocChunkTranslationPreservesFencedMarkdownReferenceDefinitionID(t *testing.T) {
```

**Line:** 1626 | **Kind:** fn

### `TestValidateDocChunkTranslationPreservesFencedEnvelopeTokens`

```
func TestValidateDocChunkTranslationPreservesFencedEnvelopeTokens(t *testing.T) {
```

**Line:** 1641 | **Kind:** fn

### `TestValidateDocChunkTranslationRejectsMarkerInListBlockquoteFence`

```
func TestValidateDocChunkTranslationRejectsMarkerInListBlockquoteFence(t *testing.T) {
```

**Line:** 1674 | **Kind:** fn

### `TestValidateDocChunkTranslationRejectsUppercasePlaceholderAcrossFenceBlankLine`

```
func TestValidateDocChunkTranslationRejectsUppercasePlaceholderAcrossFenceBlankLine(t *testing.T) {
```

**Line:** 1689 | **Kind:** fn

### `TestValidateDocChunkTranslationRejectsAlternativeFencedPlaceholderSyntax`

```
func TestValidateDocChunkTranslationRejectsAlternativeFencedPlaceholderSyntax(t *testing.T) {
```

**Line:** 1704 | **Kind:** fn

### `TestValidateDocChunkTranslationRejectsReorderedFencedPlaceholders`

```
func TestValidateDocChunkTranslationRejectsReorderedFencedPlaceholders(t *testing.T) {
```

**Line:** 1742 | **Kind:** fn

### `TestValidateDocChunkTranslationStopsFencedLiteralsAtContainerBoundary`

```
func TestValidateDocChunkTranslationStopsFencedLiteralsAtContainerBoundary(t *testing.T) {
```

**Line:** 1757 | **Kind:** fn

### `TestTranslateDocBodyChunkedPreservesMarkersAfterSplit`

```
func TestTranslateDocBodyChunkedPreservesMarkersAfterSplit(t *testing.T) {
```

**Line:** 1791 | **Kind:** fn

### `TestTranslateDocBodyChunkedMasksFencedLiteralsBeforeTranslation`

```
func TestTranslateDocBodyChunkedMasksFencedLiteralsBeforeTranslation(t *testing.T) {
```

**Line:** 1823 | **Kind:** fn

### `TestTranslateDocBodyChunkedRetriesDuplicatedFencedPlaceholder`

```
func TestTranslateDocBodyChunkedRetriesDuplicatedFencedPlaceholder(t *testing.T) {
```

**Line:** 1863 | **Kind:** fn

### `TestValidateDocChunkTranslationAcceptsLongerClosingFence`

```
func TestValidateDocChunkTranslationAcceptsLongerClosingFence(t *testing.T) {
```

**Line:** 1884 | **Kind:** fn

### `TestValidateDocChunkTranslationAllowsTranslationInsideNestedFences`

```
func TestValidateDocChunkTranslationAllowsTranslationInsideNestedFences(t *testing.T) {
```

**Line:** 1895 | **Kind:** fn

### `TestValidateDocChunkTranslationChecksCodeAfterUnclosedNestedFence`

```
func TestValidateDocChunkTranslationChecksCodeAfterUnclosedNestedFence(t *testing.T) {
```

**Line:** 1924 | **Kind:** fn

### `TestValidateDocChunkTranslationRejectsSetextHeadingLoss`

```
func TestValidateDocChunkTranslationRejectsSetextHeadingLoss(t *testing.T) {
```

**Line:** 1939 | **Kind:** fn

### `TestValidateDocChunkTranslationAcceptsTranslatedSetextHeading`

```
func TestValidateDocChunkTranslationAcceptsTranslatedSetextHeading(t *testing.T) {
```

**Line:** 1954 | **Kind:** fn

### `TestValidateDocChunkTranslationDoesNotTreatThematicBreakAsSetextHeading`

```
func TestValidateDocChunkTranslationDoesNotTreatThematicBreakAsSetextHeading(t *testing.T) {
```

**Line:** 1965 | **Kind:** fn

### `TestValidateDocChunkTranslationRejectsNestedHeadingLoss`

```
func TestValidateDocChunkTranslationRejectsNestedHeadingLoss(t *testing.T) {
```

**Line:** 1976 | **Kind:** fn

### `TestValidateDocChunkTranslationRejectsComponentNestedHeadingLoss`

```
func TestValidateDocChunkTranslationRejectsComponentNestedHeadingLoss(t *testing.T) {
```

**Line:** 1991 | **Kind:** fn

### `TestHeadingExtractionIgnoresComponentExamplesInsideCodeFences`

```
func TestHeadingExtractionIgnoresComponentExamplesInsideCodeFences(t *testing.T) {
```

**Line:** 2006 | **Kind:** fn

### `TestValidateDocChunkTranslationRejectsTranscriptArtifact`

```
func TestValidateDocChunkTranslationRejectsTranscriptArtifact(t *testing.T) {
```

**Line:** 2015 | **Kind:** fn

### `TestValidateDocChunkTranslationRejectsTopLevelBodyWrapperLeakEvenWhenSourceMentionsBodyTag`

```
func TestValidateDocChunkTranslationRejectsTopLevelBodyWrapperLeakEvenWhenSourceMentionsBodyTag(t *testing.T) {
```

**Line:** 2030 | **Kind:** fn

### `TestTranslateDocBodyChunkedSplitsOnProtocolTokenLeakage`

```
func TestTranslateDocBodyChunkedSplitsOnProtocolTokenLeakage(t *testing.T) {
```

**Line:** 2045 | **Kind:** fn

### `TestTranslateDocBodyChunkedStripsUppercaseBodyWrapper`

```
func TestTranslateDocBodyChunkedStripsUppercaseBodyWrapper(t *testing.T) {
```

**Line:** 2066 | **Kind:** fn

### `TestTranslateDocBodyChunkedPreservesListStructureAcrossSanitizedChunkBoundary`

```
func TestTranslateDocBodyChunkedPreservesListStructureAcrossSanitizedChunkBoundary(t *testing.T) {
```

**Line:** 2082 | **Kind:** fn

### `TestSanitizeDocChunkProtocolWrappersKeepsBodyOnlyWrapperWhenSourceMentionsBodyTag`

```
func TestSanitizeDocChunkProtocolWrappersKeepsBodyOnlyWrapperWhenSourceMentionsBodyTag(t *testing.T) {
```

**Line:** 2098 | **Kind:** fn

### `TestSanitizeDocChunkProtocolWrappersKeepsLegitimateTopLevelBodyBlock`

```
func TestSanitizeDocChunkProtocolWrappersKeepsLegitimateTopLevelBodyBlock(t *testing.T) {
```

**Line:** 2110 | **Kind:** fn

### `TestSanitizeDocChunkProtocolWrappersStripsBodyOnlyWrapperWhenSourceHasNoBodyTokens`

```
func TestSanitizeDocChunkProtocolWrappersStripsBodyOnlyWrapperWhenSourceHasNoBodyTokens(t *testing.T) {
```

**Line:** 2122 | **Kind:** fn

### `TestSanitizeDocChunkProtocolWrappersKeepsAmbiguousTaggedWrapperForRetry`

```
func TestSanitizeDocChunkProtocolWrappersKeepsAmbiguousTaggedWrapperForRetry(t *testing.T) {
```

**Line:** 2137 | **Kind:** fn

### `TestSplitDocBodyIntoBlocksKeepsInfoStringExampleInsideFence`

```
func TestSplitDocBodyIntoBlocksKeepsInfoStringExampleInsideFence(t *testing.T) {
```

**Line:** 2161 | **Kind:** fn

### `TestTranslateDocBodyChunkedPreSplitsOversizedPromptBudget`

```
func TestTranslateDocBodyChunkedPreSplitsOversizedPromptBudget(t *testing.T) {
```

**Line:** 2186 | **Kind:** fn

### `TestTranslateDocBodyChunkedSplitsOversizedSingletonBlock`

```
func TestTranslateDocBodyChunkedSplitsOversizedSingletonBlock(t *testing.T) {
```

**Line:** 2219 | **Kind:** fn

### `TestTranslateDocBodyChunkedSplitsSingletonBlockWhenPromptBudgetExceeded`

```
func TestTranslateDocBodyChunkedSplitsSingletonBlockWhenPromptBudgetExceeded(t *testing.T) {
```

**Line:** 2249 | **Kind:** fn

### `TestTranslateDocBodyChunkedSplitsOversizedFenceBeforeTrailingProse`

```
func TestTranslateDocBodyChunkedSplitsOversizedFenceBeforeTrailingProse(t *testing.T) {
```

**Line:** 2278 | **Kind:** fn

### `TestTranslateDocBodyChunkedMasksInlineCodeAndListMarkers`

```
func TestTranslateDocBodyChunkedMasksInlineCodeAndListMarkers(t *testing.T) {
```

**Line:** 2311 | **Kind:** fn

### `TestTranslateDocBodyChunkedRetriesSingletonFenceAfterValidationFailure`

```
func TestTranslateDocBodyChunkedRetriesSingletonFenceAfterValidationFailure(t *testing.T) {
```

**Line:** 2366 | **Kind:** fn

### `TestTranslateDocBodyChunkedUnwrapsTaggedLeafProtocolLeakage`

```
func TestTranslateDocBodyChunkedUnwrapsTaggedLeafProtocolLeakage(t *testing.T) {
```

**Line:** 2406 | **Kind:** fn

### `TestTranslateDocBodyChunkedFallsBackForComponentLeafValidationFailure`

```
func TestTranslateDocBodyChunkedFallsBackForComponentLeafValidationFailure(t *testing.T) {
```

**Line:** 2429 | **Kind:** fn

### `TestProcessFileDocUsesFieldLevelFrontmatterTranslation`

```
func TestProcessFileDocUsesFieldLevelFrontmatterTranslation(t *testing.T) {
```

**Line:** 2455 | **Kind:** fn

### `TestProcessFileDocRejectsSuspiciousFrontmatterScalarExpansion`

```
func TestProcessFileDocRejectsSuspiciousFrontmatterScalarExpansion(t *testing.T) {
```

**Line:** 2504 | **Kind:** fn

### `TestValidateDocChunkTranslationRejectsChangedCompositeLiteral`

```
func TestValidateDocChunkTranslationRejectsChangedCompositeLiteral(t *testing.T) {
```

**Line:** 2550 | **Kind:** fn

### `TestValidateDocBodyRejectsChangedCompositeLiteral`

```
func TestValidateDocBodyRejectsChangedCompositeLiteral(t *testing.T) {
```

**Line:** 2567 | **Kind:** fn

### `TestExtractNumericValuesKeepsLowAmbiguityComposites`

```
func TestExtractNumericValuesKeepsLowAmbiguityComposites(t *testing.T) {
```

**Line:** 2582 | **Kind:** fn

### `TestExtractNumericValuesKeepsClockCoreBeforeMeridiemSuffix`

```
func TestExtractNumericValuesKeepsClockCoreBeforeMeridiemSuffix(t *testing.T) {
```

**Line:** 2597 | **Kind:** fn

### `TestValidateDocChunkTranslationRejectsDroppedDuplicateLink`

```
func TestValidateDocChunkTranslationRejectsDroppedDuplicateLink(t *testing.T) {
```

**Line:** 2614 | **Kind:** fn

### `TestValidateDocChunkTranslationRejectsMovedProtectedProductLinkLabel`

```
func TestValidateDocChunkTranslationRejectsMovedProtectedProductLinkLabel(t *testing.T) {
```

**Line:** 2625 | **Kind:** fn

### `TestValidateDocBodyAllowsTranslatedOrdinaryLinkLabel`

```
func TestValidateDocBodyAllowsTranslatedOrdinaryLinkLabel(t *testing.T) {
```

**Line:** 2641 | **Kind:** fn

### `TestValidateDocBodyAllowsTranslatedContextualOrdinaryLinkLabel`

```
func TestValidateDocBodyAllowsTranslatedContextualOrdinaryLinkLabel(t *testing.T) {
```

**Line:** 2651 | **Kind:** fn

### `TestValidateDocBodyRejectsMovedProtectedReferenceLinkLabel`

```
func TestValidateDocBodyRejectsMovedProtectedReferenceLinkLabel(t *testing.T) {
```

**Line:** 2661 | **Kind:** fn

### `TestContextualProtectedProductLinksRecognizeCanonicalDestinations`

```
func TestContextualProtectedProductLinksRecognizeCanonicalDestinations(t *testing.T) {
```

**Line:** 2672 | **Kind:** fn

### `TestValidateDocBodyRejectsDroppedLinkMarkup`

```
func TestValidateDocBodyRejectsDroppedLinkMarkup(t *testing.T) {
```

**Line:** 2705 | **Kind:** fn

### `TestExtractMarkdownLinkDestinationsUsesParsedNodes`

```
func TestExtractMarkdownLinkDestinationsUsesParsedNodes(t *testing.T) {
```

**Line:** 2714 | **Kind:** fn

### `TestValidateDocChunkTranslationChecksLinkInsideMDX`

```
func TestValidateDocChunkTranslationChecksLinkInsideMDX(t *testing.T) {
```

**Line:** 2728 | **Kind:** fn

## Memory Markers

### 🔴 `WARNING` (line 1979)

> \n>\n> Keep this setting enabled.\n\n- ### Step\n  Run the command.\n"
