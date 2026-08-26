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
BASELINE_RUN_ID = 32917935092
BASELINE_COMMIT = "facdd8052b78ea82a7d75d705dc9f6d8fe502137"
BASELINE_TREE = "1c41031ad085739a701b37ea3279a7a43a6db7bf"
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
# This is the complete failure contract observed in Full run 32917935092.
# Every row is retained so a missing or newly introduced failure cannot be
# mistaken for inherited evidence. Paths are the source/test contracts named
# by the failing job output; they remain blocking when changed.
INHERITED_FAILURE_CONTRACT = (
    {
        "job": "checks-fast-contracts-plugins-b",
        "tests": ("src/plugins/contracts/plugin-sdk-package-contract-guardrails.test.ts",),
        "changedPathContract": (
            "src/plugins/contracts/plugin-sdk-package-contract-guardrails.test.ts",
            "src/plugin-sdk/browser-policy.ts",
        ),
    },
    {
        "job": "checks-fast-max-lines-ratchet",
        "tests": ("src/state/lisa-principal-task-store.ts",),
        "changedPathContract": ("src/state/lisa-principal-task-store.ts",),
    },
    {
        "job": "check-docs",
        "tests": ("format:check",),
        "changedPathContract": (
            "linkbots/lisa/ops/deployment/pkt11-source-base-preflight.mjs",
            "linkbots/lisa/ops/deployment/pkt11-source-base-preflight.test.mjs",
            "linkbots/lisa/ops/deployment/pre-vps-rehearsal.test.mjs",
            "linkbots/lisa/ops/google-workspace/google-workspace.test.ts",
        ),
    },
    {
        "job": "check-additional-extension-package-boundary",
        "tests": ("plugin-sdk boundary dts",),
        "changedPathContract": (
            "src/agents/profile-manifest.ts",
            "src/gateway/server-methods/agents.ts",
            "src/system-agent/operations-execute.ts",
        ),
    },
    {
        "job": "check-test-types",
        "tests": ("tsgo:test:root",),
        "changedPathContract": (
            "linkbots/blueprints/business-plan-workflow.ts",
            "src/agents/profile-manifest.ts",
            "src/agents/sandbox/browser-policy.test.ts",
            "src/commands/agents.commands.add.ts",
            "src/gateway/server-methods/agents.ts",
            "src/system-agent/operations-execute.ts",
        ),
    },
    {
        "job": "check-dependencies",
        "tests": ("deadcode:full",),
        "changedPathContract": (
            "extensions/browser/src/browser/navigation-guard.ts",
            "src/agents/noncoding-route.ts",
            "src/agents/prepared-model-runtime.ts",
            "src/agents/profile-manifest.ts",
            "src/agents/sandbox/browser-policy.ts",
            "src/state/lisa-principal-task-schema.ts",
            "src/state/lisa-principal-task-store.ts",
        ),
    },
    {
        "job": "check-prod-types",
        "tests": ("tsgo:core",),
        "changedPathContract": (
            "src/agents/profile-manifest.ts",
            "src/commands/agents.commands.add.ts",
            "src/gateway/server-methods/agents.ts",
            "src/system-agent/operations-execute.ts",
        ),
    },
    {
        "job": "check-lint",
        "tests": ("run-lint",),
        "changedPathContract": (
            "src/agents/profile-manifest.ts",
            "src/gateway/server-methods/agents.ts",
            "src/system-agent/operations-execute.ts",
        ),
    },
    {
        "job": "checks-node-core-tooling-4",
        "tests": (
            "test/scripts/check-openclawdevelopmentplan01-section-13.3-ledger.test.ts",
            "test/scripts/plugin-sdk-surface-report.test.ts",
        ),
        "changedPathContract": (
            "test/scripts/check-openclawdevelopmentplan01-section-13.3-ledger.test.ts",
            "scripts/check-openclawdevelopmentplan01-section-13.3-ledger.mjs",
            "docs/execution/openclawdevelopmentplan01/section-13.3",
            "test/scripts/plugin-sdk-surface-report.test.ts",
        ),
    },
    {
        "job": "checks-node-agentic-agents-core-runtime",
        "tests": ("src/agents/agent-bundle-mcp-runtime.mcp-tool-filter.plugin-registry.test.ts",),
        "changedPathContract": (
            "src/agents/agent-bundle-mcp-runtime.mcp-tool-filter.plugin-registry.test.ts",
            "src/agents/agent-bundle-mcp-runtime.ts",
        ),
    },
)
INHERITED_FAILURE_JOBS = tuple(row["job"] for row in INHERITED_FAILURE_CONTRACT)
# Matrix jobs expose their concrete `name` through the Actions jobs API. The
# aggregate `needs.<job>.result` contexts are intentionally not admissible:
# they cannot identify which matrix row failed.
INHERITED_FAILURE_IDENTITIES = tuple(sorted(INHERITED_FAILURE_JOBS))
FAILURE_PATHS = frozenset(path for row in INHERITED_FAILURE_CONTRACT for path in row["changedPathContract"])
BASELINE_RECEIPT_PATH = "docs/execution/openclaw-prime-lisa/baseline-ci-receipt.json"
BASELINE_RECEIPT_DOC_PATH = "docs/execution/openclaw-prime-lisa/BASELINE-CI-RECEIPT.md"
BASELINE_RECEIPT_REBIND_SCOPE = frozenset(
    {
        ".github/openclaw_progressive_validation.py",
        "test/openclaw_progressive_validation.py",
        BASELINE_RECEIPT_DOC_PATH,
        BASELINE_RECEIPT_PATH,
    }
)
# PKT-11's source-base preflight test is itself named by the inherited docs
# failure contract. Permit that one path only when the complete declared
# source-rebind candidate is present; every other contract-path change remains
# blocking. This keeps the inherited ledger fail-closed while allowing the
# focused preflight correction to prove the new protected base.
PKT11_SOURCE_PREFLIGHT_TEST = "linkbots/lisa/ops/deployment/pkt11-source-base-preflight.test.mjs"
PKT11_PHASE_SCOPE = frozenset(
    {
        ".github/openclaw_progressive_validation.py",
        "test/openclaw_progressive_validation.py",
        BASELINE_RECEIPT_PATH,
        "linkbots/lisa/docs/LISA-PKT-11-SOURCE-ACCEPTANCE.md",
        PKT11_SOURCE_PREFLIGHT_TEST,
        "linkbots/lisa/ops/receipts/pkt-11-pre-vps-qualification.receipt.json",
        "linkbots/lisa/ops/receipts/pkt-11-source-acceptance.receipt.json",
        "linkbots/lisa/ops/stage-workspace-package.test.ts",
        "linkbots/lisa/ops/stage-workspace-package.ts",
    }
)
CLASSIFIER_PATHS = frozenset(
    {
        ".github/workflows/ci.yml",
        ".github/workflows/linktrend-review-packager.yml",
        ".github/openclaw_progressive_validation.py",
    }
)


