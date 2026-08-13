import {
  evaluateExecDenylist,
  type ExecDenylistEvaluation,
} from "../infra/exec-approvals-denylist.js";
import type {
  ExecDenylistEntry,
  ExecHostAdapterBinding,
  ExecTarget,
} from "../infra/exec-approvals.js";
import {
  planShellAuthorization,
  type ExecAuthorizationPlan,
} from "../infra/exec-authorization-plan.js";
import { buildAuthorizedShellCommandFromPlan } from "../infra/exec-authorization-render.js";
/**
 * Generic exec safety gate and secure route decision.
 *
 * Profiles opt into secure routing and supply their own STOP and adapter policy.
 * This module only verifies analyzed structure; it contains no agent policy.
 */
import { detectUnsafeExecControlShellCommand } from "../infra/exec-control-command-guard.js";

export type ExecRouteScreen =
  | { allowed: true; plan: Extract<ExecAuthorizationPlan, { ok: true }> }
  | {
      allowed: false;
      reason: "control-command" | "stop-list" | "opaque";
      evaluation?: ExecDenylistEvaluation;
    };

export async function screenExecCommand(params: {
  command: string;
  denylist?: readonly ExecDenylistEntry[] | null;
  cwd?: string;
  env?: NodeJS.ProcessEnv;
  platform?: string | null;
}): Promise<ExecRouteScreen> {
  const controlCommand = await detectUnsafeExecControlShellCommand(params.command);
  if (controlCommand) {
    return { allowed: false, reason: "control-command" };
  }
  const plan = await planShellAuthorization({
    command: params.command,
    cwd: params.cwd,
    env: params.env,
    platform: params.platform,
  });
  if (!plan.ok) {
    return { allowed: false, reason: "opaque" };
  }
  const segments = plan.groups.flatMap((group) =>
    group.candidates.map((candidate) => candidate.sourceSegment),
  );
  if (segments.length === 0) {
    return { allowed: false, reason: "opaque" };
  }
  const evaluation = await evaluateExecDenylist({
    denylist: params.denylist ?? [],
    segments,
    analysisOk: true,
    cwd: params.cwd,
    env: params.env,
    platform: params.platform,
  });
  return evaluation.matched
    ? { allowed: false, reason: evaluation.unanalyzable ? "opaque" : "stop-list", evaluation }
    : { allowed: true, plan };
}

export type ExecRouteDecision =
  | { kind: "denied"; reason: "control-command" | "stop-list" | "opaque" }
  | {
      kind: "host-adapter";
      target: "gateway";
      bindingId: string;
      enforcedCommand: string;
      environment: Record<string, string>;
    }
  | { kind: "sandbox" }
  | { kind: "host-direct"; target: "gateway" | "node" }
  | { kind: "host-elevated"; target: "gateway" | "node" };

function hostTarget(target: ExecTarget | null | undefined): "gateway" | "node" {
  return target === "node" ? "node" : "gateway";
}

function adapterCommand(params: {
  plan: Extract<ExecAuthorizationPlan, { ok: true }>;
  binding: ExecHostAdapterBinding;
}): string | null {
  const candidates = params.plan.groups.flatMap((group) => group.candidates);
  if (params.plan.operators.length !== 0 || candidates.length !== 1) {
    return null;
  }
  const [candidate] = candidates;
  if (!candidate || candidate.transport.kind !== "direct") {
    return null;
  }
  if ((candidate.sourceSegment.resolution?.wrapperChain?.length ?? 0) !== 0) {
    return null;
  }
  const executable = candidate.sourceSegment.resolution?.execution.resolvedRealPath;
  const argv = candidate.sourceSegment.argv;
  if (
    executable !== params.binding.executable ||
    argv.length === 0 ||
    !params.binding.argvPrefix.every((entry, index) => argv[index + 1] === entry)
  ) {
    return null;
  }
  const rendered = buildAuthorizedShellCommandFromPlan({
    plan: params.plan,
    mode: "enforced",
    segmentSatisfiedBy: ["allowlist"],
  });
  return rendered.ok ? rendered.command : null;
}

/** Applies the explicit secure profile contract after pre-route screening. */
export function decideExecRoute(params: {
  secureRouting: boolean;
  screen?: ExecRouteScreen;
  configuredTarget: ExecTarget;
  requestedTarget?: ExecTarget | null;
  elevatedRequested: boolean;
  sandboxRequired: boolean;
  hostAdapters?: readonly ExecHostAdapterBinding[];
}): ExecRouteDecision {
  if (params.secureRouting) {
    if (!params.screen?.allowed) {
      return { kind: "denied", reason: params.screen?.reason ?? "opaque" };
    }
    for (const binding of params.hostAdapters ?? []) {
      const enforcedCommand = adapterCommand({ plan: params.screen.plan, binding });
      if (enforcedCommand) {
        return {
          kind: "host-adapter",
          target: binding.target,
          bindingId: binding.id,
          enforcedCommand,
          environment: { ...binding.environment },
        };
      }
    }
    return { kind: "sandbox" };
  }
  if (params.elevatedRequested) {
    return {
      kind: "host-elevated",
      target: hostTarget(params.requestedTarget ?? params.configuredTarget),
    };
  }
  return {
    kind: "host-direct",
    target: hostTarget(params.requestedTarget ?? params.configuredTarget),
  };
}
