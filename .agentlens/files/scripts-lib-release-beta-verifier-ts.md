# scripts/lib/release-beta-verifier.ts

[← Back to Module](../modules/root/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1455
- **Language:** TypeScript
- **Symbols:** 48
- **Public symbols:** 10

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 15 | type | JsonRecord | (private) | - |
| 17 | type | ReleaseVerifyBetaArgs | (private) | - |
| 44 | type | NpmViewFields | (private) | - |
| 51 | type | FetchWithRetryResult | (private) | - |
| 56 | type | WorkflowRunSummary | (private) | - |
| 95 | fn | compareCodeUnits | (private) | `function compareCodeUnits(left: string, right: ...` |
| 99 | fn | isRecord | (private) | `function isRecord(value: unknown): value is Jso...` |
| 103 | fn | readString | (private) | `function readString(value: unknown): string | u...` |
| 107 | fn | requireString | (private) | `function requireString(value: unknown, label: s...` |
| 115 | fn | readTrustedClawHubToolchainIdentity | (private) | `function readTrustedClawHubToolchainIdentity(): {` |
| 144 | fn | runCommand | (private) | `function runCommand(command: string, args: stri...` |
| 152 | fn | runCommandInherited | (private) | `function runCommandInherited(command: string, a...` |
| 158 | fn | runNpmViewWithRetry | pub | `export async function runNpmViewWithRetry(` |
| 190 | fn | parseJson | (private) | `function parseJson(raw: string, label: string):...` |
| 199 | fn | parseNpmViewFields | pub | `export function parseNpmViewFields(raw: string,...` |
| 222 | fn | parseReleaseVerifyBetaArgs | pub | `export function parseReleaseVerifyBetaArgs(argv...` |
| 256 | fn | next | (private) | `const next = () => {` |
| 361 | fn | resolveOpenClawNpmPostpublishVerifier | pub | `export function resolveOpenClawNpmPostpublishVe...` |
| 372 | fn | fetchWithRetry | (private) | `async function fetchWithRetry(` |
| 403 | fn | cancelResponseBody | (private) | `async function cancelResponseBody(response: Res...` |
| 407 | fn | fetchJsonWithRetry | pub | `export async function fetchJsonWithRetry(` |
| 469 | fn | readBoundedJsonResponse | pub | `export async function readBoundedJsonResponse(` |
| 478 | fn | fetchStatusWithRetry | pub | `export async function fetchStatusWithRetry(url:...` |
| 487 | fn | verifyNpmPackage | (private) | `async function verifyNpmPackage(` |
| 521 | fn | readClawHubTags | (private) | `function readClawHubTags(detail: unknown): Reco...` |
| 536 | fn | verifyClawHubPackage | (private) | `async function verifyClawHubPackage(params: {` |
| 568 | fn | verifyGitHubRelease | (private) | `function verifyGitHubRelease(params: ReleaseVer...` |
| 593 | fn | verifyWorkflowRun | (private) | `function verifyWorkflowRun(params: {` |
| 673 | fn | requirePositiveIntegerString | (private) | `function requirePositiveIntegerString(value: un...` |
| 684 | fn | requirePositiveSafeInteger | (private) | `function requirePositiveSafeInteger(value: unkn...` |
| 693 | fn | requireCommitSha | (private) | `function requireCommitSha(value: unknown, label...` |
| 701 | fn | requireSha256 | (private) | `function requireSha256(value: unknown, label: s...` |
| 709 | fn | requireArtifactDigest | (private) | `function requireArtifactDigest(value: unknown, ...` |
| 718 | fn | requireStringArray | (private) | `function requireStringArray(value: unknown, lab...` |
| 728 | fn | requireArtifactWorkflowRun | (private) | `function requireArtifactWorkflowRun(` |
| 754 | fn | requireClawHubBootstrapRunBinding | (private) | `function requireClawHubBootstrapRunBinding(` |
| 803 | fn | requireClawHubReadbackArtifactBinding | (private) | `function requireClawHubReadbackArtifactBinding(` |
| 838 | fn | validateBootstrapPackageEvidence | (private) | `function validateBootstrapPackageEvidence(` |
| 902 | fn | validateClawHubBootstrapEvidence | pub | `export function validateClawHubBootstrapEvidenc...` |
| 1084 | fn | readGitHubApiJson | (private) | `function readGitHubApiJson(repo: string, endpoi...` |
| 1088 | fn | readGitHubToken | (private) | `function readGitHubToken(): string {` |
| 1095 | fn | decodeUtf8Exact | (private) | `function decodeUtf8Exact(bytes: Uint8Array, lab...` |
| 1108 | fn | downloadClawHubBootstrapReadback | pub | `export async function downloadClawHubBootstrapR...` |
| 1169 | fn | verifyClawHubBootstrapRun | (private) | `async function verifyClawHubBootstrapRun(params: {` |
| 1234 | fn | readRootPackageVersion | (private) | `function readRootPackageVersion(rootDir: string...` |
| 1245 | fn | formatDuration | (private) | `function formatDuration(seconds: number | undef...` |
| 1254 | fn | assertSelectedPackagesResolved | (private) | `function assertSelectedPackagesResolved(params: {` |
| 1269 | fn | verifyBetaRelease | pub | `export async function verifyBetaRelease(` |

## Public API

### `runNpmViewWithRetry`

```
export async function runNpmViewWithRetry(
```

**Line:** 158 | **Kind:** fn

### `parseNpmViewFields`

```
export function parseNpmViewFields(raw: string, distTag: string): NpmViewFields {
```

**Line:** 199 | **Kind:** fn

### `parseReleaseVerifyBetaArgs`

```
export function parseReleaseVerifyBetaArgs(argv: string[]): ReleaseVerifyBetaArgs {
```

**Line:** 222 | **Kind:** fn

### `resolveOpenClawNpmPostpublishVerifier`

```
export function resolveOpenClawNpmPostpublishVerifier(rootDir: string, override?: string): string {
```

**Line:** 361 | **Kind:** fn

### `fetchJsonWithRetry`

```
export async function fetchJsonWithRetry(
```

**Line:** 407 | **Kind:** fn

### `readBoundedJsonResponse`

```
export async function readBoundedJsonResponse(
```

**Line:** 469 | **Kind:** fn

### `fetchStatusWithRetry`

```
export async function fetchStatusWithRetry(url: string, method: "GET" | "HEAD"): Promise<number> {
```

**Line:** 478 | **Kind:** fn

### `validateClawHubBootstrapEvidence`

```
export function validateClawHubBootstrapEvidence(params: {
```

**Line:** 902 | **Kind:** fn

### `downloadClawHubBootstrapReadback`

```
export async function downloadClawHubBootstrapReadback(params: {
```

**Line:** 1108 | **Kind:** fn

### `verifyBetaRelease`

```
export async function verifyBetaRelease(
```

**Line:** 1269 | **Kind:** fn
