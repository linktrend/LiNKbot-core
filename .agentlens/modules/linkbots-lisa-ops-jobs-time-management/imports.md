# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    linkbots_lisa_ops_jobs_time_management[linkbots-lisa-ops-jobs-time-management] --> state[state]
    linkbots_lisa_ops_jobs_time_management[linkbots-lisa-ops-jobs-time-management] --> state[state]
    linkbots_lisa_ops_jobs_time_management[linkbots-lisa-ops-jobs-time-management] --> fixtures[fixtures]
    linkbots_lisa_ops_jobs_time_management[linkbots-lisa-ops-jobs-time-management] --> _[.]
    linkbots_lisa_ops_jobs_time_management[linkbots-lisa-ops-jobs-time-management] --> _[.]
    linkbots_lisa_ops_jobs_time_management[linkbots-lisa-ops-jobs-time-management] --> _[.]
    linkbots_lisa_ops_jobs_time_management[linkbots-lisa-ops-jobs-time-management] --> _[.]
    linkbots_lisa_ops_jobs_time_management[linkbots-lisa-ops-jobs-time-management] --> node_fs[node:fs]
    linkbots_lisa_ops_jobs_time_management[linkbots-lisa-ops-jobs-time-management] --> node_os[node:os]
    linkbots_lisa_ops_jobs_time_management[linkbots-lisa-ops-jobs-time-management] --> node_path[node:path]
    linkbots_lisa_ops_jobs_time_management[linkbots-lisa-ops-jobs-time-management] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../../../../../src/state/lisa-principal-task-store.js`
- `../../../../../src/state/openclaw-agent-db.js`
- `./fixtures/golden-scenarios.json`
- `./intake.js`
- `./planner.js`
- `./principal-task.js`
- `./time-contracts.js`
- `node:fs`
- `node:os`
- `node:path`
- `vitest`
