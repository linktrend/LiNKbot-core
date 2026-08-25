#!/usr/bin/env python3
"""Fail-closed inherited-CI classification for the OpenClaw fork.

This consumer-owned helper reuses one exact baseline receipt. It never waives
the receipt's failed ledger contract; classifier/workflow edits are reported
for focused checks and remain outside the provider-managed core.
"""
from __future__ import annotations

import argparse
import json
import re
import subprocess
import tempfile
from pathlib import Path

POLICY_ID = "openclaw-fork-progressive-validation-v1"
POLICY_DIGEST = "sha256:fa3f448e33fbc05e4b9676628a8be1f67bb020cc0baf58da6dd8fe720d0c26f0"
FAILURE_JOB = "checks-node-core-test-nondist-shard"
BASELINE_RECEIPT_KIND = "openclaw-fork-baseline-ci-receipt"
BASELINE_RECEIPT_POLICY_ID = POLICY_ID
BASELINE_RECEIPT_POLICY_DIGEST = POLICY_DIGEST
BASELINE_RECEIPT_JOB = FAILURE_JOB
FAILURE_TESTS = (
    "test/scripts/check-openclawdevelopmentplan01-section-13.3-ledger.test.ts > pins the frozen plan hash and accepts checked-in plan-derived artifacts",
    "test/scripts/check-openclawdevelopmentplan01-section-13.3-ledger.test.ts > frozen plan extraction covers every plan section family and required omission class",
    "test/scripts/check-openclawdevelopmentplan01-section-13.3-ledger.test.ts > write helper regenerates artifacts that validate",
)
BASELINE_RECEIPT_TESTS = FAILURE_TESTS
BASELINE_RECEIPT_CHANGED_PATH_CONTRACT = (
    "test/scripts/check-openclawdevelopmentplan01-section-13.3-ledger.test.ts",
    "scripts/check-openclawdevelopmentplan01-section-13.3-ledger.mjs",
    "docs/execution/openclawdevelopmentplan01/section-13.3",
)
FAILURE_PATHS = frozenset(
    {
        "test/scripts/check-openclawdevelopmentplan01-section-13.3-ledger.test.ts",
        "scripts/check-openclawdevelopmentplan01-section-13.3-ledger.mjs",
        "docs/execution/openclawdevelopmentplan01/section-13.3",
    }
)
BASELINE_RECEIPT_PATH = "docs/execution/openclaw-prime-lisa/baseline-ci-receipt.json"
CLASSIFIER_PATHS = frozenset(
    {
        ".github/workflows/ci.yml",
        ".github/workflows/linktrend-review-packager.yml",
        ".github/openclaw_progressive_validation.py",
    }
)


def git(root: Path, *args: str) -> str:
    result = subprocess.run(["git", *args], cwd=root, text=True, capture_output=True, check=False)
    if result.returncode:
        raise RuntimeError((result.stderr or result.stdout).strip() or "git lookup failed")
    return result.stdout.strip()


def _is_sha(value: object) -> bool:
    return bool(re.fullmatch(r"[0-9a-f]{40}", str(value or "")))


def _is_ancestor(root: Path, ancestor: str, descendant: str) -> bool:
    result = subprocess.run(
        ["git", "merge-base", "--is-ancestor", ancestor, descendant],
        cwd=root,
        text=True,
        capture_output=True,
        check=False,
    )
    return result.returncode == 0


