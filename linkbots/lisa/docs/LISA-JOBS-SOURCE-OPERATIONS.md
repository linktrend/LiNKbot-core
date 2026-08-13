# Lisa jobs source operations

WP-07 is a source-only catalogue and packaging change. The ten logical job
families are defined in `ops/jobs/lisa-job-catalogue.ts`; all entries are
disabled, use `delivery.mode: none`, and retain the explicit live/provider
hard stops. Embedded checkpoints and hooks are catalogue entries, not extra
standalone timers.

The unified renderer accepts structured JSON or stdin and fails closed for
unknown kinds, unresolved placeholders, table-form weekly/monthly output,
missing `Other — specify`, or private-health values in work output. It renders
text only; it does not deliver, schedule, invoke a provider, or mutate state.

The disposable stage package contains deterministic source files with
per-file SHA-256 hashes and byte sizes. Package verification and synthetic
renderer execution are local source checks only. The immutable live-comparison
receipt and profile bundle remain unchanged.

## Evidence boundary

- **SOURCE PASS:** catalogue validation, renderer positive/negative coverage,
  deterministic package verification, and synthetic disposable-package
  rendering. The immutable profile validator records a pre-existing
  profile/live-parity HOLD: its `TOOLS.md` receipt mismatch is unchanged from
  the frozen base and is not refreshed or forged by this source packet.
- **STAGE HOLD:** no stage installation, schedule creation, schedule update,
  enablement, runtime, or stage workspace action was performed.
- **CROSS-SYSTEM E2E HOLD:** no real provider, Google, Telegram, email, GSM,
  VPS, or Mac Mini interaction was performed or claimed.
- **PRODUCTION ACTIVATION HOLD:** no deployment, timer/service change,
  activation, delivery, or external service action was performed.

Provider release and opaque credential bindings remain an explicit source
`HOLD` until an authorized owner supplies exact matching evidence. No source
HOLD is converted into stage, E2E, or production readiness.
