"""Focused tests for OpenClaw Prime customization-boundary schema logic."""

from __future__ import annotations

import copy
import json
import sys
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
if str(ROOT) not in sys.path:
    sys.path.insert(0, str(ROOT))

from validate_customization_boundary import (
    BoundaryError,
    classify,
    load_json,
    validate_files,
    validate_manifest,
)

class CustomizationBoundaryTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls) -> None:
        cls.manifest = validate_files(ROOT)

    def test_starting_prime_identity(self) -> None:
        prime = self.manifest["prime"]
        self.assertEqual(prime["commit"], "95e0494c1f332fd33cea12152a07dd404c52bb07")
        self.assertEqual(prime["tree"], "dbeea3e695449c1a5e79962d772d1c0716f42fc5")
        self.assertEqual(prime["ref"], "development")
        self.assertEqual(prime["repository"], "linktrend/openclaw_prime")

    def test_ide_managed_matches_v252_installed_state(self) -> None:
        ide = self.manifest["ideManaged"]
        self.assertEqual(ide["packageVersion"], "2.5.2")
        self.assertEqual(ide["destinationCount"], 442)
        receipts = [record["receiptPath"] for record in self.manifest["ideTransactionChanged"]["records"]]
        self.assertIn(
            "docs/execution/openclaw-prime-lisa/managed-upgrade-resolution-v13.json",
            receipts,
        )
        source = self.manifest["ideSource"]
        self.assertEqual(source["packageVersion"], "2.5.2")
        self.assertEqual(
            source["taggedRelease"]["commit"],
            "5a64f7f03d3463804b424cc59c4ee048473d9a51",
        )
        self.assertEqual(
            source["currentSource"]["commit"],
            "e32b578e2d11dcdf6e24baa8022f577efa26da24",
        )
        self.assertEqual(
            source["currentSource"]["tree"],
            "39273d6735c0baed7bf23c48df33c1c0a27d0476",
        )

    def test_untouched_upstream_is_omitted(self) -> None:
        self.assertFalse(self.manifest["exclusion"]["untouchedUpstream"]["enumerated"])
        self.assertEqual(classify("src/gateway/server.ts", self.manifest), "untouched-upstream-excluded")
        self.assertEqual(classify("test/helpers.ts", self.manifest), "untouched-upstream-excluded")
        self.assertEqual(classify("ui/src/app.tsx", self.manifest), "untouched-upstream-excluded")
        self.assertEqual(
            classify("docs/tools/exec.md", self.manifest),
            "untouched-upstream-excluded",
        )

    def test_linktrend_owned_prefixes_and_exact_paths(self) -> None:
        self.assertEqual(
            classify("linkbots/lisa/ops/receipts/pkt-11-source-acceptance.receipt.json", self.manifest),
            "linktrend-owned",
        )
        self.assertEqual(
            classify("docs/execution/openclaw-prime-lisa/dispatch-authority.json", self.manifest),
            "linktrend-owned",
        )
        self.assertEqual(classify("docs/agent-briefing.md", self.manifest), "linktrend-owned")
        self.assertEqual(
            classify(".github/workflows/linktrend-review-gate.yml", self.manifest),
            "linktrend-owned",
        )
        self.assertEqual(
            classify(".linktrend/openclaw-prime/customization-boundary.json", self.manifest),
            "linktrend-owned",
        )

    def test_ide_managed_is_separate_from_owned_inventory(self) -> None:
        self.assertTrue(self.manifest["ideManaged"]["separateFromLinktrendOwnedInventory"])
        self.assertEqual(classify("AGENTS.md", self.manifest), "ide-managed-overlay")
        self.assertEqual(
            classify(".agents/skills/autoreview/SKILL.md", self.manifest),
            "ide-managed",
        )
        self.assertEqual(
            classify(".cursor/skills/agentsetup/SKILL.md", self.manifest),
            "ide-managed-and-linktrend-owned",
        )
        self.assertIn("core", self.manifest["ideManaged"]["declaredMissingLocally"])

    def test_transaction_changed_paths_are_separate(self) -> None:
        self.assertTrue(
            self.manifest["ideTransactionChanged"]["separateFromIdeManagedInventory"]
        )
        self.assertEqual(
            classify("scripts/gitops/secret_scan.py", self.manifest),
            "ide-transaction-changed",
        )
        self.assertEqual(
            classify("scripts/gitops/packager_coordinator.py", self.manifest),
            "ide-transaction-changed",
        )
        self.assertEqual(
            classify(".ide-development/MANIFEST.json", self.manifest),
            "ide-transaction-changed",
        )
        self.assertNotEqual(
            classify("scripts/gitops/completion_gate.py", self.manifest),
            "ide-transaction-changed",
        )

    def test_owned_inventory_does_not_list_application_source(self) -> None:
        owned = [
            entry["path"]
            for entry in self.manifest["linktrendOwned"]["prefixes"]
            + self.manifest["linktrendOwned"]["exactPaths"]
        ]
        for path in owned:
            self.assertFalse(path == "src" or path.startswith("src/"))
            self.assertFalse(path == "extensions" or path.startswith("extensions/"))

    def test_reject_enumerated_untouched_upstream(self) -> None:
        broken = copy.deepcopy(self.manifest)
        broken["exclusion"]["untouchedUpstream"]["enumerated"] = True
        with self.assertRaises(BoundaryError):
            validate_manifest(broken)

    def test_reject_src_as_owned_prefix(self) -> None:
        broken = copy.deepcopy(self.manifest)
        broken["linktrendOwned"]["prefixes"].append(
            {
                "path": "src",
                "provenance": "github-contents-404-at-classification-pin",
            }
        )
        with self.assertRaises(BoundaryError):
            validate_manifest(broken)

    def test_reject_collapsing_ide_source_pins(self) -> None:
        broken = copy.deepcopy(self.manifest)
        broken["ideSource"]["currentSource"]["commit"] = broken["ideSource"]["taggedRelease"]["commit"]
        broken["ideSource"]["currentSource"]["tree"] = broken["ideSource"]["taggedRelease"]["tree"]
        with self.assertRaises(BoundaryError):
            validate_manifest(broken)

    def test_schema_file_is_present(self) -> None:
        schema = load_json(ROOT / "customization-boundary.schema.json")
        self.assertEqual(schema["properties"]["kind"]["const"], "openclaw-prime-customization-boundary")
        dumped = json.dumps(self.manifest, sort_keys=False)
        self.assertIn("sha256:", dumped)


if __name__ == "__main__":
    unittest.main()
