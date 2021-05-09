// --- Directions
// Check to see if two provided strings are anagrams of each other.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// > loop over two strings and build a new object with key value pairs
//! FIRST SOLUTION
// function anagrams(stringA, stringB) {
//   const aCharMap = buildCharMap(stringA);
//   const bCharMap = buildCharMap(stringB);

//   if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//     return false;
//   }

//   for (let char in aCharMap) {
//     if (aCharMap[char] !== bCharMap[char]) {
//       return false;
//     }
//   }

//   return true;
// }

// function buildCharMap(str) {
//   const charMap = {};
//   for (let el of str.replace(/[^\w]/g, '').toLowerCase()) {
//     if (!charMap[el]) {
//       charMap[el] = 1;
//     } else {
//       charMap[el]++;
//     }
//   }
//   return charMap;
// }
// console.log(anagrams('rail safety', 'fairy tales'));
//!

//! SECOND SOLUTION
function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
  const sorted = str
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('');

  return sorted;
}

console.log(anagrams('rail safety', 'fairy tales'));
