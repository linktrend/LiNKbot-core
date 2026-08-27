# test/scripts/release-telegram-candidate-archive.test.ts

[← Back to Module](../modules/test-scripts/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1103
- **Language:** TypeScript
- **Symbols:** 15
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 31 | fn | makeTempDir | (private) | `function makeTempDir(): string {` |
| 37 | fn | runHelper | (private) | `function runHelper(args: string[]) {` |
| 44 | fn | expectSuccess | (private) | `function expectSuccess(args: string[]) {` |
| 50 | fn | expectFailure | (private) | `function expectFailure(args: string[], message:...` |
| 57 | fn | compressTar | (private) | `function compressTar(tarPath: string): string {` |
| 66 | fn | makeCompressedArchive | (private) | `function makeCompressedArchive(root: string, fi...` |
| 82 | fn | makeDepthFirstProducerArchive | (private) | `function makeDepthFirstProducerArchive(root: st...` |
| 121 | fn | makeDeclaredExtensionArchive | (private) | `function makeDeclaredExtensionArchive(` |
| 150 | fn | makeLongMetadataArchive | (private) | `function makeLongMetadataArchive(` |
| 190 | fn | makeDeepSortedArchive | (private) | `function makeDeepSortedArchive(root: string, pa...` |
| 228 | fn | makeCumulativePaxArchive | (private) | `function makeCumulativePaxArchive(root: string)...` |
| 257 | fn | makeValidHardlinkArchive | (private) | `function makeValidHardlinkArchive(root: string)...` |
| 291 | fn | makeManyMemberTar | (private) | `function makeManyMemberTar(root: string, member...` |
| 336 | fn | makePaxHeavyTar | (private) | `function makePaxHeavyTar(root: string, memberCo...` |
| 371 | fn | probeTarInfoCache | (private) | `function probeTarInfoCache(tarPath: string) {` |
