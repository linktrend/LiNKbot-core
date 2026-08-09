import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import {
  mkdirSync,
  mkdtempSync,
  readFileSync,
  realpathSync,
  rmSync,
  symlinkSync,
  writeFileSync,
} from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { DatabaseSync } from "node:sqlite";
import { describe, it } from "node:test";

const tool = path.resolve("linkbots/lisa/ops/lisa-direct-migration.mjs");
const serviceUnit = path.resolve("linkbots/lisa/ops/lisa-vps.service");

function makeFixture() {
  const root = mkdtempSync(path.join(tmpdir(), "lisa-direct-"));
  const sourcePath = path.join(root, ".openclaw-lisa");
  mkdirSync(sourcePath);
  const source = realpathSync(sourcePath);
  mkdirSync(path.join(source, "workspace", "memory"), { recursive: true });
  mkdirSync(path.join(source, "workspace", "studio"), { recursive: true });
  mkdirSync(path.join(source, "workspace", "knowledge"), { recursive: true });
  mkdirSync(path.join(source, "workspace-local-coder"), { recursive: true });
  mkdirSync(path.join(source, "agents", "main", "sessions"), { recursive: true });
  mkdirSync(path.join(source, "cron"), { recursive: true });
  writeFileSync(
    path.join(source, "openclaw.json"),
    JSON.stringify({
      profileId: "lisa",
      profileRoot: source,
      workspace: path.join(source, "workspace"),
      channels: { telegram: { enabled: true }, googlechat: { enabled: true } },
      serviceAccountRef: {
        source: "exec",
        provider: "googlechat",
        id: "value",
      },
    }),
  );
  for (const name of [
    "AGENTS.md",
    "SOUL.md",
    "IDENTITY.md",
    "USER.md",
    "TOOLS.md",
    "HEARTBEAT.md",
  ]) {
    writeFileSync(path.join(source, "workspace", name), `synthetic ${name}\n`);
  }
  writeFileSync(path.join(source, "workspace", "MEMORY.md"), "synthetic memory\n");
  writeFileSync(path.join(source, "workspace", "DREAMS.md"), "synthetic dreams\n");
  writeFileSync(
    path.join(source, "workspace", "memory", "2026-08-09.md"),
    "synthetic daily memory\n",
  );
  writeFileSync(
    path.join(source, "workspace", "studio", "INDEX.md"),
    "synthetic knowledge index\n",
  );
  writeFileSync(path.join(source, "workspace", "knowledge", "README.md"), "synthetic knowledge\n");
  writeFileSync(
    path.join(source, "agents", "main", "sessions", "session.jsonl"),
    "synthetic session\n",
  );
  writeFileSync(path.join(source, "cron", "jobs.json"), '{"jobs":[]}');
  symlinkSync(
    path.join(source, "workspace"),
    path.join(source, "workspace-local-coder", "scratch"),
  );
  const databasePath = path.join(source, "state.sqlite");
  const database = new DatabaseSync(databasePath);
  database.exec(
    "PRAGMA journal_mode=WAL; CREATE TABLE events (id INTEGER PRIMARY KEY, value TEXT);",
  );
  database.prepare("INSERT INTO events (value) VALUES (?)").run("synthetic event");
  const cronPath = path.join(root, "cron.json");
  writeFileSync(
    cronPath,
    JSON.stringify({
      jobs: [
        { id: "job-main", enabled: true, agentId: "main" },
        { id: "job-cron", enabled: true, agentId: "lisa-cron" },
      ],
    }),
  );
  return { root, source, database, cronPath };
}

function runTool(...args) {
  return spawnSync(process.execPath, [tool, ...args], {
    encoding: "utf8",
  });
}

