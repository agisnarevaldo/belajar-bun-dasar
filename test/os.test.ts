import { describe, it, expect } from "bun:test";

import * as os from "node:os";

describe('NodeJS API', () => {
  it('should suport os', async () => {
    const arch = os.arch();
    expect(arch).toBe('x64');

    const type = os.type();
    expect(type).toBe('Linux');
  })
})
