import { sumDigits } from "../challenges/exercise007-optional";
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
