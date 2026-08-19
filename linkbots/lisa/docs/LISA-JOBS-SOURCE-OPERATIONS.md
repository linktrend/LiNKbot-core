# Lisa jobs source operations

The ten logical job families are defined in `ops/jobs/lisa-job-catalogue.ts`. Embedded checkpoints and hooks remain catalogue entries, not duplicate timers.

Production activation is recorded separately in the live cron store. The 19 approved operational declarations execute as `lisa-cron` but must be owned by `main`, so Lisa can list and manage them.

## Ownership repair

Run `ops/jobs/lisa-live-job-ownership.mjs <openclaw.sqlite>` first for a read-only inspection. During a maintenance stop, add `--apply` to:

- create an exclusive database backup;
- require all 19 approved declarations to be present, enabled, and assigned to `lisa-cron`;
- set their owner to `main` and owning session to `agent:main:main`;
- delete the exact retired job names.

The command fails closed if the approved declaration set is incomplete, disabled, or assigned to another execution agent. It never changes schedules, payloads, delivery targets, run history, or job identifiers.

## Evidence boundary

- Source evidence consists of catalogue validation, renderer coverage, deterministic package verification, and ownership-migration coverage.
- Production evidence additionally requires the database backup, migrated job count, removed retired-job check, service health, and a real Lisa main-agent cron listing.
- The profile bundle and immutable live-comparison receipt may be refreshed only after the exact stable files have been deployed and hash-compared with VPS Lisa.
- Provider release and opaque credential bindings remain independently governed; this repair does not grant provider authority or expose credentials.
