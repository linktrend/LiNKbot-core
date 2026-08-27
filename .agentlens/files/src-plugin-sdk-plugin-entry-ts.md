# src/plugin-sdk/plugin-entry.ts

[← Back to Module](../modules/src-plugin-sdk/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 365
- **Language:** TypeScript
- **Symbols:** 134
- **Public symbols:** 132

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 139 | type | AgentHarness | pub | - |
| 140 | type | AgentPromptGuidance | pub | - |
| 141 | type | AgentPromptGuidanceEntry | pub | - |
| 142 | type | AgentPromptSurfaceKind | pub | - |
| 143 | type | AnyAgentTool | pub | - |
| 144 | type | MediaUnderstandingProviderPlugin | pub | - |
| 145 | type | MigrationApplyResult | pub | - |
| 146 | type | MigrationDetection | pub | - |
| 147 | type | MigrationItem | pub | - |
| 148 | type | MigrationPlan | pub | - |
| 149 | type | MigrationProviderContext | pub | - |
| 150 | type | MigrationProviderPlugin | pub | - |
| 152 | type | ProviderPlugin | pub | - |
| 153 | type | MigrationSummary | pub | - |
| 154 | type | OpenClawGatewayDiscoveryAdvertiseContext | pub | - |
| 155 | type | OpenClawGatewayDiscoveryService | pub | - |
| 156 | type | OpenClawPluginApi | pub | - |
| 157 | type | OpenClawPluginCommandDefinition | pub | - |
| 158 | type | OpenClawPluginConfigSchema | pub | - |
| 159 | type | OpenClawPluginDefinition | pub | - |
| 160 | type | OpenClawPluginHttpRouteHandler | pub | - |
| 161 | type | OpenClawPluginNodeHostCommand | pub | - |
| 162 | type | OpenClawPluginNodeHostCommandAvailabilityContext | pub | - |
| 164 | type | OpenClawPluginNodeInvokePolicy | pub | - |
| 165 | type | OpenClawPluginNodeInvokePolicyContext | pub | - |
| 166 | type | OpenClawPluginNodeInvokePolicyResult | pub | - |
| 167 | type | OpenClawPluginReloadRegistration | pub | - |
| 168 | type | OpenClawPluginSecurityAuditCollector | pub | - |
| 169 | type | OpenClawPluginSecurityAuditContext | pub | - |
| 170 | type | OpenClawPluginService | pub | - |
| 171 | type | OpenClawPluginServiceContext | pub | - |
| 172 | type | OpenClawPluginToolContext | pub | - |
| 173 | type | OpenClawPluginToolFactory | pub | - |
| 174 | type | PluginAgentEventEmitParams | pub | - |
| 175 | type | PluginAgentEventEmitResult | pub | - |
| 176 | type | PluginAgentEventSubscriptionRegistration | pub | - |
| 177 | type | PluginAgentTurnPrepareEvent | pub | - |
| 178 | type | PluginAgentTurnPrepareResult | pub | - |
| 179 | type | PluginCommandContext | pub | - |
| 180 | type | PluginCommandResult | pub | - |
| 181 | type | PluginControlUiDescriptor | pub | - |
| 182 | type | PluginHeartbeatPromptContributionEvent | pub | - |
| 183 | type | PluginHeartbeatPromptContributionResult | pub | - |
| 184 | type | PluginJsonValue | pub | - |
| 185 | type | PluginLogger | pub | - |
| 186 | type | PluginNextTurnInjection | pub | - |
| 187 | type | PluginNextTurnInjectionEnqueueResult | pub | - |
| 188 | type | PluginNextTurnInjectionRecord | pub | - |
| 189 | type | PluginRunContextGetParams | pub | - |
| 190 | type | PluginRunContextPatch | pub | - |
| 191 | type | PluginRuntimeLifecycleRegistration | pub | - |
| 192 | type | PluginSessionActionContext | pub | - |
| 193 | type | PluginSessionActionRegistration | pub | - |
| 194 | type | PluginSessionActionResult | pub | - |
| 195 | type | PluginSessionAttachmentParams | pub | - |
| 196 | type | PluginSessionAttachmentResult | pub | - |
| 197 | type | PluginSessionExtensionProjection | pub | - |
| 198 | type | PluginSessionExtensionRegistration | pub | - |
| 199 | type | PluginSessionSchedulerJobHandle | pub | - |
| 200 | type | PluginSessionSchedulerJobRegistration | pub | - |
| 201 | type | PluginSessionTurnScheduleParams | pub | - |
| 202 | type | PluginSessionTurnUnscheduleByTagParams | pub | - |
| 203 | type | PluginSessionTurnUnscheduleByTagResult | pub | - |
| 204 | type | PluginToolMetadataRegistration | pub | - |
| 205 | type | PluginTrustedToolPolicyRegistration | pub | - |
| 206 | type | ProviderApplyConfigDefaultsContext | pub | - |
| 207 | type | ProviderAugmentModelCatalogContext | pub | - |
| 208 | type | ProviderAuthContext | pub | - |
| 209 | type | ProviderAuthDoctorHintContext | pub | - |
| 210 | type | ProviderAuthMethod | pub | - |
| 211 | type | ProviderAuthMethodNonInteractiveContext | pub | - |
| 212 | type | ProviderAppGuidedSetup | pub | - |
| 213 | type | ProviderAppGuidedSetupCandidate | pub | - |
| 214 | type | ProviderAppGuidedSetupContext | pub | - |
| 215 | type | ProviderAuthResult | pub | - |
| 216 | type | ProviderBuildMissingAuthMessageContext | pub | - |
| 217 | type | ProviderBuildUnknownModelHintContext | pub | - |
| 218 | type | ProviderBuiltInModelSuppressionContext | pub | - |
| 219 | type | ProviderBuiltInModelSuppressionResult | pub | - |
| 220 | type | ProviderCacheTtlEligibilityContext | pub | - |
| 221 | type | ProviderCatalogContext | pub | - |
| 222 | type | ProviderCatalogResult | pub | - |
| 223 | type | ProviderDefaultThinkingPolicyContext | pub | - |
| 224 | type | ProviderDeferSyntheticProfileAuthContext | pub | - |
| 225 | type | ProviderFailoverErrorContext | pub | - |
| 226 | type | ProviderFetchUsageSnapshotContext | pub | - |
| 227 | type | ProviderModernModelPolicyContext | pub | - |
| 228 | type | ProviderNormalizeConfigContext | pub | - |
| 229 | type | ProviderNormalizeModelIdContext | pub | - |
| 230 | type | ProviderNormalizeResolvedModelContext | pub | - |
| 231 | type | ProviderNormalizeToolSchemasContext | pub | - |
| 232 | type | ProviderNormalizeTransportContext | pub | - |
| 233 | type | ProviderPrepareDynamicModelContext | pub | - |
| 234 | type | ProviderPrepareExtraParamsContext | pub | - |
| 235 | type | ProviderPrepareRuntimeAuthContext | pub | - |
| 236 | type | ProviderPreparedRuntimeAuth | pub | - |
| 237 | type | ProviderReasoningOutputMode | pub | - |
| 238 | type | ProviderReasoningOutputModeContext | pub | - |
| 239 | type | ProviderReplayPolicy | pub | - |
| 240 | type | ProviderReplayPolicyContext | pub | - |
| 241 | type | ProviderReplaySessionEntry | pub | - |
| 242 | type | ProviderReplaySessionState | pub | - |
| 243 | type | ProviderResolveConfigApiKeyContext | pub | - |
| 244 | type | ProviderResolveDynamicModelContext | pub | - |
| 245 | type | ProviderResolveTransportTurnStateContext | pub | - |
| 246 | type | ProviderResolveUsageAuthContext | pub | - |
| 247 | type | ProviderResolveWebSocketSessionPolicyContext | pub | - |
| 249 | type | ProviderResolvedUsageAuth | pub | - |
| 250 | type | ProviderSanitizeReplayHistoryContext | pub | - |
| 251 | type | ProviderThinkingPolicyContext | pub | - |
| 252 | type | ProviderThinkingProfile | pub | - |
| 253 | type | ProviderToolSchemaDiagnostic | pub | - |
| 254 | type | ProviderTransportTurnState | pub | - |
| 255 | type | ProviderUsageAuthToken | pub | - |
| 256 | type | ProviderValidateReplayTurnsContext | pub | - |
| 257 | type | ProviderWebSocketSessionPolicy | pub | - |
| 258 | type | ProviderWrapStreamFnContext | pub | - |
| 259 | type | RealtimeTranscriptionProviderPlugin | pub | - |
| 260 | type | SpeechProviderPlugin | pub | - |
| 261 | type | TranscriptSourceProvider | pub | - |
| 262 | type | UnifiedModelCatalogProviderContext | pub | - |
| 263 | type | UnifiedModelCatalogProviderPlugin | pub | - |
| 264 | type | WorkerLease | pub | - |
| 265 | type | WorkerLeaseStatus | pub | - |
| 266 | type | WorkerProfile | pub | - |
| 267 | type | WorkerProvider | pub | - |
| 268 | type | WorkerSshEndpoint | pub | - |
| 269 | type | WorkerSshIdentity | pub | - |
| 270 | type | WorkerSshIdentityRequest | pub | - |
| 272 | type | OpenClawPluginGatewayEventScope | pub | - |
| 274 | type | OpenClawPluginGatewayEvents | pub | - |
| 304 | type | DefinePluginEntryOptions | (private) | - |
| 322 | type | DefinedPluginEntry | (private) | - |
| 340 | fn | definePluginEntry | pub | `export function definePluginEntry({` |

## Public API

### `definePluginEntry`

```
export function definePluginEntry({
```

**Line:** 340 | **Kind:** fn
