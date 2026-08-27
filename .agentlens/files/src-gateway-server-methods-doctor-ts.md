# src/gateway/server-methods/doctor.ts

[← Back to Module](../modules/src-gateway-server-methods/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1073
- **Language:** TypeScript
- **Symbols:** 34
- **Public symbols:** 9

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 42 | type | DoctorMemoryDreamingPhasePayload | (private) | - |
| 49 | type | DoctorMemoryLightDreamingPayload | (private) | - |
| 54 | type | DoctorMemoryDeepDreamingPayload | (private) | - |
| 63 | type | DoctorMemoryRemDreamingPayload | (private) | - |
| 69 | type | DoctorMemoryDreamingEntryPayload | (private) | - |
| 86 | type | DoctorMemoryDreamingPayload | (private) | - |
| 117 | type | DoctorMemoryStatusPayload | pub | - |
| 132 | type | DoctorMemoryEmbeddingRuntimePayload | pub | - |
| 156 | type | DoctorMemoryDreamDiaryPayload | pub | - |
| 164 | type | DoctorMemoryDreamActionPayload | pub | - |
| 189 | type | DoctorMemoryRemHarnessCandidatePayload | pub | - |
| 206 | type | DoctorMemoryRemHarnessCandidateTruthPayload | pub | - |
| 211 | type | DoctorMemoryRemHarnessGroundedFilePayload | pub | - |
| 216 | type | DoctorMemoryRemHarnessSuccessPayload | pub | - |
| 251 | type | DoctorMemoryRemHarnessErrorPayload | pub | - |
| 258 | fn | extractIsoDayFromPath | (private) | `function extractIsoDayFromPath(filePath: string...` |
| 263 | fn | groundedMarkdownToDiaryLines | (private) | `function groundedMarkdownToDiaryLines(markdown:...` |
| 274 | fn | listWorkspaceDailyFiles | (private) | `async function listWorkspaceDailyFiles(memoryDi...` |
| 290 | fn | resolveDreamingConfig | (private) | `function resolveDreamingConfig(` |
| 366 | type | DreamingStoreStats | (private) | - |
| 390 | fn | compareDreamingEntryByRecency | (private) | `function compareDreamingEntryByRecency(` |
| 407 | fn | compareDreamingEntryBySignals | (private) | `function compareDreamingEntryBySignals(` |
| 420 | fn | compareDreamingEntryByPromotion | (private) | `function compareDreamingEntryByPromotion(` |
| 434 | fn | trimDreamingEntries | (private) | `function trimDreamingEntries(` |
| 460 | fn | loadDreamingStoreStats | (private) | `async function loadDreamingStoreStats(` |
| 487 | fn | mergeDreamingStoreStats | (private) | `function mergeDreamingStoreStats(stats: Dreamin...` |
| 571 | type | ManagedDreamingCronStatus | (private) | - |
| 576 | type | ManagedCronJobLike | (private) | - |
| 584 | fn | isManagedDreamingJob | (private) | `function isManagedDreamingJob(` |
| 601 | fn | resolveManagedDreamingCronStatus | (private) | `async function resolveManagedDreamingCronStatus...` |
| 641 | fn | resolveAllManagedDreamingCronStatuses | (private) | `async function resolveAllManagedDreamingCronSta...` |
| 659 | fn | readDreamDiary | (private) | `async function readDreamDiary(` |
| 702 | fn | shouldProbeMemoryEmbeddings | (private) | `function shouldProbeMemoryEmbeddings(params: un...` |
| 710 | fn | resolveDoctorMemoryTarget | (private) | `function resolveDoctorMemoryTarget(` |

## Public API
