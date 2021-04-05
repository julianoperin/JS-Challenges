function longestWord(str) {
  let words = str.split(" ");
  let longestWord = "";
  console.log(words);

  // FOR OF METHOD
  //for(let word of words){
  //if(word.length > longestWord.length){
  //longestWord = word;
  //}
  //}

  //SIMPLE FOR LOOP
  //for (let i = 0; i < words.length; i++){
  // if(words[i].length > longestWord.length){
  //    longestWord = i;
  //  }
  //}
  //console.log(words.length);

  //USING MAP
  words.map((word) => {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  });

  return longestWord;
}

console.log(longestWord("I love bacon"));
console.log(longestWord("I went straight to the beach"));
