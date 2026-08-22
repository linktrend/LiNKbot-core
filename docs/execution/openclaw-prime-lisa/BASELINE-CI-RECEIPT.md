---
summary: "Exact baseline CI receipt and progressive failure classification"
read_when: "Validating the OpenClaw fork's inherited CI failure before packet or Phase work"
title: "Baseline CI receipt"
---

# OpenClaw fork baseline CI receipt

The machine-readable receipt is
`docs/execution/openclaw-prime-lisa/baseline-ci-receipt.json`. It is reusable
only when `scripts/gitops/repository_ci_contract.py validate-baseline-receipt`
matches the live `origin/development` commit and tree, the exact progressive
validation policy digest, workflow, and the unchanged
`checks-node-core-test-nondist-shard` failure contract.

The classifier permits only that exact unchanged inherited failure. A changed
ledger/test contract, stale identity or policy, cross-contract mismatch, or
any other failed CI result remains blocking. Changes to the classifier or its
workflow are reported as requiring their own focused checks; they do not alter
the inherited-failure contract.
