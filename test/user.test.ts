import { describe, it, expect } from "bun:test";
import { User } from "user/user.ts";

describe('User Package', () => {
  it('should acces from main package', async () => {
    const user = new User('Agis')
    expect(user.name).toBe("Agis");
  })
})
