# ui/src/pages/chat/components/chat-sidebar.ts

[← Back to Module](../modules/ui-src-pages-chat-components/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1328
- **Language:** TypeScript
- **Symbols:** 29
- **Public symbols:** 4

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 36 | type | DetailUnavailableReason | (private) | - |
| 37 | type | DetailFullMessageResult | pub | - |
| 43 | type | SidebarFullMessageRequest | pub | - |
| 50 | type | MarkdownSidebarContent | (private) | - |
| 58 | type | CanvasSidebarContent | (private) | - |
| 71 | type | ImageSidebarContent | (private) | - |
| 81 | type | SessionDiffSidebarContent | (private) | - |
| 90 | type | SessionDiscussionSidebarContent | (private) | - |
| 102 | type | FileSaveOutcome | (private) | - |
| 107 | type | FileSidebarEdit | (private) | - |
| 114 | type | FileSidebarContent | (private) | - |
| 130 | type | RetainedFileDraft | (private) | - |
| 137 | fn | retainedFileDraftKey | (private) | `function retainedFileDraftKey(content: FileSide...` |
| 141 | fn | setRetainedFileDraft | (private) | `function setRetainedFileDraft(content: FileSide...` |
| 150 | type | SidebarContent | pub | - |
| 158 | fn | hasFullMessageRequest | (private) | `function hasFullMessageRequest(content: Sidebar...` |
| 166 | fn | formatUnavailableReason | (private) | `function formatUnavailableReason(reason: Detail...` |
| 177 | fn | extractMessageText | (private) | `function extractMessageText(message: unknown): ...` |
| 188 | fn | toPlainTextCodeFence | (private) | `function toPlainTextCodeFence(value: string, la...` |
| 193 | fn | buildRawSidebarContent | (private) | `function buildRawSidebarContent(content: Sideba...` |
| 229 | fn | hasUniformLineEndings | pub | `export function hasUniformLineEndings(content: ...` |
| 236 | fn | computeFileSearchMatches | (private) | `function computeFileSearchMatches(content: stri...` |
| 248 | fn | absoluteFilePath | (private) | `function absoluteFilePath(content: FileSidebarC...` |
| 262 | type | FileViewControls | (private) | - |
| 291 | fn | renderFileSidebarContent | (private) | `function renderFileSidebarContent(` |
| 488 | fn | resolveSidebarCanvasSandbox | (private) | `function resolveSidebarCanvasSandbox(` |
| 497 | type | MarkdownSidebarProps | (private) | - |
| 508 | fn | renderMarkdownSidebar | (private) | `function renderMarkdownSidebar(props: MarkdownS...` |
| 682 | class | ChatDetailPanel | (private) | - |

## Public API

### `hasUniformLineEndings`

```
export function hasUniformLineEndings(content: string): boolean {
```

**Line:** 229 | **Kind:** fn
