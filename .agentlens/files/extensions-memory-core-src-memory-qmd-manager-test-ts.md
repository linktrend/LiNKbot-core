# extensions/memory-core/src/memory/qmd-manager.test.ts

[← Back to Module](../modules/extensions-memory-core-src-memory/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 7925
- **Language:** TypeScript
- **Symbols:** 37
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 54 | type | WatchOptions | (private) | - |
| 58 | type | LeaseCall | (private) | - |
| 60 | type | MockStream | (private) | - |
| 62 | interface | MockChild | (private) | - |
| 71 | fn | createMockChild | (private) | `function createMockChild(params?: { autoClose?:...` |
| 104 | fn | emitAndClose | (private) | `function emitAndClose(child: MockChild, stream:...` |
| 111 | fn | waitUntil | (private) | `async function waitUntil(predicate: () => boole...` |
| 123 | fn | isMcporterCommand | (private) | `function isMcporterCommand(cmd: unknown): boole...` |
| 130 | fn | firstWatchOptions | (private) | `function firstWatchOptions(): WatchOptions {` |
| 138 | fn | firstWatchPaths | (private) | `function firstWatchPaths(): string[] {` |
| 146 | fn | firstEmbedLeaseCall | (private) | `function firstEmbedLeaseCall(): LeaseCall {` |
| 156 | fn | writeLeaseCalls | (private) | `function writeLeaseCalls(): LeaseCall[] {` |
| 162 | fn | firstWriteLeaseCall | (private) | `function firstWriteLeaseCall(): LeaseCall {` |
| 233 | fn | setQmdStateDir | (private) | `function setQmdStateDir(stateDir: string): void {` |
| 237 | fn | seedQmdSessionTranscript | (private) | `async function seedQmdSessionTranscript(params: {` |
| 282 | fn | restoreQmdStateDir | (private) | `function restoreQmdStateDir(): void {` |
| 301 | fn | seedMemoryEmbeddingProviders | (private) | `function seedMemoryEmbeddingProviders(): void {` |
| 317 | fn | trackManager | (private) | `function trackManager<T extends QmdMemoryManage...` |
| 324 | fn | requireValue | (private) | `function requireValue<T>(value: T | null | unde...` |
| 331 | fn | requireArgAfter | (private) | `function requireArgAfter(args: readonly string[...` |
| 339 | fn | mockMessages | (private) | `function mockMessages(mock: Mock): string[] {` |
| 343 | fn | qmdCommandCalls | (private) | `function qmdCommandCalls(): string[][] {` |
| 347 | fn | countQmdCommand | (private) | `function countQmdCommand(predicate: (args: stri...` |
| 351 | fn | expectMockMessageContains | (private) | `function expectMockMessageContains(mock: Mock, ...` |
| 355 | fn | expectMockMessageNotContains | (private) | `function expectMockMessageNotContains(mock: Moc...` |
| 403 | fn | execute | (private) | `const execute = async () => {` |
| 567 | fn | isSearchCommand | (private) | `const isSearchCommand = (event: string) =>` |
| 804 | fn | isCombinedSearch | (private) | `const isCombinedSearch = (args: string[]) =>` |
| 865 | fn | expectPathMissing | (private) | `async function expectPathMissing(targetPath: st...` |
| 875 | fn | qmdIndexConfigPath | (private) | `function qmdIndexConfigPath(selectedAgentId = a...` |
| 879 | fn | createManager | (private) | `async function createManager(params?: {` |
| 4655 | fn | searchWithLimits | (private) | `const searchWithLimits = async (limits: {` |
| 5045 | fn | commandClient | (private) | `const commandClient = (` |
| 5241 | fn | normalizePath | (private) | `const normalizePath = (value?: string) => value...` |
| 6538 | fn | isAllowed | (private) | `const isAllowed = (key?: string) =>` |
| 7413 | fn | db | (private) | `const db = (manager as unknown as { ensureDb: (...` |
| 7913 | fn | createDeferred | (private) | `function createDeferred<T>() {` |