def _canonical_failure_contract() -> list[dict[str, object]]:
    return [
        {"job": row["job"], "tests": list(row["tests"]), "changedPathContract": list(row["changedPathContract"])}
        for row in INHERITED_FAILURE_CONTRACT
    ]


def protected_inherited_failure_admissible(
    result: object,
    *,
    observed_failures: object = None,
) -> bool:
    """Allow only the exact four-path controller/test/receipt scope with the full failure set."""
    if not isinstance(result, dict):
        return False
    if result.get("ok") is not True or result.get("classification") != "inherited_baseline_failure":
        return False
    if result.get("errors") != [] or result.get("changedFailureContractPaths") != []:
        return False
    if result.get("baselineCommit") != BASELINE_COMMIT or result.get("baselineTree") != BASELINE_TREE:
        return False
    if result.get("receiptBaselineCommit") != BASELINE_COMMIT or result.get("receiptBaselineTree") != BASELINE_TREE:
        return False
    changed_paths = result.get("changedPaths")
    if not isinstance(changed_paths, list) or len(changed_paths) != len(set(changed_paths)):
        return False
    changed_path_set = set(changed_paths)
    if changed_path_set not in {BASELINE_RECEIPT_REBIND_SCOPE, PKT11_PHASE_SCOPE}:
        return False
    if not isinstance(observed_failures, (list, tuple)) or any(
        not isinstance(item, str) for item in observed_failures
    ):
        return False
    if sorted(observed_failures) != list(INHERITED_FAILURE_IDENTITIES):
        return False
    return True


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
    observed_failures: list[str] | None = None,
) -> dict[str, object]:
    receipt = json.loads(receipt_path.read_text(encoding="utf-8"))
    errors: list[str] = []
    if receipt.get("schemaVersion") != 2 or receipt.get("kind") != "openclaw-fork-baseline-ci-receipt": errors.append("schema")
    if receipt.get("repository") != "linktrend/openclaw_prime": errors.append("repository")
    if receipt.get("workflow") != "CI": errors.append("workflow")
    if receipt.get("baselineRunId") != BASELINE_RUN_ID: errors.append("baseline_run")
    if receipt.get("policyId") != POLICY_ID or receipt.get("policyDigest") != POLICY_DIGEST: errors.append("policy")
    if receipt.get("reuse") != "exact baseline commit/tree, policy digest, workflow, run and complete unchanged failure contract only": errors.append("reuse")
    if receipt.get("changedFailuresBlock") is not True or receipt.get("scope") != "fork-only" or receipt.get("upstreamMutation") is not False: errors.append("scope")
    if receipt.get("inheritedFailures") != _canonical_failure_contract(): errors.append("failure_contract")
    baseline_checks = receipt.get("baselineChecks")
    if (
        not isinstance(baseline_checks, dict)
        or baseline_checks.get("failureCount") != len(INHERITED_FAILURE_JOBS)
        or baseline_checks.get("failedJobs") != list(INHERITED_FAILURE_IDENTITIES)
    ):
        errors.append("baseline_checks")
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
        if receipt_baseline != baseline: errors.append("baseline_commit")
        if receipt_tree != resolved_tree: errors.append("baseline_tree")
        changed = tuple(p for p in git(root, "diff", "--name-only", f"{baseline}..{candidate}").splitlines() if p)
    except (RuntimeError, OSError):
        baseline = resolved_tree = candidate = ""
        changed = ()
        errors.append("git_identity")
    changed_failure = sorted(set(changed) & FAILURE_PATHS)
    classifier = sorted(set(changed) & CLASSIFIER_PATHS)
    # The PKT-11 source-base preflight test is the only inherited-contract
    # path allowed in this exact nine-path candidate. No other changed
    # contract path, missing sibling, or extra path is admissible.
    if changed_failure:
        allowed_pkt11_preflight = (
            set(changed_failure) == {PKT11_SOURCE_PREFLIGHT_TEST}
            and set(changed) == PKT11_PHASE_SCOPE
        )
        if not allowed_pkt11_preflight:
            errors.append("changed_failure_contract")
        else:
            changed_failure = []
    generated_only = bool(changed) and set(changed) <= {BASELINE_RECEIPT_PATH}
    result = {"ok": not errors, "classification": "inherited_baseline_failure" if not errors else "blocking", "baselineRef": baseline_ref, "baselineCommit": baseline, "baselineTree": resolved_tree, "receiptBaselineCommit": receipt_baseline, "receiptBaselineTree": receipt_tree, "candidateCommit": candidate, "changedPaths": list(changed), "changedFailureContractPaths": changed_failure, "classifierPathsRequiringFocusedChecks": classifier, "generatedOnly": generated_only, "errors": sorted(set(errors))}
    result["protectedAdmission"] = protected_inherited_failure_admissible(result, observed_failures=observed_failures)
    return result


