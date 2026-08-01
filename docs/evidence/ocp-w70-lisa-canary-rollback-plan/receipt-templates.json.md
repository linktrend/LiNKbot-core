# OCP-W70 receipt field templates (non-secret)

Workshop templates only. Do not populate with secrets, account ids, message bodies, or live token values. Live fills happen only under Principal-authorized canary; repo copies must stay redacted.

## `lisa_canary_observation_v1`

```json
{
  "receiptType": "lisa_canary_observation_v1",
  "packetId": "OCP-W70-LISA-CANARY-ROLLBACK-PLAN",
  "canaryId": "REPLACE_OPERATOR_ID",
  "startedAt": "2026-08-01T00:00:00+08:00",
  "endedAt": null,
  "liveMutationAuthorized": false,
  "profileSyncAuthorized": false,
  "routingContractVersion": "2026-08-01-ocp-w30-approved-pdf-routing",
  "primaryModel": "openai/gpt-5.6-luna",
  "thinkingDefault": "medium",
  "defaultFallback": "zai/glm-5.2",
  "imageModel": "minimax/MiniMax-M3",
  "nextFallback": "moonshot/kimi-k3",
  "utilityModel": "openrouter/google/gemini-3.5-flash-lite",
  "pdfCapabilityStatus": "approved_unverified",
  "pdfDocumentModelsEnabled": true,
  "paidSpendEnablementAllowed": false,
  "evaluationOnlyRef": "nvidia/nemotron-3-super-120b-a12b",
  "evaluationOnlyEnabled": false,
  "heartbeatObserved": "skipped",
  "digestObserved": "skipped",
  "shipPullObserved": {
    "ship16": "skipped",
    "pull18": "skipped",
    "ship05": "skipped",
    "pull07": "skipped"
  },
  "repairDispatcherObserved": "skipped",
  "hardStopBreaches": [],
  "abortReason": null,
  "operator": "cursor-local-mac-mini-feature-ocp-w70-canary-rollback-20260801-1701",
  "_comment": "Docs-only template from OCP-W70. Not evidence of a live canary."
}
```

## `lisa_pdf_first_production_proof_v1`

```json
{
  "receiptType": "lisa_pdf_first_production_proof_v1",
  "capabilityBefore": "approved_unverified",
  "documentModelRef": "minimax/MiniMax-M3",
  "controlledRolloutAuthorized": false,
  "proofAt": null,
  "channel": null,
  "attachmentClass": "pdf",
  "providerValidation": null,
  "extractionOrUnderstandOutcome": null,
  "userVisibleSuccess": false,
  "rollbackTriggered": false,
  "rollbackAction": "none",
  "alternatePaidDocumentRoutingUsed": false,
  "failureEventType": null,
  "notes": "Unfilled template — first proof not claimed by OCP-W70."
}
```

## `lisa_canary_rollback_v1`

```json
{
  "receiptType": "lisa_canary_rollback_v1",
  "triggeredAt": null,
  "trigger": null,
  "action": "disable_pdf_document_routing_only",
  "preservedRoutes": "text,image,default_fallback",
  "paidSubstitution": false,
  "failureEventEmitted": false,
  "liveLisaTouched": false,
  "gitCandidateRevert": "n/a",
  "_comment": "On PDF/provider failure: disable PDF routing only; never paid substitute."
}
```
