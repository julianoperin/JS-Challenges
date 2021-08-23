function reverseString(str) {
  // const newStr = str.split("").reverse().join("");
  const newStr = str.split("");
  // let reversed = "";

  //! FOR OF
  // for (let el of newStr) {
  //   reversed =  el  + reversed;
  // }
  //! FOR LOOP
  // for (let i = 0; i < newStr.length; ++i) {
  //   reversed = newStr[i] + reversed;
  // }

  //! REDUCE
  const reduceVersion = newStr.reduce((acc, cValue) => {
    return cValue + acc;
  }, "");

  return reduceVersion;
}

console.log(reverseString("Juliano"));
// j
// uj
// l + uj
