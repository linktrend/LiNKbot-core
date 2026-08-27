# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 3 large files in this module.

## extensions/oc-path/src/oc-path/find.ts (830 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 44 | interface | OcPathMatch | (private) |
| 49 | type | Slot | (private) |
| 50 | interface | SlotSub | (private) |
| 54 | interface | PatternSub | (private) |
| 59 | type | OnMatch | (private) |
| 63 | fn | findOcPaths | pub |
| 114 | fn | patternSubs | (private) |
| 136 | fn | repackSlotSubs | (private) |
| 162 | interface | WalkOps | (private) |
| 176 | fn | checkDepth | (private) |
| 186 | fn | dispatchSeg | (private) |
| 259 | fn | walkJsonc | (private) |
| 331 | fn | positionalForJsoncNode | (private) |
| 346 | fn | walkJsonl | (private) |
| 418 | fn | lineHolder | (private) |
| 426 | fn | unwrapHolder | (private) |
| 430 | fn | topLevelLeafText | (private) |
| 450 | fn | walkYaml | (private) |
| 531 | fn | positionalForYamlNode | (private) |
| 544 | fn | yamlChildMatchesPredicate | (private) |
| 548 | fn | yamlChildFieldText | (private) |
| 562 | fn | yamlScalarToText | (private) |
| 587 | type | MdItem | (private) |
| 588 | type | MdBlock | (private) |
| 590 | type | MdLevel | (private) |
| 595 | fn | walkMd | (private) |
| 645 | fn | walkMdItemField | (private) |
| 686 | fn | blockSlugCounts | (private) |
| 787 | fn | mdItemMatchesPredicate | (private) |
| 797 | fn | mdBlockHasMatchingItem | (private) |
| 806 | fn | jsoncChildMatchesPredicate | (private) |
| 810 | fn | jsoncChildFieldText | (private) |

## extensions/oc-path/src/oc-path/oc-path.ts (791 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 28 | fn | hasControlChar | (private) |
| 41 | fn | printable | (private) |
| 62 | interface | OcPath | pub |
| 71 | class | OcPathError | pub |
| 83 | fn | fail | (private) |
| 89 | fn | validateFileSlot | (private) |
| 113 | fn | validateSessionSlot | (private) |
| 131 | fn | parseOcPath | pub |
| 215 | fn | isJsonPathFile | (private) |
| 220 | fn | normalizeDeepJsonPathSegments | (private) |
| 248 | fn | formatOcPath | pub |
| 344 | fn | isPositionalSeg | pub |
| 353 | fn | isOrdinalSeg | pub |
| 357 | fn | parseOrdinalSeg | pub |
| 362 | fn | parseArrayIndexSegment | pub |
| 371 | interface | PositionalContainer | (private) |
| 378 | fn | resolvePositionalSeg | pub |
| 410 | fn | isPattern | (private) |
| 436 | fn | isUnionSeg | pub |
| 440 | fn | parseUnionSeg | pub |
| 459 | type | PredicateOp | (private) |
| 463 | fn | isPredicateSeg | pub |
| 471 | interface | PredicateSpec | pub |
| 477 | fn | parsePredicateSeg | pub |
| 499 | fn | evaluatePredicate | pub |
| 532 | fn | extractSession | (private) |
| 554 | type | ScanCallback | (private) |
| 555 | fn | scanBracketAware | (private) |
| 599 | fn | indexOfTopLevel | (private) |
| 618 | fn | splitRespectingBrackets | pub |
| 646 | fn | isQuotedSeg | pub |
| 651 | fn | unquoteSeg | pub |
| 656 | fn | quoteSeg | pub |
| 672 | fn | validateBrackets | (private) |
| 686 | fn | validateSubSegment | (private) |

## extensions/oc-path/src/oc-path/universal.ts (893 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 39 | type | OcAst | pub |
| 46 | type | OcMatch | pub |
| 57 | type | LeafType | (private) |
| 59 | type | NodeDescriptor | (private) |
| 68 | type | ContainerKind | (private) |
| 78 | type | SetResult | (private) |
| 94 | type | SetOcPathOptions | (private) |
| 102 | interface | InsertionInfo | (private) |
| 107 | fn | detectInsertion | (private) |
| 146 | fn | resolveOcPath | pub |
| 174 | fn | resolveMdToUniversal | (private) |
| 194 | fn | resolveJsoncToUniversal | (private) |
| 208 | fn | jsoncValueToMatch | (private) |
| 226 | fn | resolveJsonlToUniversal | (private) |
| 245 | fn | resolveYamlToUniversal | (private) |
| 265 | fn | yamlScalarToMatch | (private) |
| 278 | fn | yamlScalarToText | (private) |
| 291 | fn | yamlLine | (private) |
| 322 | fn | resolveInsertion | (private) |
| 336 | fn | resolveMdInsertion | (private) |
| 354 | fn | resolveJsoncInsertion | (private) |
| 380 | fn | resolveJsonlInsertion | (private) |
| 390 | fn | resolveYamlInsertion | (private) |
| 423 | fn | setOcPath | pub |
| 494 | fn | setStructuredLeaf | (private) |
| 533 | fn | parseJsoncReplacement | (private) |
| 545 | type | StructuredLeafMatch | (private) |
| 551 | type | SetFailureReason | (private) |
| 556 | fn | setMdInsertion | (private) |
| 642 | fn | setJsoncInsertion | (private) |
| 683 | fn | setJsonlInsertion | (private) |
| 706 | fn | setYamlLeaf | (private) |
| 730 | fn | setYamlInsertion | (private) |
| 738 | fn | coerceYamlValue | (private) |
| 761 | fn | parseYamlInput | (private) |
| 768 | fn | coerceJsoncLeaf | (private) |
| 793 | fn | tryParseJson | (private) |
| 801 | fn | jsonToJsoncValue | (private) |
| 848 | fn | rebuildMdRaw | (private) |
| 876 | fn | formatFrontmatterValue | (private) |
| 886 | fn | slugifyHeading | (private) |
