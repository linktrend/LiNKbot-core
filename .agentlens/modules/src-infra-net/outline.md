# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 5 large files in this module.

## src/infra/net/fetch-guard.ssrf.test.ts (2370 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 54 | fn | createPinnedDispatcherCompatibilityError | (private) |
| 61 | fn | redirectResponse | (private) |
| 68 | fn | okResponse | (private) |
| 72 | fn | raceWithTimeoutResult | (private) |
| 92 | fn | getDispatcherClassName | (private) |
| 100 | fn | expectDispatcherAttached | (private) |
| 104 | fn | getFetchInputUrl | (private) |
| 114 | fn | firstMockCall | (private) |
| 118 | fn | getSecondRequestHeaders | (private) |
| 123 | fn | requireRecord | (private) |
| 130 | fn | getFirstRequestInit | (private) |
| 139 | fn | getSecondRequestInit | (private) |
| 148 | fn | expectAgentConstructorOptions | (private) |
| 161 | fn | expectRedirectFailure | (private) |
| 194 | type | LookupFn | (private) |
| 212 | fn | createStalledLookup | (private) |
| 233 | fn | clearProxyEnv | (private) |
| 239 | fn | runProxyModeDispatcherExpectation | (private) |
| 291 | type | ConfiguredLocalOriginFetchRequest | (private) |
| 295 | type | ManagedProxyLoopbackMode | (private) |
| 297 | fn | installManagedProxyRuntime | (private) |
| 312 | fn | expectConfiguredLocalOriginManagedProxyFetch | (private) |
| 346 | fn | expectConfiguredLocalOriginManagedProxyBlock | (private) |
| 516 | fn | globalFetch | (private) |
| 521 | class | MockAgent | (private) |
| 524 | class | MockEnvHttpProxyAgent | (private) |
| 527 | class | MockProxyAgent | (private) |
| 560 | class | MockAgent | (private) |
| 563 | class | MockEnvHttpProxyAgent | (private) |
| 566 | class | MockProxyAgent | (private) |
| 623 | class | MockAgent | (private) |
| 626 | class | MockEnvHttpProxyAgent | (private) |
| 629 | class | MockProxyAgent | (private) |
| 659 | fn | globalFetch | (private) |
| 664 | class | MockAgent | (private) |
| 667 | class | MockEnvHttpProxyAgent | (private) |
| 670 | class | MockProxyAgent | (private) |
| 954 | fn | onUnhandledRejection | (private) |
| 2357 | fn | toLintErrorObject | (private) |

## src/infra/net/fetch-guard.ts (732 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 44 | fn | resolveDispatcherTimeoutMs | (private) |
| 56 | type | FetchLike | (private) |
| 64 | type | GuardedFetchMode | pub |
| 66 | type | GuardedFetchOptions | pub |
| 103 | type | GuardedFetchResult | pub |
| 110 | type | GuardedFetchInternalOptions | (private) |
| 117 | type | GuardedFetchConfiguredLocalOriginOptions | (private) |
| 121 | type | GuardedFetchPresetOptions | (private) |
| 129 | fn | runAbortablePreflight | (private) |
| 138 | fn | settle | (private) |
| 146 | fn | onAbort | (private) |
| 167 | fn | getRedirectVisitKey | (private) |
| 171 | fn | isTruthyEnvValue | (private) |
| 175 | fn | withStrictGuardedFetchMode | pub |
| 179 | fn | withTrustedEnvProxyGuardedFetchMode | pub |
| 185 | fn | withTrustedExplicitProxyGuardedFetchMode | pub |
| 191 | fn | resolveGuardedFetchMode | (private) |
| 203 | fn | isManagedProxyActive | (private) |
| 207 | fn | assertExplicitProxySupportsPinnedDns | (private) |
| 223 | fn | createPolicyDispatcherWithoutPinnedDns | (private) |
| 258 | fn | assertExplicitProxyAllowed | (private) |
| 299 | fn | isRedirectStatus | (private) |
| 303 | fn | isAmbientGlobalFetch | (private) |
| 314 | fn | retainSafeHeadersForCrossOriginRedirectHeaders | pub |
| 320 | fn | captureGuardedFetchExchange | (private) |
| 355 | fn | retainSafeHeadersForCrossOriginRedirect | (private) |
| 362 | fn | resolveRetainedAuthorizationForRedirect | (private) |
| 387 | fn | restoreRedirectAuthorization | (private) |
| 399 | fn | dropBodyHeaders | (private) |
| 413 | fn | rewriteRedirectInitForMethod | (private) |
| 440 | fn | rewriteRedirectInitForCrossOrigin | (private) |
| 463 | fn | fetchWithSsrFGuard | pub |
| 471 | fn | fetchConfiguredLocalOriginWithSsrFGuard | pub |
| 484 | fn | fetchWithSsrFGuardInternal | (private) |
| 507 | fn | release | (private) |
| 544 | fn | resolvePinnedHostname | (private) |

