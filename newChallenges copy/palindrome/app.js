function palindrome(str) {
  const reversed = str.split("").reduce((acc, cValue) => {
    return cValue + acc;
  }, "");
  console.log(reversed);

  return str === reversed;
}

console.log(palindrome("racecar"));
