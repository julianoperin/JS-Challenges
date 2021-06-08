// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// function maxChar(str) {
//   const charMap = {};
//   let maxChar = "";
//   let maxNumber = 0;

//   for (let char of str) {
//     if (charMap[char]) {
//       charMap[char]++;
//     } else {
//       charMap[char] = 1;
//     }
//   }

//   for (let el in charMap) {
//     if (charMap[el] > maxNumber) {
//       maxNumber = charMap[el];
//       maxChar = el;
//     }
//   }

//   console.log(maxNumber, maxChar);
//   return maxChar;
// }

// console.log(maxChar("apple"));

function maxChar(str) {
  const charMap = {};
  let num = 0;
  let letter = "";

  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  for (let el in charMap) {
    if (charMap[el] > num) {
      num = charMap[el];
      letter = el;
    }
  }
  return letter;
}

console.log(maxChar("helicopter"));

// function maxChar(str) {
//   const newArr = str.split("");
//   const charObj = {};
//   let max = 0;
//   let letter = "";

//   for (let i = 0; i < newArr.length; i++) {
//     if (charObj[newArr[i]]) {
//       charObj[newArr[i]]++;
//     } else {
//       charObj[newArr[i]] = 1;
//     }
//   }

//   for (let el in charObj) {
//     if (charObj[el] > 0) {
//       max = charObj[el];
//       letter = el;
//     }
//   }

//   console.log(max);
//   return letter;
// }

// console.log(maxChar("apple 1231111"));

// function maxChar(str) {
//   const charObj = {};
//   let maxLetter = "";
//   let totalTimes = 0;

//   for (let char of str) {
//     if (charObj[char]) {
//       charObj[char]++;
//     } else {
//       charObj[char] = 1;
//     }
//   }

//   for (let char in charObj) {
//     if (char > maxLetter) {
//       maxLetter = char;
//       totalTimes = charObj[char];
//     }
//     console.log(char); //letter
//     console.log(charObj[char]); // result
//   }

//   console.log("result", maxLetter, totalTimes);
// }

// console.log(maxChar("apple"));
