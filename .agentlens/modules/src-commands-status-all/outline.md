# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 2 large files in this module.

## src/commands/status-all/channels.ts (568 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 36 | type | ChannelRow | (private) |
| 44 | type | ChannelAccountRow | (private) |
| 49 | type | ResolvedChannelAccountRowParams | (private) |
| 56 | fn | existsSyncMaybe | (private) |
| 69 | fn | resolveChannelAccountRow | (private) |
| 90 | fn | formatAccountLabel | (private) |
| 98 | fn | buildAccountNotes | (private) |
| 170 | fn | resolveLinkFields | (private) |
| 186 | fn | collectMissingPaths | (private) |
| 211 | fn | isLikelyDependencyTreeCorruption | (private) |
| 217 | fn | formatLoadFailureDetail | (private) |
| 225 | fn | buildChannelsTable | pub |
| 328 | fn | state | (private) |
| 360 | fn | detail | (private) |

## src/commands/status-all/format.ts (539 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 19 | type | StatusOverviewRow | pub |
| 24 | type | StatusUpdateLike | (private) |
| 26 | type | StatusGatewayConnection | (private) |
| 31 | type | StatusGatewayProbe | (private) |
| 36 | type | StatusGatewayProbeAuth | (private) |
| 41 | type | StatusGatewaySelf | (private) |
| 51 | type | StatusManagedService | (private) |
| 64 | fn | resolveStatusUpdateChannelInfo | pub |
| 84 | fn | buildStatusUpdateSurface | pub |
| 102 | fn | formatStatusDashboardValue | pub |
| 108 | fn | formatStatusTailscaleValue | pub |
| 151 | fn | formatStatusServiceValue | pub |
| 174 | fn | resolveStatusDashboardUrl | pub |
| 190 | fn | buildStatusOverviewRows | pub |
| 239 | fn | buildStatusOverviewSurfaceRows | pub |
| 330 | fn | formatGatewayAuthUsed | pub |
| 351 | fn | formatGatewaySelfSummary | pub |
| 365 | fn | buildGatewayStatusSummaryParts | pub |
| 406 | fn | buildStatusGatewaySurfaceValues | pub |
| 478 | fn | buildGatewayStatusJsonPayload | pub |
| 527 | fn | redactSecrets | pub |
