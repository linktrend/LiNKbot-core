# ui/src/pages/chat/components/chat-session-workspace.ts

[← Back to Module](../modules/ui-src-pages-chat-components/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1273
- **Language:** TypeScript
- **Symbols:** 39
- **Public symbols:** 11

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 39 | type | SessionWorkspaceProps | pub | - |
| 67 | type | SessionWorkspaceState | (private) | - |
| 85 | type | OpenRequest | (private) | - |
| 92 | type | SessionWorkspaceOpenRequest | (private) | - |
| 94 | type | SessionWorkspaceHost | pub | - |
| 115 | fn | paneSessionAgentId | pub | `export function paneSessionAgentId(state: Sessi...` |
| 131 | fn | clearWorkspaceSearchTimer | (private) | `function clearWorkspaceSearchTimer(workspace: S...` |
| 138 | fn | clearSessionWorkspaceTimers | pub | `export function clearSessionWorkspaceTimers(sta...` |
| 142 | fn | getWorkspaceState | (private) | `function getWorkspaceState(state: SessionWorksp...` |
| 173 | fn | currentWorkspaceState | (private) | `function currentWorkspaceState(state: SessionWo...` |
| 177 | fn | requestUpdate | (private) | `function requestUpdate(state: SessionWorkspaceH...` |
| 181 | fn | languageForFile | (private) | `function languageForFile(name: string): string {` |
| 189 | fn | basenameForPath | (private) | `function basenameForPath(filePath: string): str...` |
| 193 | fn | workspaceBrowserFilePath | (private) | `function workspaceBrowserFilePath(root: string ...` |
| 203 | fn | artifactSidebarContent | (private) | `function artifactSidebarContent(params: {` |
| 244 | fn | loadWorkspace | (private) | `function loadWorkspace(` |
| 323 | fn | beginOpenRequest | (private) | `function beginOpenRequest(` |
| 340 | fn | isCurrentOpenRequest | (private) | `function isCurrentOpenRequest(state: SessionWor...` |
| 353 | fn | openWorkspaceItem | (private) | `function openWorkspaceItem<T>(` |
| 390 | fn | openFile | (private) | `function openFile(` |
| 507 | fn | openSessionWorkspaceFile | pub | `export function openSessionWorkspaceFile(` |
| 514 | fn | toggleSessionWorkspace | pub | `export function toggleSessionWorkspace(state: S...` |
| 523 | fn | setSessionWorkspaceDock | (private) | `function setSessionWorkspaceDock(state: Session...` |
| 540 | fn | startSessionWorkspaceDockDrag | (private) | `function startSessionWorkspaceDockDrag(state: S...` |
| 567 | fn | handleMove | (private) | `const handleMove = (move: PointerEvent) => {` |
| 583 | fn | finish | (private) | `const finish = (apply: boolean) => {` |
| 596 | fn | handleUp | (private) | `const handleUp = () => finish(true);` |
| 597 | fn | handleCancel | (private) | `const handleCancel = () => finish(false);` |
| 605 | fn | revealSessionWorkspaceFile | pub | `export function revealSessionWorkspaceFile(stat...` |
| 618 | fn | openArtifact | (private) | `function openArtifact(` |
| 647 | fn | createSessionWorkspaceProps | pub | `export function createSessionWorkspaceProps(` |
| 727 | fn | buildSessionDiffSidebarContent | (private) | `function buildSessionDiffSidebarContent(state: ...` |
| 743 | fn | formatWorkspaceFileSize | (private) | `function formatWorkspaceFileSize(file: { size?:...` |
| 756 | fn | renderWorkspaceArtifactSize | (private) | `function renderWorkspaceArtifactSize(artifact: ...` |
| 760 | fn | renderWorkspaceRailSection | (private) | `function renderWorkspaceRailSection(` |
| 777 | fn | sessionWorkspaceModifiedCount | (private) | `function sessionWorkspaceModifiedCount(` |
| 786 | fn | renderSessionWorkspaceToggle | pub | `export function renderSessionWorkspaceToggle(` |
| 818 | fn | renderSessionDiffToggle | pub | `export function renderSessionDiffToggle(` |
| 839 | fn | renderSessionWorkspaceRail | pub | `export function renderSessionWorkspaceRail(` |

## Public API

### `paneSessionAgentId`

```
export function paneSessionAgentId(state: SessionScopeHostWithKey): string {
```

**Line:** 115 | **Kind:** fn

### `clearSessionWorkspaceTimers`

```
export function clearSessionWorkspaceTimers(state: SessionWorkspaceHost) {
```

**Line:** 138 | **Kind:** fn

### `openSessionWorkspaceFile`

```
export function openSessionWorkspaceFile(
```

**Line:** 507 | **Kind:** fn

### `toggleSessionWorkspace`

```
export function toggleSessionWorkspace(state: SessionWorkspaceHost) {
```

**Line:** 514 | **Kind:** fn

### `revealSessionWorkspaceFile`

```
export function revealSessionWorkspaceFile(state: SessionWorkspaceHost, path: string) {
```

**Line:** 605 | **Kind:** fn

### `createSessionWorkspaceProps`

```
export function createSessionWorkspaceProps(
```

**Line:** 647 | **Kind:** fn

### `renderSessionWorkspaceToggle`

```
export function renderSessionWorkspaceToggle(
```

**Line:** 786 | **Kind:** fn

### `renderSessionDiffToggle`

```
export function renderSessionDiffToggle(
```

**Line:** 818 | **Kind:** fn

### `renderSessionWorkspaceRail`

```
export function renderSessionWorkspaceRail(
```

**Line:** 839 | **Kind:** fn
