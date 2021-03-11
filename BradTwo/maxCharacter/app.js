function maxChar(str) {
  const charObj = {};
  maxNum = 0;
  maxChar = "";

  str.split("").forEach((item) => {
    if (charObj[item]) {
      charObj[item]++;
    } else {
      charObj[item] = 1;
    }
  });
  console.log(charObj);

  for (let i in charObj) {
    console.log(charObj[i]);
    if (charObj[i] > maxNum) {
      maxNum = charObj[i];
      maxChar = i;
    }
  }
  return `The maximum char is ${maxChar}, and the total is ${maxNum}`;
}

console.log(maxChar("javascript"));
