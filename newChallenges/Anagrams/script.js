//! Anagrams
// > build a helper function to clean and store the string inside an obj with Key Value pairs
// > Compare if the keys are equal
// > loop over on obj and check to see if they are equal

// function checkAnagrams(stringA, stringB) {
//   const charMapA = cleanFunction(stringA);
//   const charMapB = cleanFunction(stringB);

//   if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
//     return false;
//   }

//   for (let char in charMapA) {
//     if (charMapA[char] !== charMapB[char]) {
//       return false;
//     }
//   }

//   return true;
// }

// function cleanFunction(str) {
//   const charMap = {};
//   for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
//     if (!charMap[char]) {
//       charMap[char] = 1;
//     } else {
//       charMap[char]++;
//     }
//   }
//   return charMap;
// }

// console.log(checkAnagrams('Juliano', 'nailuJ'));
