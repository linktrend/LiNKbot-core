# Lisa job catalogue and source renderer

This directory is source-only. `lisa-job-catalogue.ts` defines the ten approved
logical families and their embedded or scheduled entries. Every entry is
`enabled: false`, uses `delivery.mode: "none"`, and carries explicit hard stops.
The older six-job `jobs.stage-seed.json` payload is retained as a separate
historical stage-ops compatibility catalogue; it is not one of the ten Lisa
families.

## Safe rendering

Use structured JSON and select one registered kind:

```bash
node --import tsx --experimental-strip-types \
  ops/jobs/render-lisa-job-template.ts executive-digest input.json
```

Use `-` instead of `input.json` for stdin. Unknown kinds, unresolved
placeholders, table-form weekly/monthly output, missing `Other — specify`, and
private-health values in work templates fail closed. Rendering is not delivery
and does not call a provider.

## Activation boundary

Provider release and opaque credential bindings are checked by
`checkLisaProviderBindings`. Missing or mismatched bindings return an explicit
`HOLD`; there is no fallback provider or silent activation. The source packet
does not create timers, install schedules, access live Lisa/VPS/Mac Mini state,
or claim stage, cross-system E2E, deployment, or production PASS.

The ten-family catalogue and the disposable stage package contain no mutable
state, real private data, addresses, chat IDs, Drive IDs, tokens, or secrets.

## Future state contracts

The `lisa-job-state-*` and `lisa-compliance-state-*` wrappers are intentional
source-only entrypoints for future Lisa job and compliance foundations. They
expose the canonical `src/state` contracts for static review only. They do not
activate a job, schedule, database, service, provider, or live Lisa behavior.
