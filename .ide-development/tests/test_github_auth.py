"""GitHub auth imports the canonical consumer execution protocol."""

from __future__ import annotations

import importlib
import sys
import unittest
from pathlib import Path


ROOT = Path(__file__).resolve().parents[2]


class GitHubAuthImportTests(unittest.TestCase):
    def test_script_import_uses_canonical_protocol_without_legacy_core(self) -> None:
        sys.modules.pop("core.execution.protocol", None)
        sys.modules.pop("execution.protocol", None)
        auth = importlib.import_module("scripts.gitops.github_auth")

        self.assertEqual(
            Path(auth._protocol.__file__).resolve(),
            ROOT / ".ide-development/execution/protocol.py",
        )
        self.assertEqual(auth.WAIVED_LEGACY_GATE, "WAIVED_LEGACY_GATE")
        self.assertFalse(auth.issue_checkpoint_auth_decision({})["pass"])


if __name__ == "__main__":
    unittest.main()
