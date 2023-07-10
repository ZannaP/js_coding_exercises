import { sumDigits, createRange } from "../challenges/exercise007-optional";
describe("sumDigits", () => {
  test("it throws an error if not passed a Number or no argument", () => {
    expect(() => {
      sumDigits();
    }).toThrow("n is required");
    expect(() => {
      sumDigits("hello");
    }).toThrow("n must be a Number");
  });
  test("returns sum of digits", () => {
    expect(sumDigits(2023)).toBe(7);
    expect(sumDigits(20.23)).toBe(7);
  });
});

describe("createRange", () => {
  test("it throws an error if not passed arguments", () => {
    expect(() => {
      createRange();
    }).toThrow("start is required");
    expect(() => {
      createRange(7);
    }).toThrow("end is required");
  });
  test("arguments are numbers", () => {
    expect(() => {
      createRange("7", "5");
    }).toThrow("arguments must be Numbers");
    expect(() => {
      createRange(7, "5");
    }).toThrow("arguments must be Numbers");
    expect(() => {
      createRange(7, 5, "2");
    }).toThrow("arguments must be Numbers");
  });
  test("creates a range of numbers as an array. It received a start, an end and a step. Step is the gap between numbers in the range.", () => {
    expect(createRange(1, 10, 2)).toEqual([1, 3, 5, 7, 9]);
  });
  test("Both the start and the end numbers are inclusive", () => {
    expect(createRange(1, 11, 2)).toEqual([1, 3, 5, 7, 9, 11]);
  });
  test("Step is an optional parameter. If it is not provided, assume the step is 1", () => {
    expect(createRange(1, 3)).toEqual([1, 2, 3]);
  });
  test("Works with negative start/end ", () => {
    expect(createRange(-4, 7, 2)).toEqual([-4, -2, 0, 2, 4, 6]);
    expect(createRange(-9, -2, 3)).toEqual([-9, -6, -3]);
  });
  test("Works with decimals numbers", () => {
    expect(createRange(1.5, 3.6, 0.5)).toEqual([1.5, 2, 2.5, 3, 3.5]);
  });
  test("Works with negative step", () => {
    expect(createRange(1, -11, -3)).toEqual([1, -2, -5, -8, -11]);
  });
  test("Only one item in array ", () => {
    expect(createRange(1, -100, 2)).toEqual([1]);
    expect(createRange(1, 100, -2)).toEqual([1]);
    expect(createRange(1, 10, 20)).toEqual([1]);
    expect(createRange(10, 10, 20)).toEqual([10]);
  });
  test("Step = 0", () => {
    expect(createRange(10, 100, 0)).toEqual([10]);
  });
});
