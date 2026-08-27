"""Focused adversarial tests for the fork-owned baseline classifier."""

from __future__ import annotations

import json
import subprocess
import tempfile
import unittest
from pathlib import Path

from importlib.util import module_from_spec, spec_from_file_location

MODULE_PATH = Path(__file__).parents[1] / ".github" / "openclaw_progressive_validation.py"
SPEC = spec_from_file_location("openclaw_progressive_validation", MODULE_PATH)
assert SPEC and SPEC.loader
MODULE = module_from_spec(SPEC)
SPEC.loader.exec_module(MODULE)


def git(root: Path, *args: str) -> str:
    result = subprocess.run(["git", *args], cwd=root, capture_output=True, text=True, check=False)
    if result.returncode:
        raise AssertionError(result.stderr or result.stdout)
    return result.stdout.strip()


def receipt(root: Path) -> dict[str, object]:
    return {
        "schemaVersion": 2,
        "kind": MODULE.BASELINE_RECEIPT_KIND,
        "repository": "linktrend/openclaw_prime",
        "baselineCommit": git(root, "rev-parse", "HEAD"),
        "baselineTree": git(root, "rev-parse", "HEAD^{tree}"),
        "workflow": "CI",
        "baselineRunId": MODULE.BASELINE_RUN_ID,
        "policyId": MODULE.BASELINE_RECEIPT_POLICY_ID,
        "policyDigest": MODULE.BASELINE_RECEIPT_POLICY_DIGEST,
        "inheritedFailures": MODULE._canonical_failure_contract(),
        "baselineChecks": {
            "failedJobs": list(MODULE.INHERITED_FAILURE_IDENTITIES),
            "failureCount": len(MODULE.INHERITED_FAILURE_JOBS),
        },
        "reuse": "exact baseline commit/tree, policy digest, workflow, run and complete unchanged failure contract only",
        "changedFailuresBlock": True,
        "scope": "fork-only",
        "upstreamMutation": False,
    }


