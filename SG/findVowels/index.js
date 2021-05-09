// function findVowels(str) {
//   let numberOfVowels = 0;

//   for (let el of str.toLowerCase()) {
//     if (el === "a" || el === "e" || el === "i" || el === "o" || el === "u") {
//       numberOfVowels++;
//     }
//   }

//   return numberOfVowels;
// }

// console.log(findVowels("JavaScript"));

//! Second option
function findVowels(str) {
  let numberOfVowels = 0;
  const checker = ["a", "e", "i", "o", "u"];

  for (let el of str.toLowerCase()) {
    if (checker.includes(el)) {
      numberOfVowels++;
    }
  }

  return numberOfVowels;
}

console.log(findVowels("JavaScript"));

//! Third option with REGEX
// function findVowels(str) {
//   const matches = str.match(/[aeiou]/gi);
//   return matches ? matches.length : 0;
// }

// console.log(findVowels("JavaScript"));
