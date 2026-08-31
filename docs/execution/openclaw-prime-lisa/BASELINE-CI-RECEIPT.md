---
summary: "Exact baseline CI receipt and progressive failure classification"
read_when: "Validating the OpenClaw fork's inherited CI failure before packet or Phase work"
title: "Baseline CI receipt"
---

# OpenClaw fork baseline CI receipt

The machine-readable receipt is
`docs/execution/openclaw-prime-lisa/baseline-ci-receipt.json`. It is reusable
only when `.github/openclaw_progressive_validation.py`
matches GitHub Actions Full run `32917935092` head
`428c6bc9ba21b2358934aa0d311911791fa3fd21` (tree
`a29648096f9872a7f3d727aef79b0cb63a31ff07`), the exact progressive
validation policy digest, workflow, and the complete ten-job failure contract
recorded in the receipt. That Full identity is not rewritten to a later
protected development SHA. Fast Checks may pass a later execution base
(`origin/development` at PR time); that execution base is classified separately
as a customization-only hop when changed paths stay inside the Prime
customization/v2.5.2 boundary, or as the exact four-path receipt-maintenance
chain. It is never treated as a new Full run. The six protected CI contexts are
`checks-fast-core`, `checks-fast-plugin-contracts-shard`,
`checks-node-core-test-nondist-shard`, `check-shard`, `check-additional-shard`,
and `check-docs`.

The classifier permits only that exact unchanged inherited failure set. A
changed contract path, stale identity or policy, omitted or new failed context,
cross-contract mismatch, or any other failed CI result remains blocking.
Changes to the classifier or its workflow are admitted only as focused
classifier checks; they do not alter the inherited-failure contract and do not
grant `protectedAdmission`. Customization-only admission never waives
inherited upstream failures. If the execution base cannot be classified as the
exact receipt-maintenance chain or as customization-only, the classifier
returns `HOLD` rather than fabricating a Full rebind.
