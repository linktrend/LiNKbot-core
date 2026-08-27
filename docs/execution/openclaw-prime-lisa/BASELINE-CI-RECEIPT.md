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
`c98757b598e753ce0344037a3f0ae6321121f6c6` (tree
`76dd3b81b3db9ffaff614ca3d0561b26a7fb5705`), the exact progressive
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
