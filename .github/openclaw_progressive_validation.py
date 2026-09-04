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
from importlib.util import module_from_spec, spec_from_file_location
from pathlib import Path

POLICY_ID = "openclaw-fork-progressive-validation-v1"
POLICY_DIGEST = "sha256:fa3f448e33fbc05e4b9676628a8be1f67bb020cc0baf58da6dd8fe720d0c26f0"
BASELINE_RUN_ID = 32917935092
# GitHub-true Full CI identity for run 32917935092. Fast Checks may use a
# later protected development SHA as the execution base; that execution base
# is not a Full rebind and must not be written into this pin.
BASELINE_COMMIT = "428c6bc9ba21b2358934aa0d311911791fa3fd21"
BASELINE_TREE = "a29648096f9872a7f3d727aef79b0cb63a31ff07"
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
# Classifier/receipt files are focused-check scope, not a Full identity rewrite
# and not a waiver of inherited failure-contract paths.
FOCUSED_CLASSIFIER_SCOPE = CLASSIFIER_PATHS | BASELINE_RECEIPT_REBIND_SCOPE
CUSTOMIZATION_BOUNDARY_REL = ".linktrend/openclaw-prime/customization-boundary.json"
CUSTOMIZATION_CLASSIFIER_REL = ".linktrend/openclaw-prime/validate_customization_boundary.py"
CUSTOMIZATION_ADMITTED_CLASSES = frozenset(
    {
        "linktrend-owned",
        "ide-managed",
        "ide-managed-overlay",
        "ide-managed-and-linktrend-owned",
        "ide-transaction-changed",
    }
)
HOLD_CUSTOMIZATION_UNAVAILABLE = "HOLD: customization_only_admission_unavailable"
HOLD_FULL_PIN_EXECUTION_UNMATCHED = "HOLD: full_identity_unrewritten_execution_base_unmatched"


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
    changed_paths = result.get("changedPaths")
    if not isinstance(changed_paths, list) or len(changed_paths) != len(set(changed_paths)):
        return False
    if result.get("receiptChained") is True:
        transition_paths = result.get("receiptTransitionPaths")
        if (
            not isinstance(transition_paths, list)
            or any(not isinstance(path, str) for path in transition_paths)
            or len(transition_paths) != len(set(transition_paths))
            or set(transition_paths) != BASELINE_RECEIPT_REBIND_SCOPE
        ):
            return False
    else:
        if result.get("baselineCommit") != BASELINE_COMMIT or result.get("baselineTree") != BASELINE_TREE:
            return False
        if result.get("receiptBaselineCommit") != BASELINE_COMMIT or result.get("receiptBaselineTree") != BASELINE_TREE:
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


def _load_customization_classifier(root: Path):
    path = root / CUSTOMIZATION_CLASSIFIER_REL
    spec = spec_from_file_location("openclaw_prime_customization_boundary", path)
    if spec is None or spec.loader is None:
        raise RuntimeError("customization_boundary")
    module = module_from_spec(spec)
    spec.loader.exec_module(module)
    return module


def _customization_scope_errors(root: Path, changed: tuple[str, ...]) -> list[str]:
    """Admit only Prime customization/v2.5.2 paths plus focused classifier files."""
    boundary_path = root / CUSTOMIZATION_BOUNDARY_REL
    classifier_path = root / CUSTOMIZATION_CLASSIFIER_REL
    if not boundary_path.is_file() or boundary_path.is_symlink():
        return ["customization_boundary"]
    if not classifier_path.is_file() or classifier_path.is_symlink():
        return ["customization_boundary"]
    try:
        manifest = json.loads(boundary_path.read_text(encoding="utf-8"))
        classifier = _load_customization_classifier(root)
    except (OSError, UnicodeError, json.JSONDecodeError, RuntimeError):
        return ["customization_boundary"]
    disallowed = False
    for path in changed:
        if path in FOCUSED_CLASSIFIER_SCOPE:
            continue
        try:
            kind = classifier.classify(path, manifest)
        except Exception:
            return ["customization_boundary"]
        if kind not in CUSTOMIZATION_ADMITTED_CLASSES:
            disallowed = True
    if disallowed:
        return ["customization_scope"]
    return []


def _is_ancestor(root: Path, ancestor: str, descendant: str) -> bool:
    result = subprocess.run(
        ["git", "merge-base", "--is-ancestor", ancestor, descendant],
        cwd=root,
        text=True,
        capture_output=True,
        check=False,
    )
    return result.returncode == 0


def _changed_paths(root: Path, ancestor: str, descendant: str) -> tuple[str, ...]:
    return tuple(
        path for path in git(root, "diff", "--name-only", f"{ancestor}..{descendant}").splitlines() if path
    )


