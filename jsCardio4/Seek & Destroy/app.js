//! Roman Numbers

// //! ES5
// function addAllNumbers() {
//   let total = 0;
//   const numbers = Array.prototype.slice.call(arguments);
//   for (let i = 0; i < numbers.length; i++) {
//     total += numbers[i];
//   }
//   return total;
// }

// console.log(addAllNumbers(2, 5, 6, 7));

//! ES6
function seekAndDestroy(arr, ...rest) {
  for (let i = 0; i < rest.length; i++) {
    for (let j = 0; i < arr.length; j++) {}
    console.log(i);
  }

  console.log(arr);
  console.log(rest);
}

console.log(seekAndDestroy([2, 3, 4, 6, 6, "hello"], 2, 6));
