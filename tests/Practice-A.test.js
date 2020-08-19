import { helloTest, reassignTest, arrayTest, objTest } from "../src/Practice-A";

describe(`Problem 1`, () => {
  test(`Output is a string`, () => expect(typeof helloTest()).toBe("string"));
  test(`Outputs the correct string`, () =>
    expect(helloTest()).toBe(`Hello, world!`));
});

describe(`Problem 2`, () => {
  test(`Output is a number`, () =>
    expect(typeof reassignTest()).toBe("number"));
  test(`Outputs the value 3`, () => expect(reassignTest()).toBe(3));
});

describe(`Problem 3`, () => {
  test(`Output is an array`, () =>
    expect(Array.isArray(arrayTest())).toBe(true));
  test(`List contains at 3 values`, () => expect(arrayTest()).toHaveLength(3));
  test(`Last value is a string`, () =>
    expect(typeof arrayTest()[2]).toBe("string"));
});

describe(`Problem 4`, () => {
  const expected = {
    firstname: expect.anything(),
    lastname: expect.anything(),
  };

  test(`Output is an object`, () => expect(typeof objTest()).toBe("object"));
  test(`Value of firstname is a string`, () =>
    expect(typeof objTest().firstname).toBe("string"));
  test(`Output should contain an object with a firstname and lastname`, () =>
    expect(objTest()).toMatchObject(expected));
});
