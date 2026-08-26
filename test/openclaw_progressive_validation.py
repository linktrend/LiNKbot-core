"""Focused adversarial tests for the fork-owned baseline classifier."""

from __future__ import annotations

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
            "changedPaths": sorted(MODULE.PROTECTED_RECOVERY_SCOPE_PATHS),
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

    def test_protected_admission_allows_only_controller_and_receipt_scope(self):
        result = {
            "ok": True,
            "classification": "inherited_baseline_failure",
            "baselineCommit": MODULE.BASELINE_COMMIT,
            "baselineTree": MODULE.BASELINE_TREE,
            "receiptBaselineCommit": MODULE.BASELINE_COMMIT,
            "receiptBaselineTree": MODULE.BASELINE_TREE,
            "changedFailureContractPaths": [],
            "changedPaths": sorted(MODULE.PROTECTED_RECOVERY_SCOPE_PATHS),
            "errors": [],
        }
        self.assertTrue(
            MODULE.protected_inherited_failure_admissible(
                result, observed_failures=list(MODULE.INHERITED_FAILURE_IDENTITIES)
            )
        )
        for path in (
            "README.md",
            ".ide-development/tests/test_delivery_controller.py",
        ):
            with self.subTest(path=path):
                candidate = dict(result, changedPaths=list(result["changedPaths"]))
                if path == "README.md":
                    candidate["changedPaths"].append(path)
                else:
                    candidate["changedPaths"].remove(path)
                self.assertFalse(MODULE.protected_inherited_failure_admissible(candidate))

    def test_protected_admission_rejects_product_change_even_with_exact_failures(self):
        result = {
            "ok": True,
            "classification": "inherited_baseline_failure",
            "baselineCommit": MODULE.BASELINE_COMMIT,
            "baselineTree": MODULE.BASELINE_TREE,
            "receiptBaselineCommit": MODULE.BASELINE_COMMIT,
            "receiptBaselineTree": MODULE.BASELINE_TREE,
            "changedFailureContractPaths": [],
            "changedPaths": sorted(MODULE.PROTECTED_RECOVERY_SCOPE_PATHS | {"src/runtime.ts"}),
            "errors": [],
        }
        self.assertFalse(
            MODULE.protected_inherited_failure_admissible(
                result, observed_failures=list(MODULE.INHERITED_FAILURE_IDENTITIES)
            )
        )


if __name__ == "__main__":
    unittest.main()
