import { hello } from "../hello";

describe("hello world", () => {
  it("should have text", () => {
    expect(hello()).toBe("hello world!");
  });
});