class ProgressiveValidationTests(unittest.TestCase):
    def test_committed_receipt_matches_controller_and_protected_development(self):
        repo = Path(__file__).resolve().parents[1]
        committed = json.loads((repo / MODULE.BASELINE_RECEIPT_PATH).read_text(encoding="utf-8"))
        self.assertEqual(committed["baselineCommit"], MODULE.BASELINE_COMMIT)
        self.assertEqual(committed["baselineTree"], MODULE.BASELINE_TREE)
        self.assertEqual(committed["baselineRunId"], MODULE.BASELINE_RUN_ID)
        self.assertEqual(committed["policyDigest"], MODULE.POLICY_DIGEST)
        self.assertEqual(committed["inheritedFailures"], MODULE._canonical_failure_contract())
        self.assertEqual(MODULE.BASELINE_COMMIT, "facdd8052b78ea82a7d75d705dc9f6d8fe502137")
        self.assertEqual(MODULE.BASELINE_TREE, "1c41031ad085739a701b37ea3279a7a43a6db7bf")

    def fixture(self):
        tmp = tempfile.TemporaryDirectory(prefix="openclaw-progressive-")
        root = Path(tmp.name) / "repo"
        root.mkdir()
        for args in (("init", "-q", "-b", "development"), ("config", "user.email", "test@example.invalid"), ("config", "user.name", "Tests"), ("remote", "add", "origin", "https://github.com/linktrend/openclaw_prime.git")):
            git(root, *args)
        (root / "README.md").write_text("baseline\n", encoding="utf-8")
        git(root, "add", "README.md"); git(root, "commit", "-qm", "baseline")
        baseline = git(root, "rev-parse", "HEAD")
        git(root, "update-ref", "refs/remotes/origin/development", baseline)
        return tmp, root, receipt(root)

    def chained_fixture(self, *, extra_path: str | None = None, omit_path: str | None = None):
        tmp, root, rec = self.fixture()
        transition_paths = sorted(MODULE.BASELINE_RECEIPT_REBIND_SCOPE)
        if omit_path is not None:
            transition_paths.remove(omit_path)
        for path in transition_paths:
            target = root / path
            target.parent.mkdir(parents=True, exist_ok=True)
            target.write_text("receipt transition\n", encoding="utf-8")
        if extra_path is not None:
            target = root / extra_path
            target.parent.mkdir(parents=True, exist_ok=True)
            target.write_text("unexpected transition\n", encoding="utf-8")
        git(root, "add", ".")
        git(root, "commit", "-qm", "receipt maintenance transition")
        current = git(root, "rev-parse", "HEAD")
        current_tree = git(root, "rev-parse", "HEAD^{tree}")
        (root / "candidate.txt").write_text("application candidate\n", encoding="utf-8")
        git(root, "add", "candidate.txt")
        git(root, "commit", "-qm", "application candidate")
        candidate = git(root, "rev-parse", "HEAD")
        return tmp, root, rec, current, current_tree, candidate

    def test_exact_baseline_allows_unrelated_change(self):
        tmp, root, rec = self.fixture(); self.addCleanup(tmp.cleanup)
        (root / "src").mkdir(); (root / "src" / "app.ts").write_text("ok\n", encoding="utf-8")
        git(root, "add", "src/app.ts"); git(root, "commit", "-qm", "unrelated")
        result = MODULE.validate_baseline_ci_receipt(root=root, receipt=rec)
        self.assertTrue(result["ok"]); self.assertEqual(result["classification"], "inherited_baseline_failure")

    def test_changed_ledger_path_blocks_and_classifier_path_requires_focus(self):
        tmp, root, rec = self.fixture(); self.addCleanup(tmp.cleanup)
        path = root / "scripts/check-openclawdevelopmentplan01-section-13.3-ledger.mjs"
        path.parent.mkdir(parents=True); path.write_text("changed\n", encoding="utf-8")
        git(root, "add", str(path.relative_to(root))); git(root, "commit", "-qm", "ledger change")
        result = MODULE.validate_baseline_ci_receipt(root=root, receipt=rec)
        self.assertFalse(result["ok"]); self.assertIn("changed_failure_contract", result["errors"])

        tmp2, root2, rec2 = self.fixture(); self.addCleanup(tmp2.cleanup)
        path2 = root2 / ".github" / "workflows" / "ci.yml"
        path2.parent.mkdir(parents=True); path2.write_text("classifier\n", encoding="utf-8")
        git(root2, "add", str(path2.relative_to(root2))); git(root2, "commit", "-qm", "classifier change")
        result2 = MODULE.validate_baseline_ci_receipt(root=root2, receipt=rec2)
        self.assertTrue(result2["ok"]); self.assertEqual(result2["classifierPathsRequiringFocusedChecks"], [".github/workflows/ci.yml"])

    def test_stale_identity_policy_workflow_and_failure_contract_block(self):
        tmp, root, rec = self.fixture(); self.addCleanup(tmp.cleanup)
        for field, value in (("baselineCommit", "a" * 40), ("baselineTree", "b" * 40), ("policyDigest", "sha256:" + "0" * 64), ("workflow", "Fast")):
            stale = dict(rec); stale[field] = value
            self.assertFalse(MODULE.validate_baseline_ci_receipt(root=root, receipt=stale)["ok"], field)
        stale = dict(rec); stale["inheritedFailures"] = [{**rec["inheritedFailures"][0], "job": "other"}]
        self.assertFalse(MODULE.validate_baseline_ci_receipt(root=root, receipt=stale)["ok"])
        self.assertFalse(
            MODULE.validate_baseline_ci_receipt(root=root, receipt=rec, baseline_sha="origin/development")["ok"]
        )

    def test_explicit_baseline_sha_survives_moving_development_ref(self):
        tmp, root, rec = self.fixture(); self.addCleanup(tmp.cleanup)
        (root / "src").mkdir(); (root / "src" / "app.ts").write_text("candidate\n", encoding="utf-8")
        git(root, "add", "src/app.ts"); git(root, "commit", "-qm", "candidate")
        candidate = git(root, "rev-parse", "HEAD")
        baseline = str(rec["baselineCommit"])
        git(root, "checkout", "-q", "-b", "moving-tip")
        (root / "moving.txt").write_text("development moved\n", encoding="utf-8")
        git(root, "add", "moving.txt"); git(root, "commit", "-qm", "move development")
        moving_tip = git(root, "rev-parse", "HEAD")
        git(root, "update-ref", "refs/remotes/origin/development", moving_tip)
        git(root, "checkout", "-q", "--detach", candidate)

        bound = MODULE.validate_baseline_ci_receipt(
            root=root,
            receipt=rec,
            baseline_ref="origin/development",
            baseline_sha=baseline,
        )
        self.assertTrue(bound["ok"], bound)
        self.assertEqual(bound["baselineCommit"], baseline)
        stale = MODULE.validate_baseline_ci_receipt(root=root, receipt=rec)
        self.assertFalse(stale["ok"])
        self.assertIn("baseline_commit", stale["errors"])

    def test_chained_receipt_accepts_exact_transition_before_current_candidate(self):
        tmp, root, rec, current, current_tree, candidate = self.chained_fixture()
        self.addCleanup(tmp.cleanup)
        result = MODULE.validate_baseline_ci_receipt(
            root=root,
            receipt=rec,
            baseline_sha=current,
            baseline_tree=current_tree,
            candidate_ref=candidate,
            observed_failures=list(MODULE.INHERITED_FAILURE_IDENTITIES),
        )
        self.assertTrue(result["ok"], result)
        self.assertTrue(result["receiptChained"])
        self.assertEqual(set(result["receiptTransitionPaths"]), MODULE.BASELINE_RECEIPT_REBIND_SCOPE)
        self.assertEqual(result["baselineCommit"], current)
        self.assertEqual(result["receiptBaselineCommit"], rec["baselineCommit"])

    def test_chained_receipt_rejects_transition_path_set_drift(self):
        for kwargs, expected in (
            ({"extra_path": "README.md"}, "receipt_transition_scope"),
            ({"omit_path": ".github/openclaw_progressive_validation.py"}, "receipt_transition_scope"),
        ):
            with self.subTest(**kwargs):
                tmp, root, rec, current, current_tree, candidate = self.chained_fixture(**kwargs)
                self.addCleanup(tmp.cleanup)
                result = MODULE.validate_baseline_ci_receipt(
                    root=root,
                    receipt=rec,
                    baseline_sha=current,
                    baseline_tree=current_tree,
                    candidate_ref=candidate,
                )
                self.assertFalse(result["ok"], result)
                self.assertIn(expected, result["errors"])

    def test_chained_receipt_rejects_changed_failure_contract_after_transition(self):
        tmp, root, rec, current, current_tree, candidate = self.chained_fixture()
        self.addCleanup(tmp.cleanup)
        contract_path = root / "src" / "state" / "lisa-principal-task-store.ts"
        contract_path.parent.mkdir(parents=True)
        contract_path.write_text("changed failure contract\n", encoding="utf-8")
        git(root, "add", str(contract_path.relative_to(root)))
        git(root, "commit", "-qm", "change inherited failure contract")
        result = MODULE.validate_baseline_ci_receipt(
            root=root,
            receipt=rec,
            baseline_sha=current,
            baseline_tree=current_tree,
            candidate_ref="HEAD",
            observed_failures=list(MODULE.INHERITED_FAILURE_IDENTITIES),
        )
        self.assertFalse(result["ok"], result)
        self.assertIn("changed_failure_contract", result["errors"])

    def test_chained_receipt_rejects_predecessor_tree_and_policy_drift(self):
        tmp, root, rec, current, current_tree, candidate = self.chained_fixture()
        self.addCleanup(tmp.cleanup)
        stale_tree = dict(rec)
        stale_tree["baselineTree"] = "0" * 40
        result = MODULE.validate_baseline_ci_receipt(
            root=root,
            receipt=stale_tree,
            baseline_sha=current,
            baseline_tree=current_tree,
            candidate_ref=candidate,
        )
        self.assertFalse(result["ok"], result)
        self.assertIn("receipt_predecessor_tree_mismatch", result["errors"])
        stale_policy = dict(rec)
        stale_policy["policyDigest"] = "sha256:" + "0" * 64
        result = MODULE.validate_baseline_ci_receipt(
            root=root,
            receipt=stale_policy,
            baseline_sha=current,
            baseline_tree=current_tree,
            candidate_ref=candidate,
        )
        self.assertFalse(result["ok"], result)
        self.assertIn("policy", result["errors"])

    def test_chained_receipt_rejects_non_ancestor_predecessor(self):
        tmp, root, rec = self.fixture()
        self.addCleanup(tmp.cleanup)
        git(root, "checkout", "-qb", "unrelated-predecessor")
        (root / "unrelated.txt").write_text("not the protected predecessor\n", encoding="utf-8")
        git(root, "add", "unrelated.txt")
        git(root, "commit", "-qm", "unrelated predecessor")
        predecessor = git(root, "rev-parse", "HEAD")
        predecessor_tree = git(root, "rev-parse", "HEAD^{tree}")
        git(root, "checkout", "-q", "development")
        for path in sorted(MODULE.BASELINE_RECEIPT_REBIND_SCOPE):
            target = root / path
            target.parent.mkdir(parents=True, exist_ok=True)
            target.write_text("receipt transition\n", encoding="utf-8")
        git(root, "add", ".")
        git(root, "commit", "-qm", "receipt maintenance transition")
        current = git(root, "rev-parse", "HEAD")
        current_tree = git(root, "rev-parse", "HEAD^{tree}")
        candidate = current
        non_ancestor_receipt = dict(rec)
        non_ancestor_receipt["baselineCommit"] = predecessor
        non_ancestor_receipt["baselineTree"] = predecessor_tree
        result = MODULE.validate_baseline_ci_receipt(
            root=root,
            receipt=non_ancestor_receipt,
            baseline_sha=current,
            baseline_tree=current_tree,
            candidate_ref=candidate,
        )
        self.assertFalse(result["ok"], result)
        self.assertIn("receipt_predecessor_not_ancestor", result["errors"])

    def test_stale_receipt_rebinds_to_atomic_execution_base(self):
        tmp, root, rec = self.fixture(); self.addCleanup(tmp.cleanup)
        receipt_baseline = str(rec["baselineCommit"])
        git(root, "checkout", "-q", "-b", "phase-base")
        (root / "base-metadata.txt").write_text("protected base moved\n", encoding="utf-8")
        git(root, "add", "base-metadata.txt"); git(root, "commit", "-qm", "move protected base")
        execution_base = git(root, "rev-parse", "HEAD")
        execution_tree = git(root, "rev-parse", "HEAD^{tree}")
        (root / "candidate.txt").write_text("phase candidate\n", encoding="utf-8")
        git(root, "add", "candidate.txt"); git(root, "commit", "-qm", "phase candidate")
        candidate = git(root, "rev-parse", "HEAD")
        result = MODULE.validate_baseline_ci_receipt(
            root=root,
            receipt=rec,
            baseline_sha=execution_base,
            baseline_tree=execution_tree,
            candidate_ref=candidate,
        )
        self.assertFalse(result["ok"], result)
        self.assertIn("baseline_commit", result["errors"])
        self.assertIn("baseline_tree", result["errors"])
        self.assertEqual(result["receiptBaselineCommit"], receipt_baseline)

    def test_stale_receipt_rebind_still_blocks_changed_failure_contract(self):
        tmp, root, rec = self.fixture(); self.addCleanup(tmp.cleanup)
        git(root, "checkout", "-q", "-b", "phase-base")
        (root / "base-metadata.txt").write_text("protected base moved\n", encoding="utf-8")
        git(root, "add", "base-metadata.txt"); git(root, "commit", "-qm", "move protected base")
        execution_base = git(root, "rev-parse", "HEAD")
        execution_tree = git(root, "rev-parse", "HEAD^{tree}")
        changed = root / "scripts" / "check-openclawdevelopmentplan01-section-13.3-ledger.mjs"
        changed.parent.mkdir(parents=True); changed.write_text("changed contract\n", encoding="utf-8")
        git(root, "add", str(changed.relative_to(root))); git(root, "commit", "-qm", "change inherited failure contract")
        result = MODULE.validate_baseline_ci_receipt(
            root=root,
            receipt=rec,
            baseline_sha=execution_base,
            baseline_tree=execution_tree,
        )
        self.assertFalse(result["ok"])
        self.assertIn("changed_failure_contract", result["errors"])

    def test_execution_base_tree_mismatch_rejects_rebinding(self):
        tmp, root, rec = self.fixture(); self.addCleanup(tmp.cleanup)
        git(root, "checkout", "-q", "-b", "phase-base")
        (root / "base-metadata.txt").write_text("protected base moved\n", encoding="utf-8")
        git(root, "add", "base-metadata.txt"); git(root, "commit", "-qm", "move protected base")
        execution_base = git(root, "rev-parse", "HEAD")
        result = MODULE.validate_baseline_ci_receipt(
            root=root,
            receipt=rec,
            baseline_sha=execution_base,
            baseline_tree="0" * 40,
        )
        self.assertFalse(result["ok"])
        self.assertIn("baseline_tree_mismatch", result["errors"])

    def test_generated_only_receipt_path_change_is_tolerated(self):
        tmp, root, rec = self.fixture(); self.addCleanup(tmp.cleanup)
        generated = root / MODULE.BASELINE_RECEIPT_PATH
        generated.parent.mkdir(parents=True)
        generated.write_text("generated\n", encoding="utf-8")
        git(root, "add", str(generated.relative_to(root))); git(root, "commit", "-qm", "generated receipt")
        result = MODULE.validate_baseline_ci_receipt(root=root, receipt=rec)
        self.assertTrue(result["ok"], result)
        self.assertTrue(result["generatedOnly"])

    def test_complete_failure_contract_requires_exact_set(self):
        tmp, root, rec = self.fixture(); self.addCleanup(tmp.cleanup)
        exact = MODULE.validate_baseline_ci_receipt(
            root=root,
            receipt=rec,
            observed_failures=list(MODULE.INHERITED_FAILURE_IDENTITIES),
        )
        self.assertTrue(exact["ok"], exact)
        protected = {
            **exact,
            "baselineCommit": MODULE.BASELINE_COMMIT,
            "baselineTree": MODULE.BASELINE_TREE,
            "receiptBaselineCommit": MODULE.BASELINE_COMMIT,
            "receiptBaselineTree": MODULE.BASELINE_TREE,
            "changedPaths": sorted(
                MODULE.BASELINE_RECEIPT_REBIND_SCOPE
            ),
        }
        self.assertTrue(
            MODULE.protected_inherited_failure_admissible(
                protected, observed_failures=list(MODULE.INHERITED_FAILURE_IDENTITIES)
            )
        )
        self.assertFalse(
            MODULE.protected_inherited_failure_admissible(
                protected, observed_failures=list(MODULE.INHERITED_FAILURE_IDENTITIES)[:-1]
            )
        )
        self.assertFalse(
            MODULE.protected_inherited_failure_admissible(
                protected, observed_failures=list(MODULE.INHERITED_FAILURE_IDENTITIES) + ["new-failure"]
            )
        )
        self.assertFalse(
            MODULE.protected_inherited_failure_admissible(
                protected,
                observed_failures=list(MODULE.INHERITED_FAILURE_IDENTITIES)
                + [MODULE.INHERITED_FAILURE_IDENTITIES[0]],
            )
        )

    def test_aggregate_matrix_parent_is_not_an_exact_failure_identity(self):
        tmp, root, rec = self.fixture(); self.addCleanup(tmp.cleanup)
        aggregate_contexts = [
            "check-additional-shard",
            "check-docs",
            "check-shard",
            "checks-fast-core",
            "checks-fast-plugin-contracts-shard",
            "checks-node-core-test-nondist-shard",
        ]
        result = MODULE.validate_baseline_ci_receipt(
            root=root,
            receipt=rec,
            observed_failures=aggregate_contexts,
        )
        self.assertTrue(result["ok"], result)
        self.assertFalse(result["protectedAdmission"])

    def test_changed_failure_contract_path_blocks_even_with_exact_failures(self):
        tmp, root, rec = self.fixture(); self.addCleanup(tmp.cleanup)
        changed = root / "src" / "state" / "lisa-principal-task-store.ts"
        changed.parent.mkdir(parents=True); changed.write_text("changed\n", encoding="utf-8")
        git(root, "add", str(changed.relative_to(root))); git(root, "commit", "-qm", "contract change")
        result = MODULE.validate_baseline_ci_receipt(
            root=root,
            receipt=rec,
            observed_failures=list(sorted(MODULE.INHERITED_FAILURE_JOBS)),
        )
        self.assertFalse(result["ok"])
        self.assertIn("changed_failure_contract", result["errors"])
        self.assertFalse(result["protectedAdmission"])

    def test_protected_admission_allows_exact_four_path_rebind_scope(self):
        result = {
            "ok": True,
            "classification": "inherited_baseline_failure",
            "baselineCommit": MODULE.BASELINE_COMMIT,
            "baselineTree": MODULE.BASELINE_TREE,
            "receiptBaselineCommit": MODULE.BASELINE_COMMIT,
            "receiptBaselineTree": MODULE.BASELINE_TREE,
            "changedFailureContractPaths": [],
            "changedPaths": sorted(MODULE.BASELINE_RECEIPT_REBIND_SCOPE),
            "errors": [],
        }
        self.assertTrue(
            MODULE.protected_inherited_failure_admissible(
                result, observed_failures=list(MODULE.INHERITED_FAILURE_IDENTITIES)
            )
        )
        result["changedPaths"] = sorted(
            MODULE.BASELINE_RECEIPT_REBIND_SCOPE - {MODULE.BASELINE_RECEIPT_PATH}
        )
        self.assertFalse(
            MODULE.protected_inherited_failure_admissible(
                result, observed_failures=list(MODULE.INHERITED_FAILURE_IDENTITIES)
            )
        )

    def test_pkt11_preflight_scope_is_exact_and_fail_closed(self):
        result = {
            "ok": True,
            "classification": "inherited_baseline_failure",
            "baselineCommit": MODULE.BASELINE_COMMIT,
            "baselineTree": MODULE.BASELINE_TREE,
            "receiptBaselineCommit": MODULE.BASELINE_COMMIT,
            "receiptBaselineTree": MODULE.BASELINE_TREE,
            "changedFailureContractPaths": [],
            "changedPaths": sorted(MODULE.PKT11_PHASE_SCOPE),
            "errors": [],
        }
        failures = list(MODULE.INHERITED_FAILURE_IDENTITIES)
        self.assertTrue(MODULE.protected_inherited_failure_admissible(result, observed_failures=failures))
        result["changedPaths"] = sorted(MODULE.PKT11_PHASE_SCOPE - {MODULE.PKT11_SOURCE_PREFLIGHT_TEST})
        self.assertFalse(MODULE.protected_inherited_failure_admissible(result, observed_failures=failures))
        result["changedPaths"] = sorted(MODULE.PKT11_PHASE_SCOPE | {"README.md"})
        self.assertFalse(MODULE.protected_inherited_failure_admissible(result, observed_failures=failures))
        result["changedPaths"] = sorted(
            MODULE.BASELINE_RECEIPT_REBIND_SCOPE - {"test/openclaw_progressive_validation.py"}
        )
        self.assertFalse(
            MODULE.protected_inherited_failure_admissible(
                result, observed_failures=list(MODULE.INHERITED_FAILURE_IDENTITIES)
            )
        )
        result["changedPaths"] = sorted(MODULE.BASELINE_RECEIPT_REBIND_SCOPE | {"README.md"})
        self.assertFalse(
            MODULE.protected_inherited_failure_admissible(
                result, observed_failures=list(MODULE.INHERITED_FAILURE_IDENTITIES)
            )
        )


if __name__ == "__main__":
    unittest.main()
