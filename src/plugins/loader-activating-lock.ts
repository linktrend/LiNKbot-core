/**
 * Process-wide lock for activating plugin-registry reloads.
 *
 * Wave 7: two overlapping activating `loadOpenClawPlugins` calls must not
 * interleave candidate construction or ownership commit. Snapshot/validate
 * loads (activate=false) do not take this lock.
 */

export class PluginActivatingLoadConflictError extends Error {
  readonly inFlightOwnerKey: string;
  readonly requestedOwnerKey: string;

  constructor(inFlightOwnerKey: string, requestedOwnerKey: string) {
    super(
      `plugin activating load conflict: in-flight=${inFlightOwnerKey} requested=${requestedOwnerKey}`,
    );
    this.name = "PluginActivatingLoadConflictError";
    this.inFlightOwnerKey = inFlightOwnerKey;
    this.requestedOwnerKey = requestedOwnerKey;
  }
}

let activatingOwnerKey: string | null = null;

/** Begin an activating load. Rejects when another activating load is in flight. */
export function beginActivatingPluginLoad(ownerKey: string): void {
  if (activatingOwnerKey !== null) {
    throw new PluginActivatingLoadConflictError(activatingOwnerKey, ownerKey);
  }
  activatingOwnerKey = ownerKey;
}

/** Release the activating-load lock for the matching owner. */
export function finishActivatingPluginLoad(ownerKey: string): void {
  if (activatingOwnerKey === ownerKey) {
    activatingOwnerKey = null;
  }
}

/** Host/test helper: whether an activating load currently owns the lock. */
export function isActivatingPluginLoadInFlight(): boolean {
  return activatingOwnerKey !== null;
}

/** Test helper: clear the activating-load lock without a matching finish. */
export function resetActivatingPluginLoadLockForTest(): void {
  activatingOwnerKey = null;
}