def _receipt_transition_is_valid(
    root: Path,
    receipt_commit: str,
    receipt_tree: str,
    current_commit: str,
) -> tuple[bool, tuple[str, ...], list[str]]:
    """Validate one receipt-maintenance hop before admitting the current base."""
    errors: list[str] = []
    if not _is_sha(receipt_commit) or not _is_sha(receipt_tree):
        return False, (), ["receipt_predecessor_identity"]
    try:
        actual_receipt_tree = git(root, "rev-parse", f"{receipt_commit}^{{tree}}")
    except (RuntimeError, OSError):
        return False, (), ["receipt_predecessor_missing"]
    if actual_receipt_tree != receipt_tree:
        errors.append("receipt_predecessor_tree_mismatch")
    if not _is_ancestor(root, receipt_commit, current_commit):
        errors.append("receipt_predecessor_not_ancestor")
    try:
        transition = _changed_paths(root, receipt_commit, current_commit)
    except (RuntimeError, OSError):
        transition = ()
        errors.append("receipt_transition_identity")
    if set(transition) != BASELINE_RECEIPT_REBIND_SCOPE:
        errors.append("receipt_transition_scope")
    return not errors, transition, errors


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
    if "preservedOriginBaseline" in receipt:
        errors.append("preserved_origin_forbidden")
    receipt_baseline = str(receipt.get("baselineCommit") or "")
    receipt_tree = str(receipt.get("baselineTree") or "")
    full_pin_intact = receipt_baseline == BASELINE_COMMIT and receipt_tree == BASELINE_TREE
    if not full_pin_intact:
        errors.append("full_pin")
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
    baseline = resolved_tree = candidate = ""
    receipt_chained = False
    customization_only_candidate = False
    pending_transition_errors: list[str] = []
    receipt_transition: tuple[str, ...] = ()
    try:
        baseline = git(root, "rev-parse", f"{baseline_sha or baseline_ref}^{{commit}}")
        resolved_tree = git(root, "rev-parse", f"{baseline_sha or baseline_ref}^{{tree}}")
        if baseline_tree is not None and baseline_tree != resolved_tree:
            errors.append("baseline_tree_mismatch")
        candidate = git(root, "rev-parse", f"{candidate_ref}^{{commit}}")
        if receipt_baseline == baseline:
            if receipt_tree != resolved_tree:
                errors.append("baseline_tree")
        else:
            valid_transition, receipt_transition, transition_errors = _receipt_transition_is_valid(
                root, receipt_baseline, receipt_tree, baseline
            )
            if valid_transition:
                receipt_chained = True
            elif full_pin_intact:
                # Execution base moved; Full pin stays. Do not rewrite identity
                # and do not publish a failed chain as a receipt hop.
                customization_only_candidate = True
                pending_transition_errors = transition_errors
                receipt_transition = ()
            else:
                errors.extend(transition_errors)
                errors.append("baseline_commit")
                if receipt_tree != resolved_tree:
                    errors.append("baseline_tree")
        if not _is_ancestor(root, baseline, candidate):
            errors.append("candidate_not_based_on_baseline")
        changed = _changed_paths(root, baseline, candidate)
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
    if customization_only_candidate and "changed_failure_contract" not in errors:
        scope_errors = _customization_scope_errors(root, changed)
        errors.extend(scope_errors)
        if scope_errors:
            errors.extend(pending_transition_errors)
    generated_only = bool(changed) and set(changed) <= {BASELINE_RECEIPT_PATH}
    if errors:
        classification = "blocking"
    elif customization_only_candidate:
        classification = "customization_only"
    else:
        classification = "inherited_baseline_failure"
    hold = None
    if "customization_scope" in errors or "customization_boundary" in errors:
        hold = HOLD_CUSTOMIZATION_UNAVAILABLE
    elif "preserved_origin_forbidden" in errors or "full_pin" in errors or (
        "baseline_commit" in errors and not customization_only_candidate and not receipt_chained
    ):
        hold = HOLD_FULL_PIN_EXECUTION_UNMATCHED
    result = {
        "ok": not errors,
        "classification": classification,
        "hold": hold,
        "fullRunPin": {
            "runId": BASELINE_RUN_ID,
            "commit": BASELINE_COMMIT,
            "tree": BASELINE_TREE,
        },
        "baselineRef": baseline_ref,
        "baselineCommit": baseline,
        "baselineTree": resolved_tree,
        "receiptBaselineCommit": receipt_baseline,
        "receiptBaselineTree": receipt_tree,
        "receiptChained": receipt_chained,
        "receiptTransitionPaths": list(receipt_transition),
        "customizationOnly": customization_only_candidate and not errors,
        "candidateCommit": candidate,
        "changedPaths": list(changed),
        "changedFailureContractPaths": changed_failure,
        "classifierPathsRequiringFocusedChecks": classifier,
        "generatedOnly": generated_only,
        "errors": sorted(set(errors)),
    }
    # Ordinary LiNKtrend-owned/IDE-managed Phase changes use the same protected
    # admission outcome as peer repositories once their scoped classifier is
    # clean. The legacy inherited-baseline path remains available for old
    # candidates, and untouched upstream paths remain fail-closed above.
    result["protectedAdmission"] = (
        result["ok"] is True and result["classification"] == "customization_only"
    ) or protected_inherited_failure_admissible(result, observed_failures=observed_failures)
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
