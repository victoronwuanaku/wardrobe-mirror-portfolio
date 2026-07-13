import type { GameData, SubmissionResult } from '../types';

// The portfolio build intentionally keeps completed reflections in the browser only.
export async function submitPortfolioRun(_data: GameData): Promise<SubmissionResult> {
  return { ok: true };
}
