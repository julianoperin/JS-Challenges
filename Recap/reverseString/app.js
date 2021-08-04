//!Reverse an Integer

// function reverseString(string) {
//   let result = "";
//   // const strArr = string.split("");
//   for (let char of string) {
//     result = char + result;
//     // console.log(string[i]);
//   }
//   return result;
// }

// 1-) Reverse method
// function reverseString(string) {
//   const reversed = string.split("").reverse();
//   return reversed.join("");
// }
// 2-) for loop
// function reverseString(string) {
//   let result = "";
//   const strArr = string.split("");
//   for (let i = 0; i <= strArr.length - 1; i++) {
//     result = strArr[i] + result;
//   }
//   return result;
// }
// 3-) for of
// function reverseString(string) {
//   let result = "";
//   // const strArr = string.split("");
//   for (let char of string) {
//     result = char + result;
//     // console.log(string[i]);
//   }
//   return result;
// }
// 4-) for each
// function reverseString(string) {
//   let result = "";
//   string.split("").forEach((item) => {
//     result = item + result;
//   });
//   return result;
// }
//  5-)

console.log(reverseString("juliano"));
