//! Roman Numbers

//! ES5
function addAllNumbers() {
  let total = 0;
  const numbers = Array.prototype.slice.call(arguments);
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}

console.log(addAllNumbers(2, 5, 6, 7));

//! ES6
// function addAllNumbers() {
//   const numbers = Array.from(arguments).reduce((acc, cV) => cV + acc, 0);
//   return numbers;
// }

// console.log(addAllNumbers(2, 5, 6, 7));
