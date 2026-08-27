# extensions/browser/src/browser-tool.ts

[← Back to Module](../modules/extensions-browser/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1036
- **Language:** TypeScript
- **Symbols:** 15
- **Public symbols:** 1

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 99 | fn | readOptionalTargetAndTimeout | (private) | `function readOptionalTargetAndTimeout(params: R...` |
| 107 | fn | readTargetUrlParam | (private) | `function readTargetUrlParam(params: Record<stri...` |
| 115 | fn | formatScreenshotShareHint | (private) | `function formatScreenshotShareHint(filePath: st...` |
| 157 | fn | readActRequestParam | (private) | `function readActRequestParam(params: Record<str...` |
| 195 | type | BrowserNodeTarget | (private) | - |
| 200 | fn | isBrowserNode | (private) | `function isBrowserNode(node: NodeListNode) {` |
| 206 | fn | resolveBrowserNodeTarget | (private) | `async function resolveBrowserNodeTarget(params: {` |
| 286 | fn | resolveBrowserBaseUrl | (private) | `function resolveBrowserBaseUrl(params: {` |
| 321 | fn | readHostSystemProfiles | (private) | `async function readHostSystemProfiles(params: {` |
| 344 | fn | shouldPreferHostForProfile | (private) | `function shouldPreferHostForProfile(profileName...` |
| 370 | fn | usesExistingSessionManageFlow | (private) | `function usesExistingSessionManageFlow(params: ...` |
| 389 | fn | readToolTimeoutMs | (private) | `function readToolTimeoutMs(params: Record<strin...` |
| 396 | fn | createBrowserTool | pub | `export function createBrowserTool(opts?: {` |
| 645 | fn | closeOpenedTab | (private) | `const closeOpenedTab = async (targetId: string,...` |
| 661 | fn | closeOpenedTab | (private) | `const closeOpenedTab = async (targetId: string,...` |

## Public API

### `createBrowserTool`

```
export function createBrowserTool(opts?: {
```

**Line:** 396 | **Kind:** fn
