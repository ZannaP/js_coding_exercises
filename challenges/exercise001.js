// 👉 	Each function below has some test cases in `exercise001.test.js`
// 		You can run these tests with `npm test`.
//  	All the test cases must pass for each function.

// Note: Be sure to read the corresponding .md file for each exercise, in the docs folder. 📘 👍

export function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  return word[0].toUpperCase() + word.substring(1);
}

export function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  return firstName[0] + "." + lastName[0];
}

export function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  return Math.round(originalPrice * (100 + parseFloat(vatRate))) / 100;
}

export function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  return Math.round(originalPrice * (100 - parseFloat(reduction))) / 100;
}

export function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  const strLength = str.length;
  if (strLength % 2 == 0) {
    // if even
    const start = strLength / 2 - 1;
    return str.slice(start, start + 2);
  } else {
    // if odd
    return str[Math.floor(strLength / 2)];
  }
}

export function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  return word.split("").reverse().join("");
}

export function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  return words.map((w) => reverseWord(w));
}

export function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  let linuxUsersCount = 0;
  for (const u of users) {
    if (u.type == "Linux") {
      linuxUsersCount++;
    }
  }
  return linuxUsersCount;
}

export function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  let sum = 0;
  scores.forEach((el) => (sum = sum + el));
  return Math.round((100 * sum) / scores.length) / 100;
}

export function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  let str = "";
  if (n % 3 == 0) {
    str = "fizz";
  }
  if (n % 5 == 0) {
    str = str + "buzz";
  }
  if (n % 3 != 0 && n % 5 != 0) {
    return n;
  } else return str;
}
