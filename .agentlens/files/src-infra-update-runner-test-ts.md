# src/infra/update-runner.test.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 3306
- **Language:** TypeScript
- **Symbols:** 55
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 30 | type | CommandResponse | (private) | - |
| 31 | type | CommandResult | (private) | - |
| 35 | fn | toCommandResult | (private) | `function toCommandResult(response?: CommandResp...` |
| 43 | fn | createRunner | (private) | `function createRunner(responses: Record<string,...` |
| 45 | fn | runner | (private) | `const runner = async (argv: string[]) => {` |
| 53 | fn | isProcessAlive | (private) | `function isProcessAlive(pid: number): boolean {` |
| 62 | fn | waitForProcessExit | (private) | `async function waitForProcessExit(pid: number, ...` |
| 129 | fn | createStableTagRunner | (private) | `async function createStableTagRunner(params: {` |
| 140 | fn | runCommand | (private) | `const runCommand = async (argv: string[]) => {` |
| 188 | fn | setupGitCheckout | (private) | `async function setupGitCheckout(options?: { pac...` |
| 273 | fn | runCommand | (private) | `const runCommand = async (argv: string[]) => {` |
| 303 | fn | setupUiIndex | (private) | `async function setupUiIndex() {` |
| 310 | fn | setupGitPackageManagerFixture | (private) | `async function setupGitPackageManagerFixture(pa...` |
| 315 | fn | writePreflightPackageManagerFixture | (private) | `async function writePreflightPackageManagerFixt...` |
| 324 | fn | writePreflightPackageManagerFixtureFromWorktreeAdd | (private) | `async function writePreflightPackageManagerFixt...` |
| 336 | fn | buildStableTagResponses | (private) | `function buildStableTagResponses(` |
| 351 | fn | buildGitWorktreeProbeResponses | (private) | `function buildGitWorktreeProbeResponses(options...` |
| 362 | fn | createGitInstallRunner | (private) | `function createGitInstallRunner(params: {` |
| 382 | fn | runCommand | (private) | `const runCommand = async (` |
| 398 | fn | removeControlUiAssets | (private) | `async function removeControlUiAssets() {` |
| 402 | fn | runWithCommand | (private) | `async function runWithCommand(` |
| 441 | fn | runWithRunner | (private) | `async function runWithRunner(` |
| 460 | fn | seedGlobalPackageRoot | (private) | `async function seedGlobalPackageRoot(pkgRoot: s...` |
| 471 | fn | writeGlobalPackageVersion | (private) | `async function writeGlobalPackageVersion(pkgRoo...` |
| 482 | fn | writeBundledRuntimeSidecars | (private) | `async function writeBundledRuntimeSidecars(pkgR...` |
| 490 | fn | writeGatewayEntrypoint | (private) | `async function writeGatewayEntrypoint(pkgRoot: ...` |
| 498 | fn | createGlobalPackageFixture | (private) | `async function createGlobalPackageFixture(rootD...` |
| 505 | type | InstallCommandExpectation | (private) | - |
| 508 | fn | normalizeNpmFreshnessArgs | (private) | `const normalizeNpmFreshnessArgs = (argv: string...` |
| 511 | fn | installCommandMatches | (private) | `const installCommandMatches = (expected: Instal...` |
| 518 | fn | npmGlobalInstallCommand | (private) | `const npmGlobalInstallCommand = (spec: string, ...` |
| 534 | fn | createGlobalNpmUpdateRunner | (private) | `function createGlobalNpmUpdateRunner(params: {` |
| 749 | fn | runCommand | (private) | `const runCommand = async (argv: string[]) => {` |
| 859 | fn | runCommand | (private) | `const runCommand = async (argv: string[]) => {` |
| 1191 | fn | runCommand | (private) | `const runCommand = async (` |
| 1285 | fn | runCommand | (private) | `const runCommand = async (` |
| 1376 | fn | writeCandidatePackageManager | (private) | `const writeCandidatePackageManager = async (key...` |
| 1384 | fn | runCommand | (private) | `const runCommand = async (argv: string[]) => {` |
| 1469 | fn | writeCandidatePackageManager | (private) | `const writeCandidatePackageManager = async (key...` |
| 1477 | fn | runCommand | (private) | `const runCommand = async (argv: string[]) => {` |
| 1709 | fn | runCommand | (private) | `const runCommand = async (` |
| 1825 | fn | runCommand | (private) | `const runCommand = async (` |
| 1923 | fn | runCommand | (private) | `const runCommand = async (` |
| 2038 | fn | runCommand | (private) | `const runCommand = async (` |
| 2137 | fn | runCommand | (private) | `const runCommand = async (` |
| 2232 | fn | runCommand | (private) | `const runCommand = async (` |
| 2323 | fn | runCommand | (private) | `const runCommand = async (` |
| 2404 | fn | runCommand | (private) | `const runCommand = async (` |
| 2488 | fn | runCommand | (private) | `const runCommand = async (` |
| 2566 | fn | runCommand | (private) | `const runCommand = async (` |
| 2673 | fn | runNpmGlobalUpdateCase | (private) | `async function runNpmGlobalUpdateCase(params: {` |
| 2704 | fn | createGlobalInstallHarness | (private) | `const createGlobalInstallHarness = (params: {` |
| 2717 | fn | runCommand | (private) | `const runCommand = async (argv: string[], optio...` |
| 2853 | fn | runCommandWithDoctor | (private) | `const runCommandWithDoctor = async (argv: strin...` |
| 2896 | fn | runCommandWithDoctor | (private) | `const runCommandWithDoctor = async (argv: strin...` |
