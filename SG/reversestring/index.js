// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'
//! Simple Method
// function reverse(str) {
//   return str.split("").reverse().join("");
// }

// console.log(reverse("hello"));

// module.exports = reverse;

// //! Second Method (FOR LOOP) INCREMENT
// function reverse(str) {
//   const newArr = str.split("");
//   let reversed = "";
//   for (let i = 0; i < newArr.length; i++) {
//     reversed = newArr[i] + reversed;
//   }
//   return reversed;
// }

// console.log(reverse("hello"));

//! Second Method (FOR LOOP) DECREMENT
// function reverse(str) {
//   const newArr = str.split("");
//   let reversed = "";
//   for (let i = newArr.length - 1; i >= 0; i--) {
//     reversed = reversed + newArr[i];
//   }
//   return reversed;
// }

// console.log(reverse("hello"));

// //! FOR OF
// function reverse(str) {
//   let reversed = "";
//   for (let char of str) {
//     reversed = char + reversed;
//   }
//   return reversed;
// }

// console.log(reverse("apple"));

// //! REDUCE
// function reverse(str) {
//   return str.split("").reduce((acc, curValue) => {
//     return curValue + acc;
//   }, "");
// }

// console.log(reverse("apple"));

//! FOREACH
// function reverse(str) {
//   let reversed = "";
//   str.split("").forEach((el) => {
//     reversed = el + reversed;
//   });
//   return reversed;
// }

// function reverse(str) {
//   let reversed = "";
//   str.split("").forEach((el) => {
//     reversed = el + reversed;
//   });
//   return reversed;
// }
