# extensions/qa-lab/src/mantis/slack-desktop-smoke.runtime.ts

[← Back to Module](../modules/extensions-qa-lab-src-mantis/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1589
- **Language:** TypeScript
- **Symbols:** 38
- **Public symbols:** 3

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 27 | type | MantisSlackDesktopSmokeOptions | pub | - |
| 56 | type | MantisSlackDesktopHydrateMode | pub | - |
| 58 | type | MantisSlackDesktopSmokeResult | (private) | - |
| 68 | type | SlackGatewayCredentialPayload | (private) | - |
| 74 | type | SlackGatewayCredentialLease | (private) | - |
| 77 | type | SlackGatewayCredentialHeartbeat | (private) | - |
| 79 | type | MantisSlackDesktopSmokeSummary | (private) | - |
| 109 | type | SlackDesktopRemoteMetadata | (private) | - |
| 117 | type | MantisApprovalCheckpointState | (private) | - |
| 119 | type | MantisApprovalCheckpointScreenshot | (private) | - |
| 127 | type | MantisApprovalCheckpointArtifacts | (private) | - |
| 179 | fn | normalizeHydrateMode | (private) | `function normalizeHydrateMode(` |
| 192 | fn | defaultOutputDir | (private) | `function defaultOutputDir(repoRoot: string, sta...` |
| 197 | fn | resolveScenarioIds | (private) | `function resolveScenarioIds(params: {` |
| 227 | fn | assertNonEmptyFile | (private) | `async function assertNonEmptyFile(filePath: str...` |
| 239 | fn | readJsonObject | (private) | `async function readJsonObject(filePath: string,...` |
| 253 | fn | assertApprovalCheckpointBaseJson | (private) | `function assertApprovalCheckpointBaseJson(param...` |
| 271 | fn | assertApprovalCheckpointJson | (private) | `function assertApprovalCheckpointJson(params: {` |
| 313 | fn | assertApprovalCheckpointAckJson | (private) | `function assertApprovalCheckpointAckJson(params: {` |
| 330 | fn | collectApprovalCheckpointArtifacts | (private) | `async function collectApprovalCheckpointArtifac...` |
| 381 | fn | readRemoteMetadata | (private) | `async function readRemoteMetadata(` |
| 406 | fn | buildCrabboxEnv | (private) | `function buildCrabboxEnv(env: NodeJS.ProcessEnv...` |
| 440 | fn | resolveSlackGatewayEnvPayload | (private) | `function resolveSlackGatewayEnvPayload(env: Nod...` |
| 456 | fn | parseSlackGatewayCredentialPayload | (private) | `function parseSlackGatewayCredentialPayload(pay...` |
| 479 | fn | prepareGatewayCredentialEnv | (private) | `async function prepareGatewayCredentialEnv(para...` |
| 520 | fn | renderRemoteScript | (private) | `function renderRemoteScript(params: {` |
| 901 | fn | delay | (private) | `const delay = (ms) => new Promise((resolve) => ...` |
| 902 | fn | htmlEscape | (private) | `const htmlEscape = (value) =>` |
| 910 | fn | readJson | (private) | `async function readJson(filePath) {` |
| 914 | fn | waitForCheckpoint | (private) | `async function waitForCheckpoint(filePath) {` |
| 930 | fn | renderCheckpointHtml | (private) | `function renderCheckpointHtml(checkpoint) {` |
| 995 | fn | captureScreenshot | (private) | `async function captureScreenshot(screenshotPath...` |
| 1030 | fn | writeJson | (private) | `async function writeJson(filePath, value) {` |
| 1188 | fn | renderReport | (private) | `function renderReport(summary: MantisSlackDeskt...` |
| 1242 | fn | copyRemoteArtifacts | (private) | `async function copyRemoteArtifacts(params: {` |
| 1280 | fn | runMantisSlackDesktopSmoke | pub | `export async function runMantisSlackDesktopSmoke(` |
| 1284 | fn | startedAt | (private) | `const startedAt = (opts.now ?? (() => new Date(...` |
| 1586 | fn | toErrorObject | (private) | `function toErrorObject(error: unknown): Error {` |

## Public API

### `runMantisSlackDesktopSmoke`

```
export async function runMantisSlackDesktopSmoke(
```

**Line:** 1280 | **Kind:** fn
