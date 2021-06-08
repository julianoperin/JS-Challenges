// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//! First Method
// function reverseString(str) {
//   return str.split("").reverse().join("");
// }

//! REDUCE METHOD
// function reverseString(str) {
//   return str.split("").reduce((acc, cValue) => cValue + acc, "");
// }

//! For OF
// function reverseString(str) {
//   let reversed = "";
//   for (let el of str) {
//     reversed = el + reversed;
//   }
//   return reversed;
// }
//! Simple Loop
// function reverseString(str) {
//   const newArr = str.split("");
//   let reversed = "";
//   for (let i = 0; i < newArr.length; i++) {
//     reversed = newArr[i] + reversed;
//   }
//   return reversed;
// }

//! FOR EACH
// function reverseString(str) {
//   let reversed = "";
//   str.split("").forEach((item) => {
//     reversed = item + reversed;
//   });
//   return reversed;
// }

//! MAP
// function reverseString(str) {
//   let reversed = "";
//   str.split("").map((item) => {
//     reversed = item + reversed;
//   });
//   return reversed;
// }

console.log(reverseString("Hello"));
