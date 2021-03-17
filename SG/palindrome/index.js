// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

//! REVERSE METHOD
// function palindrome(str) {
//     const newArr = str.split("").reverse("").join("");
//   return str === reversed;
// }

//! REDUCE METHOD
// function palindrome(str) {
//   const newArr = str.split("").reduce((acc, curValue) => {
//     return curValue + acc;
//   }, "");
//  return str === reversed;
// }
// console.log(palindrome("abba"));

//! FOR OF
// function palindrome(str) {
//   reversed = "";
//   for (let char of str) {
//     reversed = char + reversed;
//   }

//   return str === reversed;
// }
// console.log(palindrome("abba"));

//! EVERY METHOD

// function palindrome(str) {
//   return str.split("").every((char, i) => {
//     return char === str[str.length - i - 1];
//   });
// }

// console.log(palindrome("abcba"));
