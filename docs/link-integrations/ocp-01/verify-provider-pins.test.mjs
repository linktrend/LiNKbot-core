import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import { gitOutput, isDirectExecution } from "./verify-provider-pins.mjs";

test("recognizes direct execution when the module URL encodes spaces", () => {
  assert.equal(
    isDirectExecution(
      "file:///tmp/openclaw%20prime/docs/link-integrations/ocp-01/verify-provider-pins.mjs",
      "/tmp/openclaw prime/docs/link-integrations/ocp-01/verify-provider-pins.mjs",
    ),
    true,
  );
});

test("does not treat an unrelated argv path as direct execution", () => {
  assert.equal(
    isDirectExecution(
      "file:///tmp/openclaw%20prime/docs/link-integrations/ocp-01/verify-provider-pins.mjs",
      "/tmp/other/verify-provider-pins.mjs",
    ),
    false,
  );
});

test("ignores replacement refs for tree and artifact provenance", () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "ocp-provider-git-"));
  const git = (args, options = {}) =>
    execFileSync("git", ["-C", root, ...args], { encoding: "utf8", ...options }).trim();
  try {
    git(["init", "--quiet"]);
    git(["config", "user.email", "test@example.invalid"]);
    git(["config", "user.name", "OpenClaw Test"]);
    fs.writeFileSync(path.join(root, "artifact.txt"), "original\n");
    git(["add", "artifact.txt"]);
    git(["commit", "--quiet", "-m", "original"]);
    const pinnedCommit = git(["rev-parse", "HEAD"]);
    const pinnedTree = gitOutput(root, ["rev-parse", `${pinnedCommit}^{tree}`], {
      encoding: "utf8",
    }).trim();

    fs.writeFileSync(path.join(root, "artifact.txt"), "replacement\n");
    git(["add", "artifact.txt"]);
    git(["commit", "--quiet", "-m", "replacement"]);
    const replacementCommit = git(["rev-parse", "HEAD"]);
    git(["replace", pinnedCommit, replacementCommit]);

    assert.notEqual(git(["rev-parse", `${pinnedCommit}^{tree}`]), pinnedTree);
    assert.equal(
      gitOutput(root, ["rev-parse", `${pinnedCommit}^{tree}`], { encoding: "utf8" }).trim(),
      pinnedTree,
    );
    assert.equal(git(["show", `${pinnedCommit}:artifact.txt`]), "replacement");
    assert.equal(
      gitOutput(root, ["show", `${pinnedCommit}:artifact.txt`]).toString(),
      "original\n",
    );
  } finally {
    fs.rmSync(root, { recursive: true, force: true });
  }
});
