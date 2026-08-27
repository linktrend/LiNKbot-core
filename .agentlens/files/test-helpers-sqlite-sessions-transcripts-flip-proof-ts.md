# test/helpers/sqlite-sessions-transcripts-flip-proof.ts

[← Back to Module](../modules/root/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 2661
- **Language:** TypeScript
- **Symbols:** 92
- **Public symbols:** 1

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 41 | type | DoctorMode | (private) | - |
| 42 | type | ProofChildProcess | (private) | - |
| 44 | type | DoctorMigrationRunEvidence | (private) | - |
| 51 | type | DoctorRestoreEvidence | (private) | - |
| 58 | type | DoctorCommandEvidence | (private) | - |
| 68 | type | FileInventoryEntry | (private) | - |
| 80 | type | SqliteSessionEntryEvidence | (private) | - |
| 88 | type | SqliteEvidence | (private) | - |
| 98 | type | ProofCheckpoint | (private) | - |
| 108 | type | PluginSdkConsumerEvidence | (private) | - |
| 126 | type | ManualCompactionEvidence | (private) | - |
| 136 | type | ScaleMigrationEvidence | (private) | - |
| 144 | type | DowngradeReupgradeEvidence | (private) | - |
| 157 | type | BusyContentionEvidence | (private) | - |
| 167 | type | SecondStartupAfterResetEvidence | (private) | - |
| 175 | type | RollbackRestoreEvidence | (private) | - |
| 187 | type | SqliteSessionsTranscriptsFlipProofReport | (private) | - |
| 217 | type | ProofContext | (private) | - |
| 243 | type | RunOptions | (private) | - |
| 288 | fn | runSqliteSessionsTranscriptsFlipProof | pub | `export async function runSqliteSessionsTranscri...` |
| 320 | fn | record | (private) | `const record = async (label: string, doctor?: D...` |
| 572 | fn | isBuiltCliEntrypoint | (private) | `function isBuiltCliEntrypoint(entrypoint: reado...` |
| 577 | fn | buildProofContext | (private) | `function buildProofContext(stateDir: string): P...` |
| 623 | fn | buildMockOpenAiConfig | (private) | `function buildMockOpenAiConfig(mockPort: number...` |
| 669 | fn | getFreeTcpPort | (private) | `async function getFreeTcpPort(): Promise<number> {` |
| 686 | fn | startMockOpenAiServer | (private) | `async function startMockOpenAiServer(params: {` |
| 728 | fn | stopChildProcess | (private) | `async function stopChildProcess(child: ProofChi...` |
| 744 | fn | seedLegacySessionStore | (private) | `async function seedLegacySessionStore(context: ...` |
| 884 | fn | scaleSessionId | (private) | `function scaleSessionId(index: number): string {` |
| 888 | fn | legacyEntry | (private) | `function legacyEntry(` |
| 904 | fn | legacySessionEvent | (private) | `function legacySessionEvent(sessionId: string):...` |
| 908 | fn | writeTranscript | (private) | `async function writeTranscript(` |
| 917 | fn | runDoctor | (private) | `async function runDoctor(` |
| 940 | fn | parseDoctorMigrationRun | (private) | `function parseDoctorMigrationRun(parsed: Record...` |
| 965 | fn | parseDoctorRestore | (private) | `function parseDoctorRestore(parsed: Record<stri...` |
| 981 | fn | runRollbackRestoreProof | (private) | `async function runRollbackRestoreProof(` |
| 1067 | fn | readJsonObjectFile | (private) | `async function readJsonObjectFile(filePath: str...` |
| 1076 | fn | findManifestMoveForSource | (private) | `function findManifestMoveForSource(` |
| 1103 | fn | sameFilePathString | (private) | `function sameFilePathString(left: string, right...` |
| 1107 | fn | normalizeMacPrivatePath | (private) | `function normalizeMacPrivatePath(filePath: stri...` |
| 1112 | fn | markMigrationManifestFailed | (private) | `async function markMigrationManifestFailed(mani...` |
| 1132 | fn | appendProofMessage | (private) | `async function appendProofMessage(` |
| 1158 | fn | runManualCompactionProof | (private) | `async function runManualCompactionProof(` |
| 1245 | fn | runPluginSdkConsumerProbe | (private) | `async function runPluginSdkConsumerProbe(` |
| 1383 | fn | runGatewayCleanupPruningProof | (private) | `async function runGatewayCleanupPruningProof(` |
| 1432 | fn | runDoctorIdempotenceProof | (private) | `async function runDoctorIdempotenceProof(` |
| 1460 | fn | requireScaleMigrationProof | (private) | `function requireScaleMigrationProof(` |
| 1488 | fn | runDowngradeReupgradeProof | (private) | `async function runDowngradeReupgradeProof(` |
| 1596 | fn | runSqliteBusyContentionProof | (private) | `async function runSqliteBusyContentionProof(` |
| 1693 | fn | runSecondStartupAfterResetProof | (private) | `async function runSecondStartupAfterResetProof(` |
| 1717 | fn | runConcurrentMultiClientLifecycle | (private) | `async function runConcurrentMultiClientLifecycle(` |
| 1806 | fn | resetSession | (private) | `async function resetSession(` |
| 1820 | fn | sendGatewayUserMessage | (private) | `async function sendGatewayUserMessage(` |
| 1840 | fn | waitForAgentRunOk | (private) | `async function waitForAgentRunOk(` |
| 1854 | fn | waitForAgentRunSettled | (private) | `async function waitForAgentRunSettled(` |
| 1880 | fn | deleteSession | (private) | `async function deleteSession(` |
| 1893 | fn | requireTrackedSession | (private) | `async function requireTrackedSession(` |
| 1903 | fn | requireHistoryContains | (private) | `async function requireHistoryContains(` |
| 1923 | fn | requireHistoryRoleContains | (private) | `async function requireHistoryRoleContains(` |
| 1951 | fn | waitForHistoryContains | (private) | `async function waitForHistoryContains(` |
| 1968 | fn | waitForHistoryRoleContains | (private) | `async function waitForHistoryRoleContains(` |
| 1986 | fn | waitForSqliteEvents | (private) | `async function waitForSqliteEvents(` |
| 2003 | fn | waitForSqliteSessionId | (private) | `async function waitForSqliteSessionId(dbPath: s...` |
| 2017 | fn | waitForTrackedSessionId | (private) | `async function waitForTrackedSessionId(` |
| 2037 | fn | waitForSessionEntryAbsent | (private) | `async function waitForSessionEntryAbsent(dbPath...` |
| 2058 | fn | waitForSqliteEventsAbsent | (private) | `async function waitForSqliteEventsAbsent(dbPath...` |
| 2077 | fn | waitForSqliteMessageContains | (private) | `async function waitForSqliteMessageContains(` |
| 2102 | fn | waitForFile | (private) | `async function waitForFile(filePath: string, ti...` |
| 2114 | fn | waitForChildExit | (private) | `async function waitForChildExit(` |
| 2128 | fn | onExit | (private) | `const onExit = (code: number | null, signal: No...` |
| 2142 | fn | requireMockOpenAiRequest | (private) | `async function requireMockOpenAiRequest(request...` |
| 2149 | fn | readSqliteTranscriptMessages | (private) | `function readSqliteTranscriptMessages(` |
| 2184 | fn | countSqliteTranscriptEvents | (private) | `function countSqliteTranscriptEvents(dbPath: st...` |
| 2200 | fn | captureCheckpoint | (private) | `async function captureCheckpoint(` |
| 2216 | fn | inventoryActiveJsonl | (private) | `async function inventoryActiveJsonl(sessionsDir...` |
| 2229 | fn | inventoryArchiveArtifacts | (private) | `async function inventoryArchiveArtifacts(contex...` |
| 2256 | fn | walkFiles | (private) | `async function walkFiles(root: string, visit: (...` |
| 2273 | fn | inventoryFile | (private) | `async function inventoryFile(filePath: string, ...` |
| 2293 | fn | parseArchiveArtifactName | (private) | `function parseArchiveArtifactName(` |
| 2307 | fn | summarizeJsonl | (private) | `function summarizeJsonl(text: string): {` |
| 2346 | fn | readSqliteEvidence | (private) | `function readSqliteEvidence(dbPath: string, tra...` |
| 2378 | fn | readTrackedEntries | (private) | `function readTrackedEntries(` |
| 2418 | fn | parseEntryJson | (private) | `function parseEntryJson(entryJson: string): Rec...` |
| 2432 | fn | scalarNumber | (private) | `function scalarNumber(db: DatabaseSync, sql: st...` |
| 2437 | fn | validateCheckpointInvariants | (private) | `function validateCheckpointInvariants(` |
| 2554 | fn | requireArchiveText | (private) | `function requireArchiveText(` |
| 2587 | fn | findArchiveArtifact | (private) | `function findArchiveArtifact(` |
| 2609 | fn | parseJsonObject | (private) | `function parseJsonObject(text: string): Record<...` |
| 2625 | fn | asRecord | (private) | `function asRecord(value: unknown): Record<strin...` |
| 2631 | fn | stringArray | (private) | `function stringArray(value: unknown): string[] {` |
| 2637 | fn | tail | (private) | `function tail(value: string, maxChars = 8_000):...` |
| 2641 | fn | printCheckpoint | (private) | `function printCheckpoint(checkpoint: ProofCheck...` |

## Public API

### `runSqliteSessionsTranscriptsFlipProof`

```
export async function runSqliteSessionsTranscriptsFlipProof(
```

**Line:** 288 | **Kind:** fn
