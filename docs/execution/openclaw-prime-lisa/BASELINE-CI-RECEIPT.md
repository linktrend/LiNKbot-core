---
summary: "Exact baseline CI receipt and progressive failure classification"
read_when: "Validating the OpenClaw fork's inherited CI failure before packet or Phase work"
title: "Baseline CI receipt"
---

# OpenClaw fork baseline CI receipt

The machine-readable receipt is
`docs/execution/openclaw-prime-lisa/baseline-ci-receipt.json`. It is reusable
only when `.github/openclaw_progressive_validation.py`
matches protected `origin/development` commit
`9a777369f12c7c9d094c2c2d04f936603843b3a3` (tree
`9d1bc438a3fdf209539fdf2f30545c09141b7682`), the exact progressive
validation policy digest, workflow, run `32917935092`, and the complete ten-job
failure contract recorded in the receipt. The six protected CI contexts are
`checks-fast-core`, `checks-fast-plugin-contracts-shard`,
`checks-node-core-test-nondist-shard`, `check-shard`, `check-additional-shard`,
and `check-docs`.

The classifier permits only that exact unchanged inherited failure set. A
changed contract path, stale identity or policy, omitted or new failed context,
cross-contract mismatch, or any other failed CI result remains blocking.
Changes to the classifier or its workflow are admitted only as the exact
controller/receipt scope and still require their own focused checks; they do
not alter the inherited-failure contract.
