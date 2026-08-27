# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 2 large files in this module.

## linkbots/lisa/ops/jobs/lisa-job-catalogue.ts (720 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 41 | type | LisaCatalogueProviderDependency | pub |
| 48 | type | LisaCatalogueSchedule | pub |
| 56 | type | LisaCatalogueDeadlines | pub |
| 62 | type | LisaCatalogueEntry | pub |
| 80 | type | LisaJobCatalogue | pub |
| 90 | type | LisaProviderBinding | pub |
| 96 | type | LisaCatalogueProviderDecision | pub |
| 164 | fn | idempotencyKey | (private) |
| 170 | fn | deriveLisaJobIdempotencyKey | pub |
| 176 | fn | dependency | (private) |
| 184 | fn | entry | (private) |
| 221 | fn | subtractMinutes | (private) |
| 228 | fn | reportDeadline | (private) |
| 236 | fn | preparationCron | (private) |
| 552 | fn | validateLocalTime | (private) |
| 561 | fn | validateLisaJobCatalogue | pub |
| 654 | fn | assertValidLisaJobCatalogue | pub |
| 661 | fn | canonicalLisaJobCatalogueJson | pub |
| 668 | fn | hashLisaJobCatalogue | pub |
| 672 | fn | checkLisaProviderBindings | pub |
| 707 | fn | catalogueSummary | pub |

## linkbots/lisa/ops/jobs/lisa-job-desired-state.ts (742 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 16 | type | LisaDesiredSchedule | pub |
| 23 | type | LisaDesiredDelivery | pub |
| 29 | type | LisaDesiredDeclaration | pub |
| 58 | type | LisaExternalMaintenanceDependency | pub |
| 67 | type | LisaJobDesiredState | pub |
| 80 | fn | idempotencyKey | (private) |
| 88 | fn | declaration | (private) |
| 636 | type | LisaLiveDeclarationSnapshot | pub |
| 648 | type | LisaDesiredStateDiff | pub |
| 655 | fn | validateLisaJobDesiredState | pub |
| 702 | fn | assertValidLisaJobDesiredState | pub |
| 710 | fn | diffLisaJobDesiredState | pub |