describe("Lisa direct migration tooling", () => {
  it("creates and verifies a complete profile snapshot with online SQLite backup", async () => {
    const fixture = makeFixture();
    const backupRoot = path.join(fixture.root, "rollback");
    try {
      const snapshot = runTool(
        "snapshot",
        "--source",
        fixture.source,
        "--backup-root",
        backupRoot,
        "--cron-json",
        fixture.cronPath,
      );
      assert.equal(snapshot.status, 0, snapshot.stderr);
      assert.match(snapshot.stdout, /"sqliteCount":1/);
      const verify = runTool("verify", "--backup-root", backupRoot);
      assert.equal(verify.status, 0, verify.stderr);
      const manifest = JSON.parse(readFileSync(path.join(backupRoot, "manifest.json"), "utf8"));
      assert.deepEqual(manifest.cron.ids, ["job-cron", "job-main"]);
      assert.equal(manifest.summary.protectedCategories.personality, 6);
      assert.ok(manifest.summary.protectedCategories.memory >= 3);
      assert.ok(manifest.summary.protectedCategories.knowledge >= 2);
      assert.ok(manifest.summary.protectedCategories.sessions >= 2);
      assert.ok(
        manifest.entries.some(
          (entry) => entry.onlineBackup && entry.relativePath === "state.sqlite",
        ),
      );
      assert.ok(manifest.entries.some((entry) => entry.relativePath.endsWith("scratch")));
      assert.doesNotMatch(
        readFileSync(path.join(backupRoot, "manifest.json"), "utf8"),
        /synthetic event/,
      );

      const target = path.join(fixture.root, "vps", ".openclaw-lisa");
      const restore = runTool(
        "restore",
        "--backup-root",
        backupRoot,
        "--target-root",
        target,
        "--apply",
      );
      assert.equal(restore.status, 0, restore.stderr);
      const restored = new DatabaseSync(path.join(target, "state.sqlite"), { readOnly: true });
      assert.equal(restored.prepare("PRAGMA quick_check").get().quick_check, "ok");
      assert.equal(restored.prepare("SELECT count(*) AS count FROM events").get().count, 1);
      restored.close();
      assert.equal(
        readFileSync(path.join(target, "workspace", "MEMORY.md"), "utf8"),
        "synthetic memory\n",
      );
    } finally {
      fixture.database.close();
      rmSync(fixture.root, { recursive: true, force: true });
    }
  });

  it("produces a relocation plan without rewriting protected data", () => {
    const fixture = makeFixture();
    const backupRoot = path.join(fixture.root, "rollback");
    const output = path.join(fixture.root, "relocation.json");
    try {
      const snapshot = runTool(
        "snapshot",
        "--source",
        fixture.source,
        "--backup-root",
        backupRoot,
        "--cron-json",
        fixture.cronPath,
      );
      assert.equal(snapshot.status, 0, snapshot.stderr);
      const result = runTool(
        "relocate",
        "--backup-root",
        backupRoot,
        "--from-root",
        fixture.source,
        "--to-root",
        path.join(fixture.root, "vps", ".openclaw-lisa"),
        "--output",
        output,
      );
      assert.equal(result.status, 0, result.stderr);
      const plan = JSON.parse(readFileSync(output, "utf8"));
      assert.equal(plan.profileId, "lisa");
      assert.ok(plan.pathReferenceFiles.some((entry) => entry.relativePath === "openclaw.json"));
      assert.deepEqual(plan.immutableSurfaces, ["workspace/", "agents/", "state/", "cron/"]);
      assert.equal(plan.rootReplacement.to.endsWith(".openclaw-lisa"), true);
      assert.equal(
        readFileSync(path.join(fixture.root, "relocation.json"), "utf8").includes("synthetic"),
        false,
      );
    } finally {
      fixture.database.close();
      rmSync(fixture.root, { recursive: true, force: true });
    }
  });

  it("preserves cron identity/count and rejects a replacement profile source", () => {
    const fixture = makeFixture();
    const after = path.join(fixture.root, "cron-after.json");
    const candidate = path.join(fixture.root, ".openclaw-lisa-vps-candidate");
    try {
      writeFileSync(
        after,
        JSON.stringify({
          jobs: [
            { id: "job-main", enabled: true, agentId: "main" },
            { id: "job-cron", enabled: true, agentId: "lisa-cron" },
          ],
        }),
      );
      const cron = runTool("compare-cron", "--before", fixture.cronPath, "--after", after);
      assert.equal(cron.status, 0, cron.stderr);
      assert.match(cron.stdout, /"count":2/);
      mkdirSync(candidate);
      const rejected = runTool(
        "snapshot",
        "--source",
        candidate,
        "--backup-root",
        path.join(fixture.root, "candidate-backup"),
      );
      assert.equal(rejected.status, 2);
      assert.match(rejected.stderr, /exact \.openclaw-lisa root/);
    } finally {
      fixture.database.close();
      rmSync(fixture.root, { recursive: true, force: true });
    }
  });

  it("rejects cron enabled-state or agent assignment drift", () => {
    const fixture = makeFixture();
    const after = path.join(fixture.root, "cron-after.json");
    try {
      writeFileSync(
        after,
        JSON.stringify({
          jobs: [
            { id: "job-main", enabled: false, agentId: "main" },
            { id: "job-cron", enabled: true, agentId: "other-agent" },
          ],
        }),
      );
      const result = runTool("compare-cron", "--before", fixture.cronPath, "--after", after);
      assert.equal(result.status, 2);
      assert.match(result.stderr, /enabled-state|agent assignment/);
    } finally {
      fixture.database.close();
      rmSync(fixture.root, { recursive: true, force: true });
    }
  });

  it("fails closed on unapproved external symlinks and forbidden restore targets", () => {
    const fixture = makeFixture();
    const external = path.join(fixture.source, "external");
    try {
      symlinkSync("/var/tmp", external);
      const rejected = runTool(
        "snapshot",
        "--source",
        fixture.source,
        "--backup-root",
        path.join(fixture.root, "rollback"),
        "--cron-json",
        fixture.cronPath,
      );
      assert.equal(rejected.status, 2);
      assert.match(rejected.stderr, /unsafe symlink escapes Lisa root/);
      const forbidden = runTool(
        "restore",
        "--backup-root",
        path.join(fixture.root, "rollback"),
        "--target-root",
        path.join(fixture.root, ".openclaw-lisa-vps-candidate"),
      );
      assert.equal(forbidden.status, 2);
    } finally {
      fixture.database.close();
      rmSync(fixture.root, { recursive: true, force: true });
    }
  });

  it("keeps the VPS service Lisa-only and loopback-bound", () => {
    const unit = readFileSync(serviceUnit, "utf8");
    assert.match(unit, /^User=openclaw-lisa$/m);
    assert.match(unit, /^Environment=OPENCLAW_PROFILE=lisa$/m);
    assert.match(unit, /--profile lisa gateway run --bind loopback --port/);
    assert.doesNotMatch(unit, /eric|18793|%i/u);
  });
});
