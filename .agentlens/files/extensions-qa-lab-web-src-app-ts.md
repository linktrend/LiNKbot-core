# extensions/qa-lab/web/src/app.ts

[← Back to Module](../modules/extensions-qa-lab-web-src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1759
- **Language:** TypeScript
- **Symbols:** 38
- **Public symbols:** 1

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 25 | fn | countCaptureDimension | (private) | `function countCaptureDimension(` |
| 42 | fn | summarizeCaptureCoverageFromEvents | (private) | `function summarizeCaptureCoverageFromEvents(` |
| 64 | fn | defaultModelsForProviderMode | (private) | `function defaultModelsForProviderMode(` |
| 87 | fn | detectTheme | (private) | `function detectTheme(): "light" | "dark" {` |
| 95 | fn | detectSidebarCollapsed | (private) | `function detectSidebarCollapsed(): boolean {` |
| 99 | fn | detectSidebarPanel | (private) | `function detectSidebarPanel(): UiState["sidebar...` |
| 106 | fn | loadCaptureSavedViews | (private) | `function loadCaptureSavedViews(): CaptureSavedV...` |
| 118 | fn | persistCaptureSavedViews | (private) | `function persistCaptureSavedViews(savedViews: C...` |
| 125 | fn | isEditableElement | (private) | `function isEditableElement(target: EventTarget ...` |
| 137 | fn | createQaLabApp | pub | `export async function createQaLabApp(root: HTML...` |
| 239 | fn | stateFingerprint | (private) | `function stateFingerprint(): string {` |
| 321 | fn | isSelectOpen | (private) | `function isSelectOpen(): boolean {` |
| 328 | fn | refresh | (private) | `async function refresh() {` |
| 477 | fn | pollUiVersion | (private) | `async function pollUiVersion() {` |
| 497 | fn | updateRunnerDraft | (private) | `function updateRunnerDraft(mutator: (draft: Run...` |
| 512 | fn | runSelfCheck | (private) | `async function runSelfCheck() {` |
| 537 | fn | resetState | (private) | `async function resetState() {` |
| 554 | fn | sendInbound | (private) | `async function sendInbound() {` |
| 600 | fn | runSuite | (private) | `async function runSuite() {` |
| 635 | fn | loadEvidence | (private) | `async function loadEvidence(pathOverride?: stri...` |
| 666 | fn | sendKickoff | (private) | `async function sendKickoff() {` |
| 684 | fn | downloadReport | (private) | `function downloadReport() {` |
| 697 | fn | toggleTheme | (private) | `function toggleTheme() {` |
| 703 | fn | toggleSidebar | (private) | `function toggleSidebar() {` |
| 709 | fn | setSidebarPanel | (private) | `function setSidebarPanel(panel: UiState["sideba...` |
| 719 | fn | applyCaptureSavedView | (private) | `function applyCaptureSavedView(view: CaptureSav...` |
| 743 | fn | buildCaptureSavedView | (private) | `function buildCaptureSavedView(name: string): C...` |
| 768 | fn | trackChatScroll | (private) | `function trackChatScroll() {` |
| 779 | fn | scrollChatToBottom | (private) | `function scrollChatToBottom(force?: boolean) {` |
| 793 | fn | bindEvents | (private) | `function bindEvents() {` |
| 1106 | fn | readMultiSelect | (private) | `const readMultiSelect = (select: HTMLSelectElem...` |
| 1261 | fn | handleMove | (private) | `const handleMove = (moveEvent: MouseEvent) => {` |
| 1267 | fn | handleUp | (private) | `const handleUp = () => {` |
| 1448 | fn | readWindow | (private) | `const readWindow = () => {` |
| 1516 | fn | percentFromEvent | (private) | `const percentFromEvent = (clientX: number) => {` |
| 1525 | fn | handleMove | (private) | `const handleMove = (moveEvent: MouseEvent) => {` |
| 1529 | fn | handleUp | (private) | `const handleUp = () => {` |
| 1707 | fn | render | (private) | `function render() {` |

## Public API

### `createQaLabApp`

```
export async function createQaLabApp(root: HTMLDivElement) {
```

**Line:** 137 | **Kind:** fn