def validate(
    root: Path,
    receipt_path: Path,
    baseline_ref: str,
    candidate_ref: str,
    baseline_sha: str | None = None,
    baseline_tree: str | None = None,
) -> dict[str, object]:
    receipt = json.loads(receipt_path.read_text(encoding="utf-8"))
    errors: list[str] = []
    if receipt.get("schemaVersion") != 1 or receipt.get("kind") != "openclaw-fork-baseline-ci-receipt": errors.append("schema")
    if receipt.get("repository") != "linktrend/openclaw_prime": errors.append("repository")
    if receipt.get("workflow") != "CI": errors.append("workflow")
    if receipt.get("policyId") != POLICY_ID or receipt.get("policyDigest") != POLICY_DIGEST: errors.append("policy")
    if receipt.get("reuse") != "exact baseline commit/tree, policy digest, workflow and unchanged failure contract only": errors.append("reuse")
    if receipt.get("changedFailuresBlock") is not True or receipt.get("scope") != "fork-only" or receipt.get("upstreamMutation") is not False: errors.append("scope")
    failures = receipt.get("inheritedFailures")
    if not isinstance(failures, list) or len(failures) != 1 or not isinstance(failures[0], dict):
        errors.append("failure_contract")
    else:
        row = failures[0]
        if row.get("job") != FAILURE_JOB or tuple(row.get("tests", ())) != FAILURE_TESTS or set(row.get("changedPathContract", ())) != FAILURE_PATHS: errors.append("failure_contract")
    if receipt.get("baselineChecks") != {"checkDocs": "success", "checksNodeCoreTestNondistShard": "failure"}: errors.append("baseline_checks")
    if baseline_sha is not None and not _is_sha(baseline_sha): errors.append("baseline_sha")
    if baseline_tree is not None and not _is_sha(baseline_tree): errors.append("baseline_tree")
    receipt_baseline = str(receipt.get("baselineCommit") or "")
    receipt_tree = str(receipt.get("baselineTree") or "")
    baseline = resolved_tree = candidate = ""
    try:
        baseline = git(root, "rev-parse", f"{baseline_sha or baseline_ref}^{{commit}}")
        resolved_tree = git(root, "rev-parse", f"{baseline_sha or baseline_ref}^{{tree}}")
        if baseline_tree is not None and baseline_tree != resolved_tree:
            errors.append("baseline_tree_mismatch")
        candidate = git(root, "rev-parse", f"{candidate_ref}^{{commit}}")
        if baseline_sha is None:
            if receipt_baseline != baseline: errors.append("baseline_commit")
            if receipt_tree != resolved_tree: errors.append("baseline_tree")
        elif receipt_baseline != baseline or receipt_tree != resolved_tree:
            # A retained receipt is immutable evidence of the inherited
            # failure contract. Its base coordinates are rebound in memory to
            # the atomic pull_request.base identity; never rewrite the Phase
            # branch with a receipt-only repin. Rebinding is accepted only
            # from a real, internally consistent ancestor baseline.
            if not _is_sha(receipt_baseline) or not _is_sha(receipt_tree):
                errors.append("baseline_receipt_identity")
            else:
                receipt_resolved_tree = git(root, "rev-parse", f"{receipt_baseline}^{{tree}}")
                if receipt_tree != receipt_resolved_tree:
                    errors.append("baseline_receipt_tree")
                elif not _is_ancestor(root, receipt_baseline, baseline):
                    errors.append("baseline_receipt_not_ancestor")
        changed = tuple(p for p in git(root, "diff", "--name-only", f"{baseline}..{candidate}").splitlines() if p)
    except (RuntimeError, OSError):
        baseline = resolved_tree = candidate = ""
        changed = ()
        errors.append("git_identity")
    changed_failure = sorted(set(changed) & FAILURE_PATHS)
    classifier = sorted(set(changed) & CLASSIFIER_PATHS)
    if changed_failure: errors.append("changed_failure_contract")
    generated_only = bool(changed) and set(changed) <= {BASELINE_RECEIPT_PATH}
    return {"ok": not errors, "classification": "inherited_baseline_failure" if not errors else "blocking", "baselineRef": baseline_ref, "baselineCommit": baseline, "baselineTree": resolved_tree, "receiptBaselineCommit": receipt_baseline, "receiptBaselineTree": receipt_tree, "candidateCommit": candidate, "changedPaths": list(changed), "changedFailureContractPaths": changed_failure, "classifierPathsRequiringFocusedChecks": classifier, "generatedOnly": generated_only, "errors": sorted(set(errors))}


def validate_baseline_ci_receipt(
    *,
    root: Path,
    receipt: dict[str, object],
    baseline_ref: str = "origin/development",
    candidate_ref: str = "HEAD",
    baseline_sha: str | None = None,
    baseline_tree: str | None = None,
) -> dict[str, object]:
    """Compatibility-shaped entry point used by the focused consumer tests."""
    with tempfile.NamedTemporaryFile("w", suffix=".json") as temp:
        json.dump(receipt, temp)
        temp.flush()
        return validate(root, Path(temp.name), baseline_ref, candidate_ref, baseline_sha, baseline_tree)


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--root", type=Path, default=Path.cwd())
    parser.add_argument("--receipt", type=Path, required=True)
    parser.add_argument("--baseline-ref", default="origin/development")
    parser.add_argument("--baseline-sha", default="")
    parser.add_argument("--baseline-tree", default="")
    parser.add_argument("--candidate-ref", default="HEAD")
    args = parser.parse_args()
    try:
        result = validate(
            args.root.resolve(),
            args.receipt.resolve(),
            args.baseline_ref,
            args.candidate_ref,
            args.baseline_sha or None,
            args.baseline_tree or None,
        )
    except (OSError, ValueError, RuntimeError) as exc:
        result = {"ok": False, "classification": "blocking", "errors": [str(exc)]}
    print(json.dumps(result, sort_keys=True))
    return 0 if bool(result.get("ok")) else 1


if __name__ == "__main__":
    raise SystemExit(main())
