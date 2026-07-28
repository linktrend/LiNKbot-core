/**
 * Bounded-operation helpers for Skills drain/shutdown.
 * Mirrors Brain's contract: return within timeoutMs; retain exclusive ownership
 * while abandoned work may still mutate.
 */

class LinkskillsOperationTimeoutError extends Error {
  readonly code = "LINKSKILLS_OPERATION_TIMEOUT" as const;
  readonly label: string;
  readonly timeoutMs: number;

  constructor(label: string, timeoutMs: number) {
    super(`linkskills: ${label} exceeded ${timeoutMs}ms`);
    this.name = "LinkskillsOperationTimeoutError";
    this.label = label;
    this.timeoutMs = timeoutMs;
  }
}

export function isOperationTimeout(error: unknown): boolean {
  return (
    error instanceof LinkskillsOperationTimeoutError ||
    (error instanceof Error && error.name === "LinkskillsOperationTimeoutError")
  );
}

export function throwIfAborted(signal: AbortSignal | undefined, label = "operation"): void {
  if (!signal?.aborted) {
    return;
  }
  const reason = signal.reason;
  if (reason instanceof Error) {
    throw reason;
  }
  throw new Error(`linkskills: ${label} aborted`);
}

type BoundedRaceOptions = {
  timeoutMs: number;
  label: string;
};

export type StalledInfo = {
  label: string;
  reason: "deadline_exceeded_work_retained" | "deadline_exceeded_before_start";
};

async function raceDeadline<T>(work: Promise<T>, options: BoundedRaceOptions): Promise<T> {
  let timer: ReturnType<typeof setTimeout> | undefined;
  const timeoutPromise = new Promise<never>((_, reject) => {
    timer = setTimeout(() => {
      reject(new LinkskillsOperationTimeoutError(options.label, options.timeoutMs));
    }, options.timeoutMs);
  });
  void timeoutPromise.catch(() => undefined);
  void work.catch(() => undefined);
  try {
    return await Promise.race([work, timeoutPromise]);
  } finally {
    if (timer !== undefined) {
      clearTimeout(timer);
    }
  }
}

export async function runBounded<T>(
  work: (signal: AbortSignal) => Promise<T>,
  options: BoundedRaceOptions & {
    signal?: AbortSignal;
    onTimeout?: (error: Error) => void;
    onStalled?: (info: StalledInfo) => void;
  },
): Promise<T> {
  const controller = new AbortController();
  let externalAbort: (() => void) | undefined;
  if (options.signal) {
    if (options.signal.aborted) {
      controller.abort(options.signal.reason);
    } else {
      externalAbort = () => {
        controller.abort(options.signal!.reason);
      };
      options.signal.addEventListener("abort", externalAbort, { once: true });
    }
  }

  const started = work(controller.signal);
  void started.then(
    () => undefined,
    () => undefined,
  );

  try {
    return await raceDeadline(started, {
      timeoutMs: options.timeoutMs,
      label: options.label,
    });
  } catch (error) {
    if (isOperationTimeout(error)) {
      controller.abort(error);
      options.onTimeout?.(error instanceof Error ? error : new Error(String(error)));
      options.onStalled?.({
        label: options.label,
        reason: "deadline_exceeded_work_retained",
      });
    }
    throw error;
  } finally {
    if (externalAbort && options.signal) {
      options.signal.removeEventListener("abort", externalAbort);
    }
  }
}
