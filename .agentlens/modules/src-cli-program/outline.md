# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 5 large files in this module.

## src/cli/program/config-guard.test.ts (776 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 30 | type | ConfigIssue | (private) |
| 32 | fn | makeSnapshot | (private) |
| 43 | fn | makeRuntime | (private) |
| 50 | fn | plainErrorCalls | (private) |
| 55 | fn | withCapturedStdout | (private) |
| 80 | fn | runEnsureConfigReady | (private) |
| 86 | fn | setInvalidSnapshot | (private) |
| 102 | fn | useTempOpenClawHome | (private) |
| 112 | fn | writeLegacyTaskSidecarMarker | (private) |
| 118 | fn | writePendingTaskSidecarArchiveMarker | (private) |
| 125 | fn | writeStateMarker | (private) |

## src/cli/program/preaction.test.ts (826 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 13 | type | EnsureConfigReadyOptions | (private) |
| 144 | fn | buildProgram | (private) |
| 242 | fn | resolveActionCommand | (private) |
| 254 | fn | runPreAction | (private) |
| 817 | fn | hooks | (private) |

## src/cli/program/register.status-health-sessions.test.ts (595 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 54 | type | MockCalls | (private) |
| 58 | fn | requireRecord | (private) |
| 65 | fn | expectCommandOptions | (private) |
| 137 | fn | runCli | (private) |

## src/cli/program/register.status-health-sessions.ts (766 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 11 | fn | resolveVerbose | (private) |
| 15 | type | SessionsListCliOptions | (private) |
| 25 | fn | createModuleLoader | (private) |
| 34 | fn | addSessionsListOptions | (private) |
| 45 | fn | mergeSessionsListOptions | (private) |
| 60 | fn | runSessionsListCli | (private) |
| 76 | fn | parseTimeoutMs | (private) |
| 86 | fn | parseTasksAuditLimit | (private) |
| 96 | fn | runWithVerboseAndTimeout | (private) |
| 112 | fn | registerStatusHealthSessionsCommands | pub |

## src/cli/program/routes.test.ts (644 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 77 | type | ProgramRoute | (private) |
| 79 | fn | expectRoute | (private) |
| 88 | fn | expectRunFalse | (private) |
