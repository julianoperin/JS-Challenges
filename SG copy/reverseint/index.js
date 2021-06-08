// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// transform to string, reverse, transform back to number, compare
// use Math.sign()

function intReverse(n) {
  const reversedInt = n
    .toString()
    .split("")
    .reduce((acc, cValue) => cValue + acc, "");
  return parseInt(reversedInt) * Math.sign(n);
}

console.log(intReverse(981));

// function reverseInt(n) {
//   const reversed = n.toString().split("").reverse().join("");
//   return parseInt(reversed) * Math.sign(n);
// }
// console.log(reverseInt(-0005));
