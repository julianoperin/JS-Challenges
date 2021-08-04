// function isPalindrome(str) {
//!reverse
// const revString = str.split("").reverse().join("");
// return revString === str ? "It is Palindrome" : "It is not Palindrome";
//! for loop decrement
// let revString = "";
// for (let i = str.length - 1; i >= 0; i--) {
//   revString = revString + str[i];
// }
// if (str === revString) return "It is palindrome";
// if (str !== revString) return "It is NOT palindrome";
//! for loop increment
// let revString = "";
// for (let i = 0; i <= str.length - 1; i++) {
//   revString = str[i] + revString;
// }
// if (str === revString) return "It is palindrome";
// if (str !== revString) return "It is NOT palindrome";
//! for of
// let revString = "";
// for (let char of str) {
//   revString = char + revString;
// }
// return revString === str ? "It is Palindrome" : "It is not Palindrome";
//! forEach
// let revString = "";
// str.split("").forEach((item) => {
//   revString = item + revString;
// });
// return revString === str ? "It is Palindrome" : "It is not Palindrome";
//! map
// let revString = "";
// str.split("").map((item) => {
//   revString = item + revString;
// });
// return revString === str ? "It is Palindrome" : "It is not Palindrome";
//! reduce
//   const newReduceArr = str.split("").reduce((acc, currentValue) => {
//     return currentValue + acc;
//   }, "");
//   return newReduceArr === str ? "Palindrome" : "NOT Palindrome";
// }

function isPalindrome(str) {
  let result = "";
  const reversed = str.split("").forEach((item) => {
    result = item + result;
  });
  return result === str;
}

console.log(isPalindrome("racecarr"));
