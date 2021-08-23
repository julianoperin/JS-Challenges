function reverseInt(n) {
  const reversed = n
    .toString()
    .split("")
    .reduce((acc, cValue) => cValue + acc, "");

  if (n < 0) {
    return parseInt(reversed) * -1;
  }

  return parseInt(reversed);
}

console.log(reverseInt(-145));
console.log(reverseInt(874));
