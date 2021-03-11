//!Reverse an Integer

function reverseInt(int) {
  //!Reverse an integer
  const newInt = int.toString().split("").reverse().join("");
  return parseInt(newInt);

  //!Reverse an integer with negative value
  // const newInt = int.toString().split("").reverse().join("");
  // return parseInt(newInt) * Math.sign(int);
}

console.log(reverseInt(12345));
