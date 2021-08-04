// index of

function myIndexOf(string, searchTerm) {
  // Use a for loop to iterate over each element in the string
  for (let i = 0; i < string.length; i++) {
    // use an if statement to check each element in the string to see if it is equal the search term
    if (string[i] === searchTerm) {
      // i = index, each iteration will increase the value of index
      i = i + 1;
      return i;
    }
  }
  // After iterating the entire loop, if didn't find anything,
  return -1;
}

console.log(myIndexOf("This one is hard!", "is"));
