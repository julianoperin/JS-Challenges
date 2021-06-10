// --- Directions
// Check to see if two provided strings are anagrams of each other.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  const alfa = helper(stringA);
  const bravo = helper(stringB);
  console.log(alfa);
  console.log(bravo);

  if (Object.keys(alfa).length !== Object.keys(bravo).length) {
    return false;
  }

  for (let char in alfa) {
    if (alfa[char] !== alfa[char]) {
      return false;
    }
  }
  return true;
}

function helper(str) {
  charObj = {};
  for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
    if (charObj[char]) {
      charObj[char]++;
    } else {
      charObj[char] = 1;
    }
  }
  return charObj;
}
console.log(anagrams("rail safety", "fairy tales"));

// const word = "HI THERE!!!";

// const newWord = word.replace(/[^\w]/g, "").toLowerCase();

// console.log(newWord);
