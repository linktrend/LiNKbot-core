# src/cli/mcp-cli.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1410
- **Language:** TypeScript
- **Symbols:** 33
- **Public symbols:** 1

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 43 | fn | fail | (private) | `function fail(message: string): never {` |
| 49 | fn | printJson | (private) | `function printJson(value: unknown): void {` |
| 53 | fn | parseCsvList | (private) | `function parseCsvList(value: string | undefined...` |
| 64 | fn | collectOption | (private) | `function collectOption(value: string, previous:...` |
| 68 | fn | parseKeyValueEntries | (private) | `function parseKeyValueEntries(values: readonly ...` |
| 85 | fn | parsePositiveNumberOption | (private) | `function parsePositiveNumberOption(value: strin...` |
| 96 | fn | parseOAuthConfig | (private) | `function parseOAuthConfig(opts: {` |
| 113 | fn | clearMcpOAuthCredentialsForConfiguredServer | (private) | `async function clearMcpOAuthCredentialsForConfi...` |
| 123 | fn | hasOAuthAuth | (private) | `function hasOAuthAuth(server: unknown): boolean {` |
| 129 | fn | clearStaleMcpOAuthCredentialsForReplacement | (private) | `async function clearStaleMcpOAuthCredentialsFor...` |
| 154 | fn | setOptionalField | (private) | `function setOptionalField(target: Record<string...` |
| 160 | type | McpStatusEntry | (private) | - |
| 176 | type | McpDoctorIssue | (private) | - |
| 181 | type | McpDoctorServerResult | (private) | - |
| 200 | fn | asRecord | (private) | `function asRecord(value: unknown): Record<strin...` |
| 206 | fn | issue | (private) | `function issue(level: McpDoctorIssue["level"], ...` |
| 210 | fn | hasSensitiveKey | (private) | `function hasSensitiveKey(name: string): boolean {` |
| 214 | fn | hasLiteralSensitiveValue | (private) | `function hasLiteralSensitiveValue(value: unknow...` |
| 218 | fn | resolveConfiguredPath | (private) | `function resolveConfiguredPath(filePath: string...` |
| 226 | fn | fileExists | (private) | `async function fileExists(filePath: string): Pr...` |
| 235 | fn | directoryExists | (private) | `async function directoryExists(filePath: string...` |
| 244 | fn | isExecutable | (private) | `async function isExecutable(filePath: string): ...` |
| 253 | fn | executableCandidates | (private) | `function executableCandidates(command: string):...` |
| 267 | fn | resolveEffectivePath | (private) | `function resolveEffectivePath(env: Record<strin...` |
| 280 | fn | commandExists | (private) | `async function commandExists(` |
| 306 | fn | collectMcpDoctorIssues | (private) | `async function collectMcpDoctorIssues(params: {` |
| 417 | fn | probeMcpServerIssue | (private) | `async function probeMcpServerIssue(params: {` |
| 448 | fn | buildMcpStatusEntries | (private) | `async function buildMcpStatusEntries(` |
| 483 | fn | formatMcpProbeResult | (private) | `function formatMcpProbeResult(` |
| 537 | fn | buildMcpProbeConfig | (private) | `function buildMcpProbeConfig(params: {` |
| 552 | fn | applyMcpProbeInitializeTimeout | (private) | `function applyMcpProbeInitializeTimeout(server:...` |
| 566 | fn | probeMcpServersOrFail | (private) | `async function probeMcpServersOrFail(params: {` |
| 603 | fn | registerMcpCli | pub | `export function registerMcpCli(program: Command) {` |

## Public API

### `registerMcpCli`

```
export function registerMcpCli(program: Command) {
```

**Line:** 603 | **Kind:** fn
