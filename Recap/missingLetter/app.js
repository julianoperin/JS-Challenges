function missingLetter(str) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  const chars = str.split("");

  for (let i = 0; i <= chars.length; i++) {
    if (chars[i] !== alphabet[i]) {
      return alphabet[i];
    }
  }

  return undefined;
}

console.log(missingLetter("abcdef"));
