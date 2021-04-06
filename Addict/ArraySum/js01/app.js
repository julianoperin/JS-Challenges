function arraySum(str) {
  const sorted = str.sort((a, b) => a - b);
  const arr = sorted.reduce((acc, cValue) => cValue + acc, 0);
  const lastIndex = str[str.length - 1];
  const sumArr = arr - lastIndex;

  return sumArr === lastIndex;
}

console.log(arraySum([1, 2, 3, 4, 11]));

// sort array
// use reduce to sum everything
// subtract the last index value from the array
// compare the sum to the last value
