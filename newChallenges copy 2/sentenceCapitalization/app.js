function capitalize(str) {
  const newStr = str.split(" ");
  const capitalized = [];
  for (let word of newStr) {
    capitalized.push(word[0].toUpperCase() + word.slice(1));
  }

  return capitalized.join(" ");
}

console.log(capitalize("i love javaScript!"));
console.log(capitalize("debora is a crazy girl!"));

const word = "testing the new library called next.js";

console.log(word.slice(0, 15) + "...");
