# ui/src/api/types.ts

[← Back to Module](../modules/ui-src-api/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 929
- **Language:** TypeScript
- **Symbols:** 110
- **Public symbols:** 78

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 1 | type | UpdateAvailable | pub | - |
| 16 | type | ChannelsStatusSnapshot | pub | - |
| 30 | type | ChannelUiMetaEntry | pub | - |
| 37 | type | ChannelAccountSnapshot | pub | - |
| 74 | type | WhatsAppSelf | (private) | - |
| 79 | type | WhatsAppDisconnect | (private) | - |
| 86 | type | WhatsAppStatus | pub | - |
| 101 | type | TelegramBot | (private) | - |
| 106 | type | TelegramWebhook | (private) | - |
| 111 | type | TelegramProbe | (private) | - |
| 120 | type | TelegramStatus | pub | - |
| 132 | type | DiscordBot | (private) | - |
| 137 | type | DiscordProbe | (private) | - |
| 145 | type | DiscordStatus | pub | - |
| 156 | type | GoogleChatProbe | (private) | - |
| 163 | type | GoogleChatStatus | pub | - |
| 178 | type | SlackBot | (private) | - |
| 183 | type | SlackTeam | (private) | - |
| 188 | type | SlackProbe | (private) | - |
| 197 | type | SlackStatus | pub | - |
| 209 | type | SignalProbe | (private) | - |
| 217 | type | SignalStatus | pub | - |
| 228 | type | IMessageProbe | (private) | - |
| 233 | type | IMessageStatus | pub | - |
| 245 | type | NostrProfile | pub | - |
| 256 | type | NostrStatus | pub | - |
| 266 | type | ConfigSnapshotIssue | (private) | - |
| 268 | type | ConfigSnapshot | pub | - |
| 284 | type | ConfigSchemaResponse | pub | - |
| 291 | type | PresenceEntry | pub | - |
| 316 | type | GatewaySessionsDefaults | pub | - |
| 326 | type | GatewayThinkingLevelOption | pub | - |
| 331 | type | GatewayAgentRow | pub | - |
| 333 | type | AgentsListResult | pub | - |
| 340 | type | AgentIdentityResult | pub | - |
| 350 | type | AgentFileEntry | pub | - |
| 359 | type | AgentsFilesListResult | pub | - |
| 365 | type | AgentsFilesGetResult | pub | - |
| 371 | type | AgentsFilesSetResult | pub | - |
| 378 | type | SessionWorkspaceFileEntry | (private) | - |
| 391 | type | SessionWorkspaceBrowserEntry | (private) | - |
| 400 | type | SessionWorkspaceBrowserResult | (private) | - |
| 408 | type | SessionWorkspaceArtifactEntry | (private) | - |
| 420 | type | SessionWorkspaceListResult | pub | - |
| 428 | type | SessionWorkspaceGetResult | pub | - |
| 434 | type | SessionWorkspaceSetResult | pub | - |
| 440 | type | ArtifactDownloadResult | pub | - |
| 447 | type | SessionRunStatus | pub | - |
| 448 | type | SubagentRunState | (private) | - |
| 450 | type | SessionCompactionCheckpointReason | (private) | - |
| 456 | type | SessionCompactionTranscriptReference | (private) | - |
| 463 | type | SessionCompactionCheckpoint | pub | - |
| 477 | type | SessionCompactionCheckpointPreview | (private) | - |
| 482 | type | GatewaySessionRow | pub | - |
| 563 | type | SessionsListResult | pub | - |
| 565 | type | SessionsCompactionListResult | pub | - |
| 571 | type | SessionsCompactionBranchResult | pub | - |
| 583 | type | SessionsCompactionRestoreResult | pub | - |
| 594 | type | SessionsRewindResult | pub | - |
| 596 | type | SessionsForkResult | pub | - |
| 598 | type | SessionBranch | pub | - |
| 599 | type | SessionsBranchesListResult | pub | - |
| 601 | type | SessionsBranchesSwitchResult | pub | - |
| 604 | type | SessionsPatchResult | pub | - |
| 628 | type | CronRunStatus | pub | - |
| 629 | type | CronDeliveryStatus | pub | - |
| 630 | type | CronJobsEnabledFilter | pub | - |
| 631 | type | CronJobsSortBy | pub | - |
| 632 | type | CronRunScope | pub | - |
| 633 | type | CronRunsStatusValue | pub | - |
| 634 | type | CronRunsStatusFilter | pub | - |
| 635 | type | CronSortDir | pub | - |
| 637 | type | CronSchedule | (private) | - |
| 643 | type | CronSessionTarget | (private) | - |
| 644 | type | CronWakeMode | (private) | - |
| 646 | type | CronPayload | pub | - |
| 673 | type | CronDelivery | (private) | - |
| 682 | type | CronFailureDestination | (private) | - |
| 689 | type | CronFailureAlert | (private) | - |
| 698 | type | CronJobState | (private) | - |
| 717 | type | CronJob | pub | - |
| 728 | type | CronStatus | pub | - |
| 734 | type | CronRunResult | pub | - |
| 749 | type | CronRunLogEntry | pub | - |
| 776 | type | CronJobsListResult | pub | - |
| 785 | type | CronRunsResult | pub | - |
| 794 | type | SkillsStatusConfigCheck | (private) | - |
| 799 | type | SkillInstallOption | (private) | - |
| 806 | type | SkillClawHubLink | pub | - |
| 829 | type | SkillCardStatus | (private) | - |
| 835 | type | SkillStatusEntry | pub | - |
| 873 | type | SkillStatusReport | pub | - |
| 881 | type | StatusSummary | pub | - |
| 883 | type | HealthSnapshot | pub | - |
| 886 | type | ModelCatalogEntry | pub | - |
| 899 | type | ToolCatalogProfile | pub | - |
| 901 | type | ToolsCatalogResult | pub | - |
| 903 | type | ToolsEffectiveEntry | pub | - |
| 905 | type | ToolsEffectiveResult | pub | - |
| 908 | type | ModelAuthStatusProvider | pub | - |
| 910 | type | ModelAuthStatusProfile | pub | - |
| 912 | type | ModelAuthStatusResult | pub | - |
| 914 | type | ModelsProbeResult | pub | - |
| 916 | type | SystemAgentSetupActivateParams | pub | - |
| 918 | type | SystemAgentSetupActivateResult | pub | - |
| 920 | type | SystemAgentSetupAuthStartResult | pub | - |
| 922 | type | SystemAgentSetupDetectResult | pub | - |
| 924 | type | SystemAgentSetupVerifyResult | pub | - |
| 926 | type | WizardNextResult | pub | - |
| 928 | type | WizardStep | pub | - |

## Public API
