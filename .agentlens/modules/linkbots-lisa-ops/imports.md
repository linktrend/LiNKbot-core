# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    linkbots_lisa_ops[linkbots-lisa-ops] --> secrets[secrets]
    linkbots_lisa_ops[linkbots-lisa-ops] --> jobs[jobs]
    linkbots_lisa_ops[linkbots-lisa-ops] --> _[.]
    linkbots_lisa_ops[linkbots-lisa-ops] --> _[.]
    linkbots_lisa_ops[linkbots-lisa-ops] --> _[.]
    linkbots_lisa_ops[linkbots-lisa-ops] --> _[.]
    linkbots_lisa_ops[linkbots-lisa-ops] --> _[.]
    linkbots_lisa_ops[linkbots-lisa-ops] --> _[.]
    linkbots_lisa_ops[linkbots-lisa-ops] --> _[.]
    linkbots_lisa_ops[linkbots-lisa-ops] --> _[.]
    linkbots_lisa_ops[linkbots-lisa-ops] --> _[.]
    linkbots_lisa_ops[linkbots-lisa-ops] --> _[.]
    linkbots_lisa_ops[linkbots-lisa-ops] --> _[.]
    linkbots_lisa_ops[linkbots-lisa-ops] --> _[.]
    linkbots_lisa_ops[linkbots-lisa-ops] --> _[.]
    linkbots_lisa_ops[linkbots-lisa-ops] --> _[.]
    linkbots_lisa_ops[linkbots-lisa-ops] --> _[.]
    linkbots_lisa_ops[linkbots-lisa-ops] --> _[.]
    linkbots_lisa_ops[linkbots-lisa-ops] --> _[.]
    linkbots_lisa_ops[linkbots-lisa-ops] --> _[.]
    linkbots_lisa_ops[linkbots-lisa-ops] --> _[.]
    linkbots_lisa_ops[linkbots-lisa-ops] --> _[.]
    linkbots_lisa_ops[linkbots-lisa-ops] --> _openclaw[@openclaw]
    linkbots_lisa_ops[linkbots-lisa-ops] --> node_assert[node:assert]
    linkbots_lisa_ops[linkbots-lisa-ops] --> node_child_process[node:child_process]
    linkbots_lisa_ops[linkbots-lisa-ops] --> node_crypto[node:crypto]
    linkbots_lisa_ops[linkbots-lisa-ops] --> node_fs[node:fs]
    linkbots_lisa_ops[linkbots-lisa-ops] --> node_module[node:module]
    linkbots_lisa_ops[linkbots-lisa-ops] --> node_os[node:os]
    linkbots_lisa_ops[linkbots-lisa-ops] --> node_path[node:path]
    linkbots_lisa_ops[linkbots-lisa-ops] --> node_sqlite[node:sqlite]
    linkbots_lisa_ops[linkbots-lisa-ops] --> node_test[node:test]
    linkbots_lisa_ops[linkbots-lisa-ops] --> node_url[node:url]
```

## External Dependencies

Dependencies from other modules:

- `../../../src/secrets/resolve.ts`
- `./jobs/lisa-job-catalogue.ts`
- `./lisa-stage-ops-store.ts`
- `./lisa-vps-reconciliation.mjs`
- `./main-approve-binding.ts`
- `./model-routing-contract.ts`
- `./model-routing.openrouter-stage.ts`
- `./model-routing.ts`
- `./offline-recovery.ts`
- `./pipeline-status-cas.ts`
- `./repair-dispatcher.ts`
- `./ship-pull-contract.ts`
- `./stage-durable-store.ts`
- `./stage-ops-command.ts`
- `./stage-ops-coordinator.ts`
- `./stage-ops-cron-installer.ts`
- `./stage-ops-inventory.ts`
- `./stage-ops-payloads.ts`
- `./stage-pdf-canary.ts`
- `./stage-pdf-operational-rollback.ts`
- `./stage-workspace-package.ts`
- `./templates.ts`
- `@openclaw/gateway-protocol`
- `node:assert/strict`
- `node:child_process`
- `node:crypto`
- `node:fs`
- `node:module`
- `node:os`
- `node:path`
- `node:sqlite`
- `node:test`
- `node:url`
