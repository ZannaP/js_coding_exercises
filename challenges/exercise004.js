export function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  return nums.filter((el) => el < 1);
}

export function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  return names.filter((el) => el[0] === char);
}

export function findVerbs(words) {
  if (!words) throw new Error("words is required");
  return words.filter((el) => el.slice(0, 3) === "to ");
}

export function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  return nums.filter((el) => Number.isInteger(el));
}

export function getCities(users) {
  if (!users) throw new Error("users is required");
  return users.map((el) => el.data.city.displayName);
}

export function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  return nums.map((el) => Math.round(100 * Math.sqrt(el)) / 100);
}

export function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  return sentences.filter((el) => el.toUpperCase().includes(str.toUpperCase()));
}

export function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  return triangles.map((el) => {
    el.sort((a, b) => {
      return b - a;
    });
    return el[0];
  });
}
