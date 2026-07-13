import { describe, expect, it, vi } from 'vitest';
import { submitPortfolioRun } from '../src/app/components/mirror/lib/submission';
import type { GameData } from '../src/app/components/mirror/types';

const fixture = { sessionId: 'portfolio-demo', responses: [] } as unknown as GameData;

describe('submitPortfolioRun', () => {
  it('does not send participant data anywhere', async () => {
    const fetchSpy = vi.spyOn(globalThis, 'fetch');
    await expect(submitPortfolioRun(fixture)).resolves.toEqual({ ok: true });
    expect(fetchSpy).not.toHaveBeenCalled();
    fetchSpy.mockRestore();
  });
});
