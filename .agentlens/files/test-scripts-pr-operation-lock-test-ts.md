# test/scripts/pr-operation-lock.test.ts

[← Back to Module](../modules/test-scripts/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 2221
- **Language:** TypeScript
- **Symbols:** 31
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 43 | fn | createProcessGroupTimingPreload | (private) | `function createProcessGroupTimingPreload() {` |
| 60 | fn | spawnDetached | (private) | `function spawnDetached(command: string, args: r...` |
| 69 | fn | createTemplateRepo | (private) | `function createTemplateRepo() {` |
| 88 | fn | createRepo | (private) | `function createRepo(nestedName?: string) {` |
| 99 | fn | bashSource | (private) | `function bashSource(repoDir: string, supervised...` |
| 112 | fn | writeOperationFixture | (private) | `function writeOperationFixture(repoDir: string,...` |
| 122 | fn | installPrCliFixture | (private) | `function installPrCliFixture(repoDir: string) {` |
| 156 | fn | runSupervisedFixture | (private) | `async function runSupervisedFixture(` |
| 192 | fn | onClose | (private) | `const onClose = () => {` |
| 225 | fn | runLockShell | (private) | `function runLockShell(repoDir: string, commands...` |
| 234 | fn | spawnHolder | (private) | `function spawnHolder(repoDir: string, statusFil...` |
| 259 | fn | spawnCandidate | (private) | `function spawnCandidate(repoDir: string, status...` |
| 275 | fn | spawnHolderWithChild | (private) | `function spawnHolderWithChild(repoDir: string, ...` |
| 293 | fn | waitFor | (private) | `async function waitFor(predicate: () => boolean...` |
| 304 | fn | validProcessId | (private) | `function validProcessId(value: unknown): value ...` |
| 308 | fn | readProcessIdFile | (private) | `function readProcessIdFile(path: string) {` |
| 316 | fn | waitForProcessId | (private) | `async function waitForProcessId(path: string) {` |
| 329 | fn | childStatus | (private) | `function childStatus(child: ChildProcess) {` |
| 333 | fn | waitForExit | (private) | `async function waitForExit(child: ChildProcess,...` |
| 339 | fn | onExit | (private) | `const onExit = () => {` |
| 356 | fn | stopChild | (private) | `async function stopChild(child: ChildProcess, s...` |
| 364 | fn | stopChildLeader | (private) | `async function stopChildLeader(child: ChildProc...` |
| 372 | fn | cleanupChildren | (private) | `async function cleanupChildren(...children: Arr...` |
| 392 | fn | signalTestChild | (private) | `function signalTestChild(child: ChildProcess, s...` |
| 407 | fn | cleanupProcessGroup | (private) | `async function cleanupProcessGroup(pgid: number) {` |
| 425 | fn | readOperationProcessGroup | (private) | `function readOperationProcessGroup(repoDir: str...` |
| 441 | fn | cleanupController | (private) | `async function cleanupController(` |
| 460 | fn | refOid | (private) | `function refOid(repoDir: string, ref = lockRef) {` |
| 464 | fn | refExists | (private) | `function refExists(repoDir: string, ref = lockR...` |
| 472 | fn | processGroupExists | (private) | `function processGroupExists(pgid: number) {` |
| 494 | fn | killProcessGroup | (private) | `function killProcessGroup(pgid: number, signal:...` |
