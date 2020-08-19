import {
  literalTest,
  spreadTest,
  arrDesTest,
  objDesTest,
} from "../src/Practice-B";

describe(`Problem 1`, () => {
  test(`Output matches "Hello, Michaelangelo"`, () =>
    expect(literalTest()).toBe("Hello, Michaelangelo"));
});

describe(`Problem 2`, () => {
  const expected = ["Michaelangelo", "Leonardo", "Raphael", "Leonardo"];
  test(`Output matches array"`, () => expect(spreadTest()).toEqual(expected));
});

describe(`Problem 3`, () => {
  test(`Output for firstname matches "Clark"`, () =>
    expect(arrDesTest()[0]).toEqual("Clark"));
  test(`Output for lastname matches "Kent"`, () =>
    expect(arrDesTest()[1]).toEqual("Kent"));
});

describe(`Problem 4`, () => {
  test(`Output for city matches "Kingsport"`, () =>
    expect(objDesTest()[0]).toEqual("Kingsport"));
  test(`Output for state matches "TN"`, () =>
    expect(objDesTest()[1]).toEqual("TN"));
});
