# src/plugins/clawhub.test.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 3260
- **Language:** TypeScript
- **Symbols:** 25
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 61 | type | ClawHubResolvedArtifact | (private) | - |
| 62 | type | ClawHubRiskAcknowledgementRequest | (private) | - |
| 73 | fn | sha256Hex | (private) | `function sha256Hex(value: string): string {` |
| 77 | fn | createClawHubArchive | (private) | `async function createClawHubArchive(entries: Re...` |
| 93 | fn | expectClawHubInstallError | (private) | `async function expectClawHubInstallError(params: {` |
| 109 | fn | createLoggerSpies | (private) | `function createLoggerSpies() {` |
| 116 | fn | mockCommunityClawHubPackageDetail | (private) | `function mockCommunityClawHubPackageDetail() {` |
| 134 | fn | mockOfficialClawHubPackageDetail | (private) | `function mockOfficialClawHubPackageDetail(overr...` |
| 153 | fn | expectClawHubInstallFlow | (private) | `function expectClawHubInstallFlow(params: {` |
| 174 | fn | expectSuccessfulClawHubInstall | (private) | `function expectSuccessfulClawHubInstall(` |
| 188 | type | MockWithCalls | (private) | - |
| 194 | type | PackageLookupCall | (private) | - |
| 201 | type | ArchiveInstallCall | (private) | - |
| 213 | type | InstallSuccess | (private) | - |
| 222 | type | InstallFailure | (private) | - |
| 230 | fn | mockCallArg | (private) | `function mockCallArg(mock: MockWithCalls, callI...` |
| 241 | fn | packageDetailCall | (private) | `function packageDetailCall(callIndex = 0): Pack...` |
| 245 | fn | packageVersionCall | (private) | `function packageVersionCall(callIndex = 0): Pac...` |
| 249 | fn | packageArtifactCall | (private) | `function packageArtifactCall(callIndex = 0): Pa...` |
| 253 | fn | packageSecurityCall | (private) | `function packageSecurityCall(callIndex = 0): Pa...` |
| 257 | fn | archiveDownloadCall | (private) | `function archiveDownloadCall(callIndex = 0): Pa...` |
| 261 | fn | archiveInstallCall | (private) | `function archiveInstallCall(callIndex = 0): Arc...` |
| 265 | fn | expectInstallSuccess | (private) | `function expectInstallSuccess(result: unknown):...` |
| 270 | fn | expectInstallFailure | (private) | `function expectInstallFailure(result: unknown):...` |
| 275 | fn | expectInstallFailureFields | (private) | `function expectInstallFailureFields(` |
