import { service } from "../service";

test("should have initial inactive state", () => {
  service.start();

  expect(service.state.value).toBe("inactive");

  service.stop();
});

test("should transition to active state", () => {
  service.start();

  service.send("TOGGLE");

  expect(service.state.value).toBe("active");

  service.stop();
});

test("should transition back to inactive state", () => {
  service.start();

  service.send("TOGGLE");
  service.send("TOGGLE");

  expect(service.state.value).toBe("inactive");

  service.stop();
});

test("should have active state value in transition callback", () => {
  service.start();

  service.send("TOGGLE");

  service.onTransition((state) => {
    expect(state.value).toBe("active");
  });

  service.stop();
});

test("should have state matching boolean in transition callback", () => {
  service.start();

  service.send("TOGGLE");

  service.onTransition((state) => {
    expect(state.matches("active")).toBe(true);
  });

  service.stop();
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
