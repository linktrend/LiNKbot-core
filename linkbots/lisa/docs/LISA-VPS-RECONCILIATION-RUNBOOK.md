# Lisa Local-to-VPS reconciliation runbook

This is a non-public, redacted source runbook. It operates on sanitized
metadata inventories only. Never place private memory, message bodies, health
details, credentials, OAuth material, database payloads, or live profile data
in an inventory or receipt.

## Authority

VPS Lisa is authoritative. A Local/VPS hash conflict is retained as evidence;
the Local value is never used to replace the VPS value. Local-only information
can be added only through an explicit additive destination with provenance, or
retained in a verified archive.

The ten-job source catalogue and current VPS architecture remain preferred.
Older jobs, schedules, Ship/Pull, Repair Dispatcher, and duplicate reminders
must remain disabled or closed and must not be reactivated by reconciliation.

## Sanitized input

Prepare one JSON inventory per source from an approved read-only capture. Keep
only relative category paths, stable identifiers, byte counts, record counts,
timestamps, SHA-256 values, and redacted capture references. A source file may
use the existing `lisa-direct-migration.mjs snapshot` entry shape; do not copy
its payload or absolute root paths into this evidence.

The inventory contract rejects payload/value fields and secret-material fields
by field structure. Sanitized metadata labels, categories, scopes, and paths
remain valid, including labels such as `oauth-token-metadata` and paths such as
`config/google-oauth.json`; do not place a secret value in any field.

Example shape:

```json
{
  "source": {
    "id": "local",
    "inventorySha256": "<sha256 of canonical entries>",
    "captureRef": "local-capture-redacted"
  },
  "entries": [
    {
      "key": "record:history-001",
      "path": "workspace/memory/record-001",
      "kind": "record",
      "sizeBytes": 120,
      "mtimeMs": 1755000000000,
      "sha256": "<sha256>"
    }
  ]
}
```

For a Local-only item, add a reviewed `reconciliation` decision. Use
`vps_additive` only for genuinely unique, useful material and use `archive`
for retained history or excluded capability evidence. An omitted decision is
an unresolved HOLD. For old jobs, set `lifecycle` to `disabled` or `closed`;
the tool rejects active legacy-job reactivation.

For every same-key Local/VPS hash conflict, add a reviewed
`conflictDisposition` to the Local entry. It must either prove that no required
unique Local facts exist:

```json
{
  "reviewed": true,
  "disposition": "no_required_unique_facts",
  "reviewRef": "review:conflict-001"
}
```

or list every extracted fact with an additive VPS or archive destination and
provenance:

```json
{
  "reviewed": true,
  "disposition": "facts_extracted",
  "reviewRef": "review:conflict-002",
  "facts": [
    {
      "key": "record:history-001",
      "destination": { "kind": "vps_additive", "ref": "lbrain:additive-001" },
      "provenance": "local:history-001"
    }
  ]
}
```

An absent or invalid conflict disposition becomes an unresolved HOLD and
prevents completeness acceptance. VPS authority and the conflicting Local
evidence remain preserved.

## Deterministic comparison

Run the source-only comparator in an isolated worktree:

```sh
node linkbots/lisa/ops/lisa-vps-reconciliation.mjs compare \
  --local sanitized/local-inventory.json \
  --vps sanitized/vps-inventory.json \
  --phase initial \
  --output receipts/wp-02-initial-reconciliation.json
node linkbots/lisa/ops/lisa-vps-reconciliation.mjs verify \
  --manifest receipts/wp-02-initial-reconciliation.json
```

The output is canonical and contains sorted inventories, comparison status,
VPS authority, Local classification, destination/provenance references,
summary counts, gate state, and a SHA-256 receipt digest. The digest is not a
data-completeness claim; unresolved entries remain HOLDs.

## Required gates outside this tool

- Freeze consistent Local and VPS SQLite backups before any import. Never copy
  a live database with active WAL state.
- Verify the initial receipt against the exact sanitized input hashes.
- Reconcile through record-aware import tooling owned by the target data
  system; retain IDs and provenance and preserve VPS rows on conflict.
- Run representative recall tests without putting answers in the evidence
  bundle.
- Quiesce Local Lisa, capture the final delta, and run the same comparator with
  `--phase final-delta --local-quiesced true --recovery-verified true
--final-delta-captured true`.
- The final-delta comparator and serialized-manifest verifier both require
  `localQuiesced`, `recoveryVerified`, and `finalDeltaCaptured` to be true.
- Confirm every Local-only item has an additive VPS destination or verified
  searchable archive destination before WP-05 retirement is considered.

This runbook does not authorize VPS/profile/service/credential/channel/
schedule/deletion changes.