def validate_baseline_ci_receipt(
    *,
    root: Path,
    receipt: dict[str, object],
    baseline_ref: str = "origin/development",
    candidate_ref: str = "HEAD",
    baseline_sha: str | None = None,
    baseline_tree: str | None = None,
    observed_failures: list[str] | None = None,
) -> dict[str, object]:
    """Compatibility-shaped entry point used by the focused consumer tests."""
    with tempfile.NamedTemporaryFile("w", suffix=".json") as temp:
        json.dump(receipt, temp)
        temp.flush()
        return validate(root, Path(temp.name), baseline_ref, candidate_ref, baseline_sha, baseline_tree, observed_failures)


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--root", type=Path, default=Path.cwd())
    parser.add_argument("--receipt", type=Path, required=True)
    parser.add_argument("--baseline-ref", default="origin/development")
    parser.add_argument("--baseline-sha", default="")
    parser.add_argument("--baseline-tree", default="")
    parser.add_argument("--candidate-ref", default="HEAD")
    parser.add_argument("--observed-failure-identities", "--observed-failures", dest="observed_failure_identities", default="")
    args = parser.parse_args()
    try:
        result = validate(
            args.root.resolve(),
            args.receipt.resolve(),
            args.baseline_ref,
            args.candidate_ref,
            args.baseline_sha or None,
            args.baseline_tree or None,
            json.loads(args.observed_failure_identities) if args.observed_failure_identities else None,
        )
    except (OSError, ValueError, RuntimeError) as exc:
        result = {"ok": False, "classification": "blocking", "errors": [str(exc)]}
    print(json.dumps(result, sort_keys=True))
    return 0 if bool(result.get("ok")) else 1


if __name__ == "__main__":
    raise SystemExit(main())
