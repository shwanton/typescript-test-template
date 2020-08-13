import { sum } from "../index";

test("adds 2 numbers", (): void => {
  const result = sum(1, 2); // ?
  expect(result).toBe(3);
});
