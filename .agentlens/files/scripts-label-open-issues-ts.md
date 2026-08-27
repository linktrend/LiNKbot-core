# scripts/label-open-issues.ts

[← Back to Module](../modules/root/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1043
- **Language:** TypeScript
- **Symbols:** 53
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 13 | fn | writeStdoutLine | (private) | `function writeStdoutLine(message = ""): void {` |
| 82 | type | IssueLabel | (private) | - |
| 84 | type | LabelItem | (private) | - |
| 91 | type | Issue | (private) | - |
| 93 | type | PullRequest | (private) | - |
| 95 | type | Classification | (private) | - |
| 101 | type | ScriptOptions | (private) | - |
| 107 | type | ClassifyOptions | (private) | - |
| 114 | type | OpenAIResponse | (private) | - |
| 119 | type | OpenAIResponseOutput | (private) | - |
| 124 | type | OpenAIResponseContent | (private) | - |
| 129 | type | RepoInfo | (private) | - |
| 134 | type | IssuePageInfo | (private) | - |
| 139 | type | IssuePage | (private) | - |
| 150 | type | IssueQueryResponse | (private) | - |
| 159 | type | PullRequestPage | (private) | - |
| 170 | type | PullRequestQueryResponse | (private) | - |
| 179 | type | IssueBatch | (private) | - |
| 186 | type | PullRequestBatch | (private) | - |
| 193 | type | ScriptState | (private) | - |
| 199 | type | LoadedState | (private) | - |
| 205 | type | LabelTarget | (private) | - |
| 206 | type | LabelItemBatch | (private) | - |
| 213 | fn | parseArgs | (private) | `function parseArgs(argv: string[]): ScriptOptio...` |
| 256 | fn | isMainModule | (private) | `function isMainModule() {` |
| 261 | fn | resolveOpenAITimeoutMs | (private) | `function resolveOpenAITimeoutMs(raw = process.e...` |
| 270 | fn | withOpenAITimeout | (private) | `async function withOpenAITimeout<T>(` |
| 293 | fn | readBoundedResponseText | (private) | `async function readBoundedResponseText(` |
| 336 | fn | cancelOpenAIErrorReaderSoon | (private) | `function cancelOpenAIErrorReaderSoon(reader: Re...` |
| 342 | fn | readOpenAIErrorChunk | (private) | `async function readOpenAIErrorChunk(` |
| 368 | type | OpenAIJsonReadOptions | (private) | - |
| 373 | fn | readBoundedOpenAIJson | (private) | `async function readBoundedOpenAIJson(` |
| 389 | fn | logHeader | (private) | `function logHeader(title: string) {` |
| 394 | fn | logStep | (private) | `function logStep(message: string) {` |
| 398 | fn | logSuccess | (private) | `function logSuccess(message: string) {` |
| 402 | fn | logInfo | (private) | `function logInfo(message: string) {` |
| 406 | fn | createEmptyState | (private) | `function createEmptyState(): LoadedState {` |
| 419 | fn | loadState | (private) | `function loadState(statePath: string): LoadedSt...` |
| 450 | fn | saveState | (private) | `function saveState(statePath: string, state: Sc...` |
| 455 | fn | buildStateSnapshot | (private) | `function buildStateSnapshot(issueSet: Set<numbe...` |
| 463 | fn | runGh | (private) | `function runGh(args: string[]): string {` |
| 470 | fn | resolveRepo | (private) | `function resolveRepo(): RepoInfo {` |
| 475 | fn | fetchIssuePage | (private) | `function fetchIssuePage(repo: RepoInfo, after: ...` |
| 509 | fn | fetchPullRequestPage | (private) | `function fetchPullRequestPage(repo: RepoInfo, a...` |
| 543 | fn | mapNodeToLabelItem | (private) | `function mapNodeToLabelItem(node: IssuePage["no...` |
| 644 | fn | truncateBody | (private) | `function truncateBody(body: string): string {` |
| 651 | fn | buildItemPrompt | (private) | `function buildItemPrompt(item: LabelItem, kind:...` |
| 656 | fn | extractResponseText | (private) | `function extractResponseText(payload: OpenAIRes...` |
| 676 | fn | fallbackCategory | (private) | `function fallbackCategory(issueText: string): "...` |
| 691 | fn | normalizeClassification | (private) | `function normalizeClassification(raw: unknown, ...` |
| 707 | fn | classifyItem | (private) | `async function classifyItem(` |
| 790 | fn | applyLabels | (private) | `function applyLabels(` |
| 815 | fn | main | (private) | `async function main() {` |
