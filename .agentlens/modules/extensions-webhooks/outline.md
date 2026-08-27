# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 1 large files in this module.

## extensions/webhooks/src/http.ts (797 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 21 | type | BoundTaskFlowRuntime | (private) |
| 24 | type | JsonValue | (private) |
| 152 | type | WebhookAction | (private) |
| 154 | type | TaskFlowWebhookTarget | pub |
| 162 | type | FlowView | (private) |
| 181 | type | TaskView | (private) |
| 207 | fn | pickOptionalFields | (private) |
| 221 | fn | pickOptionalTruthyStringFields | (private) |
| 235 | fn | toFlowView | (private) |
| 256 | fn | toTaskView | (private) |
| 283 | fn | writeJson | (private) |
| 289 | fn | extractSharedSecret | (private) |
| 300 | fn | formatZodError | (private) |
| 309 | fn | mapMutationResult | (private) |
| 324 | fn | mapFlowMutationResult | (private) |
| 347 | fn | mapMutationStatus | (private) |
| 388 | fn | mapCreateFlowStatus | (private) |
| 410 | fn | mapRunTaskStatus | (private) |
| 460 | fn | mapCancelStatus | (private) |
| 510 | fn | describeWebhookOutcome | (private) |
| 555 | fn | executeWebhookAction | (private) |
| 688 | fn | createTaskFlowWebhookRequestHandler | pub |
