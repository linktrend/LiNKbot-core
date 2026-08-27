# scripts/e2e/secret-provider-integrations.mjs

[← Back to Module](../modules/root/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 2198
- **Language:** JavaScript
- **Symbols:** 88
- **Public symbols:** 1

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 63 | fn | requireFullMatrix | (private) | `function requireFullMatrix() {` |
| 67 | fn | allowProofSkips | (private) | `function allowProofSkips() {` |
| 71 | fn | skipProof | (private) | `function skipProof(evidence) {` |
| 75 | fn | isSkippedProofResult | (private) | `function isSkippedProofResult(value) {` |
| 84 | fn | collectBlockingProofResults | (private) | `function collectBlockingProofResults(entries = ...` |
| 90 | fn | readPositiveInt | (private) | `function readPositiveInt(raw, fallback, label) {` |
| 105 | fn | clampSecretProofTimerTimeoutMs | (private) | `function clampSecretProofTimerTimeoutMs(valueMs) {` |
| 110 | fn | readPositiveTimerMs | (private) | `function readPositiveTimerMs(raw, fallback, lab...` |
| 114 | fn | remainingDeadlineMs | (private) | `function remainingDeadlineMs(started, timeoutMs) {` |
| 118 | fn | formatErrorMessage | (private) | `function formatErrorMessage(error) {` |
| 135 | fn | writeJson | (private) | `function writeJson(file, value) {` |
| 140 | fn | readJson | (private) | `function readJson(file) {` |
| 144 | fn | scrub | (private) | `function scrub(text) {` |
| 155 | fn | createOutputCapture | (private) | `function createOutputCapture(label, options = {...` |
| 199 | fn | parseJsonOutput | (private) | `function parseJsonOutput(stdout) {` |
| 211 | fn | isJsonRecordStart | (private) | `function isJsonRecordStart(text, index) {` |
| 224 | fn | parseJsonObjectsFromMixedOutput | (private) | `function parseJsonObjectsFromMixedOutput(text) {` |
| 276 | fn | resolveOpenClawRunner | (private) | `function resolveOpenClawRunner() {` |
| 295 | fn | makeEnv | (private) | `function makeEnv(name) {` |
| 337 | fn | cleanupEnv | (private) | `async function cleanupEnv(root, options = {}) {` |
| 359 | fn | runCommand | (private) | `function runCommand(command, args, options = {}) {` |
| 381 | fn | armForceKill | (private) | `const armForceKill = () => {` |
| 386 | fn | abort | (private) | `const abort = () => {` |
| 412 | fn | removeParentSignalHandlers | (private) | `const removeParentSignalHandlers = () => {` |
| 418 | fn | finishTerminatedTree | (private) | `const finishTerminatedTree = async () => {` |
| 430 | fn | handler | (private) | `const handler = () => {` |
| 516 | fn | runOpenClaw | (private) | `async function runOpenClaw(args, env, options =...` |
| 524 | fn | resolveOpenClawCommand | pub | `export async function resolveOpenClawCommand(ar...` |
| 555 | fn | allocatePort | (private) | `async function allocatePort() {` |
| 572 | fn | proofProviderConfig | (private) | `function proofProviderConfig() {` |
| 582 | fn | proofSecretRef | (private) | `function proofSecretRef(id) {` |
| 586 | fn | baseConfig | (private) | `function baseConfig(port, overrides = {}) {` |
| 619 | fn | writeProofPlugin | (private) | `function writeProofPlugin(envCtx, options = {}) {` |
| 663 | fn | resolveAuthProfilesPath | (private) | `function resolveAuthProfilesPath() {` |
| 675 | fn | readConfig | (private) | `function readConfig() {` |
| 683 | fn | readPersistedProfile | (private) | `function readPersistedProfile() {` |
| 698 | fn | loadSecretRuntime | (private) | `async function loadSecretRuntime() {` |
| 704 | fn | resolveProfileSecretRef | (private) | `async function resolveProfileSecretRef(ref) {` |
| 747 | fn | readStdin | (private) | `function readStdin() {` |
| 752 | fn | fail | (private) | `const fail = (error) => {` |
| 778 | fn | readStore | (private) | `function readStore() {` |
| 825 | fn | writeSecretStore | (private) | `function writeSecretStore(envCtx, values = {}) {` |
| 843 | fn | mutateStore | (private) | `function mutateStore(storePath, update) {` |
| 849 | fn | envWithout | (private) | `function envWithout(source, keys) {` |
| 857 | fn | serviceManagerEnv | (private) | `function serviceManagerEnv(source) {` |
| 868 | fn | startGateway | (private) | `async function startGateway(envCtx, port, token...` |
| 913 | fn | healthProbe | (private) | `const healthProbe = (async () => {` |
| 978 | fn | stopGateway | (private) | `async function stopGateway(child) {` |
| 994 | fn | finishTimedOutCommandProcessTree | (private) | `async function finishTimedOutCommandProcessTree...` |
| 1009 | fn | childHasExited | (private) | `function childHasExited(child) {` |
| 1013 | fn | processTreeIsAlive | (private) | `function processTreeIsAlive(child) {` |
| 1031 | fn | waitForProcessTreeExit | (private) | `async function waitForProcessTreeExit(child, ti...` |
| 1042 | fn | signalWindowsProcessTree | (private) | `function signalWindowsProcessTree(pid, signal, ...` |
| 1055 | fn | signalWindowsProcessTreeOrForce | (private) | `function signalWindowsProcessTreeOrForce(pid, s...` |
| 1062 | fn | terminateProcessTree | (private) | `function terminateProcessTree(child, signal, op...` |
| 1086 | fn | gatewayCall | (private) | `async function gatewayCall(env, port, token, me...` |
| 1121 | fn | expectGatewayCallOk | (private) | `async function expectGatewayCallOk(env, port, t...` |
| 1126 | fn | expectGatewayCallFails | (private) | `async function expectGatewayCallFails(env, port...` |
| 1134 | fn | expectReloadMayCloseForAuthChange | (private) | `async function expectReloadMayCloseForAuthChang...` |
| 1146 | fn | expectGatewayStartupFails | (private) | `async function expectGatewayStartupFails(envCtx...` |
| 1213 | fn | uninstallManagedGateway | (private) | `async function uninstallManagedGateway(env) {` |
| 1236 | fn | waitForManagedGatewayStatus | (private) | `async function waitForManagedGatewayStatus(env,...` |
| 1280 | fn | runWithProof | (private) | `async function runWithProof(name, description, ...` |
| 1307 | fn | withProofEnv | (private) | `async function withProofEnv(name, fn, values, p...` |
| 1318 | fn | p1StartupSucceeds | (private) | `async function p1StartupSucceeds() {` |
| 1357 | fn | p2StartupFailsClosed | (private) | `async function p2StartupFailsClosed() {` |
| 1370 | fn | p3ThroughP6StaticReloadAndCommandSnapshot | (private) | `async function p3ThroughP6StaticReloadAndComman...` |
| 1420 | fn | assertAllowedFailureCommandSucceeded | (private) | `function assertAllowedFailureCommandSucceeded(r...` |
| 1429 | fn | p7AuthProfileSecretRefPersistsAndResolves | (private) | `async function p7AuthProfileSecretRefPersistsAn...` |
| 1496 | fn | p8ManagedServiceEnvProof | (private) | `async function p8ManagedServiceEnvProof() {` |
| 1588 | fn | p9ProviderVariants | (private) | `async function p9ProviderVariants() {` |
| 1687 | fn | p10UntrustedPluginFailsClosed | (private) | `async function p10UntrustedPluginFailsClosed() {` |
| 1705 | fn | p11TimeoutFailClosedAndLkg | (private) | `async function p11TimeoutFailClosedAndLkg() {` |
| 1728 | fn | p12OpenAiLiveProof | (private) | `async function p12OpenAiLiveProof() {` |
| 1803 | fn | runPtySecretsConfigurePreset | (private) | `async function runPtySecretsConfigurePreset(env...` |
| 1819 | fn | clearKeyTimers | (private) | `const clearKeyTimers = () => {` |
| 1825 | fn | sendKeys | (private) | `const sendKeys = (keys) => {` |
| 1897 | fn | finishTimedOutPtyProcessTree | (private) | `async function finishTimedOutPtyProcessTree(` |
| 1915 | fn | ptyProcessTreeIsAlive | (private) | `function ptyProcessTreeIsAlive(child) {` |
| 1927 | fn | waitForPtyProcessTreeExit | (private) | `async function waitForPtyProcessTreeExit(child,...` |
| 1938 | fn | signalPtyProcessTree | (private) | `function signalPtyProcessTree(child, signal, op...` |
| 1958 | fn | p13SecretsConfigurePreset | (private) | `async function p13SecretsConfigurePreset() {` |
| 1974 | fn | p14ConfigPatchValidation | (private) | `async function p14ConfigPatchValidation() {` |
| 2022 | fn | p15ModelsAuthCliScope | (private) | `async function p15ModelsAuthCliScope() {` |
| 2040 | fn | p16DiagnosticsNoLeak | (private) | `async function p16DiagnosticsNoLeak() {` |
| 2060 | fn | p17StaticMetadataAlignment | (private) | `async function p17StaticMetadataAlignment() {` |
| 2088 | fn | main | (private) | `async function main() {` |
| 2186 | fn | toLintErrorObject | (private) | `function toLintErrorObject(value, fallbackMessa...` |

## Public API

### `resolveOpenClawCommand`

```
export async function resolveOpenClawCommand(args, env, options = {}) {
```

**Line:** 524 | **Kind:** fn
