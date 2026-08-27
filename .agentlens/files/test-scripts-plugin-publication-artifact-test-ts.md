# test/scripts/plugin-publication-artifact.test.ts

[← Back to Module](../modules/test-scripts/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1783
- **Language:** TypeScript
- **Symbols:** 24
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 48 | fn | tempDir | (private) | `function tempDir(): string {` |
| 60 | fn | sha256 | (private) | `function sha256(bytes: Buffer): string {` |
| 64 | fn | writeTarString | (private) | `function writeTarString(header: Buffer, offset:...` |
| 72 | fn | writeTarOctal | (private) | `function writeTarOctal(header: Buffer, offset: ...` |
| 80 | type | TarEntry | (private) | - |
| 89 | fn | tarEntry | (private) | `function tarEntry(entry: TarEntry): Buffer {` |
| 124 | fn | mutateTarEntryHeader | (private) | `function mutateTarEntryHeader(` |
| 143 | fn | createTarball | (private) | `function createTarball(entries: TarEntry[]): Bu...` |
| 147 | fn | createTarballFromParts | (private) | `function createTarballFromParts(parts: Buffer[]...` |
| 151 | fn | paxRecord | (private) | `function paxRecord(key: string, value: string):...` |
| 164 | fn | crc32 | (private) | `function crc32(bytes: Buffer): number {` |
| 175 | type | ZipFile | (private) | - |
| 194 | fn | createZip | (private) | `function createZip(files: ZipFile[]): Buffer {` |
| 268 | fn | inspectTestZip | (private) | `function inspectTestZip(` |
| 291 | fn | metaPackageJson | (private) | `function metaPackageJson(markerPath: string, ov...` |
| 314 | fn | publicationParams | (private) | `function publicationParams(artifactDir: string,...` |
| 337 | fn | createFixture | (private) | `function createFixture(` |
| 406 | fn | writeArtifactMetadata | (private) | `function writeArtifactMetadata(metadataPath: st...` |
| 423 | fn | writeWorkflowRunMetadata | (private) | `function writeWorkflowRunMetadata(workflowRunPa...` |
| 441 | fn | replaceArtifactZip | (private) | `function replaceArtifactZip(fixture: ReturnType...` |
| 448 | fn | verifyFixture | (private) | `function verifyFixture(` |
| 796 | fn | fetchImpl | (private) | `const fetchImpl = (async (input: string | URL |...` |
| 867 | fn | downloadForAttempts | (private) | `async function downloadForAttempts(` |
| 897 | fn | fetchImpl | (private) | `const fetchImpl = (async (input: string | URL |...` |
