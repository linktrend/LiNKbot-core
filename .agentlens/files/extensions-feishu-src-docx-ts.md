# extensions/feishu/src/docx.ts

[← Back to Module](../modules/extensions-feishu-src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1461
- **Language:** TypeScript
- **Symbols:** 43
- **Public symbols:** 1

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 37 | fn | resolveDocToolLocalRoots | (private) | `function resolveDocToolLocalRoots(ctx: {` |
| 80 | fn | cleanBlocksForInsert | (private) | `function cleanBlocksForInsert(blocks: FeishuDoc...` |
| 109 | fn | convertMarkdown | (private) | `async function convertMarkdown(client: Lark.Cli...` |
| 122 | fn | normalizeChildIds | (private) | `function normalizeChildIds(children: unknown): ...` |
| 132 | type | DocxChildrenCreatePayload | (private) | - |
| 135 | type | DocxChildrenCreateChild | (private) | - |
| 138 | type | DocxDescendantCreatePayload | (private) | - |
| 141 | type | DocxDescendantCreateBlock | (private) | - |
| 144 | type | DriveMediaUploadAllPayload | (private) | - |
| 147 | type | DriveMediaUploadFile | (private) | - |
| 149 | fn | toCreateChildBlock | (private) | `function toCreateChildBlock(block: FeishuDocxBl...` |
| 153 | fn | toDescendantBlock | (private) | `function toDescendantBlock(block: FeishuDocxBlo...` |
| 162 | fn | normalizeInsertedChildBlocks | (private) | `function normalizeInsertedChildBlocks(` |
| 176 | fn | normalizeConvertedBlockTree | (private) | `function normalizeConvertedBlockTree(` |
| 227 | fn | visit | (private) | `const visit = (blockId: string) => {` |
| 258 | fn | insertBlocks | (private) | `async function insertBlocks(` |
| 293 | fn | convertMarkdownWithFallback | (private) | `async function convertMarkdownWithFallback(` |
| 329 | fn | chunkedConvertMarkdown | (private) | `async function chunkedConvertMarkdown(client: L...` |
| 343 | type | Logger | (private) | - |
| 352 | fn | insertBlocksWithDescendant | (private) | `async function insertBlocksWithDescendant(` |
| 380 | fn | clearDocumentContent | (private) | `async function clearDocumentContent(client: Lar...` |
| 406 | fn | uploadImageToDocx | (private) | `async function uploadImageToDocx(` |
| 437 | fn | processImages | (private) | `async function processImages(` |
| 489 | fn | uploadImageBlock | (private) | `async function uploadImageBlock(` |
| 554 | fn | uploadFileBlock | (private) | `async function uploadFileBlock(` |
| 641 | fn | readDoc | (private) | `async function readDoc(client: Lark.Client, doc...` |
| 681 | fn | createDoc | (private) | `async function createDoc(` |
| 743 | fn | writeDoc | (private) | `async function writeDoc(` |
| 788 | fn | appendDoc | (private) | `async function appendDoc(` |
| 830 | fn | insertDoc | (private) | `async function insertDoc(` |
| 922 | fn | createTable | (private) | `async function createTable(` |
| 971 | fn | writeTableCells | (private) | `async function writeTableCells(` |
| 1059 | fn | createTableWithValues | (private) | `async function createTableWithValues(` |
| 1092 | fn | updateBlock | (private) | `async function updateBlock(` |
| 1120 | fn | deleteBlock | (private) | `async function deleteBlock(client: Lark.Client,...` |
| 1154 | fn | listBlocks | (private) | `async function listBlocks(client: Lark.Client, ...` |
| 1167 | fn | getBlock | (private) | `async function getBlock(client: Lark.Client, do...` |
| 1180 | fn | listAppScopes | (private) | `async function listAppScopes(client: Lark.Clien...` |
| 1199 | fn | registerFeishuDocTools | pub | `export function registerFeishuDocTools(api: Ope...` |
| 1214 | type | FeishuDocExecuteParams | (private) | - |
| 1216 | fn | getClient | (private) | `const getClient = (params: { accountId?: string...` |
| 1224 | fn | getMediaMaxBytes | (private) | `const getMediaMaxBytes = (` |
| 1237 | fn | getImageReadTimeoutMs | (private) | `const getImageReadTimeoutMs = (` |

## Public API

### `registerFeishuDocTools`

```
export function registerFeishuDocTools(api: OpenClawPluginApi) {
```

**Line:** 1199 | **Kind:** fn
