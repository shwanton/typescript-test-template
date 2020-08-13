import { service } from "../service";

test("should have initial inactive state", () => {
  expect(service.state.value).toBe("inactive");
});

test("should transition to next active state", () => {
  service.send("TOGGLE");

  expect(service.state.value).toBe("active");
});

test("should transition to next inactive state", () => {
  service.send("TOGGLE");

  expect(service.state.value).toBe("inactive");
});

test("should have correct state during transition", () => {
  service.send("TOGGLE");

  service.onTransition((state) => {
    expect(state.value).toBe("active");
  });
});

// add test for not logging impossible states

// // typescript makes these impossible to run

// // test("should not throw error if event does not exist", () => {
// //   expect(toggleMachine.transition("inactive", "FOO").value).toBe("inactive");
// // });

// // test("should not throw error when strict is true", () => {
// //   toggleMachine.strict = true;

// //   expect(() =>
// //     toggleMachine.transition("inactive", "FOO")
// //   ).toThrowErrorMatchingInlineSnapshot(
// //     `"Machine 'toggle' does not accept event 'FOO'"`
// //   );
// // });
