/**
 * Independent, stoppable periodic outbox drain worker with bounded ticks/stop.
 *
 * Guarantees:
 * - at most one tick in flight;
 * - active AbortControllers are retained and aborted on stop / tick deadline;
 * - tick and stop return within their deadlines even when drainOnce ignores cancel;
 * - late mutation may continue after caller return but ownership is not released early.
 */
import { isOperationTimeout, runBounded, type StalledInfo } from "./bounded.js";

export type BrainDrainWorker = {
  readonly running: boolean;
  readonly activeTicks: number;
  start(): void;
  stop(): Promise<void>;
};

type CreateBrainDrainWorkerParams = {
  intervalMs: number;
  /** Per-tick wall clock. Default 2_000. */
  tickTimeoutMs?: number;
  /** Overall stop wall clock. Default 2_000. */
  stopTimeoutMs?: number;
  shouldDrain: () => boolean;
  drainOnce: (options?: { signal?: AbortSignal }) => Promise<unknown>;
  onError?: (error: unknown) => void;
  onStalled?: (info: StalledInfo) => void;
  setIntervalFn?: typeof setInterval;
  clearIntervalFn?: typeof clearInterval;
};

export function createBrainDrainWorker(params: CreateBrainDrainWorkerParams): BrainDrainWorker {
  const setIntervalFn = params.setIntervalFn ?? setInterval;
  const clearIntervalFn = params.clearIntervalFn ?? clearInterval;
  const tickTimeoutMs = params.tickTimeoutMs ?? 2_000;
  const stopTimeoutMs = params.stopTimeoutMs ?? 2_000;
  let timer: ReturnType<typeof setInterval> | null = null;
  let tickTail: Promise<void> = Promise.resolve();
  let stopped = true;
  let generation = 0;
  let tickInFlight = false;
  let activeTicks = 0;
  const activeControllers = new Set<AbortController>();

  const runTick = (gen: number) => {
    if (stopped || gen !== generation || tickInFlight) {
      return;
    }
    if (!params.shouldDrain()) {
      return;
    }
    tickInFlight = true;
    activeTicks += 1;
    const controller = new AbortController();
    activeControllers.add(controller);

    const work = runBounded(
      async (signal) => {
        const merged = AbortSignal.any([signal, controller.signal]);
        await params.drainOnce({ signal: merged });
      },
      {
        timeoutMs: tickTimeoutMs,
        label: "drain-tick",
        onStalled: params.onStalled,
      },
    ).then(
      () => undefined,
      (error: unknown) => {
        if (!isOperationTimeout(error)) {
          params.onError?.(error);
        } else {
          params.onStalled?.({
            label: "drain-tick",
            reason: "deadline_exceeded_work_retained",
          });
        }
      },
    );

    const settled = work.finally(() => {
      activeControllers.delete(controller);
      tickInFlight = false;
      activeTicks = Math.max(0, activeTicks - 1);
    });
    tickTail = tickTail.then(
      () => settled,
      () => settled,
    );
  };

  return {
    get running() {
      return !stopped && timer !== null;
    },
    get activeTicks() {
      return activeTicks;
    },

    start() {
      if (!stopped && timer !== null) {
        return;
      }
      stopped = false;
      generation += 1;
      const gen = generation;
      timer = setIntervalFn(() => {
        runTick(gen);
      }, params.intervalMs);
      runTick(gen);
    },

    async stop() {
      stopped = true;
      generation += 1;
      if (timer !== null) {
        clearIntervalFn(timer);
        timer = null;
      }
      for (const controller of activeControllers) {
        controller.abort(new Error("linkbrain: drain worker stop"));
      }
      try {
        await runBounded(
          async () => {
            await tickTail;
          },
          {
            timeoutMs: stopTimeoutMs,
            label: "drain-stop",
            onStalled: params.onStalled,
          },
        );
      } catch (error) {
        if (!isOperationTimeout(error)) {
          throw error;
        }
        // Late tick work may still hold exclusive drain ownership.
      }
    },
  };
}
