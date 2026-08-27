# packages/markdown-core/src/ir.ts

[← Back to Module](../modules/packages-markdown-core-src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1147
- **Language:** TypeScript
- **Symbols:** 55
- **Public symbols:** 9

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 38 | type | ListState | (private) | - |
| 44 | type | LinkState | (private) | - |
| 52 | type | RenderEnv | (private) | - |
| 58 | type | MarkdownToken | (private) | - |
| 73 | type | MarkdownIR | pub | - |
| 80 | type | MarkdownTableAlignment | (private) | - |
| 82 | type | MarkdownTableData | pub | - |
| 88 | type | MarkdownTableCell | pub | - |
| 95 | type | MarkdownTableMeta | pub | - |
| 101 | type | OpenStyle | (private) | - |
| 106 | type | RenderTarget | (private) | - |
| 115 | type | TableCell | (private) | - |
| 117 | type | TableState | (private) | - |
| 126 | type | RenderState | (private) | - |
| 140 | type | MarkdownParseOptions | pub | - |
| 156 | fn | appendHeadingSeparator | (private) | `function appendHeadingSeparator(state: RenderSt...` |
| 172 | fn | createMarkdownIt | (private) | `function createMarkdownIt(options: MarkdownPars...` |
| 201 | fn | getAttr | (private) | `function getAttr(token: MarkdownToken, name: st...` |
| 215 | fn | markdownTableAlignmentFromToken | (private) | `function markdownTableAlignmentFromToken(token:...` |
| 229 | fn | createTextToken | (private) | `function createTextToken(base: MarkdownToken, c...` |
| 233 | fn | applySpoilerTokens | (private) | `function applySpoilerTokens(tokens: MarkdownTok...` |
| 241 | fn | injectSpoilersIntoInline | (private) | `function injectSpoilersIntoInline(tokens: Markd...` |
| 308 | fn | initRenderTarget | (private) | `function initRenderTarget(): RenderTarget {` |
| 319 | fn | resolveRenderTarget | (private) | `function resolveRenderTarget(state: RenderState...` |
| 323 | fn | appendText | (private) | `function appendText(state: RenderState, value: ...` |
| 331 | fn | openStyle | (private) | `function openStyle(state: RenderState, style: M...` |
| 336 | fn | closeStyle | (private) | `function closeStyle(` |
| 359 | fn | appendParagraphSeparator | (private) | `function appendParagraphSeparator(state: Render...` |
| 377 | fn | appendTopLevelListSeparator | (private) | `function appendTopLevelListSeparator(state: Ren...` |
| 384 | fn | appendNestedListSeparator | (private) | `function appendNestedListSeparator(state: Rende...` |
| 390 | fn | appendListPrefix | (private) | `function appendListPrefix(state: RenderState) {` |
| 402 | fn | renderInlineCode | (private) | `function renderInlineCode(state: RenderState, c...` |
| 412 | fn | resolveFenceLanguage | (private) | `function resolveFenceLanguage(info: string | un...` |
| 417 | fn | renderCodeBlock | (private) | `function renderCodeBlock(` |
| 445 | fn | handleLinkClose | (private) | `function handleLinkClose(state: RenderState) {` |
| 461 | fn | headingStyleFromToken | (private) | `function headingStyleFromToken(token: MarkdownT...` |
| 480 | fn | isInsideMarkdownHtmlTag | (private) | `function isInsideMarkdownHtmlTag(text: string):...` |
| 491 | fn | initTableState | (private) | `function initTableState(): TableState {` |
| 502 | fn | finishTableCell | (private) | `function finishTableCell(cell: RenderTarget): T...` |
| 512 | fn | trimCell | (private) | `function trimCell(cell: TableCell): TableCell {` |
| 552 | fn | appendCell | (private) | `function appendCell(state: RenderState, cell: T...` |
| 582 | fn | appendCellTextOnly | (private) | `function appendCellTextOnly(state: RenderState,...` |
| 590 | fn | collectTableBlock | (private) | `function collectTableBlock(state: RenderState) {` |
| 607 | fn | appendTableBulletValue | (private) | `function appendTableBulletValue(` |
| 631 | fn | renderTableAsBullets | (private) | `function renderTableAsBullets(state: RenderStat...` |
| 692 | fn | renderTableAsCode | (private) | `function renderTableAsCode(state: RenderState) {` |
| 705 | fn | updateWidths | (private) | `const updateWidths = (cells: TableCell[]) => {` |
| 721 | fn | appendRow | (private) | `const appendRow = (cells: TableCell[]) => {` |
| 739 | fn | appendDivider | (private) | `const appendDivider = () => {` |
| 763 | fn | renderTokens | (private) | `function renderTokens(tokens: MarkdownToken[], ...` |
| 1015 | fn | closeRemainingStyles | (private) | `function closeRemainingStyles(target: RenderTar...` |
| 1029 | fn | sliceMarkdownIR | pub | `export function sliceMarkdownIR(ir: MarkdownIR,...` |
| 1039 | fn | markdownToIR | pub | `export function markdownToIR(markdown: string, ...` |
| 1043 | fn | markdownToIRWithMeta | pub | `export function markdownToIRWithMeta(` |
| 1112 | fn | chunkMarkdownIR | pub | `export function chunkMarkdownIR(ir: MarkdownIR,...` |

## Public API

### `sliceMarkdownIR`

```
export function sliceMarkdownIR(ir: MarkdownIR, start: number, end: number): MarkdownIR {
```

**Line:** 1029 | **Kind:** fn

### `markdownToIR`

```
export function markdownToIR(markdown: string, options: MarkdownParseOptions = {}): MarkdownIR {
```

**Line:** 1039 | **Kind:** fn

### `markdownToIRWithMeta`

```
export function markdownToIRWithMeta(
```

**Line:** 1043 | **Kind:** fn

### `chunkMarkdownIR`

```
export function chunkMarkdownIR(ir: MarkdownIR, limit: number): MarkdownIR[] {
```

**Line:** 1112 | **Kind:** fn
