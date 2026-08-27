# test/scripts/crabbox-wrapper.test.ts

[← Back to Module](../modules/test-scripts/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 4995
- **Language:** TypeScript
- **Symbols:** 24
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 42 | fn | makeFakeCrabbox | (private) | `function makeFakeCrabbox(helpText: string): str...` |
| 54 | fn | writeFakeCrabbox | (private) | `function writeFakeCrabbox(binDir: string, helpT...` |
| 279 | fn | makeSlowVersionCrabbox | (private) | `function makeSlowVersionCrabbox(helpText: strin...` |
| 299 | fn | makeSlowHelpCrabbox | (private) | `function makeSlowHelpCrabbox(helpText: string, ...` |
| 322 | fn | testTimingPreload | (private) | `function testTimingPreload(options: { clockScal...` |
| 354 | fn | windowsNodeCmdShim | (private) | `function windowsNodeCmdShim(target: string): st...` |
| 377 | fn | shellSingleQuote | (private) | `function shellSingleQuote(value: string): string {` |
| 381 | fn | makeFakeGit | (private) | `function makeFakeGit(` |
| 503 | fn | shellArgListCondition | (private) | `function shellArgListCondition(args: string[]):...` |
| 511 | fn | runWrapper | (private) | `function runWrapper(helpText: string, args: str...` |
| 526 | type | WrapperOptions | (private) | - |
| 536 | fn | spawnWrapper | (private) | `function spawnWrapper(helpText: string, args: s...` |
| 549 | fn | wrapperEnv | (private) | `function wrapperEnv(helpText: string, options: ...` |
| 573 | fn | parseFakeCrabboxOutput | (private) | `function parseFakeCrabboxOutput(result: ReturnT...` |
| 581 | fn | readField | (private) | `const readField = () => {` |
| 603 | fn | normalizeShellLineEndings | (private) | `function normalizeShellLineEndings(value: strin...` |
| 607 | fn | waitForCondition | (private) | `async function waitForCondition(predicate: () =...` |
| 618 | fn | waitForProcessExit | (private) | `async function waitForProcessExit(` |
| 633 | fn | isProcessAlive | (private) | `function isProcessAlive(pid: number): boolean {` |
| 642 | fn | runSignalCleanupProof | (private) | `async function runSignalCleanupProof(sendSignal...` |
| 681 | fn | testCrabboxConfigDir | (private) | `function testCrabboxConfigDir(home: string): st...` |
| 691 | fn | testHomeEnv | (private) | `function testHomeEnv(home: string): Record<stri...` |
| 700 | fn | expectGroupedShellCommand | (private) | `function expectGroupedShellCommand(remoteComman...` |
| 713 | fn | expectChangedGateGitBootstrap | (private) | `function expectChangedGateGitBootstrap(remoteCo...` |
