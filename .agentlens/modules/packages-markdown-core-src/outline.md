# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 1 large files in this module.

## packages/markdown-core/src/ir.ts (1147 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 38 | type | ListState | (private) |
| 44 | type | LinkState | (private) |
| 52 | type | RenderEnv | (private) |
| 58 | type | MarkdownToken | (private) |
| 73 | type | MarkdownIR | pub |
| 80 | type | MarkdownTableAlignment | (private) |
| 82 | type | MarkdownTableData | pub |
| 88 | type | MarkdownTableCell | pub |
| 95 | type | MarkdownTableMeta | pub |
| 101 | type | OpenStyle | (private) |
| 106 | type | RenderTarget | (private) |
| 115 | type | TableCell | (private) |
| 117 | type | TableState | (private) |
| 126 | type | RenderState | (private) |
| 140 | type | MarkdownParseOptions | pub |
| 156 | fn | appendHeadingSeparator | (private) |
| 172 | fn | createMarkdownIt | (private) |
| 201 | fn | getAttr | (private) |
| 215 | fn | markdownTableAlignmentFromToken | (private) |
| 229 | fn | createTextToken | (private) |
| 233 | fn | applySpoilerTokens | (private) |
| 241 | fn | injectSpoilersIntoInline | (private) |
| 308 | fn | initRenderTarget | (private) |
| 319 | fn | resolveRenderTarget | (private) |
| 323 | fn | appendText | (private) |
| 331 | fn | openStyle | (private) |
| 336 | fn | closeStyle | (private) |
| 359 | fn | appendParagraphSeparator | (private) |
| 377 | fn | appendTopLevelListSeparator | (private) |
| 384 | fn | appendNestedListSeparator | (private) |
| 390 | fn | appendListPrefix | (private) |
| 402 | fn | renderInlineCode | (private) |
| 412 | fn | resolveFenceLanguage | (private) |
| 417 | fn | renderCodeBlock | (private) |
| 445 | fn | handleLinkClose | (private) |
| 461 | fn | headingStyleFromToken | (private) |
| 480 | fn | isInsideMarkdownHtmlTag | (private) |
| 491 | fn | initTableState | (private) |
| 502 | fn | finishTableCell | (private) |
| 512 | fn | trimCell | (private) |
| 552 | fn | appendCell | (private) |
| 582 | fn | appendCellTextOnly | (private) |
| 590 | fn | collectTableBlock | (private) |
| 607 | fn | appendTableBulletValue | (private) |
| 631 | fn | renderTableAsBullets | (private) |
| 692 | fn | renderTableAsCode | (private) |
| 705 | fn | updateWidths | (private) |
| 721 | fn | appendRow | (private) |
| 739 | fn | appendDivider | (private) |
| 763 | fn | renderTokens | (private) |
| 1015 | fn | closeRemainingStyles | (private) |
| 1029 | fn | sliceMarkdownIR | pub |
| 1039 | fn | markdownToIR | pub |
| 1043 | fn | markdownToIRWithMeta | pub |
| 1112 | fn | chunkMarkdownIR | pub |
