function reverseArray(str) {
  //! Reverse
  // const strArr = str.split("").reverse().join("");
  // return strArr;
  //! for loop decrement
  // let revString = "";
  // for (let i = str.length - 1; i >= 0; i--) {
  // return revString;
  //   //! -1 because the 0 index
  //   revString = revString + str[i]; //! str[i] can be use in arrays and in strings
  // }
  // return revString;
  //! for loop increment
  // let revString = "";
  // for (let i = 0; i <= str.length - 1; i++) {
  //   revString = str[i] + revString;
  //   console.log(str[i]);
  // }
  // return revString;
  //! For of loop
  //   let revString = "";
  //   for (const char of str) {
  //     revString = revString + char;
  //   }
  //   return revString;

  //! ForEach
  // revString = "";
  // str.split("").forEach((item) => {
  //   revString = item + revString;
  // });
  // return revString;

  //! Map
  // let revString = "";
  // str.split("").map((item) => (revString = item + revString));
  // return revString;

  //! Reduce
  return str.split("").reduce((accumulator, currentValue) => {
    return currentValue + accumulator;
  }, "");
}
console.log(reverseArray("hello"));
