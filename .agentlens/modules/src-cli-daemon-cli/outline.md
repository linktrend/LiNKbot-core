# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 9 large files in this module.

## src/cli/daemon-cli/install.test.ts (958 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 8 | type | DaemonActionResponse | (private) |
| 195 | fn | expectFirstInstallPlanCallOmitsToken | (private) |
| 200 | fn | expectFields | (private) |
| 210 | fn | readFirstInstallPlanArg | (private) |
| 218 | fn | readFirstConfigWriteParams | (private) |
| 228 | fn | readFirstNodeStartupTlsEnvironmentArg | (private) |
| 236 | fn | expectLastEmittedResult | (private) |
| 240 | fn | mockResolvedGatewayTokenSecretRef | (private) |

## src/cli/daemon-cli/lifecycle-core.test.ts (816 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 76 | fn | readJsonLog | (private) |
| 81 | fn | createServiceRunArgs | (private) |
| 91 | fn | stubConfigSecretRefGatewayToken | (private) |
| 111 | fn | stubServiceGatewayTokenEnv | (private) |
| 121 | fn | withUnsupportedGatewayService | (private) |
| 133 | fn | expectUnsupportedServiceCheckFailure | (private) |
| 263 | type | RepairLoadedService | (private) |
| 721 | type | RepairLoadedService | (private) |

## src/cli/daemon-cli/lifecycle-core.ts (702 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 40 | type | DaemonLifecycleOptions | (private) |
| 48 | type | RestartPostCheckContext | (private) |
| 63 | type | ServiceRecoveryContext | (private) |
| 70 | type | ServiceStartRepairContext | (private) |
| 75 | fn | maybeAugmentSystemdHints | (private) |
| 89 | fn | mergeWarnings | (private) |
| 97 | fn | handleServiceNotLoaded | (private) |
| 123 | fn | resolveServiceLoadedOrFail | (private) |
| 137 | fn | runServiceUninstall | pub |
| 195 | fn | runServiceStart | pub |
| 351 | fn | runServiceStop | pub |
| 455 | fn | runServiceRestart | pub |
| 480 | fn | prepareGatewayRestartIntent | (private) |
| 491 | fn | clearPreparedRestartIntent | (private) |
| 497 | fn | emitScheduledRestart | (private) |

## src/cli/daemon-cli/lifecycle.test.ts (1136 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 5 | type | RestartHealthSnapshot | (private) |
| 14 | type | RestartPostCheckContext | (private) |
| 21 | type | RestartParams | (private) |
| 102 | fn | requireMockCallArg | (private) |
| 114 | fn | expectRestartError | (private) |
| 229 | fn | mockUnmanagedRestart | (private) |
| 252 | fn | runUnmanagedStop | (private) |
| 331 | fn | fail | (private) |

## src/cli/daemon-cli/lifecycle.ts (758 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 78 | fn | postRestartHealthAttempts | (private) |
| 84 | fn | formatRestartFailure | (private) |
| 111 | fn | resolveGatewayLifecycleContext | (private) |
| 126 | fn | resolveGatewayLifecyclePort | (private) |
| 130 | fn | resolveGatewayPortFallback | (private) |
| 136 | fn | resolveExplicitGatewayConfigPort | (private) |
| 141 | fn | assertUnmanagedGatewayRestartEnabled | (private) |
| 164 | fn | resolveVerifiedGatewayListenerPids | (private) |
| 170 | fn | handleSystemScopeSystemdGateway | (private) |
| 173 | fn | handleSystemScopeSystemdGateway | (private) |
| 176 | fn | handleSystemScopeSystemdGateway | (private) |
| 209 | fn | stopGatewayWithoutServiceManager | (private) |
| 237 | fn | resolveRestartListenerHealthWait | (private) |
| 270 | fn | signalGatewayRestart | (private) |
| 386 | fn | restartGatewayWithoutServiceManager | (private) |
| 402 | type | GatewaySignalRestartResult | (private) |
| 404 | fn | isGatewaySignalRestartResult | (private) |
| 410 | fn | runExternalSupervisorRestart | (private) |
| 466 | fn | runDaemonUninstall | pub |
| 478 | fn | runDaemonStart | pub |
| 516 | fn | runDaemonStop | pub |
| 556 | fn | runDaemonRestart | pub |

## src/cli/daemon-cli/status.gather.test.ts (1337 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 15 | type | PortConnections | (private) |
| 43 | type | PortUsageTestSummary | (private) |
| 270 | fn | callArg | (private) |

## src/cli/daemon-cli/status.gather.ts (851 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 65 | type | ConfigSummary | (private) |
| 74 | type | GatewayStatusSummary | (private) |
| 88 | type | PortStatusSummary | (private) |
| 95 | type | DaemonConfigContext | (private) |
| 104 | type | StatusConfigRead | (private) |
| 110 | type | ResolvedGatewayStatus | (private) |
| 117 | type | CliStatusSummary | (private) |
| 134 | fn | loadGatewayProbeAuthModule | (private) |
| 138 | fn | loadDaemonInspectModule | (private) |
| 142 | fn | loadLaunchdModule | (private) |
| 146 | fn | loadServiceAuditModule | (private) |
| 150 | fn | loadGatewayTlsModule | (private) |
| 154 | fn | loadDaemonProbeModule | (private) |
| 158 | fn | loadRestartHealthModule | (private) |
| 162 | fn | resolveSnapshotRuntimeConfig | (private) |
| 169 | fn | coerceStatusConfig | (private) |
| 176 | fn | hasOwnKey | (private) |
| 182 | fn | needsFullStatusConfigRead | (private) |
| 187 | fn | readFastStatusConfig | (private) |
| 228 | fn | readFullStatusConfig | (private) |
| 258 | fn | readStatusConfig | (private) |
| 273 | fn | appendProbeNote | (private) |
| 283 | type | DaemonStatus | pub |
| 358 | fn | shouldReportPortUsage | (private) |
| 368 | fn | resolveCliStatusSummary | (private) |
| 376 | fn | loadDaemonConfigContext | (private) |
| 416 | fn | resolveGatewayStatusSummary | (private) |
| 480 | fn | toPortStatusSummary | (private) |
| 494 | fn | inspectDaemonPortStatuses | (private) |
| 510 | fn | inspectEstablishedGatewayClients | (private) |
| 531 | fn | hasActiveGatewayExecProbeCredential | (private) |
| 562 | fn | gatherDaemonStatus | pub |
| 829 | fn | renderPortDiagnosticsForCli | pub |
| 841 | fn | resolvePortListeningAddresses | pub |

## src/cli/daemon-cli/status.print.test.ts (1110 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 88 | fn | expectMockLineContains | (private) |

## src/cli/daemon-cli/status.print.ts (573 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 42 | fn | sanitizeDaemonStatusForJson | (private) |
| 62 | fn | formatProbeKindLabel | (private) |
| 66 | fn | formatCapabilityLabel | (private) |
| 73 | fn | formatCliVersionLine | (private) |
| 80 | fn | formatConnectionLine | (private) |
| 94 | fn | printDaemonStatus | pub |
| 103 | fn | spacer | (private) |
