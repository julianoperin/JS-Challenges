// --- CAPITALIZE
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short phrase') --> 'A Short phrase'

// REPLACE METHOD
function capitalize(str) {
  const words = [];
  const newStr = str.split(" ");

  for (let word of newStr) {
    words.push(word.replace(word[0], word[0].toUpperCase()));
  }

  return words.join(" ");
}
console.log(capitalize("a short phrase")); // A Short Phrase

// SLICE
function capitalize(str) {
  const words = [];
  const newStr = str.split(" ");

  for (let word of newStr) {
    words.push(word[0].toUpperCase() + word.slice(1));
  }

  return words.join(" ");
}
console.log(capitalize("a short phrase")); // A Short Phrase

// Brute Force
function capitalize(str) {
  let result = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === " ") {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }

  return result;
}
console.log(capitalize("a short phrase")); // A Short Phrase
