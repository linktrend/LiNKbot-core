# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 2 large files in this module.

## extensions/crabbox/src/crabbox-worker-provider.test.ts (1233 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 24 | type | CrabboxWorkerProviderDependencies | (private) |
| 27 | type | CrabboxCommandRunner | (private) |
| 29 | fn | commandResult | (private) |
| 41 | fn | inspectJson | (private) |
| 56 | fn | lifecycleLease | (private) |
| 60 | fn | providerWithRunner | (private) |
| 75 | fn | hasLoneSurrogate | (private) |

## extensions/crabbox/src/crabbox-worker-provider.ts (748 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 55 | type | CrabboxCommandRunner | (private) |
| 57 | type | LeaseCommandContext | (private) |
| 63 | type | InspectCommandResult | (private) |
| 65 | class | InvalidInspectResultError | (private) |
| 67 | type | CrabboxWorkerProviderDependencies | (private) |
| 76 | fn | commandDetail | (private) |
| 86 | fn | commandError | (private) |
| 94 | fn | permanentCommandError | (private) |
| 98 | fn | assertAwsWorkerHasNoInstanceProfile | (private) |
| 130 | fn | provisionProfileError | (private) |
| 161 | fn | authoritativeLeaseAbsence | (private) |
| 189 | fn | alreadyStopped | (private) |
| 197 | fn | runCrabboxCommand | (private) |
| 215 | fn | requireHostKey | (private) |
| 232 | fn | inspectWithContext | (private) |
| 281 | fn | remainingProvisionTimeout | (private) |
| 289 | fn | stopWithContext | (private) |
| 314 | fn | isTerminalState | (private) |
| 318 | fn | isUnusableProvisionState | (private) |
| 322 | fn | statusFromInspect | (private) |
| 331 | fn | leaseFromInspect | (private) |
| 364 | fn | leaseFromProvisionInspect | (private) |
| 380 | fn | assertProvisionSecurityPolicy | (private) |
| 391 | fn | waitForProvisionReady | (private) |
| 433 | fn | runProvisionSetup | (private) |
| 479 | fn | stopProvisionInspect | (private) |
| 489 | fn | stopProvisionId | (private) |
| 503 | fn | createCrabboxWorkerProvider | pub |
| 515 | fn | resolveBinary | (private) |
