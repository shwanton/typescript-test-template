import { toggleMachine } from "../factory";

test("should have initial state", () => {
  expect(toggleMachine.initialState.value).toBe("inactive");
});

test("should transition to next state", () => {
  expect(toggleMachine.transition("inactive", "TOGGLE").value).toBe("active");
});

test("should transition to previous state", () => {
  expect(toggleMachine.transition("inactive", "TOGGLE").value).toBe("active");
});

test("should throw error if state does not exist", () => {
  expect(() =>
    toggleMachine.transition("foo", "TOGGLE")
  ).toThrowErrorMatchingInlineSnapshot(
    `"Child state 'foo' does not exist on 'toggle'"`
  );
});

test("should not throw error if event does not exist", () => {
  expect(toggleMachine.transition("inactive", "FOO").value).toBe("inactive");
});

test("should not throw error when strict is true", () => {
  toggleMachine.strict = true;

  expect(() =>
    toggleMachine.transition("inactive", "FOO")
  ).toThrowErrorMatchingInlineSnapshot(
    `"Machine 'toggle' does not accept event 'FOO'"`
  );
});