## src/infra/net/proxy-fetch.test.ts (523 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 36 | class | MockUndiciFormDataLocal | (private) |
| 48 | class | ProxyAgent | (private) |
| 57 | class | EnvHttpProxyAgentLocal | (private) |
| 104 | fn | requireProxyFetch | (private) |
| 113 | fn | requireUndiciFetchCall | (private) |
| 121 | fn | requireUndiciFetchInit | (private) |
| 129 | fn | requireHeadersInit | (private) |
| 139 | fn | clearProxyEnv | (private) |
| 145 | fn | restoreProxyEnv | (private) |

## src/infra/net/ssrf.ts (780 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 30 | type | LookupCallback | (private) |
| 36 | type | LookupResult | (private) |
| 39 | class | SsrFBlockedError | pub |
| 46 | type | LookupFn | pub |
| 48 | type | SsrFPolicy | pub |
| 69 | fn | normalizeSsrFPolicyHostnames | (private) |
| 73 | fn | normalizePolicyHostnames | (private) |
| 77 | fn | normalizeSsrFPolicyForComparison | (private) |
| 94 | fn | isSameSsrFPolicy | pub |
| 101 | fn | mergeSsrFPolicies | pub |
| 140 | fn | ssrfPolicyFromHttpBaseUrlAllowedHostname | pub |
| 156 | fn | normalizeSsrFPolicyOrigin | (private) |
| 173 | fn | normalizeSsrFPolicyOrigins | (private) |
| 186 | fn | ssrfPolicyFromHttpBaseUrlAllowedOrigin | pub |
| 191 | fn | ssrfPolicyFromHttpBaseUrlFakeIpHostnameAllowlist | pub |
| 219 | fn | normalizeHostnameSet | (private) |
| 223 | fn | normalizeHostnameAllowlist | pub |
| 227 | fn | isPrivateNetworkAllowedByPolicy | pub |
| 231 | fn | shouldSkipPrivateNetworkChecks | (private) |
| 238 | fn | resolveSsrFPolicyForUrl | pub |
| 259 | fn | resolveIpv4SpecialUseBlockOptions | (private) |
| 265 | fn | resolveIpv6SpecialUseBlockOptions | (private) |
| 271 | fn | isHostnameAllowedByPattern | pub |
| 282 | fn | matchesHostnameAllowlist | pub |
| 289 | fn | looksLikeUnsupportedIpv4Literal | (private) |
| 303 | fn | isPrivateIpAddress | pub |
| 340 | fn | isBlockedHostname | pub |
| 348 | fn | isBlockedHostnameNormalized | (private) |
| 359 | fn | isBlockedHostnameOrIp | pub |
| 370 | fn | assertAllowedHostOrIpOrThrow | (private) |
| 376 | fn | resolveHostnamePolicyChecks | (private) |
| 403 | fn | assertAllowedResolvedAddressesOrThrow | (private) |
| 415 | fn | isLoopbackIpAddressIncludingEmbeddedIpv4 | (private) |
| 429 | fn | isUnspecifiedIpAddressIncludingEmbeddedIpv4 | (private) |
| 446 | fn | isExplicitLoopbackHostname | (private) |
| 455 | fn | assertAllowedTrustedHostnameResolvedAddressesOrThrow | (private) |
| 473 | fn | normalizeLookupResults | (private) |
| 480 | fn | createPinnedLookup | pub |
| 545 | type | PinnedHostname | pub |
| 551 | type | PinnedHostnameOverride | pub |
| 556 | type | PinnedDispatcherPolicy | pub |
| 576 | fn | dedupeAndPreferIpv4 | (private) |
| 594 | fn | resolvePinnedHostnameWithPolicy | pub |
| 634 | fn | assertHostnameAllowedWithPolicy | pub |
| 638 | fn | resolvePinnedHostname | pub |
| 645 | fn | withPinnedLookup | (private) |
| 652 | fn | resolvePinnedDispatcherLookup | (private) |
| 682 | fn | createPinnedDispatcher | pub |
| 721 | type | ClosableDispatcher | (private) |
| 726 | fn | destroyDispatcher | (private) |
| 734 | fn | waitForDispatcherClose | (private) |
| 763 | fn | closeDispatcher | pub |
| 775 | fn | assertPublicHostname | pub |

## src/infra/net/undici-global-dispatcher.test.ts (889 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 23 | class | AgentLocal | (private) |
| 27 | class | EnvHttpProxyAgentLocal | (private) |
| 32 | class | ProxyAgentLocal | (private) |
| 36 | class | ManagedUndiciDispatcherLocal | (private) |
| 76 | fn | setCurrentDispatcherLocal | (private) |
| 79 | fn | getCurrentDispatcherLocal | (private) |
