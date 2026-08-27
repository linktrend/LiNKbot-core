# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 2 large files in this module.

## src/routing/resolve-route.test.ts (1292 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 11 | type | ResolvedRouteExpectation | (private) |
| 19 | type | CompatRoutePeerKind | (private) |
| 23 | fn | resolveRoute | (private) |
| 31 | fn | expectResolvedRoute | (private) |
| 48 | fn | createCompatPeer | (private) |
| 53 | fn | expectDirectRouteSessionKey | (private) |
| 69 | fn | expectRouteResolutionCase | (private) |
| 76 | fn | expectInboundLastRouteSessionKeyCase | (private) |
| 89 | fn | expectDerivedLastRoutePolicyCase | (private) |
| 718 | fn | makeDiscordPeerBinding | (private) |
| 728 | fn | makeDiscordGuildBinding | (private) |
| 738 | fn | resolveDiscordThreadRoute | (private) |
| 753 | fn | expectDiscordThreadRoute | (private) |
| 930 | type | DiscordBinding | (private) |
| 932 | fn | makeDiscordRoleBinding | (private) |
| 951 | fn | expectDiscordRoleRoute | (private) |

## src/routing/resolve-route.ts (823 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 27 | type | RoutePeerKind | pub |
| 29 | type | RoutePeer | pub |
| 34 | type | ResolveAgentRouteInput | pub |
| 48 | type | ResolvedAgentRoute | pub |
| 73 | fn | deriveLastRoutePolicy | pub |
| 80 | fn | resolveInboundLastRouteSessionKey | pub |
| 87 | fn | normalizeToken | (private) |
| 91 | fn | normalizeId | (private) |
| 95 | fn | buildAgentSessionKey | pub |
| 119 | fn | listAgents | (private) |
| 124 | type | AgentLookupCache | (private) |
| 132 | fn | resolveAgentLookupCache | (private) |
| 156 | fn | pickFirstExistingAgentId | pub |
| 173 | type | NormalizedPeerConstraint | (private) |
| 179 | type | NormalizedBindingMatch | (private) |
| 187 | type | EvaluatedBinding | (private) |
| 193 | type | BindingScope | (private) |
| 200 | type | EvaluatedBindingsCache | (private) |
| 220 | type | EvaluatedBindingsIndex | (private) |
| 230 | type | EvaluatedBindingsByChannel | (private) |
| 235 | fn | resolveAccountPatternKey | (private) |
| 242 | fn | buildEvaluatedBindingsByChannel | (private) |
| 285 | fn | mergeEvaluatedBindingsInSourceOrder | (private) |
| 325 | fn | pushToIndexMap | (private) |
| 341 | fn | peerLookupKeys | (private) |
| 351 | fn | collectPeerIndexedBindings | (private) |
| 376 | fn | buildEvaluatedBindingsIndex | (private) |
| 426 | fn | getEvaluatedBindingsForChannelAccount | (private) |
| 469 | fn | getEvaluatedBindingIndexForChannelAccount | (private) |
| 486 | fn | normalizePeerConstraint | (private) |
| 503 | fn | normalizeBindingMatch | (private) |
| 524 | fn | resolveRouteCacheForConfig | (private) |
| 544 | fn | formatRouteCachePeer | (private) |
| 551 | fn | formatRoleIdsCacheKey | (private) |
| 567 | fn | buildResolvedRouteCacheKey | (private) |
| 580 | fn | hasGuildConstraint | (private) |
| 584 | fn | hasTeamConstraint | (private) |
| 588 | fn | hasRolesConstraint | (private) |
| 592 | fn | matchesBindingScope | (private) |
| 613 | fn | resolveAgentRoute | pub |
| 660 | fn | choose | (private) |
| 702 | fn | formatPeer | (private) |
| 704 | fn | formatNormalizedPeer | (private) |
