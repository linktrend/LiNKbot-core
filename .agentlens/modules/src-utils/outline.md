# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 2 large files in this module.

## src/utils/usage-format.test.ts (1130 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 25 | type | ModelCostConfig | (private) |
| 26 | type | PricingTier | (private) |
| 28 | fn | setGatewayModelPricing | (private) |
| 40 | fn | clearGatewayModelPricingState | (private) |
| 45 | fn | requireCostConfig | (private) |
| 55 | fn | requireTieredPricing | (private) |
| 244 | fn | writePricing | (private) |
| 281 | fn | resolveInputPrice | (private) |
| 296 | fn | writePricing | (private) |

## src/utils/usage-format.ts (762 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 26 | type | PricingTier | (private) |
| 35 | type | RawPricingTier | (private) |
| 44 | type | ModelCostConfig | pub |
| 56 | type | UsageTotals | (private) |
| 64 | type | ModelsJsonCostCache | (private) |
| 71 | type | ProviderCostIndexCacheEntry | (private) |
| 76 | type | ProviderCostIndexSource | (private) |
| 83 | type | ProviderCostIndex | (private) |
| 89 | type | RawModelCostConfig | (private) |
| 106 | fn | formatUsd | pub |
| 116 | fn | toResolvedModelKey | (private) |
| 145 | fn | toDirectModelKey | (private) |
| 161 | fn | cacheModelKey | (private) |
| 168 | fn | shouldUseNormalizedCostLookup | (private) |
| 182 | fn | normalizeTieredPricing | (private) |
| 218 | fn | normalizeModelCostConfig | (private) |
| 229 | fn | isRawModelCostConfig | (private) |
| 233 | fn | buildProviderCostStructureFingerprint | (private) |
| 250 | fn | buildProviderCostIndexBundle | (private) |
| 286 | fn | buildProviderCostIndex | (private) |
| 293 | fn | getProviderCostIndex | (private) |
| 348 | fn | loadModelsJsonCostIndex | (private) |
| 393 | fn | findConfiguredProviderCost | (private) |
| 408 | fn | stableCostFingerprintValue | (private) |
| 426 | fn | buildModelCostFingerprint | (private) |
| 436 | fn | isProviderCostSourceCurrent | (private) |
| 455 | fn | refreshProviderCostIndexEntry | (private) |
| 483 | fn | refreshProviderCostIndexMutations | (private) |
| 496 | fn | hasProviderCostSourceForKey | (private) |
| 521 | fn | getProviderCostFromIndex | (private) |
| 580 | fn | serializeCostIndex | (private) |
| 590 | fn | resolveModelCostConfigFingerprint | pub |
| 611 | fn | resolveModelCostConfig | pub |
| 666 | fn | selectPricingTier | (private) |
| 692 | fn | getSortedPricingTiers | (private) |
| 702 | fn | computeTieredCost | (private) |
| 726 | fn | estimateUsageCost | pub |
| 757 | fn | resetUsageFormatCachesForTest | pub |
