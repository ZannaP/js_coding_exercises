export const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  const indexOfN = nums.indexOf(n);
  if (indexOfN === -1 || indexOfN === nums.length - 1) {
    return null;
  } else {
    return nums[indexOfN + 1];
  }
};

export const count1sand0s = (str) => {
  if (str === undefined) throw new Error("str is required");
  let charsArray = str.split("");
  let counts = { 0: 0, 1: 0 };
  charsArray.map((el) => {
    if (el === "0") {
      counts["0"]++;
    } else {
      if (el === "1") counts["1"]++;
    }
  });
  return counts;
};

export const reverseNumber = (n) => {
  if (n === undefined) throw new Error("n is required");
  let strReverseNumber = n.toString().split("").reverse().join("");
  return Number(strReverseNumber);
};

export const sumArrays = (arrs) => {
  if (arrs === undefined) throw new Error("arrs is required");
  let sum = 0;
  arrs.forEach((el) => {
    let s = 0;
    el.forEach((e) => {
      s += e;
    });
    sum += s;
  });
  return sum;
};

export const arrShift = (arr) => {
  if (arr === undefined) throw new Error("arr is required");
  if (arr.length > 1) {
    const firstEl = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = firstEl;
  }
  return arr;
};

export const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  for (let key in haystack) {
    if (
      haystack[key].toString().toUpperCase().indexOf(searchTerm.toUpperCase()) >
      -1
    ) {
      return true;
    }
  }
  return false;
};

export const getWordFrequencies = (str) => {
  if (str === undefined) throw new Error("str is required");
  const punctuation = [".", ",", "!", "-", "?", ":", ";"];
  let frequencies = {};
  punctuation.forEach((el) => (str = str.replaceAll(el, "")));
  str
    .toLowerCase()
    .split(" ")
    .forEach((el) => {
      if (frequencies[el] === undefined) {
        frequencies[el] = 1;
      } else {
        frequencies[el] += 1;
      }
    });
  return frequencies;
};
