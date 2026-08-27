# src/gateway/server-methods/agents-mutate.test.ts

[← Back to Module](../modules/src-gateway-server-methods/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1543
- **Language:** TypeScript
- **Symbols:** 25
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 281 | fn | makeRootForTest | (private) | `function makeRootForTest(overrides?: {` |
| 309 | fn | makeCall | (private) | `function makeCall(method: keyof typeof agentsHa...` |
| 323 | fn | expectRecordFields | (private) | `function expectRecordFields(record: unknown, ex...` |
| 334 | fn | mockCallArg | (private) | `function mockCallArg(mock: ReturnType<typeof vi...` |
| 342 | fn | expectRespondOk | (private) | `function expectRespondOk(respond: ReturnType<ty...` |
| 349 | fn | expectRespondErrorContaining | (private) | `function expectRespondErrorContaining(respond: ...` |
| 357 | fn | firstRespondResult | (private) | `function firstRespondResult(respond: ReturnType...` |
| 361 | fn | expectStringContaining | (private) | `function expectStringContaining(value: unknown,...` |
| 366 | fn | expectStringNotContaining | (private) | `function expectStringNotContaining(value: unkno...` |
| 370 | fn | createEnoentError | (private) | `function createEnoentError() {` |
| 376 | fn | createErrnoError | (private) | `function createErrnoError(code: string) {` |
| 382 | fn | makeFileStat | (private) | `function makeFileStat(params?: {` |
| 400 | type | MockIdentity | (private) | - |
| 407 | type | MockAgentEntry | (private) | - |
| 416 | type | MockConfig | (private) | - |
| 422 | fn | getAgentList | (private) | `function getAgentList(cfg: unknown): MockAgentE...` |
| 428 | fn | mergeAgentConfig | (private) | `function mergeAgentConfig(cfg: unknown, opts: u...` |
| 467 | fn | resolveMockWorkspaceDir | (private) | `function resolveMockWorkspaceDir(cfg: unknown, ...` |
| 475 | fn | mockWorkspaceStateRead | (private) | `function mockWorkspaceStateRead(params: {` |
| 504 | fn | listAgentFileNames | (private) | `async function listAgentFileNames(agentId = "ma...` |
| 513 | fn | expectNotFoundResponseAndNoWrite | (private) | `function expectNotFoundResponseAndNoWrite(respo...` |
| 518 | fn | expectUnsafeWorkspaceFile | (private) | `async function expectUnsafeWorkspaceFile(method...` |
| 1435 | fn | mockWorkspaceEscapeSymlink | (private) | `function mockWorkspaceEscapeSymlink() {` |
| 1450 | fn | mockInWorkspaceSymlinkAlias | (private) | `function mockInWorkspaceSymlinkAlias() {` |
| 1487 | fn | mockHardlinkedWorkspaceAlias | (private) | `function mockHardlinkedWorkspaceAlias() {` |
