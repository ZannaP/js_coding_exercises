export function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  return nums.map((el) => el * el);
}

export function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  /*
  let str = "";
  words.forEach((word) => {
    str = str + word[0].toUpperCase() + word.substring(1);
  });
  return str[0].toLowerCase() + str.substring(1);
  */
  //  use REDUCE
  let str = words.reduce(
    (result, current) => result + current[0].toUpperCase() + current.slice(1)
  );
  return str[0].toLowerCase() + str.slice(1);
}

export function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  /*
  let counter = 0;
  people.forEach((person) => {
    person.subjects.forEach((subj) => {
      if (subj.length > 0) ++counter;
    });
  });
  return counter;
  */
  return people.reduce((total, person) => total + person.subjects.length, 0);
}

export function checkIngredients(menu, ingredient) {
  /*
  let found = false;
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  menu.forEach((menuItem) => {
    if (menuItem.ingredients.findIndex((el) => el === ingredient) >= 0) {
      found = true;
    }
  });
  return found;
  */
  return menu.some((item) => item.ingredients.includes(ingredient));
}

export function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  let duplicates = new Set();
  arr1.forEach((item) => {
    if (arr2.findIndex((el) => el === item) >= 0) {
      duplicates.add(item);
    }
  });
  return Array.from(duplicates).sort();
}
