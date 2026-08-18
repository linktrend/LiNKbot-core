// Heartbeat config honor inventory lists heartbeat config ownership rows.
import type { ConfigHonorInventoryRow } from "./config-honor-audit.js";

// Inventory of heartbeat config keys and the proof paths that should honor them.

/** Config prefixes audited for heartbeat key coverage. */
export const HEARTBEAT_CONFIG_PREFIXES = [
  "agents.defaults.heartbeat",
  "agents.list.*.heartbeat",
] as const;

/** Heartbeat config honor inventory consumed by config audit tests. */
export const HEARTBEAT_CONFIG_HONOR_INVENTORY: ConfigHonorInventoryRow[] = [
  {
    key: "every",
    schemaPaths: ["agents.defaults.heartbeat.every", "agents.list.*.heartbeat.every"],
    typePaths: ["src/config/types.agent-defaults.ts", "src/config/zod-schema.agent-runtime.ts"],
    mergePaths: ["src/infra/heartbeat-runner.ts", "src/agents/acp-spawn.ts"],
    consumerPaths: ["src/infra/heartbeat-runner.ts", "src/agents/acp-spawn.ts"],
    reloadPaths: ["src/gateway/config-reload-plan.ts"],
    testPaths: [
      "src/infra/heartbeat-runner.returns-default-unset.test.ts",
      "src/gateway/config-reload.test.ts",
    ],
  },
  {
    key: "model",
    schemaPaths: ["agents.defaults.heartbeat.model", "agents.list.*.heartbeat.model"],
    typePaths: ["src/config/types.agent-defaults.ts", "src/config/zod-schema.agent-runtime.ts"],
    mergePaths: ["src/infra/heartbeat-runner.ts"],
    consumerPaths: ["src/infra/heartbeat-runner.ts"],
    reloadPaths: ["src/gateway/config-reload-plan.ts"],
    testPaths: [
      "src/infra/heartbeat-runner.model-override.test.ts",
      "src/gateway/config-reload.test.ts",
    ],
  },
  {
    key: "prompt",
    schemaPaths: ["agents.defaults.heartbeat.prompt", "agents.list.*.heartbeat.prompt"],
    typePaths: ["src/config/types.agent-defaults.ts", "src/config/zod-schema.agent-runtime.ts"],
    mergePaths: ["src/infra/heartbeat-runner.ts"],
    consumerPaths: ["src/infra/heartbeat-runner.ts"],
    reloadPaths: ["src/gateway/config-reload-plan.ts"],
    testPaths: ["src/infra/heartbeat-runner.returns-default-unset.test.ts"],
  },
  {
    key: `ltfx.n.a2c45c454e43ac532c8d.v1`,
    schemaPaths: [
      "agents.defaults.heartbeat.includeSystemPromptSection",
      "agents.list.*.heartbeat.includeSystemPromptSection",
    ],
    typePaths: ["src/config/types.agent-defaults.ts", "src/config/zod-schema.agent-runtime.ts"],
    mergePaths: ["src/agents/heartbeat-system-prompt.ts"],
    consumerPaths: [
      "src/agents/heartbeat-system-prompt.ts",
      "src/agents/embedded-agent-runner/run/attempt.prompt-helpers.ts",
    ],
    reloadPaths: ["src/gateway/config-reload-plan.ts"],
    testPaths: ["src/agents/heartbeat-system-prompt.test.ts"],
  },
  {
    key: `ltfx.n.bc4d5d549a6b7a228497.v1`,
    schemaPaths: ["agents.defaults.heartbeat.ackMaxChars", "agents.list.*.heartbeat.ackMaxChars"],
    typePaths: ["src/config/types.agent-defaults.ts", "src/config/zod-schema.agent-runtime.ts"],
    mergePaths: ["src/infra/heartbeat-runner.ts"],
    consumerPaths: ["src/infra/heartbeat-runner.ts"],
    reloadPaths: ["src/gateway/config-reload-plan.ts"],
    testPaths: ["src/infra/heartbeat-runner.respects-ackmaxchars-heartbeat-acks.test.ts"],
  },
  {
    key: `ltfx.n.d903c7a067a38b4849c1.v1`,
    schemaPaths: [
      "agents.defaults.heartbeat.suppressToolErrorWarnings",
      "agents.list.*.heartbeat.suppressToolErrorWarnings",
    ],
    typePaths: ["src/config/types.agent-defaults.ts", "src/config/zod-schema.agent-runtime.ts"],
    mergePaths: ["src/infra/heartbeat-runner.ts"],
    consumerPaths: ["src/infra/heartbeat-runner.ts"],
    reloadPaths: ["src/gateway/config-reload-plan.ts"],
    testPaths: ["src/infra/heartbeat-runner.model-override.test.ts"],
  },
  {
    key: `ltfx.n.5036d2af62d1c62c9650.v1`,
    schemaPaths: [
      "agents.defaults.heartbeat.timeoutSeconds",
      "agents.list.*.heartbeat.timeoutSeconds",
    ],
    typePaths: ["src/config/types.agent-defaults.ts", "src/config/zod-schema.agent-runtime.ts"],
    mergePaths: ["src/infra/heartbeat-runner.ts"],
    consumerPaths: ["src/infra/heartbeat-runner.ts", "src/auto-reply/reply/get-reply.ts"],
    reloadPaths: ["src/gateway/config-reload-plan.ts"],
    testPaths: [
      "src/config/zod-schema.agent-defaults.test.ts",
      "src/infra/heartbeat-runner.model-override.test.ts",
    ],
  },
  {
    key: `ltfx.n.03f3a7e420acf1048b00.v1`,
    schemaPaths: ["agents.defaults.heartbeat.lightContext", "agents.list.*.heartbeat.lightContext"],
    typePaths: ["src/config/types.agent-defaults.ts", "src/config/zod-schema.agent-runtime.ts"],
    mergePaths: ["src/infra/heartbeat-runner.ts"],
    consumerPaths: ["src/infra/heartbeat-runner.ts", "src/agents/bootstrap-files.ts"],
    reloadPaths: ["src/gateway/config-reload-plan.ts"],
    testPaths: [
      "src/infra/heartbeat-runner.model-override.test.ts",
      "src/agents/bootstrap-files.test.ts",
      "src/gateway/config-reload.test.ts",
    ],
  },
  {
    key: `ltfx.n.d4e425276949bec7b1dd.v1`,
    schemaPaths: [
      "agents.defaults.heartbeat.isolatedSession",
      "agents.list.*.heartbeat.isolatedSession",
    ],
    typePaths: ["src/config/types.agent-defaults.ts", "src/config/zod-schema.agent-runtime.ts"],
    mergePaths: ["src/infra/heartbeat-runner.ts"],
    consumerPaths: ["src/infra/heartbeat-runner.ts"],
    reloadPaths: ["src/gateway/config-reload-plan.ts"],
    testPaths: ["src/infra/heartbeat-runner.model-override.test.ts"],
  },
  {
    key: "target",
    schemaPaths: ["agents.defaults.heartbeat.target", "agents.list.*.heartbeat.target"],
    typePaths: ["src/config/types.agent-defaults.ts", "src/config/zod-schema.agent-runtime.ts"],
    mergePaths: ["src/infra/heartbeat-runner.ts", "src/infra/outbound/targets.ts"],
    consumerPaths: ["src/infra/outbound/targets.ts", "src/infra/heartbeat-runner.ts"],
    reloadPaths: ["src/gateway/config-reload-plan.ts"],
    testPaths: [
      "src/infra/heartbeat-runner.returns-default-unset.test.ts",
      "src/cron/service.main-job-passes-heartbeat-target-last.test.ts",
    ],
  },
  {
    key: "to",
    schemaPaths: ["agents.defaults.heartbeat.to", "agents.list.*.heartbeat.to"],
    typePaths: ["src/config/types.agent-defaults.ts", "src/config/zod-schema.agent-runtime.ts"],
    mergePaths: ["src/infra/heartbeat-runner.ts", "src/infra/outbound/targets.ts"],
    consumerPaths: ["src/infra/outbound/targets.ts"],
    reloadPaths: ["src/gateway/config-reload-plan.ts"],
    testPaths: ["src/infra/heartbeat-runner.returns-default-unset.test.ts"],
  },
  {
    key: `ltfx.n.e05f5218c40212bceb94.v1`,
    schemaPaths: ["agents.defaults.heartbeat.accountId", "agents.list.*.heartbeat.accountId"],
    typePaths: ["src/config/types.agent-defaults.ts", "src/config/zod-schema.agent-runtime.ts"],
    mergePaths: ["src/infra/heartbeat-runner.ts", "src/infra/outbound/targets.ts"],
    consumerPaths: ["src/infra/outbound/targets.ts", "src/infra/heartbeat-runner.ts"],
    reloadPaths: ["src/gateway/config-reload-plan.ts"],
    testPaths: [
      "src/infra/heartbeat-runner.returns-default-unset.test.ts",
      "src/infra/heartbeat-runner.respects-ackmaxchars-heartbeat-acks.test.ts",
    ],
  },
  {
    key: `ltfx.n.457eeef80f7045f5cd81.v1`,
    schemaPaths: ["agents.defaults.heartbeat.directPolicy", "agents.list.*.heartbeat.directPolicy"],
    typePaths: ["src/config/types.agent-defaults.ts", "src/config/zod-schema.agent-runtime.ts"],
    mergePaths: ["src/infra/heartbeat-runner.ts", "src/infra/outbound/targets.ts"],
    consumerPaths: ["src/infra/outbound/targets.ts"],
    reloadPaths: ["src/gateway/config-reload-plan.ts"],
    testPaths: ["src/infra/heartbeat-runner.returns-default-unset.test.ts"],
  },
  {
    key: `ltfx.n.71df4fb953096eedd3bd.v1`,
    schemaPaths: [
      "agents.defaults.heartbeat.includeReasoning",
      "agents.list.*.heartbeat.includeReasoning",
    ],
    typePaths: ["src/config/types.agent-defaults.ts", "src/config/zod-schema.agent-runtime.ts"],
    mergePaths: ["src/infra/heartbeat-runner.ts"],
    consumerPaths: ["src/infra/heartbeat-runner.ts"],
    reloadPaths: ["src/gateway/config-reload-plan.ts"],
    testPaths: ["src/infra/heartbeat-runner.returns-default-unset.test.ts"],
  },
];
