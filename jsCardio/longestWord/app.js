//! LONGEST WORD
// Return the longest word of a string

function longestWord(str) {
  //! Accept only letters and numbers and transform in an array
  const newArr = str.toLowerCase().match(/[a-z0-9]+/g);

  //! sort by length
  const sorted = newArr.sort((a, b) => {
    return b.length - a.length;
  });

  // If multiple words, put into array
  const longestWordArr = sorted.filter((item) => {
    return item.length === sorted[0].length;
  });

  //! check if more than one value
  if (longestWordArr.length === 1) return longestWordArr[0];
  if (longestWordArr.length > 1) return longestWordArr;
}

console.log(longestWord("I love when it is raining!"));
