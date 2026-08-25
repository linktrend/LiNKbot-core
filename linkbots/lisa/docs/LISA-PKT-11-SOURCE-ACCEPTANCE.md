# PKT-11 / ISS-11 source acceptance

This document records the source-only handoff for Lisa integrated acceptance.
It does not deploy Lisa, change VPS services or schedules, authenticate a
Google account, run a production canary, or grant execution approval.

## Immutable source receipt

The committed receipt is
`linkbots/lisa/ops/receipts/pkt-11-source-acceptance.receipt.json`. It is
bound to the protected development base recorded in the receipt and covers
only the PKT-11 owned paths. The receipt intentionally lists PKT-01 through
PKT-10 as required but not reproduced; their exact accepted commit/tree
receipts must be read from the external runtime authority snapshot.

The receipt is deterministic: its digest is over the canonical JSON payload
without `receiptDigestSha256`. `validateSourceAcceptanceReceipt` rejects a
changed source identity, owned/prohibited path set, dependency reproduction,
gate claim, action flag, or rollback claim.

## Current source posture

`linkbots/lisa/ops/receipts/stage-workspace-package-source.receipt.json` is
`verified-source` after the package owner refreshed only the 19 stale hash/byte
declarations in the manifest. The receipt is bound to the exact protected
`origin/development` base recorded in the PKT-11 source receipt. This source
repair does not deploy or authorize staging; all external gates remain HOLD.

The reconciliation tool accepts sanitized Local/VPS inventories only. It
keeps VPS authoritative, retains conflicts as evidence, requires explicit
destinations for Local-only records, and requires final-delta gates before a
final reconciliation can be complete. It performs no VPS, profile, service,
credential, channel, schedule, or deletion action.

## External gates remain separate

Every gate in the PKT-11 receipt is `HOLD`:

- exact qualified provider release and provider receipt;
- independent Terra verification and independent review;
- stage proof, VPS proof, and production canary;
- Principal acceptance; and
- verified rollback/recovery.

The referenced Google qualification receipt remains a source/provider
contract. If qualification is unavailable, Workspace execution fails closed;
this source receipt does not fabricate qualification or perform OAuth/live
Google calls. Schedule comparison and any schedule change require a separate
founder-approved live receipt.

## Focused source checks

From the repository root:

```sh
node scripts/run-vitest.mjs linkbots/lisa/ops
node scripts/check-changed.mjs -- linkbots/lisa
git diff --check
```

The reconciliation tests can also run without the repository test wrapper:

```sh
node --test linkbots/lisa/ops/lisa-vps-reconciliation.test.mjs
```

The stage package source receipt is generated without an absolute path or
target state:

```sh
node --experimental-strip-types \
  --import ./linkbots/lisa/ops/register-strip-types-js-resolve.mjs \
  --input-type=module \
  -e 'import { buildStageWorkspacePackageSourceReceipt } from "./linkbots/lisa/ops/stage-workspace-package.ts"; console.log(JSON.stringify(buildStageWorkspacePackageSourceReceipt(), null, 2))'
```

## Reversible handoff

Before any external promotion, the source checkpoint can be reverted by its
exact commit/tree identity. No live restore has been attempted here. Any
stage/VPS restore, schedule mutation, production canary, or Mac deletion
requires its own approval, receipt, and rollback proof.
