import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { chmodSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { describe, it } from "node:test";

const launcher = path.resolve("linkbots/lisa/ops/lisa-skills-keyless-gsm-launcher.sh");

describe("Lisa LiNKskills keyless GSM launcher", () => {
  it("streams the GSM value through inherited fd 3 without a key file", () => {
    const directory = mkdtempSync(path.join(tmpdir(), "lisa-skills-keyless-"));
    const fakeGcloud = path.join(directory, "gcloud");
    const child = path.join(directory, "child");
    writeFileSync(fakeGcloud, '#!/bin/sh\nprintf %s "synthetic-private-key"\n', { mode: 0o700 });
    writeFileSync(
      child,
      '#!/bin/sh\nvalue="$(cat <&3)"\n[ "$value" = synthetic-private-key ] || exit 21\n[ "${LINKSKILLS_PACI_CLIENT_PRIVATE_KEY_FD:-}" = 3 ] || exit 22\n[ -z "${LINKSKILLS_PACI_CLIENT_PRIVATE_KEY_FILE:-}" ] || exit 23\nprintf %s fd-ok\n',
      { mode: 0o700 },
    );
    chmodSync(fakeGcloud, 0o700);
    chmodSync(child, 0o700);
    try {
      const result = spawnSync(launcher, [child], {
        encoding: "utf8",
        env: {
          ...process.env,
          LINKSKILLS_GCLOUD_COMMAND: fakeGcloud,
          LINKSKILLS_GCP_PROJECT_ID: "synthetic-project",
          LINKSKILLS_GCP_RUNTIME_SERVICE_ACCOUNT: "lisa-runtime@synthetic.invalid",
          LINKSKILLS_GCP_PACI_SECRET_NAME: "SYNTHETIC_SKILLS_PACI_SECRET",
          LINKSKILLS_PACI_CLIENT_PRIVATE_KEY_FILE: "/must/not/reach/child",
        },
      });
      assert.equal(result.status, 0, result.stderr);
      assert.equal(result.stdout, "fd-ok");
      assert.equal(result.stderr, "");
    } finally {
      rmSync(directory, { recursive: true, force: true });
    }
  });

  it("fails closed when the gcloud command is not an absolute executable", () => {
    const result = spawnSync(launcher, ["/usr/bin/true"], {
      encoding: "utf8",
      env: {
        ...process.env,
        LINKSKILLS_GCLOUD_COMMAND: "gcloud",
        LINKSKILLS_GCP_PROJECT_ID: "synthetic-project",
        LINKSKILLS_GCP_RUNTIME_SERVICE_ACCOUNT: "lisa-runtime@synthetic.invalid",
        LINKSKILLS_GCP_PACI_SECRET_NAME: "SYNTHETIC_SKILLS_PACI_SECRET",
      },
    });
    assert.equal(result.status, 78);
    assert.match(result.stderr, /executable absolute path/);
  });

  it("fails closed when Secret Manager lookup fails", () => {
    const directory = mkdtempSync(path.join(tmpdir(), "lisa-skills-keyless-failure-"));
    const fakeGcloud = path.join(directory, "gcloud");
    const child = path.join(directory, "child");
    writeFileSync(fakeGcloud, "#!/bin/sh\nexit 19\n", { mode: 0o700 });
    writeFileSync(child, "#!/bin/sh\nexit 0\n", { mode: 0o700 });
    chmodSync(fakeGcloud, 0o700);
    chmodSync(child, 0o700);
    try {
      const result = spawnSync(launcher, [child], {
        encoding: "utf8",
        env: {
          ...process.env,
          LINKSKILLS_GCLOUD_COMMAND: fakeGcloud,
          LINKSKILLS_GCP_PROJECT_ID: "synthetic-project",
          LINKSKILLS_GCP_RUNTIME_SERVICE_ACCOUNT: "lisa-runtime@synthetic.invalid",
          LINKSKILLS_GCP_PACI_SECRET_NAME: "SYNTHETIC_SKILLS_PACI_SECRET",
        },
      });
      assert.equal(result.status, 78);
    } finally {
      rmSync(directory, { recursive: true, force: true });
    }
  });
});
