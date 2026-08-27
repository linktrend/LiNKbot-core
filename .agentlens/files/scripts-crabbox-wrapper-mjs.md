# scripts/crabbox-wrapper.mjs

[← Back to Module](../modules/root/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 3961
- **Language:** JavaScript
- **Symbols:** 175
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 62 | fn | commandCandidates | (private) | `function commandCandidates(command, platform) {` |
| 72 | fn | resolveCrabboxBinary | (private) | `function resolveCrabboxBinary(env, platform) {` |
| 82 | fn | resolvePathBinary | (private) | `function resolvePathBinary(command, env, platfo...` |
| 95 | fn | resolveGitCommonCrabboxBinary | (private) | `function resolveGitCommonCrabboxBinary(env, pla...` |
| 123 | fn | isExecutableFile | (private) | `function isExecutableFile(path, platform) {` |
| 137 | fn | spawnInvocation | (private) | `function spawnInvocation(command, commandArgs, ...` |
| 156 | fn | resolveNodeCmdShim | (private) | `function resolveNodeCmdShim(command, platform) {` |
| 182 | fn | resolveNpmNodeCmdShim | (private) | `function resolveNpmNodeCmdShim(command, content...` |
| 357 | fn | escapeBatchCommand | (private) | `function escapeBatchCommand(command) {` |
| 361 | fn | escapeBatchArgument | (private) | `function escapeBatchArgument(arg) {` |
| 370 | fn | buildBatchCommandLine | (private) | `function buildBatchCommandLine(command, command...` |
| 376 | fn | checkedOutput | (private) | `function checkedOutput(` |
| 403 | fn | probeCrabboxMetadata | (private) | `function probeCrabboxMetadata(command, commandA...` |
| 411 | fn | parseCrabboxVersion | (private) | `function parseCrabboxVersion(value) {` |
| 426 | fn | parseVersionTuplePart | (private) | `function parseVersionTuplePart(value) {` |
| 434 | fn | compareVersionTuples | (private) | `function compareVersionTuples(left, right) {` |
| 444 | fn | formatVersionTuple | (private) | `function formatVersionTuple(version) {` |
| 448 | fn | isPostReleaseDescribeSuffix | (private) | `function isPostReleaseDescribeSuffix(suffix) {` |
| 452 | fn | satisfiesMinimumCrabboxVersion | (private) | `function satisfiesMinimumCrabboxVersion(version...` |
| 464 | fn | gitOutput | (private) | `function gitOutput(commandArgs) {` |
| 482 | fn | envProvider | (private) | `function envProvider() {` |
| 490 | fn | configProvider | (private) | `function configProvider() {` |
| 500 | fn | configuredProvider | (private) | `function configuredProvider() {` |
| 615 | fn | parseRunValueOptionsFromHelp | (private) | `function parseRunValueOptionsFromHelp(text) {` |
| 628 | fn | currentRunValueOptions | (private) | `function currentRunValueOptions() {` |
| 638 | fn | runOptionName | (private) | `function runOptionName(arg) {` |
| 642 | fn | runCommandBounds | (private) | `function runCommandBounds(commandArgs) {` |
| 661 | fn | crabboxOptionArgs | (private) | `function crabboxOptionArgs(commandArgs) {` |
| 670 | fn | commandProvider | (private) | `function commandProvider(commandArgsInput) {` |
| 685 | fn | selectedProvider | (private) | `function selectedProvider(commandArgs, advertis...` |
| 696 | fn | shouldRequireBrokeredAws | (private) | `function shouldRequireBrokeredAws(commandArgs, ...` |
| 710 | fn | brokerAuthConfigured | (private) | `function brokerAuthConfigured() {` |
| 727 | fn | enforceBrokeredAws | (private) | `function enforceBrokeredAws(commandArgs, provid...` |
| 741 | fn | optionValue | (private) | `function optionValue(commandArgsInput, name) {` |
| 756 | fn | hasOption | (private) | `function hasOption(commandArgsInput, name) {` |
| 773 | fn | commandOptionEnd | (private) | `function commandOptionEnd(commandArgs) {` |
| 781 | fn | shouldPreferAzureForWindows | (private) | `function shouldPreferAzureForWindows(commandArg...` |
| 792 | fn | ensureAzureWindowsProvider | (private) | `function ensureAzureWindowsProvider(commandArgs...` |
| 803 | fn | ensureAwsMacOnDemandMarket | (private) | `function ensureAwsMacOnDemandMarket(commandArgs...` |
| 820 | fn | ensureNativeWindowsHydrateJob | (private) | `function ensureNativeWindowsHydrateJob(commandA...` |
| 861 | fn | repoRelativePath | (private) | `function repoRelativePath(value) {` |
| 868 | fn | repoRelativeDownload | (private) | `function repoRelativeDownload(value) {` |
| 878 | fn | absolutizeLocalRunPaths | (private) | `function absolutizeLocalRunPaths(commandArgs) {` |
| 911 | fn | pathExists | (private) | `function pathExists(path) {` |
| 920 | fn | crabboxConfigDir | (private) | `function crabboxConfigDir() {` |
| 930 | fn | userDisplayPath | (private) | `function userDisplayPath(path) {` |
| 939 | fn | blacksmithTestboxPrivateKeyPath | (private) | `function blacksmithTestboxPrivateKeyPath(id) {` |
| 945 | fn | blacksmithTestboxClaimPath | (private) | `function blacksmithTestboxClaimPath(id) {` |
| 949 | fn | blacksmithTestboxClaimsDir | (private) | `function blacksmithTestboxClaimsDir() {` |
| 957 | fn | blacksmithTestboxClaimRepoRoot | (private) | `function blacksmithTestboxClaimRepoRoot(id) {` |
| 966 | fn | enforceCrabboxOwnedBlacksmithLease | (private) | `function enforceCrabboxOwnedBlacksmithLease(com...` |
| 999 | fn | restoreTemporaryBlacksmithTestboxClaimPath | (private) | `function restoreTemporaryBlacksmithTestboxClaim...` |
| 1021 | fn | restoreTemporaryBlacksmithTestboxClaim | (private) | `function restoreTemporaryBlacksmithTestboxClaim...` |
| 1067 | fn | observeBlacksmithTimingJSONLine | (private) | `function observeBlacksmithTimingJSONLine(line) {` |
| 1086 | fn | preserveTemporaryCrabboxRuns | (private) | `function preserveTemporaryCrabboxRuns() {` |
| 1113 | fn | shellQuote | (private) | `function shellQuote(value) {` |
| 1124 | fn | shellJoin | (private) | `function shellJoin(commandArgs) {` |
| 1128 | fn | powershellQuote | (private) | `function powershellQuote(value) {` |
| 1139 | fn | powershellJoin | (private) | `function powershellJoin(commandArgs) {` |
| 1143 | fn | isLocalContainerProvider | (private) | `function isLocalContainerProvider(providerName) {` |
| 1147 | fn | runCommandArgs | (private) | `function runCommandArgs(commandArgs) {` |
| 1152 | fn | normalizedCommandWords | (private) | `function normalizedCommandWords(commandArgs) {` |
| 1160 | fn | commandRuntimeEntrypoint | (private) | `function commandRuntimeEntrypoint(commandArgs) {` |
| 1178 | fn | commandWordsRuntimeEntrypoint | (private) | `function commandWordsRuntimeEntrypoint(wordsInp...` |
| 1199 | fn | commandWordsShellEntrypoint | (private) | `function commandWordsShellEntrypoint(wordsInput) {` |
| 1205 | fn | commandNeedsAwsMacosPackageManager | (private) | `function commandNeedsAwsMacosPackageManager(com...` |
| 1220 | fn | commandNeedsAwsMacosBun | (private) | `function commandNeedsAwsMacosBun(commandArgs) {` |
| 1224 | fn | commandNeedsAwsMacosSwiftToolchain | (private) | `function commandNeedsAwsMacosSwiftToolchain(com...` |
| 1231 | fn | commandWordsNeedAwsMacosSwiftToolchain | (private) | `function commandWordsNeedAwsMacosSwiftToolchain...` |
| 1267 | fn | commandWordsNeedAwsMacosPackageManager | (private) | `function commandWordsNeedAwsMacosPackageManager...` |
| 1302 | fn | isAwsMacosSwiftScriptTarget | (private) | `function isAwsMacosSwiftScriptTarget(word) {` |
| 1313 | fn | isAwsMacosPackageManagerScriptTarget | (private) | `function isAwsMacosPackageManagerScriptTarget(w...` |
| 1324 | fn | commandWordsRunScriptTarget | (private) | `function commandWordsRunScriptTarget(words, isS...` |
| 1353 | fn | commandWordsRunAwsMacosSwiftScript | (private) | `function commandWordsRunAwsMacosSwiftScript(wor...` |
| 1357 | fn | commandWordsRunAwsMacosPackageManagerScript | (private) | `function commandWordsRunAwsMacosPackageManagerS...` |
| 1361 | fn | commandNeedsEntrypoint | (private) | `function commandNeedsEntrypoint(commandArgs, en...` |
| 1370 | fn | commandWordsNeedEntrypoint | (private) | `function commandWordsNeedEntrypoint(wordsInput,...` |
| 1387 | fn | isChangedGateCommand | (private) | `function isChangedGateCommand(commandArgs) {` |
| 1397 | fn | changedGateBases | (private) | `function changedGateBases(commandArgs) {` |
| 1413 | fn | changedGateBasesFromWords | (private) | `function changedGateBasesFromWords(wordsInput, ...` |
| 1439 | fn | isChangedGateCommandWords | (private) | `function isChangedGateCommandWords(wordsInput, ...` |
| 1454 | fn | isChangedGateWords | (private) | `function isChangedGateWords(wordsInput) {` |
| 1467 | fn | nodeScriptWord | (private) | `function nodeScriptWord(words) {` |
| 1498 | fn | nodeOptionsWithoutScriptPrefix | (private) | `function nodeOptionsWithoutScriptPrefix(word) {` |
| 1502 | fn | nodeOptionValueModeBeforeScript | (private) | `function nodeOptionValueModeBeforeScript(word) {` |
| 1513 | fn | shellInlineCommand | (private) | `function shellInlineCommand(words) {` |
| 1537 | fn | shellInlineCommandOptionConsumesNextValue | (private) | `function shellInlineCommandOptionConsumesNextVa...` |
| 1541 | fn | shellCommandWordCandidates | (private) | `function shellCommandWordCandidates(command) {` |
| 1545 | fn | pushShellCandidate | (private) | `function pushShellCandidate(candidates, segment) {` |
| 1552 | fn | normalizedShellSegmentWords | (private) | `function normalizedShellSegmentWords(segment) {` |
| 1565 | fn | normalizeExecutableWords | (private) | `function normalizeExecutableWords(words, option...` |
| 1569 | fn | stripShellExecutionPrefixes | (private) | `function stripShellExecutionPrefixes(wordsInput...` |
| 1610 | fn | stripEnvCommandOptions | (private) | `function stripEnvCommandOptions(words, { canShi...` |
| 1696 | fn | isSupportedSystemEnvCommand | (private) | `function isSupportedSystemEnvCommand(command) {` |
| 1700 | fn | shellWordBasename | (private) | `function shellWordBasename(word) {` |
| 1704 | fn | stripCommandBuiltinOptions | (private) | `function stripCommandBuiltinOptions(words) {` |
| 1718 | fn | stripTimeOptions | (private) | `function stripTimeOptions(words) {` |
| 1728 | fn | stripTimeoutOptions | (private) | `function stripTimeoutOptions(words) {` |
| 1761 | fn | splitShellWords | (private) | `function splitShellWords(value) {` |
| 1803 | fn | stripHeredocBodies | (private) | `function stripHeredocBodies(command) {` |
| 1824 | fn | lineHeredocDelimiters | (private) | `function lineHeredocDelimiters(line) {` |
| 1869 | fn | readHeredocDelimiter | (private) | `function readHeredocDelimiter(line, startIndex) {` |
| 1908 | fn | extractCommandSubstitutionBodies | (private) | `function extractCommandSubstitutionBodies(line) {` |
| 1931 | fn | shellCommandSegments | (private) | `function shellCommandSegments(command) {` |
| 2045 | fn | readCommandSubstitution | (private) | `function readCommandSubstitution(command, start...` |
| 2117 | fn | startsShellReservedWord | (private) | `function startsShellReservedWord(command, index...` |
| 2125 | fn | startsShellToken | (private) | `function startsShellToken(command, index, word) {` |
| 2134 | fn | skipUntilNewline | (private) | `function skipUntilNewline(command, index) {` |
| 2139 | fn | changedGateBaseForCommand | (private) | `function changedGateBaseForCommand(commandArgs) {` |
| 2169 | fn | remoteAliasForChangedGateBase | (private) | `function remoteAliasForChangedGateBase(base) {` |
| 2177 | fn | remoteGitBootstrapForChangedGate | (private) | `function remoteGitBootstrapForChangedGate(chang...` |
| 2206 | fn | injectRemoteChangedGateEnvironment | (private) | `function injectRemoteChangedGateEnvironment(com...` |
| 2230 | fn | markShellChangedGateAsRemoteChild | (private) | `function markShellChangedGateAsRemoteChild(comm...` |
| 2234 | fn | markDirectChangedGateAsRemoteChild | (private) | `function markDirectChangedGateAsRemoteChild(com...` |
| 2249 | fn | envAssignmentInsertIndex | (private) | `function envAssignmentInsertIndex(words) {` |
| 2278 | fn | isWindowsRemoteTarget | (private) | `function isWindowsRemoteTarget(commandArgs) {` |
| 2284 | fn | isNativeWindowsRemoteTarget | (private) | `function isNativeWindowsRemoteTarget(commandArg...` |
| 2290 | fn | isAwsMacosRemoteTarget | (private) | `function isAwsMacosRemoteTarget(commandArgs, pr...` |
| 2298 | fn | isBrokeredWsl2RemoteTarget | (private) | `function isBrokeredWsl2RemoteTarget(commandArgs...` |
| 2308 | fn | isHydratedNativeWindowsProvider | (private) | `function isHydratedNativeWindowsProvider(provid...` |
| 2312 | fn | remoteWindowsHydratedNodeModulesBootstrap | (private) | `function remoteWindowsHydratedNodeModulesBootst...` |
| 2325 | fn | injectRemoteWindowsHydratedNodeModulesBootstrap | (private) | `function injectRemoteWindowsHydratedNodeModules...` |
| 2363 | fn | injectRemoteChangedGateGitBootstrap | (private) | `function injectRemoteChangedGateGitBootstrap(co...` |
| 2394 | fn | remotePosixJsEnvBootstrap | (private) | `function remotePosixJsEnvBootstrap() {` |
| 2419 | fn | remoteAwsMacosJsBootstrap | (private) | `function remoteAwsMacosJsBootstrap({ packageMan...` |
| 2523 | fn | remoteWsl2JsBootstrap | (private) | `function remoteWsl2JsBootstrap({ packageManager...` |
| 2588 | fn | scopedAwsMacosEnvCommand | (private) | `function scopedAwsMacosEnvCommand(commandArgs) {` |
| 2616 | fn | scopedAwsMacosShellEnvCommand | (private) | `function scopedAwsMacosShellEnvCommand(command) {` |
| 2646 | fn | shellWordsKey | (private) | `function shellWordsKey(words) {` |
| 2650 | fn | shellCommandWithEnvShim | (private) | `function shellCommandWithEnvShim(command, eligi...` |
| 2671 | fn | shellCommandSegmentsWithBounds | (private) | `function shellCommandSegmentsWithBounds(command) {` |
| 2728 | fn | shellHeredocBodyRanges | (private) | `function shellHeredocBodyRanges(command) {` |
| 2756 | fn | leadingShellEnvCommandToken | (private) | `function leadingShellEnvCommandToken(command, s...` |
| 2788 | fn | skipLeadingTimeCommand | (private) | `function skipLeadingTimeCommand(command, start) {` |
| 2806 | fn | readLeadingShellWord | (private) | `function readLeadingShellWord(command, start) {` |
| 2841 | fn | remoteWsl2JsBootstrapRequirements | (private) | `function remoteWsl2JsBootstrapRequirements(comm...` |
| 2867 | fn | prepareRemoteWsl2JsBootstrapScript | (private) | `function prepareRemoteWsl2JsBootstrapScript(com...` |
| 2908 | fn | injectRemoteAwsMacosJsBootstrap | (private) | `function injectRemoteAwsMacosJsBootstrap(comman...` |
| 2962 | fn | remoteAwsMacosSwiftBootstrap | (private) | `function remoteAwsMacosSwiftBootstrap() {` |
| 2987 | fn | injectRemoteAwsMacosSwiftBootstrap | (private) | `function injectRemoteAwsMacosSwiftBootstrap(com...` |
| 3022 | fn | hasRunOption | (private) | `function hasRunOption(commandArgs, name) {` |
| 3040 | fn | replaceRunFlagWithScript | (private) | `function replaceRunFlagWithScript(commandArgs, ...` |
| 3057 | fn | prepareAwsMacosScriptStdinBootstrap | (private) | `function prepareAwsMacosScriptStdinBootstrap(co...` |
| 3077 | fn | createAwsMacosScriptStdinWrapper | (private) | `function createAwsMacosScriptStdinWrapper(scrip...` |
| 3097 | fn | remoteAwsMacosScriptBootstrap | (private) | `function remoteAwsMacosScriptBootstrap(requirem...` |
| 3105 | fn | awsMacosScriptBootstrapRequirements | (private) | `function awsMacosScriptBootstrapRequirements(sc...` |
| 3127 | fn | uniqueHereDocDelimiter | (private) | `function uniqueHereDocDelimiter(script) {` |
| 3138 | fn | isSparseCheckout | (private) | `function isSparseCheckout() {` |
| 3147 | fn | isWorktreeClean | (private) | `function isWorktreeClean() {` |
| 3152 | fn | shouldUseFullCheckoutForCleanRemoteSync | (private) | `function shouldUseFullCheckoutForCleanRemoteSyn...` |
| 3166 | fn | defaultFullCheckoutSyncRoot | (private) | `function defaultFullCheckoutSyncRoot() {` |
| 3174 | fn | fullCheckoutSyncRoot | (private) | `function fullCheckoutSyncRoot() {` |
| 3181 | fn | parseNonNegativeIntegerEnv | (private) | `function parseNonNegativeIntegerEnv(name, fallb...` |
| 3198 | fn | formatByteCount | (private) | `function formatByteCount(bytes) {` |
| 3212 | fn | assertFullCheckoutSyncDisk | (private) | `function assertFullCheckoutSyncDisk(root) {` |
| 3237 | fn | prepareFullCheckoutForSync | (private) | `function prepareFullCheckoutForSync(options = {...` |
| 3244 | fn | create | (private) | `function create() {` |
| 3380 | fn | startFullCheckoutKeepalive | (private) | `function startFullCheckoutKeepalive(checkout, o...` |
| 3383 | fn | refresh | (private) | `const refresh = () => {` |
| 3417 | fn | fullCheckoutKeepaliveIntervalMs | (private) | `function fullCheckoutKeepaliveIntervalMs() {` |
| 3425 | fn | cleanupFullCheckout | (private) | `function cleanupFullCheckout(dir, active) {` |
| 3436 | fn | assertFullCheckoutAvailableBeforeExit | (private) | `function assertFullCheckoutAvailableBeforeExit(...` |
| 3451 | fn | injectFullCheckoutLeaseReclaim | (private) | `function injectFullCheckoutLeaseReclaim(command...` |
| 3465 | fn | injectRemoteTestboxCi | (private) | `function injectRemoteTestboxCi(commandArgs, pro...` |
| 3576 | fn | cleanupChildCwd | (private) | `let cleanupChildCwd = () => {};` |
| 3578 | fn | stopFullCheckoutKeepalive | (private) | `let stopFullCheckoutKeepalive = () => {};` |
| 3613 | fn | cleanupOnce | (private) | `function cleanupOnce() {` |
| 3750 | fn | observeText | (private) | `const observeText = (text) => {` |
| 3869 | fn | exitAfterChildTreeTermination | (private) | `async function exitAfterChildTreeTermination(ch...` |
| 3885 | fn | signalChildProcessTree | (private) | `function signalChildProcessTree(childProcess, s...` |
| 3914 | fn | clearChildForceKillTimer | (private) | `function clearChildForceKillTimer() {` |
| 3921 | fn | childProcessTreeIsAlive | (private) | `function childProcessTreeIsAlive(childProcess) {` |
| 3933 | fn | waitForChildTreeExit | (private) | `async function waitForChildTreeExit(childProces...` |
| 3947 | fn | resolveChildKillGraceMs | (private) | `function resolveChildKillGraceMs(env) {` |
| 3955 | fn | resolveMetadataProbeTimeoutMs | (private) | `function resolveMetadataProbeTimeoutMs(env) {` |
