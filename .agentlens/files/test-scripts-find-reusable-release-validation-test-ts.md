# test/scripts/find-reusable-release-validation.test.ts

[← Back to Module](../modules/test-scripts/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1003
- **Language:** TypeScript
- **Symbols:** 15
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 28 | interface | ParentTuple | (private) | - |
| 55 | interface | ChildTuple | (private) | - |
| 74 | interface | NormalizedEvidence | (private) | - |
| 106 | interface | RunFixture | (private) | - |
| 120 | fn | git | (private) | `function git(cwd: string, args: string[]): stri...` |
| 128 | fn | commitFile | (private) | `function commitFile(repo: string, filePath: str...` |
| 135 | fn | plistFor | (private) | `function plistFor(shortVersion: string, buildVe...` |
| 150 | fn | createRepo | (private) | `function createRepo(options: { plistBuildVersio...` |
| 174 | fn | cloneHead | (private) | `function cloneHead(origin: string, dirs = tempD...` |
| 182 | fn | getSharedRepo | (private) | `function getSharedRepo(): { clone: string; prio...` |
| 191 | fn | normalizedEvidence | (private) | `function normalizedEvidence(options: {` |
| 397 | fn | fixtureName | (private) | `function fixtureName(fixtures: string, endpoint...` |
| 401 | fn | setUpFixtures | (private) | `function setUpFixtures(runs: RunFixture[]): {` |
| 432 | fn | runResolver | (private) | `function runResolver(args: {` |
| 510 | fn | parseOutput | (private) | `function parseOutput(output: string): Record<st...` |
