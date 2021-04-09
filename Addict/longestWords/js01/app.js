function longestWords(str) {
  const arr = str.split(" ");
  let size = 0;
  let longestWord = "";

  for (let word of arr) {
    if (word.length > size) {
      size = word.length;
      longestWord = word;
      console.log(`word: ${word}, longest: ${size}`);
    }
  }

  return `This is the longest word "${longestWord}."`;
}

console.log(longestWords("I am felling lucky today Marielle"));
