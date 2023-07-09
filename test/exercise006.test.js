import {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered,
} from "../challenges/exercise006";

describe("sumMultiples", () => {
  test("it throws an error if not passed an array", () => {
    expect(() => {
      sumMultiples();
    }).toThrow("arr is required");
  });
  test("it throws an error if an argument is not an Array", () => {
    expect(() => {
      sumMultiples(3);
    }).toThrow("arr must be an Array");
  });
  test("it returns the sum of any numbers which are a multiple of 3 or 5", () => {
    expect(sumMultiples([3, 5, 7])).toBe(8);
    expect(sumMultiples([3, 5, 7, -3])).toBe(5);
  });
  test("if decimals", () => {
    expect(sumMultiples([3.0, 5, 7.5, 1])).toBe(8);
  });
  test("return 0 if there are no multiples of 3 or 5", () => {
    expect(sumMultiples([1, 2])).toBe(0);
    expect(sumMultiples([])).toBe(0);
  });
});

describe("isValidDNA", () => {
  test("it throws an error if not passed an argument", () => {
    expect(() => {
      isValidDNA();
    }).toThrow("str is required");
  });
  test("it throws an error if argument is not a string", () => {
    expect(() => {
      isValidDNA(5);
    }).toThrow("str must be a String");
  });
  test("return true if it is a valid DNA string. A valid DNA string may contain characters C, G, T or A only.", () => {
    expect(isValidDNA("CCGA")).toBe(true);
    expect(isValidDNA("CTTCGA")).toBe(true);
  });
  test("return false if it is not a valid DNA string.", () => {
    expect(isValidDNA("CCGAQ")).toBe(false);
    expect(isValidDNA("CTT CGA")).toBe(false);
  });
  test("return false if string is empty.", () => {
    expect(isValidDNA("")).toBe(false);
  });
});

describe("getComplementaryDNA", () => {
  test("it throws an error if not passed an argument", () => {
    expect(() => {
      getComplementaryDNA();
    }).toThrow("str is required");
  });
  test("should return a string of the complementary base pairs. In DNA, T always pairs with A, and C always pairs with G.", () => {
    expect(getComplementaryDNA("ACTGG")).toBe("TGACC");
  });
});

describe("isItPrime", () => {
  test("it throws an error if not passed an argument", () => {
    expect(() => {
      isItPrime();
    }).toThrow("n is required");
  });
  test("it throws an error if not a Number", () => {
    expect(() => {
      isItPrime("7.87");
    }).toThrow("n must be a Number");
  });
  test("should return false if not an integer", () => {
    expect(isItPrime(14.2)).toBe(false);
  });
  test("should return false if not a natural integer", () => {
    expect(isItPrime(-5)).toBe(false);
    expect(isItPrime(0)).toBe(false);
  });
  test("should return false for 1", () => {
    expect(isItPrime(1)).toBe(false);
  });
  test("should return false if NOT a prime number", () => {
    expect(isItPrime(4)).toBe(false);
    expect(isItPrime(15)).toBe(false);
  });
  test("should return true if is a prime number", () => {
    expect(isItPrime(2)).toBe(true);
    expect(isItPrime(1999)).toBe(true);
  });
});
describe("createMatrix", () => {
  test("it throws an error if not passed arguments", () => {
    expect(() => {
      createMatrix();
    }).toThrow("n is required");
  });
  test("it throws an error if not passed a fill argument", () => {
    expect(() => {
      createMatrix(7);
    }).toThrow("fill is required");
  });
  test("it returns an empty array when passed 0", () => {
    const result = createMatrix(0, "q");
    const expected = [];
    expect(result).toEqual(expected);
  });
  test("it returns a matrix 1 x 1 when passed 1", () => {
    const result = createMatrix(1, "q");
    const expected = [["q"]];
    expect(result).toEqual(expected);
  });
  test("it returns a matrix 3 x 3 when passed 3", () => {
    const result = createMatrix(3, "q");
    const expected = [
      ["q", "q", "q"],
      ["q", "q", "q"],
      ["q", "q", "q"],
    ];
    expect(result).toEqual(expected);
  });
});

describe("areWeCovered", () => {
  test("it throws an error if not passed arguments", () => {
    expect(() => {
      areWeCovered();
    }).toThrow("staff is required");
  });
  test("staff must be an array", () => {
    expect(() => {
      areWeCovered("a");
    }).toThrow("staff must be an Array");
  });
  test("it throws an error if not passed day", () => {
    expect(() => {
      areWeCovered([]);
    }).toThrow("day is required");
  });
  test("it throws an error if a day is not a valid day", () => {
    expect(() => {
      areWeCovered([], "aaa");
    }).toThrow("day is not a valid day");
  });
  test("it returns false if there are no staff at all", () => {
    expect(areWeCovered([], "Sunday")).toBe(false);
    expect(areWeCovered([], "Monday")).toBe(false);
    expect(areWeCovered([], "Tuesday")).toBe(false);
    expect(areWeCovered([], "Wednesday")).toBe(false);
    expect(areWeCovered([], "Thursday")).toBe(false);
    expect(areWeCovered([], "Friday")).toBe(false);
    expect(areWeCovered([], "Saturday")).toBe(false);
  });
  test("it returns false if there are less than 3 staff members per day", () => {
    const staff = [
      { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
      { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
    ];
    expect(areWeCovered(staff, "Sunday")).toBe(false);
  });
  test("it returns true if there are 3 or more staff members per day", () => {
    const staff = [
      { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
      { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
      { name: "Bob", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
      { name: "Bill", rota: ["Saturday", "Sunday", "Thursday", "Wednesday"] },
    ];
    expect(areWeCovered(staff, "Sunday")).toBe(true);
  });
});
