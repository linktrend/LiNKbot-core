import { describe, expect, it } from "vitest";
import {
  BACKUP_SERVICE_TEMPLATE,
  BACKUP_TIMER_TEMPLATE,
  LISA_BACKUP_SERVICE,
  LISA_BACKUP_TIMER,
  LISA_PRIVATE_RESTORE_SERVICE,
  buildDeploymentPlan,
  executeSourceRollback,
  validateDeploymentPlan,
} from "./deployment.js";

const PATHS = {
  checkoutRoot: "/opt/linktrend/openclaw_prime",
  stateRoot: "/var/lib/openclaw/lisa/state",
  backupRoot: "/var/backups/openclaw/lisa",
  receiptRoot: "/var/lib/openclaw/lisa/receipts",
};

describe("PKT-09 source deployment recreation", () => {
  it("renders the three Lisa-only units with Linux paths and hardening", () => {
    const plan = buildDeploymentPlan({ paths: PATHS });
    const validation = validateDeploymentPlan(plan);
    expect(validation).toMatchObject({ valid: true });
    expect(validation.unitNames).toEqual([
      LISA_BACKUP_SERVICE,
      LISA_BACKUP_TIMER,
      LISA_PRIVATE_RESTORE_SERVICE,
    ]);
    expect(plan.units[0].contents).toContain("--profile lisa");
    expect(plan.units[0].contents).toContain("ProtectSystem=strict");
    expect(plan.units[1].contents).toContain("OnCalendar=*-*-* 05:30:00 Asia/Taipei");
    expect(plan.units[2].contents).toContain("IPAddressDeny=any");
    expect(plan.units.map((unit) => unit.contents).join("\n")).not.toMatch(
      /(?:\/Users\/|\/Applications\/)/u,
    );
  });

  it("rejects Mac paths and inline credentials before any host action", () => {
    expect(() =>
      buildDeploymentPlan({
        paths: { ...PATHS, checkoutRoot: "/Users/carlos/openclaw_prime" },
      }),
    ).toThrow("mac_path_checkout_root");
    expect(() =>
      validateDeploymentPlan({
        ...buildDeploymentPlan({ paths: PATHS }),
        units: [
          {
            name: LISA_BACKUP_SERVICE,
            contents: `${BACKUP_SERVICE_TEMPLATE}\nOPENCLAW_GATEWAY_TOKEN=fixture`,
          },
          { name: LISA_BACKUP_TIMER, contents: BACKUP_TIMER_TEMPLATE },
          {
            name: LISA_PRIVATE_RESTORE_SERVICE,
            contents: "ProtectSystem=strict NoNewPrivileges=true UMask=0077",
          },
        ],
      }),
    ).toThrow("prohibited_deployment_content:OPENCLAW_GATEWAY_TOKEN=");
  });

  it("rejects newline/control injection before rendering unit directives", () => {
    expect(() =>
      buildDeploymentPlan({
        paths: { ...PATHS, checkoutRoot: "/opt/openclaw_prime\nExecStart=/bin/evil" },
      }),
    ).toThrow("invalid_checkout_root");
    expect(() =>
      buildDeploymentPlan({
        paths: { ...PATHS, receiptRoot: "/var/lib/openclaw/lisa/receipts%N" },
      }),
    ).toThrow("invalid_receipt_root");
  });

  it("executes rollback in a fixed order and preserves the verified backup", async () => {
    const events: string[] = [];
    const result = await executeSourceRollback({
      stopBackupTimer: async () => {
        events.push("stop-timer");
      },
      restorePreviousUnits: async () => {
        events.push("restore-units");
      },
      preserveVerifiedBackup: async () => {
        events.push("preserve-backup");
      },
      startBackupService: async () => {
        events.push("start-service");
      },
    });
    expect(result).toEqual({ status: "rolled_back" });
    expect(events).toEqual(["stop-timer", "restore-units", "preserve-backup", "start-service"]);
  });
});
