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
`facdd8052b78ea82a7d75d705dc9f6d8fe502137` (tree
`1c41031ad085739a701b37ea3279a7a43a6db7bf`), the exact progressive
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
