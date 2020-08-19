import { sayHello, sayHelloName } from "../src/Practice-C";

describe(`Problem 1`, () => {
  test(`Output matches "Hello, World!"`, () =>
    expect(sayHello()).toBe("Hello, World!"));
});

describe(`Problem 2`, () => {
  const name = "Mr. Bailey";
  test(`Output matches "Hello, Mr. Bailey!"`, () =>
    expect(sayHelloName(name)).toBe("Hello, Mr. Bailey!"));
});
